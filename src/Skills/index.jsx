import PageHeader from '../pageHeaderContent/PageHeader'
import { AllSkillsinOne } from './MySkills'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { Line } from 'rc-progress'
import './style.css'
import { GiSkills } from 'react-icons/gi'

const Skills = () => {
  // Group skills by category
  const groupedSkills = AllSkillsinOne.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section className='relative w-full h-full bg-theme-background-color'>
      <PageHeader header_Text="My Skills" icon={<GiSkills size={30} />} />
      <div className='flex flex-wrap gap-5 p-5'>
        {Object.keys(groupedSkills).map((category, index) => (
          <div
            key={index}
            className='flex flex-col w-full md:w-1/3 lg:w-1/4 flex-grow tracking-wider'
          >
            <Animate
              play
              delay={0.4}
              start={{ transform: 'translateX(-200px)' }}
              end={{ transform: 'translateX(0px)' }}
              duration={1.2}
            >
              <h3 className='category-text inline-block text-nowrap text-theme-sub-text-color text-xl md:text-2xl font-medium leading-5 relative uppercase px-3 py-4 border-b-2 border-theme-main-color'>
                {category}
              </h3>
              <div className='flex flex-col md:gap-12 gap-6 md:mt-8 mt-5 lg:mb-0 mb-10'>
                {groupedSkills[category].map((data, index) => (
                  <AnimateKeyframes
                    play
                    key={index}
                    keyframes={["opacity:1", "opacity:0"]}
                    duration={1}
                  >
                    <div className='flex flex-col'>
                      <div className='flex justify-between'>
                        <h2 className='text-xl md:text-2xl font-medium pt-4 pb-1'>{data.skillName}</h2>
                        <h3 className='text-xl md:text-2xl font-medium pt-4 pb-1'>{data.count} %</h3>
                      </div>
                      <Line
                        percent={data.count}
                        strokeWidth="2"
                        strokeColor={"#ffdd40"}
                        trailWidth="10"
                        strokeLinecap='square'
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills