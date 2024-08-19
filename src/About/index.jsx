import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from '../pageHeaderContent/PageHeader'
import { Animate } from 'react-simple-animate'
import { FaDatabase, FaDev } from 'react-icons/fa'
import { DiAndroid, DiApple } from 'react-icons/di'
import './style.css'
import { Link } from 'react-router-dom'

const About = () => {
  const profileSummary = [
    { label: "Name", value: "Aman Chauhan" },
    { label: "Age", value: "23" },
    { label: "Address", value: "Ahmedabad, Gujarat" },
    { label: "E-Mail", value: "amanchauhan91044@gmail.com", linked: "mailto:amanchauhan91044@gmail.com" },
    { label: "Contact", value: "+91 1234567899", linked: "tel:1234567899" }
  ]
  return (
    <section className='h-full bg-theme-background-color'>
      <PageHeader header_Text="About Me" icon={<BsInfoCircleFill size={30} />} />
      <div className='p-5 w-screen flex md:gap-7 gap-12 md:flex-row flex-col'>
        <div className='md:w-[50%] '>
          <div className=''>
            <Animate
              play
              duration={2}
              delay={1}
              start={{
                transform: "translateX(-900px)"
              }}
              end={{
                transform: "translateX(0px)"
              }}>
              <h3 className='mb-3 text-3xl font-semibold text-theme-main-color '>Front end Developer</h3>
              <p className='text-theme-sub-text-color md:text-2xl text-lg leading-8 sm:leading-10 pb-4 border-b border-dashed border-theme-main-color'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                type specimen book.</p>
            </Animate>
          </div>
          <div className=''>
            <Animate
              play
              duration={2}
              delay={1}
              start={{
                transform: "translateX(450px)"
              }}
              end={{
                transform: "translateX(0px)"
              }}>
              <h3 className='my-3 text-3xl font-semibold text-theme-main-color'>Personal Information</h3>
              <>
                {profileSummary.map((summary, index) => (
                  <ul key={index} className='mb-4 '>
                    <li className='md:text-2xl sm:text-lg text-base font-semibold tracking-widest border-b-2 border-theme-main-color relative inline-block pb-[1px] text-theme-sub-text-color'>
                      {summary.label}
                    </li>
                    <li className='sm:ml-6 ml-2 md:text-2xl sm:text-lg text-base whitespace-normal font-semibold tracking-widest relative inline-block pb-[1px] text-theme-sub-text-color'>
                      <Link to={summary?.linked} className={`${summary?.linked ? "hover:underline" : ""}`}>
                        {summary.value}
                      </Link>
                    </li>
                  </ul>
                ))}
              </>
            </Animate>
          </div>
        </div>
        <div className='md:w-[50%] w-full flex justify-center items-center md:pb-0 pb-20'>
          <Animate
            play
            duration={2}
            delay={1}
            start={{
              transform: "translateX(600px)"
            }}
            end={{
              transform: "translateX(0px)"
            }}>
            <div className='service_wrapper_content '>
              <div className='icons icon-small'>
                <FaDev size={60} className='text-theme-main-color' />
              </div>
              <div className='icons icon-small'>
                <FaDatabase size={60} className='text-theme-main-color' />
              </div>
              <div className='icons icon-small'>
                <DiAndroid size={60} className='text-theme-main-color' />
              </div>
              <div className='icons icon-small'>
                <DiApple size={60} className='text-theme-main-color' />
              </div>
            </div>
          </Animate>
        </div>
      </div>

    </section>
  )
}

export default About