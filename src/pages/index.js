import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-10">
      <Head>
        <title>Aldian darwin Portfolio</title>
        <meta name="description" content="Home page darwin" />
      </Head>
      <div className="grid text-center place-content-center lg:text-left">
        <h1 title="darwin" className="text-[80px] leading-[70px]">
          Aldian darwin
        </h1>
        <div className="my-10 mb-10 space-y-5 text-2xl lg:mb-28">
          <div className="flex flex-col">
            <span className="font-light">Fashion Photography</span>
            <span>Portfolio</span>
          </div>
          <div>
            Through my lens, I capture the essence of international
            collaborations, showcasing a portfolio that speaks volumes. Each
            photograph is a chapter, a timeless moment in the symphony of life
          </div>
        </div>
        <nav>
          <Link href="/">
            <a className="p-5 px-10 text-white border bg-slate-700 border-slate-500  bg-gradient-to-r from-[#00a1ff] via-[#001932] to-[#00204e] hover:to-[#00a1ff]">
              GET IN TOUCH
            </a>
          </Link>
        </nav>
      </div>
      <div className="mt-10 w-full h-[300px] lg:w-1/2 lg:h-[700px] lg:mt-0 ">
        <img
          src="/photo/aldian.png"
          alt="darwin"
          className="object-cover w-full h-full rounded-xl "
        />
      </div>
    </div>
  )
}
