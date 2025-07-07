'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import {
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

interface Feature {
    icon: React.ReactNode
    text: string
}

const Work = () => {
    const t = useTranslations('projects')
    const locale = useLocale()
    const pathname = usePathname()

    const getCurrentLocale = () => {
        const pathLocale = pathname.split('/')[1];
        return pathLocale && ['en', 'ja', 'zh', 'fr', 'vi'].includes(pathLocale) ? pathLocale : locale || 'en';
    };

    const currentLocale = getCurrentLocale();

    const projects = [
        {
            id: 1,
            title: t('skillsync.title'),
            subtitle: t('skillsync.subtitle'),
            type: t('skillsync.type'),
            duration: t('skillsync.duration'),
            description: t('skillsync.description'),
            highlights: t.raw('skillsync.highlights'),
            technologies: [
                { name: ".NET 8", color: "bg-purple-500", category: t('category.backend') },
                { name: "Next.js", color: "bg-black", category: t('category.frontend') },
                { name: "IdentityServer", color: "bg-blue-600", category: t('category.auth') },
                { name: "RabbitMQ", color: "bg-orange-500", category: t('category.messaging') },
                { name: "MassTransit", color: "bg-green-600", category: t('category.framework') },
                { name: "gRPC", color: "bg-indigo-500", category: t('category.communication') },
                { name: "YARP Gateway", color: "bg-cyan-500", category: t('category.gateway') },
                { name: "Redis", color: "bg-red-500", category: t('category.cache') },
                { name: "SQL Server", color: "bg-blue-700", category: t('category.database') },
                { name: "Docker", color: "bg-blue-400", category: t('category.devops') },
                { name: "Kubernetes", color: "bg-blue-800", category: t('category.orchestration') }
            ],
            features: t.raw('skillsync.features').map((text: string, index: number) => ({
                icon: [
                    <BookOpen key={`skillsync-icon-${index}-0`} className="w-4 h-4" />,
                    <Award key={`skillsync-icon-${index}-1`} className="w-4 h-4" />,
                    <Shield key={`skillsync-icon-${index}-2`} className="w-4 h-4" />,
                    <Server key={`skillsync-icon-${index}-3`} className="w-4 h-4" />,
                    <Cloud key={`skillsync-icon-${index}-4`} className="w-4 h-4" />,
                    <Zap key={`skillsync-icon-${index}-5`} className="w-4 h-4" />
                ][index],
                text
            })),
            liveUrl: null,
            status: "In Development",
            impact: t('skillsync.impact')
        },
        {
            id: 2,
            title: t('portfolio.title'),
            subtitle: t('portfolio.subtitle'),
            type: t('portfolio.type'),
            duration: t('portfolio.duration'),
            description: t('portfolio.description'),
            highlights: t.raw('portfolio.highlights'),
            technologies: [
                { name: ".NET Core", color: "bg-purple-600", category: t('category.backend') },
                { name: "Next.js", color: "bg-black", category: t('category.frontend') },
                { name: "Entity Framework", color: "bg-blue-600", category: "ORM" },
                { name: "SQL Server", color: "bg-blue-700", category: t('category.database') },
                { name: "SignalR", color: "bg-green-600", category: "Real-time" },
                { name: "Stripe", color: "bg-indigo-600", category: "Payment" },
                { name: "ASP.NET Identity", color: "bg-purple-500", category: t('category.auth') },
                { name: "TypeScript", color: "bg-blue-500", category: t('category.frontend') },
                { name: "Tailwind CSS", color: "bg-cyan-500", category: "Styling" }
            ],
            features: t.raw('portfolio.features').map((text: string, index: number) => ({
                icon: [
                    <CreditCard key={`portfolio-icon-${index}-0`} className="w-4 h-4" />,
                    <MessageCircle key={`portfolio-icon-${index}-1`} className="w-4 h-4" />,
                    <Shield key={`portfolio-icon-${index}-2`} className="w-4 h-4" />,
                    <Users key={`portfolio-icon-${index}-3`} className="w-4 h-4" />,
                    <Database key={`portfolio-icon-${index}-4`} className="w-4 h-4" />,
                    <Globe key={`portfolio-icon-${index}-5`} className="w-4 h-4" />
                ][index],
                text
            })),
            liveUrl: null,
            status: "Completed",
            impact: t('portfolio.impact')
        },
        {
            id: 3,
            title: t('lms.title'),
            subtitle: t('lms.subtitle'),
            type: t('lms.type'),
            duration: t('lms.duration'),
            description: t('lms.description'),
            highlights: t.raw('lms.highlights'),
            technologies: [
                { name: ".NET Core", color: "bg-purple-600", category: t('category.backend') },
                { name: "Next.js", color: "bg-black", category: t('category.frontend') },
                { name: "Entity Framework", color: "bg-blue-600", category: "ORM" },
                { name: "SQL Server", color: "bg-blue-700", category: t('category.database') },
                { name: "SignalR", color: "bg-green-600", category: "Real-time" },
                { name: "MassTransit", color: "bg-green-600", category: t('category.messaging') },
                { name: "RabbitMQ", color: "bg-orange-500", category: "Message Broker" },
                { name: "Terraform", color: "bg-purple-600", category: "IaC" },
                { name: "Azure DevOps", color: "bg-blue-800", category: "CI/CD" },
                { name: "Azure", color: "bg-blue-500", category: t('category.cloud') },
                { name: "ElasticSearch", color: "bg-yellow-600", category: "Search" },
                { name: "SonarQube", color: "bg-blue-600", category: "Quality" },
                { name: "Docker", color: "bg-blue-400", category: t('category.devops') },
                { name: "Kubernetes", color: "bg-blue-800", category: t('category.orchestration') }
            ],
            features: t.raw('lms.features').map((text: string, index: number) => ({
                icon: [
                    <Server key={`lms-icon-${index}-0`} className="w-4 h-4" />,
                    <Database key={`lms-icon-${index}-1`} className="w-4 h-4" />,
                    <Shield key={`lms-icon-${index}-2`} className="w-4 h-4" />,
                    <Zap key={`lms-icon-${index}-3`} className="w-4 h-4" />,
                    <Cloud key={`lms-icon-${index}-4`} className="w-4 h-4" />,
                    <Code key={`lms-icon-${index}-5`} className="w-4 h-4" />
                ][index],
                text
            })),
            liveUrl: null,
            status: "In Development",
            impact: t('lms.impact')
        },
        {
            id: 4,
            title: t('railinc.title'),
            subtitle: t('railinc.subtitle'),
            type: t('railinc.type'),
            duration: t('railinc.duration'),
            description: t('railinc.description'),
            highlights: t.raw('railinc.highlights'),
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
            features: t.raw('railinc.features').map((text: string, index: number) => ({
                icon: [
                    <Code key={`railinc-icon-${index}-0`} className="w-4 h-4" />,
                    <Users key={`railinc-icon-${index}-1`} className="w-4 h-4" />,
                    <BookOpen key={`railinc-icon-${index}-2`} className="w-4 h-4" />,
                    <Zap key={`railinc-icon-${index}-3`} className="w-4 h-4" />,
                    <Shield key={`railinc-icon-${index}-4`} className="w-4 h-4" />,
                    <Globe key={`railinc-icon-${index}-5`} className="w-4 h-4" />
                ][index],
                text
            })),
            liveUrl: null,
            status: "Completed",
            impact: t('railinc.impact')
        },
        {
            id: 5,
            title: t('iibMigration.title'),
            subtitle: t('iibMigration.subtitle'),
            type: t('iibMigration.type'),
            duration: t('iibMigration.duration'),
            description: t('iibMigration.description'),
            highlights: t.raw('iibMigration.highlights'),
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
            features: t.raw('iibMigration.features').map((text: string, index: number) => ({
                icon: [
                    <Server key={`iib-icon-${index}-0`} className="w-4 h-4" />,
                    <MessageCircle key={`iib-icon-${index}-1`} className="w-4 h-4" />,
                    <BookOpen key={`iib-icon-${index}-2`} className="w-4 h-4" />,
                    <Zap key={`iib-icon-${index}-3`} className="w-4 h-4" />,
                    <Shield key={`iib-icon-${index}-4`} className="w-4 h-4" />,
                    <Database key={`iib-icon-${index}-5`} className="w-4 h-4" />
                ][index],
                text
            })),
            liveUrl: null,
            status: "Completed",
            impact: t('iibMigration.impact')
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-x-hidden">
            <div className="container mx-auto px-4 py-8 lg:py-12 max-w-full">
                <div className="w-full max-w-7xl mx-auto">
                    <div className="text-center mb-8 lg:mb-12">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            {t('title')}
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-6">
                            {t('subtitle')}
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-2">
                                <Code className="w-4 h-4 text-blue-500" />
                                <span>{t('quickStats.fullStack')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Cloud className="w-4 h-4 text-green-500" />
                                <span>{t('quickStats.cloudArchitecture')}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Shield className="w-4 h-4 text-purple-500" />
                                <span>{t('quickStats.enterpriseSecurity')}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 lg:space-y-12">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                            >
                                <div className="p-6 lg:p-8">
                                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.status === 'Completed'
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                                                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                                                    }`}>
                                                    {project.status === 'Completed' ? t('status.completed') : t('status.inDevelopment')}
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
                                        <div className="flex gap-3 mt-4 lg:mt-0">
                                            {project.liveUrl && (
                                                <Button
                                                    size="sm"
                                                    onClick={() => window.open(project.liveUrl!, '_blank')}
                                                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 cursor-pointer"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    {t('liveDemo')}
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                                        <p className="text-blue-800 dark:text-blue-200 font-medium">
                                            💡 {project.impact}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                            🚀 {t('keyFeatures')}
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {project.features.map((feature: Feature, idx: number) => (
                                                <div key={idx} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                                    <div className="text-blue-500">
                                                        {feature.icon}
                                                    </div>
                                                    <span className="text-sm">{feature.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                            ⭐ {t('highlights')}
                                        </h4>
                                        <ul className="space-y-2">
                                            {project.highlights.map((highlight: string, idx: number) => (
                                                <li key={idx} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                                    <span className="text-sm">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                                            🛠️ {t('technologies')}
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
                    <div className="text-center mt-12 lg:mt-16">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                                {t('callToAction.title')}
                            </h3>
                            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                                {t('callToAction.description')}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    onClick={() => window.location.href = `/${currentLocale}/contact`}
                                    className="bg-white text-blue-600 hover:bg-gray-100 cursor-pointer"
                                >
                                    <MessageCircle className="w-5 h-5 mr-2" />
                                    {t('callToAction.getInTouch')}
                                </Button>
                                <Button
                                    size="lg"
                                    onClick={() => window.location.href = `/${currentLocale}/resume`}
                                    className="bg-purple-600 hover:bg-purple-700 text-white border-purple-600 cursor-pointer"
                                >
                                    <Award className="w-5 h-5 mr-2" />
                                    {t('callToAction.viewResume')}
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