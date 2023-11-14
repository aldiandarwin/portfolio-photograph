import React from 'react'
import Link from 'next/link'

const Blog = () => {
  return (
    <section id="blog">
      <h1 className="mb-8 text-3xl">Aldian Blog</h1>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <article className="space-y-2">
          <div className="w-full h-60 bg-gradient-to-b from-cyan-500 via-cyan-700 to-dark-abyss"></div>
          <div className="text-sm font-light text-gray-400">Lifestyle</div>
          <h2 className="text-2xl font-bold text-white">
            Embracing Mindfulness: A Photographic Exploration
          </h2>
          <p className="text-gray-300">
            Embark on a visual journey delving into the art of mindfulness. This
            photographic exploration captures serene moments, offering a glimpse
            into the power of living in the present. Nullam accumsan lorem in
            dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum
            ante.
          </p>
          <nav>
            <Link href="/">
              <a className="font-bold text-amber-600 hover:text-amber-400">
                Read more
              </a>
            </Link>
          </nav>
        </article>

        <article className="space-y-2">
          <div className="w-full h-60 bg-gradient-to-b from-cyan-500 via-cyan-700 to-dark-abyss"></div>
          <div className="text-sm font-light text-gray-400">Fashion</div>
          <h2 className="text-2xl font-bold text-white">
            The Elegance of Timeless Style
          </h2>
          <p className="text-gray-300">
            Dive into the world of fashion, exploring the allure of timeless
            styles. From vintage inspirations to modern classics, this article
            unveils the essence of elegance in every frame. Cras ultricies mi eu
            turpis hendrerit fringilla. Vestibulum ante.
          </p>
          <nav>
            <Link href="/">
              <a className="font-bold text-amber-600 hover:text-amber-400">
                Read more
              </a>
            </Link>
          </nav>
        </article>

        <article className="space-y-2">
          <div className="w-full h-60 bg-gradient-to-b from-cyan-500 via-cyan-700 to-dark-abyss"></div>
          <div className="text-sm font-light text-gray-400">Technology</div>
          <h2 className="text-2xl font-bold text-white">
            Innovation Unveiled: Tech Wonders
          </h2>
          <p className="text-gray-300">
            Explore the cutting edge of technology through a lens of innovation.
            This article showcases the wonders of modern tech, capturing the
            spirit of progress and creativity. Nullam accumsan lorem in dui.
            Vestibulum ante.
          </p>
          <nav>
            <Link href="/">
              <a className="font-bold text-amber-600 hover:text-amber-400">
                Read more
              </a>
            </Link>
          </nav>
        </article>
      </div>
    </section>
  )
}

export default Blog
