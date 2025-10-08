"use client"
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '@hellouxpavel/cssanimation/css';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section id="sec-bio" className="prose lg:prose-xl">
        <figure className="justify-center h-[35vh] md:h-[50vh] relative">
          <Image
            src="/mt_major_2025.jpg"
            alt="Picture of Adriano at the Mount Major taken in 2025."
            fill
            priority
            className="object-contain mask mask-squircle cssanimation ca__fx-scribbleGlowIn"
          />
        </figure>
        <h1 className="text-center text-primary text-3xl">Hello there! 👋</h1>
        <p className="text-info text-justify">
          I am Adriano, a second-year PhD student at the University of Massachusetts Lowell, advised by <a href="https://pauldownen.com/">Dr. Paul Downen</a>.
        </p>
        <p className="text-info text-justify">
          My current research fascination is to explore how we can merge programming paradigms. My current research bridges the gap between the functional and object-oriented worlds with codata. If this sounds interesting to you, check my current project <Link href="/projects/copy">CoPy</Link>, where I took the converse approach and added copatterns to Python.
        </p>
      </section>
      <footer id="sec-social" className="flex flex-col text-success">
        <h1 className="text-center text-secondary text-2xl md:text-5xl">Find me on:</h1>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 text-5xl md:text-6xl  ">
          <a
            className="hover:text-primary"
            href="mailto:adrianocorbelinoii@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon fontSize="inherit" />
          </a>
          <a
            className="hover:text-primary"
            href="https://www.github.com/adrianoii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="inherit" />
          </a>
        </div>
      </footer>
    </>
  );
}
