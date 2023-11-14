// footer.js
import React from 'react'
import Link from 'next/link'
import { menu } from '@/data/menu'

const Footer = () => (
  <footer className="mt-5 border-t border-slate-500">
    <div className="container flex flex-col items-center justify-center p-5 mx-auto lg:flex-row lg:justify-between">
      <ul className="hidden gap-5 lg:flex">
        {menu.map((value, index) => (
          <li key={index}>
            <Link href={value.href}>
              <a className="text-white hover:text-gray-400 transition duration-300">
                {value.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:ml-auto text-center lg:text-left text-gray-400">
        Made with ❤️ all. &copy; 2023/10/10
      </div>
    </div>
  </footer>
)

export default Footer
