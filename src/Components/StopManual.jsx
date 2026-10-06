
const StopManual = () => {
  return (
    <section
      className="relative flex min-h-[365px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/invoice_dashboard.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[900px] px-6 py-10 text-center text-white">
        <h1 className="mb-[26px] text-[44px] font-bold leading-[1.15] tracking-[-1px] max-md:text-[34px] max-sm:text-[29px]">
          Stop managing invoices manually.
        </h1>

        <p className="mx-auto mb-[34px] text-[19px] font-bold leading-[1.35] text-white/80 max-md:text-[17px] max-sm:text-[16px]">
          Create professional invoices, track payments and keep your business
          organized
          <br className="max-md:hidden" />
          {" "}— all from one simple platform.
        </p>

        <button
          type="button"
          className="border-0 bg-[#065cff] px-[27px] py-3 text-[16px] font-semibold text-white transition-all duration-200 hover:-translate-y-px hover:bg-[#0048d8] active:translate-y-0"
        >
          Create Your Free Account
        </button>
      </div>
    </section>
  );
};

export default StopManual;