
import type {NextConfig} from 'next';
import withPWA from '@ducanh2912/next-pwa';

const pwaConfig = {
  dest: 'public',
  register: false,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
};

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'picsum.photos',
        },
        {
            protocol: 'https',
            hostname: 'images.unsplash.com',
        },
        {
            protocol: 'https',
            hostname: 'i.postimg.cc',
        },
        {
            protocol: 'https',
            hostname: 'upload.wikimedia.org',
        },
        {
            protocol: 'https',
            hostname: 'www.quora.com',
        },
        {
            protocol: 'https',
            hostname: 'www.perplexity.ai',
        },
        {
            protocol: 'https',
            hostname: 'huggingface.co',
        },
        {
            protocol: 'https',
            hostname: 'you.com',
        },
        {
            protocol: 'https',
            hostname: 'character.ai',
        },
        {
            protocol: 'https',
            hostname: 'pi.ai',
        },
        {
            protocol: 'https',
            hostname: 'www.jasper.ai',
        },
        {
            protocol: 'https',
            hostname: 'mycroft.ai',
        },
        {
            protocol: 'https',
            hostname: 'www.soundhound.com',
        },
        {
            protocol: 'https',
            hostname: 'www.databotapp.com',
        },
        {
            protocol: 'https',
            hostname: 'www.google.com',
        },
        {
            protocol: 'https',
            hostname: 'intercom.com',
        },
        {
            protocol: 'https',
            hostname: 'zendesk.com',
        },
        {
            protocol: 'https',
            hostname: 'tidio.com',
        },
        {
            protocol: 'https',
            hostname: 'livechat.com',
        },
        {
            protocol: 'https',
            hostname: 'freshworks.com',
        },
        {
            protocol: 'https',
            hostname: 'drift.com',
        },
        {
            protocol: 'https',
            hostname: 'helpscout.com',
        },
        {
            protocol: 'https',
            hostname: 'liveperson.com',
        },
        {
            protocol: 'https',
            hostname: 'bold360.com',
        },
        {
            protocol: 'https',
            hostname: 'genesys.com',
        },
        {
            protocol: 'https',
            hostname: 'salesforce.com',
        },
        {
            protocol: 'https',
            hostname: 'exceed.ai',
        },
        {
            protocol: 'https',
            hostname: 'verse.io',
        },
        {
            protocol: 'https',
            hostname: 'mobilemonkey.com',
        },
        {
            protocol: 'https',
            hostname: 'hubspot.com',
        },
        {
            protocol: 'https',
            hostname: 'botsify.com',
        },
        {
            protocol: 'https',
            hostname: 'verloop.io',
        },
        {
            protocol: 'https',
            hostname: 'qualified.com',
        },
        {
            protocol: 'https',
            hostname: 'hellotars.com',
        },
        {
            protocol: 'https',
            hostname: 'collect.chat',
        },
        {
            protocol: 'https',
            hostname: 'landbot.io',
        },
        {
            protocol: 'https',
            hostname: 'chatfuel.com',
        },
        {
            protocol: 'https',
            hostname: 'manychat.com',
        },
        {
            protocol: 'https',
            hostname: 'gobot.io',
        },
        {
            protocol: 'https',
            hostname: 'chatbot.com',
        },
        {
            protocol: 'https',
            hostname: 'ada.cx',
        },
        {
            protocol: 'https',
            hostname: 'gorgias.com',
        },
        {
            protocol: 'https',
            hostname: 'octaneai.com',
        },
        {
            protocol: 'https',
            hostname: 'jumper.ai',
        },
        {
            protocol: 'https',
            hostname: 'wati.io',
        },
        {
            protocol: 'https',
            hostname: 'twilio.com',
        },
        {
            protocol: 'https',
            hostname: 'messagebird.com',
        },
        {
            protocol: 'https',
            hostname: 'gupshup.io',
        },
        {
            protocol: 'https',
            hostname: 'yellow.ai',
        },
        {
            protocol: 'https',
            hostname: 'bots.business',
        },
        {
            protocol: 'https',
            hostname: 'xenioo.com',
        },
        {
            protocol: 'https',
            hostname: 'rebot.me',
        },
        {
            protocol: 'https',
            hostname: 'pandorabots.com',
        },
        {
            protocol: 'https',
            hostname: 'activechat.ai',
        },
        {
            protocol: 'https',
            hostname: 'snatchbot.me',
        },
        {
            protocol: 'https',
            hostname: 'dialogflow.cloud.google.com',
        },
        {
            protocol: 'https',
            hostname: 'aws.amazon.com',
        },
        {
            protocol: 'https',
            hostname: 'kore.ai',
        },
        {
            protocol: 'https',
            hostname: 'amelia.ai',
        },
        {
            protocol: 'https',
            hostname: 'haptik.ai',
        },
        {
            protocol: 'https',
            hostname: 'cognigy.com',
        },
        {
            protocol: 'https',
            hostname: 'ibm.com',
        },
        {
            protocol: 'https',
            hostname: 'rasa.com',
        },
        {
            protocol: 'https',
            hostname: 'tars.com'
        }
    ]
  },
   webpack: (config, { isServer }) => {
    // See https://webpack.js.org/configuration/experiments/
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
      ...config.experiments,
    };

    return config;
  },
};

const withPWAConfig = withPWA(pwaConfig);

export default withPWAConfig(nextConfig);
