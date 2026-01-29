# Instructions for Native Google Sign-In Integration

To make Google Sign-In work within a custom web viewer, you need to handle the authentication flow natively in your app (Flutter, Swift, Kotlin, etc.) and then pass the authentication credentials back to the web view. The standard web pop-up/redirect flows are often blocked by web viewers for security reasons.

Here is the recommended process:

### Step 1: Web App -> Native App (Request Sign-In)

The web app is already configured to send a message to the native app when the "Sign in with Google" button is clicked. Your native app needs to listen for this message.

-   **If using a generic web viewer:** Listen for a `postMessage` event. The data will be a JSON string: `{"type":"requestGoogleSignIn"}`.
-   **If using `flutter_inappwebview`:** The web app will call a handler named `requestGoogleSignIn`. You should register this handler in your Flutter code.

### Step 2: Native App (Perform Google Sign-In)

When your native listener receives the `requestGoogleSignIn` message:

1.  Use the appropriate Firebase Authentication SDK for your platform (e.g., `google_sign_in` and `firebase_auth` for Flutter) to start the native Google Sign-In flow.
2.  This will open the native Google account selection screen.
3.  Upon successful sign-in, you will receive an `idToken` (and usually an `accessToken`) from Google.

### Step 3: Native App -> Your Backend (Get Custom Token)

This is a critical security step. **Do not** send the Google `idToken` directly to the web view.

1.  Send the `idToken` you received from the native Google Sign-In to your backend server over a secure HTTPS connection.
2.  On your backend, use the **Firebase Admin SDK** to:
    a.  Verify the `idToken` to ensure it's valid and from Google.
    b.  Create a **Custom Firebase Token** for the user's UID using `admin.auth().createCustomToken(uid)`.

Your backend code would look something like this (Node.js example):

```javascript
// Example backend function (e.g., in a Cloud Function or your server)
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK with your service account credentials
// ...

app.post('/createCustomToken', async (req, res) => {
  const { idToken } = req.body;

  try {
    // Verify the Google ID token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;

    // Create a custom token
    const customToken = await admin.auth().createCustomToken(uid);

    res.status(200).send({ customToken });
  } catch (error) {
    console.error('Error creating custom token:', error);
    res.status(401).send('Authentication failed');
  }
});
```

### Step 4: Native App <- Your Backend (Receive Custom Token)

Your backend will send the newly created **Custom Firebase Token** back to your native app.

### Step 5: Native App -> Web App (Complete Sign-In)

Now that your native app has the Custom Firebase Token, it must execute a piece of JavaScript inside the web viewer to pass this token back to the web app.

The web app has a global function ready to receive this token: `window.handleCustomTokenSignIn(token)`.

Execute the following JavaScript snippet in your web view, replacing `'THE_CUSTOM_TOKEN'` with the actual token you received from your backend:

```javascript
window.handleCustomTokenSignIn('THE_CUSTOM_TOKEN');
```

This will trigger the `signInWithCustomToken` function within the web app's Firebase instance, securely logging the user in without any redirects or pop-ups, and finally resolving the "blank page" issue.
