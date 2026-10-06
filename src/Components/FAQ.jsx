import { useState } from "react";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does InvoiceFlow work?",
      answer:
        "It's simple: add your business details, create a professional invoice, and send it directly to your customers via WhatsApp. You'll then track every payment in real-time.",
    },
    {
      question: "Can I send invoices through WhatsApp?",
      answer:
        "Absolutely. Our platform is built for WhatsApp-based businesses. You can generate invoices and send them directly to your customers' phones instantly.",
    },
    {
      question: "Can customers pay online?",
      answer:
        "Yes. Once you send an invoice via WhatsApp, your customers can pay directly through the platform using secure payment methods.",
    },
    {
      question: "Can I download invoices as PDF?",
      answer:
        "Yes, you can download professional PDFs and receipts whenever you need them for your records or for sharing with clients.",
    },
    {
      question: "Is InvoiceFlow free?",
      answer:
        "We offer a free plan with basic features to help you get started. For more advanced tracking and branding, our paid plans provide everything you need.",
    },
    {
      question: "Can I use my business logo?",
      answer:
        "Yes. You can upload your logo and brand colors to ensure your invoices look exactly like your brand identity.",
    },
    {
      question: "Can I manage multiple customers?",
      answer:
        "Yes, you can manage all your clients and their transaction history in one centralized dashboard.",
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <h2 className="mb-7 text-[24px] font-medium leading-tight text-black">
          Common Questions
        </h2>

        <div className="max-w-[1000px]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-black py-5 first:border-t"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between text-left"
                >
                  <h3 className="text-xl font-medium text-black">
                    {faq.question}
                  </h3>

                  <span className="ml-4 text-lg">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 max-w-[900px] text-md leading-[1.5] text-black">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;