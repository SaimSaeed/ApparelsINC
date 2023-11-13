import React from 'react'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Pic1 from "../Assets/Carousel1.webp"
import Pic2 from "../Assets/Carousel2.webp"
import Pic3 from "../Assets/Carousel3.webp"

function CarouselMain() {
  return (
    <div>
       <Carousel>
      <div className="relative h-full w-full">
        <img
          src={Pic1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl text-[1rem] sm:text-2xl md:text-4xl lg:text-5xl"
            >
              Embrace Your Looks
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-[0.7rem]   md:text-md lg: text-lg"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="purple" className='hidden sm:block md:block'>
                Explore
              </Button>
              <Button size="lg" color="purple" variant="outlined" className='hidden sm:block md:block'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={Pic2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center  bg-black/50">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl text-[1rem] sm:text-2xl md:text-4xl lg:text-5xl   "
            >
              Be Your Best Self
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-[0.7rem]   md:text-md lg: text-lg"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2 ">
            <Button size="lg" color="purple" className='hidden sm:block md:block'>
                Explore
              </Button>
              <Button size="lg" color="purple" variant="outlined" className='hidden sm:block md:block'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={Pic3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end  bg-black/50">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl text-[1rem] sm:text-2xl md:text-4xl lg:text-5xl"
            >
              Look Good and Beautiful
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-[0.7rem]   md:text-md lg: text-lg"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
            <Button size="lg" color="purple" className='hidden sm:block md:block'>
                Explore
              </Button>
              <Button size="lg" color="purple" variant="outlined" className='hidden sm:block md:block'>
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    </div>
  )
}

export default CarouselMain