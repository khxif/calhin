import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export  function HomeAbout() {
  return (
    <section
    className="py-10 md:py-20 md:mt-16 flex gap-10 md:gap-20 max-w-7xl mx-auto w-full
   flex-col-reverse md:flex-row px-4 sm:px-6 md:px-0"
  >
    <div className="flex-1 p-6 items-center justify-between">
      <Image
        src="/about.png"
        alt="illustration"
        width={500}
        height={500}
        className="object-cover bg-transparent w-full h-full"
      />
    </div>

    <div className="flex-1 w-full flex flex-col justify-center space-y-6">
      <h1
        className="text-2xl md:text-3xl font-medium text-center relative before:absolute before:rounded-full max-w-fit
     before:w-3/5 before:h-1 before:bg-red-600 before:bottom-0 before:left-0 py-2.5 space-x-1.5"
      >
        <span className="text-red-600">Who are</span>
        <span>we?</span>
      </h1>

      <div className="space-y-8 flex flex-col justify-center">
        <p className="max-w-4xl text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Cupiditate dicta ipsa inventore ipsum, magnam neque earum maxime
          voluptatem. Esse ullam sint rerum eligendi quasi recusandae saepe!
          Ipsum, iste maxime? Eius. Lorem ipsum dolor sit, amet consectetur
          adipisicing
        </p>

        <Link href="/about">
          <p className="font-medium pb-2 pr-2 text-base md:text-md border-b border-red-600 max-w-fit">
            Have a Look -{">"}
          </p>
        </Link>
      </div>
    </div>
  </section>
  )
}
