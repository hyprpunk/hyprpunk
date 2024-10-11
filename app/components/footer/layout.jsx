import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full p-4 md:p-6 lg:p-8 mt-16 bg-gray-800 text-white bg-[var(--darkBlue)] animate-border border-t-2">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <Image
          src="/logos/hp_apple_touch_icon.png" 
          alt="HyperPunk Logo"
          width={40}
          height={40}
          className="rounded-full" 
        />
        <p className="text-sm">©2024 HyperPunk</p>
      </div>
      {/* <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 items-center justify-center">
        <a href="/privacy-policy" className="hover:underline text-sm">Privacy Policy</a>
        <a href="/terms" className="hover:underline text-sm">Terms of Service</a>
      </div> */}
      <div className="flex flex-col text-center text-sm mt-4 md:mt-0">
        <p>Contact us</p>
        <p>Email</p>
        <p>Phone Number</p>
      </div>
    </footer>
  );
}