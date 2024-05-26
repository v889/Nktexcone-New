import { Link } from "react-router-dom";
import { SelectedPage } from '../../shared/types'
import HomepageText from "../../assets/images/Heading.png"
import HomepageGraphic from "../../assets/images/homegrapric.png"



import { motion } from 'framer-motion'

import ImageCarousel from './coursel'
import OurClasses from './products'


type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}

const Home = ({setSelectedPage}: Props) => {
   
  return (
    <div className="app bg-gray-20">
    
      <ImageCarousel/>
   <section id='home' className='gap-16 bg-gray-20 pt-10 py-10 md:h-full md:pb-0 '>
    
    <motion.div className='md:flex mx-auto w-5/6 items-center justify-center md:h-5/6' 
    onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}>
        {/* main header */}
        <div className='z-10 mb-4 mt-32 md:basis-3/5' >
            {/* headings */}
            <motion.div className='md:-mt:15' initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{duration:0.5}} 
            variants={{hidden:{opacity:0,x:-50},visible:{opacity:1,x:0},}}>
                <div className='relative'>
                    <div className='before:absolute before:-top-20   before:z-[-1]'>
                        <img alt="home-page-text" src={HomepageText}/>
                    </div>
                </div>
                <p className="mt-4 font-semibold text-md">
                N.K TEXCONE is the leading Manufacturer and Exporter of all types of TEXTILE PAPER
      CONES. Paper Cone is available in many types with varying paper weights according to your requirement,major oducts our domain is 3°30', 4°20', 5°57',Jumbo, Waxed Cones & all other types of Paper cones according to your requirement at the most affordable prices.
            </p>
            </motion.div>
            {/* Actions*/}
            <motion.div className='mt-8 flex items-center gap-8' initial="hidden" whileInView="visible" viewport={{once:true,amount:0.5}} transition={{duration:0.5}} 
            variants={{hidden:{opacity:0,x:-50},visible:{opacity:1,x:0},}}>
            <Link 
     className='rounded-md bg-secondary-400 px-10 py-2 hover:bg-primary-500 hover:text-white' 
      to={`/Contact`}
     >
        Contact Now
    </Link>
            <Link
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              
              to={"/about"}
            >Learn More</Link>
            </motion.div>

        </div>
        <div className='flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
            <img alt='home-pageGraphic' src={HomepageGraphic}/>
        </div>

    </motion.div>

  


   </section>
   <OurClasses setSelectedPage={setSelectedPage}/>
   

   </div>
  )
}

export default Home