import { useState } from 'react'
import PageHeader from '../pageHeaderContent/PageHeader'
import { FaChartBar } from 'react-icons/fa'
import { ProjectPortfolio } from './ProjectDetails'
import { Link } from 'react-router-dom'
import './style.css'

const Filters = [{ id: 1, label: "All", }, { id: 2, label: "Development" }, { id: 3, label: "Android" }]
function App() {
  const [filterList, setFilterList] = useState(1)
  const [hoverValue, setHoverValue] = useState()
  const onHandleFilter = (currentId) => {
    setFilterList(currentId)
  }
  const filteredItems = filterList === 1 ? ProjectPortfolio :
    ProjectPortfolio.filter(item => item.id === filterList);

  const handleHover = (index) => {
    setHoverValue(index)
  }


  return (<section>
    <PageHeader header_Text="My Portfolio" icon={<FaChartBar size={30} />} />
    <div className='h-full bg-theme-background-color p-4 sm:p-6 flex flex-col items-center md:items-start'>
      <ul className='border border-dashed border-theme-main-color rounded-3xl text-center flex-wrap justify-center md:h-16 w-fit inline-block'>
        {Filters.map((filter) => (
          <li
            onClick={() => onHandleFilter(filter.id)}
            className={`md:text-2xl md:font-medium md:px-6 cursor-pointer md:py-4 py-2 px-4 inline-block relative uppercase flex-wrap text-[#fff] transition-all duration-500 ease text-lg font-normal rounded-3xl 
              ${filter.id === filterList ? "bg-theme-main-color !text-[#000] font-semibold" : ""}`}
            key={filter.id}
          >
            {filter.label}
          </li>
        ))}
      </ul>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 mt-4 overflow-hidden'>
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className='relative h-[250px] sm:h-[350px] overflow-hidden pointer'
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          >
            <span className='h-full'>
              <img
                src={item.image}
                className='h-full rounded-xl object-cover w-full'
                alt='Item'
              />
            </span>
            <div className='overLay absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100'>
              {index === hoverValue && (
                <div className='text-center innerOverLay'>
                  <div className='animate-typingEffect'>
                    <p className='text-[#fff] m-0 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl whitespace-nowrap opacity-100'>
                      {item.name}
                    </p>
                  </div>
                  <Link to={"/portfolio"}>
                    <button className='cursor-pointer mt-4 px-4 sm:px-6 py-2 text-lg sm:text-xl bg-theme-bg-transparent text-theme-sub-text-color border-2 border-theme-background-color rounded-lg font-medium'>
                      Live Demo
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default App
