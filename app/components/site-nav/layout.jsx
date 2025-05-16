import logo from "../../../public/logos/hp_light-logo.png";
import logoMob from "../../../public/logos/hp_logo_two_lines_light.png";
import Link from "next/link";

const navItems = [
  {
    Services: "#services",
  },
  {
    Technologies: "#technologies",
  },
  {
    Projects: "#projects",
  },
  {
    "Contact Us": "#contact",
  },
];

export default function SiteNavLayout() {
  return (
    <header className="h-16 bg-[var(--darkBlue)] z-20 fixed w-full">
      <div className="navbar shadow-sm desk-nav md:flex hidden justify-between">
        <div className="flex">
          <Link href="/" className="inline-flex items-center">
            <img src={logo.src} className="h-12" alt="HyperPunk" />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => {
              const [key] = Object.keys(item);
              return (
                <li key={index}>
                  <a href={item[key]} className="text-sm font-michroma">
                    {key}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="navbar shadow-sm mobile-nav md:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[var(--darkBlue)] z-1 mt-3 w-52 p-2 shadow -left-2"
            >
              {navItems.map((item, index) => {
                const [key] = Object.keys(item);
                return (
                  <li key={index} className="mb-2">
                    <a href={item[key]} className="font-michroma">
                      {key}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">
            <img src={logo.src} className="h-12" alt="" />
          </a>
        </div>
        <div className="navbar-end hidd">
          <button className="btn btn-ghost btn-circle hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle hidden">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
