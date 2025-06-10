import { CheckCircle, XCircle, Users, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const allFeatures = [
  "Full Online Training",
  "Live Projects",
  "NFT Certificate",
  "Resume & GitHub Review",
  "Premium Networking Event",
  "Sessions by Google/IBM/Walmart Execs",
  "1-on-1 Communication Training",
];

const plans = [
  {
    name: "Core Access",
    price: "₹4,999",
    included: [
      "Full Online Training",
      "Live Projects",
      "NFT Certificate",
      "Resume & GitHub Review",
    ],
  },
  {
    name: "Full Access (Premium)",
    price: "₹6,999",
    included: [
      "Full Online Training",
      "Live Projects",
      "NFT Certificate",
      "Resume & GitHub Review",
      "Premium Networking Event",
      "Sessions by Google/IBM/Walmart Execs",
      "1-on-1 Communication Training",
    ],
    badge: {
      text: "Best Value",
      icon: <Sparkles className="w-4 h-4" />,
    },
  },
  {
    name: "Early Bird",
    price: "₹5,499",
    included: [
      "Full Online Training",
      "Live Projects",
      "NFT Certificate",
      "Resume & GitHub Review",
      "Premium Networking Event",
      "Sessions by Google/IBM/Walmart Execs",
      "1-on-1 Communication Training",
    ],
    badge: {
      text: "Early Bird",
      icon: <Clock className="w-4 h-4" />,
    },
  },
  {
    name: "Group Discount",
    price: "₹5,999",
    included: [
      "Full Online Training",
      "Live Projects",
      "NFT Certificate",
      "Resume & GitHub Review",
      "Premium Networking Event",
      "Sessions by Google/IBM/Walmart Execs",
      "1-on-1 Communication Training",
    ],
    badge: {
      text: "Group",
      icon: <Users className="w-4 h-4" />,
    },
  },
];

function PricingTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        delay: 0.2,
      }}
      className="overflow-x-auto py-10"
    >
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 text-lg font-semibold text-heading">
              Features
            </th>
            {plans.map((plan, index) => (
              <th key={index} className="p-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-xl font-bold text-heading font-title">
                    {plan.name}
                  </span>
                  <span className="text-accent text-lg font-semibold">
                    {plan.price}
                  </span>
                  {plan.badge && (
                    <span className="mt-1 px-2 py-0.5 bg-accent text-background text-xs rounded-full flex items-center gap-1">
                      {plan.badge.icon}
                      {plan.badge.text}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {allFeatures.map((feature, rowIdx) => (
            <tr
              key={rowIdx}
              className={`border-t border-border ${
                rowIdx % 2 === 0 ? "bg-muted/10" : ""
              }`}
            >
              <td className="p-4 text-sm text-muted font-medium">{feature}</td>
              {plans.map((plan, colIdx) => {
                const isIncluded = plan.included.includes(feature);
                return (
                  <td
                    key={colIdx}
                    className={`p-4 text-center ${
                      isIncluded ? "text-heading" : "text-muted opacity-50"
                    }`}
                  >
                    {isIncluded ? (
                      <CheckCircle className="mx-auto w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="mx-auto w-5 h-5 text-muted" />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

export default PricingTable;
