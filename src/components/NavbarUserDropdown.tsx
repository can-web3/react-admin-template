import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavbarUserDropdown() {
    const [isOpen, setIsOpen] = useState(false)



    return (
        <div className='relative'>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-2 py-1 cursor-pointer"
            >
                <img 
                    src="https://nextjs.spruko.com/bootstrap/page/nowa-ts/preview/assets/images/faces/2.jpg" 
                    className="w-[40px] rounded-full"
                    alt="" />
                <span>Can Oğuzorhan</span>
                <i className="fa-solid fa-caret-down"></i>

                
            </button>

            <div className={`${!isOpen && 'hidden' } absolute block min-w-[160px] w-full border border-gray-400 top-12 bg-white`}>
                <ul className="flex flex-col gap-2">
                    <li className="hover:bg-gray-300">
                        <Link to='/profil' className='py-2 cursor-pointer block px-2'>
                            Profil
                        </Link>
                    </li>
                    <li className="hover:bg-gray-300">
                        <Link to='/profil' className='py-2 cursor-pointer block px-2'>
                            Çıkış yap
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
