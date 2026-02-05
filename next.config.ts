
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
        {
            protocol: 'https',
            hostname: 'spline.design',
        },
        {
            protocol: 'https',
            hostname: 'masterpiecestudio.com',
        },
        {
            protocol: 'https',
            hostname: 'lumalabs.ai',
        },
        {
            protocol: 'https',
            hostname: 'meshy.ai',
        },
        {
            protocol: 'https',
            hostname: 'csm.ai',
        },
        {
            protocol: 'https',
            hostname: 'sloyd.ai',
        },
        {
            protocol: 'https',
            hostname: 'kaedim3d.com',
        },
        {
            protocol: 'https',
            hostname: 'alpha3d.io',
        },
        {
            protocol: 'https',
            hostname: '3dfy.ai',
        },
        {
            protocol: 'https',
            hostname: 'adcreative.ai',
        },
        {
            protocol: 'https',
            hostname: 'anyword.com',
        },
        {
            protocol: 'https',
            hostname: 'copysmith.ai',
        },
        {
            protocol: 'https',
            hostname: 'lensa.ai',
        },
        {
            protocol: 'https',
            hostname: 'synthesia.io',
        },
        {
            protocol: 'https',
            hostname: 'artbreeder.com',
        },
        {
            protocol: 'https',
            hostname: 'avatar.ai',
        },
        {
            protocol: 'https',
            hostname: 'profilepicture.ai',
        },
        {
            protocol: 'https',
            hostname: 'starryai.com',
        },
        {
            protocol: 'https',
            hostname: 'pfpmaker.com',
        },
        {
            protocol: 'https',
            hostname: 'readyplayer.me',
        },
        {
            protocol: 'https',
            hostname: 'articleforge.com',
        },
        {
            protocol: 'https',
            hostname: 'contentbot.ai',
        },
        {
            protocol: 'https',
            hostname: 'scalenut.com',
        },
        {
            protocol: 'https',
            hostname: 'growthbarseo.com',
        },
        {
            protocol: 'https',
            hostname: 'crypko.ai',
        },
        {
            protocol: 'https',
            hostname: 'thispersondoesnotexist.com',
        },
        {
            protocol: 'https',
            hostname: 'makehumancommunity.org',
        },
        {
            protocol: 'https',
            hostname: 'reallusion.com',
        },
        {
            protocol: 'https',
            hostname: 'heroforge.com',
        },
        {
            protocol: 'https',
            hostname: 'vroid.com',
        },
        {
            protocol: 'https',
            hostname: 'artflow.ai',
        },
        {
            protocol: 'https',
            hostname: 'waifulabs.com',
        },
        {
            protocol: 'https',
            hostname: 'opus.pro',
        },
        {
            protocol: 'https',
            hostname: 'vidyo.ai',
        },
        {
            protocol: 'https',
            hostname: 'designrr.io',
        },
        {
            protocol: 'https',
            hostname: 'repurpose.io',
        },
        {
            protocol: 'https',
            hostname: 'lumen5.com',
        },
        {
            protocol: 'https',
            hostname: 'klap.app',
        },
        {
            protocol: 'https',
            hostname: 'contentfries.com',
        },
        {
            protocol: 'https',
            hostname: 'missinglettr.com',
        },
        {
            protocol: 'https',
            hostname: 'scholarcy.com',
        },
        {
            protocol: 'https',
            hostname: 'quillbot.com',
        },
        {
            protocol: 'https',
            hostname: 'smmry.com',
        },
        {
            protocol: 'https',
            hostname: 'tldrthis.com',
        },
        {
            protocol: 'https',
            hostname: 'eightify.app',
        },
        {
            protocol: 'https',
            hostname: 'genei.io',
        },
        {
            protocol: 'https',
            hostname: 'resoomer.com',
        },
        {
            protocol: 'https',
            hostname: 'lavender.ai',
        },
        {
            protocol: 'https',
            hostname: 'smartwriter.ai',
        },
        {
            protocol: 'https',
            hostname: 'regie.ai',
        },
        {
            protocol: 'https',
            hostname: 'instantly.ai',
        },
        {
            protocol: 'https',
            hostname: 'quicklines.ai',
        },
        {
            protocol: 'https',
            hostname: 'warmer.ai',
        },
        {
            protocol: 'https',
            hostname: 'prometheanai.com',
        },
        {
            protocol: 'https',
            hostname: 'scenario.com',
        },
        {
            protocol: 'https',
            hostname: 'layer.ai',
        },
        {
            protocol: 'https',
            hostname: 'hotpot.ai',
        },
        {
            protocol: 'https',
            hostname: 'texturelab.xyz',
        },
        {
            protocol: 'https',
            hostname: 'nvidia.com',
        },
        {
            protocol: 'https',
            hostname: 'ganbreeder.app',
        },
        {
            protocol: 'https',
            hostname: 'prowritingaid.com',
        },
        {
            protocol: 'https',
            hostname: 'gingersoftware.com',
        },
        {
            protocol: 'https',
            hostname: 'languagetool.org',
        },
        {
            protocol: 'https',
            hostname: 'scribens.com',
        },
        {
            protocol: 'https',
            hostname: 'writer.com',
        },
        {
            protocol: 'https',
            hostname: 'paperrater.com',
        },
        {
            protocol: 'https',
            hostname: 'answerthepublic.com',
        },
        {
            protocol: 'https',
            hostname: 'portent.com',
        },
        {
            protocol: 'https',
            hostname: 'storylab.ai',
        },
        {
            protocol: 'https',
            hostname: 'letsenhance.io',
        },
        {
            protocol: 'https',
            hostname: 'bigjpg.com',
        },
        {
            protocol: 'https',
            hostname: 'vanceai.com',
        },
        {
            protocol: 'https',
            hostname: 'remini.ai',
        },
        {
            protocol: 'https',
            hostname: 'zyro.com',
        },
        {
            protocol: 'https',
            hostname: 'imglarger.com',
        },
        {
            protocol: 'https',
            hostname: 'deep-image.ai',
        },
        {
            protocol: 'https',
            hostname: 'waifu2x.udp.jp',
        },
        {
            protocol: 'https',
            hostname: 'kapwing.com',
        },
        {
            protocol: 'https',
            hostname: 'supermeme.ai',
        },
        {
            protocol: 'https',
            hostname: 'veed.io',
        },
        {
            protocol: 'https',
            hostname: 'clideo.com',
        },
        {
            protocol: 'https',
            hostname: 'makeameme.org',
        },
        {
            protocol: 'https',
            hostname: 'iloveimg.com',
        },
        {
            protocol: 'https',
            hostname: 'flexclip.com',
        },
        {
            protocol: 'https',
            hostname: 'mematic.net',
        },
        {
            protocol: 'https',
            hostname: 'soundraw.io',
        },
        {
            protocol: 'https',
            hostname: 'aiva.ai',
        },
        {
            protocol: 'https',
            hostname: 'boomy.com',
        },
        {
            protocol: 'https',
            hostname: 'soundful.com',
        },
        {
            protocol: 'https',
            hostname: 'ecrettmusic.com',
        },
        {
            protocol: 'https',
            hostname: 'amadeuscode.com',
        },
        {
            protocol: 'https',
            hostname: 'splashmusic.com',
        },
        {
            protocol: 'https',
            hostname: 'suno.ai',
        },
        {
            protocol: 'https',
            hostname: 'pika.art',
        },
        {
            protocol: 'https',
            hostname: 'd-id.com',
        },
        {
            protocol: 'https',
            hostname: 'leiapix.com',
        },
        {
            protocol: 'https',
            hostname: 'myheritage.com',
        },
        {
            protocol: 'https',
            hostname: 'vimageapp.com',
        },
        {
            protocol: 'https',
            hostname: 'lightricks.com',
        },
        {
            protocol: 'https',
            hostname: 'finaldraft.com',
        },
        {
            protocol: 'https',
            hostname: 'celtx.com',
        },
        {
            protocol: 'https',
            hostname: 'literatureandlatte.com',
        },
        {
            protocol: 'https',
            hostname: 'studiobinder.com',
        },
        {
            protocol: 'https',
            hostname: 'writerduet.com',
        },
        {
            protocol: 'https',
            hostname: 'squibler.io',
        },
        {
            protocol: 'https',
            hostname: 'ideogram.ai',
        },
        {
            protocol: 'https',
            hostname: 'nightcafe.studio',
        },
        {
            protocol: 'https',
            hostname: 'dreamstudio.ai',
        },
        {
            protocol: 'https',
            hostname: 'playground.com',
        },
        {
            protocol: 'https',
            hostname: 'dream.ai',
        },
        {
            protocol: 'https',
            hostname: 'craiyon.com',
        },
        {
            protocol: 'https',
            hostname: 'deepai.org',
        },
        {
            protocol: 'https',
            hostname: 'mage.space',
        },
        {
            protocol: 'https',
            hostname: 'pixai.art',
        },
        {
            protocol: 'https',
            hostname: 'openai.com',
        },
        {
            protocol: 'https',
            hostname: 'elevenlabs.io',
        },
        {
            protocol: 'https',
            hostname: 'podcast.adobe.com',
        },
        {
            protocol: 'https',
            hostname: 'audo.ai',
        },
        {
            protocol: 'https',
            hostname: 'lalal.ai',
        },
        {
            protocol: 'https',
            hostname: 'voicemod.net',
        },
        {
            protocol: 'https',
            hostname: 'cleanvoice.ai',
        },
        {
            protocol: 'https',
            hostname: 'auphonic.com',
        },
        {
            protocol: 'https',
            hostname: 'krisp.ai',
        },
        {
            protocol: 'https',
            hostname: 'voice.ai',
        },
        {
            protocol: 'https',
            hostname: 'voicery.com',
        },
        {
            protocol: 'https',
            hostname: 'ttsmaker.com',
        },
        {
            protocol: 'https',
            hostname: 'reface.ai',
        },
        {
            protocol: 'https',
            hostname: 'deepfakesweb.com',
        },
        {
            protocol: 'https',
            hostname: 'akool.com',
        },
        {
            protocol: 'https',
            hostname: 'pica-ai.com',
        },
        {
            protocol: 'https',
            hostname: 'miocreate.com',
        },
        {
            protocol: 'https',
            hostname: 'todoist.com',
        },
        {
            protocol: 'https',
            hostname: 'ticktick.com',
        },
        {
            protocol: 'https',
            hostname: 'any.do',
        },
        {
            protocol: 'https',
            hostname: 'culturedcode.com',
        },
        {
            protocol: 'https',
            hostname: 'omnigroup.com',
        },
        {
            protocol: 'https',
            hostname: 'toodledo.com',
        },
        {
            protocol: 'https',
            hostname: 'rememberthemilk.com',
        },
        {
            protocol: 'https',
            hostname: 'taskade.com',
        },
        {
            protocol: 'https',
            hostname: 'wrike.com',
        },
        {
            protocol: 'https',
            hostname: 'smartsheet.com',
        },
        {
            protocol: 'https',
            hostname: 'tray.io',
        },
        {
            protocol: 'https',
            hostname: 'pipedream.com',
        },
        {
            protocol: 'https',
            hostname: 'alfredapp.com',
        },
        {
            protocol: 'https',
            hostname: 'toggl.com',
        },
        {
            protocol: 'https',
            hostname: 'clockify.me',
        },
        {
            protocol: 'https',
            hostname: 'timelyapp.com',
        },
        {
            protocol: 'https',
            hostname: 'getharvest.com',
        },
        {
            protocol: 'https',
            hostname: 'timeular.com',
        },
        {
            protocol: 'https',
            hostname: 'desktime.com',
        },
        {
            protocol: 'https',
            hostname: 'focusme.com',
        },
        {
            protocol: 'https',
            hostname: 'hourstack.com',
        },
        {
            protocol: 'https',
            hostname: 'timecamp.com',
        },
        {
            protocol: 'https',
            hostname: 'doodle.com',
        },
        {
            protocol: 'https',
            hostname: 'savvycal.com',
        },
        {
            protocol: 'https',
            hostname: 'flexibits.com',
        },
        {
            protocol: 'https',
            hostname: 'woven.com',
        },
        {
            protocol: 'https',
            hostname: 'youcanbook.me',
        },
        {
            protocol: 'https',
            hostname: 'sanebox.com',
        },
        {
            protocol: 'https',
            hostname: 'boomeranggmail.com',
        },
        {
            protocol: 'https',
            hostname: 'shortwave.com',
        },
        {
            protocol: 'https',
            hostname: 'mailbutler.io',
        },
        {
            protocol: 'https',
            hostname: 'mixmax.com',
        },
        {
            protocol: 'https',
            hostname: 'clean.email',
        },
        {
            protocol: 'https',
            hostname: 'unroll.me',
        },
        {
            protocol: 'https',
            hostname: 'mailstrom.co',
        },
        {
            protocol: 'https',
            hostname: 'spikenow.com',
        },
        {
            protocol: 'https',
            hostname: 'chuck.email',
        },
        {
            protocol: 'https',
            hostname: 'edison.tech',
        },
        {
            protocol: 'https',
            hostname: 'leavemealone.app',
        },
        {
            protocol: 'https',
            hostname: 'baydin.com',
        },
        {
            protocol: 'https',
            hostname: 'fathom.video',
        },
        {
            protocol: 'https',
            hostname: 'tldv.io',
        },
        {
            protocol: 'https',
            hostname: 'avoma.com',
        },
        {
            protocol: 'https',
            hostname: 'tactiq.io',
        },
        {
            protocol: 'https',
            hostname: 'trint.com',
        },
        {
            protocol: 'https',
            hostname: 'airgram.io',
        },
        {
            protocol: 'https',
            hostname: 'sonix.ai',
        },
        {
            protocol: 'https',
            hostname: 'otranscribe.com',
        },
        {
            protocol: 'https',
            hostname: 'rev.com',
        },
        {
            protocol: 'https',
            hostname: 'ulysses.app',
        },
        {
            protocol: 'https',
            hostname: 'ia.net',
        },
        {
            protocol: 'https',
            hostname: 'humata.ai',
        },
        {
            protocol: 'https',
            hostname: 'typeset.io',
        },
        {
            protocol: 'https',
            hostname: 'obsidian.md',
        },
        {
            protocol: 'https',
            hostname: 'roamresearch.com',
        },
        {
            protocol: 'https',
            hostname: 'logseq.com',
        },
        {
            protocol: 'https',
            hostname: 'mem.ai',
        },
        {
            protocol: 'https',
            hostname: 'mymind.com',
        },
        {
            protocol: 'https',
            hostname: 'bear.app',
        },
        {
            protocol: 'https',
            hostname: 'keep.google.com',
        },
        {
            protocol: 'https',
            hostname: 'simplenote.com',
        },
        {
            protocol: 'https',
            hostname: 'notability.com',
        },
        {
            protocol: 'https',
            hostname: 'standardnotes.com',
        },
        {
            protocol: 'https',
            hostname: 'researchrabbit.ai',
        },
        {
            protocol: 'https',
            hostname: 'scite.ai',
        },
        {
            protocol: 'https',
            hostname: 'consensus.app',
        },
        {
            protocol: 'https',
            hostname: 'scholar.google.com',
        },
        {
            protocol: 'https',
            hostname: 'semanticscholar.org',
        },
        {
            protocol: 'https',
            hostname: 'habitica.com',
        },
        {
            protocol: 'https',
            hostname: 'streaksapp.com',
        },
        {
            protocol: 'https',
            hostname: 'thefabulous.co',
        },
        {
            protocol: 'https',
            hostname: 'productive.app',
        },
        {
            protocol: 'https',
            hostname: 'habitify.me',
        },
        {
            protocol: 'https',
            hostname: 'doneapp.io',
        },
        {
            protocol: 'https',
            hostname: 'coach.me',
        },
        {
            protocol: 'https',
            hostname: 'everyday.app',
        },
        {
            protocol: 'https',
            hostname: 'momentum.cc',
        },
        {
            protocol: 'https',
            hostname: 'proginosko.com',
        },
        {
            protocol: 'https',
            hostname: 'stayfocusd.com',
        },
        {
            protocol: 'https',
            hostname: 'selfcontrolapp.com',
        },
        {
            protocol: 'https',
            hostname: 'focalfilter.com',
        },
        {
            protocol: 'https',
            hostname: 'hazeover.com',
        },
        {
            protocol: 'https',
            hostname: 'zoom.us',
        },
        {
            protocol: 'https',
            hostname: 'webex.com',
        },
        {
            protocol: 'https',
            hostname: 'pcloud.com',
        },
        {
            protocol: 'https',
            hostname: 'sync.com',
        },
        {
            protocol: 'https',
            hostname: 'mega.nz',
        },
        {
            protocol: 'https',
            hostname: 'xmind.net',
        },
        {
            protocol: 'https',
            hostname: 'mindmeister.com',
        },
        {
            protocol: 'https',
            hostname: 'coggle.it',
        },
        {
            protocol: 'https',
            hostname: 'mindmanager.com',
        },
        {
            protocol: 'https',
            hostname: 'simplemind.eu',
        },
        {
            protocol: 'https',
            hostname: 'bubbl.us',
        },
        {
            protocol: 'https',
            hostname: 'mindnode.com',
        },
        {
            protocol: 'https',
            hostname: 'tome.app',
        },
        {
            protocol: 'https',
            hostname: 'beautiful.ai',
        },
        {
            protocol: 'https',
            hostname: 'gamma.app',
        },
        {
            protocol: 'https',
            hostname: 'pitch.com',
        },
        {
            protocol: 'https',
            hostname: 'decktopus.com',
        },
        {
            protocol: 'https',
            hostname: 'deepl.com',
        },
        {
            protocol: 'https',
            hostname: 'translate.google.com',
        },
        {
            protocol: 'https',
            hostname: 'systransoft.com',
        },
        {
            protocol: 'https',
            hostname: 'itranslate.com',
        },
        {
            protocol: 'https',
            hostname: 'naver.com',
        },
        {
            protocol: 'https',
            hostname: 'online-translator.com',
        },
        {
            protocol: 'https',
            hostname: 'sourcegraph.com',
        },
        {
            protocol: 'https',
            hostname: 'linear.app',
        },
        {
            protocol: 'https',
            hostname: 'salesloft.com',
        },
        {
            protocol: 'https',
            hostname: 'lusha.com',
        },
        {
            protocol: 'https',
            hostname: 'freshdesk.com',
        },
        {
            protocol: 'https',
            hostname: 'bamboohr.com',
        },
        {
            protocol: 'https',
            hostname: 'gusto.com',
        },
        {
            protocol: 'https',
            hostname: 'rippling.com',
        },
        {
            protocol: 'https',
            hostname: 'greenhouse.io',
        },
        {
            protocol: 'https',
            hostname: '15five.com',
        },
        {
            protocol: 'https',
            hostname: 'cultureamp.com',
        },
        {
            protocol: 'https',
            hostname: 'workable.com',
        },
        {
            protocol: 'https',
            hostname: 'intuit.com',
        },
        {
            protocol: 'https',
            hostname: 'expensify.com',
        },
        {
            protocol: 'https',
            hostname: 'brex.com',
        },
        {
            protocol: 'https',
            hostname: 'waveapps.com',
        },
        {
            protocol: 'https',
            hostname: 'bill.com',
        },
        {
            protocol: 'https',
            hostname: 'clay.earth',
        },
        {
            protocol: 'https',
            hostname: 'getdex.com',
        },
        {
            protocol: 'https',
            hostname: 'monicahq.com',
        },
        {
            protocol: 'https',
            hostname: 'folk.app',
        },
        {
            protocol: 'https',
            hostname: 'covve.com',
        },
        {
            protocol: 'https',
            hostname: 'hippo.is',
        },
        {
            protocol: 'https',
            hostname: 'uphabit.com',
        },
        {
            protocol: 'https',
            hostname: 'nat.app',
        },
        {
            protocol: 'https',
            hostname: 'queue.so',
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
