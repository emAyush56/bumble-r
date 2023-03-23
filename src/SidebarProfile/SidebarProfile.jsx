import UserPhoto from "../assets/user-profile-photo.jpg";
import { Link, NavLink } from "react-router-dom";

function SidebarProfile() {
  const navLinks = [
    {
      name: "Edit",
      href: "/edit-profile",
    },
    {
      name: "Settings",
      href: "/settings",
    },
    {
      name: "Contact and FAQs",
      href: "/faq",
    },
    {
      name: "Logout",
      href: "/",
    },
  ];
  return (
    <div className="sticky top-0 flex h-screen w-full flex-col">
      <Link to="/">
        <header className="relative flex h-[4.5rem] w-full cursor-pointer items-center gap-3 px-6 transition-all hover:bg-gray-50/50">
          <div className="back-icon absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3.5}
              stroke="currentColor"
              className="h-5 w-5 text-gray-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div className="user-photo mx-auto">
            <img src={UserPhoto} alt="User" className="h-11 rounded-full" />
          </div>
        </header>
      </Link>
      <div className="matches flex-1 px-6 pt-3">
        <ul className="space-y-2 text-[13px] text-gray-800">
          <li>
            <Link className="relative flex w-full cursor-pointer items-center rounded-full bg-amber-100/50 py-3.5 px-2">
              <span className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-y-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="mx-auto">Activate Spotlight</span>
            </Link>
          </li>

          <li>
            <Link className="relative flex w-full cursor-pointer items-center rounded-full bg-teal-100/50 py-3.5 px-2">
              <span className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-teal-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="mx-auto">Upgrade to Bumble Boost</span>
            </Link>
          </li>
          <li>
            <Link className="relative flex w-full cursor-pointer items-center rounded-full bg-gray-300/70 py-3.5 px-2">
              <span className="absolute flex h-8 w-8 items-center justify-center rounded-full bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-white"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="mx-auto">Upgrade to Bumble Premium</span>
            </Link>
          </li>
        </ul>

        <ul className="mt-4 space-y-2 text-[15px] font-semibold tracking-wider text-gray-800">
          {navLinks.map((link) => {
            return (
              <li key={link.name}>
                <NavLink to={link.href} className="flex text-center">
                  {({ isActive }) => {
                    return (
                      <span
                        className={`mx-auto w-full rounded-full py-3 px-2 ${
                          isActive
                            ? "cursor-default"
                            : "text-gray-500 transition-all hover:bg-gray-50/50"
                        }`}
                      >
                        {link.name}
                      </span>
                    );
                  }}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SidebarProfile;
