const BuiltFor = () => {
  return (
    <section className="bg-[#f7f7f7] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-[1280px] border-y border-[#222222]">
        {/* TOP TEXT */}
        <p className="py-2 text-center text-[13px] font-medium uppercase tracking-[4px] text-[#38516b] sm:text-[15px]">
          Built for businesses that get things done through WhatsApp.
        </p>

        {/* BUSINESS TYPES */}
        <p className="border-t border-[#222222] py-3 text-center text-[13px] font-medium uppercase tracking-[3px] text-[#071a3d] sm:text-[15px]">
          Fashion <span className="mx-1">·</span>
          Catering <span className="mx-1">·</span>
          Freelancing <span className="mx-1">·</span>
          Agencies <span className="mx-1">·</span>
          Retail <span className="mx-1">·</span>
          Services
        </p>
      </div>
    </section>
  );
};

export default BuiltFor;