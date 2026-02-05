
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
            hostname: 'tars.com',
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
            hostname: 'askspoke.com',
        },
        {
            protocol: 'https',
            hostname: 'moveworks.com',
        },
        {
            protocol: 'https',
            hostname: 'leena.ai',
        },
        {
            protocol: 'https',
            hostname: 'clevy.io',
        },
        {
            protocol: 'https',
            hostname: 'samsonco.com',
        },
        {
            protocol: 'https',
            hostname: 'talla.com',
        },
        {
            protocol: 'https',
            hostname: 'capacity.com',
        },
        {
            protocol: 'https',
            hostname: 'getguru.com',
        },
        {
            protocol: 'https',
            hostname: 'slab.com',
        },
        {
            protocol: 'https',
            hostname: 'stonly.com',
        },
        {
            protocol: 'https',
            hostname: 'helpjuice.com',
        },
        {
            protocol: 'https',
            hostname: 'document360.com',
        },
        {
            protocol: 'https',
            hostname: 'bloomfire.com',
        },
        {
            protocol: 'https',
            hostname: 'tettra.com',
        },
        {
            protocol: 'https',
            hostname: 'calendly.com',
        },
        {
            protocol: 'https',
            hostname: 'bizzabo.com',
        },
        {
            protocol: 'https',
            hostname: 'zoom.ai',
        },
        {
            protocol: 'https',
            hostname: 'claralabs.com',
        },
        {
            protocol: 'https',
            hostname: 'sembly.ai',
        },
        {
            protocol: 'https',
            hostname: 'vyte.in',
        },
        {
            protocol: 'https',
            hostname: 'acuityscheduling.com',
        },
        {
            protocol: 'https',
            hostname: 'zoho.com',
        },
        {
            protocol: 'https',
            hostname: 'dashbot.io',
        },
        {
            protocol: 'https',
            hostname: 'chatbase.com',
        },
        {
            protocol: 'https',
            hostname: 'botanalytics.co',
        },
        {
            protocol: 'https',
            hostname: 'janis.ai',
        },
        {
            protocol: 'https',
            hostname: 'monkeylearn.com',
        },
        {
            protocol: 'https',
            hostname: 'brandwatch.com',
        },
        {
            protocol: 'https',
            hostname: 'talkwalker.com',
        },
        {
            protocol: 'https',
            hostname: 'repustate.com',
        },
        {
            protocol: 'https',
            hostname: 'clarabridge.com',
        },
        {
            protocol: 'https',
            hostname: 'lexalytics.com',
        },
        {
            protocol: 'https',
            hostname: 'zapier.com',
        },
        {
            protocol: 'https',
            hostname: 'make.com',
        },
        {
            protocol: 'https',
            hostname: 'ifttt.com',
        },
        {
            protocol: 'https',
            hostname: 'n8n.io',
        },
        {
            protocol: 'https',
            hostname: 'bardeen.ai',
        },
        {
            protocol: 'https',
            hostname: 'powerautomate.microsoft.com',
        },
        {
            protocol: 'https',
            hostname: 'uipath.com',
        },
        {
            protocol: 'https',
            hostname: 'automationanywhere.com',
        },
        {
            protocol: 'https',
            hostname: 'blueprism.com',
        },
        {
            protocol: 'https',
            hostname: 'robocorp.com',
        },
        {
            protocol: 'https',
            hostname: 'trello.com',
        },
        {
            protocol: 'https',
            hostname: 'asana.com',
        },
        {
            protocol: 'https',
            hostname: 'monday.com',
        },
        {
            protocol: 'https',
            hostname: 'clickup.com',
        },
        {
            protocol: 'https',
            hostname: 'kissflow.com',
        },
        {
            protocol: 'https',
            hostname: 'processmaker.com',
        },
        {
            protocol: 'https',
            hostname: 'nintex.com',
        },
        {
            protocol: 'https',
            hostname: 'houndify.com',
        },
        {
            protocol: 'https',
            hostname: 'mindbehind.com',
        },
        {
            protocol: 'https',
            hostname: 'chatwoot.com',
        },
        {
            protocol: 'https',
            hostname: 'rocket.chat',
        },
        {
            protocol: 'https',
            hostname: 'mattermost.com',
        },
        {
            protocol: 'https',
            hostname: 'agentgpt.reworkd.ai',
        },
        {
            protocol: 'https',
            hostname: 'adept.ai',
        },
        {
            protocol: 'https',
            hostname: 'multion.ai',
        },
        {
            protocol: 'https',
            hostname: 'cognosys.ai',
        },
        {
            protocol: 'https',
            hostname: 'hyperwriteai.com',
        },
        {
            protocol: 'https',
            hostname: 'ai-agent.com',
        },
        {
            protocol: 'https',
            hostname: 'godmode.space',
        },
        {
            protocol: 'https',
            hostname: 'fine.dev',
        },
        {
            protocol: 'https',
            hostname: 'abacus.ai',
        },
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

    