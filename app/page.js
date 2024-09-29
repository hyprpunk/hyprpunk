import ComingSoonLayout from "./components/coming-soon/layout";
import Image from "next/image";
import logo from '../public/logos/hp_logo_two_lines_light.png';

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] text-white mx-[10%] ">
      <main className="flex flex-col gap-16 w-full">

        {/* Project Sections with Alternating Image Positions */}
        <section id="projects" className="flex flex-col gap-16 ">
          {/* First Project - Image on the Left */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image
              src={logo}
              width={300}
              height={200}
              alt="Project 1"
              className="w-full md:w-1/2"
            />
            <div className="w-full md:w-1/2 text-center md:text-left px-4">
              <h2 className="text-xl md:text-2xl font-bold">Project or Client name</h2>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sed nulla in finibus. Maecenas sed dolor tortor. Praesent a tempor tortor, ac commodo felis.
              </p>
            </div>
          </div>

          {/* Second Project - Image on the Right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <Image
              src={logo}
              width={300}
              height={200}
              alt="Project 2"
              className="w-full md:w-1/2"
            />
            <div className="w-full md:w-1/2 text-center md:text-left px-4">
              <h2 className="text-xl md:text-2xl font-bold">Project or Client name</h2>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sed nulla in finibus. Maecenas sed dolor tortor. Praesent a tempor tortor, ac commodo felis.
              </p>
            </div>
          </div>

          {/* Third Project - Image on the Left */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image
              src={logo}
              width={300}
              height={200}
              alt="Project 3"
              className="w-full md:w-1/2"
            />
            <div className="w-full md:w-1/2 text-center md:text-left px-4">
              <h2 className="text-xl md:text-2xl font-bold">Project or Client name</h2>
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sed nulla in finibus. Maecenas sed dolor tortor. Praesent a tempor tortor, ac commodo felis.
              </p>
            </div>
          </div>
        </section>

        {/* Let's Talk About Your Project Section */}
        <section id="contact" className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Let's Talk about Your Project</h2>
            <p className="mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue sed nulla in finibus. Maecenas sed dolor tortor. Praesent a tempor tortor, ac commodo felis.
            </p>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold">Contact Form</h3>
            <form className="flex flex-col gap-4 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded text-black"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded text-black"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded text-black"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col md:flex-row justify-between items-center w-full p-4 mt-16">
        <div className="flex gap-4 items-center">
          <div className="bg-white h-10 w-10 rounded-full"></div> {/* Placeholder for Logo */}
          <p className="text-sm">©2024 HyperPunk</p>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="/privacy-policy" className="hover:underline text-sm">Privacy Policy</a>
          <a href="/terms" className="hover:underline text-sm">Terms of Service</a>
        </div>
        <div className="flex flex-col text-right text-sm mt-4 md:mt-0">
          <p>Contact us</p>
          <p>Email</p>
          <p>Phone Number</p>
        </div>
      </footer>
    </div>
  );
}
