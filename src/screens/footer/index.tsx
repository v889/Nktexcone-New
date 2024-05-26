
import Logo from "@/assets/images/nk2.png";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import { EnvelopeOpenIcon } from "@heroicons/react/16/solid";
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Google } from '@mui/icons-material';
import f1 from '@/assets/images/f1.png';
import f2 from '@/assets/images/f2.png';
import f3 from '@/assets/images/f3.png'
import f4 from '@/assets/images/f4.png'



const Footer = () => {
  return (
   <footer className='bg-primary-100 py-10'>
    <div className='justify-content mx-5 w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img src={Logo}/>
            <p className="font-bold text-md">Manufacuturer of High Quality Cones</p>
            <div className="flex flex-row w-20 h-20 ">
                <img    src={f1}/>
                <img src={f2}/>
                <img src={f3}/>
                <img src={f4}/>
            </div>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Social Media</h4>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    
                <Facebook/>
                <p>Facebook</p>
                </div>
                <div className="flex flex-row">
                <LinkedIn/>
                <p>LinkedIn</p>
                </div>
                <div className="flex flex-row">
                <Google/>
                <p>Google</p>
                </div>
            </div>
           
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Contact Us</h4>
        <div className="flex flex-row">
            <EnvelopeOpenIcon width="5%" />
           
                <p className=''>nktexconehpr@gmail.com</p>
                </div>
                        
            <div className="flex flex-row">
            <DevicePhoneMobileIcon width="5%" />
           
                <p className='my-4'>+91 8979293591</p>
                </div>
                        
                        
        </div>

    </div>

   </footer>
  )
}

export default Footer