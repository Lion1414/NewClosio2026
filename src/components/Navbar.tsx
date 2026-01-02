import React, { useEffect, useMemo, useState, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  activeSection?: string;
}

const NAV_ITEMS = [
  { id: 'product', label: 'Product' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'coming-soon', label: 'Coming Soon' },
  { id: 'contact', label: 'Contact' }
];

const DOCS_ITEMS = [
  { path: '/privacy-policy', label: 'Privacy Policy' },
  { path: '/terms-conditions', label: 'Terms & Conditions' },
  { path: '/faqs', label: 'FAQs' }
];

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);
  const docsDropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const sectionIds = useMemo(() => NAV_ITEMS.map((i) => i.id), []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const maxScroll = 300;
          const progress = Math.min(scrollY / maxScroll, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.65],
        rootMargin: '-20% 0px -55% 0px',
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (docsDropdownRef.current && !docsDropdownRef.current.contains(event.target as Node)) {
        setDocsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    } else {
      setActiveSection(id);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full ${
          scrollProgress > 0.3 ? 'py-3' : 'py-4'
        }`}
        style={{
          background: scrollProgress > 0.3 ? '#000000' : 'rgba(0, 0, 0, 0)',
          boxShadow: scrollProgress > 0.3 ? '0 8px 30px rgba(0, 0, 0, 0.25)' : 'none'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                if (isHomePage) {
                  document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              aria-label="Closio - Back to top"
            >
              <img
                src="/closio_main_logo.png"
                alt="Closio"
                className="h-24 w-auto select-none"
                draggable={false}
              />
            </Link>

            {/* Desktop Nav Links - Center */}
            <div className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={handleNavClick(item.id)}
                    className={[
                      'nav-underline-glow',
                      'text-sm font-medium transition-colors',
                      !isActive ? 'text-white/80 hover:text-white' : 'text-[#6ad4f2]',
                      isActive ? 'is-active' : '',
                    ].join(' ')}
                  >
                    {item.label}
                  </a>
                );
              })}

              {/* Docs & FAQs Dropdown */}
              <div className="relative" ref={docsDropdownRef}>
                <button
                  onClick={() => setDocsDropdownOpen(!docsDropdownOpen)}
                  className={`nav-underline-glow text-sm font-medium transition-colors inline-flex items-center gap-1 ${
                    DOCS_ITEMS.some(item => item.path === location.pathname)
                      ? 'text-[#6ad4f2] is-active'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  Docs & FAQs
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${docsDropdownOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>

                {docsDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 py-2 bg-black/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-2xl">
                    {DOCS_ITEMS.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setDocsDropdownOpen(false)}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          location.pathname === item.path
                            ? 'text-[#6ad4f2] bg-[#6ad4f2]/10'
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Buttons - Right */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={handleNavClick('contact')}
                className="bg-white text-black font-medium px-5 py-2 text-sm whitespace-nowrap rounded-lg hover:bg-white/90 transition-colors"
              >
                Book a Demo
              </button>
              <button
                onClick={() => window.location.href = 'https://closio.com/login'}
                className="bg-white text-black font-medium px-5 py-2 text-sm whitespace-nowrap rounded-lg hover:bg-white/90 transition-colors"
              >
                Log In
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="mobile-menu-glass fixed top-[72px] left-0 right-0 mx-4 rounded-2xl shadow-2xl overflow-hidden">
            <div className="py-4 px-2 space-y-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#6ad4f2]/20 text-[#6ad4f2]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Docs & FAQs Section */}
              <div className="pt-3 mt-3 border-t border-white/10">
                <div className="px-4 py-2 text-xs font-semibold text-white/40 uppercase tracking-wider">
                  Docs & FAQs
                </div>
                {DOCS_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`w-full block text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-[#6ad4f2]/20 text-[#6ad4f2]'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4 px-4 space-y-3 border-t border-white/10 mt-4">
                <button
                  onClick={handleNavClick('contact')}
                  className="bg-white text-black font-medium w-full px-5 py-2.5 text-sm rounded-lg hover:bg-white/90 transition-colors"
                >
                  Book a Demo
                </button>
                <button
                  onClick={() => window.location.href = 'https://closio.com/login'}
                  className="bg-white text-black font-medium w-full px-5 py-2.5 text-sm rounded-lg hover:bg-white/90 transition-colors"
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
