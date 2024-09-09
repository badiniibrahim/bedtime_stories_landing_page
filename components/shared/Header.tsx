import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#0E0E10] text-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-blue-500 transition">
            Bedtime Stories
          </a>
        </div>

        {/*<nav className="hidden md:flex space-x-8">
          <Link href="hero" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link href="about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link href="features" className="hover:text-blue-500 transition">
            Features
          </Link>
          <Link className="hover:text-blue-500 transition" href={""}>
            Pricing
          </Link>
          <a href="/history" className="hover:text-blue-500 transition">
            History
          </a>
        </nav>*/}
      </div>
    </header>
  );
};

export default Header;
