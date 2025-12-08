import { motion } from "framer-motion";

interface FlagButtonProps {
  onFlag: () => void;
}

export default function FlagButton({ onFlag }: FlagButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.stopPropagation();
        onFlag();
      }}
      className="px-2 py-1 rounded-full text-red-600 hover:bg-red-100/60 transition-colors text-xs font-semibold flex items-center gap-1"
      title="Report this pin"
    >
      <span>🚩</span>
      <span>report</span>
    </motion.button>
  );
}
