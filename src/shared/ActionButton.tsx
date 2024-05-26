import React from 'react'
import { Link } from 'react-router-dom'
import { SelectedPage } from './types'

type Props = {
    children:React.ReactNode
    setSelectedPage:(value:SelectedPage)=>void
}

const ActionButton = ({children,setSelectedPage}: Props) => {
  return (
    <Link 
     className='rounded-md bg-secondary-400 px-10 py-2 hover:bg-primary-500 hover:text-white' 
      to={`/${setSelectedPage}`}
     >
        {children}
    </Link>
  )
}

export default ActionButton