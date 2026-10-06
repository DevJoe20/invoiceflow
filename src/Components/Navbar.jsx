import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="w-full border-b border-gray-100 bg-white">
      <div className="mx-auto flex items-center justify-between px-4 py-5">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="/invoiceflow_logo.jpg"
            alt="InvoiceFlow"
            className="h-8 w-8 rounded-lg"
          />

          <h3 className="ml-2 text-lg font-semibold text-gray-800">
            InvoiceFlow
          </h3>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-10 md:flex">
          <Link
            to="/"
            className="text-[15px] font-medium text-gray-800 transition hover:text-blue-600"
          >
            Home
          </Link>

          <a
            href="#features"
            className="text-[15px] font-medium text-gray-800 transition hover:text-blue-600"
          >
            Features
          </a>

          <a
            href="#how-it-works"
            className="text-[15px] font-medium text-gray-800 transition hover:text-blue-600"
          >
            How It Works
          </a>

          {/* <a
            href="#pricing"
            className="text-[15px] font-medium text-gray-800 transition hover:text-blue-600"
          >
            Pricing
          </a> */}

          <a
            href="#faq"
            className="text-[15px] font-medium text-gray-800 transition hover:text-blue-600"
          >
            FAQ
          </a>
        </div>

        {/* Desktop Right Buttons */}
        <div className="hidden items-center gap-5 md:flex">
          <Link
            to="/signin"
            className="border border-blue-600 px-7 py-2.5 text-[15px] font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Sign In
          </Link>

          <Link
            to="/get-started"
            className="bg-blue-600 px-7 py-2.5 text-[15px] font-medium text-white transition hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center rounded-md p-2 text-gray-800 transition hover:bg-gray-100 md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X size={26} strokeWidth={2} />
          ) : (
            <Menu size={26} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col">
            {/* Home */}
            <Link
              to="/"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-[15px] font-medium text-gray-800 transition hover:text-blue-600"
            >
              Home
            </Link>

            {/* Features */}
            <a
              href="#features"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-[15px] font-medium text-gray-800 transition hover:text-blue-600"
            >
              Features
            </a>

            {/* How It Works */}
            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-[15px] font-medium text-gray-800 transition hover:text-blue-600"
            >
              How It Works
            </a>

            {/* Pricing */}
            {/* <a
              href="#pricing"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-[15px] font-medium text-gray-800 transition hover:text-blue-600"
            >
              Pricing
            </a> */}

            {/* FAQ */}
            <a
              href="#faq"
              onClick={closeMenu}
              className="border-b border-gray-100 py-4 text-[15px] font-medium text-gray-800 transition hover:text-blue-600"
            >
              FAQ
            </a>

            {/* Mobile Buttons */}
            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/signin"
                onClick={closeMenu}
                className="w-full border border-blue-600 px-7 py-3 text-center text-[15px] font-medium text-blue-600 transition hover:bg-blue-50"
              >
                Sign In
              </Link>

              <Link
                to="/get-started"
                onClick={closeMenu}
                className="w-full bg-blue-600 px-7 py-3 text-center text-[15px] font-medium text-white transition hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;