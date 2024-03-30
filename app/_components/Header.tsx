import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className=" max-w-[100vw] my-5 ">
    <div className="mx-auto flex h-16 max-w-[91vw] items-center gap-2 px-2 sm:px-6 lg:px-10 poller-one-regular justify-between">
        <Link href="/" >
      <div className="flex ">
          {/* <Image src="/elixirLogo2.svg" alt="logo" width={50} height={50} /> */}
          <Image src="/elixirLogo.svg" alt="logo" width={50} height={50} />

          {/* <h1 className="flex items-center text-[1.5vw] text-bold mt-8">Elixir</h1> */}
      </div>
        </Link>
      <div className="flex  items-center justify-end md:justify-between">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-12 text-sm  list-none poppins-semibold capitalize">
            <li >
              <Link 
                className="text-black transition hover:text-gray-500/75 no-underline"
                href="/Plans"
              > 
                Programs
              </Link>
            </li>
            <li>
              <Link
                className="text-black transition hover:text-gray-500/75 no-underline"
                href="/About"
              >
                About{" "}us
              </Link>
            </li>
            <li>
              <Link
                className="text-black transition hover:text-gray-500/75 no-underline"
                href="/Contact"
              >
                {" "}
                Contact
              </Link>
            </li>
            <li>
            <a
        
        className="hidden rounded-full bg-[#4D2C5E] px-5 py-2.5 text-sm font-medium  transition  sm:block poppins-bold text-white"
      >
       Get started
      </a>
            </li>
          </ul>
        </nav>
      </div>
      
            
    </div>
  </header>
  )
}

export default Header