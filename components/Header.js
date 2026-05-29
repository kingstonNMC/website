import React from 'react';
import Link from 'next/link';
import Hero from './Hero';

export default function Header ({hero}) {  
  console.log(hero)
  return (
    <div 
      className={`bg-cover bg-center h-[80vh] rounded-2xl bg-primary m-4 flex flex-col justify-between relative`} 
      style={{backgroundImage: `url(${hero?.fields?.image?.fields?.file?.url})`}}>
        <div className="m-0 md:m-4 rounded-2xl relative z-[90]">
          <div className="">
            <div className="pt-6 pb-2 md:pt-2 mx-auto px-6 flex  justify-between items-center">
              <Link className='text-primary font-bold text-5xl' href='/'> 
                KNMC
              </Link>
            </div>
          </div>
        </div>
        <Hero content={hero} />
      
    </div>
  )
}