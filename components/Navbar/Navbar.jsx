import Image from "next/image";
import menuItems from "@/data/menuData";

export default function NavBar() {
  return (
    <nav className='flex w-full xl:min-w-[90%] border-[1px] border-solid border-black border-opacity-20 mt-2 lg:mt-2 xl:mt-0 z-10'>
      <div className='py-2 px-2 lg:py-3 lg:px-4'>
        <Image
          src='/svgs/logo.svg'
          width={35}
          height={31}
          alt='Logo'
          className='min-w-[35px]'
        />
      </div>
      <span className='percentage max-w-[2rem] xl:min-w-[7rem] xs:w-[10rem] bg-pri -z-10' />
      <div className='progress-bar border-black border-opacity-20 border-[0.5px] min-w-[20%] lg:min-w-[20%] xl:min-w-[50%] flex' />

      <div className='hidden border-l-[0.5px] custom-border about xl:flex justify-center items-center xl:px-[5rem] relative w-auto'>
        <div className='flex flex-col relative'>
          <p className='text-black text-sm uppercase opacity-[0.8]'>About</p>
        </div>
        <span className='text-black lg:text-xs lg:absolute left-1 md:bottom-0 opacity-[0.5]'>
          001
        </span>
      </div>

      <div className='hidden custom-border border-l-[0.5px] xl:border-l-0 md:flex justify-center items-center px-5 md:px-[4rem] lg:px-[5rem] xl:px-[3rem] relative'>
        <div className='flex flex-col relative'>
          <Image
            src='/svgs/discord.svg'
            width={30}
            height={30}
            alt='Discord'
            className='min-w-[30px]'
          />
        </div>
        <span className='hidden md:block xl:block text-black text-xs md:absolute left-1 md:bottom-0 md:opacity-[0.5]'>
          002
        </span>
      </div>

      <div className='hidden custom-border md:flex justify-center items-center px-5 md:px-[4rem] lg:px-[5rem] xl:px-[3rem] relative'>
        <div className='flex flex-col relative'>
          <Image
            src='/svgs/twitter.svg'
            width={30}
            height={30}
            alt='Twitter'
            className='min-w-[30px]'
          />
        </div>
        <span className='hidden md:block xl:block text-black text-xs md:absolute left-1 md:bottom-0 md:opacity-[0.5]'>
          003
        </span>
      </div>

      <div className='custom-border border-l-[0.5px] md:border-l-0 about flex justify-center items-center xl:px-[5rem] relative w-full xl:w-auto'>
        <div className='flex flex-col relative'>
          <p className='text-black text-xs lg:text-sm uppercase mx-auto whitespace-nowrap opacity-[0.8]'>
            Launch Game
          </p>
        </div>
        <span className='text-black text-xs absolute left-1 bottom-0 opacity-[0.5]'>
          004
        </span>
      </div>

      <button
        type='button'
        className='menu flex justify-center items-center mx-auto px-2 lg:px-4'
      >
        <Image
          src='/svgs/menu.svg'
          width={30}
          height={30}
          alt='menu'
          className='min-w-[30px]'
        />
      </button>
      {/* <NavMenu toggleMenu={toggleMenu} /> */}
    </nav>
  );
}
