// contact.js
import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Contact = () => (
  <section
    id="contact"
    className="relative bg-gradient-to-b from-[#001932] via-[#001932] to-[#000000] text-white"
  >
    <Head>
      <title>Contact - professionally</title>
      <meta name="description" content="Contact darwin" />
    </Head>

    <div className="h-[700px]">
      <img
        src="/photo/building.jpg"
        alt="contact"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
    <div className="w-full lg:w-1/2 h-[625px] bg-gradient-to-b from-[#001932] via-[#001932] to-[#000000] absolute z-10 top-10 lg:right-10 p-5 grid place-content-center">
      <h1 className="text-5xl mb-5">
        <span>Get in</span> <br />
        <span className="font-bold">Touch</span>
      </h1>
      <p className="text-gray-300">
        123 Anywhy Or Any Where 12345 <br /> aldianafter@gmail.com
      </p>
      <nav className="mt-20">
        <Link href="/contact">
          <a className="border border-slate-500 p-3 px-5 uppercase font-bold text-white bg-gradient-to-r from-[#00a1ff] via-[#001932] to-[#00204e] hover:to-[#00a1ff]">
            Send an Email
          </a>
        </Link>
      </nav>
    </div>
  </section>
)

export default Contact
