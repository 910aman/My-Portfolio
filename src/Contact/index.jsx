import { RiContactsBook3Line } from 'react-icons/ri'
import PageHeader from '../pageHeaderContent/PageHeader'
import { Animate } from 'react-simple-animate'
import './style.css'

const Contact = () => {
  return (
    <section>
      <PageHeader header_Text="Contact Me" icon={<RiContactsBook3Line size={30} />} />
      <div className='h-full bg-theme-background-color p-6'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}>
          <div>
            <h3 className='title-text text-nowrap w-fit text-theme-sub-text-color text-xl md:text-3xl font-medium leading-5 relative uppercase px-3 py-2 border-b-2 border-theme-main-color'>
              Let&apos;s Talk
            </h3>
          </div>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}>
          <div className='mt-14'>
            <div className='md:grid md:grid-cols-2 gap-12 md:mb-10 flex flex-col '>
              <div className='relative'>
                <input required type="text" name='inputUser' className='inputName h-16 w-full border-2 border-theme-main-color px-4 py-3 transition-all duration-500 ease relative bg-theme-bg-transparent text-theme-sub-text-color focus:border-theme-main-color' />
                <label htmlFor='inputUser' className='labelName font-medium absolute top-3 left-4 transition-all duration-200 ease text-theme-sub-text-color text-xl'>Name</label>
              </div>
              <div className='relative'>
                <input required type="text" name='inputEmail' className='inputEmail h-16 w-full border-2 border-theme-main-color px-4 py-3 transition-all duration-500 ease-linear relative bg-theme-bg-transparent text-theme-sub-text-color focus:border-theme-main-color' />
                <label htmlFor='inputEmail' className='labelEmail font-medium absolute top-3 left-4 transition-all duration-200 ease text-theme-sub-text-color text-xl'>E - Mail</label>
              </div>
              <div className='relative'>
                <textarea required type="text" name='inputDesc' className='inputDescription min-h-20 max-h-32 h-full w-full border-2 border-theme-main-color px-4 py-3 transition-all duration-500 ease-linear relative bg-theme-bg-transparent text-theme-sub-text-color focus:border-theme-main-color' />
                <label htmlFor='inputDesc' className='labelDescription font-medium absolute top-3 left-4 transition-all duration-200 ease text-theme-sub-text-color text-xl'>What are Requirements?</label>
              </div>
            </div>
            <div className='w-full flex justify-center md:mt-2 mt-6'>
              <button className='md:w-fit w-full px-8 py-2 border-2 border-theme-main-color text-2xl font-semibold hover:bg-theme-main-color hover:text-theme-background-color'>
                Submit
              </button>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  )
}

export default Contact