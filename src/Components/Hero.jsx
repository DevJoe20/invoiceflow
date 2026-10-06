const Hero = () => {
  return (
    <section
      className="relative min-h-[650px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/invoice_dashboard.jpg')",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Optional gradient for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1440px] items-center justify-center px-6 py-20 text-center">
        <div className="max-w-[700px]">
          {/* HEADING */}
          <h1 className="text-[42px] font-bold leading-[1.05] tracking-[-2px] text-white sm:text-[52px] lg:text-[64px]">
            Create invoices.
            <br />
            Get paid faster.
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-8 max-w-[600px] text-[15px] leading-7 text-white/90 sm:text-[16px]">
            InvoiceFlow makes it simple for Nigerian businesses to create
            professional invoices, share them with customers and keep track
            of every payment.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/signup"
              className="inline-flex h-[44px] items-center justify-center bg-[#1264ff] px-6 text-[13px] font-semibold text-white transition hover:bg-[#0954df]"
            >
              Start for Free
            </a>

            <a
              href="#how-it-works"
              className="inline-flex h-[44px] items-center justify-center border border-white bg-white/10 px-6 text-[13px] font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#1264ff]"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;