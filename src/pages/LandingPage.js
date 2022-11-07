import { GiPartyPopper } from 'react-icons/gi';
export default function LandingPage() {
    return (
        <div className="lg:mt-28 md:mt-16 mt-24">
            <div className="lg:absolute h-28 md:h-48 font-bold font-sans text-4xl md:text-6xl text-center leading-9">
                <p className="text-first-color">Imagine If</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-magenta to-atomic-pink-color">Snapchat</p>
                <p className="text-first-color">had events.</p>
            </div>
            <p className="lg:absolute font-sans text-gray-color mt-4 text-base md:text-2xl text-center font-light">Easily host and share events with your<br /> friends across any social media.</p>
            <div className="lg:absolute lg:ml-40 grid justify-items-stretch">
                <img className="justify-self-center mt-9 w-44 md:w-80" alt="landing page" src={require("../assets/landing.jpg")}></img>
            </div>
            <div className="lg:absolute grid justify-items-stretch">
                <button className="inline-flex items-center justify-center text-white font-bold font-sans text-base md:text-xl p-4 justify-self-center  bg-gradient-to-r mt-8 h-12 w-48 md:w-80 mb-4 rounded-lg from-blue-magenta to-atomic-pink-color">
                    <GiPartyPopper className="mr-1" /> <span>Create my event</span>
                </button>
            </div>
        </div>
    )
}