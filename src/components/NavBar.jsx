import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react'
const NavBar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () =>  {
    setNav(!nav)

  }

  return (
    <div className='flex justify-between h-24 max-w[1240px] mx-auto px-4 items-center text-white'>
        <h1 className=" w-full text-3xl font-bold text-[#00df9a]">FLASH.</h1>
        <ul className=" hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resources</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>   
        </ul>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} />:  <AiOutlineMenu size={20}/> }
          
       

        <div className={nav ? 'fixed left-0 top-0 w-[60] h-full boarder-r boarder-r-grey-900 bg-[#000300] ease-in-out duration-500' : "fixed left-[-100%]"}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">FLASH.</h1>

        <ul className=' uppercase p-4'>
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4  border-b border-gray-600">Company</li>
          <li className="p-4  border-b border-gray-600">Resources</li>
          <li className="p-4  border-b border-gray-600">About</li>
          <li className="p-4  border-b border-gray-600">Contact</li>   
        </ul>

        </div>

        </div>
    </div>
  )
}

export default NavBar