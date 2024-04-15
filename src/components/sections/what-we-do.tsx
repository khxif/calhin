import Image from "next/image";
import Link from "next/link";

export default function WhatWeDo() {
  return (
    <section className="py-28 lg:mt-16 px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto w-full space-y-5">
      <h1
        className="text-3xl font-medium relative before:absolute before:rounded-full max-w-fit
   before:w-3/5 before:h-1 before:bg-red-600 before:bottom-0 before:left-0 py-2.5 space-x-1.5"
      >
        <span className="text-red-600">What we</span>
        <span>Do?</span>
      </h1>

      <section className="space-y-20">
        <div className=" flex gap-8 lg:gap-20 flex-col lg:flex-row ">
          <div className="flex-1 lg:p-6 flex items-center justify-between max-w-fit">
            <Image
              src="/website.png"
              alt="website"
              width={500}
              height={500}
              className="object-cover bg-transparent w-full h-full"
            />
          </div>

          <div className="flex-1 w-full flex flex-col justify-center space-y-6">
            <p className="max-w-4xl text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate dicta ipsa inventore ipsum, magnam neque earum maxime
              voluptatem. Esse ullam sint rerum eligendi quasi recusandae saepe!
              Ipsum, iste maxime? Eius. Lorem ipsum dolor sit, amet consectetur
              adipisicing
            </p>
          </div>
        </div>

        <div className=" flex gap-8 lg:gap-20 flex-col lg:flex-row-reverse ">
          <div className="flex-1 lg:p-6 flex items-center justify-between max-w-fit">
            <Image
              src="/app.png"
              alt="app"
              width={500}
              height={500}
              className="object-cover bg-transparent w-full h-full"
            />
          </div>

          <div className="flex-1 w-full flex flex-col justify-center space-y-6">
            <p className="max-w-4xl text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate dicta ipsa inventore ipsum, magnam neque earum maxime
              voluptatem. Esse ullam sint rerum eligendi quasi recusandae saepe!
              Ipsum, iste maxime? Eius. Lorem ipsum dolor sit, amet consectetur
              adipisicing
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
