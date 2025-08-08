export interface Translation {
  // Navigation
  nav: {
    ourWork: string;
    projects: string;
    ourImpact: string;
    aboutUs: string;
    contact: string;
    donate: string;
  };
  
  // Hero Section
  hero: {
    preserving: string;
    heritage: string;
    transforming: string;
    communities: string;
    description: string;
    learnMore: string;
    supportUs: string;
  };
  
  // Statistics
  stats: {
    projectsCompleted: string;
    schoolsHealthCenters: string;
    waterWells: string;
    cataractSurgeries: string;
  };
  
  // Challenge Section
  challenge: {
    title: string;
    description: string;
    learnMoreMission: string;
    supportToday: string;
  };
  
  // Solution Section
  solution: {
    title: string;
    description: string;
    aboutTitle: string;
    aboutDescription: string;
    readMore: string;
    education: {
      title: string;
      description: string;
    };
    healthcare: {
      title: string;
      description: string;
    };
    water: {
      title: string;
      description: string;
    };
    heritage: {
      title: string;
      description: string;
    };
  };
  
  // Team Section
  team: {
    title: string;
    description: string;
    members: {
      director: {
        name: string;
        position: string;
        description: string;
      };
      programDirector: {
        name: string;
        position: string;
        description: string;
      };
      waterCoordinator: {
        name: string;
        position: string;
        description: string;
      };
      outreachManager: {
        name: string;
        position: string;
        description: string;
      };
    };
  };
  
  // Partners Section
  partners: {
    title: string;
    description: string;
    partnersList: {
      education: string;
      health: string;
      water: string;
      community: string;
      heritage: string;
      regional: string;
      international: string;
      local: string;
    };
    partnerNames: {
      education: string;
      health: string;
      water: string;
      community: string;
      heritage: string;
      regional: string;
      international: string;
      local: string;
    };
    footerText: string;
  };
  
  // Partnership/Transparency Section
  partnership: {
    title: string;
    description: string;
    achievements: string[];
  };
  
  // Projects Section
  projects: {
    title: string;
    description: string;
    list: {
      education: {
        title: string;
        description: string;
        stat: string;
      };
      healthcare: {
        title: string;
        description: string;
        stat: string;
      };
      water: {
        title: string;
        description: string;
        stat: string;
      };
      heritage: {
        title: string;
        description: string;
        stat: string;
      };
      community: {
        title: string;
        description: string;
        stat: string;
      };
      emergency: {
        title: string;
        description: string;
        stat: string;
      };
    };
  };
  
  // Contact Page
  contact: {
    title: string;
    backToHome: string;
    intro: string;
    faqText: string;
    immediateAssistance: string;
    phoneNumber: string;
    hours: string;
    form: {
      firstName: string;
      lastName: string;
      emailAddress: string;
      mobilePhone: string;
      contactReason: string;
      message: string;
      charactersMax: string;
      remaining: string;
      sendMessage: string;
      sending: string;
      footerNote: string;
    };
    reasons: {
      general: string;
      donation: string;
      volunteer: string;
      partnership: string;
      project: string;
      media: string;
      technical: string;
      other: string;
    };
  };
  
  // Donation Section
  donation: {
    title: string;
    description: string;
    donateNow: string;
  };
  
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    contactInfo: string;
    followUs: string;
    newsletter: string;
    enterEmail: string;
    subscribe: string;
    copyright: string;
  };
  
  // Language Selection
  languageSelector: {
    selectLanguage: string;
    languages: {
      en: string;
      ar: string;
      fr: string;
    };
  };
}

// English translations
export const en: Translation = {
  nav: {
    ourWork: "Our Work",
    projects: "Projects", 
    ourImpact: "Our Impact",
    aboutUs: "About Us",
    contact: "Contact",
    donate: "DONATE"
  },
  
  hero: {
    preserving: "PRESERVING",
    heritage: "HERITAGE", 
    transforming: "TRANSFORMING",
    communities: "COMMUNITIES",
    description: "Drawing on decades of experience, ARPIECA works hand-in-hand with communities across Senegal, using innovative strategies to preserve Islamic heritage while supporting comprehensive development in education, healthcare, water accessibility, and religious services.",
    learnMore: "Learn More About Us",
    supportUs: "Support Us Today"
  },
  
  stats: {
    projectsCompleted: "Projects Completed",
    schoolsHealthCenters: "Schools & Health Centers",
    waterWells: "Water Wells",
    cataractSurgeries: "Cataract Surgeries"
  },
  
  challenge: {
    title: "THE CHALLENGE",
    description: "Vulnerable populations across Senegal, including orphans, widows, the elderly, and the sick, face significant challenges in accessing basic necessities like education, healthcare, clean water, and spiritual guidance. These communities require comprehensive support to preserve their cultural heritage while building sustainable foundations for the future.",
    learnMoreMission: "Learn More About Our Mission",
    supportToday: "Support Us Today"
  },
  
  solution: {
    title: "Our Solution",
    description: "ARPIECA addresses these challenges through integrated programs that combine immediate relief with long-term sustainable development, always respecting and preserving Islamic cultural values.",
    aboutTitle: "About ARPIECA",
    aboutDescription: "The Association pour la Renaissance du Patrimoine Islamique et de l'Expansion de la Culture Arabe has worked for decades with governments, communities, and international partners to reach comprehensive development goals. Using a unique approach that addresses both cultural preservation and modern needs, ARPIECA has made significant strides and is recognized as a leader in community-driven development across Senegal.",
    readMore: "Read More",
    education: {
      title: "Education & Learning",
      description: "Building schools, training teachers, and providing educational resources to ensure every child has access to quality education rooted in Islamic values."
    },
    healthcare: {
      title: "Healthcare Access",
      description: "Establishing health centers, medical clinics, and mobile health services to provide essential healthcare to underserved communities."
    },
    water: {
      title: "Clean Water",
      description: "Drilling water wells, installing water systems, and ensuring sustainable access to clean drinking water for entire communities."
    },
    heritage: {
      title: "Cultural Preservation", 
      description: "Protecting and promoting Islamic heritage through mosque construction, Islamic education programs, and cultural preservation initiatives."
    }
  },
  
  team: {
    title: "Our Team",
    description: "Dedicated professionals working together to preserve Islamic heritage and transform communities across Senegal.",
    members: {
      director: {
        name: "Dr. Ahmed Al-Mansouri",
        position: "Executive Director",
        description: "Leading ARPIECA's mission with 15+ years in humanitarian work and Islamic heritage preservation."
      },
      programDirector: {
        name: "Fatima Ba",
        position: "Program Director", 
        description: "Overseeing education and healthcare initiatives across Senegal's rural communities."
      },
      waterCoordinator: {
        name: "Ibrahim Diallo",
        position: "Water & Infrastructure Coordinator",
        description: "Managing water well projects and infrastructure development for sustainable community growth."
      },
      outreachManager: {
        name: "Aisha Sarr",
        position: "Community Outreach Manager",
        description: "Building relationships with local communities and coordinating volunteer programs."
      }
    }
  },
  
  partners: {
    title: "Our Partners",
    description: "Working together with trusted organizations to maximize our impact across Senegal's communities.",
    partnersList: {
      education: "Educational infrastructure development",
      health: "Healthcare service delivery",
      water: "Clean water access initiatives", 
      community: "Sustainable community programs",
      heritage: "Cultural preservation projects",
      regional: "Infrastructure and planning support",
      international: "Global humanitarian coordination",
      local: "Grassroots engagement and support"
    },
    partnerNames: {
      education: "Ministry of Education",
      health: "Health Alliance", 
      water: "Water Foundation",
      community: "Community Development Partners",
      heritage: "Islamic Heritage Foundation",
      regional: "Regional Development Council",
      international: "International Aid Network",
      local: "Local Community Leaders"
    },
    footerText: "Together, we're building stronger communities across Senegal"
  },
  
  projects: {
    title: "Our Projects",
    description: "Comprehensive development initiatives across Senegal, creating lasting impact in education, healthcare, water access, and spiritual guidance for vulnerable communities.",
    list: {
      education: {
        title: "Education Development",
        description: "Building schools and training centers to provide quality Islamic education and modern learning opportunities for children and adults.",
        stat: "15 Schools Built"
      },
      healthcare: {
        title: "Healthcare Services", 
        description: "Establishing health centers and providing medical care, including specialized services like cataract surgery for the elderly.",
        stat: "600+ Surgeries"
      },
      water: {
        title: "Water Access",
        description: "Drilling water wells and installing water systems to provide clean, sustainable water access for entire communities.",
        stat: "305 Wells Drilled"
      },
      heritage: {
        title: "Heritage Preservation",
        description: "Building and renovating mosques, establishing Islamic libraries, and preserving cultural traditions and practices.",
        stat: "12 Mosques Restored"
      },
      community: {
        title: "Community Support",
        description: "Providing direct assistance to vulnerable populations including orphans, widows, elderly, and families in need.",
        stat: "5000+ Beneficiaries"
      },
      emergency: {
        title: "Emergency Relief",
        description: "Rapid response to natural disasters and humanitarian crises, providing immediate aid and long-term recovery support.",
        stat: "24/7 Response"
      }
    }
  },
  
  contact: {
    title: "Contact Us",
    backToHome: "Back to Home",
    intro: "Hi, please complete the form below to let us know how we can help you, or check the",
    faqText: "Frequently Asked Questions",
    immediateAssistance: "For Immediate Assistance, please contact Supporter Care toll-free at",
    phoneNumber: "1-800-728-3843", 
    hours: "Mon-Fri 8:00am-5:00pm ET.",
    form: {
      firstName: "FIRST NAME",
      lastName: "LAST NAME",
      emailAddress: "EMAIL ADDRESS", 
      mobilePhone: "MOBILE PHONE (OPTIONAL)",
      contactReason: "CONTACT REASON",
      message: "MESSAGE",
      charactersMax: "characters max",
      remaining: "remaining",
      sendMessage: "Send Message",
      sending: "Sending...",
      footerNote: "Once you submit your message, a member of our email team will respond within 3-5 business days, typically sooner."
    },
    reasons: {
      general: "General Inquiry",
      donation: "Donation Support", 
      volunteer: "Volunteer Opportunities",
      partnership: "Partnership Inquiry",
      project: "Project Information",
      media: "Media & Press",
      technical: "Technical Support",
      other: "Other"
    }
  },
  
  donation: {
    title: "Support Our Mission",
    description: "Your generous donations help us continue our vital work in education, healthcare, water access, and heritage preservation across Senegal.",
    donateNow: "Donate Now"
  },
  
  partnership: {
    title: "Transparency & Partnerships",
    description: "ARPIECA operates with complete transparency and legal compliance. We work in full accordance with Senegalese law and maintain strong partnerships with certified international organizations, particularly with Kuwait-based charities and the Haute Autorité du Waqf.",
    achievements: [
      "Legally recognized humanitarian NGO in Senegal",
      "Partnership with Kuwait-based Horizons Charity Society", 
      "Collaboration with Senegalese government authorities",
      "Complete financial transparency and accountability"
    ]
  },
  
  footer: {
    description: "ARPIECA is dedicated to preserving Islamic heritage while supporting comprehensive community development across Senegal through education, healthcare, water accessibility, and religious services.",
    quickLinks: "Quick Links",
    contactInfo: "Contact Information", 
    followUs: "Follow Us",
    newsletter: "Newsletter",
    enterEmail: "Enter your email",
    subscribe: "Subscribe", 
    copyright: "© 2024 ARPIECA. All rights reserved."
  },
  
  languageSelector: {
    selectLanguage: "Select Language",
    languages: {
      en: "English",
      ar: "العربية",
      fr: "Français"
    }
  }
};

// Arabic translations
export const ar: Translation = {
  nav: {
    ourWork: "أعمالنا",
    projects: "المشاريع",
    ourImpact: "تأثيرنا", 
    aboutUs: "من نحن",
    contact: "اتصل بنا",
    donate: "تبرع"
  },
  
  hero: {
    preserving: "المحافظة",
    heritage: "التراث",
    transforming: "تحويل", 
    communities: "المجتمعات",
    description: "بالاعتماد على عقود من الخبرة، تعمل أربيكا جنباً إلى جنب مع المجتمعات في جميع أنحاء السنغال، باستخدام استراتيجيات مبتكرة للحفاظ على التراث الإسلامي مع دعم التنمية الشاملة في التعليم والرعاية الصحية وإمكانية الوصول إلى المياه والخدمات الدينية.",
    learnMore: "تعرف على المزيد عنا",
    supportUs: "ادعمنا اليوم"
  },
  
  stats: {
    projectsCompleted: "المشاريع المنجزة",
    schoolsHealthCenters: "المدارس والمراكز الصحية",
    waterWells: "آبار المياه",
    cataractSurgeries: "عمليات الساد"
  },
  
  challenge: {
    title: "التحدي",
    description: "تواجه الفئات الضعيفة في جميع أنحاء السنغال، بما في ذلك الأيتام والأرامل وكبار السن والمرضى، تحديات كبيرة في الوصول إلى الاحتياجات الأساسية مثل التعليم والرعاية الصحية والمياه النظيفة والإرشاد الروحي. تحتاج هذه المجتمعات إلى دعم شامل للحفاظ على تراثها الثقافي مع بناء أسس مستدامة للمستقبل.",
    learnMoreMission: "تعرف على المزيد حول مهمتنا",
    supportToday: "ادعمنا اليوم"
  },
  
  solution: {
    title: "حلولنا",
    description: "تواجه أربيكا هذه التحديات من خلال برامج متكاملة تجمع بين الإغاثة الفورية والتنمية المستدامة طويلة المدى، مع احترام القيم الثقافية الإسلامية والحفاظ عليها دائماً.",
    aboutTitle: "حول أربيكا",
    aboutDescription: "تعمل جمعية النهضة للتراث الإسلامي وتوسيع الثقافة العربية منذ عقود مع الحكومات والمجتمعات والشركاء الدوليين لتحقيق أهداف التنمية الشاملة. باستخدام نهج فريد يتناول كلاً من الحفاظ على التراث الثقافي والاحتياجات الحديثة، حققت أربيكا خطوات مهمة وتُعرف كرائدة في التنمية المجتمعية في جميع أنحاء السنغال.",
    readMore: "اقرأ المزيد",
    education: {
      title: "التعليم والتعلم",
      description: "بناء المدارس وتدريب المعلمين وتوفير الموارد التعليمية لضمان حصول كل طفل على تعليم جيد متجذر في القيم الإسلامية."
    },
    healthcare: {
      title: "الوصول إلى الرعاية الصحية",
      description: "إنشاء مراكز صحية وعيادات طبية وخدمات صحية متنقلة لتوفير الرعاية الصحية الأساسية للمجتمعات المحرومة."
    },
    water: {
      title: "المياه النظيفة",
      description: "حفر آبار المياه وتركيب أنظمة المياه وضمان الوصول المستدام إلى مياه الشرب النظيفة للمجتمعات بأكملها."
    },
    heritage: {
      title: "الحفاظ على التراث",
      description: "حماية وتعزيز التراث الإسلامي من خلال بناء المساجد وبرامج التعليم الإسلامي ومبادرات الحفاظ على التراث الثقافي."
    }
  },
  
  team: {
    title: "فريقنا",
    description: "مهنيون مخلصون يعملون معاً للحفاظ على التراث الإسلامي وتحويل المجتمعات في جميع أنحاء السنغال.",
    members: {
      director: {
        name: "د. محمد حبيبو ديالو",
        position: "المدير التنفيذي",
        description: "قيادة مهمة أربيكا بخبرة تزيد عن 15 عاماً في العمل الإنساني والحفاظ على التراث الإسلامي."
      },
      programDirector: {
        name: "فاطمة با",
        position: "مديرة البرامج",
        description: "الإشراف على مبادرات التعليم والرعاية الصحية في جميع أنحاء المجتمعات الريفية في السنغال."
      },
      waterCoordinator: {
        name: "إبراهيم ديالو",
        position: "منسق المياه والبنية التحتية",
        description: "إدارة مشاريع آبار المياه وتطوير البنية التحتية للنمو المستدام للمجتمع."
      },
      outreachManager: {
        name: "عائشة سار",
        position: "مديرة التواصل المجتمعي",
        description: "بناء علاقات مع المجتمعات المحلية وتنسيق برامج التطوع."
      }
    }
  },
  
  partners: {
    title: "شركاؤنا",
    description: "نعمل معاً مع المنظمات الموثوقة لتعظيم تأثيرنا في جميع أنحاء مجتمعات السنغال.",
    partnersList: {
      education: "تطوير البنية التحتية التعليمية",
      health: "تقديم الخدمات الصحية",
      water: "مبادرات الوصول إلى المياه النظيفة",
      community: "البرامج المجتمعية المستدامة",
      heritage: "مشاريع الحفاظ على التراث الثقافي",
      regional: "دعم البنية التحتية والتخطيط",
      international: "التنسيق الإنساني العالمي",
      local: "المشاركة والدعم الشعبي"
    },
    partnerNames: {
      education: "وزارة التربية والتعليم",
      health: "تحالف الصحة", 
      water: "مؤسسة المياه",
      community: "شركاء التنمية المجتمعية",
      heritage: "مؤسسة التراث الإسلامي",
      regional: "مجلس التنمية الإقليمي",
      international: "شبكة المساعدات الدولية",
      local: "قادة المجتمع المحلي"
    },
    footerText: "معاً، نبني مجتمعات أقوى في جميع أنحاء السنغال"
  },
  
  projects: {
    title: "مشاريعنا",
    description: "مبادرات التنمية الشاملة في جميع أنحاء السنغال، التي تحدث تأثيراً دائماً في التعليم والرعاية الصحية والوصول إلى المياه والإرشاد الروحي للمجتمعات الضعيفة.",
    list: {
      education: {
        title: "تطوير التعليم",
        description: "بناء المدارس ومراكز التدريب لتوفير التعليم الإسلامي الجيد وفرص التعلم الحديثة للأطفال والبالغين.",
        stat: "15 مدرسة تم بناؤها"
      },
      healthcare: {
        title: "الخدمات الصحية",
        description: "إنشاء مراكز صحية وتوفير الرعاية الطبية، بما في ذلك الخدمات المتخصصة مثل جراحة الساد لكبار السن.",
        stat: "600+ عملية جراحية"
      },
      water: {
        title: "الوصول إلى المياه",
        description: "حفر آبار المياه وتركيب أنظمة المياه لتوفير وصول نظيف ومستدام للمياه للمجتمعات بأكملها.",
        stat: "305 بئر تم حفرها"
      },
      heritage: {
        title: "الحفاظ على التراث",
        description: "بناء وترميم المساجد وإنشاء المكتبات الإسلامية والحفاظ على التقاليد والممارسات الثقافية.",
        stat: "12 مسجد تم ترميمه"
      },
      community: {
        title: "الدعم المجتمعي",
        description: "تقديم المساعدة المباشرة للسكان الضعفاء بما في ذلك الأيتام والأرامل وكبار السن والأسر المحتاجة.",
        stat: "5000+ مستفيد"
      },
      emergency: {
        title: "الإغاثة الطارئة",
        description: "الاستجابة السريعة للكوارث الطبيعية والأزمات الإنسانية، وتوفير المساعدات الفورية ودعم التعافي طويل المدى.",
        stat: "استجابة 24/7"
      }
    }
  },
  
  contact: {
    title: "اتصل بنا",
    backToHome: "العودة للرئيسية",
    intro: "مرحباً، يرجى ملء النموذج أدناه لإعلامنا بكيف يمكننا مساعدتك، أو تحقق من",
    faqText: "الأسئلة المتكررة",
    immediateAssistance: "للحصول على المساعدة الفورية، يرجى الاتصال بخدمة الدعم المجانية على",
    phoneNumber: "1-800-728-3843",
    hours: "الاثنين-الجمعة 8:00 صباحاً-5:00 مساءً بالتوقيت الشرقي.",
    form: {
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      emailAddress: "عنوان البريد الإلكتروني",
      mobilePhone: "الهاتف المحمول (اختياري)",
      contactReason: "سبب الاتصال",
      message: "الرسالة",
      charactersMax: "حرف كحد أقصى",
      remaining: "متبقي",
      sendMessage: "إرسال الرسالة",
      sending: "جاري الإرسال...",
      footerNote: "بمجرد إرسال رسالتك، سيرد عليك أحد أعضاء فريق البريد الإلكتروني خلال 3-5 أيام عمل، عادة أسرع."
    },
    reasons: {
      general: "استفسار عام",
      donation: "دعم التبرع",
      volunteer: "فرص التطوع",
      partnership: "استفسار الشراكة",
      project: "معلومات المشروع",
      media: "الإعلام والصحافة",
      technical: "الدعم الفني",
      other: "أخرى"
    }
  },
  
  donation: {
    title: "ادعم مهمتنا",
    description: "تبرعاتكم السخية تساعدنا على مواصلة عملنا الحيوي في التعليم والرعاية الصحية والوصول إلى المياه والحفاظ على التراث في جميع أنحاء السنغال.",
    donateNow: "تبرع الآن"
  },
  
  partnership: {
    title: "الشفافية والشراكات",
    description: "تعمل أربيكا بشفافية كاملة وامتثال قانوني. نعمل وفقاً تاماً للقانون السنغالي ونحافظ على شراكات قوية مع المنظمات الدولية المعتمدة، وخاصة مع الجمعيات الخيرية الكويتية والهيئة العليا للوقف.",
    achievements: [
      "منظمة غير حكومية إنسانية معترف بها قانونياً في السنغال",
      "شراكة مع جمعية آفاق الخيرية الكويتية",
      "تعاون مع السلطات الحكومية السنغالية",
      "شفافية مالية ومساءلة كاملة"
    ]
  },
  
  footer: {
    description: "أربيكا مكرسة للحفاظ على التراث الإسلامي مع دعم التنمية الشاملة للمجتمع في جميع أنحاء السنغال من خلال التعليم والرعاية الصحية وإمكانية الوصول إلى المياه والخدمات الدينية.",
    quickLinks: "روابط سريعة",
    contactInfo: "معلومات الاتصال",
    followUs: "تابعونا",
    newsletter: "النشرة الإخبارية",
    enterEmail: "أدخل بريدك الإلكتروني",
    subscribe: "اشترك",
    copyright: "© 2024 أربيكا. جميع الحقوق محفوظة."
  },
  
  languageSelector: {
    selectLanguage: "اختر اللغة",
    languages: {
      en: "English",
      ar: "العربية",
      fr: "Français"
    }
  }
};

// French translations
export const fr: Translation = {
  nav: {
    ourWork: "Notre Travail",
    projects: "Projets",
    ourImpact: "Notre Impact", 
    aboutUs: "À Propos",
    contact: "Contact",
    donate: "DONNER"
  },
  
  hero: {
    preserving: "PRÉSERVER",
    heritage: "PATRIMOINE",
    transforming: "TRANSFORMER",
    communities: "COMMUNAUTÉS",
    description: "S'appuyant sur des décennies d'expérience, ARPIECA travaille main dans la main avec les communautés à travers le Sénégal, utilisant des stratégies innovantes pour préserver le patrimoine islamique tout en soutenant un développement global dans l'éducation, les soins de santé, l'accessibilité à l'eau et les services religieux.",
    learnMore: "En Savoir Plus Sur Nous",
    supportUs: "Soutenez-Nous Aujourd'hui"
  },
  
  stats: {
    projectsCompleted: "Projets Réalisés",
    schoolsHealthCenters: "Écoles et Centres de Santé",
    waterWells: "Puits d'Eau",
    cataractSurgeries: "Chirurgies de la Cataracte"
  },
  
  challenge: {
    title: "LE DÉFI",
    description: "Les populations vulnérables à travers le Sénégal, y compris les orphelins, les veuves, les personnes âgées et les malades, font face à des défis importants pour accéder aux nécessités de base comme l'éducation, les soins de santé, l'eau potable et l'orientation spirituelle. Ces communautés nécessitent un soutien complet pour préserver leur patrimoine culturel tout en construisant des fondations durables pour l'avenir.",
    learnMoreMission: "En Savoir Plus Sur Notre Mission",
    supportToday: "Soutenez-Nous Aujourd'hui"
  },
  
  solution: {
    title: "Notre Solution",
    description: "ARPIECA aborde ces défis à travers des programmes intégrés qui combinent l'aide immédiate avec le développement durable à long terme, en respectant et préservant toujours les valeurs culturelles islamiques.",
    aboutTitle: "À Propos d'ARPIECA",
    aboutDescription: "L'Association pour la Renaissance du Patrimoine Islamique et de l'Expansion de la Culture Arabe travaille depuis des décennies avec les gouvernements, les communautés et les partenaires internationaux pour atteindre des objectifs de développement complet. En utilisant une approche unique qui aborde à la fois la préservation culturelle et les besoins modernes, ARPIECA a fait des progrès significatifs et est reconnue comme un leader dans le développement communautaire à travers le Sénégal.",
    readMore: "Lire Plus",
    education: {
      title: "Éducation et Apprentissage",
      description: "Construction d'écoles, formation d'enseignants et fourniture de ressources éducatives pour s'assurer que chaque enfant ait accès à une éducation de qualité enracinée dans les valeurs islamiques."
    },
    healthcare: {
      title: "Accès aux Soins de Santé",
      description: "Établissement de centres de santé, de cliniques médicales et de services de santé mobiles pour fournir des soins de santé essentiels aux communautés mal desservies."
    },
    water: {
      title: "Eau Potable",
      description: "Forage de puits d'eau, installation de systèmes d'eau et assurance d'un accès durable à l'eau potable propre pour des communautés entières."
    },
    heritage: {
      title: "Préservation Culturelle",
      description: "Protection et promotion du patrimoine islamique à travers la construction de mosquées, les programmes d'éducation islamique et les initiatives de préservation culturelle."
    }
  },
  
  team: {
    title: "Notre Équipe",
    description: "Des professionnels dévoués travaillant ensemble pour préserver le patrimoine islamique et transformer les communautés à travers le Sénégal.",
    members: {
      director: {
        name: "Dr. Mouhamed Habibou Diallo",
        position: "Directeur Exécutif",
        description: "Dirigeant la mission d'ARPIECA avec plus de 15 ans dans le travail humanitaire et la préservation du patrimoine islamique."
      },
      programDirector: {
        name: "Fatima Ba", 
        position: "Directrice des Programmes",
        description: "Supervisant les initiatives d'éducation et de soins de santé dans les communautés rurales du Sénégal."
      },
      waterCoordinator: {
        name: "Ibrahim Diallo",
        position: "Coordinateur Eau et Infrastructure",
        description: "Gérant les projets de puits d'eau et le développement d'infrastructures pour la croissance durable des communautés."
      },
      outreachManager: {
        name: "Aisha Sarr",
        position: "Gestionnaire de Sensibilisation Communautaire",
        description: "Construisant des relations avec les communautés locales et coordonnant les programmes de bénévolat."
      }
    }
  },
  
  partners: {
    title: "Nos Partenaires",
    description: "Travaillant ensemble avec des organisations de confiance pour maximiser notre impact dans les communautés du Sénégal.",
    partnersList: {
      education: "Développement d'infrastructure éducative",
      health: "Prestation de services de santé",
      water: "Initiatives d'accès à l'eau potable",
      community: "Programmes communautaires durables",
      heritage: "Projets de préservation culturelle",
      regional: "Soutien d'infrastructure et de planification",
      international: "Coordination humanitaire mondiale",
      local: "Engagement et soutien communautaire"
    },
    partnerNames: {
      education: "Ministère de l'Éducation",
      health: "Alliance de la Santé", 
      water: "Fondation de l'Eau",
      community: "Partenaires de Développement Communautaire",
      heritage: "Fondation du Patrimoine Islamique",
      regional: "Conseil de Développement Régional",
      international: "Réseau d'Aide Internationale",
      local: "Leaders Communautaires Locaux"
    },
    footerText: "Ensemble, nous construisons des communautés plus fortes à travers le Sénégal"
  },
  
  projects: {
    title: "Nos Projets",
    description: "Initiatives de développement complet à travers le Sénégal, créant un impact durable dans l'éducation, les soins de santé, l'accès à l'eau et l'orientation spirituelle pour les communautés vulnérables.",
    list: {
      education: {
        title: "Développement Éducatif",
        description: "Construction d'écoles et de centres de formation pour fournir une éducation islamique de qualité et des opportunités d'apprentissage modernes pour enfants et adultes.",
        stat: "15 Écoles Construites"
      },
      healthcare: {
        title: "Services de Santé",
        description: "Établissement de centres de santé et fourniture de soins médicaux, y compris des services spécialisés comme la chirurgie de la cataracte pour les personnes âgées.",
        stat: "600+ Chirurgies"
      },
      water: {
        title: "Accès à l'Eau",
        description: "Forage de puits d'eau et installation de systèmes d'eau pour fournir un accès propre et durable à l'eau pour des communautés entières.",
        stat: "305 Puits Forés"
      },
      heritage: {
        title: "Préservation du Patrimoine",
        description: "Construction et rénovation de mosquées, établissement de bibliothèques islamiques et préservation des traditions et pratiques culturelles.",
        stat: "12 Mosquées Restaurées"
      },
      community: {
        title: "Soutien Communautaire",
        description: "Fourniture d'assistance directe aux populations vulnérables y compris les orphelins, les veuves, les personnes âgées et les familles dans le besoin.",
        stat: "5000+ Bénéficiaires"
      },
      emergency: {
        title: "Secours d'Urgence",
        description: "Réponse rapide aux catastrophes naturelles et aux crises humanitaires, fournissant une aide immédiate et un soutien de récupération à long terme.",
        stat: "Réponse 24/7"
      }
    }
  },
  
  contact: {
    title: "Contactez-Nous",
    backToHome: "Retour à l'Accueil",
    intro: "Salut, veuillez remplir le formulaire ci-dessous pour nous faire savoir comment nous pouvons vous aider, ou consultez les",
    faqText: "Questions Fréquemment Posées",
    immediateAssistance: "Pour une Assistance Immédiate, veuillez contacter le Service d'Assistance gratuit au",
    phoneNumber: "1-800-728-3843",
    hours: "Lun-Ven 8h00-17h00 ET.",
    form: {
      firstName: "PRÉNOM",
      lastName: "NOM DE FAMILLE",
      emailAddress: "ADRESSE E-MAIL",
      mobilePhone: "TÉLÉPHONE PORTABLE (OPTIONNEL)",
      contactReason: "RAISON DU CONTACT",
      message: "MESSAGE",
      charactersMax: "caractères max",
      remaining: "restant",
      sendMessage: "Envoyer le Message",
      sending: "Envoi en cours...",
      footerNote: "Une fois que vous soumettez votre message, un membre de notre équipe e-mail répondra dans 3-5 jours ouvrables, généralement plus tôt."
    },
    reasons: {
      general: "Demande Générale",
      donation: "Support de Don",
      volunteer: "Opportunités de Bénévolat",
      partnership: "Demande de Partenariat",
      project: "Informations sur le Projet",
      media: "Médias et Presse",
      technical: "Support Technique",
      other: "Autre"
    }
  },
  
  donation: {
    title: "Soutenez Notre Mission",
    description: "Vos dons généreux nous aident à continuer notre travail vital dans l'éducation, les soins de santé, l'accès à l'eau et la préservation du patrimoine à travers le Sénégal.",
    donateNow: "Donner Maintenant"
  },
  
  partnership: {
    title: "Transparence et Partenariats",
    description: "ARPIECA fonctionne avec une transparence complète et une conformité légale. Nous travaillons en pleine conformité avec la loi sénégalaise et maintenons des partenariats solides avec des organisations internationales certifiées, en particulier avec des organisations caritatives koweïtiennes et la Haute Autorité du Waqf.",
    achievements: [
      "ONG humanitaire légalement reconnue au Sénégal",
      "Partenariat avec la Société Caritative Horizons basée au Koweït",
      "Collaboration avec les autorités gouvernementales sénégalaises",
      "Transparence financière et responsabilité complètes"
    ]
  },
  
  footer: {
    description: "ARPIECA se consacre à la préservation du patrimoine islamique tout en soutenant le développement communautaire global à travers le Sénégal par l'éducation, les soins de santé, l'accessibilité à l'eau et les services religieux.",
    quickLinks: "Liens Rapides",
    contactInfo: "Informations de Contact",
    followUs: "Suivez-Nous",
    newsletter: "Newsletter",
    enterEmail: "Entrez votre email",
    subscribe: "S'abonner",
    copyright: "© 2024 ARPIECA. Tous droits réservés."
  },
  
  languageSelector: {
    selectLanguage: "Sélectionner la Langue",
    languages: {
      en: "English",
      ar: "العربية",
      fr: "Français"
    }
  }
};

export const translations = { en, ar, fr };