const Footer = () => {
  return (
    <footer className="sm:px-10 px-5 pt-7 pb-3 border-t border-[#1C1C21] bg-[#0E0E10] flex flex-wrap justify-between items-center gap-5">
      <div className="text-white-500 flex gap-4">
        <a
          href="https://sites.google.com/view/bedtime-stories-badini/terms-of-service"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors duration-200"
        >
          Terms & Conditions
        </a>
        <span>|</span>
        <a
          href="https://sites.google.com/view/bedtime-stories-badini/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-yellow-400 transition-colors duration-200"
        >
          Privacy Policy
        </a>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/badiniibrahim"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full flex justify-center items-center bg-black border border-gray-600 hover:bg-gray-800 transition-colors duration-200"
        >
          <img src="/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500 text-center w-full md:w-auto">
        © 2024 SAWADOGO Badini Ibrahim. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
