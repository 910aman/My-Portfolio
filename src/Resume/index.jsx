import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
import PageHeader from '../pageHeaderContent/PageHeader'
import { FaUserTie } from 'react-icons/fa'
import './style.css'
import { PersonalDetails } from './MyPersonal'
import { MdWork } from 'react-icons/md';

const Contact = () => {
  return (
    <section>
      <PageHeader header_Text="My Resume" icon={<FaUserTie size={30} />} />
      <div className='relative px-4 flex md:flex-row flex-col w-full mt-5 h-full bg-theme-background-color '>
        <div className='md:w-1/2 w-full flex flex-col mb-0 md:mb-10'>
          <div className='flex justify-center'>
            <h3 className='category-text text-nowrap text-theme-sub-text-color text-xl md:text-3xl font-medium leading-5 relative uppercase px-3 py-4 border-b-2 border-theme-main-color'>
              Experince
            </h3>
          </div>
          <VerticalTimeline
            layout={"1-column"}
            lineColor='#ffdd40'
          >
            {
              PersonalDetails.Experince.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className='pb-8 last:pb-0'
                  contentStyle={{
                    background: "none",
                    color: "#fff",
                    border: "1.5px solid #ffdd40"
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#181818"
                  }}
                >
                  <div className='flex flex-col gap-4'>
                    <h3 className='md:font-bold md:text-xl font-medium text-lg'>{item.title}</h3>
                    <h4 className='md:font-extrabold md:text-2xl font-semibold text-xl'>{item.subTitle}</h4>
                    <h5 className='md:font-medium md:text-xl md:mt-4 mt-1 text-base font-normal'>{item.description}</h5>
                  </div>
                </VerticalTimelineElement>
              ))
            }

          </VerticalTimeline>
        </div>
        <div className='md:w-1/2 w-full flex flex-col md:mb-0 mb-10'>
          <div className='flex justify-center'>
            <h3 className='category-text text-nowrap text-theme-sub-text-color text-xl md:text-3xl font-medium leading-5 relative uppercase px-3 py-4 border-b-2 border-theme-main-color'>
              Education
            </h3>
          </div>
          <VerticalTimeline
            layout={"1-column"}
            lineColor='#ffdd40'
          >
            {
              PersonalDetails.Education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className='pb-8 last:pb-0'
                  contentStyle={{
                    background: "none",
                    color: "#fff",
                    border: "1.5px solid #ffdd40"
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background: "#181818"
                  }}
                >
                  <div className='flex flex-col gap-4'>
                    <h3 className='md:font-bold md:text-xl font-medium text-lg'>{item.title}</h3>
                    <h4 className='md:font-extrabold md:text-2xl font-semibold text-xl'>{item.subTitle}</h4>
                    <h5 className='md:font-medium md:text-xl md:mt-4 mt-1 text-base font-normal'>{item.description}</h5>
                  </div>
                </VerticalTimelineElement>
              ))
            }

          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Contact