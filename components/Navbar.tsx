import Image from 'next/image'
import { VscSearch} from 'react-icons/vsc'
import logo from '../public/assets/logo.svg'
  


const Navbar = () => {
  return (
    <>
    <div className="flex py-4 px-4 cursor-pointer items-center justify-between w-full z-50 sticky">
      <div className="flex  items-center px-6">
         <Image src={logo} width="24px" height="24px" className=''  alt="" />
         <span className='text-base text-red-600 font-bold ml-4'>Adobe</span>

         <div className='flex ml-6 text-sm font-medium space-x-20'>
       <span>Creativity</span>
       <span>PDF & E-signature</span>
       <span>Creativity</span>
       <span>Creativity</span>
      </div>
      </div>

      <VscSearch className='font-bold' size={20}/>
    </div>
    </>
  )
}

export default Navbar