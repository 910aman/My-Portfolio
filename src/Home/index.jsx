import '../App.css'
import { TypeAnimation } from "react-type-animation"
import { useNavigate } from "react-router-dom"
import { Animate } from "react-simple-animate";
import ParticlesComponent from '../utils/Particles';
import './style.css'

function App() {
  const navigate = useNavigate();
  const handleHireMeButton = () => navigate("/contact");
  const typeWriting = ["Front end Developer ", "ReactJS  ", "Typescript  "]

  return (
    <div>
      <ParticlesComponent />
      <section className="relative flex flex-col justify-center items-center HomeStyle">

        <h1 className="lg:text-7xl lg:font-medium lg:leading-[5rem] m-0 whitespace-nowrap sm:text-4xl md:text-6xl md:leading-[4rem] text-2xl">
          Hello, I&apos;m Aman
          <br />
          <TypeAnimation sequence={typeWriting} wrapper="span"
            cursor={true}
            speed={40}
            deletionSpeed={0}
            repeat={Infinity} />
          {/* // style={{ fontSize: '2em', display: 'inline-block' }} /> */}
        </h1>
        <div className="flex md:flex-row gap-5 flex-col md:gap-10 justify-center mt-3">
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
              className="lg:text-2xl font-semibold sm:text-xl text-sm text-center w-full py-2  px-8 border border-theme-main-color hover:bg-theme-main-color hover:text-[#000]">
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
                className="lg:text-2xl font-semibold w-fit sm:text-xl text-sm py-2 px-8 border border-theme-main-color">
                Download CV
              </button>
            </Animate>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App
