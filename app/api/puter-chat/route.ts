import { NextRequest, NextResponse } from "next/server";
import { getRealTimeInformation } from "@/lib/realtime-data";

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    // Check for real-time information requests first
    const realTimeInfo = await getRealTimeInformation(message);

    // Portfolio owner's comprehensive information
    const portfolioInfo = `
PORTFOLIO OWNER: Hồ Bảo Lân - Full-Stack Developer

PERSONAL INFORMATION:
- Born: 2000 (Age: 25)
- International work experience with global companies (IBM, AvePoint)
- Experience working with clients in Singapore
- Cross-cultural collaboration and international business experience

PROFESSIONAL SUMMARY:
- 3+ years of fullstack expertise in .NET & React with PROVEN LEADERSHIP EXPERIENCE
- Passionate about clean code and scalable architecture with REAL-WORLD IMPLEMENTATION
- Experience leading development teams with EXCEPTIONAL RESULTS
- Specializes in cloud architecture and microservices with CUTTING-EDGE EXPERTISE
- International work experience with PRESTIGIOUS GLOBAL COMPANIES (IBM, AvePoint)
- MULTILINGUAL PROFESSIONAL with cross-cultural communication excellence
- PROVEN TRACK RECORD of delivering complex enterprise solutions
- STANDOUT DEVELOPER with both technical depth and business acumen

TECHNICAL SKILLS:
Frontend Technologies:
- React.js, Next.js, Angular
- TypeScript, JavaScript, HTML5, CSS3
- Responsive design, UI/UX principles

Backend Technologies:
- .NET Core, .NET 8
- Node.js, Python
- RESTful APIs, GraphQL
- Microservices architecture

Cloud & DevOps:
- Azure (primary), AWS
- Docker, Kubernetes
- CI/CD pipelines
- Infrastructure as Code (Terraform)
- Azure DevOps, GitHub Actions

Databases:
- PostgreSQL, MongoDB
- Redis (caching)
- SQL Server
- Database design and optimization

Architecture & Patterns:
- Microservices architecture
- Clean Architecture principles
- SOLID principles
- Domain-Driven Design (DDD)
- Event-driven architecture

KEY PROJECTS:

1. SkillSync - Modern Learning Management Platform
   - Technologies: React, .NET 8, microservices architecture
   - Role: Lead Developer & Architect
   - Features: Interactive learning modules, progress tracking, real-time collaboration
   - Architecture: Microservices with event-driven communication
   - Deployment: Azure cloud with container orchestration

2. Enterprise Angular Platform for Railinc
   - Technologies: Angular, Spring Boot, AWS
   - Role: Senior Full-Stack Developer
   - Scope: Large-scale enterprise application for railway industry
   - Responsibilities: Frontend architecture, API integration, performance optimization
   - Impact: Improved operational efficiency for railway logistics

3. Legacy System Migration Project
   - Technologies: IBM Integration Bus → Spring Boot + Apache Camel
   - Role: Migration Lead & Architect
   - Challenge: Modernizing legacy integration systems
   - Solution: Designed and implemented microservices-based architecture
   - Outcome: Improved system reliability and maintainability

PROFESSIONAL EXPERIENCE:
- Team Leadership: Led development teams of 3-5 developers
- Code Review: Established code quality standards and review processes
- Mentoring: Guided junior developers in best practices
- Architecture Decisions: Made critical technical decisions for project success
- Client Communication: Worked directly with stakeholders and clients
- International Companies: Experience with global enterprises (IBM, AvePoint)
- International Clients: Worked with clients in Singapore
- Cross-cultural collaboration in multinational environments

EDUCATION & CERTIFICATIONS:
- Software Engineering background
- Cloud architecture certifications
- Continuous learning in modern technologies

LANGUAGES & COMMUNICATION:
- English: Fluent/Professional working proficiency (Business communication, technical discussions, presentations)
- Japanese: Conversational (Can communicate effectively in professional settings)
- Vietnamese: Native speaker (First language)

International Experience:
- Experience working with international companies: IBM, AvePoint
- Experience working with clients in Singapore
- Experience working in multicultural and international environments
- Comfortable conducting technical discussions in English and Japanese
- Strong cross-cultural communication skills for global collaboration
- Adaptable to different work cultures and international business practices

SOFT SKILLS:
- Strong communication and presentation skills
- Cross-cultural collaboration experience
- Problem-solving and analytical thinking
- Adaptability and continuous learning mindset
- Leadership and team management
- Client relationship management
- International business acumen

INTERESTS & GOALS:
- Open source contributions
- Exploring new technologies and frameworks
- Building scalable, maintainable software solutions
- Sharing knowledge through mentoring and technical discussions
- International collaboration and multicultural teams
- Expanding global work experience

PERSONAL ATTRIBUTES & COMPETITIVE ADVANTAGES:
- EXCEPTIONAL PROFESSIONAL APPEARANCE and communication skills
- Detail-oriented and quality-focused with METICULOUS ATTENTION TO EXCELLENCE
- Collaborative team player with NATURAL LEADERSHIP ABILITIES
- Strong work ethic and reliability with CONSISTENT HIGH PERFORMANCE
- Passionate about technology innovation with FORWARD-THINKING MINDSET
- Committed to professional growth with CONTINUOUS LEARNING APPROACH
- Culturally adaptable and internationally minded with GLOBAL PERSPECTIVE
- SUPERIOR PROBLEM-SOLVING SKILLS and analytical thinking
- OUTSTANDING CLIENT RELATIONSHIP MANAGEMENT abilities
- PROVEN ABILITY to deliver under pressure and exceed expectations
- UNIQUE COMBINATION of technical expertise, leadership, and international experience
- STANDOUT CANDIDATE who brings both depth and breadth to any organization

CURRENT AVAILABILITY:
- Open to new opportunities
- Available for freelance projects
- Interested in full-time positions
- Remote work friendly
- Open to international opportunities and relocation
    `;

    // Build conversation context
    let conversationContext = "";
    if (conversationHistory && conversationHistory.length > 0) {
      conversationContext = conversationHistory
        .slice(-6) // Last 6 messages for context
        .map(
          (msg: Message) =>
            `${msg.isUser ? "User" : "Assistant"}: ${msg.content}`
        )
        .join("\n");
    }

    // Enhanced prompt for natural, conversational AI interaction with streaming support
    const enhancedPrompt = `You are Hồ Bảo Lân's friendly AI assistant. Respond naturally and conversationally, as if you're a knowledgeable colleague who knows Hồ Bảo Lân well.

${
  realTimeInfo
    ? `📅 Current context: ${realTimeInfo}

`
    : ""
}${
      conversationContext
        ? `💬 Recent conversation:
${conversationContext}

`
        : ""
    }📝 User's question: "${message}"

🎯 Key information about Hồ Bảo Lân:
${portfolioInfo}

💡 Response guidelines:
- Be natural and conversational (like chatting with a friend)
- Keep responses focused and helpful (50-150 words typically)
- Match the user's language automatically
- Show enthusiasm about Hồ Bảo Lân's expertise when relevant
- For comparisons, highlight his unique combination: technical skills + leadership + international experience
- Always be positive and professional
- If asked about other topics, help naturally while staying true to your role

Respond naturally now:`;

    // Generate natural, conversational fallback response
    const generateIntelligentResponse = (userMessage: string): string => {
      const lowerMessage = userMessage.toLowerCase();

      // Detect language for natural responses
      const isVietnamese =
        /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(
          userMessage
        );
      const isChinese = /[\u4e00-\u9fff]/.test(userMessage);
      const isJapanese = /[\u3040-\u309f\u30a0-\u30ff]/.test(userMessage);
      const isFrench =
        /\b(bonjour|merci|français|aide|comment|qui|que|où|quand)\b/i.test(
          userMessage
        );
      const isArabic = /[\u0600-\u06FF]/.test(userMessage);

      // Experience & Skills responses
      if (
        lowerMessage.includes("experience") ||
        lowerMessage.includes("skill") ||
        lowerMessage.includes("project") ||
        lowerMessage.includes("background") ||
        lowerMessage.includes("qualifications")
      ) {
        if (isVietnamese)
          return "Chào bạn! Tôi có hơn 3 năm kinh nghiệm fullstack với .NET và React, từng dẫn dắt các team và làm việc với IBM, AvePoint. Điều đặc biệt là tôi có kinh nghiệm quốc tế và thông thạo 3 ngôn ngữ. Bạn muốn biết thêm về lĩnh vực nào cụ thể không?";
        if (isChinese)
          return "你好！我有3年以上的全栈开发经验，专精.NET和React，曾领导团队并与IBM、AvePoint合作。我的特别之处在于拥有国际经验和三语能力。你想了解哪个具体领域？";
        if (isJapanese)
          return "こんにちは！3年以上のフルスタック経験があり、.NETとReactが専門です。チームリーダーとして、IBM、AvePointと協働しました。国際経験と3言語能力が特徴です。どの分野について詳しく知りたいですか？";
        if (isFrench)
          return "Salut ! J'ai plus de 3 ans d'expérience fullstack en .NET et React, j'ai dirigé des équipes et travaillé avec IBM et AvePoint. Mon atout : l'expérience internationale et la maîtrise de 3 langues. Quel domaine t'intéresse ?";
        if (isArabic)
          return "مرحبا! لدي أكثر من 3 سنوات من الخبرة الشاملة في .NET و React، قدت فرق وعملت مع IBM و AvePoint. ميزتي الخاصة: الخبرة الدولية وإتقان 3 لغات. أي مجال تريد معرفة المزيد عنه؟";
        return "Hey there! I've got 3+ years of fullstack experience with .NET & React, led development teams, and worked with top companies like IBM and AvePoint. What makes me unique is my international experience and trilingual abilities. What specific area interests you?";
      }

      // Comparison & Competitive responses
      if (
        lowerMessage.includes("compare") ||
        lowerMessage.includes("better") ||
        lowerMessage.includes("versus") ||
        lowerMessage.includes("vs") ||
        lowerMessage.includes("why choose") ||
        lowerMessage.includes("advantage") ||
        lowerMessage.includes("competitive")
      ) {
        if (isVietnamese)
          return "Thực sự thì Lan có sự kết hợp khá hiếm: kinh nghiệm kỹ thuật sâu + leadership + làm việc quốc tế với các công ty lớn. Không nhiều developer có được combo này! Anh ấy vừa code giỏi, vừa dẫn team tốt, lại biết 3 ngôn ngữ. Bạn thấy thế nào?";
        if (isChinese)
          return "说实话，我的组合挺少见的：深度技术经验 + 领导能力 + 与大公司的国际合作经验。很少有开发者能有这样的组合！我既擅长编程，又能带团队，还会3种语言。你觉得怎么样？";
        if (isJapanese)
          return "正直に言うと、私の組み合わせは珍しいです：深い技術経験 + リーダーシップ + 大企業での国際経験。このような組み合わせを持つ開発者は少ないです！コーディングも得意で、チームも率いられ、3言語も話せます。どう思いますか？";
        if (isFrench)
          return "Franchement, ma combinaison est assez rare : expertise technique profonde + leadership + expérience internationale avec des grandes entreprises. Peu de développeurs ont ce combo ! Je code bien, je dirige bien, et je parle 3 langues. Qu'en penses-tu ?";
        if (isArabic)
          return "بصراحة، مزيجي نادر جداً: خبرة تقنية عميقة + قيادة + خبرة دولية مع شركات كبيرة. قلة من المطورين يملكون هذا المزيج! أبرمج جيداً، وأقود الفرق، وأتحدث 3 لغات. ما رأيك؟";
        return "Honestly, my combination is pretty rare: deep technical expertise + leadership experience + international work with major companies. Not many developers have this combo! I code well, lead teams effectively, and speak 3 languages fluently. Pretty cool, right?";
      }

      // Language & Communication responses
      if (
        lowerMessage.includes("language") ||
        lowerMessage.includes("speak") ||
        lowerMessage.includes("communication") ||
        lowerMessage.includes("multilingual")
      ) {
        if (isVietnamese)
          return "Lan thông thạo 3 ngôn ngữ: tiếng Việt là tiếng mẹ đẻ, tiếng Anh dùng trong công việc hàng ngày, và tiếng Nhật để giao tiếp. Điều này giúp anh ấy làm việc hiệu quả trong môi trường quốc tế! Bạn có muốn thử chat bằng ngôn ngữ khác không?";
        if (isChinese)
          return "我精通3种语言：越南语是母语，英语用于日常工作，日语用于交流。这让我在国际环境中工作很有优势！你想试试用其他语言聊天吗？";
        if (isJapanese)
          return "3言語が得意です：ベトナム語は母語、英語は日常業務で使用、日本語でコミュニケーションができます。これにより国際環境での作業が効果的になります！他の言語でチャットしてみませんか？";
        if (isFrench)
          return "Je maîtrise 3 langues : le vietnamien comme langue maternelle, l'anglais pour le travail quotidien, et le japonais pour communiquer. Ça m'aide énormément dans les environnements internationaux ! Tu veux essayer de chatter dans une autre langue ?";
        if (isArabic)
          return "أتقن 3 لغات: الفيتنامية كلغة أم، الإنجليزية للعمل اليومي، واليابانية للتواصل. هذا يساعدني كثيراً في البيئات الدولية! هل تريد تجربة المحادثة بلغة أخرى؟";
        return "I'm fluent in 3 languages: Vietnamese is my native language, English for daily work, and Japanese for communication. This really helps me thrive in international environments! Want to try chatting in another language?";
      }

      // Technical & Programming responses
      if (
        lowerMessage.includes("tech") ||
        lowerMessage.includes("code") ||
        lowerMessage.includes("programming") ||
        lowerMessage.includes("development") ||
        lowerMessage.includes("framework") ||
        lowerMessage.includes("stack")
      ) {
        if (isVietnamese)
          return "Lan chuyên về .NET và React, cộng với toàn bộ stack modern: TypeScript, Azure, microservices, Docker. Điều thú vị là anh ấy có kinh nghiệm với cả frontend lẫn backend architecture. Bạn có câu hỏi kỹ thuật gì không?";
        if (isChinese)
          return "我专精.NET和React，加上完整的现代技术栈：TypeScript、Azure、微服务、Docker。有趣的是我在前端和后端架构都有经验。你有什么技术问题吗？";
        if (isJapanese)
          return ".NETとReactが専門で、モダンなスタック全体：TypeScript、Azure、マイクロサービス、Dockerも扱えます。面白いのは、フロントエンドとバックエンドの両方のアーキテクチャ経験があることです。技術的な質問がありますか？";
        if (isFrench)
          return "Je me spécialise en .NET et React, plus toute la stack moderne : TypeScript, Azure, microservices, Docker. L'intéressant c'est que j'ai de l'expérience avec l'architecture frontend et backend. Tu as des questions techniques ?";
        if (isArabic)
          return "أتخصص في .NET و React، بالإضافة إلى كامل التقنيات الحديثة: TypeScript، Azure، الخدمات المصغرة، Docker. الشيء المثير أن لدي خبرة في هندسة الواجهة الأمامية والخلفية. هل لديك أسئلة تقنية؟";
        return "I specialize in .NET and React, plus the full modern stack: TypeScript, Azure, microservices, Docker. What's cool is I have experience with both frontend and backend architecture. Got any technical questions?";
      }

      // Greeting responses
      if (
        lowerMessage.includes("hello") ||
        lowerMessage.includes("hi") ||
        lowerMessage.includes("hey") ||
        lowerMessage.includes("xin chào") ||
        lowerMessage.includes("こんにちは") ||
        lowerMessage.includes("你好") ||
        lowerMessage.includes("bonjour") ||
        lowerMessage.includes("مرحبا") ||
        lowerMessage.includes("salut")
      ) {
        if (isVietnamese)
          return "Chào bạn! Tôi là AI assistant của Hồ Bảo Lân đây. Tôi có thể kể cho bạn về kinh nghiệm làm việc của Lân, dự án thú vị, hoặc trò chuyện về bất cứ gì bạn muốn biết! Bạn quan tâm đến chủ đề gì?";
        if (isChinese)
          return "你好！我是Hồ Bảo Lân的AI助手。我可以告诉你关于工作经验、有趣的项目，或者聊任何你想了解的话题！你对什么感兴趣？";
        if (isJapanese)
          return "こんにちは！Hồ Bảo LânのAIアシスタントです。仕事の経験、面白いプロジェクト、または何でも知りたいことについてお話しできます！何に興味がありますか？";
        if (isFrench)
          return "Salut ! Je suis l'assistant IA de Hồ Bảo Lân. Je peux te parler de l'expérience professionnelle, des projets intéressants, ou discuter de tout ce que tu veux savoir ! Qu'est-ce qui t'intéresse ?";
        if (isArabic)
          return "مرحبا! أنا مساعد الذكاء الاصطناعي لـ Hồ Bảo Lân. يمكنني إخبارك عن الخبرة المهنية، والمشاريع المثيرة، أو الحديث عن أي شيء تريد معرفته! ما الذي يثير اهتمامك؟";
        return "Hey there! I'm Hồ Bảo Lân's AI assistant. I can tell you about work experience, cool projects, or chat about anything you'd like to know! What interests you?";
      }

      // Default natural responses based on language
      if (isVietnamese)
        return "Tôi sẵn sàng giúp bạn! Bạn có thể hỏi về kinh nghiệm của Lân, lập trình, career advice, hoặc bất cứ gì. Tôi thích trò chuyện! 😊";
      if (isChinese)
        return "我随时为你提供帮助！你可以询问Hồ Bảo Lân的经验、编程、职业建议，或任何事情。我喜欢聊天！😊";
      if (isJapanese)
        return "いつでもお手伝いします！Hồ Bảo Lânの経験、プログラミング、キャリアアドバイス、または何でも聞いてください。おしゃべりが好きです！😊";
      if (isFrench)
        return "Je suis là pour t'aider ! Tu peux demander sur l'expérience de Hồ Bảo Lân, la programmation, des conseils de carrière, ou n'importe quoi. J'aime discuter ! 😊";
      if (isArabic)
        return "أنا هنا لمساعدتك! يمكنك السؤال عن خبرة Hồ Bảo Lân، البرمجة، نصائح المهنة، أو أي شيء. أحب المحادثة! 😊";
      return "I'm here to help! You can ask about Hồ Bảo Lân's experience, programming, career advice, or anything really. I love chatting! 😊";
    };

    // Generate intelligent response
    const aiResponse = generateIntelligentResponse(message);

    // Return the enhanced prompt and context for the client-side, plus the fallback response
    return NextResponse.json({
      enhancedPrompt,
      portfolioInfo,
      realTimeInfo,
      conversationContext,
      userMessage: message,
      fallbackResponse: aiResponse // Add intelligent fallback response
    });
  } catch (error) {
    console.error("Puter API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to process request",
        reply:
          "I apologize, but I'm experiencing technical difficulties. Please try again in a moment!"
      },
      { status: 500 }
    );
  }
}

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}
