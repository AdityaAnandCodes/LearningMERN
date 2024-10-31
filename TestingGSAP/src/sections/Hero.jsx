import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { Canvas } from "@react-three/fiber"

const Hero = () => {
    useGSAP(() => {gsap.to('#canvas',{
        y:-100,
        repeat : -1,
        yoyo : true,
    })},[])
    useGSAP(()=>{
        gsap.to('#text-head',{
            ease : 'power1.inOut',
            y:0,
            opacity : 1,
        })
        gsap.fromTo('#para',{
            opacity : 0,
            y : 20,

        },{
            opacity : 1,
            y : 0,
            delay : 1,
            stagger : 0.1,

        })

    },[])
  return (
    <section className="min-h-screen p-7 py-6 flex">
        <div className="flex flex-col justify-items-center">
        <p id="text-head" className="px-8 pt-40 text-bold text-white text-7xl opacity-0 translate-y-10">Hello World</p>
        <p id='para' className="mx-auto p-3 px-8 text-bold text-white text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia facere quaerat dolor! Aperiam ullam officiis necessitatibus perferendis, sunt maxime saepe voluptatum placeat totam odit numquam alias nisi qui amet architecto.</p>
        </div>
        <div className="min-h-screen mx-auto">
            <Canvas id="canvas" >
                <ambientLight />
                <pointLight position={[0, 10, 0]} />
                <mesh position={[0,0,0]} >
                        <circleGeometry args={[1, 64]} />
                        <meshLambertMaterial />
                </mesh>
            </Canvas>
        </div>
    </section>
  )
}

export default Hero