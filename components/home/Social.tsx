'use client'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa"

interface SocialProps {
    containerStyles?: string;
    iconStyles?: string;
    showGitHubStats?: boolean;
    githubUsername?: string;
    layout?: 'horizontal' | 'vertical' | 'grid';
    showLabels?: boolean;
}

const socials = [
    {
        href: "https://github.com/blanho",
        icon: <FaGithub />,
        label: "GitHub",
        color: "from-gray-900 to-gray-700 hover:from-gray-800 hover:to-gray-600",
        darkColor: "dark:from-gray-800 dark:to-gray-900 dark:hover:from-gray-700 dark:hover:to-gray-800",
        badge: "bg-green-500",
        animate: "animate-pulse"
    },
    {
        href: "https://linkedin.com/in/blanho",
        icon: <FaLinkedinIn />,
        label: "LinkedIn",
        color: "from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700",
        darkColor: "",
        badge: "bg-blue-400",
        animate: ""
    },
    {
        href: "https://twitter.com/blanho",
        icon: <FaTwitter />,
        label: "Twitter",
        color: "from-sky-400 to-sky-600 hover:from-sky-300 hover:to-sky-500",
        darkColor: "",
        badge: "bg-sky-300",
        animate: ""
    },
    {
        href: "mailto:hoblan@email.com",
        icon: <FaEnvelope />,
        label: "Email",
        color: "from-purple-500 to-purple-700 hover:from-purple-400 hover:to-purple-600",
        darkColor: "",
        badge: "",
        animate: ""
    }
]

const Social: React.FC<SocialProps> = ({
    containerStyles,
    iconStyles,
    layout = 'horizontal',
    showLabels = false
}) => {
    const getLayoutClasses = () => {
        switch (layout) {
            case 'vertical':
                return 'flex flex-col gap-4';
            case 'grid':
                return 'grid grid-cols-2 gap-4';
            default:
                return 'flex justify-center xl:justify-start gap-4';
        }
    }

    return (
        <div className="space-y-4">
            {/* Beautiful Social Icons */}
            <div className={`${getLayoutClasses()} ${containerStyles}`}>
                {socials.map((social) => (
                    <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative p-3 bg-gradient-to-br ${social.color} ${social.darkColor}
                                 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 
                                 transition-all duration-300 ${iconStyles}`}
                        title={social.label}
                    >
                        <div className="w-6 h-6 text-white">
                            {social.icon}
                        </div>

                        {/* Status Badge */}
                        {social.badge && (
                            <div className={`absolute -top-2 -right-2 w-4 h-4 ${social.badge} rounded-full 
                                          border-2 border-white dark:border-gray-800 ${social.animate}`}></div>
                        )}

                        {/* Label (if enabled) */}
                        {showLabels && (
                            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                          opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-xs font-medium text-gray-600 dark:text-gray-400 
                                               bg-white dark:bg-gray-800 px-2 py-1 rounded shadow-lg">
                                    {social.label}
                                </span>
                            </div>
                        )}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Social