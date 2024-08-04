import { BsInfoCircleFill } from 'react-icons/bs'
import PageHeader from '../pageHeaderContent/PageHeader'
import { Animate } from 'react-simple-animate'
import { FaDatabase, FaDev } from 'react-icons/fa'
import { DiAndroid, DiApple } from 'react-icons/di'
import './style.css'

const About = () => {
  const profileSummary = [
    { label: "Name", value: "Aman Chauhan" },
    { label: "Age", value: "23" },
    { label: "Address", value: "Ahmedabad, Gujarat" },
    { label: "E-Mail", value: "test123@gmail.com" },
    { label: "Contact No.", value: "+91 910211323" }
  ]
  return (
    <section className='h-full bg-theme-background-color'>
      <PageHeader header_Text="About Me" icon={<BsInfoCircleFill size={30} />} />

      <div className='p-5 flex gap-7 w-full md:flex-row flex-col'>
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
              <p className='text-theme-sub-text-color text-3xl leading-10 pb-4 border-b border-dashed border-theme-main-color'>
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
              <ul>
                {profileSummary.map((summary, index) => (
                  <li key={index} className='tracking-widest mb-4'>
                    <span className='text-2xl font-semibold tracking-widest border-b-2 border-theme-main-color relative inline-block pb-[1px] text-theme-sub-text-color'>
                      {summary.label}
                    </span>
                    <span className='ml-6 text-2xl font-semibold tracking-widest relative inline-block pb-[1px] text-theme-sub-text-color'>
                      {summary.value}
                    </span>
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
        </div>
        <div className='w-[50%] flex justify-center items-center '>
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
              <div className='icons '>
                <FaDev size={60} className='text-theme-main-color' />
              </div>
              <div className='icons'>
                <FaDatabase size={60} className='text-theme-main-color' />
              </div>
              <div className='icons'>
                <DiAndroid size={60} className='text-theme-main-color' />
              </div>
              <div className='icons'>
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