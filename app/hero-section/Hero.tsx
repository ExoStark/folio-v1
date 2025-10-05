import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
// NOTE: You MUST replace this with your own profile image path
import profile from "../../public/profile.webp";
// NOTE: You MUST replace this with your own hero background image
import heroBackground from "../../public/hero.jpg";

const Hero = () => {
  return (
    <motion.section
      // Tighter height, full vertical alignment, strong background
      className="relative z-10 flex h-[100vh] w-full items-center justify-center bg-cover bg-center py-0"
      style={{ backgroundImage: `url(${heroBackground.src})` }}
      id="home"
      initial="initial"
      animate="animate"
    >
      {/* Overlay: Strong dark overlay for high contrast and visual depth */}
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] opacity-90"></motion.div>

      {/* Main Content Container (Centered and Z-indexed) */}
      <div className="relative z-20 flex h-full w-full max-w-[1440px] flex-col items-center justify-center px-6 sm:px-10 lg:px-16">

        {/* Top Header Row (Socials & Contact) */}
        <div className="absolute top-10 flex w-full justify-between items-center">
          {/* Contact Link */}
          <Link
            href="/contact"
            aria-label="GET IN TOUCH"
          >
            <motion.p
              className="text-[14px] font-medium text-[#a1a1a1] transition-colors duration-300 hover:text-[#f1c40f] uppercase tracking-wider"
              variants={bodyAnimation}
            >
              Start a Project
            </motion.p>
          </Link>

          {/* Social Links (GH only) */}
          <div className="flex gap-8 text-[#e4ded7]">
            <Link
              // UPDATE: Replace with YOUR GitHub profile URL
              href="https://github.com/your-github-profile"
              target="_blank"
              aria-label="View GitHub Profile"
            >
              <motion.p
                className="text-[16px] font-bold text-[#e4ded7] md:text-[18px] transition-colors duration-200 hover:text-[#f1c40f]"
                variants={bodyAnimation}
              >
                GH
              </motion.p>
            </Link>
          </div>
        </div>

        {/* Centerpiece: Name and Image - Dynamic Overlap Effect */}
        <div className="relative flex flex-col items-center justify-center pt-24 pb-20">
            
          {/* Name - Bold, Vibrant Color, Tight Leading */}
          <div className={`relative ${monaSans.className}`}>
            <AnimatedWords
                title="HOPE NEXUS" // Your name is now prominently styled
                // Tighter style, bigger font, and a subtle accent color
                style="inline-block overflow-hidden text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[13rem] font-extrabold text-[#e4ded7] leading-none tracking-tight transition-colors duration-500 hover:text-[#f1c40f]"
            />
          </div>

          <motion.div
            // Positioned ABOVE the bottom of the text using negative margin, ensuring the text is readable but visually connected
            className="mt-[-2rem] sm:mt-[-3rem] md:mt-[-4rem] lg:mt-[-5rem] mx-auto transform hover:scale-[1.02] transition-transform duration-500 z-10"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="Hope Nexus profile image"
              data-blobity-tooltip="Freelance Graphic Designer"
              data-blobity-invert="false"
              // STYLING: Circular image border, subtle shadow, and grayscale hover
              className="w-[180px] h-[180px] rounded-full object-cover border-4 border-[#f1c40f] grayscale hover:grayscale-0 md:w-[250px] md:h-[250px] lg:w-[320px] lg:h-[320px] shadow-2xl transition-all duration-700"
            />
          </motion.div>
        </div>
        
        {/* Bottom Taglines and Navigation */}
        <div
          className="absolute bottom-10 flex w-full items-end justify-between"
        >
          {/* Left: Role and Focus - Clear Freelance Status */}
          <motion.div
            className="max-w-[300px] sm:max-w-[400px]"
            variants={bodyAnimation}
          >
            <p className="text-left text-[15px] font-medium text-[#a1a1a1] md:text-[17px] leading-relaxed">
              **Freelance Graphic Designer** crafting **bold visual identities** and **digital experiences**. Your vision, brought to life.
            </p>
          </motion.div>

          {/* Center: Simplified Navbar */}
          <div className="hidden lg:block absolute bottom-0 left-1/2 -translate-x-1/2">
            <nav className="flex gap-10 rounded-full bg-[#181a20] px-8 py-3 shadow-2xl border border-[#333]">
              <Link href="/work" className="text-[#e4ded7] hover:text-[#f1c40f] transition-colors font-medium text-sm tracking-widest">WORK</Link>
              <Link href="/about" className="text-[#e4ded7] hover:text-[#f1c40f] transition-colors font-medium text-sm tracking-widest">ABOUT</Link>
              <Link href="/contact" className="text-[#e4ded7] hover:text-[#f1c40f] transition-colors font-medium text-sm tracking-widest">CONTACT</Link>
            </nav>
          </div>

          {/* Right: Availability and Location */}
          <motion.div
            className="hidden max-w-[300px] sm:block sm:max-w-[400px]"
            variants={bodyAnimation}
          >
            {/* FIXED: Replaced 'I'm' with 'I&apos;m' to resolve the react/no-unescaped-entities error */}
            <p className="text-right text-[15px] font-medium text-[#a1a1a1] md:text-[17px] leading-relaxed">
              Based in **[Your City]**. I&apos;m currently **open for new commissions** and **long-term creative partnerships** globally.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
