import React from 'react'
import Head from 'next/head'

const AboutMe = () => (
  <section id="about-me" className="flex flex-col lg:gap-52 lg:flex-row">
    <Head>
      <title>About - Aldian darwin</title>
      <meta name="description" content="About darwin" />
    </Head>

    <div className="grid space-y-5 place-content-center">
      <h1 className="text-5xl">
        <span>Artist</span> <br />
        <span className="font-bold">Biography</span>
      </h1>

      <p>
        Over a decade of professional dedication, my lens has focused on global
        brands such as Hermes, Gucci, and international models, crafting visual
        stories that transcend boundaries
      </p>
      <p>
        My journey is an ongoing exploration, with no plans of halting the
        pursuit of capturing the essence of beauty and storytelling through the
        art of photography.
      </p>
    </div>

    <div className="mt-10 lg:mt-0 w-full h-[700px] ">
      <img
        src="/photo/portrait 1.png"
        alt="darwin"
        className="object-cover w-full h-full rounded-xl "
      />
    </div>
  </section>
)

export default AboutMe
