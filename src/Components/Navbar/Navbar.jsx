import Logo from '../../Assets/Logo/logo.svg'
import Tsuki from '../../Assets/Logo/tsuki.svg'

export default function Navbar(){
    return(
        <>
            <div className="pr-24 pl-24 p-10">
                <div className="grid grid-cols-6 text-white">
                    <div className='flex gap-3 justify-center'>
                        <div className='flex justify-center items-center'>
                            <img src={Logo} className="h-9"/>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={Tsuki} className="h-5"/>
                        </div>
                    </div>
                    <div className="flex gap-8 justify-center items-center col-span-4">
                        <button>
                            About
                        </button>
                        <button>
                            Testimonials
                        </button>
                        <button>
                            Services
                        </button>
                        <button>
                            Projects
                        </button>
                        <button>
                            Our Team
                        </button>
                    </div>
                    <div className='flex justify-center'>
                        <button className='font-bold border-2 bg-transparent px-7 py-2 rounded-full hover:bg-white hover:text-black duration-300'>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}