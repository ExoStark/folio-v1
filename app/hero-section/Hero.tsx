import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
// NOTE: You MUST replace this with your own profile image path
import profile from "../../public/profile.webp"; 
// NOTE: You MUST replace this with your own hero background image
// Be sure to add your new image (e.g., your-hero-bg.jpg) to the public folder and update the path below
import heroBackground from "../../public/hero.jpg"; 

const Hero = () => {
  return (
    <motion.section
      // UPDATED: Using a class for cleaner background styling and a slightly adjusted height for emphasis
      className="relative z-10 flex h-[90vh] w-full items-stretch justify-center bg-cover bg-center py-0 sm:h-[100vh]"
      style={{ backgroundImage: `url(${heroBackground.src})` }}
      id="home"
      initial="initial"
      animate="animate"
    >
      {/* Overlay for contrast */}
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] opacity-75 mix-blend-multiply"></motion.div>

      {/* Top Navigation Links */}
      <div className="absolute top-10 flex w-full justify-between px-6 sm:w-[90%] lg:max-w-[1440px]">
        {/* Contact Button */}
        <div>
          <Link
            // UPDATE: Replace with your actual contact link (e.g., Calendly, Contact Page URL)
            href="/contact" 
            aria-label="GET IN TOUCH"
          >
            <motion.button
              className="hidden rounded-full border-2 border-[#a1a1a1] py-2 px-6 text-[14px] font-semibold text-[#a1a1a1] transition-colors duration-300 hover:border-[#e4ded7] hover:text-[#e4ded7] sm:block md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              GET IN TOUCH
            </motion.button>
          </Link>
        </div>

        {/* Social Links (Only GH remains) */}
        <div className="flex gap-8 text-[#e4ded7] sm:gap-10 md:gap-12">
          <Link
            // UPDATE: Replace with YOUR GitHub profile URL
            href="https://github.com/your-github-profile" 
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[18px] transition-colors duration-200 hover:text-white"
              variants={bodyAnimation}
            >
              GH
            </motion.p>
          </Link>
          
          {/* Removed LN, TW, CO as requested */}
        </div>
      </div>

      {/* Center Content: Name and Image */}
      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          {/* UPDATE: Change "VICTOR WILLIAMS" to YOUR NAME */}
          <AnimatedWords
            title="HOPE NEXUS" 
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4 text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold text-[#e4ded7]"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px] transform hover:scale-105 transition-transform duration-500"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              // UPDATE: Change alt text to your name
              alt="Your name's headshot" 
              data-blobity-tooltip="Your Role"
              data-blobity-invert="false"
              // UPDATED: Adjusted styling for a more pronounced image hover effect
              className="w-[150px] rounded-[16px] border-4 border-[#e4ded7] grayscale hover:grayscale-0 md:w-[220px] md:rounded-[24px] lg:w-[280px] shadow-2xl" 
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Text/Taglines */}
      <div
        className="absolute bottom-10 flex w-full items-center 
        justify-center px-6
        md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        {/* Left Tagline/Bio */}
        <motion.div
          className="max-w-[350px] md:max-w-[400px] lg:max-w-[450px]"
          variants={bodyAnimation}
        >
          {/* UPDATE: Change your role and previous company info */}
          <p className="z-50 text-center text-[16px] font-medium text-[#a1a1a1] md:text-[18px] lg:text-left">
            **[Your Primary Role]** and **[Your Secondary Skill]**, prev at{" "}
            <Link
              // UPDATE: Replace with your previous company's website
              href="https://www.your-prev-company.com/" 
              target="_blank"
              className="underline underline-offset-2 hover:text-[#e4ded7] transition-colors"
              aria-label="Previous Company Website"
            >
              [Company Name],
            </Link>{" "}
            currently available for new challenges.
          </p>
        </motion.div>

        {/* Right Tagline */}
        <motion.div
          className="hidden max-w-[500px] lg:block lg:max-w-[450px]"
          variants={bodyAnimation}
        >
          {/* UPDATE: Change your focus and location */}
          <p className="text-right text-[16px] font-semibold text-[#a1a1a1] md:text-[18px]">
            Building **innovative web solutions** focused on elegant **UX/UI design**, working remotely from **[Your City/Region]**.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
