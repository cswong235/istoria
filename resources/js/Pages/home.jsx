import BaseLayout from "../BaseLayout/layout";
import {Link} from '@inertiajs/react'

export default function Home() {
    return (
        <div className="relative overflow-hidden">
            <img src="media/background1.jpeg" alt="Background" className="absolute top-0 left-0 w-full h-full object-cover contrast-20 hue-rotate-50"/>
            <img src="media/text.png" alt="Text" className="absolute top-0 left-0 w-full h-full object-cover opacity-50 rotate-3 scale-[1.2]"/>
            <BaseLayout>
                <div className="overflow-hidden fade-in mt-5 grid md:grid-flow-col grid-rows-4 py-4 px-8 justify-center items-center backdrop-blur-sm rounded-md w-full max-w-3xl mx-auto drop-shadow-lg bg-gradient-to-br from-taupe-900/70 to-taupe-600/60">
                    <img src="media/istoria_standalone.png" alt="Istoria logo" className="opacity-20 h-full w-full shrink-0 object-contain row-span-4 absolute -z-1 right-80 scale-[1.2]"/>
                    <h1 className="text-2xl font-lil-bold text-center">WELCOME TO
                        <div className="hover-3d ml-2">
                            <span className="inline-block bg-taupe-900/80 px-2 rotate-3 text-3xl">ISTORIA</span>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </h1>
                    <p className="text-sm font-lil-regular text-justify">
                        Old books, trinkets and curiosities, ranging from centuries past to the just a few years back from now.
                        I find it really intriguing when I ponder about each one's journey. How many owners did it land into? What events
                        did it see and live through? How the hell through all those centuries that it managed to sit inside my hands?
                        I don't know much about each of their storied history, but it's kinda fun to think about.
                    </p>
                    <p className="text-sm font-lil-regular text-justify mb-8">
                        Stop by a little, look through my collection, maybe you too will find something to think about.
                    </p>
                    <Link href="/collection" className="flex justify-center mb-8">
                        <button className="btn bg-taupe-700 hover:bg-taupe-800 hover:scale-105 transition-all border-none font-lil-bold w-1/2 mx-auto">Explore the collection</button>
                    </Link>
                </div>
                <div className="mt-10 grid grid-cols-2 bg-taupe-800 mx-auto drop-shadow-lg h-64 overflow-hidden">

                    <div className="relative overflow-hidden">
                        <img
                            src="media/book1.jpeg"
                            alt="Book"
                            className="absolute w-[140%] h-[140%] object-cover rotate-12 scale-[1.5] -translate-x-50 -translate-y-19 shadow-2xl"
                        />
                    </div>

                    <div className="flex flex-col justify-center gap-4 px-8 pt-6 overflow-hidden min-w-0">
                        <p className="text-2xl font-lil-bold leading-tight">Old faces, but rather new to my collection.</p>
                        <p className="text-sm font-lil-regular">Want to see what made it here after so many years of its journey?</p>
                        <div className="hover-3d self-start">
                            <p className="text-lg font-lil-bold whitespace-nowrap rotate-1 bg-taupe-700/80 px-6 py-2 inline-block">RECENT ENTRIES</p>
                            <div></div><div></div><div></div><div></div>
                            <div></div><div></div><div></div><div></div>
                        </div>
                    </div>

                </div>
            </BaseLayout>
        </div>
    )
}