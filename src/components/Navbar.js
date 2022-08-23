
import { FcMenu } from 'react-icons/fc'
import { VscSearch} from 'react-icons/vsc'
import logo from '../images/logo.png'
  


const Navbar = () => {
  return (
    <>
    <div className="flex py-4 px-4 cursor-pointer items-center justify-between w-full z-50 sticky">
    
      <div className="flex  items-center px-6">
      <FcMenu size={25} className='md:hidden block mr-[36px]' />
         <img src={logo}  className='h-[24px] w-[24px] object-contain'  alt="" />
         <span className='text-base text-red-600 font-bold ml-4'>Adobe</span>

         <div className='ml-6 md:inline-flex hidden text-sm font-medium space-x-20'>
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