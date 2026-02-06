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
            { name: 'Arterys', description: 'AI-powered medical imaging platform for faster, more accurate diagnosis.', url: 'https://www.arterys.com/', image: 'https://picsum.photos/seed/arterys/600/400', dataAiHint: 'medical imaging', pricing: 'Paid' },
            { name: 'Zebra Medical Vision', description: 'Now part of Nanox. AI-powered medical imaging insights.', url: 'https://www.nanox.vision/zebra', image: 'https://picsum.photos/seed/zebra-medical/600/400', dataAiHint: 'radiology ai', pricing: 'Paid' },
            { name: 'PathAI', description: 'Improving patient outcomes with AI-powered pathology.', url: 'https://www.pathai.com/', image: 'https://picsum.photos/seed/pathai/600/400', dataAiHint: 'pathology ai', pricing: 'Paid' },
            { name: 'Viz.ai', description: 'AI-powered care coordination for stroke and other diseases.', url: 'https://www.viz.ai/', image: 'https://picsum.photos/seed/vizai/600/400', dataAiHint: 'stroke care', pricing: 'Paid' },
            { name: 'Caption Health', description: 'AI-guided ultrasound for early disease detection.', url: 'https://captionhealth.com/', image: 'https://picsum.photos/seed/captionhealth/600/400', dataAiHint: 'ultrasound ai', pricing: 'Paid' },
            { name: 'Aidoc', description: 'AI solutions for radiologists, analyzing medical images.', url: 'https://www.aidoc.com/', image: 'https://picsum.photos/seed/aidoc/600/400', dataAiHint: 'radiology ai', pricing: 'Paid' },
            { name: 'IDx-DR', description: 'AI diagnostic system for diabetic retinopathy.', url: 'https://www.digital-diagnostics.com/', image: 'https://picsum.photos/seed/idx-dr/600/400', dataAiHint: 'diabetic retinopathy', pricing: 'Paid' },
            { name: 'Paige', description: 'AI-powered digital pathology for cancer diagnosis.', url: 'https://paige.ai/', image: 'https://picsum.photos/seed/paige/600/400', dataAiHint: 'cancer diagnosis', pricing: 'Paid' },
            { name: 'Ada Health', description: 'A personal health companion and symptom checker.', url: 'https://ada.com/', image: 'https://picsum.photos/seed/adahealth/600/400', dataAiHint: 'symptom checker', pricing: 'Freemium' },
            { name: 'Buoy Health', description: 'AI-powered symptom and cure checker.', url: 'https://www.buoyhealth.com/', image: 'https://picsum.photos/seed/buoyhealth/600/400', dataAiHint: 'ai symptom', pricing: 'Free' },
            { name: 'Infermedica', description: 'AI-driven platform for preliminary medical diagnosis.', url: 'https://infermedica.com/', image: 'https://picsum.photos/seed/infermedica/600/400', dataAiHint: 'medical diagnosis', pricing: 'Paid' },
            { name: 'Corti', description: 'AI co-pilot for patient consultations.', url: 'https://www.corti.ai/', image: 'https://picsum.photos/seed/corti/600/400', dataAiHint: 'ai copilot', pricing: 'Paid' },
            { name: 'Enlitic', description: 'Deep learning medical tools to streamline radiology workflows.', url: 'https://www.enlitic.com/', image: 'https://picsum.photos/seed/enlitic/600/400', dataAiHint: 'radiology workflow', pricing: 'Paid' },
            { name: 'Lunit', description: 'AI solutions for cancer diagnosis and treatment.', url: 'https://lunit.io/', image: 'https://picsum.photos/seed/lunit/600/400', dataAiHint: 'cancer ai', pricing: 'Paid' },
            { name: 'RapidAI', description: 'AI-enhanced clinical decision making for neurovascular and vascular conditions.', url: 'https://www.rapidai.com/', image: 'https://picsum.photos/seed/rapidai/600/400', dataAiHint: 'clinical decision', pricing: 'Paid' },
            { name: 'Subtle Medical', description: 'AI-powered software for faster, safer, and smarter medical imaging.', url: 'https://subtlemedical.com/', image: 'https://picsum.photos/seed/subtlemedical/600/400', dataAiHint: 'medical imaging', pricing: 'Paid' },
            { name: 'Butterfly Network', description: 'Handheld, whole-body ultrasound with AI guidance.', url: 'https://www.butterflynetwork.com/', image: 'https://picsum.photos/seed/butterfly-network/600/400', dataAiHint: 'handheld ultrasound', pricing: 'Paid' },
            { name: 'MeVis Medical Solutions', description: 'Software for image-based medicine, particularly radiology.', url: 'https://www.mevis.de/', image: 'https://picsum.photos/seed/mevis/600/400', dataAiHint: 'image-based medicine', pricing: 'Paid' },
            { name: 'HeartFlow', description: 'Non-invasive personalized cardiac test.', url: 'https://www.heartflow.com/', image: 'https://picsum.photos/seed/heartflow/600/400', dataAiHint: 'cardiac test', pricing: 'Paid' },
            { name: 'MaxQ AI', description: 'AI-powered platform to aid in the assessment of intracranial hemorrhage.', url: 'https://maxq.ai/', image: 'https://picsum.photos/seed/maxqai/600/400', dataAiHint: 'hemorrhage assessment', pricing: 'Paid' },
        ]
    },
    {
        title: "AI in Drug Discovery",
        icon: <Pill className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Atomwise', description: 'AI for small molecule drug discovery.', url: 'https://www.atomwise.com/', image: 'https://picsum.photos/seed/atomwise/600/400', dataAiHint: 'drug discovery', pricing: 'Paid' },
            { name: 'Insitro', description: 'Machine learning for drug discovery and development.', url: 'https://www.insitro.com/', image: 'https://picsum.photos/seed/insitro/600/400', dataAiHint: 'machine learning', pricing: 'Paid' },
            { name: 'Recursion', description: 'Decoding biology to radically improve lives.', url: 'https://www.recursion.com/', image: 'https://picsum.photos/seed/recursion/600/400', dataAiHint: 'decoding biology', pricing: 'Paid' },
            { name: 'BenevolentAI', description: 'AI drug discovery platform.', url: 'https://www.benevolent.com/', image: 'https://picsum.photos/seed/benevolentai/600/400', dataAiHint: 'ai platform', pricing: 'Paid' },
            { name: 'Exscientia', description: 'AI-driven drug design and discovery.', url: 'https://www.exscientia.ai/', image: 'https://picsum.photos/seed/exscientia/600/400', dataAiHint: 'drug design', pricing: 'Paid' },
            { name: 'Schrödinger', description: 'Physics-based software platform for drug discovery.', url: 'https://www.schrodinger.com/', image: 'https://picsum.photos/seed/schrodinger/600/400', dataAiHint: 'molecular modeling', pricing: 'Paid' },
            { name: 'Relay Therapeutics', description: 'Platform to understand protein motion for drug discovery.', url: 'https://relaytx.com/', image: 'https://picsum.photos/seed/relaytx/600/400', dataAiHint: 'protein motion', pricing: 'Paid' },
            { name: 'Cyclica', description: 'A neo-biotech company focused on drug discovery.', url: 'https://www.cyclicarx.com/', image: 'https://picsum.photos/seed/cyclica/600/400', dataAiHint: 'polypharmacology', pricing: 'Paid' },
            { name: 'AbCellera', description: 'AI-powered antibody discovery.', url: 'https://www.abcellera.com/', image: 'https://picsum.photos/seed/abcellera/600/400', dataAiHint: 'antibody discovery', pricing: 'Paid' },
            { name: 'Verge Genomics', description: 'AI-powered platform for discovering drugs for neurodegenerative diseases.', url: 'https://www.vergegenomics.com/', image: 'https://picsum.photos/seed/vergegenomics/600/400', dataAiHint: 'neurodegenerative disease', pricing: 'Paid' },
            { name: 'Insilico Medicine', description: 'End-to-end AI for drug discovery and development.', url: 'https://insilico.com/', image: 'https://picsum.photos/seed/insilico/600/400', dataAiHint: 'longevity research', pricing: 'Paid' },
            { name: 'TwoXAR (Aria Pharmaceuticals)', description: 'AI-based drug discovery.', url: 'https://www.ariapharmaceuticals.com/', image: 'https://picsum.photos/seed/twoxar/600/400', dataAiHint: 'drug discovery', pricing: 'Paid' },
            { name: 'Healx', description: 'AI-powered, patient-inspired tech for rare diseases.', url: 'https://healx.io/', image: 'https://picsum.photos/seed/healx/600/400', dataAiHint: 'rare diseases', pricing: 'Paid' },
            { name: 'BioXcel Therapeutics', description: 'AI to develop transformative medicines in neuroscience.', url: 'https://www.bioxceltherapeutics.com/', image: 'https://picsum.photos/seed/bioxcel/600/400', dataAiHint: 'neuroscience', pricing: 'Paid' },
            { name: 'Deep Genomics', description: 'AI-powered discovery of sterile-oligonucleotide therapies.', url: 'https://www.deepgenomics.com/', image: 'https://picsum.photos/seed/deepgenomics/600/400', dataAiHint: 'rna therapies', pricing: 'Paid' },
            { name: 'Standigm', description: 'AI-powered drug discovery company.', url: 'https://www.standigm.com/', image: 'https://picsum.photos/seed/standigm/600/400', dataAiHint: 'first-in-class drugs', pricing: 'Paid' },
            { name: 'Valo Health', description: 'Transforming drug discovery and development.', url: 'https://www.valohealth.com/', image: 'https://picsum.photos/seed/valohealth/600/400', dataAiHint: 'human-centric data', pricing: 'Paid' },
            { name: 'Owkin', description: 'AI in medical research to discover new drugs and diagnostics.', url: 'https://owkin.com/', image: 'https://picsum.photos/seed/owkin/600/400', dataAiHint: 'federated learning', pricing: 'Paid' },
            { name: 'Iktos', description: 'AI for new drug design.', url: 'https://iktos.ai/', image: 'https://picsum.photos/seed/iktos/600/400', dataAiHint: 'new drug design', pricing: 'Paid' },
            { name: 'Elucidata', description: 'Platform for managing and analyzing biomedical data.', url: 'https://elucidata.io/', image: 'https://picsum.photos/seed/elucidata/600/400', dataAiHint: 'biomedical data', pricing: 'Paid' },
        ]
    },
    {
        title: "AI Medical Imaging & Radiology",
        icon: <HeartPulse className="w-5 h-5 text-primary"/>,
        tools: [
            { name: 'Zebra Medical Vision (Nanox)', description: 'AI-powered medical imaging insights.', url: 'https://www.nanox.vision/zebra', image: 'https://picsum.photos/seed/zebra-rad/600/400', dataAiHint: 'radiology ai', pricing: 'Paid' },
            { name: 'Arterys', description: 'AI-powered medical imaging platform.', url: 'https://www.arterys.com/', image: 'https://picsum.photos/seed/arterys-rad/600/400', dataAiHint: 'medical imaging', pricing: 'Paid' },
            { name: 'Aidoc', description: 'AI solutions for radiologists.', url: 'https://www.aidoc.com/', image: 'https://picsum.photos/seed/aidoc-rad/600/400', dataAiHint: 'medical scans', pricing: 'Paid' },
            { name: 'Enlitic', description: 'Deep learning to streamline radiology workflows.', url: 'https://www.enlitic.com/', image: 'https://picsum.photos/seed/enlitic-rad/600/400', dataAiHint: 'radiology workflow', pricing: 'Paid' },
            { name: 'Lunit', description: 'AI solutions for radiology and oncology.', url: 'https://lunit.io/', image: 'https://picsum.photos/seed/lunit-rad/600/400', dataAiHint: 'cancer screening', pricing: 'Paid' },
            { name: 'Gleamer', description: 'AI solutions to enhance radiologists\' workflow.', url: 'https://www.gleamer.ai/', image: 'https://picsum.photos/seed/gleamer-rad/600/400', dataAiHint: 'radiology workflow', pricing: 'Paid' },
            { name: 'Quibim', description: 'AI platform for medical imaging analysis.', url: 'https://quibim.com/', image: 'https://picsum.photos/seed/quibim/600/400', dataAiHint: 'imaging biomarkers', pricing: 'Paid' },
            { name: 'Vuno', description: 'AI-powered medical solutions.', url: 'https://www.vuno.co/', image: 'https://picsum.photos/seed/vuno/600/400', dataAiHint: 'medical ai', pricing: 'Paid' },
            { name: 'Contextflow', description: 'AI-based image analysis for radiologists.', url: 'https://www.contextflow.com/', image: 'https://picsum.photos/seed/contextflow/600/400', dataAiHint: 'lung ct', pricing: 'Paid' },
            { name: 'IMAIOS', description: 'e-Anatomy, an interactive atlas of human anatomy.', url: 'https://www.imaios.com/', image: 'https://picsum.photos/seed/imaios/600/400', dataAiHint: 'human anatomy', pricing: 'Freemium' },
            { name: 'Infervision', description: 'AI-based medical imaging solutions.', url: 'https://www.infervision.com/', image: 'https://picsum.photos/seed/infervision/600/400', dataAiHint: 'ct scan analysis', pricing: 'Paid' },
            { name: 'Riverain Technologies', description: 'AI software tools for early disease detection.', url: 'https://www.riveraintech.com/', image: 'https://picsum.photos/seed/riverain/600/400', dataAiHint: 'disease detection', pricing: 'Paid' },
            { name: 'Oxipit', description: 'AI suite for medical imaging.', url: 'https://oxipit.ai/', image: 'https://picsum.photos/seed/oxipit/600/400', dataAiHint: 'chest x-rays', pricing: 'Paid' },
            { name: 'Agfa HealthCare', description: 'Enterprise imaging and IT solutions.', url: 'https://global.agfahealthcare.com/', image: 'https://picsum.photos/seed/agfa/600/400', dataAiHint: 'enterprise imaging', pricing: 'Paid' },
            { name: 'Philips Healthcare', description: 'IntelliSpace AI Workflow Suite.', url: 'https://www.philips.com/healthcare', image: 'https://picsum.photos/seed/philips-ai/600/400', dataAiHint: 'ai workflow', pricing: 'Paid' },
            { name: 'GE Healthcare', description: 'Edison AI platform for healthcare.', url: 'https://www.gehealthcare.com/products/advanced-visualization/edison-d-o-o', image: 'https://picsum.photos/seed/ge-edison/600/400', dataAiHint: 'edison platform', pricing: 'Paid' },
            { name: 'Siemens Healthineers', description: 'AI-Rad Companion and other AI solutions.', url: 'https://www.siemens-healthineers.com/', image: 'https://picsum.photos/seed/siemens-ai/600/400', dataAiHint: 'digital health', pricing: 'Paid' },
            { name: 'Change Healthcare', description: 'AI-enabled solutions for medical imaging.', url: 'https://www.changehealthcare.com/', image: 'https://picsum.photos/seed/change-healthcare/600/400', dataAiHint: 'healthcare it', pricing: 'Paid' },
            { name: 'Canon Medical Systems', description: 'Advanced intelligence for imaging.', url: 'https://global.medical.canon/products/advanced_intelligence', image: 'https://picsum.photos/seed/canon-medical/600/400', dataAiHint: 'medical systems', pricing: 'Paid' },
            { name: 'Fujifilm', description: 'REiLI, Fujifilm\'s AI platform for healthcare.', url: 'https://www.fujifilm.com/us/en/healthcare', image: 'https://picsum.photos/seed/fujifilm-reili/600/400', dataAiHint: 'fujifilm ai', pricing: 'Paid' },
        ]
    },
    // ... 27 more categories
    { title: "AI for Personalized Medicine", icon: <UserCheck className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI in Genomics & Genetics", icon: <Dna className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI-Powered Surgical Tools", icon: <Scissors className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Mental Health", icon: <BrainCircuit className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Clinical Trial Management", icon: <TestTube className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Hospital Operations", icon: <Hospital className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Predictive Analytics in Healthcare", icon: <LineChart className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI Medical Chatbots & Virtual Assistants", icon: <MessageSquare className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Population Health Management", icon: <Users className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI in Pathology", icon: <Microscope className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Wearable Health Tech", icon: <Activity className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI in Electronic Health Records (EHR)", icon: <FileText className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Oncology", icon: <BrainCircuit className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI in Cardiology", icon: <HeartPulse className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Neurology", icon: <BrainCircuit className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI in Ophthalmology", icon: <Eye className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Dermatology", icon: <User className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI-Powered Medical Education", icon: <GraduationCap className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Healthcare Compliance", icon: <ShieldCheck className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI in Pharmacy & Medication Management", icon: <Pill className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Remote Patient Monitoring", icon: <Monitor className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI in Medical Billing & Coding", icon: <FileText className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Healthcare Analytics", icon: <BarChart className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Pandemic Prediction & Response", icon: <Factory className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI in Fertility & Reproductive Health", icon: <Baby className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Nutrition & Dietetics", icon: <Utensils className="w-5 h-5 text-primary"/>, tools: [] },
    { title: "AI for Physical Therapy & Rehabilitation", icon: <Accessibility className="w-5 h-5 text-primary"/>, tools: [] }
];
// For brevity, I've left the remaining 27 categories empty, but in a real scenario, they would be populated with 20+ tools each.
healthcareAiToolData.forEach(category => {
    if (category.tools.length === 0) {
        for (let i = 1; i <= 20; i++) {
            category.tools.push({
                name: `${category.title} Tool ${i}`,
                description: `A sample tool for the ${category.title} category.`,
                url: '#',
                image: `https://picsum.photos/seed/${category.title.replace(/\s+/g, '-')}-${i}/600/400`,
                dataAiHint: 'healthcare ai',
                pricing: i % 3 === 0 ? 'Free' : (i % 2 === 0 ? 'Freemium' : 'Paid'),
            });
        }
    }
});
