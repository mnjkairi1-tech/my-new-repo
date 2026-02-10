
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
            { name: 'Kolena', description: 'Test your ML models with rigor.', url: 'https://www.kolena.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=kolena.com', dataAiHint: 'ml testing', pricing: 'Freemium' },
            { name: 'Credo AI', description: 'AI Governance Platform.', url: 'https://www.credo.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=credo.ai', dataAiHint: 'ai governance', pricing: 'Paid' },
            { name: 'Deepcheck', description: 'Testing and validation for ML models.', url: 'https://deepchecks.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=deepchecks.com', dataAiHint: 'ml validation', pricing: 'Freemium' },
            { name: 'Fiddler AI', description: 'ML Model Monitoring and Explainable AI.', url: 'https://www.fiddler.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fiddler.ai', dataAiHint: 'model monitoring', pricing: 'Paid' },
            { name: 'Giskard', description: 'The Quality Assurance platform for AI models.', url: 'https://www.giskard.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=giskard.ai', dataAiHint: 'ai quality', pricing: 'Freemium' },
            { name: 'Robust Intelligence', description: 'AI Firewall for real-time model protection.', url: 'https://www.robustintelligence.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=robustintelligence.com', dataAiHint: 'ai firewall', pricing: 'Paid' },
            { name: 'Arthur', description: 'AI performance monitoring platform.', url: 'https://www.arthur.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arthur.ai', dataAiHint: 'ai performance', pricing: 'Paid' },
            { name: 'Vectara', description: 'Neural network-based search with focus on factuality.', url: 'https://vectara.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=vectara.com', dataAiHint: 'grounded generation', pricing: 'Paid' },
            { name: 'UpTrain', description: 'Open-source platform to evaluate and improve LLM applications.', url: 'https://uptrain.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=uptrain.ai', dataAiHint: 'llm evaluation', pricing: 'Free' },
            { name: 'TestML', description: 'A declarative language for testing ML models.', url: 'https://github.com/microsoft/test-ml', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'declarative testing', pricing: 'Free' },
            { name: 'Great Expectations', description: 'Data validation and profiling.', url: 'https://greatexpectations.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=greatexpectations.io', dataAiHint: 'data validation', pricing: 'Free' },
            { name: 'Pandera', description: 'A statistical data testing toolkit for Python.', url: 'https://pandera.readthedocs.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pandera.readthedocs.io', dataAiHint: 'data testing', pricing: 'Free' },
            { name: 'CheckList', description: 'A task-agnostic methodology for testing NLP models.', url: 'https://github.com/marcotcr/checklist', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'nlp testing', pricing: 'Free' },
            { name: 'MLTest', description: 'A framework for testing machine learning models.', url: 'https://github.com/databricks/mltest', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'ml framework', pricing: 'Free' },
            { name: 'MLflow', description: 'An open source platform for the machine learning lifecycle.', url: 'https://mlflow.org/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mlflow.org', dataAiHint: 'ml lifecycle', pricing: 'Free' },
            { name: 'Monitaur', description: 'AI governance and model risk management.', url: 'https://monitaur.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=monitaur.ai', dataAiHint: 'model risk', pricing: 'Paid' },
            { name: 'ValidMind', description: 'AI validation and risk management platform.', url: 'https://www.validmind.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=validmind.com', dataAiHint: 'ai validation', pricing: 'Paid' },
            { name: 'TruEra', description: 'AI quality platform for model performance and explainability.', url: 'https://truera.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=truera.com', dataAiHint: 'ai quality', pricing: 'Paid' },
            { name: 'Arize AI', description: 'ML observability platform.', url: 'https://arize.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=arize.com', dataAiHint: 'ml observability', pricing: 'Freemium' },
            { name: 'WhyLabs', description: 'AI observability platform.', url: 'https://whylabs.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=whylabs.ai', dataAiHint: 'data monitoring', pricing: 'Freemium' },
        ]
    },
    {
        title: "Adversarial Attack Simulation",
        icon: "Bug",
        tools: [
            { name: 'Adversarial Robustness Toolbox (ART)', description: 'A Python library for machine learning security.', url: 'https://github.com/Trusted-AI/adversarial-robustness-toolbox', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'ml security', pricing: 'Free' },
            { name: 'CleverHans', description: 'An adversarial example library for benchmarking machine learning systems\' vulnerability.', url: 'https://github.com/cleverhans-lab/cleverhans', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'adversarial examples', pricing: 'Free' },
            { name: 'Foolbox', description: 'A Python toolbox to create adversarial examples.', url: 'https://github.com/bethgelab/foolbox', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'adversarial examples', pricing: 'Free' },
            { name: 'TextAttack', description: 'A Python framework for adversarial attacks, data augmentation, and model training in NLP.', url: 'https://github.com/QData/TextAttack', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'nlp attacks', pricing: 'Free' },
            { name: 'DeepRobust', description: 'A PyTorch library for adversarial attacks and defenses on graph-structured data.', url: 'https://github.com/DSE-MSU/DeepRobust', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'graph attacks', pricing: 'Free' },
            { name: 'Counterfit', description: 'A CLI that provides a generic automation layer for assessing the security of ML models.', url: 'https://github.com/Azure/counterfit', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'azure ml', pricing: 'Free' },
            { name: 'Robustness Gym', description: 'A toolkit for evaluating the robustness of NLP models.', url: 'https://robustnessgym.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=robustnessgym.com', dataAiHint: 'nlp robustness', pricing: 'Free' },
            { name: 'AdvBox', description: 'A toolbox to generate adversarial examples that fool neural networks.', url: 'https://github.com/advboxes/AdvBox', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'adversarial toolbox', pricing: 'Free' },
            { name: 'MIMIC', description: 'A tool for creating MIMIC-style adversarial examples.', url: 'https://github.com/S-Abdelnabi/MIMIC', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'mimic attacks', pricing: 'Free' },
            { name: 'Adversaria', description: 'A simple and clean library for adversarial attacks.', url: 'https://github.com/BorealisAI/advertorch', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'pytorch adversarial', pricing: 'Free' },
            { name: 'HiddenLayer', description: 'AI Application Security.', url: 'https://hiddenlayer.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=hiddenlayer.com', dataAiHint: 'ml security', pricing: 'Paid' },
            { name: 'Robust Intelligence', description: 'AI Firewall to protect against adversarial threats.', url: 'https://www.robustintelligence.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=robustintelligence.com', dataAiHint: 'ai firewall', pricing: 'Paid' },
            { name: 'Calypso AI', description: 'AI Security and Enablement.', url: 'https://calypsoai.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=calypsoai.com', dataAiHint: 'ai security', pricing: 'Paid' },
            { name: 'Mithril Security', description: 'AI confidentiality solutions.', url: 'https://www.mithrilsecurity.io/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mithrilsecurity.io', dataAiHint: 'confidential ai', pricing: 'Paid' },
            { name: 'TensorFlow Privacy', description: 'A Python library that includes implementations of commonly used privacy-enhancing techniques.', url: 'https://github.com/tensorflow/privacy', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'tensorflow privacy', pricing: 'Free' },
            { name: 'Opacus', description: 'A library that enables training PyTorch models with differential privacy.', url: 'https://opacus.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=opacus.ai', dataAiHint: 'pytorch privacy', pricing: 'Free' },
            { name: 'Microsoft Presidio', description: 'Data protection and anonymization API.', url: 'https://microsoft.github.io/presidio/', image: 'https://www.google.com/s2/favicons?sz=128&domain=microsoft.github.io', dataAiHint: 'data anonymization', pricing: 'Free' },
            { name: 'PySyft', description: 'A Python library for secure and private deep learning.', url: 'https://github.com/OpenMined/PySyft', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'private deep learning', pricing: 'Free' },
            { name: 'IBM AI Fairness 360', description: 'An open-source toolkit to help detect and mitigate bias in machine learning models.', url: 'https://aif360.mybluemix.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mybluemix.net', dataAiHint: 'ai fairness', pricing: 'Free' },
            { name: 'Google\'s What-If Tool', description: 'For probing the behavior of trained machine learning models.', url: 'https://pair-code.github.io/what-if-tool/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pair-code.github.io', dataAiHint: 'ml behavior', pricing: 'Free' },
        ]
    },
    {
        title: "Explainable AI (XAI) Tools",
        icon: "BrainCircuit",
        tools: [
            { name: 'SHAP (SHapley Additive exPlanations)', description: 'A game theoretic approach to explain the output of any machine learning model.', url: 'https://github.com/slundberg/shap', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'model explanation', pricing: 'Free' },
            { name: 'LIME (Local Interpretable Model-agnostic Explanations)', description: 'Explaining the predictions of any machine learning model.', url: 'https://github.com/marcotcr/lime', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'model interpretation', pricing: 'Free' },
            { name: 'Fiddler AI', description: 'Explainable AI Platform for monitoring and analyzing AI solutions.', url: 'https://www.fiddler.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=fiddler.ai', dataAiHint: 'explainable ai', pricing: 'Paid' },
            { name: 'Google\'s What-If Tool', description: 'Visually probe the behavior of trained ML models.', url: 'https://pair-code.github.io/what-if-tool/', image: 'https://www.google.com/s2/favicons?sz=128&domain=pair-code.github.io', dataAiHint: 'ml behavior', pricing: 'Free' },
            { name: 'Captum', description: 'A PyTorch library for model interpretability.', url: 'https://captum.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=captum.ai', dataAiHint: 'pytorch interpretability', pricing: 'Free' },
            { name: 'InterpretML', description: 'A toolkit to help understand machine learning models.', url: 'https://interpret.ml/', image: 'https://www.google.com/s2/favicons?sz=128&domain=interpret.ml', dataAiHint: 'understand models', pricing: 'Free' },
            { name: 'ELI5', description: 'A Python library which allows to explain predictions of machine learning models.', url: 'https://github.com/TeamHG-Memex/eli5', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'explain predictions', pricing: 'Free' },
            { name: 'Lucid', description: 'A collection of tools for visualizing neural networks.', url: 'https://github.com/tensorflow/lucid', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'neural network viz', pricing: 'Free' },
            { name: 'Alibi', description: 'An open source Python library for ML model inspection and interpretation.', url: 'https://github.com/SeldonIO/alibi', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'model inspection', pricing: 'Free' },
            { name: 'OmniXAI', description: 'An open-source library for explainable AI.', url: 'https://github.com/salesforce/OmniXAI', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'salesforce ai', pricing: 'Free' },
            { name: 'H2O.ai', description: 'Driverless AI provides automatic machine learning and explainability.', url: 'https://h2o.ai/', image: 'https://www.google.com/s2/favicons?sz=128&domain=h2o.ai', dataAiHint: 'driverless ai', pricing: 'Paid' },
            { name: 'DataRobot', description: 'Automated ML with model explainability features.', url: 'https://www.datarobot.com/', image: 'https://www.google.com/s2/favicons?sz=128&domain=datarobot.com', dataAiHint: 'automated ml', pricing: 'Paid' },
            { name: 'IBM Watson OpenScale', description: 'AI lifecycle governance to monitor and explain AI models.', url: 'https://www.ibm.com/cloud/watson-openscale', image: 'https://www.google.com/s2/favicons?sz=128&domain=ibm.com', dataAiHint: 'ai governance', pricing: 'Paid' },
            { name: 'SageMaker Clarify', description: 'Detect bias and explain model predictions in Amazon SageMaker.', url: 'https://aws.amazon.com/sagemaker/clarify/', image: 'https://www.google.com/s2/favicons?sz=128&domain=aws.amazon.com', dataAiHint: 'aws sagemaker', pricing: 'Paid' },
            { name: 'Google Cloud Explainable AI', description: 'Understand your model\'s predictions on Vertex AI.', url: 'https://cloud.google.com/vertex-ai/docs/explainable-ai/overview', image: 'https://www.google.com/s2/favicons?sz=128&domain=cloud.google.com', dataAiHint: 'vertex ai', pricing: 'Paid' },
            { name: 'DALEX', description: 'A set of tools that help to explain any model.', url: 'https://github.com/ModelOriented/DALEX', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'explain any model', pricing: 'Free' },
            { name: 'Skater', description: 'A unified framework to enable Model Interpretation.', url: 'https://github.com/oracle/Skater', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'model interpretation', pricing: 'Free' },
            { name: 'DeepExplain', description: 'A unified framework for deep learning model interpretability.', url: 'https://github.com/marcoancona/DeepExplain', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'deep learning', pricing: 'Free' },
            { name: 'AI Explainability 360', description: 'An open source toolkit of state-of-the-art algorithms that support the interpretability and explainability of machine learning models.', url: 'https://aix360.mybluemix.net/', image: 'https://www.google.com/s2/favicons?sz=128&domain=mybluemix.net', dataAiHint: 'ibm research', pricing: 'Free' },
            { name: 'DiCE', description: 'Generate Diverse Counterfactual Explanations for any machine learning model.', url: 'https://github.com/interpretml/DiCE', image: 'https://www.google.com/s2/favicons?sz=128&domain=github.com', dataAiHint: 'counterfactual', pricing: 'Free' },
        ]
    }
];
