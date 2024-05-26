import React from 'react'
import { ClassType, SelectedPage } from '../../shared/types'
import   Image3 from "../../assets/images/WAXED.png"
import   Image2 from "../../assets/images/jumbo_Paper_cone.jpg"
import   Image1 from "../../assets/images/3deg30.png"

import {motion} from 'framer-motion'
import HText from '../../shared/HText'
import Class from './product'


type Props = {
    setSelectedPage:(value:SelectedPage)=>void
}
const classes: Array<ClassType> = [
    {
      name: "Paper Cones",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: Image1,
    },
    {
      name: "Jumbo Paper Cones",
      image: Image2,
    },
    {
      name: "Waxed Paper Cone",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image: Image3,
    }
  ];
  

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id='ourclasses' className='w-full bg-primary-400 py-20 '>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR PRODUCTS</HText>
           
          </div>
        </motion.div>
        <div className='mt-10 h-[353px]  w-full overflow-y-hidden'>
            <ul className='w-100 whitespace-nowrap'>
                {classes.map((item:ClassType)=>(
                    <Class key={`${item.name}`} name={item.name}
                    description={item.description}
                    image={item.image}/>
                ))}

            </ul>

        </div>

        </motion.div>

    </section>
  )
}

export default OurClasses