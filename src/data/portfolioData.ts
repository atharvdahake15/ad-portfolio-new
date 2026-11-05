export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Data Analytics & BI' | 'Data Science & NLP' | 'Machine Learning & NLP';
  problem: string;
  solution: string;
  description: string;
  technologies: string[];
  features: string[];
  architecture?: string[];
  metrics?: { label: string; value: string }[];
  githubUrl: string;
  liveUrl?: string;
  demoType?: 'churn-analytics' | 'ats-analyzer' | 'fake-news' | 'streamflix' | 'indiakart';
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    description: string;
    categoryTag: string;
    highlight?: boolean;
  }[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialTag: string;
  image: string;
  pdfUrl: string;
  skillsCovered: string[];
  description: string;
}

export interface TimelineItem {
  id: string;
  type: 'education' | 'experience' | 'status' | 'internship';
  title: string;
  organization: string;
  period: string;
  location: string;
  badge: string;
  description: string;
  highlights: string[];
}

export interface PortfolioStructure {
  profile: typeof PORTFOLIO_DATA_RAW_PROFILE;
  skillsCategories: SkillCategory[];
  projects: Project[];
  certifications: Certificate[];
  timeline: TimelineItem[];
  achievements: string[];
}

const PORTFOLIO_DATA_RAW_PROFILE = {
  name: "Atharv Dahake",
  initials: "AD",
  role: "Aspiring Data Scientist | Data Analyst | Python Developer",
  secondaryRoles: [
    "Data Scientist (Aspiring)",
    "Data Analyst",
    "Python Developer",
    "Machine Learning Enthusiast",
    "Power BI & Analytics Specialist"
  ],
  location: "Yavatmal, Maharashtra, India",
  email: "atharvdahake7@gmail.com",
  phone: "+91 9699160985",
  resumeUrl: "/Atharv Resume.pdf",
  avatarUrl: "/adk.png",
  social: {
    github: "https://github.com/atharvdahake15",
    linkedin: "https://www.linkedin.com/in/atharv-dahake-703032330/",
    email: "mailto:atharvdahake7@gmail.com",
    instagram: "https://www.instagram.com/atharva_dahake_patil?igsh=MWo5NjNlMmk0M25rYw==e"
  },
  status: {
    isAvailable: true,
    text: "Available for Internships & Data Roles",
    preferredRoles: "Data Science, Data Analytics, Python Development, Machine Learning, Power BI"
  },
  heroIntro: "Passionate Computer Engineering student with hands-on experience in Python, Pandas, Power BI, Data Analytics, and Machine Learning. Experienced in customer churn analysis, content analytics, and e-commerce KPI modeling, dedicated to translating complex data into actionable executive insights.",
  aboutBio: [
    "I am a Computer Engineering student at Jagadamba College of Engineering and Technology with a deep interest in Data Science, Exploratory Data Analysis, and predictive modeling.",
    "During my 3-month Data Analytics Internship at Internmo, I worked on real-world projects analyzing customer churn patterns for telecommunications, evaluating streaming media trends for content catalogs, and building interactive sales performance dashboards for e-commerce datasets.",
    "In addition to analytics, I have engineered machine learning text classifiers including a Fake News Detection System with TF-IDF vectorization and an AI-powered Resume ATS Analyzer. My objective is to contribute analytical precision and clean Python engineering to an innovative technology team as a Data Science or Analytics Intern."
  ],
  stats: [
    { label: "Core Analytics Projects", value: "5" },
    { label: "Industry Certifications", value: "6" },
    { label: "Data Stack", value: "Python & Power BI" },
    { label: "Engineering Degree", value: "B.E. (Pursuing)" }
  ]
};

export const PORTFOLIO_DATA: PortfolioStructure = {
  profile: PORTFOLIO_DATA_RAW_PROFILE,

  skillsCategories: [
    {
      title: "Programming",
      description: "Core programming languages for data manipulation, algorithmic logic, and automation",
      iconName: "Code2",
      skills: [
        { name: "Python", description: "Primary language for Data Analytics, Pandas, Scikit-learn, and automation", categoryTag: "Core", highlight: true },
        { name: "Pandas & NumPy", description: "High-performance data manipulation, dataframe wrangling, and numerical analysis", categoryTag: "Analytics", highlight: true },
        { name: "Java", description: "Object-oriented programming concepts and algorithmic fundamentals", categoryTag: "Backend" },
        { name: "JavaScript", description: "Modern ES6+ development for interactive dashboards and web applications", categoryTag: "Web" },
        { name: "HTML5 & CSS3", description: "Semantic web architecture and responsive UI layout design", categoryTag: "Frontend" }
      ]
    },
    {
      title: "Data Science & AI",
      description: "Exploratory data analysis, machine learning algorithms, and intelligent text processing",
      iconName: "BrainCircuit",
      skills: [
        { name: "Data Analysis & EDA", description: "Statistical summaries, distribution analysis, outlier detection, and correlation mapping", categoryTag: "Analytics", highlight: true },
        { name: "Machine Learning (Scikit-learn)", description: "Supervised classification, regression, train-test splits, and model evaluation metrics", categoryTag: "ML", highlight: true },
        { name: "Natural Language Processing (NLP)", description: "Text preprocessing, tokenization, TF-IDF vectorization, and keyword matching", categoryTag: "NLP", highlight: true },
        { name: "Feature Engineering", description: "Data cleaning, missing value imputation, categorical encoding, and feature scaling", categoryTag: "Pipeline" },
        { name: "Data Structures & Algorithms", description: "Computational optimization, sorting algorithms, and memory-efficient data structures", categoryTag: "CS Core" },
        { name: "Object-Oriented Programming (OOP)", description: "Modular code architecture, inheritance, polymorphism, and encapsulation in Python", categoryTag: "Architecture" }
      ]
    },
    {
      title: "Data Visualization & BI",
      description: "Interactive visual reporting, business KPI dashboards, and executive storytelling",
      iconName: "BarChart3",
      skills: [
        { name: "Power BI", description: "Interactive business intelligence dashboards, DAX queries, and KPI reporting", categoryTag: "BI", highlight: true },
        { name: "Microsoft Excel", description: "Advanced pivot tables, VLOOKUP/XLOOKUP, formulas, and chart summaries (Certified by Simplilearn)", categoryTag: "Certified", highlight: true },
        { name: "Tableau", description: "Visual storytelling, multi-dimensional distributions, and analytical dashboarding", categoryTag: "BI" },
        { name: "Business Decision Analytics", description: "Translating data findings into actionable strategic recommendations (Deloitte certified)", categoryTag: "Strategy" }
      ]
    },
    {
      title: "Databases & Storage",
      description: "Structured relational databases and scalable NoSQL engines for analytical querying",
      iconName: "Database",
      skills: [
        { name: "SQL / MySQL", description: "Relational table schemas, structured queries, JOINs, indexing, and data filtering", categoryTag: "RDBMS", highlight: true },
        { name: "MongoDB", description: "Document-oriented NoSQL database schema design and JSON aggregation queries", categoryTag: "NoSQL" },
        { name: "MongoDB Atlas", description: "Cloud database hosting, clusters, and persistent data storage", categoryTag: "Cloud" },
        { name: "MongoDB Compass", description: "Database GUI inspection, query profiling, and index management", categoryTag: "Tooling" }
      ]
    },
    {
      title: "Developer Tools & Web",
      description: "Version control, development environments, and full-stack integration frameworks",
      iconName: "Terminal",
      skills: [
        { name: "Git", description: "Distributed version control, branch workflows, and commit history management", categoryTag: "VCS", highlight: true },
        { name: "GitHub", description: "Remote repository collaboration, open-source projects, and technical documentation", categoryTag: "Collaboration" },
        { name: "VS Code", description: "Configured development environment with Python, linting, and data extensions", categoryTag: "IDE" },
        { name: "Node.js & Express.js", description: "Asynchronous backend REST APIs, authentication middleware, and server logic", categoryTag: "Backend" },
        { name: "React", description: "Component-driven user interfaces, state management, and responsive designs", categoryTag: "Frontend" }
      ]
    }
  ],

  projects: [
    {
      id: "nexatel-churn-analytics",
      title: "NexaTel Customer Churn Analytics",
      tagline: "Python, Pandas, Power BI — Customer attrition modeling & retention insights",
      category: "Data Analytics & BI",
      problem: "Telecommunications providers experience revenue decline due to customer churn, requiring data-driven identification of high-risk customer segments and primary churn drivers.",
      solution: "Engineered a comprehensive customer churn analytics workflow using Python and Pandas to analyze demographic, contract, and billing factors, and built interactive Power BI visualizations to guide retention strategy.",
      description: "Analyzed telecommunications customer data to identify churn patterns, customer segments, and factors contributing to customer attrition. Developed visualizations and analytical insights to support customer retention strategies.",
      technologies: ["Python", "Pandas", "Power BI", "Data Analysis", "Customer Segmentation", "Retention Strategy"],
      features: [
        "Analyzed customer data to identify churn patterns, customer segments, and factors contributing to attrition",
        "Developed visualizations and analytical insights to support customer retention strategies",
        "Evaluated correlation between contract types, tenure, monthly charges, and churn probability",
        "Created executive Power BI dashboards with dynamic slicers for churn risk scoring"
      ],
      architecture: [
        "Data Ingestion: Customer telecom dataset cleaning & missing value treatment via Pandas",
        "Exploratory Data Analysis: Demographic & tenure cross-tabulation and statistical distributions",
        "Insights Engine: Identification of high-risk customer cohorts (e.g. Month-to-Month contracts)",
        "Executive Dashboard: Power BI interactive reporting with actionable retention recommendations"
      ],
      metrics: [
        { label: "Core Tooling", value: "Python & Power BI" },
        { label: "Domain", value: "Telecom Churn" },
        { label: "Outcome", value: "Retention Insights" }
      ],
      githubUrl: "https://github.com/atharvdahake15",
      demoType: "churn-analytics"
    },
    {
      id: "streamflix-content-analytics",
      title: "StreamFlix Content Analytics",
      tagline: "Python, Pandas, Power BI — Streaming catalog trends & audience preference analytics",
      category: "Data Analytics & BI",
      problem: "Streaming platforms require detailed catalog analytics to understand audience preferences, optimize content licensing, and balance genre distributions.",
      solution: "Conducted exploratory data analysis on a large streaming catalog to uncover trends in content formats, release years, category ratings, and regional offerings, visualized through Power BI.",
      description: "Analyzed streaming content data to identify trends in content categories, ratings, and audience preferences. Created visualizations to evaluate content performance and support data-driven content decisions.",
      technologies: ["Python", "Pandas", "Power BI", "Exploratory Data Analysis", "Content Strategy", "Trend Modeling"],
      features: [
        "Analyzed streaming content data to identify trends in content categories, ratings, and audience preferences",
        "Created visualizations to evaluate content performance and support data-driven content decisions",
        "Examined genre popularity shifts and runtime distributions across movies and TV shows",
        "Designed comprehensive visual dashboards tracking catalog growth trajectories"
      ],
      architecture: [
        "Data Processing: Multi-genre string parsing and timestamp extraction using Python",
        "Catalog Analytics: Genre frequency analysis and content rating distribution modeling",
        "Performance Visualization: Power BI charts highlighting catalog strengths and regional gaps"
      ],
      metrics: [
        { label: "Core Tooling", value: "Python & Power BI" },
        { label: "Analysis Focus", value: "Content Trends" },
        { label: "Outcome", value: "Decision Support" }
      ],
      githubUrl: "https://github.com/atharvdahake15",
      demoType: "streamflix"
    },
    {
      id: "indiakart-ecommerce-analytics",
      title: "IndiaKart E-Commerce Analytics",
      tagline: "Python, Pandas, Power BI — Sales performance & customer purchasing behavior",
      category: "Data Analytics & BI",
      problem: "E-commerce retailers struggle to pinpoint underperforming product categories, seasonal demand peaks, and regional sales bottlenecks without centralized analytics.",
      solution: "Processed transactional e-commerce sales datasets using Python and Pandas to analyze order volumes, revenue contributions, profit margins, and customer repeat purchases, delivered via Power BI.",
      description: "Analyzed e-commerce data to evaluate sales performance, customer purchasing behavior, and product trends. Developed interactive dashboards to monitor business KPIs and identify opportunities for sales growth.",
      technologies: ["Python", "Pandas", "Power BI", "Sales Performance", "KPI Dashboards", "E-Commerce Analytics"],
      features: [
        "Analyzed e-commerce data to evaluate sales performance, customer purchasing behavior, and product trends",
        "Developed interactive dashboards to monitor business KPIs and identify opportunities for sales growth",
        "Modeled month-over-month revenue trends, average order values (AOV), and category profit margins",
        "Identified top customer cohorts and geographic revenue clusters to optimize marketing ROI"
      ],
      architecture: [
        "Data Pipeline: Cleaning raw transactional sales logs, removing duplicate orders with Pandas",
        "KPI Aggregation: Calculating gross revenue, return rates, and shipping fulfillment times",
        "Executive Dashboard: Power BI interactive dashboard with dynamic drill-down across product lines"
      ],
      metrics: [
        { label: "Core Tooling", value: "Python & Power BI" },
        { label: "Focus", value: "Sales & Purchasing" },
        { label: "Deliverable", value: "KPI Dashboard" }
      ],
      githubUrl: "https://github.com/atharvdahake15",
      demoType: "indiakart"
    },
    {
      id: "ai-resume-analyzer",
      title: "AI Resume Analyzer",
      tagline: "Python, NLP, Web Application — ATS compatibility & skill gap detection system",
      category: "Data Science & NLP",
      problem: "Job seekers frequently face silent rejections from Automated Applicant Tracking Systems (ATS) due to mismatched keywords, unparsed formatting, and missing target skill requirements.",
      solution: "Developed an intelligent NLP-powered resume analysis system that parses candidate resumes, computes ATS compatibility scores, identifies missing competencies against job descriptions, and recommends concrete improvements.",
      description: "Developed an AI-powered resume analysis system to evaluate ATS compatibility, identify missing skills, and detect resume errors. Implemented job-description matching to identify skill gaps and recommend career improvements.",
      technologies: ["Python", "Natural Language Processing (NLP)", "Web Application", "ATS Compatibility", "Regex", "Skill Extraction"],
      features: [
        "Developed an AI-powered resume analysis system to evaluate ATS compatibility, identify missing skills, and detect resume errors",
        "Implemented job-description matching to identify skill gaps and recommend career improvements",
        "Automated extraction of technical skills, certifications, and candidate experience bullets",
        "Interactive scoring dashboard highlighting matched strengths and missing critical qualifications"
      ],
      architecture: [
        "Text Ingestion: PDF/text document parsing and formatting normalization",
        "NLP Extraction: Regex patterns and tokenization for entity and competency isolation",
        "Semantic Matcher: Set-theoretic and vector intersection against job specifications",
        "Report Engine: Structured ATS score card and tailored skill improvement roadmap"
      ],
      metrics: [
        { label: "Core Engine", value: "Python & NLP" },
        { label: "Matching Mode", value: "ATS Compatibility" },
        { label: "Outcome", value: "Gap Analysis" }
      ],
      githubUrl: "https://github.com/atharvdahake15",
      demoType: "ats-analyzer"
    },
    {
      id: "fake-news-detection-system",
      title: "Fake News Detection System",
      tagline: "Python, Scikit-learn, NLP — Machine learning classification with TF-IDF feature extraction",
      category: "Machine Learning & NLP",
      problem: "The rapid spread of online misinformation and fabricated news articles creates a critical need for automated, objective text verification tools.",
      solution: "Constructed a machine learning classification pipeline using Python, Scikit-learn, and NLP text preprocessing techniques (TF-IDF vectorization) to automatically predict whether an article is genuine or fabricated.",
      description: "Built a machine learning model to classify news articles as real or fake using text preprocessing and TF-IDF feature extraction. Evaluated model performance to support automated news verification.",
      technologies: ["Python", "Scikit-learn", "Natural Language Processing (NLP)", "TF-IDF Vectorization", "Classification Models", "Model Evaluation"],
      features: [
        "Built a machine learning model to classify news articles as real or fake using text preprocessing and TF-IDF feature extraction",
        "Evaluated model performance to support automated news verification",
        "Text cleaning pipeline including lowercasing, stopword removal, and tokenization",
        "Evaluated precision, recall, confusion matrix, and accuracy across real and fabricated datasets"
      ],
      architecture: [
        "Text Preprocessing: Punctuation removal, lowercasing, and stopword filtering via NLP",
        "Feature Extraction: TF-IDF (Term Frequency-Inverse Document Frequency) vectorizer",
        "Model Training: Scikit-learn supervised classification models (PassiveAggressive / Logistic Regression)",
        "Evaluation: Precision, recall, F1-score, and confusion matrix benchmarking"
      ],
      metrics: [
        { label: "Machine Learning", value: "Scikit-learn" },
        { label: "Feature Extraction", value: "TF-IDF Vectorizer" },
        { label: "Domain", value: "News Verification" }
      ],
      githubUrl: "https://github.com/atharvdahake15",
      demoType: "fake-news"
    }
  ],

  certifications: [
    {
      id: "Data Analytics Strategist Internship",
      title: "Data Analytics Strategist Internship",
      issuer: "YuvaIntern",
      year: "2026",
      credentialTag: "Artificial Intelligence & Analytics",
      image: "/certificates/coe.jpg",
      pdfUrl: "/certificates/COE yuvaintern.pdf",
      skillsCovered: ["Data Analytics", "Data Interpretation", "Analytical Problem-Solving", "Data-Driven Decision-Making"],
      description: "Completed a Data Analytics Strategist internship at YuvaIntern, gaining practical experience in data analysis, analytical problem-solving, and professional data-driven decision-making."
    },
    {
      id: "SQL Skill Certification",
      title: "SQL Skill Certification",
      issuer: "HackerRank",
      year: "2026",
      credentialTag: "Data Science & Analytics",
      image: "/certificates/sql.jpg",
      pdfUrl: "/certificates/SQL (Basic) Certificate.pdf",
      skillsCovered: ["SQL", "Database Querying", "Relational Databases", "Data Retrieval"],
      description: "Successfully passed the HackerRank SQL (Basic) skill certification test, demonstrating foundational knowledge of SQL queries and relational database operations."
    },
    {
      id: "deloitte-data-analytics",
      title: "Data Analytics Job Simulation",
      issuer: "DELOITTE",
      year: "2026",
      credentialTag: "Business & Enterprise Analytics",
      image: "/certificates/deloitte.jpg",
      pdfUrl: "/certificates/deloitte Certificate.pdf",
      skillsCovered: ["Business Data Interpretation", "Statistical Insights", "Client Presentation", "Data-Driven Strategy"],
      description: "Deloitte virtual job simulation verifying completion of industry-style analytical tasks: interpreting complex datasets, diagnosing operational trends, and communicating clear business recommendations."
    },
    {
      id: "Microsoft Excel Beginners to Advance",
      title: "Microsoft Excel Beginners to Advance",
      issuer: "Skill Course",
      year: "2026",
      credentialTag: "Data Science & Analytics",
      image: "/certificates/ms excel.jpg",
      pdfUrl: "/certificates/MS excel.pdf",
      skillsCovered: ["Microsoft Excel", "Spreadsheet Management", "Data Organization", "Data Analysis"],
      description: "Successfully completed the Microsoft Excel Beginners to Advance course, developing foundational and advanced Excel skills for data organization, spreadsheet management, and analysis."
    },
    {
      id: "Power BI for Beginners",
      title: "Power BI for Beginners",
      issuer: "Simplilearn SkillUp, in collaboration with Microsoft",
      year: "2026",
      credentialTag: "Data Science & Analytics",
      image: "/certificates/powerbi.jpg",
      pdfUrl: "/certificates/power bi.pdf",
      skillsCovered: ["Microsoft Power BI", "Data Visualization", "Business Intelligence", "Data Analysis"],
      description: "Successfully completed the Power BI for Beginners online course, developing foundational knowledge of business intelligence and data visualization for data-driven decision-making."
    },
    {
      id: "skill-india-ai-analyst",
      title: "AI Engineering Analyst",
      issuer: "SKILL INDIA",
      year: "2026",
      credentialTag: "National AI Skill Standard",
      image: "/certificates/SKILL INDIA.jpg",
      pdfUrl: "/certificates/skill india AI eng. Analyst.pdf",
      skillsCovered: ["AI Engineering", "Data Preprocessing", "Model Lifecycle", "Applied Computing"],
      description: "Government of India recognized Skill India certification assessing technical capabilities in AI engineering workflows, analytical data pipelines, and intelligent software implementation."
    }
  ],

  timeline: [
    {
      id: "internship-seeking",
      type: "status",
      title: "Open to Internship Opportunities",
      organization: "Targeting Technology & Data Teams",
      period: "2026 — Present",
      location: "Nagpur, India / Remote / Hybrid",
      badge: "Actively Applying",
      description: "Seeking internship roles in Data Science, Data Analytics, Python Development, and Machine Learning. Ready to contribute analytical thinking, Python programming, and rapid execution.",
      highlights: [
        "Available for immediate or upcoming 2026 internships",
        "Proficient in Python, Pandas, Power BI, SQL, and Scikit-learn",
        "Hands-on with customer churn analysis, content analytics, and NLP classifiers"
      ]
    },
    {
      id: "industry-simulations",
      type: "experience",
      title: "Virtual Job Simulations & Applied Industry Analytics",
      organization: "Deloitte, TATA & HP Programs",
      period: "2026",
      location: "Virtual / Industry Verified",
      badge: "Industry Projects",
      description: "Completed real-world business simulation projects simulating enterprise analytics workflows, GenAI data analysis pipelines, and executive presentations.",
      highlights: [
        "Deloitte: Completed data interpretation and business insights task",
        "TATA: Applied Generative AI techniques to data analytics workflows",
        "HP LIFE: Structured quantitative analysis and data science methodologies"
      ]
    },
    {
      id: "internmo-data-analytics-intern",
      type: "internship",
      title: "Data Analytics Intern",
      organization: "Internmo",
      period: "3-Month Internship",
      location: "Remote / Hybrid",
      badge: "Internship Experience",
      description: "Completed a 3-month internship involving real-world data analytics projects. Worked on customer churn analysis, content analytics, and e-commerce data analysis.",
      highlights: [
        "Completed a 3-month internship involving real-world data analytics projects.",
        "Worked on customer churn analysis, content analytics, and e-commerce data analysis.",
        "Applied data analytics techniques to identify trends, generate insights, and support data-driven decision-making."
      ]
    },
    {
      id: "be-computer-engineering",
      type: "education",
      title: "Bachelor of Engineering (B.E.) — Computer Engineering",
      organization: "Jagadamba College of Engineering and Technology",
      period: "Currently Pursuing",
      location: "Maharashtra, India",
      badge: "Degree in Progress",
      description: "Rigorous undergraduate engineering curriculum with continuous practical coursework in software engineering, object-oriented programming, data structures, algorithms, databases, and mathematics.",
      highlights: [
        "Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems",
        "Applied Computing: Python development, exploratory data analysis, machine learning, and web engineering",
        "Active builder of real-world software and analytical solutions"
      ]
    }
  ],

  achievements: [
    "Completed 3-Month Data Analytics Internship at Internmo working on churn, content, and e-commerce analytics",
    "Developed 5 real-world data science and analytics projects with Python, Pandas, Power BI, and Scikit-learn",
    "Engineered machine learning Fake News Detection System using NLP and TF-IDF feature extraction",
    "Built intelligent AI Resume ATS Analyzer parsing candidate skills against job requirements",
    "Completed 6 certified industry programs including TATA GenAI, Deloitte, and HP",
    "Proficient in Power BI dashboarding, advanced Excel analytics, and SQL relational querying"
  ]
};
