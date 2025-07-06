import React from 'react'
import { AccentText, HeroText, SubtitleText, ThemeText } from '../ui/theme-text'

const Heading = () => {
    return (
        <React.Fragment>
            {/* Main Heading */}
            <div className="text-center xl:text-left animate-fadeInUp animation-delay-200">
                <HeroText className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight mb-3">
                    Hello, I&apos;m <br />
                    <AccentText className="relative inline-block group">
                        Ho Bao Lan
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                                             transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                    </AccentText>
                </HeroText>

                <ThemeText
                    variant="gradient"
                    size="xl"
                    weight="semibold"
                    className="block mt-4 animate-fadeInUp animation-delay-300"
                >
                    <span className="inline-block hover:rotate-1 transition-transform duration-300">
                        Software Developer
                    </span>
                </ThemeText>
            </div>

            {/* Description */}
            <SubtitleText className="text-center xl:text-left text-sm md:text-base lg:text-lg leading-relaxed max-w-md mx-auto xl:mx-0
                                               animate-fadeInUp animation-delay-400">
                3+ years of fullstack expertise in .NET & React, architecting scalable
                microservices on Azure cloud platform with a passion for clean code.
            </SubtitleText>
        </React.Fragment>
    )
}

export default Heading