'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Bot, User, Send, Loader2, X, Minimize2, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'

interface Message {
    id: string
    content: string
    isUser: boolean
    timestamp: Date
    isTyping?: boolean
}

interface ChatBoxProps {
    className?: string
}

const ChatBox: React.FC<ChatBoxProps> = ({ className = "" }) => {
    const t = useTranslations('chatbox')
    const [messages, setMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isMinimized, setIsMinimized] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    // Typewriter effect for AI responses
    const typeMessage = (message: Message, fullText: string) => {
        let currentText = ""
        let currentIndex = 0

        const typeSpeed = 30 // milliseconds per character

        const typeNextChar = () => {
            if (currentIndex < fullText.length) {
                currentText += fullText[currentIndex]
                currentIndex++

                setMessages(prev =>
                    prev.map(msg =>
                        msg.id === message.id
                            ? { ...msg, content: currentText, isTyping: true }
                            : msg
                    )
                )

                typingTimeoutRef.current = setTimeout(typeNextChar, typeSpeed)
            } else {
                // Typing complete
                setMessages(prev =>
                    prev.map(msg =>
                        msg.id === message.id
                            ? { ...msg, content: fullText, isTyping: false }
                            : msg
                    )
                )
            }
        }

        typeNextChar()
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    useEffect(() => {
        if (!isMinimized && inputRef.current) {
            inputRef.current.focus()
        }
    }, [isMinimized])

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current)
            }
        }
    }, [])

    // Initialize with welcome message
    useEffect(() => {
        if (messages.length === 0) {
            const welcomeMessage: Message = {
                id: '1',
                content: '',
                isUser: false,
                timestamp: new Date(),
                isTyping: true
            }
            setMessages([welcomeMessage])

            // Start typewriter effect for welcome message
            setTimeout(() => {
                typeMessage(welcomeMessage, t('welcome'))
            }, 500) // Small delay before starting
        }
    }, [messages.length, t])

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading) return

        // Clear any ongoing typing animation
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputValue,
            isUser: true,
            timestamp: new Date()
        }

        setMessages(prev => [...prev, userMessage])
        const currentInput = inputValue
        setInputValue('')
        setIsLoading(true)

        try {
            // Call Gemini API with message and conversation history
            // Use absolute path to bypass locale routing
            const response = await fetch(`${window.location.origin}/api/gemini-chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: currentInput,
                    conversationHistory: messages.slice(-10) // Send last 10 messages for context
                }),
            })

            if (!response.ok) {
                throw new Error(`API request failed: ${response.status}`)
            }

            const data = await response.json()
            const aiResponse = data.reply || 'I received your message but had trouble processing it.'

            // Create AI message with empty content initially
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: '',
                isUser: false,
                timestamp: new Date(),
                isTyping: true
            }

            // Add the empty message first
            setMessages(prev => [...prev, aiMessage])
            setIsLoading(false)

            // Start typewriter effect
            typeMessage(aiMessage, aiResponse)

        } catch (error) {
            console.error('Error calling Gemini AI:', error)

            // Provide intelligent fallback responses based on input language
            let fallbackResponse = ""

            // Detect Chinese characters
            if (/[\u4e00-\u9fff]/.test(currentInput)) {
                fallbackResponse = "我正在遇到技术困难，请稍后再试。"
            }
            // Detect French
            else if (currentInput.toLowerCase().includes('aide') || currentInput.toLowerCase().includes('bonjour') || currentInput.toLowerCase().includes('français')) {
                fallbackResponse = "Je rencontre des difficultés techniques. Réessayez dans un moment."
            }
            // Default to English
            else {
                fallbackResponse = "I'm experiencing technical difficulties. Please try again in a moment!"
            }

            // Create fallback message with typewriter effect
            const fallbackMessage: Message = {
                id: (Date.now() + 1).toString(),
                content: '',
                isUser: false,
                timestamp: new Date(),
                isTyping: true
            }

            setMessages(prev => [...prev, fallbackMessage])
            setIsLoading(false)

            // Start typewriter effect for fallback
            typeMessage(fallbackMessage, fallbackResponse)
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    }

    const clearMessages = () => {
        // Clear any ongoing typing animation
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }

        setMessages([])

        // Re-add welcome message with typewriter effect
        setTimeout(() => {
            const welcomeMessage: Message = {
                id: '1',
                content: '',
                isUser: false,
                timestamp: new Date(),
                isTyping: true
            }
            setMessages([welcomeMessage])

            // Start typewriter effect
            setTimeout(() => {
                typeMessage(welcomeMessage, t('welcome'))
            }, 300)
        }, 100)
    }

    // Chat is always open
    return (
        <div className={`fixed bottom-4 right-4 z-50 ${className}`}>
            <div className={`bg-white dark:bg-gray-900 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300 ${isMinimized ? 'w-64 h-14' : 'w-80 h-[480px]'
                }`}>
                {/* Header */}
                <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-white/20 rounded-lg">
                            <Bot className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-sm">
                                AI Assistant
                            </h3>
                            <p className="text-xs text-blue-100">
                                Powered by Ho Bao Lan
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={() => setIsMinimized(!isMinimized)}
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/20 p-1.5"
                        >
                            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                        </Button>
                        <Button
                            onClick={() => setIsMinimized(true)}
                            variant="ghost"
                            size="sm"
                            className="text-white hover:bg-white/20 p-1.5"
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {!isMinimized && (
                    <>
                        {/* Messages Area */}
                        <div className="flex-1 p-3 space-y-3 h-64 overflow-y-auto">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex gap-3 ${message.isUser ? 'justify-end' : 'justify-start'}`}
                                >
                                    {!message.isUser && (
                                        <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex-shrink-0 mt-auto">
                                            <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        </div>
                                    )}
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg text-sm ${message.isUser
                                            ? 'bg-blue-600 text-white rounded-br-sm'
                                            : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-sm'
                                            }`}
                                    >
                                        <p className="leading-relaxed whitespace-pre-wrap">
                                            {message.content}
                                            {message.isTyping && (
                                                <span className="inline-block w-2 h-4 bg-blue-600 ml-1 animate-pulse"></span>
                                            )}
                                        </p>
                                        <p className={`text-xs mt-1 ${message.isUser ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                                            }`}>
                                            {message.timestamp.toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                    {message.isUser && (
                                        <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg flex-shrink-0 mt-auto">
                                            <User className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                        </div>
                                    )}
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex gap-3 justify-start">
                                    <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex-shrink-0">
                                        <Bot className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg rounded-bl-sm">
                                        <div className="flex items-center gap-2">
                                            <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                                            <span className="text-sm text-gray-600 dark:text-gray-400">
                                                AI is typing...
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex gap-2 mb-1">
                                <Input
                                    ref={inputRef}
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Ask me anything..."
                                    disabled={isLoading}
                                    className="flex-1 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                                />
                                <Button
                                    onClick={sendMessage}
                                    disabled={!inputValue.trim() || isLoading}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4"
                                >
                                    <Send className="w-4 h-4" />
                                </Button>
                            </div>

                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Button
                                        onClick={clearMessages}
                                        variant="ghost"
                                        size="sm"
                                        className="text-xs text-gray-500 hover:text-gray-700"
                                    >
                                        Clear
                                    </Button>
                                </div>
                                <p className="text-xs text-gray-400">
                                    Powered by Ho Bao Lan
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default ChatBox
