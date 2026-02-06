
'use client';

import React from 'react';
import { 
    BrainCircuit, Pill, Stethoscope, Dna, Microscope, Bot, Users, Hospital, LineChart, MessageSquare,
    HeartPulse, Eye, TestTube, GraduationCap, ShieldCheck, FileText, Monitor, Factory, Activity,
    Baby, Utensils, Accessibility, Cpu, Puzzle, CloudCog, Code, GitBranch, Settings, UserCheck, Scissors, User, BarChart
} from 'lucide-react';

export type Tool = {
    name: string;
    description: string;
    url: string;
    image: string;
    dataAiHint: string;
    pricing: 'Free' | 'Paid' | 'Freemium';
};

export type ToolCategory = {
    title: string;
    icon: React.ReactNode;
    tools: Tool[];
};

export const healthcareAiToolData: ToolCategory[] = [
    {
        title: "AI for Medical Diagnosis",
        icon: <Stethoscope className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Arterys', description: 'AI-powered medical imaging platform for faster, more accurate diagnosis.', url: 'https://www.arterys.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arterys.com', dataAiHint: 'medical imaging', pricing: 'Paid' },
            { name: 'Nanox AI (Zebra Medical)', description: 'AI-powered medical imaging insights.', url: 'https://www.nanox.vision/zebra', image: 'https://www.google.com/s2/favicons?sz=128&domain=nanox.vision', dataAiHint: 'radiology ai', pricing: 'Paid' },
            { name: 'PathAI', description: 'Improving patient outcomes with AI-powered pathology.', url: 'https://www.pathai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pathai.com', dataAiHint: 'pathology ai', pricing: 'Paid' },
            { name: 'Viz.ai', description: 'AI-powered care coordination for stroke and other diseases.', url: 'https://www.viz.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=viz.ai', dataAiHint: 'stroke care', pricing: 'Paid' },
            { name: 'Caption Health', description: 'AI-guided ultrasound for early disease detection.', url: 'https://captionhealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=captionhealth.com', dataAiHint: 'ultrasound ai', pricing: 'Paid' },
            { name: 'Aidoc', description: 'AI solutions for radiologists, analyzing medical images.', url: 'https://www.aidoc.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aidoc.com', dataAiHint: 'radiology ai', pricing: 'Paid' },
            { name: 'Digital Diagnostics (IDx-DR)', description: 'AI diagnostic system for diabetic retinopathy.', url: 'https://www.digital-diagnostics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=digital-diagnostics.com', dataAiHint: 'diabetic retinopathy', pricing: 'Paid' },
            { name: 'Paige', description: 'AI-powered digital pathology for cancer diagnosis.', url: 'https://paige.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paige.ai', dataAiHint: 'cancer diagnosis', pricing: 'Paid' },
            { name: 'Ada Health', description: 'A personal health companion and symptom checker.', url: 'https://ada.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ada.com', dataAiHint: 'symptom checker', pricing: 'Freemium' },
            { name: 'Buoy Health', description: 'AI-powered symptom and cure checker.', url: 'https://www.buoyhealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buoyhealth.com', dataAiHint: 'ai symptom', pricing: 'Free' },
            { name: 'Infermedica', description: 'AI-driven platform for preliminary medical diagnosis.', url: 'https://infermedica.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=infermedica.com', dataAiHint: 'medical diagnosis', pricing: 'Paid' },
            { name: 'Corti', description: 'AI co-pilot for patient consultations.', url: 'https://www.corti.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=corti.ai', dataAiHint: 'ai copilot', pricing: 'Paid' },
            { name: 'Enlitic', description: 'Deep learning medical tools to streamline radiology workflows.', url: 'https://www.enlitic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=enlitic.com', dataAiHint: 'radiology workflow', pricing: 'Paid' },
        ]
    },
    {
        title: "AI in Drug Discovery",
        icon: <Pill className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Atomwise', description: 'AI for small molecule drug discovery.', url: 'https://www.atomwise.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=atomwise.com', dataAiHint: 'drug discovery', pricing: 'Paid' },
            { name: 'Insitro', description: 'Machine learning for drug discovery and development.', url: 'https://www.insitro.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=insitro.com', dataAiHint: 'machine learning', pricing: 'Paid' },
            { name: 'Recursion', description: 'Decoding biology to radically improve lives.', url: 'https://www.recursion.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=recursion.com', dataAiHint: 'decoding biology', pricing: 'Paid' },
            { name: 'BenevolentAI', description: 'AI drug discovery platform.', url: 'https://www.benevolent.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=benevolent.com', dataAiHint: 'ai platform', pricing: 'Paid' },
            { name: 'Exscientia', description: 'AI-driven drug design and discovery.', url: 'https://www.exscientia.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=exscientia.ai', dataAiHint: 'drug design', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Medical Imaging & Radiology",
        icon: <HeartPulse className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Lunit', description: 'AI solutions for radiology and oncology.', url: 'https://lunit.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lunit.io', dataAiHint: 'cancer screening', pricing: 'Paid' },
            { name: 'Gleamer', description: 'AI solutions to enhance radiologists\' workflow.', url: 'https://www.gleamer.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=gleamer.ai', dataAiHint: 'radiology workflow', pricing: 'Paid' },
            { name: 'Quibim', description: 'AI platform for medical imaging analysis.', url: 'https://quibim.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=quibim.com', dataAiHint: 'imaging biomarkers', pricing: 'Paid' },
            { name: 'Contextflow', description: 'AI-based image analysis for radiologists.', url: 'https://www.contextflow.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=contextflow.com', dataAiHint: 'lung ct', pricing: 'Paid' },
            { name: 'Subtle Medical', description: 'AI software for faster, safer medical imaging.', url: 'https://subtlemedical.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=subtlemedical.com', dataAiHint: 'medical imaging', pricing: 'Paid' },
        ]
    },
    { 
        title: "AI for Personalized Medicine", 
        icon: <UserCheck className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Tempus', description: 'AI-enabled precision medicine.', url: 'https://www.tempus.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tempus.com', dataAiHint: 'precision medicine', pricing: 'Paid'},
            { name: 'Foundation Medicine', description: 'Genomic profiling for personalized cancer treatment.', url: 'https://www.foundationmedicine.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=foundationmedicine.com', dataAiHint: 'genomic profiling', pricing: 'Paid'},
            { name: 'SOPHiA GENETICS', description: 'Data-driven medicine.', url: 'https://www.sophiagenetics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=sophiagenetics.com', dataAiHint: 'data-driven medicine', pricing: 'Paid'},
        ] 
    },
    { 
        title: "AI in Genomics & Genetics", 
        icon: <Dna className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'DeepVariant', description: 'An analysis tool to identify genetic variants from sequencing data.', url: 'https://github.com/google/deepvariant', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'genetic variants', pricing: 'Free'},
            { name: 'Fabric Genomics', description: 'AI-driven genomic analysis.', url: 'https://fabricgenomics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fabricgenomics.com', dataAiHint: 'genomic analysis', pricing: 'Paid'},
            { name: 'Emedgene', description: 'Cognitive genomics platform.', url: 'https://www.emedgene.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=emedgene.com', dataAiHint: 'cognitive genomics', pricing: 'Paid'},
        ] 
    },
    { 
        title: "AI-Powered Surgical Tools", 
        icon: <Scissors className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Da Vinci Surgical System', description: 'Robot-assisted surgical system.', url: 'https://www.intuitive.com/en-us/products-and-services/da-vinci', image: 'https://www.google.com/s2/favicons?sz=128&domain=intuitive.com', dataAiHint: 'robotic surgery', pricing: 'Paid'},
            { name: 'Vicarious Surgical', description: 'Robotics and virtual reality for minimally invasive surgery.', url: 'https://www.vicarioussurgical.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vicarioussurgical.com', dataAiHint: 'surgical robotics', pricing: 'Paid'},
            { name: 'Activ Surgical', description: 'Real-time surgical intelligence.', url: 'https://www.activsurgical.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=activsurgical.com', dataAiHint: 'surgical intelligence', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Mental Health", 
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Woebot Health', description: 'A relational agent for mental health.', url: 'https://woebothealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=woebothealth.com', dataAiHint: 'mental health', pricing: 'Paid'},
            { name: 'Wysa', description: 'AI-guided mental health support.', url: 'https://www.wysa.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=wysa.com', dataAiHint: 'ai chatbot', pricing: 'Freemium'},
            { name: 'Ginger', description: 'On-demand mental healthcare.', url: 'https://www.ginger.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ginger.com', dataAiHint: 'mental healthcare', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI Clinical Trial Management", 
        icon: <TestTube className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Medidata', description: 'Platform for clinical trials.', url: 'https://www.medidata.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=medidata.com', dataAiHint: 'clinical trials', pricing: 'Paid'},
            { name: 'TrialSpark', description: 'Bringing new treatments to patients faster.', url: 'https://www.trialspark.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=trialspark.com', dataAiHint: 'faster trials', pricing: 'Paid'},
            { name: 'Unlearn.AI', description: 'Digital twins for faster clinical trials.', url: 'https://www.unlearn.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=unlearn.ai', dataAiHint: 'digital twins', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Hospital Operations", 
        icon: <Hospital className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Qventus', description: 'AI-powered software for automating hospital operations.', url: 'https://qventus.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=qventus.com', dataAiHint: 'hospital operations', pricing: 'Paid'},
            { name: 'LeanTaaS', description: 'AI-powered software for hospital operations.', url: 'https://leantaas.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=leantaas.com', dataAiHint: 'hospital efficiency', pricing: 'Paid'},
            { name: 'Hospital IQ', description: 'Operations management platform for health systems.', url: 'https://hospiq.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hospiq.com', dataAiHint: 'health systems', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI Predictive Analytics in Healthcare", 
        icon: <LineChart className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Jvion', description: 'Clinical AI for prescriptive analytics.', url: 'https://www.jvion.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=jvion.com', dataAiHint: 'prescriptive analytics', pricing: 'Paid'},
            { name: 'Health Catalyst', description: 'Data and analytics technology and services.', url: 'https://www.healthcatalyst.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=healthcatalyst.com', dataAiHint: 'data analytics', pricing: 'Paid'},
            { name: 'ClosedLoop.ai', description: 'Healthcare\'s data science platform.', url: 'https://closedloop.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=closedloop.ai', dataAiHint: 'data science', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI Medical Chatbots & Virtual Assistants", 
        icon: <MessageSquare className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Babylon Health', description: 'Digital-first healthcare service.', url: 'https://www.babylonhealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=babylonhealth.com', dataAiHint: 'digital health', pricing: 'Paid'},
            { name: 'Ada Health', description: 'A personal health companion.', url: 'https://ada.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ada.com', dataAiHint: 'health companion', pricing: 'Freemium'},
            { name: 'Buoy Health', description: 'AI-powered symptom and cure checker.', url: 'https://www.buoyhealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=buoyhealth.com', dataAiHint: 'symptom checker', pricing: 'Free'},
        ]
    },
    { 
        title: "AI for Population Health Management", 
        icon: <Users className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Arcadia', description: 'A leading population health management platform.', url: 'https://arcadia.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arcadia.io', dataAiHint: 'population health', pricing: 'Paid'},
            { name: 'Innovaccer', description: 'Healthcare data activation platform.', url: 'https://innovaccer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=innovaccer.com', dataAiHint: 'data activation', pricing: 'Paid'},
            { name: 'HealthEC', description: 'Population health management solutions.', url: 'https://www.healthec.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=healthec.com', dataAiHint: 'phm solutions', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI in Pathology", 
        icon: <Microscope className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Paige', description: 'AI-powered digital pathology.', url: 'https://paige.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=paige.ai', dataAiHint: 'digital pathology', pricing: 'Paid'},
            { name: 'PathAI', description: 'Improving patient outcomes with AI-powered pathology.', url: 'https://www.pathai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pathai.com', dataAiHint: 'pathology ai', pricing: 'Paid'},
            { name: 'Ibex Medical Analytics', description: 'AI-powered cancer diagnostics in pathology.', url: 'https://ibex-ai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ibex-ai.com', dataAiHint: 'cancer diagnostics', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Wearable Health Tech", 
        icon: <Activity className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Whoop', description: 'A fitness tracker that monitors recovery, sleep, and workouts.', url: 'https://www.whoop.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=whoop.com', dataAiHint: 'fitness tracker', pricing: 'Paid'},
            { name: 'Oura Ring', description: 'A smart ring for tracking sleep and activity.', url: 'https://ouraring.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ouraring.com', dataAiHint: 'smart ring', pricing: 'Paid'},
            { name: 'Apple Health', description: 'Health and fitness tracking integrated into Apple devices.', url: 'https://www.apple.com/ios/health/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apple.com', dataAiHint: 'health app', pricing: 'Free'},
        ]
    },
    { 
        title: "AI in Electronic Health Records (EHR)", 
        icon: <FileText className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Epic Systems', description: 'Leading EHR with AI and analytics features.', url: 'https://www.epic.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=epic.com', dataAiHint: 'ehr system', pricing: 'Paid'},
            { name: 'Cerner', description: 'Now Oracle Health. EHR and health IT solutions.', url: 'https://www.oracle.com/health/', image: 'https://www.google.com/s2/favicons?sz=128&domain=oracle.com', dataAiHint: 'health it', pricing: 'Paid'},
            { name: 'MEDITECH', description: 'EHR solutions for healthcare organizations.', url: 'https://ehr.meditech.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=meditech.com', dataAiHint: 'ehr solutions', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Oncology", 
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Tempus', description: 'AI-enabled precision medicine for cancer care.', url: 'https://www.tempus.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=tempus.com', dataAiHint: 'cancer care', pricing: 'Paid'},
            { name: 'Flatiron Health', description: 'Improving cancer care with technology and data.', url: 'https://flatiron.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=flatiron.com', dataAiHint: 'oncology data', pricing: 'Paid'},
            { name: 'Oncora Medical', description: 'Digital health company for radiation oncology.', url: 'https://www.oncora.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=oncora.com', dataAiHint: 'radiation oncology', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI in Cardiology", 
        icon: <HeartPulse className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'HeartFlow', description: 'Non-invasive personalized cardiac test.', url: 'https://www.heartflow.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=heartflow.com', dataAiHint: 'cardiac test', pricing: 'Paid'},
            { name: 'Ultromics', description: 'AI solutions for echocardiography.', url: 'https://www.ultromics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ultromics.com', dataAiHint: 'echocardiography', pricing: 'Paid'},
            { name: 'Eko', description: 'AI-powered stethoscopes.', url: 'https://www.ekohealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=ekohealth.com', dataAiHint: 'smart stethoscope', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Neurology", 
        icon: <BrainCircuit className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Viz.ai', description: 'AI-powered care coordination for stroke.', url: 'https://www.viz.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=viz.ai.com', dataAiHint: 'stroke care', pricing: 'Paid'},
            { name: 'Brainomix', description: 'AI-powered imaging biomarkers for neurologists.', url: 'https://www.brainomix.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=brainomix.com', dataAiHint: 'imaging biomarkers', pricing: 'Paid'},
            { name: 'icometrix', description: 'AI solutions for neurologists.', url: 'https://icometrix.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=icometrix.com', dataAiHint: 'brain mri', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI in Ophthalmology", 
        icon: <Eye className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Digital Diagnostics (IDx-DR)', description: 'AI diagnostic system for diabetic retinopathy.', url: 'https://www.digital-diagnostics.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=digital-diagnostics.com', dataAiHint: 'diabetic retinopathy', pricing: 'Paid'},
            { name: 'RetinAI', description: 'AI solutions for ophthalmology.', url: 'https://www.retinai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=retinai.com', dataAiHint: 'ophthalmology ai', pricing: 'Paid'},
            { name: 'Airdoc', description: 'AI for retinal image analysis.', url: 'https://airdoc.health/', image: 'https://www.google.com/s2/favicons?sz=128&domain=airdoc.health', dataAiHint: 'retinal analysis', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Dermatology", 
        icon: <User className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Miiskin', description: 'App for tracking skin and moles.', url: 'https://miiskin.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=miiskin.com', dataAiHint: 'skin tracking', pricing: 'Freemium'},
            { name: 'SkinVision', description: 'App to check your skin for signs of skin cancer.', url: 'https://skinvision.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=skinvision.com', dataAiHint: 'skin cancer check', pricing: 'Freemium'},
            { name: 'MetaOptima', description: 'Intelligent dermatology software.', url: 'https://www.metaoptima.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=metaoptima.com', dataAiHint: 'dermatology software', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI-Powered Medical Education", 
        icon: <GraduationCap className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Osmosis', description: 'Health education platform.', url: 'https://www.osmosis.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=osmosis.org', dataAiHint: 'medical education', pricing: 'Paid'},
            { name: 'Amboss', description: 'Medical learning platform for students and physicians.', url: 'https://www.amboss.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=amboss.com', dataAiHint: 'medical students', pricing: 'Paid'},
            { name: 'Lecturio', description: 'Online medical education.', url: 'https://www.lecturio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lecturio.com', dataAiHint: 'video lectures', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Healthcare Compliance", 
        icon: <ShieldCheck className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Protenus', description: 'Healthcare compliance analytics.', url: 'https://www.protenus.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=protenus.com', dataAiHint: 'compliance analytics', pricing: 'Paid'},
            { name: 'ComplyAI', description: 'AI-powered compliance solutions.', url: 'https://complyai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=complyai.com', dataAiHint: 'ai compliance', pricing: 'Paid'},
            { name: 'FairWarning', description: 'Patient privacy monitoring.', url: 'https://www.imprivata.com/fairwarning', image: 'https://www.google.com/s2/favicons?sz=128&domain=imprivata.com', dataAiHint: 'privacy monitoring', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI in Pharmacy & Medication Management", 
        icon: <Pill className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Medisafe', description: 'Medication management platform.', url: 'https://www.medisafe.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=medisafe.com', dataAiHint: 'pill reminder', pricing: 'Freemium'},
            { name: 'MedMinder', description: 'Smart pill dispenser.', url: 'https://www.medminder.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=medminder.com', dataAiHint: 'pill dispenser', pricing: 'Paid'},
            { name: 'Omnicell', description: 'Medication management automation.', url: 'https://www.omnicell.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=omnicell.com', dataAiHint: 'medication automation', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Remote Patient Monitoring", 
        icon: <Monitor className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Current Health', description: 'Care-at-home platform.', url: 'https://www.currenthealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=currenthealth.com', dataAiHint: 'remote monitoring', pricing: 'Paid'},
            { name: 'Biofourmis', description: 'Digital therapeutics and virtual care.', url: 'https://www.biofourmis.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=biofourmis.com', dataAiHint: 'virtual care', pricing: 'Paid'},
            { name: 'Cadence', description: 'Remote patient monitoring for chronic conditions.', url: 'https://www.cadence.care/', image: 'https://www.google.com/s2/favicons?sz=128&domain=cadence.care', dataAiHint: 'chronic conditions', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI in Medical Billing & Coding", 
        icon: <FileText className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Fathom', description: 'Autonomous medical coding.', url: 'https://fathomhealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fathomhealth.com', dataAiHint: 'medical coding', pricing: 'Paid'},
            { name: 'Nym', description: 'Autonomous medical coding.', url: 'https://nym.health/', image: 'https://www.google.com/s2/favicons?sz=128&domain=nym.health', dataAiHint: 'revenue cycle', pricing: 'Paid'},
            { name: 'CodaMetrix', description: 'AI-powered autonomous medical coding.', url: 'https://www.codametrix.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=codametrix.com', dataAiHint: 'autonomous coding', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Healthcare Analytics", 
        icon: <BarChart className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Health Catalyst', description: 'Data and analytics for healthcare.', url: 'https://www.healthcatalyst.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=healthcatalyst.com', dataAiHint: 'healthcare data', pricing: 'Paid'},
            { name: 'Arcadia', description: 'Population health management platform.', url: 'https://arcadia.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arcadia.io', dataAiHint: 'population health', pricing: 'Paid'},
            { name: 'Apixio', description: 'AI for healthcare data.', url: 'https://www.apixio.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=apixio.com', dataAiHint: 'risk adjustment', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Pandemic Prediction & Response", 
        icon: <Factory className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'BlueDot', description: 'Global infectious disease intelligence.', url: 'https://bluedot.global/', image: 'https://www.google.com/s2/favicons?sz=128&domain=bluedot.global', dataAiHint: 'disease intelligence', pricing: 'Paid'},
            { name: 'Metabiota', description: 'Epidemic risk modeling.', url: 'https://www.metabiota.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=metabiota.com', dataAiHint: 'risk modeling', pricing: 'Paid'},
            { name: 'Aetion', description: 'Real-world evidence platform.', url: 'https://www.aetion.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aetion.com', dataAiHint: 'real-world evidence', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI in Fertility & Reproductive Health", 
        icon: <Baby className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Presagen', description: 'AI enhanced healthcare.', url: 'https://www.presagen.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=presagen.com', dataAiHint: 'ivf ai', pricing: 'Paid'},
            { name: 'Life Whisperer', description: 'AI for IVF.', url: 'https://www.lifewhisperer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lifewhisperer.com', dataAiHint: 'embryo assessment', pricing: 'Paid'},
            { name: 'Embryonics', description: 'AI for embryo selection.', url: 'https://www.embryonics.co/', image: 'https://www.google.com/s2/favicons?sz=128&domain=embryonics.co', dataAiHint: 'embryo selection', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Nutrition & Dietetics", 
        icon: <Utensils className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'MyFitnessPal', description: 'Calorie counter and diet tracker.', url: 'https://www.myfitnesspal.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=myfitnesspal.com', dataAiHint: 'calorie counter', pricing: 'Freemium'},
            { name: 'Lifesum', description: 'Healthy eating and diet app.', url: 'https://lifesum.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=lifesum.com', dataAiHint: 'diet app', pricing: 'Freemium'},
            { name: 'Noom', description: 'Psychology-based weight loss program.', url: 'https://www.noom.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=noom.com', dataAiHint: 'weight loss', pricing: 'Paid'},
        ]
    },
    { 
        title: "AI for Physical Therapy & Rehabilitation", 
        icon: <Accessibility className="w-5 h-5 text-primary"/>, 
        tools: [
            { name: 'Kaia Health', description: 'Digital therapeutics for MSK pain.', url: 'https://www.kaiahealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kaiahealth.com', dataAiHint: 'digital therapeutics', pricing: 'Paid'},
            { name: 'Hinge Health', description: 'Digital clinic for back and joint pain.', url: 'https://www.hingehealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hingehealth.com', dataAiHint: 'joint pain', pricing: 'Paid'},
            { name: 'Sword Health', description: 'Digital physical therapy.', url: 'https://swordhealth.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=swordhealth.com', dataAiHint: 'digital therapy', pricing: 'Paid'},
        ]
    }
];

    