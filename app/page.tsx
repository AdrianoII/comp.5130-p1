"use client"
import Image from "next/image";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <section id="sec-bio" className="">
          <Image
            className=""
            src="/mt_major_2025.jpg"
            alt="Picture of Adriano at the Mount Major taken in 2025."
            width={300}
            height={300}
            // fill
            // sizes="(max-width: 2000px) 33vw,(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
            priority
          />
          <p>
            Hello there! 👋
            <br />
            At the moment, this is just a placeholder text for my bio.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at nisl non magna maximus volutpat. Phasellus elementum lorem eget tellus commodo pellentesque. Vivamus elementum efficitur nulla, ut consectetur nunc imperdiet quis. Ut arcu purus, euismod sit amet justo a, tempor fringilla ante. In facilisis odio quis ante elementum vulputate. Vestibulum molestie diam id sem dapibus bibendum. Vestibulum quis venenatis enim. Mauris semper lectus vitae mi posuere porta. Donec varius faucibus velit sit amet ultricies. Mauris in ornare ex. Fusce facilisis consectetur erat, sed vulputate eros pellentesque at.
          </p>
        </section>

        <footer id="sec-social" className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="mailto:adrianocorbelinoii@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon fontSize="large"/>
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.github.com/adrianoii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large"/>
          </a>
        </footer>
      </main>
    </div>
  );
}
