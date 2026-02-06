

'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

const translations = {
  en: {
    tabs: {
      home: 'Home',
      tools: 'Tools',
      trending: 'Trending',
      settings: 'Settings',
    },
    home: {
        seeAll: 'See all',
        popularTools: {
            title: 'Free popular tools'
        },
        quickTools: {
            title: 'Quick Tools',
            categories: {
                imageEditing: 'Image Editing Tools',
                videoEditing: 'Video Editing Tools',
                contentCreation: 'Content Creation Tools',
                productivity: 'Productivity Tools',
                writing: 'Writing Tools',
                forStudents: 'Student Tools',
                summarizing: 'Summarizing Tools',
                forBusiness: 'Business Tools',
                chatbotAssistants: 'Chatbot & Assistant Tools',
                codingTools: 'Coding Tools',
                aiConverters: 'AI Converter Tools',
                dataAnalytics: 'Data Analytics Tools',
                eCommerce: 'E-Commerce Tools',
                forEducation: 'Education Tools',
                financeAccounting: 'Finance & Accounting Tools',
                forFreelancers: 'Freelancer Tools',
                graphicDesign: 'Graphic Design Tools',
                invoiceBilling: 'Invoice & Billing Tools',
                marketingSeo: 'Marketing & SEO Tools',
                researchKnowledge: 'Research & Knowledge Tools',
                securityPrivacy: 'Security & Privacy Tools',
                seoAnalytics: 'SEO & Analytics Tools',
                socialMedia: 'Social Media Tools',
                forStartups: 'Startup Tools',
                pdfFileTools: 'PDF & File Tools',
                websiteBuilderTools: 'Website Builder Tools',
                advertisingTools: 'Advertising Tools',
                timeTrackingTools: 'Time Tracking Tools',
                projectManagementTools: 'Project Management Tools',
                hrRecruitmentTools: 'HR & Recruitment Tools',
                customerSupportTools: 'Customer Support Tools',
                databaseBackendTools: 'Database & Backend Tools',
                automationWorkflowTools: 'Automation & Workflow Tools',
                aiAgents: 'AI Agents',
                voiceAudioAi: 'Voice & Audio AI',
                aiSearch: 'AI Search',
                healthcareAi: 'Healthcare AI',
                legalAi: 'Legal AI',
                automationRpa: 'Automation (RPA)',
                aiInfrastructure: 'AI Infrastructure',
                aiSafetyTesting: 'AI Safety & Testing',
                aiMarketplaces: 'AI Marketplaces',
                smartIntegrations: 'Smart Integrations',
            }
        },
        libraries: {
            title: 'Libraries',
            'Forcontentcreation': 'For content creation',
            'Forstudents': 'For students',
            'Forproductivity': 'For productivity',
        },
        recents: {
            empty: 'No recent tools',
            emptyDescription: 'Tools you visit will appear here.',
        }
    },
    tools: {
        trendingBadge: 'Trending'
    },
    chat: {
        toolSuggestion: 'Tool Suggestion',
    },
    settings: {
        account: {
            title: 'Account',
            profile: 'Profile Details',
            password: 'Change Password',
            delete: 'Delete Account',
        },
        privacy: {
            title: 'Privacy & Security',
            permissions: 'Data Permissions',
            analytics: 'App Analytics',
        },
        notifications: {
            title: 'Notifications',
            push: 'Push Notifications',
            email: 'Email Alerts',
            category: 'Notification Categories',
            categoryDescription: 'Customize which notifications you receive.',
            mute: 'Mute All Notifications',
        },
        appearance: {
            title: 'Appearance',
            theme: {
                title: 'Theme',
                light: 'Light',
                dark: 'Dark',
                system: 'System',
            },
            fontSize: {
                title: 'Font Size',
                small: 'Small',
                medium: 'Medium',
                large: 'Large',
            }
        },
        language: {
            title: 'Language',
            app: 'App Language',
            description: 'Content Language'
        },
        preferences: {
            title: 'Preferences',
            defaultCategories: 'Default Categories',
            saveFavourites: 'Save Favourites Locally',
            autoUpdate: 'Auto-update Tools List',
            download: 'Download App to Device',
        },
        billing: {
            title: 'Billing & Subscription',
            status: 'Subscription Status',
            plans: 'Manage Plan',
            history: 'Billing History',
        },
        sync: {
            title: 'Cloud Sync',
            cloud: 'Enable Cloud Sync',
            backup: 'Create a Backup',
            restore: 'Restore from Backup',
        },
        support: {
            title: 'Support & Help',
            faq: 'Frequently Asked Questions',
            contact: 'Contact Support',
            report: 'Report a Bug',
            tutorials: 'App Tutorials',
        },
        about: {
            title: 'About',
            version: 'App Version',
            terms: 'Terms of Service',
            privacy: 'Privacy Policy',
            developer: 'Developer Info',
        }
    }
  },
  hi: {
    tabs: {
      home: 'होम',
      tools: 'टूल्स',
      trending: 'ट्रेंडिंग',
      settings: 'सेटिंग्स',
    },
    home: {
        seeAll: 'सभी देखें',
        popularTools: {
            title: 'लोकप्रिय टूल्स'
        },
        quickTools: {
            title: 'क्विक टूल्स',
            categories: {
                imageEditing: 'छवि संपादन उपकरण',
                videoEditing: 'वीडियो एडिटिंग उपकरण',
                contentCreation: 'कंटेंट क्रिएशन उपकरण',
                productivity: 'प्रोडक्टिविटी उपकरण',
                writing: 'लेखन उपकरण',
                forStudents: 'छात्र उपकरण',
                summarizing: 'सारांश उपकरण',
                forBusiness: 'व्यापार उपकरण',
                chatbotAssistants: 'चैटबॉट और सहायक उपकरण',
                codingTools: 'कोडिंग उपकरण',
                aiConverters: 'एआई कन्वर्टर उपकरण',
                dataAnalytics: 'डेटा एनालिटिक्स उपकरण',
                eCommerce: 'ई-कॉमर्स उपकरण',
                forEducation: 'शिक्षा उपकरण',
                financeAccounting: 'वित्त और लेखा उपकरण',
                forFreelancers: 'फ्रीलांसर उपकरण',
                graphicDesign: 'ग्राफिक डिजाइन उपकरण',
                invoiceBilling: 'चालान और बिलिंग उपकरण',
                marketingSeo: 'मार्केटिंग और एसईओ उपकरण',
                researchKnowledge: 'अनुसंधान और ज्ञान उपकरण',
                securityPrivacy: 'सुरक्षा और गोपनीयता उपकरण',
                seoAnalytics: 'एसईओ और एनालिटिक्स उपकरण',
                socialMedia: 'सोशल मीडिया उपकरण',
                forStartups: 'स्टार्टअप उपकरण',
                pdfFileTools: 'पीडीएफ और फ़ाइल उपकरण',
                websiteBuilderTools: 'वेबसाइट बिल्डर उपकरण',
                advertisingTools: 'विज्ञापन उपकरण',
                timeTrackingTools: 'समय ट्रैकिंग उपकरण',
                projectManagementTools: 'परियोजना प्रबंधन उपकरण',
                hrRecruitmentTools: 'मानव संसाधन और भर्ती उपकरण',
                customerSupportTools: 'ग्राहक सहायता उपकरण',
                databaseBackendTools: 'डेटाबेस और बैकएंड उपकरण',
                automationWorkflowTools: 'स्वचालन और वर्कफ़्लो उपकरण',
                aiAgents: 'एआई एजेंट्स',
                voiceAudioAi: 'वॉयस और ऑडियो एआई',
                aiSearch: 'एआई सर्च',
                healthcareAi: 'हेल्थकेयर एआई',
                legalAi: 'लीगल एआई',
                automationRpa: 'ऑटोमेशन (RPA)',
                aiInfrastructure: 'एआई इंफ्रास्ट्रक्चर',
                aiSafetyTesting: 'एआई सेफ्टी और टेस्टिंग',
                aiMarketplaces: 'एआई मार्केटप्लेस',
                smartIntegrations: 'स्मार्ट इंटीग्रेशन',
            }
        },
        libraries: {
            title: 'लाइब्रेरी',
            'Forcontentcreation': 'कंटेंट क्रिएशन के लिए',
            'Forstudents': 'छात्रों के लिए',
            'Forproductivity': 'प्रोडक्टिविटी के लिए',
        },
        recents: {
            empty: 'कोई हालिया टूल नहीं',
            emptyDescription: 'आपके द्वारा देखे गए टूल यहां दिखाई देंगे।',
        }
    },
    tools: {
        trendingBadge: 'ट्रेंडिंग'
    },
    chat: {
        toolSuggestion: 'टूल सुझाव',
    },
    settings: {
        account: {
            title: 'अकाउंट',
            profile: 'प्रोफ़ाइल विवरण',
            password: 'पासवर्ड बदलें',
            delete: 'अकाउंट हटाएं',
        },
        privacy: {
            title: 'प्राइवेसी और सिक्योरिटी',
            permissions: 'डेटा अनुमतियाँ',
            analytics: 'ऐप एनालिटिक्स',
        },
        notifications: {
            title: 'सूचनाएं',
            push: 'पुश सूचनाएं',
            email: 'ईमेल अलर्ट',
            category: 'सूचना श्रेणियाँ',
            categoryDescription: 'अनुकूलित करें कि आपको कौन सी सूचनाएं प्राप्त हों।',
            mute: 'सभी सूचनाएं म्यूट करें',
        },
        appearance: {
            title: 'अपियरेंस',
            theme: {
                title: 'थीम',
                light: 'लाइट',
                dark: 'डार्क',
                system: 'सिस्टम',
            },
            fontSize: {
                title: 'फ़ॉन्ट आकार',
                small: 'छोटा',
                medium: 'मध्यम',
                large: 'बड़ा',
            }
        },
        language: {
            title: 'भाषा',
            app: 'ऐप की भाषा',
            description: 'कंटेंट की भाषा'
        },
        preferences: {
            title: 'प्रेफरेंसेज',
            defaultCategories: 'डिफ़ॉल्ट श्रेणियाँ',
            saveFavourites: 'पसंदीदा स्थानीय रूप से सहेजें',
            autoUpdate: 'टूल सूची ऑटो-अपडेट करें',
            download: 'ऐप को डिवाइस पर डाउनलोड करें',
        },
        billing: {
            title: 'बिलिंग और सदस्यता',
            status: 'सदस्यता स्थिति',
            plans: 'प्लान प्रबंधित करें',
            history: 'बिलिंग इतिहास',
        },
        sync: {
            title: 'क्लाउड सिंक',
            cloud: 'क्लाउड सिंक सक्षम करें',
            backup: 'एक बैकअप बनाएं',
            restore: 'बैकअप से पुनर्स्थापित करें',
        },
        support: {
            title: 'समर्थन और सहायता',
            faq: 'अक्सर पूछे जाने वाले प्रश्न',
            contact: 'समर्थन से संपर्क करें',
            report: 'एक बग की रिपोर्ट करें',
            tutorials: 'ऐप ट्यूटोरियल',
        },
        about: {
            title: 'बारे में',
            version: 'ऐप संस्करण',
            terms: 'सेवा की शर्तें',
            privacy: 'प्राइवेसी पॉलिसी',
            developer: 'डेवलपर जानकारी',
        }
    }
  },
  es: {
    tabs: {
      home: 'Inicio',
      tools: 'Herramientas',
      trending: 'Tendencias',
      settings: 'Ajustes',
    },
    home: {
        seeAll: 'Ver todo',
        popularTools: {
            title: 'Herramientas Populares'
        },
        quickTools: {
            title: 'Herramientas Rápidas',
            categories: {
                imageEditing: 'Herramientas de Edición de Imágenes',
                videoEditing: 'Herramientas de Edición de Video',
                contentCreation: 'Herramientas de Creación de Contenido',
                productivity: 'Herramientas de Productividad',
                writing: 'Herramientas de Escritura',
                forStudents: 'Herramientas para Estudiantes',
                summarizing: 'Herramientas de Resumen',
                forBusiness: 'Herramientas de Negocios',
                chatbotAssistants: 'Herramientas de Chatbots y Asistentes',
                codingTools: 'Herramientas de Codificación',
                aiConverters: 'Herramientas de Conversión de IA',
                dataAnalytics: 'Herramientas de Análisis de Datos',
                eCommerce: 'Herramientas de Comercio Electrónico',
                forEducation: 'Herramientas de Educación',
                financeAccounting: 'Herramientas de Finanzas y Contabilidad',
                forFreelancers: 'Herramientas para Freelancers',
                graphicDesign: 'Herramientas de Diseño Gráfico',
                invoiceBilling: 'Herramientas de Facturación y Cobros',
                marketingSeo: 'Herramientas de Marketing y SEO',
                researchKnowledge: 'Herramientas de Investigación y Conocimiento',
                securityPrivacy: 'Herramientas de Seguridad y Privacidad',
                seoAnalytics: 'Herramientas de SEO y Analítica',
                socialMedia: 'Herramientas de Redes Sociales',
                forStartups: 'Herramientas para Startups',
                pdfFileTools: 'Herramientas de PDF y Archivos',
                websiteBuilderTools: 'Herramientas de Creación de Sitios Web',
                advertisingTools: 'Herramientas de Publicidad',
                timeTrackingTools: 'Herramientas de Seguimiento de Tiempo',
                projectManagementTools: 'Herramientas de Gestión de Proyectos',
                hrRecruitmentTools: 'Herramientas de RRHH y Contratación',
                customerSupportTools: 'Herramientas de Soporte al Cliente',
                databaseBackendTools: 'Herramientas de Base de Datos y Backend',
                automationWorkflowTools: 'Herramientas de Automatización y Flujo de Trabajo',
                aiAgents: 'Agentes de IA',
                voiceAudioAi: 'IA de Voz y Audio',
                aiSearch: 'Búsqueda con IA',
                healthcareAi: 'IA para Salud',
                legalAi: 'IA Legal',
                automationRpa: 'Automatización (RPA)',
                aiInfrastructure: 'Infraestructura de IA',
                aiSafetyTesting: 'Seguridad y Pruebas de IA',
                aiMarketplaces: 'Mercados de IA',
                smartIntegrations: 'Integraciones Inteligentes',
            }
        },
        libraries: {
            title: 'Bibliotecas',
            'Forcontentcreation': 'Para creación de contenido',
            'Forstudents': 'Para estudiantes',
            'Forproductivity': 'Para productividad',
        },
        recents: {
            empty: 'No hay herramientas recientes',
            emptyDescription: 'Las herramientas que visites aparecerán aquí.',
        }
    },
    tools: {
        trendingBadge: 'Tendencia'
    },
    chat: {
        toolSuggestion: 'Sugerencia de Herramienta',
    },
    settings: {
        account: {
            title: 'Cuenta',
            profile: 'Detalles del Perfil',
            password: 'Cambiar Contraseña',
            delete: 'Eliminar Cuenta',
        },
        privacy: {
            title: 'Privacidad y Seguridad',
            permissions: 'Permisos de Datos',
            analytics: 'Análisis de la Aplicación',
        },
        notifications: {
            title: 'Notificaciones',
            push: 'Notificaciones Push',
            email: 'Alertas por Correo',
            category: 'Categorías de Notificación',
            categoryDescription: 'Personaliza qué notificaciones recibes.',
            mute: 'Silenciar Todas las Notificaciones',
        },
        appearance: {
            title: 'Apariencia',
            theme: {
                title: 'Tema',
                light: 'Claro',
                dark: 'Oscuro',
                system: 'Sistema',
            },
            fontSize: {
                title: 'Tamaño de Fuente',
                small: 'Pequeño',
                medium: 'Mediano',
                large: 'Grande',
            }
        },
        language: {
            title: 'Idioma',
            app: 'Idioma de la Aplicación',
            description: 'Idioma del Contenido'
        },
        preferences: {
            title: 'Preferencias',
            defaultCategories: 'Categorías Predeterminadas',
            saveFavourites: 'Guardar Favoritos Localmente',
            autoUpdate: 'Actualizar Lista de Herramientas Automáticamente',
            download: 'Descargar Aplicación en el Dispositivo',
        },
        billing: {
            title: 'Facturación y Suscripción',
            status: 'Estado de la Suscripción',
            plans: 'Gestionar Plan',
            history: 'Historial de Facturación',
        },
        sync: {
            title: 'Sincronización en la Nube',
            cloud: 'Habilitar Sincronización en la Nube',
            backup: 'Crear una Copia de Seguridad',
            restore: 'Restaurar desde Copia de Seguridad',
        },
        support: {
            title: 'Soporte y Ayuda',
            faq: 'Preguntas Frecuentes',
            contact: 'Contactar a Soporte',
            report: 'Reportar un Error',
            tutorials: 'Tutoriales de la Aplicación',
        },
        about: {
            title: 'Acerca de',
            version: 'Versión de la Aplicación',
            terms: 'Términos de Servicio',
            privacy: 'Política de Privacidad',
            developer: 'Información del Desarrollador',
        }
    }
  },
  fr: {
    tabs: {
      home: 'Accueil',
      tools: 'Outils',
      trending: 'Tendances',
      settings: 'Paramètres',
    },
    home: {
        seeAll: 'Voir tout',
        popularTools: {
            title: 'Outils Populaires'
        },
        quickTools: {
            title: 'Outils Rapides',
            categories: {
                imageEditing: 'Outils d\'Édition d\'Image',
                videoEditing: 'Outils de Montage Vidéo',
                contentCreation: 'Outils de Création de Contenu',
                productivity: 'Outils de Productivité',
                writing: 'Outils d\'Écriture',
                forStudents: 'Outils pour Étudiants',
                summarizing: 'Outils de Résumé',
                forBusiness: 'Outils Professionnels',
                chatbotAssistants: 'Outils de Chatbots et Assistants',
                codingTools: 'Outils de Codage',
                aiConverters: 'Outils de Conversion IA',
                dataAnalytics: 'Outils d\'Analyse de Données',
                eCommerce: 'Outils de Commerce Électronique',
                forEducation: 'Outils pour l\'Éducation',
                financeAccounting: 'Outils de Finance et Comptabilité',
                forFreelancers: 'Outils pour Indépendants',
                graphicDesign: 'Outils de Design Graphique',
                invoiceBilling: 'Outils de Facturation et Paiements',
                marketingSeo: 'Outils de Marketing et SEO',
                researchKnowledge: 'Outils de Recherche et Connaissances',
                securityPrivacy: 'Outils de Sécurité et Confidentialité',
                seoAnalytics: 'Outils de SEO et Analytique',
                socialMedia: 'Outils de Réseaux Sociaux',
                forStartups: 'Outils pour Startups',
                pdfFileTools: 'Outils PDF et Fichiers',
                websiteBuilderTools: 'Outils de Création de Sites Web',
                advertisingTools: 'Outils Publicitaires',
                timeTrackingTools: 'Outils de Suivi du Temps',
                projectManagementTools: 'Outils de Gestion de Projet',
                hrRecruitmentTools: 'Outils RH et Recrutement',
                customerSupportTools: 'Outils de Support Client',
                databaseBackendTools: 'Outils de Base de Données et Backend',
                automationWorkflowTools: 'Outils d\'Automatisation et de Flux de Travail',
                aiAgents: 'Agents d\'IA',
                voiceAudioAi: 'IA Voix et Audio',
                aiSearch: 'Recherche IA',
                healthcareAi: 'IA pour la Santé',
                legalAi: 'IA Juridique',
                automationRpa: 'Automatisation (RPA)',
                aiInfrastructure: 'Infrastructure d\'IA',
                aiSafetyTesting: 'Sécurité et Tests d\'IA',
                aiMarketplaces: 'Places de Marché d\'IA',
                smartIntegrations: 'Intégrations Intelligentes',
            }
        },
        libraries: {
            title: 'Bibliothèques',
            'Forcontentcreation': 'Pour la création de contenu',
            'Forstudents': 'Pour les étudiants',
            'Forproductivity': 'Pour la productivité',
        },
        recents: {
            empty: 'Aucun outil récent',
            emptyDescription: 'Les outils que vous visitez apparaîtront ici.',
        }
    },
    tools: {
        trendingBadge: 'Tendance'
    },
    chat: {
        toolSuggestion: 'Suggestion d\'Outil',
    },
    settings: {
        account: {
            title: 'Compte',
            profile: 'Détails du Profil',
            password: 'Changer le Mot de Passe',
            delete: 'Supprimer le Compte',
        },
        privacy: {
            title: 'Confidentialité et Sécurité',
            permissions: 'Autorisations des Données',
            analytics: 'Analyses de l\'Application',
        },
        notifications: {
            title: 'Notifications',
            push: 'Notifications Push',
            email: 'Alertes par E-mail',
            category: 'Catégories de Notifications',
            categoryDescription: 'Personnalisez les notifications que vous recevez.',
            mute: 'Désactiver Toutes les Notifications',
        },
        appearance: {
            title: 'Apparence',
            theme: {
                title: 'Thème',
                light: 'Clair',
                dark: 'Sombre',
                system: 'Système',
            },
            fontSize: {
                title: 'Taille de la Police',
                small: 'Petite',
                medium: 'Moyenne',
                large: 'Grande',
            }
        },
        language: {
            title: 'Langue',
            app: 'Langue de l\'Application',
            description: 'Langue du Contenu'
        },
        preferences: {
            title: 'Préférences',
            defaultCategories: 'Catégories par Défaut',
            saveFavourites: 'Enregistrer les Favoris Localement',
            autoUpdate: 'Mettre à Jour Automatiquement la Liste des Outils',
            download: 'Télécharger l\'Application sur l\'Appareil',
        },
        billing: {
            title: 'Facturation et Abonnement',
            status: 'Statut de l\'Abonnement',
            plans: 'Gérer le Plan',
            history: 'Historique de Facturation',
        },
        sync: {
            title: 'Synchronisation Cloud',
            cloud: 'Activer la Synchronisation Cloud',
            backup: 'Créer une Sauvegarde',
            restore: 'Restaurer à partir d\'une Sauvegarde',
        },
        support: {
            title: 'Support et Aide',
            faq: 'Questions Fréquemment Posées',
            contact: 'Contacter le Support',
            report: 'Signaler un Bug',
            tutorials: 'Tutoriels de l\'Application',
        },
        about: {
            title: 'À Propos',
            version: 'Version de l\'Application',
            terms: 'Conditions d\'Utilisation',
            privacy: 'Politique de Confidentialité',
            developer: 'Infos Développeur',
        }
    }
  },
  zh: {
    tabs: {
      home: '首页',
      tools: '工具',
      trending: '趋势',
      settings: '设置',
    },
    home: {
        seeAll: '查看全部',
        popularTools: {
            title: '热门工具'
        },
        quickTools: {
            title: '快速工具',
            categories: {
                imageEditing: '图像编辑工具',
                videoEditing: '视频编辑工具',
                contentCreation: '内容创作工具',
                productivity: '生产力工具',
                writing: '写作工具',
                forStudents: '学生工具',
                summarizing: '总结工具',
                forBusiness: '商务工具',
                chatbotAssistants: '聊天机器人和助手工具',
                codingTools: '编码工具',
                aiConverters: 'AI转换工具',
                dataAnalytics: '数据分析工具',
                eCommerce: '电子商务工具',
                forEducation: '教育工具',
                financeAccounting: '财务与会计工具',
                forFreelancers: '自由职业者工具',
                graphicDesign: '平面设计工具',
                invoiceBilling: '发票和账单工具',
                marketingSeo: '市场营销与SEO工具',
                researchKnowledge: '研究与知识工具',
                securityPrivacy: '安全与隐私工具',
                seoAnalytics: 'SEO与分析工具',
                socialMedia: '社交媒体工具',
                forStartups: '初创企业工具',
                pdfFileTools: 'PDF和文件工具',
                websiteBuilderTools: '网站构建工具',
                advertisingTools: '广告工具',
                timeTrackingTools: '时间跟踪工具',
                projectManagementTools: '项目管理工具',
                hrRecruitmentTools: '人力资源和招聘工具',
                customerSupportTools: '客户支持工具',
                databaseBackendTools: '数据库和后端工具',
                automationWorkflowTools: '自动化和工作流程工具',
                aiAgents: '人工智能代理',
                voiceAudioAi: '语音和音频AI',
                aiSearch: 'AI搜索',
                healthcareAi: '医疗保健AI',
                legalAi: '法律AI',
                automationRpa: '自动化 (RPA)',
                aiInfrastructure: 'AI基础设施',
                aiSafetyTesting: 'AI安全与测试',
                aiMarketplaces: 'AI市场',
                smartIntegrations: '智能集成',
            }
        },
        libraries: {
            title: '库',
            'Forcontentcreation': '用于内容创作',
            'Forstudents': '给学生',
            'Forproductivity': '为了生产力',
        },
        recents: {
            empty: '没有最近的工具',
            emptyDescription: '您访问的工具将显示在此处。',
        }
    },
    tools: {
        trendingBadge: '趋势'
    },
    chat: {
        toolSuggestion: '工具建议',
    },
    settings: {
        account: {
            title: '帐户',
            profile: '个人资料详情',
            password: '更改密码',
            delete: '删除帐户',
        },
        privacy: {
            title: '隐私与安全',
            permissions: '数据权限',
            analytics: '应用分析',
        },
        notifications: {
            title: '通知',
            push: '推送通知',
            email: '电子邮件提醒',
            category: '通知类别',
            categoryDescription: '自定义您收到的通知。',
            mute: '静音所有通知',
        },
        appearance: {
            title: '外貌',
            theme: {
                title: '主题',
                light: '浅色',
                dark: '深色',
                system: '系统',
            },
            fontSize: {
                title: '字体大小',
                small: '小',
                medium: '中',
                large: '大',
            }
        },
        language: {
            title: '语言',
            app: '应用语言',
            description: '内容语言'
        },
        preferences: {
            title: '偏好',
            defaultCategories: '默认类别',
            saveFavourites: '在本地保存收藏夹',
            autoUpdate: '自动更新工具列表',
            download: '将应用下载到设备',
        },
        billing: {
            title: '账单和订阅',
            status: '订阅状态',
            plans: '管理计划',
            history: '账单历史',
        },
        sync: {
            title: '云同步',
            cloud: '启用云同步',
            backup: '创建备份',
            restore: '从备份还原',
        },
        support: {
            title: '支持与帮助',
            faq: '常见问题',
            contact: '联系支持',
            report: '报告错误',
            tutorials: '应用教程',
        },
        about: {
            title: '关于',
            version: '应用版本',
            terms: '服务条款',
            privacy: '隐私政策',
            developer: '开发者信息',
        }
    }
  },
  ar: {
    tabs: {
      home: 'الرئيسية',
      tools: 'الأدوات',
      trending: 'شائع',
      settings: 'الإعدادات',
    },
    home: {
        seeAll: 'عرض الكل',
        popularTools: {
            title: 'الأدوات الشائعة'
        },
        quickTools: {
            title: 'أدوات سريعة',
            categories: {
                imageEditing: 'أدوات تحرير الصور',
                videoEditing: 'أدوات تحرير الفيديو',
                contentCreation: 'أدوات إنشاء المحتوى',
                productivity: 'أدوات الإنتاجية',
                writing: 'أدوات الكتابة',
                forStudents: 'أدوات للطلاب',
                summarizing: 'أدوات التلخيص',
                forBusiness: 'أدوات للأعمال',
                chatbotAssistants: 'أدوات روبوتات الدردشة والمساعدين',
                codingTools: 'أدوات الترميز',
                aiConverters: 'أدوات تحويل الذكاء الاصطناعي',
                dataAnalytics: 'أدوات تحليلات البيانات',
                eCommerce: 'أدوات التجارة الإلكترونية',
                forEducation: 'أدوات للتعليم',
                financeAccounting: 'أدوات المالية والمحاسبة',
                forFreelancers: 'أدوات للمستقلين',
                graphicDesign: 'أدوات تصميم الجرافيك',
                invoiceBilling: 'أدوات الفواتير والفوترة',
                marketingSeo: 'أدوات التسويق وتحسين محركات البحث',
                researchKnowledge: 'أدوات البحث والمعرفة',
                securityPrivacy: 'أدوات الأمان والخصوصية',
                seoAnalytics: 'أدوات تحسين محركات البحث والتحليلات',
                socialMedia: 'أدوات وسائل التواصل الاجتماعي',
                forStartups: 'أدوات للشركات الناشئة',
                pdfFileTools: 'أدوات PDF والملفات',
                websiteBuilderTools: 'أدوات بناء المواقع',
                advertisingTools: 'أدوات الإعلان',
                timeTrackingTools: 'أدوات تتبع الوقت',
                projectManagementTools: 'أدوات إدارة المشاريع',
                hrRecruitmentTools: 'أدوات الموارد البشرية والتوظيف',
                customerSupportTools: 'أدوات دعم العملاء',
                databaseBackendTools: 'أدوات قواعد البيانات والخلفية',
                automationWorkflowTools: 'أدوات الأتمتة وسير العمل',
                aiAgents: 'وكلاء الذكاء الاصطناعي',
                voiceAudioAi: 'الذكاء الاصطناعي للصوت والصوتيات',
                aiSearch: 'بحث الذكاء الاصطناعي',
                healthcareAi: 'الذكاء الاصطناعي في الرعاية الصحية',
                legalAi: 'الذكاء الاصطناعي القانوني',
                automationRpa: 'الأتمتة (RPA)',
                aiInfrastructure: 'البنية التحتية للذكاء الاصطناعي',
                aiSafetyTesting: 'سلامة واختبار الذكاء الاصطناعي',
                aiMarketplaces: 'أسواق الذكاء الاصطناعي',
                smartIntegrations: 'التكاملات الذكية',
            }
        },
        libraries: {
            title: 'المكتبات',
            'Forcontentcreation': 'لإنشاء المحتوى',
            'Forstudents': 'للطلاب',
            'Forproductivity': 'للإنتاجية',
        },
        recents: {
            empty: 'لا توجد أدوات حديثة',
            emptyDescription: 'الأدوات التي تزورها ستظهر هنا.',
        }
    },
    tools: {
        trendingBadge: 'شائع'
    },
    chat: {
        toolSuggestion: 'اقتراح أداة',
    },
    settings: {
        account: {
            title: 'الحساب',
            profile: 'تفاصيل الملف الشخصي',
            password: 'تغيير كلمة المرور',
            delete: 'حذف الحساب',
        },
        privacy: {
            title: 'الخصوصية والأمان',
            permissions: 'أذونات البيانات',
            analytics: 'تحليلات التطبيق',
        },
        notifications: {
            title: 'الإشعارات',
            push: 'إشعارات الدفع',
            email: 'تنبيهات البريد الإلكتروني',
            category: 'فئات الإشعارات',
            categoryDescription: 'تخصيص الإشعارات التي تتلقاها.',
            mute: 'كتم جميع الإشعارات',
        },
        appearance: {
            title: 'المظهر',
            theme: {
                title: 'المظهر',
                light: 'فاتح',
                dark: 'داكن',
                system: 'النظام',
            },
            fontSize: {
                title: 'حجم الخط',
                small: 'صغير',
                medium: 'متوسط',
                large: 'كبير',
            }
        },
        language: {
            title: 'اللغة',
            app: 'لغة التطبيق',
            description: 'لغة المحتوى'
        },
        preferences: {
            title: 'التفضيلات',
            defaultCategories: 'الفئات الافتراضية',
            saveFavourites: 'حفظ المفضلات محليًا',
            autoUpdate: 'تحديث قائمة الأدوات تلقائيًا',
            download: 'تنزيل التطبيق على الجهاز',
        },
        billing: {
            title: 'الفواتير والاشتراك',
            status: 'حالة الاشتراك',
            plans: 'إدارة الخطة',
            history: 'سجل الفواتير',
        },
        sync: {
            title: 'مزامنة السحابة',
            cloud: 'تمكين مزامنة السحابة',
            backup: 'إنشاء نسخة احتياطية',
            restore: 'الاستعادة من نسخة احتياطية',
        },
        support: {
            title: 'الدعم والمساعدة',
            faq: 'الأسئلة الشائعة',
            contact: 'اتصل بالدعم',
            report: 'الإبلاغ عن خطأ',
            tutorials: 'دروس التطبيق',
        },
        about: {
            title: 'حول',
            version: 'إصدار التطبيق',
            terms: 'شروط الخدمة',
            privacy: 'سياسة الخصوصية',
            developer: 'معلومات المطور',
        }
    }
  }
};

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);
    document.documentElement.lang = storedLanguage;
  }, []);

  const handleSetLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
  };

  const t = (key: string) => {
    const keys = key.split('.');
    let result: any = translations[language as keyof typeof translations];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        // Fallback to English if translation is missing
        let fallbackResult: any = translations['en'];
        for (const fk of keys) {
            fallbackResult = fallbackResult?.[fk];
            if(fallbackResult === undefined) return key;
        }
        return fallbackResult;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
