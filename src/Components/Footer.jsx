import { Link } from "react-router-dom";

const SocialIcon = ({ children, className = "" }) => {
  return (
    <a
      href="#"
      className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white transition-opacity hover:opacity-70 ${className}`}
      aria-label="Social media"
    >
      {children}
    </a>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-white px-[42px] pb-[50px] pt-[64px]">
      {/* Top divider */}
      <div className="mb-[62px] h-px w-full bg-black" />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
            <Link
          to="/"
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

          <p className="mt-[18px] max-w-[230px] text-[15px] leading-[1.35] text-black">
            Simple invoicing for modern Nigerian
            <br />
            businesses.
          </p>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-[16px] font-semibold text-black">
            Product
          </h3>

          <nav className="mt-[18px] flex flex-col">
            <a
              href="#features"
              className="text-[15px] leading-[1.3] text-black hover:underline"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="text-[15px] leading-[1.3] text-black hover:underline"
            >
              Pricing
            </a>

            <a
              href="#how-it-works"
              className="text-[15px] leading-[1.3] text-black hover:underline"
            >
              How It Works
            </a>

            <a
              href="#faq"
              className="text-[15px] leading-[1.3] text-black hover:underline"
            >
              FAQ
            </a>
          </nav>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-[16px] font-semibold text-black">
            Company
          </h3>

          <nav className="mt-[18px] flex flex-col">
            <a
              href="#privacy"
              className="text-[15px] leading-[1.3] text-black hover:underline"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-[15px] leading-[1.3] text-black hover:underline"
            >
              Terms
            </a>

            <a
              href="#contact"
              className="text-[15px] leading-[1.3] text-black hover:underline"
            >
              Contact
            </a>

            <a
              href="#support"
              className="text-[15px] leading-[1.3] text-black hover:underline"
            >
              Support
            </a>
          </nav>
        </div>

        {/* Social + Copyright */}
        <div className="flex flex-col items-start md:items-end">
          <div className="flex items-center gap-[15px]">
            {/* Facebook */}
            <SocialIcon className="bg-[#1877F2]">f</SocialIcon>

            {/* Instagram */}
            <SocialIcon className="bg-[#E60023]">◎</SocialIcon>

            {/* YouTube */}
            <SocialIcon className="bg-[#FF0000] text-[9px]">
              ▶
            </SocialIcon>

            {/* X */}
            <SocialIcon className="bg-black text-[10px]">𝕏</SocialIcon>

            {/* LinkedIn */}
            <SocialIcon className="bg-[#0A66C2] text-[9px]">in</SocialIcon>

            {/* TikTok */}
            <SocialIcon className="bg-black text-[10px]">♪</SocialIcon>
          </div>

          <p className="mt-[31px] whitespace-nowrap text-[15px] text-black">
            © {new Date().getFullYear()} InvoiceFlow. All rights reserved.
          </p>
          <p className="text-[14px] text-gray-600">Developed by Oluwatimileyin J. Asha</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;