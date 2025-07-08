import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { getRealTimeInformation } from "@/lib/realtime-data";

const genAI = new GoogleGenerativeAI("AIzaSyAf3V8wRymRvinbGdNT7JOAJhwGfcXhCrw");

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

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Portfolio owner's comprehensive information
    const portfolioInfo = `
PORTFOLIO OWNER: Ho Bao Lan - Full-Stack Developer

PROFESSIONAL SUMMARY:
- 3+ years of fullstack expertise in .NET & React
- Passionate about clean code and scalable architecture
- Experience leading development teams
- Specializes in cloud architecture and microservices

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

EDUCATION & CERTIFICATIONS:
- Software Engineering background
- Cloud architecture certifications
- Continuous learning in modern technologies

LANGUAGES & MULTILINGUAL ABILITIES:
- Vietnamese: Native speaker (First language, perfect fluency)
- English: Fluent/Professional working proficiency (Business communication, technical discussions, presentations)
- Japanese: Conversational to Intermediate (Can communicate effectively, understands business context)
- Chinese (Mandarin): Conversational (Comfortable with basic to intermediate communication)
- French: Conversational (Can engage in professional and casual conversations)

Portfolio Features:
- Developed multilingual portfolio website supporting 5 languages (English, Japanese, Chinese, French, Vietnamese)
- Experience working in multicultural teams and international environments
- Comfortable conducting technical discussions and code reviews in multiple languages
- Can provide documentation and user interfaces in multiple languages
- Strong cross-cultural communication skills for global collaboration

SOFT SKILLS:
- Strong communication and presentation skills
- Cross-cultural collaboration experience
- Problem-solving and analytical thinking
- Adaptability and continuous learning mindset
- Leadership and team management
- Client relationship management

INTERESTS & GOALS:
- Open source contributions
- Exploring new technologies and frameworks
- Building scalable, maintainable software solutions
- Sharing knowledge through mentoring and technical discussions
- International collaboration and multicultural teams

PERSONAL ATTRIBUTES:
- Detail-oriented and quality-focused
- Collaborative team player
- Strong work ethic and reliability
- Passionate about technology innovation
- Committed to professional growth

CURRENT AVAILABILITY:
- Open to new opportunities
- Available for freelance projects
- Interested in full-time positions
- Remote work friendly
- Open to international opportunities
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

    // Enhanced prompt for multilingual AI interaction with portfolio knowledge
    const enhancedPrompt = `You are a knowledgeable AI assistant representing Ho Bao Lan's professional portfolio. You have comprehensive knowledge about their background, skills, and experience, but you can also help with any other questions or topics.

PORTFOLIO INFORMATION (for portfolio-related questions):
${portfolioInfo}

${
  realTimeInfo
    ? `REAL-TIME INFORMATION:
${realTimeInfo}

`
    : ""
}${
      conversationContext
        ? `RECENT CONVERSATION:
${conversationContext}

`
        : ""
    }USER'S CURRENT MESSAGE: ${message}

CRITICAL INSTRUCTIONS:
- ALWAYS detect the language of the user's message and respond in that EXACT same language
- You can answer ANY question, not just portfolio-related ones
- If real-time information is provided above, use it to answer current time/date questions
- For portfolio questions: Use the comprehensive portfolio information provided above
- For non-portfolio questions: Use your general knowledge to provide helpful, accurate answers
- When asked about Ho Bao Lan specifically, prioritize portfolio information
- When asked about language abilities, emphasize their multilingual skills: Native Vietnamese, Fluent English, Conversational Japanese/Chinese/French
- TRANSLATION SUPPORT: Can translate between Vietnamese, English, Japanese, Chinese, French
- GENERAL ASSISTANCE: Can help with programming questions, tech advice, career guidance, general knowledge, etc.
- CODING HELP: Can provide code examples, debug issues, explain concepts
- PROBLEM SOLVING: Can help brainstorm solutions for technical or professional challenges
- REAL-TIME QUERIES: Can provide current time/date when asked
- Be conversational, professional, and informative
- Keep responses CONCISE and focused (50-150 words maximum)
- Be direct and to the point - avoid lengthy explanations unless specifically requested
- If the user switches languages mid-conversation, immediately switch with them
- Always provide accurate and helpful information
- If unsure about something, be honest about limitations

Respond naturally and helpfully to any question while maintaining a professional tone:`;

    const result = await model.generateContent(enhancedPrompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ reply: text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      {
        error: "Failed to generate response",
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
