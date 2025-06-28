import { useEffect, useState } from "react";

export default function HambergerMenu() {
     const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

//   const handleLinkClick = () => {
//     setMenuOpen(false);
//   };

  // This effect adds/removes a class to the body to handle the blur effect
  // on the content when the menu is open.
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [menuOpen]);
  return (
   <div className="absolute top-0 left-0 z-50 flex w-full items-center bg-black bg-opacity-90 p-4 text-white">
        {/* Hamburger Menu Button */}
        <div
          className="relative z-50 flex h-8 w-8 cursor-pointer flex-col items-center justify-center space-y-1"
          onClick={handleMenuClick}
        >
          <div
            className={`h-0.5 w-5 bg-white transition-all duration-200 ease-in-out ${
              menuOpen ? 'translate-y-1.5 rotate-45' : ''
            }`}
          ></div>
          <div
            className={`h-0.5 w-5 bg-white transition-all duration-200 ease-in-out ${
              menuOpen ? 'opacity-0' : ''
            }`}
          ></div>
          <div
            className={`h-0.5 w-5 bg-white transition-all duration-200 ease-in-out ${
              menuOpen ? '-translate-y-1.5 -rotate-45' : ''
            }`}
          ></div>
        </div>
        <div className="mx-auto text-4xl font-extrabold font-lobster">Logo</div>
      </div>
  )
}
