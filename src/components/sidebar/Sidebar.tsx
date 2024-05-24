import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks, navMenu } from "./navLinks";

export default function Sidebar() {
  const [active, setActive] = useState("");
  return (
    <div className="py-6 w-[15rem] h-screen fixed space-y-12 bg-gray-700 text-gray-300">
      <div className="flex items-center justify-center space-x-2">
        <img src="/letter-d.png" alt="dashboard icon" width={40} height={40} />
        <h1 className="text-lg font-semibold text-slate-400">Dashboard Kit</h1>
      </div>
      <ul>
        {navLinks.map((nav) => (
          <li
            key={nav.name}
            onClick={() => setActive(nav.name)}
            className={`${
              active == nav.name
                ? "bg-gray-600 border-l-2 border-white"
                : ""
            }  py-3 px-10 text-sm`}
          >
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {navMenu.map((nav) => (
          <li
            key={nav.name}
            onClick={() => setActive(nav.name)}
            className={`${
              active == nav.name
                ? "bg-gray-600 border-l-2 border-white"
                : ""
            }  py-3 px-10 text-sm`}
          >
            <Link to={nav.path}>{nav.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
