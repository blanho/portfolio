'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Bot, User, Send, Loader2, X, Minimize2, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { useTranslations } from 'next-intl'

// Type declaration for Puter.ai
declare global {
    interface Window {
        puter: {
            ai: {
                chat: (prompt: string, options?: { model?: string; stream?: boolean }) => Promise<string | AsyncIterable<string | { text: string }>>
            }
        }
    }
}

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
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    // Character limit for messages
    const MAX_MESSAGE_LENGTH = 500

    // Auto-resize textarea - expands downward when text exceeds width
    const autoResizeTextarea = () => {
        if (textareaRef.current) {
            // Store the current scroll position
            const scrollTop = textareaRef.current.scrollTop

            // Reset height to auto first to get accurate scrollHeight
            textareaRef.current.style.height = 'auto'

            // Get the scroll height after resetting
            const scrollHeight = textareaRef.current.scrollHeight
            const minHeight = 40 // Minimum height in pixels (1 line)
            const maxHeight = 120 // Maximum height in pixels (about 4-5 lines)

            // Calculate new height, ensuring it doesn't exceed max
            const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight)

            // Set the calculated height
            textareaRef.current.style.height = `${newHeight}px`

            // Handle scrollbar visibility
            if (scrollHeight > maxHeight) {
                textareaRef.current.style.overflowY = 'auto'
                // Restore scroll position if scrollbar is needed
                textareaRef.current.scrollTop = scrollTop
            } else {
                textareaRef.current.style.overflowY = 'hidden'
            }
        }
    }

    // Handle input change with auto-resize and max-length
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value = e.target.value
        if (value.length <= MAX_MESSAGE_LENGTH) {
            setInputValue(value)
            // Use setTimeout to ensure the DOM has updated before resizing
            setTimeout(() => {
                autoResizeTextarea()
            }, 0)
        }
    }

    // Typewriter effect for AI responses
    const typeMessage = (message: Message, fullText: string) => {
        let currentText = ""
        let currentIndex = 0

        const typeSpeed = 60 // milliseconds per character (slower for more natural effect)

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

                // Add extra delay for spaces and punctuation to make it more natural
                let delay = typeSpeed
                const currentChar = fullText[currentIndex - 1]
                if (currentChar === ' ') {
                    delay = typeSpeed * 1.5 // Longer pause at spaces
                } else if (currentChar === '.' || currentChar === '!' || currentChar === '?') {
                    delay = typeSpeed * 3 // Even longer pause at sentence endings
                } else if (currentChar === ',' || currentChar === ';') {
                    delay = typeSpeed * 2 // Medium pause at commas
                } else if (currentChar === '\n') {
                    delay = typeSpeed * 2.5 // Pause at line breaks
                }

                typingTimeoutRef.current = setTimeout(typeNextChar, delay)
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
        if (!isMinimized && textareaRef.current) {
            textareaRef.current.focus()
        }
    }, [isMinimized])

    // Auto-resize textarea when input value changes
    useEffect(() => {
        autoResizeTextarea()
    }, [inputValue])

    // Auto-resize textarea on mount
    useEffect(() => {
        autoResizeTextarea()
    }, [])

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
            }, 1000) // Longer delay before starting to feel more natural
        }
    }, [messages.length, t])

    // Load Puter.ai script if not already loaded
    useEffect(() => {
        const existingScript = document.querySelector('script[src="https://js.puter.com/v2/"]')
        if (!existingScript) {
            const script = document.createElement('script')
            script.src = 'https://js.puter.com/v2/'
            script.async = true
            document.head.appendChild(script)
        }
    }, [])

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

        // Add a small delay to make it feel more natural (AI is "thinking")
        setTimeout(async () => {
            setIsLoading(true)

            try {
                // Get portfolio context from our API
                const contextResponse = await fetch(`${window.location.origin}/api/puter-chat`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        message: currentInput,
                        conversationHistory: messages.slice(-10) // Send last 10 messages for context
                    }),
                })

                if (!contextResponse.ok) {
                    throw new Error(`Context API request failed: ${contextResponse.status}`)
                }

                const contextData = await contextResponse.json()
                const { fallbackResponse } = contextData

                // Try to use Puter.ai first
                let responseText = fallbackResponse // Default fallback
                let aiMessage: Message | null = null

                try {
                    // Wait for Puter.ai to load if it's not immediately available
                    const waitForPuter = async (maxWait = 5000) => {
                        const startTime = Date.now()
                        while (Date.now() - startTime < maxWait) {
                            if (window.puter && window.puter.ai && typeof window.puter.ai.chat === 'function') {
                                return true
                            }
                            await new Promise(resolve => setTimeout(resolve, 200))
                        }
                        return false
                    }

                    const puterAvailable = await waitForPuter()

                    if (puterAvailable) {
                        // Use the comprehensive enhanced prompt from the API
                        const enhancedPrompt = contextData.enhancedPrompt

                        // Create AI message with empty content initially for streaming
                        aiMessage = {
                            id: (Date.now() + 1).toString(),
                            content: '',
                            isUser: false,
                            timestamp: new Date(),
                            isTyping: true
                        }

                        // Add the empty message first
                        setMessages(prev => [...prev, aiMessage!])
                        setIsLoading(false)

                        // Use Puter.ai with streaming for real-time response
                        try {
                            const response = await window.puter.ai.chat(enhancedPrompt, {
                                model: "gpt-4.1-nano",
                                stream: true
                            })

                            let fullResponse = ''
                            let updateCounter = 0 // Counter to control update frequency

                            // Process streaming response
                            for await (const part of response) {
                                // Handle both string and object responses
                                let textPart = ''
                                if (typeof part === 'string') {
                                    textPart = part
                                } else if (part && typeof part === 'object' && 'text' in part) {
                                    textPart = (part as { text: string }).text
                                }

                                if (textPart) {
                                    fullResponse += textPart
                                    updateCounter++

                                    // Update message in real-time but with throttling for smoother display
                                    if (updateCounter % 3 === 0) { // Update every 3rd character for slower effect
                                        setMessages(prev =>
                                            prev.map(msg =>
                                                msg.id === aiMessage!.id
                                                    ? { ...msg, content: fullResponse, isTyping: true }
                                                    : msg
                                            )
                                        )

                                        // Add a small delay to make streaming appear more natural
                                        await new Promise(resolve => setTimeout(resolve, 150))
                                    }
                                }
                            }

                            // Final update to ensure all text is displayed
                            setMessages(prev =>
                                prev.map(msg =>
                                    msg.id === aiMessage!.id
                                        ? { ...msg, content: fullResponse, isTyping: true }
                                        : msg
                                )
                            )

                            // Mark typing as complete
                            setMessages(prev =>
                                prev.map(msg =>
                                    msg.id === aiMessage!.id
                                        ? { ...msg, content: fullResponse, isTyping: false }
                                        : msg
                                )
                            )

                            return // Exit early since we've handled the response
                        } catch {
                            // If streaming fails, fall back to regular response
                            try {
                                const aiResponse = await window.puter.ai.chat(enhancedPrompt, {
                                    model: "gpt-4.1-nano"
                                })
                                responseText = String(aiResponse)

                                // Remove the streaming message and continue with typewriter effect
                                setMessages(prev => prev.filter(msg => msg.id !== aiMessage!.id))
                                aiMessage = null // Reset aiMessage so we create a new one below
                            } catch {
                                // If both fail, use fallback
                                setMessages(prev => prev.filter(msg => msg.id !== aiMessage!.id))
                                responseText = fallbackResponse
                                aiMessage = null // Reset aiMessage so we create a new one below
                            }
                        }
                    }
                } catch {
                    // Keep using fallbackResponse
                }

                // Only create a new AI message if we haven't already created one for streaming
                if (!aiMessage) {
                    aiMessage = {
                        id: (Date.now() + 1).toString(),
                        content: '',
                        isUser: false,
                        timestamp: new Date(),
                        isTyping: true
                    }

                    // Add the empty message first
                    setMessages(prev => [...prev, aiMessage!])
                    setIsLoading(false)

                    // Start typewriter effect
                    typeMessage(aiMessage!, responseText)
                }

            } catch {
                // Use translated error message
                const fallbackResponse = t('error')

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
        }, 1200) // 1.2 second delay to simulate AI thinking time
    }

    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
                                {t('title')}
                            </h3>
                            <p className="text-xs text-blue-100">
                                {t('poweredBy')}
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
                    <div className="flex flex-col h-[calc(480px-60px)]">
                        {/* Messages Area */}
                        <div className="flex-1 p-3 space-y-3 overflow-y-auto min-h-0">
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
                                                {t('typing')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                            <div className="flex gap-2 mb-1 items-end">
                                <div className="flex-1 relative min-w-0">
                                    <Textarea
                                        ref={textareaRef}
                                        value={inputValue}
                                        onChange={handleInputChange}
                                        onKeyDown={handleKeyPress}
                                        placeholder={t('placeholder')}
                                        disabled={isLoading}
                                        className="resize-none bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 min-h-[40px] max-h-[120px] w-full pr-12 text-sm"
                                        rows={1}
                                        style={{
                                            height: '40px',
                                            wordWrap: 'break-word',
                                            whiteSpace: 'pre-wrap',
                                            overflowWrap: 'break-word',
                                            overflowX: 'hidden',
                                            overflowY: 'hidden',
                                            lineHeight: '1.4',
                                            boxSizing: 'border-box'
                                        }}
                                    />
                                    {inputValue.length > 0 && (
                                        <div className="absolute bottom-1 right-2 text-xs text-gray-400 pointer-events-none bg-gray-50 dark:bg-gray-800 px-1 rounded">
                                            {t('characterCount', { current: inputValue.length, max: MAX_MESSAGE_LENGTH })}
                                        </div>
                                    )}
                                </div>
                                <Button
                                    onClick={sendMessage}
                                    disabled={!inputValue.trim() || isLoading}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 h-10 flex-shrink-0"
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
                                        {t('clear')}
                                    </Button>
                                </div>
                                <p className="text-xs text-gray-400">
                                    {t('poweredBy')}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ChatBox
