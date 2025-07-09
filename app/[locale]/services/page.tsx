'use client'
import React, { useState, useEffect } from 'react'
import {
    Github,
    Star,
    GitBranch,
    Code,
    ExternalLink,
    TrendingUp,
    Activity,
    Loader2,
    AlertCircle
} from 'lucide-react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js'
import { Pie, Bar } from 'react-chartjs-2'
import { motion, AnimatePresence } from 'framer-motion'
import axios from 'axios'

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title)

// Types for GitHub API responses
interface GitHubRepo {
    id: number
    name: string
    full_name: string
    description: string
    html_url: string
    stargazers_count: number
    forks_count: number
    language: string
    updated_at: string
    created_at: string
}

interface GitHubCommit {
    sha: string
    commit: {
        author: {
            name: string
            date: string
        }
        message: string
    }
    html_url: string
}

interface LanguageStats {
    [key: string]: {
        bytes: number
        percentage: number
        repos: string[]
    }
}

interface CommitStats {
    [repoName: string]: number
}

interface RepoLanguages {
    [repoName: string]: { [language: string]: number }
}

const GitHubStats = () => {
    const [repos, setRepos] = useState<GitHubRepo[]>([])
    const [commits, setCommits] = useState<CommitStats>({})
    const [languageStats, setLanguageStats] = useState<LanguageStats>({})
    const [repoLanguages, setRepoLanguages] = useState<RepoLanguages>({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [demoMode, setDemoMode] = useState(false)

    // GitHub username - you can make this configurable
    const GITHUB_USERNAME = 'blanho' // Change this to your actual GitHub username

    // Demo data for fallback - comprehensive tech stack
    const demoRepos: GitHubRepo[] = [
        {
            id: 1,
            name: 'portfolio-website',
            full_name: 'blanho/portfolio-website',
            description: 'Personal portfolio website built with Next.js and TypeScript',
            html_url: 'https://github.com/blanho/portfolio-website',
            stargazers_count: 25,
            forks_count: 6,
            language: 'TypeScript',
            updated_at: '2025-01-10T10:00:00Z',
            created_at: '2024-12-01T10:00:00Z'
        },
        {
            id: 2,
            name: 'react-dashboard',
            full_name: 'blanho/react-dashboard',
            description: 'Modern dashboard built with React and Redux',
            html_url: 'https://github.com/blanho/react-dashboard',
            stargazers_count: 18,
            forks_count: 4,
            language: 'JavaScript',
            updated_at: '2025-01-09T10:00:00Z',
            created_at: '2024-11-15T10:00:00Z'
        },
        {
            id: 3,
            name: 'dotnet-microservices',
            full_name: 'blanho/dotnet-microservices',
            description: 'Microservices architecture with .NET Core and Docker',
            html_url: 'https://github.com/blanho/dotnet-microservices',
            stargazers_count: 32,
            forks_count: 12,
            language: 'C#',
            updated_at: '2025-01-08T10:00:00Z',
            created_at: '2024-10-20T10:00:00Z'
        },
        {
            id: 4,
            name: 'python-ml-pipeline',
            full_name: 'blanho/python-ml-pipeline',
            description: 'Machine learning pipeline with Python and Kubernetes',
            html_url: 'https://github.com/blanho/python-ml-pipeline',
            stargazers_count: 28,
            forks_count: 10,
            language: 'Python',
            updated_at: '2025-01-07T10:00:00Z',
            created_at: '2024-09-10T10:00:00Z'
        },
        {
            id: 5,
            name: 'go-microservice',
            full_name: 'blanho/go-microservice',
            description: 'High-performance microservice built with Go and Redis',
            html_url: 'https://github.com/blanho/go-microservice',
            stargazers_count: 22,
            forks_count: 8,
            language: 'Go',
            updated_at: '2025-01-06T10:00:00Z',
            created_at: '2024-08-15T10:00:00Z'
        },
        {
            id: 6,
            name: 'devops-automation',
            full_name: 'blanho/devops-automation',
            description: 'DevOps automation scripts with Bash and Docker',
            html_url: 'https://github.com/blanho/devops-automation',
            stargazers_count: 15,
            forks_count: 5,
            language: 'Shell',
            updated_at: '2025-01-05T10:00:00Z',
            created_at: '2024-07-20T10:00:00Z'
        },
        {
            id: 7,
            name: 'e2e-testing-suite',
            full_name: 'blanho/e2e-testing-suite',
            description: 'End-to-end testing suite with Cypress and Jest',
            html_url: 'https://github.com/blanho/e2e-testing-suite',
            stargazers_count: 12,
            forks_count: 3,
            language: 'JavaScript',
            updated_at: '2025-01-04T10:00:00Z',
            created_at: '2024-06-10T10:00:00Z'
        },
        {
            id: 8,
            name: 'aws-serverless-app',
            full_name: 'blanho/aws-serverless-app',
            description: 'Serverless application deployed on AWS with Lambda',
            html_url: 'https://github.com/blanho/aws-serverless-app',
            stargazers_count: 20,
            forks_count: 7,
            language: 'Python',
            updated_at: '2025-01-03T10:00:00Z',
            created_at: '2024-05-15T10:00:00Z'
        }
    ]

    const demoLanguageStats: LanguageStats = {
        'TypeScript': { bytes: 85000, percentage: 28.5, repos: ['portfolio-website', 'react-dashboard'] },
        'JavaScript': { bytes: 70000, percentage: 23.4, repos: ['react-dashboard', 'e2e-testing-suite'] },
        'C#': { bytes: 60000, percentage: 20.1, repos: ['dotnet-microservices'] },
        'Python': { bytes: 45000, percentage: 15.1, repos: ['python-ml-pipeline', 'aws-serverless-app'] },
        'Go': { bytes: 25000, percentage: 8.4, repos: ['go-microservice'] },
        'Shell': { bytes: 8000, percentage: 2.7, repos: ['devops-automation'] },
        'HTML': { bytes: 3000, percentage: 1.0, repos: ['portfolio-website'] },
        'CSS': { bytes: 2500, percentage: 0.8, repos: ['portfolio-website'] }
    }

    const demoRepoLanguages: RepoLanguages = {
        'portfolio-website': { 'TypeScript': 45000, 'JavaScript': 25000, 'HTML': 3000, 'CSS': 2500 },
        'react-dashboard': { 'TypeScript': 40000, 'JavaScript': 30000 },
        'dotnet-microservices': { 'C#': 60000 },
        'python-ml-pipeline': { 'Python': 25000 },
        'go-microservice': { 'Go': 25000 },
        'devops-automation': { 'Shell': 8000 },
        'e2e-testing-suite': { 'JavaScript': 15000 },
        'aws-serverless-app': { 'Python': 20000 }
    }

    const demoCommits: CommitStats = {
        'portfolio-website': 25,
        'react-dashboard': 18,
        'dotnet-microservices': 32,
        'python-ml-pipeline': 28,
        'go-microservice': 22,
        'devops-automation': 15,
        'e2e-testing-suite': 12,
        'aws-serverless-app': 20
    }

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    const cardVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.2
            }
        }
    }

    const pulseVariants = {
        pulse: {
            scale: [1, 1.05, 1],
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }

    // Enhanced language to skill mapping with comprehensive tech stack
    const languageToSkills: { [key: string]: string[] } = {
        'TypeScript': ['Frontend Development', 'Type Safety', 'Modern JavaScript', 'Angular', 'React', 'Next.js'],
        'JavaScript': ['Frontend Development', 'Backend Development', 'Web Development', 'Node.js', 'React', 'Jest'],
        'C#': ['Backend Development', '.NET Framework', 'Enterprise Applications', 'ASP.NET', 'Azure', '.NET Core'],
        'Python': ['Data Science', 'Machine Learning', 'Backend Development', 'AI/ML', 'Django', 'AWS Lambda'],
        'Go': ['Microservices', 'Cloud Native', 'System Programming', 'Docker', 'Kubernetes', 'Performance'],
        'HTML': ['Web Development', 'Frontend Development', 'Markup Languages', 'SEO', 'HTML5'],
        'CSS': ['UI/UX Design', 'Frontend Development', 'Responsive Design', 'Animations', 'Tailwind CSS'],
        'SCSS': ['Advanced Styling', 'CSS Preprocessing', 'Frontend Development', 'Sass', 'UI/UX'],
        'Shell': ['DevOps', 'System Administration', 'Automation', 'Linux', 'Bash Scripting'],
        'Bash': ['Linux Administration', 'Shell Scripting', 'DevOps', 'Automation', 'System Programming'],
        'React': ['Frontend Frameworks', 'Component-Based Architecture', 'Modern UI', 'Next.js', 'Redux'],
        'Redux': ['State Management', 'React', 'Frontend Architecture', 'Flux Pattern', 'JavaScript'],
        'Next.js': ['Full-Stack React', 'SSR', 'SSG', 'Modern Web Apps', 'Vercel'],
        'Node.js': ['Backend Development', 'JavaScript Runtime', 'API Development', 'Express.js', 'Microservices'],
        'Docker': ['Containerization', 'DevOps', 'Cloud Native', 'Microservices', 'Kubernetes'],
        'Kubernetes': ['Container Orchestration', 'Cloud Native', 'DevOps', 'Microservices', 'Scaling'],
        'AWS': ['Cloud Computing', 'Infrastructure', 'Serverless', 'Lambda', 'S3', 'EC2'],
        'Azure': ['Cloud Computing', 'Microsoft Cloud', 'DevOps', 'CI/CD', 'Infrastructure'],
        'Git': ['Version Control', 'Collaboration', 'DevOps', 'Code Management', 'GitHub'],
        'Jenkins': ['CI/CD', 'DevOps', 'Automation', 'Build Pipeline', 'Testing'],
        'MongoDB': ['NoSQL Database', 'Document Database', 'Backend Development', 'Data Storage'],
        'MySQL': ['Relational Database', 'SQL', 'Backend Development', 'Data Management'],
        'PostgreSQL': ['Relational Database', 'Advanced SQL', 'Backend Development', 'ACID Compliance'],
        'Redis': ['In-Memory Database', 'Caching', 'Session Storage', 'Performance Optimization'],
        'RabbitMQ': ['Message Queue', 'Microservices', 'Async Processing', 'Event-Driven Architecture'],
        'Nginx': ['Web Server', 'Reverse Proxy', 'Load Balancing', 'DevOps', 'Performance'],
        'Linux': ['System Administration', 'DevOps', 'Server Management', 'Command Line', 'Shell'],
        'Jest': ['Testing Framework', 'Unit Testing', 'JavaScript Testing', 'TDD', 'Code Quality'],
        'Cypress': ['E2E Testing', 'Test Automation', 'UI Testing', 'Quality Assurance', 'CI/CD'],
        'Kibana': ['Data Visualization', 'Log Analysis', 'Elasticsearch', 'Monitoring', 'DevOps'],
        'Tailwind': ['CSS Framework', 'Utility-First CSS', 'Responsive Design', 'Modern UI', 'Frontend']
    }

    // Enhanced color palette for comprehensive tech stack
    const getLanguageColor = (language: string): string => {
        const colors: { [key: string]: string } = {
            'TypeScript': '#3178C6',
            'JavaScript': '#F7DF1E',
            'C#': '#239120',
            'Python': '#3776AB',
            'Go': '#00ADD8',
            'HTML': '#E34F26',
            'CSS': '#1572B6',
            'SCSS': '#CF649A',
            'Shell': '#89E051',
            'Bash': '#4EAA25',
            'React': '#61DAFB',
            'Redux': '#764ABC',
            'Next.js': '#000000',
            'Node.js': '#339933',
            'Docker': '#2496ED',
            'Kubernetes': '#326CE5',
            'AWS': '#FF9900',
            'Azure': '#0078D4',
            'Git': '#F05032',
            'Jenkins': '#D33833',
            'MongoDB': '#47A248',
            'MySQL': '#4479A1',
            'PostgreSQL': '#336791',
            'Redis': '#DC382D',
            'RabbitMQ': '#FF6600',
            'Nginx': '#009639',
            'Linux': '#FCC624',
            'Jest': '#C21325',
            'Cypress': '#17202C',
            'Kibana': '#005571',
            'Tailwind': '#06B6D4',
            'Java': '#ED8B00',
            'Rust': '#000000',
            'Vue': '#4FC08D',
            'Angular': '#DD0031',
            'PHP': '#777BB4',
            'Swift': '#FA7343',
            'Kotlin': '#0095D5',
            'Dart': '#0175C2',
            'PowerShell': '#5391FE',
            'Dockerfile': '#384D54',
            'YAML': '#CB171E',
            'JSON': '#000000',
            'Markdown': '#083FA1',
            'SQL': '#336791'
        }
        return colors[language] || '#6B7280'
    }

    const getInferredSkills = (languages: LanguageStats): string[] => {
        const skills = new Set<string>()
        Object.keys(languages).forEach(lang => {
            const langSkills = languageToSkills[lang] || []
            langSkills.forEach(skill => skills.add(skill))
        })
        return Array.from(skills)
    }

    const fetchGitHubData = async () => {
        try {
            setLoading(true)
            setError(null)

            // Add a small delay to show loading animation
            await new Promise(resolve => setTimeout(resolve, 500))

            // Fetch repositories with better error handling
            const reposResponse = await axios.get<GitHubRepo[]>(
                `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
                {
                    headers: {
                        'Accept': 'application/vnd.github.v3+json'
                    },
                    timeout: 10000 // 10 second timeout
                }
            )

            if (reposResponse.status !== 200) {
                throw new Error(`GitHub API returned status ${reposResponse.status}`)
            }

            const reposData = reposResponse.data.filter(repo => !repo.name.startsWith('.'))

            if (reposData.length === 0) {
                throw new Error('No public repositories found for this user')
            }

            setRepos(reposData)

            // Get top 3 most active repositories
            const topRepos = reposData
                .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
                .slice(0, 3)

            // Fetch commits for top repositories (last 30 days) with better error handling
            const commitPromises = topRepos.map(async (repo) => {
                try {
                    const thirtyDaysAgo = new Date()
                    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

                    const commitsResponse = await axios.get<GitHubCommit[]>(
                        `https://api.github.com/repos/${repo.full_name}/commits?since=${thirtyDaysAgo.toISOString()}&per_page=100`,
                        {
                            headers: {
                                'Accept': 'application/vnd.github.v3+json'
                            },
                            timeout: 5000 // 5 second timeout for commits
                        }
                    )
                    return { repoName: repo.name, commitCount: commitsResponse.data.length }
                } catch (error) {
                    console.warn(`Failed to fetch commits for ${repo.name}:`, error)
                    return { repoName: repo.name, commitCount: 0 }
                }
            })

            const commitResults = await Promise.all(commitPromises)
            const commitsData: CommitStats = {}
            commitResults.forEach(result => {
                commitsData[result.repoName] = result.commitCount
            })
            setCommits(commitsData)

            // Fetch detailed language statistics for each repository with better error handling
            const languagePromises = reposData.map(async (repo) => {
                try {
                    const langResponse = await axios.get<{ [key: string]: number }>(
                        `https://api.github.com/repos/${repo.full_name}/languages`,
                        {
                            headers: {
                                'Accept': 'application/vnd.github.v3+json'
                            },
                            timeout: 5000 // 5 second timeout for languages
                        }
                    )
                    return { repoName: repo.name, languages: langResponse.data }
                } catch (error) {
                    console.warn(`Failed to fetch languages for ${repo.name}:`, error)
                    return { repoName: repo.name, languages: {} }
                }
            })

            const languageResults = await Promise.all(languagePromises)

            // Aggregate language statistics with detailed information
            const langStats: LanguageStats = {}
            const repoLangs: RepoLanguages = {}
            let totalBytes = 0

            languageResults.forEach(result => {
                repoLangs[result.repoName] = result.languages
                Object.entries(result.languages).forEach(([lang, bytes]) => {
                    totalBytes += bytes
                    if (!langStats[lang]) {
                        langStats[lang] = { bytes: 0, percentage: 0, repos: [] }
                    }
                    langStats[lang].bytes += bytes
                    if (!langStats[lang].repos.includes(result.repoName)) {
                        langStats[lang].repos.push(result.repoName)
                    }
                })
            })

            // Calculate percentages
            Object.keys(langStats).forEach(lang => {
                langStats[lang].percentage = (langStats[lang].bytes / totalBytes) * 100
            })

            setLanguageStats(langStats)
            setRepoLanguages(repoLangs)

        } catch (err) {
            console.error('Error fetching GitHub data:', err)

            // Use demo data as fallback
            console.log('Using demo data as fallback...')
            setDemoMode(true)
            setRepos(demoRepos)
            setLanguageStats(demoLanguageStats)
            setRepoLanguages(demoRepoLanguages)
            setCommits(demoCommits)
            setError(null) // Clear error since we're using demo data

        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchGitHubData()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    // Chart.js configuration with enhanced colors
    const pieChartData = {
        labels: Object.keys(languageStats),
        datasets: [
            {
                data: Object.values(languageStats).map(stat => stat.bytes),
                backgroundColor: Object.keys(languageStats).map(lang => getLanguageColor(lang)),
                borderWidth: 3,
                borderColor: '#ffffff',
                hoverBorderWidth: 4,
                hoverBorderColor: '#ffffff'
            }
        ]
    }

    const languageBarData = {
        labels: Object.keys(languageStats).slice(0, 10), // Top 10 languages
        datasets: [
            {
                label: 'Lines of Code',
                data: Object.values(languageStats).slice(0, 10).map(stat => stat.bytes),
                backgroundColor: Object.keys(languageStats).slice(0, 10).map(lang => getLanguageColor(lang)),
                borderColor: Object.keys(languageStats).slice(0, 10).map(lang => getLanguageColor(lang)),
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false
            }
        ]
    }

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    padding: 20,
                    usePointStyle: true
                }
            },
            tooltip: {
                callbacks: {
                    label: (context: { label: string; parsed: number; dataset: { data: number[] } }) => {
                        const label = context.label || ''
                        const value = context.parsed || 0
                        const percentage = ((value / context.dataset.data.reduce((a: number, b: number) => a + b, 0)) * 100).toFixed(1)
                        return `${label}: ${(value / 1000).toFixed(1)}K bytes (${percentage}%)`
                    }
                }
            }
        }
    }

    const languageBarOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (context: { label: string; parsed: { y: number } }) => {
                        const value = context.parsed.y
                        return `${context.label}: ${(value / 1000).toFixed(1)}K bytes`
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: (value: string | number) => `${(Number(value) / 1000).toFixed(0)}K`,
                    precision: 0
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            },
            x: {
                grid: {
                    display: false
                }
            }
        }
    }

    if (loading) {
        return (
            <AnimatePresence>
                <motion.div
                    className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-center min-h-[60vh]">
                            <motion.div
                                className="text-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                >
                                    <Loader2 className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                                </motion.div>
                                <motion.h2
                                    className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Loading GitHub Statistics
                                </motion.h2>
                                <motion.p
                                    className="text-gray-600 dark:text-gray-300 mb-6"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Fetching repositories and analyzing code...
                                </motion.p>
                                <div className="flex justify-center gap-2">
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-3 h-3 bg-blue-600 rounded-full"
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                delay: i * 0.2
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        )
    }

    if (error) {
        return (
            <AnimatePresence>
                <motion.div
                    className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-center min-h-[60vh]">
                            <motion.div
                                className="text-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 0.5, repeat: 2 }}
                                >
                                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
                                </motion.div>
                                <motion.h2
                                    className="text-2xl font-semibold text-gray-900 dark:text-white mb-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Error Loading Data
                                </motion.h2>
                                <motion.p
                                    className="text-gray-600 dark:text-gray-300 mb-6"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {error}
                                </motion.p>
                                <motion.button
                                    onClick={fetchGitHubData}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium shadow-lg"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Try Again
                                </motion.button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        )
    }

    const inferredSkills = getInferredSkills(languageStats)

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-6"
                        variants={itemVariants}
                    >
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Github className="w-12 h-12 text-gray-900 dark:text-white" />
                        </motion.div>
                        <motion.h1
                            className="text-5xl font-bold text-gray-900 dark:text-white"
                            variants={itemVariants}
                        >
                            GitHub Statistics
                        </motion.h1>
                    </motion.div>
                    <motion.p
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8"
                        variants={itemVariants}
                    >
                        Real-time insights into my coding activity, language usage, and project contributions
                        {demoMode && (
                            <span className="block mt-2 text-sm text-yellow-600 dark:text-yellow-400">
                                ⚠️ Demo Mode: Showing sample data due to GitHub API limitations
                            </span>
                        )}
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap justify-center gap-4"
                        variants={itemVariants}
                    >
                        {[
                            { icon: Github, label: `@${GITHUB_USERNAME}`, color: "text-gray-600 dark:text-gray-300" },
                            { icon: Code, label: `${repos.length} Repositories`, color: "text-blue-600" },
                            { icon: Activity, label: `${Object.keys(languageStats).length} Languages`, color: "text-green-600" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md"
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ duration: 0.2 }}
                            >
                                <item.icon className={`w-5 h-5 ${item.color}`} />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {item.label}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Main Content Grid - GitHub Summary, Repositories, and Language Breakdown */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* GitHub Summary & Analytics */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <motion.h2
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
                            variants={itemVariants}
                        >
                            <Github className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                            GitHub Summary & Analytics
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
                            variants={containerVariants}
                        >
                            {[
                                { value: repos.length, label: "Repositories", color: "blue" },
                                { value: Object.values(commits).reduce((a, b) => a + b, 0), label: "Recent Commits", color: "green" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={`text-center p-4 bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 dark:from-${stat.color}-900/20 dark:to-${stat.color}-800/20 rounded-xl`}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.div
                                        className={`text-2xl font-bold text-${stat.color}-600 mb-2`}
                                        variants={pulseVariants}
                                        animate="pulse"
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            variants={containerVariants}
                        >
                            {[
                                { value: Object.keys(languageStats).length, label: "Languages", color: "purple" },
                                { value: repos.reduce((total, repo) => total + repo.stargazers_count, 0), label: "Total Stars", color: "yellow" }
                            ].map((stat, index) => (
                                <motion.div
                                    key={index}
                                    className={`text-center p-4 bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 dark:from-${stat.color}-900/20 dark:to-${stat.color}-800/20 rounded-xl`}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.div
                                        className={`text-2xl font-bold text-${stat.color}-600 mb-2`}
                                        variants={pulseVariants}
                                        animate="pulse"
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-xs text-gray-600 dark:text-gray-300 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Top Repositories */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <Code className="w-6 h-6 text-blue-600" />
                            Top Repositories
                        </h2>
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                            {repos.slice(0, 4).map((repo) => {
                                const repoLangs = repoLanguages[repo.name] || {}
                                const sortedLangs = Object.entries(repoLangs)
                                    .sort(([, a], [, b]) => b - a)
                                    .slice(0, 3) // Show top 3 languages for compact view
                                const totalBytes = Object.values(repoLangs).reduce((sum, bytes) => sum + bytes, 0)

                                return (
                                    <div
                                        key={repo.id}
                                        className="p-3 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-all duration-300"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                                                {repo.name}
                                            </h3>
                                            <a
                                                href={repo.html_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>

                                        {/* Language Display */}
                                        {sortedLangs.length > 0 && (
                                            <div className="mb-2">
                                                <div className="flex flex-wrap gap-1 mb-1">
                                                    {sortedLangs.map(([lang, bytes]) => {
                                                        const percentage = ((bytes / totalBytes) * 100).toFixed(1)
                                                        return (
                                                            <div
                                                                key={lang}
                                                                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white"
                                                                style={{ backgroundColor: getLanguageColor(lang) }}
                                                            >
                                                                <span>{lang}</span>
                                                                <span className="opacity-75">({percentage}%)</span>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                            <span className="flex items-center gap-1">
                                                <Star className="w-3 h-3" />
                                                {repo.stargazers_count}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <GitBranch className="w-3 h-3" />
                                                {repo.forks_count}
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Detailed Language Breakdown */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <Code className="w-6 h-6 text-indigo-600" />
                            Language Breakdown
                        </h2>
                        <div className="space-y-4 max-h-96 overflow-y-auto">
                            {Object.entries(languageStats)
                                .sort((a, b) => b[1].bytes - a[1].bytes)
                                .slice(0, 6)
                                .map(([language, stats]) => (
                                    <div
                                        key={language}
                                        className="p-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:shadow-md transition-all duration-300"
                                        style={{ borderColor: getLanguageColor(language) + '40' }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="font-bold text-sm text-gray-900 dark:text-white flex items-center gap-2">
                                                <div
                                                    className="w-3 h-3 rounded-full"
                                                    style={{ backgroundColor: getLanguageColor(language) }}
                                                ></div>
                                                {language}
                                            </h3>
                                            <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                                                {stats.percentage.toFixed(1)}%
                                            </span>
                                        </div>
                                        <div className="mb-2">
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                                <div
                                                    className="h-2 rounded-full transition-all duration-500"
                                                    style={{
                                                        width: `${stats.percentage}%`,
                                                        backgroundColor: getLanguageColor(language)
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-300">
                                            <div className="flex justify-between">
                                                <span>{(stats.bytes / 1000).toFixed(1)}K bytes</span>
                                                <span>{stats.repos.length} repos</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </motion.div>

                {/* Language Usage and Skills */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Language Distribution */}
                    <motion.div
                        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
                        variants={cardVariants}
                        whileHover="hover"
                    >
                        <motion.h2
                            className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3"
                            variants={itemVariants}
                        >
                            <TrendingUp className="w-6 h-6 text-purple-600" />
                            Language Distribution
                        </motion.h2>
                        <motion.div
                            className="h-80"
                            variants={itemVariants}
                        >
                            <Pie data={pieChartData} options={chartOptions} />
                        </motion.div>
                    </motion.div>

                    {/* Language Usage Bar Chart */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <Code className="w-6 h-6 text-blue-600" />
                            Top Languages (Lines of Code)
                        </h2>
                        <div className="h-80">
                            <Bar data={languageBarData} options={languageBarOptions} />
                        </div>
                    </div>

                    {/* Inferred Skills */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <Star className="w-6 h-6 text-yellow-600" />
                            Inferred Skills
                        </h2>
                        <div className="grid grid-cols-1 gap-4 max-h-80 overflow-y-auto">
                            {inferredSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105"
                                >
                                    <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technology Stack */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                            <Activity className="w-6 h-6 text-green-600" />
                            Technology Stack
                        </h2>
                        <div className="space-y-4 max-h-80 overflow-y-auto">
                            {[
                                {
                                    category: 'Frontend',
                                    languages: ['TypeScript', 'JavaScript', 'React', 'Redux', 'Next.js', 'HTML', 'CSS', 'Tailwind'],
                                    description: 'Modern web development'
                                },
                                {
                                    category: 'Backend',
                                    languages: ['C#', 'Python', 'Go', 'Node.js'],
                                    description: 'Server-side development'
                                },
                                {
                                    category: 'Cloud & DevOps',
                                    languages: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'Linux'],
                                    description: 'Cloud infrastructure & deployment'
                                },
                                {
                                    category: 'Databases',
                                    languages: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
                                    description: 'Data storage & management'
                                },
                                {
                                    category: 'Testing & Quality',
                                    languages: ['Jest', 'Cypress'],
                                    description: 'Testing frameworks & QA'
                                },
                                {
                                    category: 'Tools & Others',
                                    languages: ['Nginx', 'RabbitMQ', 'Kibana', 'Bash', 'Shell'],
                                    description: 'Development tools & utilities'
                                }
                            ].map((stack, index) => (
                                <div key={index} className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <h3 className="font-semibold text-sm text-gray-900 dark:text-white">
                                            {stack.category}
                                        </h3>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">
                                            {stack.description}
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {stack.languages.map((lang, langIndex) => (
                                            <div
                                                key={langIndex}
                                                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white transition-all duration-300 hover:scale-105"
                                                style={{ backgroundColor: getLanguageColor(lang) }}
                                            >
                                                <span>{lang}</span>
                                                {languageStats[lang] && (
                                                    <span className="text-xs opacity-75">
                                                        {languageStats[lang].percentage.toFixed(1)}%
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default GitHubStats