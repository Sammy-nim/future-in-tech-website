import React, { useState } from 'react';
import { Cloud, Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeSubmenuOpen, setIsHomeSubmenuOpen] = useState(false);
  const [isProductSubmenuOpen, setIsProductSubmenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleHomeSubmenu = () => setIsHomeSubmenuOpen(!isHomeSubmenuOpen);
  const toggleProductSubmenu = () => setIsProductSubmenuOpen(!isProductSubmenuOpen);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsHomeSubmenuOpen(false);
    setIsProductSubmenuOpen(false);
  };

  const productLinks = [
    { name: 'AI', url: 'https://www.hpe.com/kr/ko/solutions/artificial-intelligence/nvidia-collaboration.html' },
    { name: '프라이빗클라우드', url: 'https://www.hpe.com/kr/ko/private-cloud-solutions.html' },
    { name: '슈퍼컴퓨팅', url: 'https://www.hpe.com/kr/ko/supercomputing.html' },
    { name: '컴퓨팅', url: 'https://www.hpe.com/kr/ko/compute.html' },
    { name: '스토리지', url: 'https://www.hpe.com/kr/ko/storage.html' },
    { name: '네트워킹', url: 'https://www.hpe.com/kr/ko/networking.html' },
    { name: '소프트웨어', url: 'https://www.hpe.com/kr/ko/software.html' },
    { name: '서비스', url: 'https://www.hpe.com/kr/ko/services.html' },
  ];

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-white/95 backdrop-blur-md shadow-sm transition-all">
      <div className="flex items-center gap-2 text-2xl font-extrabold text-[#006064]">
        <Cloud className="w-8 h-8 text-[#00838f]" fill="currentColor" fillOpacity={0.2} />
        <span>FUTURE IN TECH</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex gap-8 items-center">
          {/* Home Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 text-sm font-bold text-gray-600 uppercase transition-colors hover:text-[#00838f] py-2">
              Home <ChevronDown size={16} />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
               <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                  <a href="#business-direction" className="block px-5 py-3 text-sm font-medium text-gray-600 hover:text-[#00838f] hover:bg-cyan-50 border-b border-gray-50">
                      사업방향
                  </a>
                  <a href="#organization" className="block px-5 py-3 text-sm font-medium text-gray-600 hover:text-[#00838f] hover:bg-cyan-50 border-b border-gray-50">
                      조직도
                  </a>
                  <a href="#directions" className="block px-5 py-3 text-sm font-medium text-gray-600 hover:text-[#00838f] hover:bg-cyan-50">
                      오시는 길
                  </a>
               </div>
            </div>
          </li>

          {/* Product Dropdown */}
          <li className="relative group">
            <button className="flex items-center gap-1 text-sm font-bold text-gray-600 uppercase transition-colors hover:text-[#00838f] py-2">
              Product <ChevronDown size={16} />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
               <div className="bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden">
                  {productLinks.map((link) => (
                    <a 
                      key={link.name} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block px-5 py-3 text-sm font-medium text-gray-600 hover:text-[#00838f] hover:bg-cyan-50 border-b border-gray-50 last:border-0"
                    >
                      {link.name}
                    </a>
                  ))}
               </div>
            </div>
          </li>

          <li>
            <a href="#careers" className="text-sm font-bold text-gray-600 uppercase transition-colors hover:text-[#00838f]">
              Careers
            </a>
          </li>
          <li>
            <a href="mailto:FiT@futureintech.co.kr" className="text-sm font-bold text-gray-600 uppercase transition-colors hover:text-[#00838f]">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-700 hover:text-[#00838f]"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-lg border-t md:hidden h-[calc(100vh-70px)] overflow-y-auto">
          <ul className="flex flex-col p-4">
            {/* Home Accordion */}
            <li className="border-b border-gray-100">
              <button 
                onClick={toggleHomeSubmenu}
                className="w-full flex items-center justify-between py-4 text-sm font-bold text-gray-600 uppercase hover:text-[#00838f]"
              >
                Home
                {isHomeSubmenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {isHomeSubmenuOpen && (
                <ul className="bg-gray-50 rounded-lg mb-4 overflow-hidden">
                   <li>
                      <a href="#business-direction" onClick={closeMenu} className="block px-6 py-3 text-sm text-gray-500 hover:text-[#00838f]">
                        사업방향
                      </a>
                   </li>
                   <li>
                      <a href="#organization" onClick={closeMenu} className="block px-6 py-3 text-sm text-gray-500 hover:text-[#00838f]">
                        조직도
                      </a>
                   </li>
                   <li>
                      <a href="#directions" onClick={closeMenu} className="block px-6 py-3 text-sm text-gray-500 hover:text-[#00838f]">
                        오시는 길
                      </a>
                   </li>
                </ul>
              )}
            </li>

            {/* Product Accordion */}
            <li className="border-b border-gray-100">
              <button 
                onClick={toggleProductSubmenu}
                className="w-full flex items-center justify-between py-4 text-sm font-bold text-gray-600 uppercase hover:text-[#00838f]"
              >
                Product
                {isProductSubmenuOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              
              {isProductSubmenuOpen && (
                <ul className="bg-gray-50 rounded-lg mb-4 overflow-hidden">
                   {productLinks.map((link) => (
                      <li key={link.name}>
                        <a 
                          href={link.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          onClick={closeMenu} 
                          className="block px-6 py-3 text-sm text-gray-500 hover:text-[#00838f]"
                        >
                          {link.name}
                        </a>
                      </li>
                   ))}
                </ul>
              )}
            </li>

            <li className="border-b border-gray-100">
              <a href="#careers" onClick={closeMenu} className="block py-4 text-center text-sm font-bold text-gray-600 uppercase hover:text-[#00838f]">
                Careers
              </a>
            </li>
            <li>
              <a href="mailto:FiT@futureintech.co.kr" onClick={closeMenu} className="block py-4 text-center text-sm font-bold text-gray-600 uppercase hover:text-[#00838f]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;