import React from "react";
import Head from 'next/head'
import Link from 'next/link'
import { Menu } from '@headlessui/react'

export default function Navigator() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);



  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    </Head>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
          <div className="w-full relative flex flex-wrap justify-center lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/"//eslint-disable-line
            > 
            <img //eslint-disable-line
              src="./images/CBCP-Long-1.png" 
              className="hover:opacity-75 cursor-pointer"
            >
            </img>
            </Link>

            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fa fa-angle-down"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex items-center flex-wrap" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-wrap list-none lg:ml-auto py-3 md:text-sm">

            <li className="nav-item">
            <Menu>
              <Menu.Button className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-logo hover:opacity-75 bg-gray-900">Prints&nbsp;&nbsp;<i className="fa fa-angle-down"></i></Menu.Button>
              <Menu.Items>


                <Menu.Item className="px-3 py-2 flex items-center uppercase leading-snug text-logo hover:opacity-75 bg-gray-900">
                  {({ active }) => (
                    <a // eslint-disable-line
                      className={`${active && 'bg-blue-500'}`}
                      as={Link}
                      href="/"
                      style={{
                        fontSize: '13px'
                      }}
                    >
                      Prints
                    </a>


                  )}
                </Menu.Item>

                <Menu.Item className="px-3 py-2 flex items-center uppercase leading-snug text-logo hover:opacity-75 bg-gray-900">
                  {({ active }) => (
                    <a // eslint-disable-line
                      className={`${active && 'bg-blue-500'}`}
                      as={Link}
                      href="/books"
                      style={{
                        fontSize: '13px'
                      }}
                    >
                      Artist Books
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
            </li>

              <li className="nav-item">
                <Link href='/drawings'>
                  <a
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-logo hover:opacity-75"
                  
                >
                  Drawings &nbsp;<i className="fa fa-plus" style={{fontSize: '10px'}}></i>
                </a></Link>

              </li>

              <li className="nav-item">
              <Link href="/commissions">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-logo hover:opacity-75"
                >
                  Commissions
                </a>
                </Link>
              </li>
              
              <li className="nav-item">
                <a // eslint-disable-line
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-logo hover:opacity-75"
                  href="https://www.etsy.com/shop/creepybutcutepress"
                >
                  Shop
                </a>
              </li>
              
              <li className="nav-item">
              <Link href="/about">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-logo hover:opacity-75"
                >
                  About
                </a>
                </Link>
              </li>
              
              <li className="nav-item">
              <Link href="/contact">
                <a
                  className="px-3 py-2 flex items-center text-md uppercase font-bold leading-snug text-logo hover:opacity-75"
                >
                  Contact
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
