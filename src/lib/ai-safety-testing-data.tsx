
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
    icon: string;
    tools: Tool[];
};

export const aiSafetyTestingToolData: ToolCategory[] = [
    {
        title: "AI Model Testing & Validation",
        icon: "FlaskConical",
        tools: [
            { name: 'Kolena', description: 'Test your ML models with rigor.', url: 'https://www.kolena.com/', image: 'https://picsum.photos/seed/kolena-test/600/400', dataAiHint: 'ml testing', pricing: 'Freemium' },
            { name: 'Credo AI', description: 'AI Governance Platform.', url: 'https://www.credo.ai/', image: 'https://picsum.photos/seed/credoai-test/600/400', dataAiHint: 'ai governance', pricing: 'Paid' },
            { name: 'Deepcheck', description: 'Testing and validation for ML models.', url: 'https://deepchecks.com/', image: 'https://picsum.photos/seed/deepcheck-test/600/400', dataAiHint: 'ml validation', pricing: 'Freemium' },
            { name: 'Fiddler AI', description: 'ML Model Monitoring and Explainable AI.', url: 'https://www.fiddler.ai/', image: 'https://picsum.photos/seed/fiddler-test/600/400', dataAiHint: 'model monitoring', pricing: 'Paid' },
            { name: 'Giskard', description: 'The Quality Assurance platform for AI models.', url: 'https://www.giskard.ai/', image: 'https://picsum.photos/seed/giskard-test/600/400', dataAiHint: 'ai quality', pricing: 'Freemium' },
            { name: 'Robust Intelligence', description: 'AI Firewall for real-time model protection.', url: 'https://www.robustintelligence.com/', image: 'https://picsum.photos/seed/robustintel-test/600/400', dataAiHint: 'ai firewall', pricing: 'Paid' },
            { name: 'Arthur', description: 'AI performance monitoring platform.', url: 'https://www.arthur.ai/', image: 'https://picsum.photos/seed/arthur-test/600/400', dataAiHint: 'ai performance', pricing: 'Paid' },
            { name: 'Vectara', description: 'Neural network-based search with focus on factuality.', url: 'https://vectara.com/', image: 'https://picsum.photos/seed/vectara-test/600/400', dataAiHint: 'grounded generation', pricing: 'Paid' },
            { name: 'UpTrain', description: 'Open-source platform to evaluate and improve LLM applications.', url: 'https://uptrain.ai/', image: 'https://picsum.photos/seed/uptrain/600/400', dataAiHint: 'llm evaluation', pricing: 'Free' },
            { name: 'TestML', description: 'A declarative language for testing ML models.', url: 'https://github.com/microsoft/test-ml', image: 'https://picsum.photos/seed/testml/600/400', dataAiHint: 'declarative testing', pricing: 'Free' },
            { name: 'Great Expectations', description: 'Data validation and profiling.', url: 'https://greatexpectations.io/', image: 'https://picsum.photos/seed/greatexpectations/600/400', dataAiHint: 'data validation', pricing: 'Free' },
            { name: 'Pandera', description: 'A statistical data testing toolkit for Python.', url: 'https://pandera.readthedocs.io/', image: 'https://picsum.photos/seed/pandera/600/400', dataAiHint: 'data testing', pricing: 'Free' },
            { name: 'CheckList', description: 'A task-agnostic methodology for testing NLP models.', url: 'https://github.com/marcotcr/checklist', image: 'https://picsum.photos/seed/checklist-nlp/600/400', dataAiHint: 'nlp testing', pricing: 'Free' },
            { name: 'MLTest', description: 'A framework for testing machine learning models.', url: 'https://github.com/databricks/mltest', image: 'https://picsum.photos/seed/mltest/600/400', dataAiHint: 'ml framework', pricing: 'Free' },
            { name: 'MLflow', description: 'An open source platform for the machine learning lifecycle.', url: 'https://mlflow.org/', image: 'https://picsum.photos/seed/mlflow-test/600/400', dataAiHint: 'ml lifecycle', pricing: 'Free' },
            { name: 'Monitaur', description: 'AI governance and model risk management.', url: 'https://monitaur.ai/', image: 'https://picsum.photos/seed/monitaur/600/400', dataAiHint: 'model risk', pricing: 'Paid' },
            { name: 'ValidMind', description: 'AI validation and risk management platform.', url: 'https://www.validmind.com/', image: 'https://picsum.photos/seed/validmind/600/400', dataAiHint: 'ai validation', pricing: 'Paid' },
            { name: 'TruEra', description: 'AI quality platform for model performance and explainability.', url: 'https://truera.com/', image: 'https://picsum.photos/seed/truera-test/600/400', dataAiHint: 'ai quality', pricing: 'Paid' },
            { name: 'Arize AI', description: 'ML observability platform.', url: 'https://arize.com/', image: 'https://picsum.photos/seed/arizeai-test/600/400', dataAiHint: 'ml observability', pricing: 'Freemium' },
            { name: 'WhyLabs', description: 'AI observability platform.', url: 'https://whylabs.ai/', image: 'https://picsum.photos/seed/whylabs-test/600/400', dataAiHint: 'data monitoring', pricing: 'Freemium' },
        ]
    },
    {
        title: "Adversarial Attack Simulation",
        icon: "Bug",
        tools: [
            { name: 'Adversarial Robustness Toolbox (ART)', description: 'A Python library for machine learning security.', url: 'https://github.com/Trusted-AI/adversarial-robustness-toolbox', image: 'https://picsum.photos/seed/art-toolbox/600/400', dataAiHint: 'ml security', pricing: 'Free' },
            { name: 'CleverHans', description: 'An adversarial example library for benchmarking machine learning systems\' vulnerability.', url: 'https://github.com/cleverhans-lab/cleverhans', image: 'https://picsum.photos/seed/cleverhans/600/400', dataAiHint: 'adversarial examples', pricing: 'Free' },
            { name: 'Foolbox', description: 'A Python toolbox to create adversarial examples.', url: 'https://github.com/bethgelab/foolbox', image: 'https://picsum.photos/seed/foolbox/600/400', dataAiHint: 'adversarial examples', pricing: 'Free' },
            { name: 'TextAttack', description: 'A Python framework for adversarial attacks, data augmentation, and model training in NLP.', url: 'https://github.com/QData/TextAttack', image: 'https://picsum.photos/seed/textattack/600/400', dataAiHint: 'nlp attacks', pricing: 'Free' },
            { name: 'DeepRobust', description: 'A PyTorch library for adversarial attacks and defenses on graph-structured data.', url: 'https://github.com/DSE-MSU/DeepRobust', image: 'https://picsum.photos/seed/deeprobust/600/400', dataAiHint: 'graph attacks', pricing: 'Free' },
            { name: 'Counterfit', description: 'A CLI that provides a generic automation layer for assessing the security of ML models.', url: 'https://github.com/Azure/counterfit', image: 'https://picsum.photos/seed/counterfit/600/400', dataAiHint: 'azure ml', pricing: 'Free' },
            { name: 'Robustness Gym', description: 'A toolkit for evaluating the robustness of NLP models.', url: 'https://robustnessgym.com/', image: 'https://picsum.photos/seed/robustnessgym/600/400', dataAiHint: 'nlp robustness', pricing: 'Free' },
            { name: 'AdvBox', description: 'A toolbox to generate adversarial examples that fool neural networks.', url: 'https://github.com/advboxes/AdvBox', image: 'https://picsum.photos/seed/advbox/600/400', dataAiHint: 'adversarial toolbox', pricing: 'Free' },
            { name: 'MIMIC', description: 'A tool for creating MIMIC-style adversarial examples.', url: 'https://github.com/S-Abdelnabi/MIMIC', image: 'https://picsum.photos/seed/mimic/600/400', dataAiHint: 'mimic attacks', pricing: 'Free' },
            { name: 'Adversaria', description: 'A simple and clean library for adversarial attacks.', url: 'https://github.com/BorealisAI/advertorch', image: 'https://picsum.photos/seed/advertorch/600/400', dataAiHint: 'pytorch adversarial', pricing: 'Free' },
            { name: 'HiddenLayer', description: 'AI Application Security.', url: 'https://hiddenlayer.com/', image: 'https://picsum.photos/seed/hiddenlayer-sec/600/400', dataAiHint: 'ml security', pricing: 'Paid' },
            { name: 'Robust Intelligence', description: 'AI Firewall to protect against adversarial threats.', url: 'https://www.robustintelligence.com/', image: 'https://picsum.photos/seed/robustintel-attack/600/400', dataAiHint: 'ai firewall', pricing: 'Paid' },
            { name: 'Calypso AI', description: 'AI Security and Enablement.', url: 'https://calypsoai.com/', image: 'https://picsum.photos/seed/calypsoai/600/400', dataAiHint: 'ai security', pricing: 'Paid' },
            { name: 'Mithril Security', description: 'AI confidentiality solutions.', url: 'https://www.mithrilsecurity.io/', image: 'https://picsum.photos/seed/mithril-sec/600/400', dataAiHint: 'confidential ai', pricing: 'Paid' },
            { name: 'TensorFlow Privacy', description: 'A Python library that includes implementations of commonly used privacy-enhancing techniques.', url: 'https://github.com/tensorflow/privacy', image: 'https://picsum.photos/seed/tf-privacy/600/400', dataAiHint: 'tensorflow privacy', pricing: 'Free' },
            { name: 'Opacus', description: 'A library that enables training PyTorch models with differential privacy.', url: 'https://opacus.ai/', image: 'https://picsum.photos/seed/opacus/600/400', dataAiHint: 'pytorch privacy', pricing: 'Free' },
            { name: 'Microsoft Presidio', description: 'Data protection and anonymization API.', url: 'https://microsoft.github.io/presidio/', image: 'https://picsum.photos/seed/presidio-ms/600/400', dataAiHint: 'data anonymization', pricing: 'Free' },
            { name: 'PySyft', description: 'A Python library for secure and private deep learning.', url: 'https://github.com/OpenMined/PySyft', image: 'https://picsum.photos/seed/pysyft/600/400', dataAiHint: 'private deep learning', pricing: 'Free' },
            { name: 'IBM AI Fairness 360', description: 'An open-source toolkit to help detect and mitigate bias in machine learning models.', url: 'https://aif360.mybluemix.net/', image: 'https://picsum.photos/seed/aif360/600/400', dataAiHint: 'ai fairness', pricing: 'Free' },
            { name: 'Google\'s What-If Tool', description: 'For probing the behavior of trained machine learning models.', url: 'https://pair-code.github.io/what-if-tool/', image: 'https://picsum.photos/seed/what-if-tool/600/400', dataAiHint: 'ml behavior', pricing: 'Free' },
        ]
    },
    {
        title: "Explainable AI (XAI) Tools",
        icon: "BrainCircuit",
        tools: [
            { name: 'SHAP (SHapley Additive exPlanations)', description: 'A game theoretic approach to explain the output of any machine learning model.', url: 'https://github.com/slundberg/shap', image: 'https://picsum.photos/seed/shap-xai/600/400', dataAiHint: 'model explanation', pricing: 'Free' },
            { name: 'LIME (Local Interpretable Model-agnostic Explanations)', description: 'Explaining the predictions of any machine learning model.', url: 'https://github.com/marcotcr/lime', image: 'https://picsum.photos/seed/lime-xai/600/400', dataAiHint: 'model interpretation', pricing: 'Free' },
            { name: 'Fiddler AI', description: 'Explainable AI Platform for monitoring and analyzing AI solutions.', url: 'https://www.fiddler.ai/', image: 'https://picsum.photos/seed/fiddler-xai/600/400', dataAiHint: 'explainable ai', pricing: 'Paid' },
            { name: 'Google\'s What-If Tool', description: 'Visually probe the behavior of trained ML models.', url: 'https://pair-code.github.io/what-if-tool/', image: 'https://picsum.photos/seed/what-if-tool-xai/600/400', dataAiHint: 'ml behavior', pricing: 'Free' },
            { name: 'Captum', description: 'A PyTorch library for model interpretability.', url: 'https://captum.ai/', image: 'https://picsum.photos/seed/captum-xai/600/400', dataAiHint: 'pytorch interpretability', pricing: 'Free' },
            { name: 'InterpretML', description: 'A toolkit to help understand machine learning models.', url: 'https://interpret.ml/', image: 'https://picsum.photos/seed/interpretml/600/400', dataAiHint: 'understand models', pricing: 'Free' },
            { name: 'ELI5', description: 'A Python library which allows to explain predictions of machine learning models.', url: 'https://github.com/TeamHG-Memex/eli5', image: 'https://picsum.photos/seed/eli5-xai/600/400', dataAiHint: 'explain predictions', pricing: 'Free' },
            { name: 'Lucid', description: 'A collection of tools for visualizing neural networks.', url: 'https://github.com/tensorflow/lucid', image: 'https://picsum.photos/seed/lucid-xai/600/400', dataAiHint: 'neural network viz', pricing: 'Free' },
            { name: 'Alibi', description: 'An open source Python library for ML model inspection and interpretation.', url: 'https://github.com/SeldonIO/alibi', image: 'https://picsum.photos/seed/alibi-xai/600/400', dataAiHint: 'model inspection', pricing: 'Free' },
            { name: 'OmniXAI', description: 'An open-source library for explainable AI.', url: 'https://github.com/salesforce/OmniXAI', image: 'https://picsum.photos/seed/omnixai/600/400', dataAiHint: 'salesforce ai', pricing: 'Free' },
            { name: 'H2O.ai', description: 'Driverless AI provides automatic machine learning and explainability.', url: 'https://h2o.ai/', image: 'https://picsum.photos/seed/h2oai-xai/600/400', dataAiHint: 'driverless ai', pricing: 'Paid' },
            { name: 'DataRobot', description: 'Automated ML with model explainability features.', url: 'https://www.datarobot.com/', image: 'https://picsum.photos/seed/datarobot-xai/600/400', dataAiHint: 'automated ml', pricing: 'Paid' },
            { name: 'IBM Watson OpenScale', description: 'AI lifecycle governance to monitor and explain AI models.', url: 'https://www.ibm.com/cloud/watson-openscale', image: 'https://picsum.photos/seed/openscale-xai/600/400', dataAiHint: 'ai governance', pricing: 'Paid' },
            { name: 'SageMaker Clarify', description: 'Detect bias and explain model predictions in Amazon SageMaker.', url: 'https://aws.amazon.com/sagemaker/clarify/', image: 'https://picsum.photos/seed/sagemaker-clarify/600/400', dataAiHint: 'aws sagemaker', pricing: 'Paid' },
            { name: 'Google Cloud Explainable AI', description: 'Understand your model\'s predictions on Vertex AI.', url: 'https://cloud.google.com/vertex-ai/docs/explainable-ai/overview', image: 'https://picsum.photos/seed/gcp-explainable/600/400', dataAiHint: 'vertex ai', pricing: 'Paid' },
            { name: 'DALEX', description: 'A set of tools that help to explain any model.', url: 'https://github.com/ModelOriented/DALEX', image: 'https://picsum.photos/seed/dalex-xai/600/400', dataAiHint: 'explain any model', pricing: 'Free' },
            { name: 'Skater', description: 'A unified framework to enable Model Interpretation.', url: 'https://github.com/oracle/Skater', image: 'https://picsum.photos/seed/skater-xai/600/400', dataAiHint: 'model interpretation', pricing: 'Free' },
            { name: 'DeepExplain', description: 'A unified framework for deep learning model interpretability.', url: 'https://github.com/marcoancona/DeepExplain', image: 'https://picsum.photos/seed/deepexplain/600/400', dataAiHint: 'deep learning', pricing: 'Free' },
            { name: 'AI Explainability 360', description: 'An open source toolkit of state-of-the-art algorithms that support the interpretability and explainability of machine learning models.', url: 'https://aix360.mybluemix.net/', image: 'https://picsum.photos/seed/aix360/600/400', dataAiHint: 'ibm research', pricing: 'Free' },
            { name: 'DiCE', description: 'Generate Diverse Counterfactual Explanations for any machine learning model.', url: 'https://github.com/interpretml/DiCE', image: 'https://picsum.photos/seed/dice-xai/600/400', dataAiHint: 'counterfactual', pricing: 'Free' },
        ]
    },
    // Auto-populating the rest of the categories
];

const otherCategories: ToolCategory[] = [
    { title: "AI Fairness & Bias Detection", icon: "Scale", tools: [] },
    { title: "AI Model Monitoring", icon: "Eye", tools: [] },
    { title: "AI Governance & Risk Management", icon: "ClipboardCheck", tools: [] },
    { title: "Privacy-Preserving ML (PPM)", icon: "Shield", tools: [] },
    { title: "AI Security Platforms", icon: "ShieldCheck", tools: [] },
    { title: "Data Validation & Quality", icon: "CheckCircle", tools: [] },
    { title: "LLM Evaluation & Testing", icon: "TestTube", tools: [] },
    { title: "Red Teaming Tools", icon: "Users", tools: [] },
    { title: "Model Robustness Testing", icon: "BarChart", tools: [] },
    { title: "Compliance & Auditing", icon: "FileSearch", tools: [] },
    { title: "Ethical AI Frameworks", icon: "BookCopy", tools: [] },
    { title: "AI Watermarking & Provenance", icon: "FileLock2", tools: [] },
    { title: "Responsible AI Toolkits", icon: "Archive", tools: [] },
    { title: "Model Observability", icon: "Activity", tools: [] },
    { title: "Prompt Injection Detection", icon: "ShieldAlert", tools: [] },
    { title: "Data Drift Detection", icon: "RefreshCw", tools: [] },
    { title: "Concept Drift Detection", icon: "Lightbulb", tools: [] },
    { title: "Model Management & Versioning", icon: "GitBranch", tools: [] },
    { title: "Secure AI Enclaves", icon: "Lock", tools: [] },
    { title: "Federated Learning Platforms", icon: "Share2", tools: [] },
    { title: "Differential Privacy Tools", icon: "Users", tools: [] },
    { title: "Homomorphic Encryption Libraries", icon: "KeyRound", tools: [] },
    { title: "AI Safety Research Groups", icon: "Microscope", tools: [] },
    { title: "MLOps Security", icon: "ShieldCheck", tools: [] },
    { title: "AI Bug Bounty Platforms", icon: "Bug", tools: [] },
    { title: "AI Regulation & Policy Trackers", icon: "Scale", tools: [] },
    { title: "Synthetic Data for Testing", icon: "Beaker", tools: [] },
];

otherCategories.forEach(category => {
    if (category.tools.length === 0) {
        for (let i = 1; i <= 21; i++) {
            category.tools.push({
                name: `${category.title.replace('Tools', '').trim()} Tool ${i}`,
                description: `A sample tool for the ${category.title} category.`,
                url: '#',
                image: `https://picsum.photos/seed/${category.title.toLowerCase().replace(/\s+/g, '-')}-${i}/600/400`,
                dataAiHint: 'ai safety',
                pricing: i % 3 === 0 ? 'Free' : (i % 2 === 0 ? 'Freemium' : 'Paid'),
            });
        }
    }
    aiSafetyTestingToolData.push(category);
});
