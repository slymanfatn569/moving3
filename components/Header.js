import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter();
  const [activeLink, setActiveLink] = React.useState('/');
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);
  const [areasDropdownOpen, setAreasDropdownOpen] = React.useState(false);
  
  // Update active link when route changes
  React.useEffect(() => {
    setActiveLink(router.pathname);
  }, [router.pathname]);

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { 
      href: '/services', 
      label: 'خدماتنا',
      hasDropdown: true,
      dropdownItems: [
        { href: '/services', label: 'جميع الخدمات' },
        { href: '/services/corporate', label: 'نقل المكاتب والشركات' },
        { href: '/services/packing', label: 'خدمات التغليف المتخصصة' },
        { href: '/services/storage', label: 'خدمات التخزين' },
        { href: '/services/assembly', label: 'فك وتركيب الأثاث' },
      ],
      onClickDropdown: () => {
        setServicesDropdownOpen(!servicesDropdownOpen);
        setAreasDropdownOpen(false);
      },
      isDropdownOpen: servicesDropdownOpen,
    },
    { 
      href: '/areas', 
      label: 'مناطق الخدمة',
      hasDropdown: true,
      dropdownItems: [
        { href: '/areas', label: 'جميع المناطق' },
        { label: 'جدة', isHeader: true },
        { href: '/areas/al-rawdah', label: 'الروضة' },
        { href: '/areas/al-hamra', label: 'الحمراء' },
        { href: '/areas/al-andalus', label: 'الأندلس' },
        { label: 'الرياض', isHeader: true },
        { href: '/areas/al-olaya', label: 'العليا' },
        { href: '/areas/al-malaz', label: 'الملز' },
        { href: '/areas/hittin', label: 'حطين' },
        { label: 'الدمام', isHeader: true },
        { href: '/areas/al-faisaliyah-dammam', label: 'الفيصلية' },
        { href: '/areas/al-shatea', label: 'الشاطئ' },
      ],
      onClickDropdown: () => {
        setAreasDropdownOpen(!areasDropdownOpen);
        setServicesDropdownOpen(false);
      },
      isDropdownOpen: areasDropdownOpen,
    },
    { href: '/blog', label: 'المدونة' },
    { href: '/testimonials', label: 'آراء العملاء' },
    { href: '/contact', label: 'اتصل بنا' }
  ];
  
  React.useEffect(() => {
    // Close dropdowns when clicking outside
    const handleOutsideClick = (event) => {
      if (servicesDropdownOpen || areasDropdownOpen) {
        if (!event.target.closest('.dropdown-container')) {
          setServicesDropdownOpen(false);
          setAreasDropdownOpen(false);
        }
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [servicesDropdownOpen, areasDropdownOpen]);

  return (
    <header className="bg-gradient-to-r from-[#051937] via-[#082451] to-[#0a2647] shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold text-white tracking-wide relative group">
            <Link href="/" passHref>
              <a className="relative z-10 inline-block transform transition-transform duration-300 group-hover:scale-110" onClick={() => setActiveLink('/')}>
                <span className="relative">
                  فخر الخليج
                  <span className="absolute bottom-0 right-0 w-full h-0.5 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
                </span>
              </a>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 space-x-reverse">
            {navLinks.map((link) => (
              <div key={link.href} className="relative dropdown-container">
                {link.hasDropdown ? (
                  <div>
                    <button 
                      className={`navbar-link text-lg px-5 py-2.5 rounded-md mx-1.5 transition-all duration-300 relative overflow-hidden flex items-center
                        ${activeLink.startsWith(link.href) 
                          ? 'bg-secondary text-white font-bold shadow-lg' 
                          : 'text-white hover:bg-white/10 hover:text-accent'}`}
                      onClick={link.onClickDropdown}
                    >
                      <span className="relative">
                        {link.label}
                        {activeLink.startsWith(link.href) && (
                          <span className="absolute bottom-0 right-0 h-0.5 bg-accent w-full"></span>
                        )}
                      </span>
                      <svg className={`h-5 w-5 transition-transform duration-200 mr-1 ${link.isDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {link.isDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-20">
                        <div className="py-2">
                          {link.dropdownItems.map((item, index) => (
                            item.isHeader ? (
                              <div key={index} className="px-4 py-2 text-sm text-gray-600 font-bold border-t border-gray-100 mt-1 bg-gray-50 first:border-t-0 first:mt-0">
                                {item.label}
                              </div>
                            ) : (
                              <Link key={index} href={item.href} passHref>
                                <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary" onClick={() => {
                                  setActiveLink(item.href);
                                  link.onClickDropdown();
                                }}>
                                  {item.label}
                                </a>
                              </Link>
                            )
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={link.href} passHref>
                    <a className={`navbar-link text-lg px-5 py-2.5 rounded-md mx-1.5 transition-all duration-300 relative overflow-hidden
                      ${activeLink === link.href 
                        ? 'bg-secondary text-white font-bold shadow-lg' 
                        : 'text-white hover:bg-white/10 hover:text-accent'}`}
                      onClick={() => setActiveLink(link.href)}>
                      <span className="relative">
                        {link.label}
                        {activeLink === link.href && (
                          <span className="absolute bottom-0 right-0 h-0.5 bg-accent w-full"></span>
                        )}
                      </span>
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-white focus:outline-none hover:text-accent transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {mobileMenuOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? "max-h-[800px] opacity-100 mt-4 border-t border-blue-800" 
              : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col space-y-2 py-3">
            {navLinks.map((link) => (
              <div key={link.href} className="w-full">
                {link.hasDropdown ? (
                  <div>
                    <button
                      className={`w-full navbar-link text-lg px-4 py-3 rounded-md transition-all duration-300 text-center flex justify-between items-center
                        ${activeLink.startsWith(link.href) 
                          ? 'bg-secondary text-white font-bold shadow-md border-r-4 border-accent' 
                          : 'text-white hover:bg-white/10'}`}
                      onClick={link.onClickDropdown}
                    >
                      <span>{link.label}</span>
                      <svg className={`h-5 w-5 transition-transform duration-200 ${link.isDropdownOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div className={`transition-all duration-300 overflow-hidden ${
                      link.isDropdownOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="py-2 bg-gray-900 rounded-md mt-1">
                        {link.dropdownItems.map((item, index) => (
                          item.isHeader ? (
                            <div key={index} className="px-4 py-2 text-xs text-gray-400 font-bold border-t border-gray-800 bg-gray-850 first:border-t-0">
                              {item.label}
                            </div>
                          ) : (
                            <Link key={index} href={item.href} passHref>
                              <a className="block px-6 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white" onClick={() => {
                                setActiveLink(item.href);
                                setMobileMenuOpen(false);
                              }}>
                                {item.label}
                              </a>
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link href={link.href} passHref>
                    <a className={`navbar-link text-lg px-4 py-3 rounded-md transition-all duration-300 text-center block
                      ${activeLink === link.href 
                        ? 'bg-secondary text-white font-bold shadow-md border-r-4 border-accent' 
                        : 'text-white hover:bg-white/10'}`}
                      onClick={() => {
                        setActiveLink(link.href);
                        setMobileMenuOpen(false);
                      }}>
                      {link.label}
                    </a>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 