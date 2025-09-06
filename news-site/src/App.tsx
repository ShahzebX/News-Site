import { useState } from "react";

import HeroSection from "./HeroSection";
const App = () => {
  const [isActive, setIsActive] = useState("World");

  const navItems = [
    "Politics",
    "World",
    "Economy",
    "Science & Tech",
    "Business",
    "Travel",
    "Climate",
    "Lifestyle",
    "Food",
    "Sports",
  ];

  return (
    <>
      <header className="bg-black text-white w-full h-100 pt-10 px-50 flex flex-col items-center">
        <div className="flex justify-between w-full">
          <h1 className="text-5xl">NEWSLETTER</h1>
          <form action="">
            <input
              className="bg-[rgba(4,89,77,1)] h-10 w-156 py-5 px-10"
              type="text"
              placeholder="Search for headlines"
            />
            <input
              className="bg-[rgba(142,64,66,1)] h-10 w-25"
              type="button"
              value="SEARCH"
            />
          </form>
        </div>
        <nav className="bg-[rgba(26,26,26,1)] flex justify-between w-full mt-10 h-12 px-7">
          <ul className="flex px-5 py-0 flex-1">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setIsActive(item)}
                className={`w-auto px-5 h-full ${
                  item === isActive
                    ? "bg-[rgba(4,89,77,1)]"
                    : "hover:bg-[rgba(4,89,77,1)]"
                }`}
              >
                <a className={`w-full h-full flex items-center`} href="#">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <ul>Time & Weather</ul>
        </nav>
        <section className=""></section>
        <HeroSection></HeroSection>
      </header>
    </>
  );
};

export default App;
