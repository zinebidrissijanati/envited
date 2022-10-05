import { GiPartyPopper } from 'react-icons/gi';
export default function LandingPage() {
    return (
        <div className="mt-24">
            <div className="h-28 font-bold font-sans text-4xl text-center leading-9">
                <p className="text-first-color">Imagine If</p>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-magenta to-atomic-pink-color">Snapchat</p>
                <p className="text-first-color">had events.</p>
            </div>
            <p className="font-sans text-gray-color mt-4 text-base text-center font-light">Easily host and share events with your<br /> friends across any social media.</p>
            <div className="grid justify-items-stretch">
                <img className="justify-self-center mt-9 w-44 h-72" alt="landing page" src={require("../assets/landing.jpg")}></img>
                <button className="inline-flex items-center justify-center text-white font-bold font-sans text-base p-4 justify-self-center  bg-gradient-to-r mt-8 h-12 w-48 mb-4 rounded-lg from-blue-magenta to-atomic-pink-color">
                    <GiPartyPopper className="mr-1" /> <span>Create my event</span>
                </button>
            </div>
                
        </div>
    )
}