import ActionButton from "@/components/home/ActionButton";
import Badge from "@/components/home/Badge";
import Heading from "@/components/home/Heading";
import Photo from "@/components/home/Photo";
import QuickStats from "@/components/home/QuickStats";
import Skill from "@/components/home/Skill";

export default function Home() {
    return (
        <section className="min-h-screen bg-background xl:h-screen xl:flex xl:items-center xl:overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:h-full xl:flex xl:items-center">
                <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:h-full xl:max-h-screen py-6 lg:py-8 xl:py-0">
                    <div className="xl:col-span-1 flex flex-col justify-center space-y-6 animate-fadeInUp md:space-y-8">
                        <Badge />
                        <Heading />
                        <QuickStats />
                        <ActionButton />
                    </div>

                    <div className="xl:col-span-1 flex justify-center items-center animate-fadeInUp animation-delay-700 py-8 xl:py-0">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                            rounded-full opacity-20 group-hover:opacity-30 blur-xl 
                            transition-opacity duration-500 animate-pulse"></div>
                            <div className="relative transform hover:scale-105 transition-transform duration-500">
                                <Photo />
                            </div>
                        </div>
                    </div>

                    <div className="xl:col-span-1 flex flex-col justify-center space-y-6 xl:space-y-8 pb-8 xl:pb-0">
                        <Skill />
                    </div>
                </div>
            </div>
        </section>
    );
}
