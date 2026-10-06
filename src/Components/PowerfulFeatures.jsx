import {
  FileText,
  MessageCircle,
  TrendingUp,
  UserRound,
  ChartColumnIncreasing,
  FileDown,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Professional Invoices",
    description:
      "Create clean branded invoices in seconds with our premium templates.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Sharing",
    description:
      "Send invoices directly to customers through WhatsApp for instant delivery.",
  },
  {
    icon: TrendingUp,
    title: "Payment Tracking",
    description:
      "Know which invoices are paid, pending or overdue with real-time updates.",
  },
  {
    icon: UserRound,
    title: "Customer Management",
    description:
      "Keep customer information and transaction history organized in one place.",
  },
  {
    icon: ChartColumnIncreasing,
    title: "Revenue Overview",
    description:
      "Understand how much your business has earned and what is still outstanding.",
  },
  {
    icon: FileDown,
    title: "PDF Downloads",
    description:
      "Download professional invoices and receipts whenever you need them.",
  },
];

const PowerfulFeatures = () => {
  return (
    <section className="bg-[#f7f7f7] px-6 py-14 sm:px-10 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        {/* SECTION TITLE */}
        <h2 className="text-[30px] font-semibold leading-tight tracking-[-1.5px] text-[#050505] sm:text-[32px]">
          Powerful Features
        </h2>

        {/* FEATURES GRID */}
        <div className="mt-16 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-[68px]">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="max-w-[310px]">
                {/* ICON */}
                <div className="mb-4 flex h-[30px] w-[30px] items-center justify-center bg-white">
                  <Icon
                    size={31}
                    strokeWidth={1.4}
                    className="text-[#1f2937]"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold leading-5 text-[#050505]">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 max-w-[290px] text-lg leading-[1.35] text-[#111111] sm:text-l">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PowerfulFeatures;