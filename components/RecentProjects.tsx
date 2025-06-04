import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import Image from 'next/image'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <div className=' py-20' id='projects'>
      <h1 className=' heading'>
        A small selection of {' '}
        <span className=' text-aqua'> recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
        {projects.map(({id,title,des,img,iconLists,link,techStack})=>(
            <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
              <Link href={link}>
                  <PinContainer  
                    title={link} 
                    className="transition-transform duration-300 hover:scale-[1.01]"
                >
                    <div className=' relative flex items-center justify-center sm:w-[570px] w-[80vw]  overflow-hidden sm:h-[40vh] h-[40vh]  mb-10'> 
                        <div className='absolute inset-0 w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                          <Image src="/bg.png" alt="bg-img" fill className="object-cover" />
                        </div>
                        <div className="z-10 relative flex items-end justify-center w-full h-full">
                          <Image 
                            src={img} 
                            alt={title} 
                            width={320}
                            height={220}
                            className="object-contain max-h-[70%] w-auto rounded-lg"
                            priority
                          />
                        </div>
                    </div>
                    <h1 className=' font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                        {title}
                    </h1>
                    <p className=' lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                        {des}
                    </p>
                    <div className=' flex items-center justify-between mt-7 mb-3'>
                        <div className=' flex items-center'>
                            {iconLists.length > 0 ? (
                                iconLists.map((icon, index) => (
                                    <Image 
                                        key={index} 
                                        src={icon} 
                                        alt={`icon-${index}`} 
                                        width={24}
                                        height={24}
                                        className=' w-6 h-6 mr-2' 
                                    />
                                ))
                            ) : (
                                <span className='text-aqua font-semibold text-base'>
                                    {typeof techStack === 'string' ? techStack : 'N/A'}
                                </span>
                            )}
                        </div>
                        <div>
                            <p className='flex lg:text-xl md:text-xs text-sm text-aqua'> Check Live Site </p>
                            <FaLocationArrow className=' ms-3' color='#CBACF9' />
                        </div>
                    </div>
                </PinContainer>
            </Link>
            </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
