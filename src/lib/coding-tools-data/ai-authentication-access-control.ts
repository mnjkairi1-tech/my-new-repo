
import type { Tool } from '@/lib/types';

export const aiAuthenticationAccessControlTools: Tool[] = [
    { name: 'Auth0', description: 'Identity platform for developers.', url: 'https://auth0.com/', image: 'https://picsum.photos/seed/auth0-auth/600/400', dataAiHint: 'identity platform', pricing: 'Freemium' },
    { name: 'Okta', description: 'The World\'s #1 Identity Platform.', url: 'https://www.okta.com/', image: 'https://picsum.photos/seed/okta-auth/600/400', dataAiHint: 'identity cloud', pricing: 'Paid' },
    { name: 'Firebase Authentication', description: 'Simple, free, multi-platform sign-in.', url: 'https://firebase.google.com/docs/auth', image: 'https://picsum.photos/seed/firebase-auth/600/400', dataAiHint: 'firebase auth', pricing: 'Free' },
    { name: 'Clerk', description: 'The most complete user management platform.', url: 'https://clerk.com/', image: 'https://picsum.photos/seed/clerk-auth/600/400', dataAiHint: 'user management', pricing: 'Freemium' },
    { name: 'SuperTokens', description: 'Open source user authentication.', url: 'https://supertokens.com/', image: 'https://picsum.photos/seed/supertokens/600/400', dataAiHint: 'open source auth', pricing: 'Free' },
    { name: 'Keycloak', description: 'Open source identity and access management.', url: 'https://www.keycloak.org/', image: 'https://picsum.photos/seed/keycloak/600/400', dataAiHint: 'open source iam', pricing: 'Free' },
    { name: 'Ping Identity', description: 'Intelligent identity solutions for the enterprise.', url: 'https://www.pingidentity.com/', image: 'https://picsum.photos/seed/ping-identity/600/400', dataAiHint: 'enterprise identity', pricing: 'Paid' },
    { name: 'AWS Cognito', description: 'Identity and access management for web and mobile apps.', url: 'https://aws.amazon.com/cognito/', image: 'https://picsum.photos/seed/cognito/600/400', dataAiHint: 'aws identity', pricing: 'Freemium' },
    { name: 'Microsoft Entra ID', description: 'Cloud identity and access management solution.', url: 'https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id', image: 'https://picsum.photos/seed/entra-id/600/400', dataAiHint: 'azure ad', pricing: 'Paid' },
    { name: 'Ory', description: 'Open source identity infrastructure.', url: 'https://www.ory.sh/', image: 'https://picsum.photos/seed/ory-iam/600/400', dataAiHint: 'identity infrastructure', pricing: 'Free' },
];
