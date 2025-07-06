'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
    Github,
    ExternalLink,
    Calendar,
    Code,
    Database,
    Cloud,
    Shield,
    Zap,
    Users,
    CreditCard,
    MessageCircle,
    BookOpen,
    Award,
    Server,
    Globe
} from 'lucide-react'

const Work = () => {
    const projects = [
        {
            id: 1,
            title: "SkillSync - EdTech Platform",
            subtitle: "Scalable Learning Management System",
            type: "Personal Project",
            duration: "2024",
            description: "A comprehensive EdTech platform designed for real-time learning, skill tracking, and microcredentials with enterprise-grade architecture.",
            highlights: [
                "Microservices architecture with gRPC communication",
                "Real-time learning and skill tracking system",
                "Multi-tenant authentication with IdentityServer",
                "Automated certificate generation and video transcoding",
                "Pluggable assessment engine (quiz/coding/essay)",
                "Docker & Kubernetes deployment pipeline"
            ],
            technologies: [
                { name: ".NET 8", color: "bg-purple-500", category: "Backend" },
                { name: "Next.js", color: "bg-black", category: "Frontend" },
                { name: "IdentityServer", color: "bg-blue-600", category: "Auth" },
                { name: "RabbitMQ", color: "bg-orange-500", category: "Messaging" },
                { name: "MassTransit", color: "bg-green-600", category: "Framework" },
                { name: "gRPC", color: "bg-indigo-500", category: "Communication" },
                { name: "YARP Gateway", color: "bg-cyan-500", category: "Gateway" },
                { name: "Redis", color: "bg-red-500", category: "Cache" },
                { name: "SQL Server", color: "bg-blue-700", category: "Database" },
                { name: "Docker", color: "bg-blue-400", category: "DevOps" },
                { name: "Kubernetes", color: "bg-blue-800", category: "Orchestration" }
            ],
            features: [
                { icon: <BookOpen className="w-4 h-4" />, text: "Real-time Learning Platform" },
                { icon: <Award className="w-4 h-4" />, text: "Microcredentials System" },
                { icon: <Shield className="w-4 h-4" />, text: "Multi-tenant Security" },
                { icon: <Server className="w-4 h-4" />, text: "Microservices Architecture" },
                { icon: <Cloud className="w-4 h-4" />, text: "Kubernetes Deployment" },
                { icon: <Zap className="w-4 h-4" />, text: "Background Processing" }
            ],
            githubUrl: null,
            liveUrl: null,
            status: "In Development",
            impact: "Enterprise-ready EdTech solution designed to scale for thousands of concurrent learners"
        },
        {
            id: 2,
            title: "Shop App - E-commerce Platform",
            subtitle: "Full-Stack E-commerce Solution",
            type: "Open Source Project",
            duration: "2023",
            description: "A modern e-commerce web application built with .NET Core and Next.js, featuring real-time interactions, secure payment processing, and comprehensive user management systems.",
            highlights: [
                "Full-stack e-commerce solution with .NET Core Web API",
                "Secure payment processing with Stripe integration",
                "Real-time user interactions and reviews with SignalR",
                "Advanced security measures (CSRF/XSS protection)",
                "JWT-based authentication with Identity framework",
                "Interactive product review system with real-time updates"
            ],
            technologies: [
                { name: ".NET Core", color: "bg-purple-600", category: "Backend" },
                { name: "Next.js", color: "bg-black", category: "Frontend" },
                { name: "Entity Framework", color: "bg-blue-600", category: "ORM" },
                { name: "SQL Server", color: "bg-blue-700", category: "Database" },
                { name: "SignalR", color: "bg-green-600", category: "Real-time" },
                { name: "Stripe", color: "bg-indigo-600", category: "Payment" },
                { name: "ASP.NET Identity", color: "bg-purple-500", category: "Authentication" },
                { name: "TypeScript", color: "bg-blue-500", category: "Frontend" },
                { name: "Tailwind CSS", color: "bg-cyan-500", category: "Styling" }
            ],
            features: [
                { icon: <CreditCard className="w-4 h-4" />, text: "Stripe Payment Integration" },
                { icon: <MessageCircle className="w-4 h-4" />, text: "Real-time Reviews with SignalR" },
                { icon: <Shield className="w-4 h-4" />, text: "ASP.NET Identity Security" },
                { icon: <Users className="w-4 h-4" />, text: "User Management System" },
                { icon: <Database className="w-4 h-4" />, text: "Entity Framework ORM" },
                { icon: <Globe className="w-4 h-4" />, text: ".NET Core Web API" }
            ],
            liveUrl: null,
            status: "Completed",
            impact: "Production-ready e-commerce platform built with .NET Core and Next.js, featuring secure payment processing and real-time features"
        },
        {
            id: 3,
            title: "Eshop - Enterprise E-commerce Platform",
            subtitle: "Microservices-based E-commerce Solution",
            type: "Team Project (10 Members)",
            duration: "April 2023 - September 2023",
            description: "Led development of a scalable enterprise e-commerce platform using .NET microservices architecture with Next.js frontend, implementing advanced filtering systems and database optimization strategies.",
            highlights: [
                "Designed and implemented comprehensive database architecture with Entity Framework",
                "Built RESTful APIs with .NET Core and Next.js integration",
                "Implemented strategy pattern for advanced product filtering",
                "Optimized database performance and resolved N+1 query issues",
                "Established CI/CD pipeline with comprehensive testing using xUnit",
                "Conducted code reviews enforcing SOLID principles",
                "Mentored team members on .NET and Next.js best practices"
            ],
            technologies: [
                { name: ".NET Core", color: "bg-purple-600", category: "Backend" },
                { name: "Next.js", color: "bg-black", category: "Frontend" },
                { name: "Entity Framework", color: "bg-blue-600", category: "ORM" },
                { name: "SQL Server", color: "bg-blue-700", category: "Database" },
                { name: "SignalR", color: "bg-green-600", category: "Real-time" },
                { name: "MassTransit", color: "bg-green-600", category: "Messaging" },
                { name: "RabbitMQ", color: "bg-orange-500", category: "Message Broker" },
                { name: "Terraform", color: "bg-purple-600", category: "IaC" },
                { name: "Azure DevOps", color: "bg-blue-800", category: "CI/CD" },
                { name: "Azure", color: "bg-blue-500", category: "Cloud" },
                { name: "ElasticSearch", color: "bg-yellow-600", category: "Search" },
                { name: "SonarQube", color: "bg-blue-600", category: "Quality" },
                { name: "Docker", color: "bg-blue-400", category: "DevOps" },
                { name: "Kubernetes", color: "bg-blue-800", category: "Orchestration" }
            ],
            features: [
                { icon: <Server className="w-4 h-4" />, text: "Microservices Architecture" },
                { icon: <Database className="w-4 h-4" />, text: "Advanced Product Filtering" },
                { icon: <Shield className="w-4 h-4" />, text: "SOLID Principles Implementation" },
                { icon: <Zap className="w-4 h-4" />, text: "Performance Optimization" },
                { icon: <Cloud className="w-4 h-4" />, text: "AWS Cloud Deployment" },
                { icon: <Code className="w-4 h-4" />, text: "Domain-Driven Design" }
            ],
            githubUrl: null,
            liveUrl: null,
            status: "In Development",
            impact: "Enterprise-grade e-commerce platform serving high-volume traffic with optimized performance and scalable architecture"
        },
        {
            id: 4,
            title: "Railinc Legacy Migration - Find With Us",
            subtitle: "Angular 9 to 15 Modernization Project",
            type: "Team Project (8 Members) - EVIZI",
            duration: "September 2023 - October 2023",
            description: "Led frontend modernization initiative, migrating legacy Angular 9 application to Angular 15 with comprehensive UI/UX improvements and modern development practices.",
            highlights: [
                "Successfully migrated legacy Angular 9 to Angular 15",
                "Documented deprecated dependencies and migration workflows",
                "Implemented Angular Material 15 with Bootstrap 5 conventions",
                "Refactored codebase to meet modern requirements",
                "Created comprehensive migration documentation for team",
                "Improved application performance and user experience",
                "Established best practices for future development"
            ],
            technologies: [
                { name: "Angular 15", color: "bg-red-500", category: "Frontend" },
                { name: "Angular Material", color: "bg-indigo-600", category: "UI Framework" },
                { name: "Bootstrap 5", color: "bg-purple-600", category: "CSS Framework" },
                { name: "AG Grid", color: "bg-green-600", category: "Data Grid" },
                { name: "Spring Boot", color: "bg-green-700", category: "Backend" },
                { name: "Hibernate", color: "bg-amber-600", category: "ORM" },
                { name: "ActiveMQ", color: "bg-red-700", category: "Messaging" },
                { name: "AWS", color: "bg-orange-500", category: "Cloud" },
                { name: "RESTful APIs", color: "bg-blue-600", category: "API" }
            ],
            features: [
                { icon: <Code className="w-4 h-4" />, text: "Legacy System Modernization" },
                { icon: <Users className="w-4 h-4" />, text: "Angular Material Integration" },
                { icon: <BookOpen className="w-4 h-4" />, text: "Comprehensive Documentation" },
                { icon: <Zap className="w-4 h-4" />, text: "Performance Improvements" },
                { icon: <Shield className="w-4 h-4" />, text: "Best Practices Implementation" },
                { icon: <Globe className="w-4 h-4" />, text: "Modern UI/UX Design" }
            ],
            githubUrl: null,
            liveUrl: null,
            status: "Completed",
            impact: "Successfully modernized critical business application, improving maintainability and user experience while reducing technical debt"
        },
        {
            id: 5,
            title: "Railinc IIB Migration Project",
            subtitle: "IBM Integration Bus to Spring Boot Migration",
            type: "Team Project (5 Members) - EVIZI",
            duration: "October 2023 - November 2023",
            description: "Architected and executed migration of legacy IBM Integration Bus infrastructure to modern Spring Boot microservices, ensuring seamless message transformation and system integration.",
            highlights: [
                "Migrated legacy IBM Integration Bus to Spring Boot",
                "Documented complex IIB message flows and workflows",
                "Implemented Apache Camel for message routing and transformation",
                "Replaced IBM MQ with ActiveMQ for better scalability",
                "Created comprehensive migration specifications",
                "Ensured zero-downtime migration strategy",
                "Established monitoring and error handling patterns"
            ],
            technologies: [
                { name: "Spring Boot", color: "bg-green-700", category: "Backend" },
                { name: "Apache Camel", color: "bg-red-600", category: "Integration" },
                { name: "ActiveMQ", color: "bg-red-700", category: "Messaging" },
                { name: "IBM Connect", color: "bg-blue-800", category: "Legacy" },
                { name: "IBM MQ", color: "bg-blue-900", category: "Legacy Messaging" },
                { name: "ESQL", color: "bg-gray-600", category: "Query Language" },
                { name: "JMS", color: "bg-orange-600", category: "Messaging API" },
                { name: "Java", color: "bg-orange-700", category: "Programming" }
            ],
            features: [
                { icon: <Server className="w-4 h-4" />, text: "Legacy System Migration" },
                { icon: <MessageCircle className="w-4 h-4" />, text: "Message Transformation" },
                { icon: <BookOpen className="w-4 h-4" />, text: "Technical Documentation" },
                { icon: <Zap className="w-4 h-4" />, text: "Zero-Downtime Migration" },
                { icon: <Shield className="w-4 h-4" />, text: "Enterprise Integration" },
                { icon: <Database className="w-4 h-4" />, text: "Data Flow Optimization" }
            ],
            githubUrl: null,
            liveUrl: null,
            status: "Completed",
            impact: "Successfully modernized critical enterprise integration infrastructure, reducing maintenance costs and improving system reliability"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
            <div className="container mx-auto px-4 py-8 lg:py-12 max-w-full">
                <div className="w-full max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-8 lg:mb-12">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Featured Projects
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                            Showcasing enterprise-grade applications built with modern technologies and best practices
                        </p>

                        {/* Quick Stats */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <Code className="w-4 h-4 text-blue-500" />
                                <span>Full-Stack Development</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Cloud className="w-4 h-4 text-green-500" />
                                <span>Cloud Architecture</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-purple-500" />
                                <span>Enterprise Security</span>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="space-y-8 lg:space-y-12">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                <div className="p-6 lg:p-8">
                                    {/* Project Header */}
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === 'Completed'
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                                    }`}>
                                                    {project.status}
                                                </span>
                                                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">
                                                    {project.type}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                                {project.title}
                                            </h2>
                                            <h3 className="text-lg text-gray-600 dark:text-gray-300 mb-3">
                                                {project.subtitle}
                                            </h3>
                                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                                <Calendar className="w-4 h-4" />
                                                <span>{project.duration}</span>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-3 mt-4 lg:mt-0">
                                            {project.githubUrl && (
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => window.open(project.githubUrl!, '_blank')}
                                                    className="flex items-center gap-2 cursor-pointer"
                                                >
                                                    <Github className="w-4 h-4" />
                                                    Code
                                                </Button>
                                            )}
                                            {project.liveUrl && (
                                                <Button
                                                    size="sm"
                                                    onClick={() => window.open(project.liveUrl!, '_blank')}
                                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 cursor-pointer"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Live Demo
                                                </Button>
                                            )}
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg mb-6 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Impact Statement */}
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                                        <p className="text-blue-800 dark:text-blue-200 font-medium">
                                            💡 {project.impact}
                                        </p>
                                    </div>

                                    {/* Key Features */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                            🚀 Key Features
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {project.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                                    <div className="text-blue-500">
                                                        {feature.icon}
                                                    </div>
                                                    <span className="text-sm">{feature.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Technical Highlights */}
                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                            ⭐ Technical Highlights
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-sm">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technology Stack */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                            🛠️ Technology Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className={`px-3 py-1 ${tech.color} text-white rounded-full text-xs font-medium shadow-sm hover:scale-105 transition-transform duration-200`}
                                                >
                                                    {tech.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12 lg:mt-16">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                Interested in My Work?
                            </h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                I&apos;m always excited to discuss new opportunities and collaborate on innovative projects.
                                Let&apos;s build something amazing together!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    onClick={() => window.location.href = '/contact'}
                                    className="bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    Get In Touch
                                </Button>
                                <Button
                                    size="lg"
                                    onClick={() => window.location.href = '/resume'}
                                    className="bg-purple-600 hover:bg-purple-700 text-white border-purple-600 cursor-pointer"
                                >
                                    <Award className="w-5 h-5 mr-2" />
                                    View Resume
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work