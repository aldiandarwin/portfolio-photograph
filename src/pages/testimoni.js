import React from 'react'
import Head from 'next/head'

const Testimoni = () => (
  <section id="testimoni" className="relative">
    <Head>
      <title>Testimoni - Aldian darwin</title>
      <meta name="description" content="Testimoni darwin" />
    </Head>

    <div className="h-[700px]">
      <img
        src="/photo/content.png"
        alt="testimoni user"
        className="object-cover w-full h-full rounded-xl"
      />
    </div>
    <div className="absolute left-0 z-10 p-20 text-black top-10">
      <p className="p-2 text-xl  bg-yellow-100/50 border border-slate-500 px-5  font-semibold text-white bg-gradient-to-r from-[#00a1ff] via-[#001932] to-[#00204e] hover:to-[#00a1ff]">
        &quot; Aldian has a unique style and true professional.&quot;
      </p>
      <span>- Sarah, Client</span>
    </div>
  </section>
)

export default Testimoni
