import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub, AiFillLinkedin, AiFillPython, AiFillCprogramming} from 'react-icons/ai';
import Image from "next/image";
import casual from '../public/casualVector.png';
import java from '../public/Java.png';
import cprog from '../public/Cprogramming Logo.png';
import python from '../public/Python Logo.png';
import csharp from '../public/csharp.png';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jim Bebarski</title>
        <meta name="description" content="Jim Bebarski landing page." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=.50"></meta>
      </Head>
      <main className="bg-pan-bottom px-20 md:px-20 lg:px-40  dark:bg-gray-900">  
        <section className="mb-20 "> 
          <nav className="py-10 mb-8 flex justify-between">
            <ul className="flex items-center ">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className={`cursor-pointer text-2xl ${darkMode ? "text-gray-200" : ""}`} /></li>
            </ul>
            <h1 className="slide-in-tl text-5xl font-burtons "></h1>
            <ul className="flex items-center ">
            <li className="pulsate-fwd">
              <a className="bg-gradient-to-r from-indigo-500 to-cyan-600 text-gray-100 px-4 py-2 rounded-md ml-8" href="mailto:jamesbebarski@gmail.com?subject=Subject%20Line&body=Email%20body" target="_blank" rel="noreferrer">Contact Me</a></li>
              <li className="pulsate-fwd"> 
                <a className="bg-gradient-to-r  from-indigo-500 to-cyan-600 text-gray-100 px-4 py-2 rounded-md ml-8" href="http://bit.ly/3JEHAT3" target="_blank" rel="noreferrer">Request Resumé</a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-4"> 
            <h2 className="bounce-in-top text-6xl py-2 gradient-text-name font-extrabold md:text-8xl">Jim Bebarski</h2> 
            <h3 className="bounce-in-top text-3xl py-2 md:text-3xl dark:text-white">Aspiring Game Developer</h3>
            <p className="bounce-in-top text text-md py-2 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">MS, Computer Science Student at Northeastern University</p>
            <p className="bounce-in-top text text-center text-md py-2 leading-4 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white">Follow me on my socials!</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-0 text-indigo-500 ">
            <a href="https://www.linkedin.com/in/jimbebarski/" class="hover:text-blue-500"> <AiFillLinkedin class="fill-current bounce-in-left" /></a>
            <a href="https://github.com/ssloth1" class="hover:text-black"> <AiFillGithub class="fill-current bounce-in-right" /></a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-indigo-600 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 slide-in-elliptic-top-fwd">
            <Image src={casual} alt="Me"  layout="fill" objectFit='cover' className="mx-auto" />
          </div>
        </section>
        <section>
          <div className="px-14">
            <h3 className="text-4xl py-1 dark:text-white">About Me</h3>
            <p className="text-xl py-2 leading-8 text-gray-800 mx-auto dark:text-white">Growing up, I was always captivated by the arts - film, 
            music, painting, and video games. The idea of creating my own video game was a dream that had always fascinated me. However, as I delved 
            deeper into the complexity of what it takes to make a game, my dream felt like a distant reality. I always aspired to have the skills to 
            bring my game ideas to life, but life took me down a different path. In college, I was involved with music and politics, and I eventually 
            landed a job as a legislative aide. Although I was proud of the work I did, helping pass laws and assist constituents, I felt like something 
            was missing. I yearned for a new challenge, a way to express my creativity.</p>
            <p className="text-xl py-2 leading-8 text-gray-800 mx-auto dark:text-white">It wasn&apos;t until my brother, who was studying game design, 
            came home and showed me his projects that I remembered my love for creation. The excitement around the idea of making something sparked a 
            flame in me, and I knew I had to do something about it. I started teaching myself computer science, starting with command-line courses in 
            Codecademy and then moving on to the Python course. I was hooked. I found that I loved learning about computer science and felt 
            intellectually stimulated in a way that I hadn&apos;t in a long time.</p>
            <p className="text-xl py-2 leading-8 text-gray-800 mx-auto dark:text-white">That&apos;s when I discovered the Align program at Northeastern 
            University, a Master of Science in Computer Science program for people with non-CS backgrounds. I applied and was accepted, and I started 
            my journey in the fall of 2022. My first semester was filled with foundational courses in computer science and discrete mathematics, and 
            now I&apos;m taking courses related to data structures, algorithms, and object-oriented design. I&apos;m also using Udemy as a resource for learning 
            game development and working on small side projects.</p>
            <p className="text-xl py-2 leading-8 text-gray-800 mx-auto dark:text-white">I&apos;m so grateful for the opportunity to follow my passion 
            and pursue my dream of creating video games. I&apos;m eager to continue growing my skills and knowledge in the gaming industry and can&apos;t wait 
            to see what the future holds.</p>
          </div>
          <div className= "text-center py-6 mx-auto">
            <div className="">
              <h3 className="text-3xl py-2 dark:text-gray-200 ">Main Programming Languages</h3>
              <div className="images-container justify-center mx-auto py-8" style={{display: "flex", flexWrap: "wrap"}}>
                <Image src={python} alt="Python" className = "mx-12" width={100} height={100} />
                <Image src={csharp} alt="C#" className = "mx-12" width={100} height={100} />
                <Image src={java} alt="Java" className= "mx-12" width={100} height={100} />
                <Image src={cprog} alt="C Programming" className="mx-12"  width={100} height={100} />
              </div>
            </div>
          </div>
        </section>
        <div>
          <h3></h3>
        </div>
      </main>
    </div>
  )
}
