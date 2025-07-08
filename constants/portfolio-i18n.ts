export interface PortfolioData {
  owner: string;
  title: string;
  professionalSummary: string[];
  technicalSkills: {
    frontend: string[];
    backend: string[];
    cloudDevOps: string[];
    databases: string[];
    architecturePatterns: string[];
  };
  keyProjects: {
    name: string;
    description: string;
    technologies: string;
    role: string;
    features?: string;
    architecture?: string;
    deployment?: string;
    scope?: string;
    responsibilities?: string;
    impact?: string;
    challenge?: string;
    solution?: string;
    outcome?: string;
  }[];
  professionalExperience: string[];
  education: string[];
  languageAbilities: {
    language: string;
    level: string;
    description: string;
  }[];
  portfolioFeatures: string[];
  softSkills: string[];
  interests: string[];
  personalAttributes: string[];
  availability: string[];
}

export const portfolioData: Record<string, PortfolioData> = {
  en: {
    owner: "Ho Bao Lan - Full-Stack Developer",
    title: "Software Developer",
    professionalSummary: [
      "3+ years of fullstack expertise in .NET & React",
      "Passionate about clean code and scalable architecture",
      "Experience leading development teams",
      "Specializes in cloud architecture and microservices"
    ],
    technicalSkills: {
      frontend: [
        "React.js, Next.js, Angular",
        "TypeScript, JavaScript, HTML5, CSS3",
        "Responsive design, UI/UX principles"
      ],
      backend: [
        ".NET Core, .NET 8",
        "Node.js, Python",
        "RESTful APIs, GraphQL",
        "Microservices architecture"
      ],
      cloudDevOps: [
        "Azure (primary), AWS",
        "Docker, Kubernetes",
        "CI/CD pipelines",
        "Infrastructure as Code (Terraform)",
        "Azure DevOps, GitHub Actions"
      ],
      databases: [
        "PostgreSQL, MongoDB",
        "Redis (caching)",
        "SQL Server",
        "Database design and optimization"
      ],
      architecturePatterns: [
        "Microservices architecture",
        "Clean Architecture principles",
        "SOLID principles",
        "Domain-Driven Design (DDD)",
        "Event-driven architecture"
      ]
    },
    keyProjects: [
      {
        name: "SkillSync - Modern Learning Management Platform",
        description: "Advanced learning platform with interactive features",
        technologies: "React, .NET 8, microservices architecture",
        role: "Lead Developer & Architect",
        features:
          "Interactive learning modules, progress tracking, real-time collaboration",
        architecture: "Microservices with event-driven communication",
        deployment: "Azure cloud with container orchestration"
      },
      {
        name: "Enterprise Angular Platform for Railinc",
        description: "Large-scale enterprise application for railway industry",
        technologies: "Angular, Spring Boot, AWS",
        role: "Senior Full-Stack Developer",
        scope: "Large-scale enterprise application for railway industry",
        responsibilities:
          "Frontend architecture, API integration, performance optimization",
        impact: "Improved operational efficiency for railway logistics"
      },
      {
        name: "Legacy System Migration Project",
        description: "Modernization of legacy integration systems",
        technologies: "IBM Integration Bus → Spring Boot + Apache Camel",
        role: "Migration Lead & Architect",
        challenge: "Modernizing legacy integration systems",
        solution: "Designed and implemented microservices-based architecture",
        outcome: "Improved system reliability and maintainability"
      }
    ],
    professionalExperience: [
      "Team Leadership: Led development teams of 3-5 developers",
      "Code Review: Established code quality standards and review processes",
      "Mentoring: Guided junior developers in best practices",
      "Architecture Decisions: Made critical technical decisions for project success",
      "Client Communication: Worked directly with stakeholders and clients"
    ],
    education: [
      "Software Engineering background",
      "Cloud architecture certifications",
      "Continuous learning in modern technologies"
    ],
    languageAbilities: [
      {
        language: "Vietnamese",
        level: "Native speaker",
        description: "First language, perfect fluency"
      },
      {
        language: "English",
        level: "Fluent/Professional working proficiency",
        description:
          "Business communication, technical discussions, presentations"
      },
      {
        language: "Japanese",
        level: "Conversational to Intermediate",
        description: "Can communicate effectively, understands business context"
      },
      {
        language: "Chinese (Mandarin)",
        level: "Conversational",
        description: "Comfortable with basic to intermediate communication"
      },
      {
        language: "French",
        level: "Conversational",
        description: "Can engage in professional and casual conversations"
      }
    ],
    portfolioFeatures: [
      "Developed multilingual portfolio website supporting 5 languages (English, Japanese, Chinese, French, Vietnamese)",
      "Experience working in multicultural teams and international environments",
      "Comfortable conducting technical discussions and code reviews in multiple languages",
      "Can provide documentation and user interfaces in multiple languages",
      "Strong cross-cultural communication skills for global collaboration"
    ],
    softSkills: [
      "Strong communication and presentation skills",
      "Cross-cultural collaboration experience",
      "Problem-solving and analytical thinking",
      "Adaptability and continuous learning mindset",
      "Leadership and team management",
      "Client relationship management"
    ],
    interests: [
      "Open source contributions",
      "Exploring new technologies and frameworks",
      "Building scalable, maintainable software solutions",
      "Sharing knowledge through mentoring and technical discussions",
      "International collaboration and multicultural teams"
    ],
    personalAttributes: [
      "Detail-oriented and quality-focused",
      "Collaborative team player",
      "Strong work ethic and reliability",
      "Passionate about technology innovation",
      "Committed to professional growth"
    ],
    availability: [
      "Open to new opportunities",
      "Available for freelance projects",
      "Interested in full-time positions",
      "Remote work friendly",
      "Open to international opportunities"
    ]
  },
  zh: {
    owner: "何宝兰 - 全栈开发工程师",
    title: "软件开发工程师",
    professionalSummary: [
      "3年以上.NET和React全栈开发经验",
      "热衷于编写清洁代码和可扩展架构",
      "具备团队领导经验",
      "专注于云架构和微服务"
    ],
    technicalSkills: {
      frontend: [
        "React.js, Next.js, Angular",
        "TypeScript, JavaScript, HTML5, CSS3",
        "响应式设计, UI/UX原则"
      ],
      backend: [
        ".NET Core, .NET 8",
        "Node.js, Python",
        "RESTful APIs, GraphQL",
        "微服务架构"
      ],
      cloudDevOps: [
        "Azure(主要), AWS",
        "Docker, Kubernetes",
        "CI/CD流水线",
        "基础设施即代码(Terraform)",
        "Azure DevOps, GitHub Actions"
      ],
      databases: [
        "PostgreSQL, MongoDB",
        "Redis(缓存)",
        "SQL Server",
        "数据库设计和优化"
      ],
      architecturePatterns: [
        "微服务架构",
        "清洁架构原则",
        "SOLID原则",
        "领域驱动设计(DDD)",
        "事件驱动架构"
      ]
    },
    keyProjects: [
      {
        name: "SkillSync - 现代化学习管理平台",
        description: "具有交互功能的先进学习平台",
        technologies: "React, .NET 8, 微服务架构",
        role: "首席开发工程师兼架构师",
        features: "交互式学习模块、进度跟踪、实时协作",
        architecture: "事件驱动通信的微服务",
        deployment: "Azure云容器编排"
      },
      {
        name: "Railinc企业Angular平台",
        description: "铁路行业大型企业应用程序",
        technologies: "Angular, Spring Boot, AWS",
        role: "高级全栈开发工程师",
        scope: "铁路行业大型企业应用程序",
        responsibilities: "前端架构、API集成、性能优化",
        impact: "提高铁路物流运营效率"
      },
      {
        name: "遗留系统迁移项目",
        description: "遗留集成系统的现代化改造",
        technologies: "IBM Integration Bus → Spring Boot + Apache Camel",
        role: "迁移负责人兼架构师",
        challenge: "遗留集成系统现代化改造",
        solution: "设计并实施基于微服务的架构",
        outcome: "提高系统可靠性和可维护性"
      }
    ],
    professionalExperience: [
      "团队领导：领导3-5名开发人员的团队",
      "代码审查：建立代码质量标准和审查流程",
      "指导培训：指导初级开发人员最佳实践",
      "架构决策：为项目成功做出关键技术决策",
      "客户沟通：直接与利益相关者和客户合作"
    ],
    education: ["软件工程背景", "云架构认证", "现代技术持续学习"],
    languageAbilities: [
      {
        language: "越南语",
        level: "母语",
        description: "第一语言，完全流利"
      },
      {
        language: "英语",
        level: "流利/专业工作熟练度",
        description: "商务沟通、技术讨论、演示"
      },
      {
        language: "日语",
        level: "对话到中级水平",
        description: "能够有效沟通，理解商务语境"
      },
      {
        language: "中文(普通话)",
        level: "对话水平",
        description: "基础到中级沟通自如"
      },
      {
        language: "法语",
        level: "对话水平",
        description: "能够进行专业和休闲对话"
      }
    ],
    portfolioFeatures: [
      "开发支持5种语言的多语言作品集网站(英语、日语、中文、法语、越南语)",
      "在多文化团队和国际环境中的工作经验",
      "能够用多种语言进行技术讨论和代码审查",
      "能够提供多语言文档和用户界面",
      "全球协作的强大跨文化沟通技能"
    ],
    softSkills: [
      "强大的沟通和演示技能",
      "跨文化协作经验",
      "问题解决和分析思维",
      "适应性和持续学习心态",
      "领导力和团队管理",
      "客户关系管理"
    ],
    interests: [
      "开源贡献",
      "探索新技术和框架",
      "构建可扩展、可维护的软件解决方案",
      "通过指导和技术讨论分享知识",
      "国际合作和多文化团队"
    ],
    personalAttributes: [
      "注重细节和质量",
      "协作团队成员",
      "强烈的工作责任心和可靠性",
      "对技术创新充满热情",
      "致力于专业成长"
    ],
    availability: [
      "开放新机会",
      "可承接自由职业项目",
      "有兴趣全职职位",
      "支持远程工作",
      "开放国际机会"
    ]
  },
  ja: {
    owner: "ホー・バオ・ラン - フルスタック開発者",
    title: "ソフトウェア開発者",
    professionalSummary: [
      ".NETとReactでの3年以上のフルスタック専門知識",
      "クリーンコードとスケーラブルアーキテクチャへの情熱",
      "開発チームリーダーの経験",
      "クラウドアーキテクチャとマイクロサービスの専門"
    ],
    technicalSkills: {
      frontend: [
        "React.js, Next.js, Angular",
        "TypeScript, JavaScript, HTML5, CSS3",
        "レスポンシブデザイン, UI/UX原則"
      ],
      backend: [
        ".NET Core, .NET 8",
        "Node.js, Python",
        "RESTful APIs, GraphQL",
        "マイクロサービスアーキテクチャ"
      ],
      cloudDevOps: [
        "Azure(主要), AWS",
        "Docker, Kubernetes",
        "CI/CDパイプライン",
        "Infrastructure as Code (Terraform)",
        "Azure DevOps, GitHub Actions"
      ],
      databases: [
        "PostgreSQL, MongoDB",
        "Redis(キャッシュ)",
        "SQL Server",
        "データベース設計と最適化"
      ],
      architecturePatterns: [
        "マイクロサービスアーキテクチャ",
        "クリーンアーキテクチャ原則",
        "SOLID原則",
        "ドメイン駆動設計(DDD)",
        "イベント駆動アーキテクチャ"
      ]
    },
    keyProjects: [
      {
        name: "SkillSync - モダン学習管理プラットフォーム",
        description: "インタラクティブ機能を持つ先進的な学習プラットフォーム",
        technologies: "React, .NET 8, マイクロサービスアーキテクチャ",
        role: "リード開発者兼アーキテクト",
        features:
          "インタラクティブ学習モジュール、進捗追跡、リアルタイムコラボレーション",
        architecture: "イベント駆動通信によるマイクロサービス",
        deployment: "コンテナオーケストレーションを使用したAzureクラウド"
      },
      {
        name: "Railinc向けエンタープライズAngularプラットフォーム",
        description: "鉄道業界向け大規模エンタープライズアプリケーション",
        technologies: "Angular, Spring Boot, AWS",
        role: "シニアフルスタック開発者",
        scope: "鉄道業界向け大規模エンタープライズアプリケーション",
        responsibilities:
          "フロントエンドアーキテクチャ、API統合、パフォーマンス最適化",
        impact: "鉄道物流の運用効率の向上"
      },
      {
        name: "レガシーシステム移行プロジェクト",
        description: "レガシー統合システムの近代化",
        technologies: "IBM Integration Bus → Spring Boot + Apache Camel",
        role: "移行リーダー兼アーキテクト",
        challenge: "レガシー統合システムの近代化",
        solution: "マイクロサービスベースのアーキテクチャの設計と実装",
        outcome: "システムの信頼性と保守性の向上"
      }
    ],
    professionalExperience: [
      "チームリーダーシップ：3-5名の開発者チームを率いる",
      "コードレビュー：コード品質基準とレビュープロセスの確立",
      "メンタリング：ジュニア開発者へのベストプラクティスガイダンス",
      "アーキテクチャ決定：プロジェクト成功のための重要な技術決定",
      "クライアントコミュニケーション：ステークホルダーやクライアントとの直接連携"
    ],
    education: [
      "ソフトウェアエンジニアリング背景",
      "クラウドアーキテクチャ認定",
      "モダン技術の継続的学習"
    ],
    languageAbilities: [
      {
        language: "ベトナム語",
        level: "ネイティブスピーカー",
        description: "第一言語、完璧な流暢さ"
      },
      {
        language: "英語",
        level: "流暢/プロフェッショナル作業熟練度",
        description: "ビジネスコミュニケーション、技術討論、プレゼンテーション"
      },
      {
        language: "日本語",
        level: "会話から中級レベル",
        description: "効果的にコミュニケーション可能、ビジネス文脈の理解"
      },
      {
        language: "中国語(北京官話)",
        level: "会話レベル",
        description: "基本から中級のコミュニケーションが快適"
      },
      {
        language: "フランス語",
        level: "会話レベル",
        description: "プロフェッショナルおよびカジュアルな会話が可能"
      }
    ],
    portfolioFeatures: [
      "5つの言語をサポートする多言語ポートフォリオウェブサイトの開発(英語、日本語、中国語、フランス語、ベトナム語)",
      "多文化チームと国際環境での勤務経験",
      "複数の言語での技術討論とコードレビューが可能",
      "複数言語でのドキュメンテーションとユーザーインターフェースの提供が可能",
      "グローバルコラボレーションのための強力な異文化コミュニケーションスキル"
    ],
    softSkills: [
      "強力なコミュニケーションとプレゼンテーションスキル",
      "異文化コラボレーション経験",
      "問題解決と分析的思考",
      "適応性と継続的学習マインドセット",
      "リーダーシップとチーム管理",
      "クライアント関係管理"
    ],
    interests: [
      "オープンソース貢献",
      "新しい技術とフレームワークの探求",
      "スケーラブルで保守可能なソフトウェアソリューションの構築",
      "メンタリングと技術討論を通じた知識共有",
      "国際協力と多文化チーム"
    ],
    personalAttributes: [
      "細部志向と品質重視",
      "協力的なチームプレイヤー",
      "強い労働倫理と信頼性",
      "技術革新への情熱",
      "プロフェッショナル成長へのコミット"
    ],
    availability: [
      "新しい機会に開放的",
      "フリーランスプロジェクトで利用可能",
      "フルタイムポジションに興味",
      "リモートワークフレンドリー",
      "国際的な機会に開放的"
    ]
  },
  vi: {
    owner: "Hồ Bảo Lan - Lập trình viên Full-Stack",
    title: "Lập trình viên phần mềm",
    professionalSummary: [
      "Hơn 3 năm chuyên môn fullstack với .NET & React",
      "Đam mê về clean code và kiến trúc có thể mở rộng",
      "Kinh nghiệm dẫn dắt các đội phát triển",
      "Chuyên về kiến trúc đám mây và microservices"
    ],
    technicalSkills: {
      frontend: [
        "React.js, Next.js, Angular",
        "TypeScript, JavaScript, HTML5, CSS3",
        "Thiết kế responsive, nguyên tắc UI/UX"
      ],
      backend: [
        ".NET Core, .NET 8",
        "Node.js, Python",
        "RESTful APIs, GraphQL",
        "Kiến trúc microservices"
      ],
      cloudDevOps: [
        "Azure (chính), AWS",
        "Docker, Kubernetes",
        "CI/CD pipelines",
        "Infrastructure as Code (Terraform)",
        "Azure DevOps, GitHub Actions"
      ],
      databases: [
        "PostgreSQL, MongoDB",
        "Redis (caching)",
        "SQL Server",
        "Thiết kế và tối ưu hóa cơ sở dữ liệu"
      ],
      architecturePatterns: [
        "Kiến trúc microservices",
        "Nguyên tắc Clean Architecture",
        "Nguyên tắc SOLID",
        "Domain-Driven Design (DDD)",
        "Kiến trúc hướng sự kiện"
      ]
    },
    keyProjects: [
      {
        name: "SkillSync - Nền tảng quản lý học tập hiện đại",
        description: "Nền tảng học tập tiên tiến với các tính năng tương tác",
        technologies: "React, .NET 8, kiến trúc microservices",
        role: "Lập trình viên chính & Kiến trúc sư",
        features:
          "Các mô-đun học tập tương tác, theo dõi tiến độ, cộng tác thời gian thực",
        architecture: "Microservices với giao tiếp hướng sự kiện",
        deployment: "Azure cloud với container orchestration"
      },
      {
        name: "Nền tảng Angular doanh nghiệp cho Railinc",
        description: "Ứng dụng doanh nghiệp quy mô lớn cho ngành đường sắt",
        technologies: "Angular, Spring Boot, AWS",
        role: "Lập trình viên Full-Stack cấp cao",
        scope: "Ứng dụng doanh nghiệp quy mô lớn cho ngành đường sắt",
        responsibilities:
          "Kiến trúc frontend, tích hợp API, tối ưu hóa hiệu suất",
        impact: "Cải thiện hiệu quả vận hành cho logistics đường sắt"
      },
      {
        name: "Dự án di chuyển hệ thống Legacy",
        description: "Hiện đại hóa các hệ thống tích hợp cũ",
        technologies: "IBM Integration Bus → Spring Boot + Apache Camel",
        role: "Trưởng nhóm di chuyển & Kiến trúc sư",
        challenge: "Hiện đại hóa các hệ thống tích hợp cũ",
        solution: "Thiết kế và triển khai kiến trúc dựa trên microservices",
        outcome: "Cải thiện độ tin cậy và khả năng bảo trì của hệ thống"
      }
    ],
    professionalExperience: [
      "Lãnh đạo nhóm: Dẫn dắt các đội phát triển 3-5 lập trình viên",
      "Đánh giá mã nguồn: Thiết lập tiêu chuẩn chất lượng mã và quy trình đánh giá",
      "Cố vấn: Hướng dẫn các lập trình viên junior về các phương pháp tốt nhất",
      "Quyết định kiến trúc: Đưa ra các quyết định kỹ thuật quan trọng cho sự thành công của dự án",
      "Giao tiếp khách hàng: Làm việc trực tiếp với các bên liên quan và khách hàng"
    ],
    education: [
      "Nền tảng Kỹ thuật phần mềm",
      "Chứng chỉ kiến trúc đám mây",
      "Học tập liên tục các công nghệ hiện đại"
    ],
    languageAbilities: [
      {
        language: "Tiếng Việt",
        level: "Ngôn ngữ mẹ đẻ",
        description: "Ngôn ngữ đầu tiên, thành thạo hoàn hảo"
      },
      {
        language: "Tiếng Anh",
        level: "Thành thạo/Trình độ làm việc chuyên nghiệp",
        description: "Giao tiếp kinh doanh, thảo luận kỹ thuật, thuyết trình"
      },
      {
        language: "Tiếng Nhật",
        level: "Giao tiếp đến trung cấp",
        description: "Có thể giao tiếp hiệu quả, hiểu ngữ cảnh kinh doanh"
      },
      {
        language: "Tiếng Trung (Quan thoại)",
        level: "Giao tiếp",
        description: "Thoải mái với giao tiếp cơ bản đến trung cấp"
      },
      {
        language: "Tiếng Pháp",
        level: "Giao tiếp",
        description:
          "Có thể tham gia các cuộc trò chuyện chuyên nghiệp và thường ngày"
      }
    ],
    portfolioFeatures: [
      "Phát triển trang web portfolio đa ngôn ngữ hỗ trợ 5 ngôn ngữ (Tiếng Anh, Nhật, Trung, Pháp, Việt)",
      "Kinh nghiệm làm việc trong các đội đa văn hóa và môi trường quốc tế",
      "Thoải mái thực hiện thảo luận kỹ thuật và đánh giá mã bằng nhiều ngôn ngữ",
      "Có thể cung cấp tài liệu và giao diện người dùng bằng nhiều ngôn ngữ",
      "Kỹ năng giao tiếp đa văn hóa mạnh mẽ cho hợp tác toàn cầu"
    ],
    softSkills: [
      "Kỹ năng giao tiếp và thuyết trình mạnh mẽ",
      "Kinh nghiệm hợp tác đa văn hóa",
      "Tư duy giải quyết vấn đề và phân tích",
      "Khả năng thích ứng và tư duy học tập liên tục",
      "Lãnh đạo và quản lý đội nhóm",
      "Quản lý mối quan hệ khách hàng"
    ],
    interests: [
      "Đóng góp mã nguồn mở",
      "Khám phá các công nghệ và framework mới",
      "Xây dựng các giải pháp phần mềm có thể mở rộng và bảo trì",
      "Chia sẻ kiến thức thông qua cố vấn và thảo luận kỹ thuật",
      "Hợp tác quốc tế và đội nhóm đa văn hóa"
    ],
    personalAttributes: [
      "Tập trung vào chi tiết và chất lượng",
      "Thành viên đội nhóm hợp tác",
      "Đạo đức làm việc mạnh mẽ và đáng tin cậy",
      "Đam mê đổi mới công nghệ",
      "Cam kết phát triển chuyên nghiệp"
    ],
    availability: [
      "Mở cho các cơ hội mới",
      "Có sẵn cho các dự án freelance",
      "Quan tâm đến các vị trí toàn thời gian",
      "Thân thiện với làm việc từ xa",
      "Mở cho các cơ hội quốc tế"
    ]
  },
  fr: {
    owner: "Ho Bao Lan - Développeur Full-Stack",
    title: "Développeur logiciel",
    professionalSummary: [
      "Plus de 3 ans d'expertise fullstack en .NET et React",
      "Passionné par le code propre et l'architecture évolutive",
      "Expérience de direction d'équipes de développement",
      "Spécialisé en architecture cloud et microservices"
    ],
    technicalSkills: {
      frontend: [
        "React.js, Next.js, Angular",
        "TypeScript, JavaScript, HTML5, CSS3",
        "Design responsive, principes UI/UX"
      ],
      backend: [
        ".NET Core, .NET 8",
        "Node.js, Python",
        "APIs RESTful, GraphQL",
        "Architecture microservices"
      ],
      cloudDevOps: [
        "Azure (principal), AWS",
        "Docker, Kubernetes",
        "Pipelines CI/CD",
        "Infrastructure as Code (Terraform)",
        "Azure DevOps, GitHub Actions"
      ],
      databases: [
        "PostgreSQL, MongoDB",
        "Redis (mise en cache)",
        "SQL Server",
        "Conception et optimisation de bases de données"
      ],
      architecturePatterns: [
        "Architecture microservices",
        "Principes Clean Architecture",
        "Principes SOLID",
        "Domain-Driven Design (DDD)",
        "Architecture événementielle"
      ]
    },
    keyProjects: [
      {
        name: "SkillSync - Plateforme moderne de gestion d'apprentissage",
        description:
          "Plateforme d'apprentissage avancée avec fonctionnalités interactives",
        technologies: "React, .NET 8, architecture microservices",
        role: "Développeur principal et Architecte",
        features:
          "Modules d'apprentissage interactifs, suivi des progrès, collaboration en temps réel",
        architecture: "Microservices avec communication événementielle",
        deployment: "Cloud Azure avec orchestration de conteneurs"
      },
      {
        name: "Plateforme Angular d'entreprise pour Railinc",
        description:
          "Application d'entreprise à grande échelle pour l'industrie ferroviaire",
        technologies: "Angular, Spring Boot, AWS",
        role: "Développeur Full-Stack senior",
        scope:
          "Application d'entreprise à grande échelle pour l'industrie ferroviaire",
        responsibilities:
          "Architecture frontend, intégration API, optimisation des performances",
        impact:
          "Amélioration de l'efficacité opérationnelle pour la logistique ferroviaire"
      },
      {
        name: "Projet de migration de système legacy",
        description: "Modernisation des systèmes d'intégration legacy",
        technologies: "IBM Integration Bus → Spring Boot + Apache Camel",
        role: "Chef de migration et Architecte",
        challenge: "Modernisation des systèmes d'intégration legacy",
        solution:
          "Conception et mise en œuvre d'une architecture basée sur les microservices",
        outcome:
          "Amélioration de la fiabilité et de la maintenabilité du système"
      }
    ],
    professionalExperience: [
      "Leadership d'équipe : Direction d'équipes de développement de 3-5 développeurs",
      "Révision de code : Établissement de normes de qualité de code et de processus de révision",
      "Mentorat : Guidance des développeurs junior sur les meilleures pratiques",
      "Décisions d'architecture : Prise de décisions techniques critiques pour le succès du projet",
      "Communication client : Travail direct avec les parties prenantes et les clients"
    ],
    education: [
      "Formation en génie logiciel",
      "Certifications en architecture cloud",
      "Apprentissage continu des technologies modernes"
    ],
    languageAbilities: [
      {
        language: "Vietnamien",
        level: "Langue maternelle",
        description: "Première langue, maîtrise parfaite"
      },
      {
        language: "Anglais",
        level: "Maîtrise/Compétence professionnelle",
        description:
          "Communication d'affaires, discussions techniques, présentations"
      },
      {
        language: "Japonais",
        level: "Conversationnel à intermédiaire",
        description:
          "Peut communiquer efficacement, comprend le contexte d'affaires"
      },
      {
        language: "Chinois (Mandarin)",
        level: "Conversationnel",
        description: "À l'aise avec la communication de base à intermédiaire"
      },
      {
        language: "Français",
        level: "Conversationnel",
        description:
          "Peut s'engager dans des conversations professionnelles et décontractées"
      }
    ],
    portfolioFeatures: [
      "Développement d'un site web portfolio multilingue supportant 5 langues (Anglais, Japonais, Chinois, Français, Vietnamien)",
      "Expérience de travail dans des équipes multiculturelles et des environnements internationaux",
      "À l'aise pour mener des discussions techniques et des révisions de code en plusieurs langues",
      "Peut fournir de la documentation et des interfaces utilisateur en plusieurs langues",
      "Solides compétences de communication interculturelle pour la collaboration mondiale"
    ],
    softSkills: [
      "Solides compétences en communication et présentation",
      "Expérience de collaboration interculturelle",
      "Résolution de problèmes et pensée analytique",
      "Adaptabilité et mentalité d'apprentissage continu",
      "Leadership et gestion d'équipe",
      "Gestion des relations clients"
    ],
    interests: [
      "Contributions open source",
      "Exploration de nouvelles technologies et frameworks",
      "Construction de solutions logicielles évolutives et maintenables",
      "Partage de connaissances par le mentorat et les discussions techniques",
      "Collaboration internationale et équipes multiculturelles"
    ],
    personalAttributes: [
      "Orienté détail et axé qualité",
      "Joueur d'équipe collaboratif",
      "Forte éthique de travail et fiabilité",
      "Passionné par l'innovation technologique",
      "Engagé dans la croissance professionnelle"
    ],
    availability: [
      "Ouvert aux nouvelles opportunités",
      "Disponible pour des projets freelance",
      "Intéressé par des postes à temps plein",
      "Compatible avec le travail à distance",
      "Ouvert aux opportunités internationales"
    ]
  }
};

// Helper function to format portfolio data for AI prompt
export function formatPortfolioForPrompt(locale: string): string {
  const data = portfolioData[locale] || portfolioData.en;

  return `
PORTFOLIO OWNER: ${data.owner}

PROFESSIONAL SUMMARY:
${data.professionalSummary.map((item) => `- ${item}`).join("\n")}

TECHNICAL SKILLS:
Frontend Technologies:
${data.technicalSkills.frontend.map((item) => `- ${item}`).join("\n")}

Backend Technologies:
${data.technicalSkills.backend.map((item) => `- ${item}`).join("\n")}

Cloud & DevOps:
${data.technicalSkills.cloudDevOps.map((item) => `- ${item}`).join("\n")}

Databases:
${data.technicalSkills.databases.map((item) => `- ${item}`).join("\n")}

Architecture & Patterns:
${data.technicalSkills.architecturePatterns
  .map((item) => `- ${item}`)
  .join("\n")}

KEY PROJECTS:

${data.keyProjects
  .map(
    (project, index) => `${index + 1}. ${project.name}
   - Technologies: ${project.technologies}
   - Role: ${project.role}
   ${project.features ? `- Features: ${project.features}` : ""}
   ${project.architecture ? `- Architecture: ${project.architecture}` : ""}
   ${project.deployment ? `- Deployment: ${project.deployment}` : ""}
   ${project.scope ? `- Scope: ${project.scope}` : ""}
   ${
     project.responsibilities
       ? `- Responsibilities: ${project.responsibilities}`
       : ""
   }
   ${project.impact ? `- Impact: ${project.impact}` : ""}
   ${project.challenge ? `- Challenge: ${project.challenge}` : ""}
   ${project.solution ? `- Solution: ${project.solution}` : ""}
   ${project.outcome ? `- Outcome: ${project.outcome}` : ""}`
  )
  .join("\n\n")}

PROFESSIONAL EXPERIENCE:
${data.professionalExperience.map((item) => `- ${item}`).join("\n")}

EDUCATION & CERTIFICATIONS:
${data.education.map((item) => `- ${item}`).join("\n")}

LANGUAGES & MULTILINGUAL ABILITIES:
${data.languageAbilities
  .map((lang) => `- ${lang.language}: ${lang.level} (${lang.description})`)
  .join("\n")}

Portfolio Features:
${data.portfolioFeatures.map((item) => `- ${item}`).join("\n")}

SOFT SKILLS:
${data.softSkills.map((item) => `- ${item}`).join("\n")}

INTERESTS & GOALS:
${data.interests.map((item) => `- ${item}`).join("\n")}

PERSONAL ATTRIBUTES:
${data.personalAttributes.map((item) => `- ${item}`).join("\n")}

CURRENT AVAILABILITY:
${data.availability.map((item) => `- ${item}`).join("\n")}
  `;
}
