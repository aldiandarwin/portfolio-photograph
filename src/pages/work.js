import React from 'react'
import Head from 'next/head'

const Work = () => (
  <section id="work" className="flex flex-col lg:flex-row">
    <Head>
      <title>Work - Aldian darwin </title>
      <meta name="description" content="Contact darwin" />
    </Head>

    <div className="flex gap-3">
      <div>
        <img
          src="/works/sarah 4.png"
          alt="work 1"
          className="object-cover w-full h-full rounded-xl"
        />
      </div>
      <div className="mb-20 space-y-3 ">
        <img
          src="/works/sarah 2.png"
          alt="work 2"
          className="object-cover1 w-50% h-50% rounded-xl"
        />
        <img
          src="/works/sarah 3.png"
          alt="work 3"
          className="object-cover2 w-50% h-50% rounded-xl"
        />
      </div>
    </div>
    <div className="w-[400px] flex-shrink-0 p-20">
      <h1 className="mb-5 text-5xl">
        <span>Feature</span> <br />
        <span className="font-bold">Work</span>
      </h1>

      <ul>
        <li>01 Miss Universe, 2021</li>
        <li>02 Gucci Fashion, 2021</li>
        <li>03 International Model , 2022</li>
      </ul>
    </div>
  </section>
)

export default Work
