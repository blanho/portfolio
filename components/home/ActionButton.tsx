import React from 'react'
import { Button } from '../ui/button'
import { FiDownload, FiMail } from 'react-icons/fi'

const ActionButton = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-600 pb-4 sm:pb-0">
                <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                         text-white font-semibold shadow-lg hover:shadow-xl
                         transform hover:scale-105 transition-all duration-300"
                >
                    <FiDownload className="mr-2 h-4 w-4 animate-bounce" />
                    Download CV
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    className="flex-1 border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50
                         dark:border-gray-600 dark:hover:border-blue-400 dark:hover:bg-blue-900/20
                         transform hover:scale-105 transition-all duration-300 font-semibold"
                >
                    <FiMail className="mr-2 h-4 w-4" />
                    Contact Me
                </Button>
            </div>
        </React.Fragment>
    )
}

export default ActionButton