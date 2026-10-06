function Process() {
  const steps = [
    {
      number: "01",
      title: "Add Your Business",
      description:
        "Set up your business information, logo and payment details in seconds.",
    },
    {
      number: "02",
      title: "Create an Invoice",
      description:
        "Add your customer, products or services and payment terms with ease.",
    },
    {
      number: "03",
      title: "Send & Track",
      description:
        "Share the invoice through WhatsApp and track payment status in real-time.",
    },
  ];

  return (
    <section className="w-full bg-white px-9 py-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
        {steps.map((step) => (
          <div key={step.number} className="w-full">
            {/* Number */}
            <div className="mb-7">
              <h2 className="text-[44px] font-medium leading-none tracking-tight text-blue-600">
                {step.number}
              </h2>
            </div>

            {/* Divider */}
            <div className="mb-7 h-px w-full bg-black" />

            {/* Title */}
            <h3 className="mb-5 text-[21px] font-medium leading-tight text-black">
              {step.title}
            </h3>

            {/* Description */}
            <p className="max-w-[390px] text-[17px] leading-[1.35] text-black">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Process;