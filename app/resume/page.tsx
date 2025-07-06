'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Download, Eye, FileText, Mail, Phone, MapPin, Globe } from 'lucide-react'

const Resume = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 py-12">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My Resume
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Download or view my professional resume. Available in PDF format for easy viewing and printing.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                    <Button
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                        onClick={() => window.open('/resume.pdf', '_blank')}
                    >
                        <Eye className="w-5 h-5" />
                        View Resume
                    </Button>
                    <Button
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                        onClick={() => {
                            const link = document.createElement('a')
                            link.href = '/resume.pdf'
                            link.download = 'YourName_Resume.pdf'
                            link.click()
                        }}
                    >
                        <Download className="w-5 h-5" />
                        Download PDF
                    </Button>
                </div>

                {/* Resume Preview Card */}
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                        <div className="flex items-center gap-3 text-white">
                            <FileText className="w-8 h-8" />
                            <h2 className="text-2xl font-bold">Professional Resume</h2>
                        </div>
                    </div>

                    <div className="p-8">
                        {/* Quick Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                    Quick Contact
                                </h3>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                    <span>blanho1211@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                    <Phone className="w-5 h-5 text-green-600" />
                                    <span>+84 906938322</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                    <MapPin className="w-5 h-5 text-red-600" />
                                    <span>Da Nang City</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                                    <Globe className="w-5 h-5 text-purple-600" />
                                    <span>linkedin.com/in/blanho</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                    Key Highlights
                                </h3>
                                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>3+ years Full-Stack Development</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>.NET, React, Azure expertise</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Microservices & Clean Architecture</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                        <span>Azure Certified (AZ-900, AZ-204)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="border border-gray-200 dark:border-gray-600 rounded-lg overflow-hidden">
                            <div className="bg-gray-50 dark:bg-gray-700 p-4 border-b border-gray-200 dark:border-gray-600">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-white flex items-center gap-2">
                                        <FileText className="w-5 h-5" />
                                        Resume Preview
                                    </h3>
                                    <div className="flex gap-2">
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            onClick={() => window.open('/resume.pdf', '_blank')}
                                            className="hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
                                        >
                                            <Eye className="w-4 h-4 mr-1" />
                                            Full Screen
                                        </Button>
                                        <Button
                                            size="sm"
                                            onClick={() => {
                                                const link = document.createElement('a')
                                                link.href = '/resume.pdf'
                                                link.download = 'Resume.pdf'
                                                link.click()
                                            }}
                                            className="bg-green-600 hover:bg-green-700 text-white cursor-pointer"
                                        >
                                            <Download className="w-4 h-4 mr-1" />
                                            Download
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* PDF Embed */}
                            <div className="relative">
                                <iframe
                                    src="/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                                    className="w-full h-[600px] md:h-[800px]"
                                    title="Resume PDF"
                                    style={{ border: 'none' }}
                                    onError={() => {
                                        // Show fallback if iframe fails to load
                                        const fallback = document.querySelector('.pdf-fallback');
                                        if (fallback) {
                                            fallback.classList.remove('hidden');
                                            fallback.classList.add('flex');
                                        }
                                    }}
                                />

                                {/* Fallback for browsers that don't support PDF viewing */}
                                <div className="pdf-fallback absolute inset-0 bg-gray-100 dark:bg-gray-800 hidden flex-col items-center justify-center text-center p-8">
                                    <FileText className="w-16 h-16 text-gray-400 mb-4" />
                                    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                                        Cannot Display PDF
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                                        Your browser cannot display this PDF. Please try one of the options below:
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <Button
                                            onClick={() => window.open('/resume.pdf', '_blank')}
                                            className="bg-blue-600 hover:bg-blue-700 text-white"
                                        >
                                            <Eye className="w-4 h-4 mr-2" />
                                            Open in New Tab
                                        </Button>
                                        <Button
                                            onClick={() => {
                                                const link = document.createElement('a')
                                                link.href = '/resume.pdf'
                                                link.download = 'Resume.pdf'
                                                link.click()
                                            }}
                                            variant="outline"
                                            className="border-green-600 text-green-600 hover:bg-green-50 dark:border-green-400 dark:text-green-400"
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            Download PDF
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Troubleshooting */}
                <div className="max-w-4xl mx-auto mt-8 p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                        � Troubleshooting PDF Display
                    </h3>
                    <div className="text-yellow-700 dark:text-yellow-300 text-sm space-y-2">
                        <p><strong>If you can&apos;t see the PDF above:</strong></p>
                        <ul className="list-disc list-inside space-y-1 ml-4">
                            <li>Click <strong>&quot;Full Screen&quot;</strong> or <strong>&quot;Open in New Tab&quot;</strong> to view in your browser&apos;s PDF viewer</li>
                            <li>Use the <strong>&quot;Download&quot;</strong> button to save and open the PDF locally</li>
                            <li>Some browsers block embedded PDFs for security - the buttons above will always work</li>
                            <li>Make sure your browser has PDF viewing enabled in settings</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume