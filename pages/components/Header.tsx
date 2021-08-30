import Image from 'next/image'
import miniLogo from '../../assets/miniLogo.png'
import {MenuIcon} from '@heroicons/react/outline'

function Header() {
  return (
    <header className="flex h-16 bg-gray-900 text-gray-300 items-center justify-between">
      <div className="h-12 w-14 mb-1 ml-2 absolute">
        <Image
          className=""
          alt="logo"
          src={miniLogo}
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <h1 className="font-serif ml-3 text-xl z-10">Luna</h1>
      
      <nav className=" ">
        <div>
        <MenuIcon className="h-7 w-7 mr-4"/>
        </div>
      </nav>
    </header>
  )
}

export default Header
