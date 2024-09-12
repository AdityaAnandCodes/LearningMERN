/* eslint-disable react/no-unescaped-entities */


function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[1000px] w-full mx-auto p-4">
        <div className="flex flex-col gap-4">
        <p>Its Time To</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Be The <span className="text-blue-400">Beast</span></h1>
        </div>
        <p className="text-sm md:text-base font-light">At <span className="text-blue-400 font-medium">Be the Beast Gym</span>, we are committed to helping you unlock your full potential and become the strongest version of yourself. Whether you are a beginner or a seasoned athlete, our expert trainers, state-of-the-art equipment, and diverse fitness programs are designed to challenge, motivate, and transform you.<span className="text-blue-400 font-medium"> Join</span> a supportive community where every workout is a step towards unleashing your inner beast and redefining what's possible. No limits. Just results </p>
        <button className="px-8 py-4 rounded-md border-[2px] border-blue-400 border-solid bg-slate-950 blueShadow duration-200"><p>Accept & Begin</p></button>
    </div>
  )
}

export default Hero