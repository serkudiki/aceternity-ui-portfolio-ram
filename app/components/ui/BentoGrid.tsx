'use client'

import { cn } from "@/utils/cn";
import { div } from "framer-motion/client";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe"
import Lottie from "react-lottie";
import lottie from 'lottie-web';
import { useState } from "react";
import animationData from '../data/confetti.json';
import MagicButton from "./MagicButton";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
      
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  id,
  icon,
  img,
  imgClassName,
  spareImg,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img?: string;
  titleClassName?: string;
  imgClassName?: string;
  spareImg?: string;

}) => {

  const [copied, setcopied] = useState (false); 

  return (
    <div
      className={cn(
        "row-span-1 relative rounded-2xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none dark:bg-black justify-between flex flex-col space-y-4 border-black/[0.5]",
        className
      )}

      style={{
        background: 'rgb(33,33,33)',
        backgroundColor: 'linear-gradient(313deg, rgba(241,241,241,1) 0%, rgba(244,244,244,1) 29%, rgba(209,209,209,1) 100%)',
      }}
      >

<div className={`${id === 6 && "flex justify-center"}`}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        
        <div className={'absolute right-0 -bottom-5 ${id === 5 && }'}>
            {spareImg && (
                <img
                src={spareImg}
                alt={spareImg}
                className={'object-cover, object-center w-full h-full'}
                />
            )}
        </div>
            
            {id === 6 && (
            
            <BackgroundGradientAnimation>
                <div className="absolute z-50 flex items-center justify-center h-fit text-white-100 font-bold"/>
            </BackgroundGradientAnimation>
            )
            }

            <div className={cn(
                 titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}>
            
            <div>


        <div className="font-sans font-light text-white-100 text-sm md:text-xs lg:text-base z-10 dark:text-neutral-300">
          {description}
        </div>
        <div className="font-sans text-white font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
            </div>
            


            {/* {id === 2 && <GlobeDemo /> } */}

            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-3 lg:gap-8"> 
                  { ['ReactJS', 'Next.JS', 'Typescript'].map
                  ((item) => (
                    <span key={item} className="text-white-200 py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-85 rounded-lg text-center bg-[#111]">
                      {item}
                    </span>

                  ))
                  }
                </div>
                </div>
            )}

            {id === 6 && (
              <div className="mt-5 relative">
                <div className={'absolute -bottom-5 right-0'}>
                    
                    <Lottie options={{
                      loop: copied,
                      autoplay: copied,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      }

                    }}/>
                    
                  </div>

                  <MagicButton title={""} icon={undefined} position={""} />

                </div>

            )}

      </div>

        
      </div>
    </div> 
  );
};
