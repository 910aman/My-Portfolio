import ParticlesComponent from "../utils/Particles"
import '../App.css'
import { TypeAnimation } from "react-type-animation"
import { useNavigate } from "react-router-dom"
import { Animate } from "react-simple-animate";

function App() {
  const navigate = useNavigate();
  const handleHireMeButton = () => navigate("/contact");
  const typeWriting = ["Front end Developer", "ReactJS", "Typescript"]

  return (
    <>
      <ParticlesComponent />
      <section className="relative h-full flex justify-center items-center">
        <div>
          <h1 className="lg:text-7xl lg:font-medium lg:leading-[5rem] m-0 whitespace-nowrap sm:text-4xl md:text-6xl md:leading-[4rem] text-2xl">
            Hello, I&apos;m Aman
            <br />
            <TypeAnimation sequence={typeWriting} wrapper="span"
              cursor={true}
              speed={40}
              deletionSpeed={10}
              repeat={Infinity} />
            {/* // style={{ fontSize: '2em', display: 'inline-block' }} /> */}
          </h1>
          <div className="w-full flex flex-row gap-10 justify-center mt-3">
            <Animate play
              duration={1.5}
              delay={1}
              start={{
                transform: "translateY(550px)"
              }}
              end={{
                transform: "translateX(0px)"
              }}
            >
              <button onClick={handleHireMeButton}
                className="lg:text-2xl font-semibold sm:text-xl text-sm hireButton py-2 px-4 border border-theme-main-color hover:bg-theme-main-color hover:text-[#000]">
                Hire Me
              </button>
            </Animate>
            <div className="blur-[1px]">
              <Animate play
                duration={1.5}
                delay={1}
                start={{
                  transform: "translateY(550px)"
                }}
                end={{
                  transform: "translateX(0px)"
                }}
              >
                <button
                  className="lg:text-2xl font-semibold w-fit sm:text-xl text-sm py-2 px-4 border border-theme-main-color">
                  Download CV
                </button>
              </Animate>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
