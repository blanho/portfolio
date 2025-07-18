'use client'
import React, { useState } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
    Mail,
    Phone,
    Send,
    Github,
    Linkedin,
    MessageCircle,
    Calendar,
    Clock,
    Globe
} from 'lucide-react'

const Contact = () => {
    const t = useTranslations('contact')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const mailtoLink = `mailto:blanho1211@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`
        window.location.href = mailtoLink
    }

    const contactMethods = [
        {
            icon: <Mail className="w-6 h-6" />,
            title: t('methods.email.title'),
            description: t('methods.email.description'),
            action: t('methods.email.action'),
            link: "mailto:blanho1211@gmail.com",
            color: "from-blue-500 to-blue-700",
            available: t('methods.email.available')
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: t('methods.phone.title'),
            description: t('methods.phone.description'),
            action: t('methods.phone.action'),
            link: "tel:+84906938322",
            color: "from-green-500 to-green-700",
            available: t('methods.phone.available')
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: t('methods.teams.title'),
            description: t('methods.teams.description'),
            action: t('methods.teams.action'),
            link: "https://teams.microsoft.com/l/chat/0/0?users=h.baolan20025@gmail.com",
            color: "from-purple-500 to-purple-700",
            available: t('methods.teams.available')
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            title: t('methods.linkedin.title'),
            description: t('methods.linkedin.description'),
            action: t('methods.linkedin.action'),
            link: "https://linkedin.com/in/blanho",
            color: "from-blue-600 to-blue-800",
            available: t('methods.linkedin.available')
        }
    ]

    const socialLinks = [
        {
            name: "GitHub",
            icon: <Github className="w-5 h-5" />,
            href: "https://github.com/blanho",
            color: "hover:bg-gray-800 hover:text-white"
        },
        {
            name: "LinkedIn",
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://linkedin.com/in/blanho",
            color: "hover:bg-blue-600 hover:text-white"
        }
    ]

    return (
        <div className="h-screen overflow-hidden lg:overflow-auto bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
            <div className="h-full overflow-y-auto lg:overflow-visible lg:py-8 overflow-x-hidden">
                <div className="container mx-auto px-4 py-6 lg:py-0 max-w-full">
                    <div className="text-center mb-6 lg:mb-8">
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                            {t('title')}
                        </h1>
                        <p className="text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
                            {t('subtitle')}
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 lg:gap-6 text-xs lg:text-sm text-gray-600 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 lg:w-4 lg:h-4 text-green-500" />
                                <span>{t('quickStats.response')}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Globe className="w-3 h-3 lg:w-4 lg:h-4 text-blue-500" />
                                <span>{t('quickStats.remote')}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-3 h-3 lg:w-4 lg:h-4 text-purple-500" />
                                <span>{t('quickStats.opportunities')}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 max-w-7xl mx-auto lg:h-[calc(100vh-200px)]">
                        <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 lg:p-6 lg:overflow-y-auto">
                            <div className="mb-4 lg:mb-6">
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    {t('form.title')}
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    {t('form.description')}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            {t('form.nameLabel')} {t('form.required')}
                                        </label>
                                        <Input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder={t('form.namePlaceholder')}
                                            className="w-full h-9"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                            {t('form.emailLabel')} {t('form.required')}
                                        </label>
                                        <Input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder={t('form.emailPlaceholder')}
                                            className="w-full h-9"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('form.subjectLabel')} {t('form.required')}
                                    </label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder={t('form.subjectPlaceholder')}
                                        className="w-full h-9"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                        {t('form.messageLabel')} {t('form.required')}
                                    </label>
                                    <Textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder={t('form.messagePlaceholder')}
                                        rows={4}
                                        className="w-full resize-none"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                                >
                                    <Send className="w-4 h-4 mr-2" />
                                    {t('form.sendButton')}
                                </Button>
                            </form>

                        </div>

                        <div className="space-y-4 lg:overflow-y-auto">
                            <div>
                                <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {t('methods.title')}
                                </h2>

                                <div className="space-y-3">
                                    {contactMethods.map((method, index) => (
                                        <div
                                            key={index}
                                            className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center text-white flex-shrink-0`}>
                                                    {React.cloneElement(method.icon, { className: "w-5 h-5" })}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                                                        {method.title}
                                                    </h3>
                                                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-1 truncate">
                                                        {method.description}
                                                    </p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                                                        {method.available}
                                                    </p>
                                                    <Button
                                                        size="sm"
                                                        onClick={() => window.open(method.link, '_blank')}
                                                        className={`bg-gradient-to-r ${method.color} text-white hover:shadow-lg transition-all duration-300 text-xs px-3 py-1 h-7 cursor-pointer`}
                                                    >
                                                        {method.action}
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md">
                                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                                    {t('social.title')}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {socialLinks.map((social, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            size="sm"
                                            onClick={() => window.open(social.href, '_blank')}
                                            className={`flex items-center gap-1 transition-all duration-300 ${social.color} text-xs px-3 py-1 h-8 cursor-pointer`}
                                        >
                                            {React.cloneElement(social.icon, { className: "w-3 h-3" })}
                                            {social.name}
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
