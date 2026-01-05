import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

const CommissionIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative flex items-end justify-center gap-1">
      <motion.div
        className="w-8 h-8 rounded-full bg-[#6ad4f2]/60 border-2 border-[#6ad4f2]"
        whileHover={{
          scale: 1.2,
          backgroundColor: "rgba(106, 212, 242, 0.9)",
          filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-[#6ad4f2] font-bold text-sm">$</div>
      </motion.div>
      <motion.div
        className="w-10 h-10 rounded-full bg-[#6ad4f2]/70 border-2 border-[#6ad4f2]"
        whileHover={{
          scale: 1.2,
          backgroundColor: "rgba(106, 212, 242, 0.9)",
          filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-[#6ad4f2] font-bold text-base">$</div>
      </motion.div>
      <motion.div
        className="w-12 h-12 rounded-full bg-[#6ad4f2]/80 border-2 border-[#6ad4f2]"
        whileHover={{
          scale: 1.2,
          backgroundColor: "rgba(106, 212, 242, 0.9)",
          filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-[#6ad4f2] font-bold text-lg">$</div>
      </motion.div>
    </div>
  );
};

const BookOfBusinessIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative">
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <motion.rect
          x="20"
          y="20"
          width="60"
          height="50"
          rx="2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.line
          x1="50"
          y1="20"
          x2="50"
          y2="70"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/40"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.line
          x1="30"
          y1="35"
          x2="45"
          y2="35"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.line
          x1="30"
          y1="45"
          x2="45"
          y2="45"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.line
          x1="30"
          y1="55"
          x2="45"
          y2="55"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.line
          x1="55"
          y1="35"
          x2="70"
          y2="35"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.line
          x1="55"
          y1="45"
          x2="70"
          y2="45"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.line
          x1="55"
          y1="55"
          x2="70"
          y2="55"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
      </svg>
    </div>
  );
};

const DashboardIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative">
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <motion.rect
          x="15"
          y="45"
          width="15"
          height="25"
          rx="2"
          fill="currentColor"
          className="text-[#6ad4f2]/60"
          whileHover={{
            height: 35,
            y: 35,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="42.5"
          y="30"
          width="15"
          height="40"
          rx="2"
          fill="currentColor"
          className="text-[#6ad4f2]/70"
          whileHover={{
            height: 50,
            y: 20,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="70"
          y="15"
          width="15"
          height="55"
          rx="2"
          fill="currentColor"
          className="text-[#6ad4f2]/80"
          whileHover={{
            height: 65,
            y: 5,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </svg>
    </div>
  );
};

const PayoutsIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative">
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <motion.polyline
          points="10,60 30,45 50,35 70,20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.circle
          cx="10"
          cy="60"
          r="4"
          fill="currentColor"
          className="text-[#6ad4f2]/70"
          whileHover={{
            scale: 1.5,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.circle
          cx="30"
          cy="45"
          r="4"
          fill="currentColor"
          className="text-[#6ad4f2]/75"
          whileHover={{
            scale: 1.5,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.circle
          cx="50"
          cy="35"
          r="4"
          fill="currentColor"
          className="text-[#6ad4f2]/80"
          whileHover={{
            scale: 1.5,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.circle
          cx="70"
          cy="20"
          r="4"
          fill="currentColor"
          className="text-[#6ad4f2]"
          whileHover={{
            scale: 1.5,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.polyline
          points="65,20 70,15 70,25"
          fill="currentColor"
          className="text-[#6ad4f2]"
          whileHover={{
            scale: 1.2,
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
        />
      </svg>
    </div>
  );
};

const RemindersIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <motion.path
          d="M 40 25 Q 40 15 50 15 Q 60 15 60 25 L 60 40 Q 60 50 50 55 Q 40 50 40 40 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.rect
          x="35"
          y="55"
          width="30"
          height="8"
          rx="2"
          fill="currentColor"
          className="text-[#6ad4f2]/60"
          whileHover={{ fill: "rgb(106, 212, 242)" }}
        />
        <motion.circle
          cx="50"
          cy="12"
          r="2"
          fill="currentColor"
          className="text-[#6ad4f2]/60"
          whileHover={{
            scale: 2,
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.circle
          cx="28"
          cy="25"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[#6ad4f2]/40"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle
          cx="72"
          cy="25"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-[#6ad4f2]/40"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.3, opacity: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
      </svg>
    </div>
  );
};

const CarrierIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative">
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <motion.rect
          x="15"
          y="30"
          width="25"
          height="35"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))" }}
        />
        <motion.rect
          x="60"
          y="30"
          width="25"
          height="35"
          rx="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]", filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 0.8))" }}
        />
        <motion.line
          x1="40"
          y1="47"
          x2="60"
          y2="47"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/50"
          strokeDasharray="3,3"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.rect x="20" y="40" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="28" y="40" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="20" y="50" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="28" y="50" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="65" y="40" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="73" y="40" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="65" y="50" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
        <motion.rect x="73" y="50" width="4" height="6" fill="currentColor" className="text-[#6ad4f2]/60" whileHover={{ fill: "rgb(106, 212, 242)" }} />
      </svg>
    </div>
  );
};

const MobileIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative flex items-center justify-center">
      <svg viewBox="0 0 60 80" className="w-full h-full">
        <motion.rect
          x="15"
          y="5"
          width="30"
          height="70"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#6ad4f2]/60"
          whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
        />
        <motion.rect
          x="20"
          y="15"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/50"
          whileHover={{ fill: "rgb(106, 212, 242)", scale: 1.1, filter: "drop-shadow(0 0 6px rgba(106, 212, 242, 1))" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="32"
          y="15"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/50"
          whileHover={{ fill: "rgb(106, 212, 242)", scale: 1.1, filter: "drop-shadow(0 0 6px rgba(106, 212, 242, 1))" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="20"
          y="27"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/50"
          whileHover={{ fill: "rgb(106, 212, 242)", scale: 1.1, filter: "drop-shadow(0 0 6px rgba(106, 212, 242, 1))" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="32"
          y="27"
          width="8"
          height="8"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/50"
          whileHover={{ fill: "rgb(106, 212, 242)", scale: 1.1, filter: "drop-shadow(0 0 6px rgba(106, 212, 242, 1))" }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.circle
          cx="30"
          cy="67"
          r="3"
          fill="currentColor"
          className="text-[#6ad4f2]/60"
          whileHover={{ scale: 1.3, fill: "rgb(106, 212, 242)" }}
        />
      </svg>
    </div>
  );
};

const LeaderboardIllustration: React.FC = () => {
  return (
    <div className="w-full h-20 relative">
      <svg viewBox="0 0 100 80" className="w-full h-full">
        <motion.rect
          x="15"
          y="45"
          width="20"
          height="25"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/50"
          whileHover={{
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="40"
          y="30"
          width="20"
          height="40"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/70"
          whileHover={{
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.rect
          x="65"
          y="52"
          width="20"
          height="18"
          rx="1"
          fill="currentColor"
          className="text-[#6ad4f2]/40"
          whileHover={{
            fill: "rgb(106, 212, 242)",
            filter: "drop-shadow(0 0 8px rgba(106, 212, 242, 1))",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <motion.text
          x="25"
          y="62"
          textAnchor="middle"
          fill="black"
          fontSize="12"
          fontWeight="bold"
          whileHover={{ scale: 1.2 }}
        >
          2
        </motion.text>
        <motion.text
          x="50"
          y="52"
          textAnchor="middle"
          fill="black"
          fontSize="14"
          fontWeight="bold"
          whileHover={{ scale: 1.2 }}
        >
          1
        </motion.text>
        <motion.text
          x="75"
          y="65"
          textAnchor="middle"
          fill="black"
          fontSize="12"
          fontWeight="bold"
          whileHover={{ scale: 1.2 }}
        >
          3
        </motion.text>
      </svg>
    </div>
  );
};

const HierarchyIllustration: React.FC = () => {
  return (
    <div className="w-full h-36 relative">
      <svg viewBox="0 0 240 140" className="w-full h-full">
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.line
            x1="120"
            y1="28"
            x2="120"
            y2="45"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="40"
            y1="45"
            x2="200"
            y2="45"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="40"
            y1="45"
            x2="40"
            y2="70"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />
          <motion.line
            x1="120"
            y1="45"
            x2="120"
            y2="70"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />
          <motion.line
            x1="200"
            y1="45"
            x2="200"
            y2="70"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="40"
            y1="88"
            x2="40"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="20"
            y1="105"
            x2="60"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="20"
            y1="105"
            x2="20"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />
          <motion.line
            x1="60"
            y1="105"
            x2="60"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="120"
            y1="88"
            x2="120"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="100"
            y1="105"
            x2="140"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="100"
            y1="105"
            x2="100"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />
          <motion.line
            x1="140"
            y1="105"
            x2="140"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="200"
            y1="88"
            x2="200"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="180"
            y1="105"
            x2="220"
            y2="105"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.line
            x1="180"
            y1="105"
            x2="180"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />
          <motion.line
            x1="220"
            y1="105"
            x2="220"
            y2="125"
            stroke="currentColor"
            strokeWidth="2"
            className="text-[#6ad4f2]/50"
            whileHover={{ strokeWidth: 3, className: "text-[#6ad4f2]" }}
          />

          <motion.circle
            cx="120"
            cy="20"
            r="9"
            fill="currentColor"
            className="text-[#6ad4f2]"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <motion.circle
            cx="40"
            cy="79"
            r="8"
            fill="currentColor"
            className="text-[#6ad4f2]/85"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="120"
            cy="79"
            r="8"
            fill="currentColor"
            className="text-[#6ad4f2]/85"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="200"
            cy="79"
            r="8"
            fill="currentColor"
            className="text-[#6ad4f2]/85"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />

          <motion.circle
            cx="20"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="60"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="100"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="140"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="180"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.circle
            cx="220"
            cy="130"
            r="6"
            fill="currentColor"
            className="text-[#6ad4f2]/65"
            whileHover={{
              scale: 1.4,
              filter: "drop-shadow(0 0 12px rgba(106, 212, 242, 1))",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#6ad4f2]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute inset-[1px] rounded-2xl bg-black/40 backdrop-blur-xl" />

      <div className="relative p-8 h-full flex flex-col">
        {icon && (
          <div className="mb-4 text-[#6ad4f2] opacity-80 group-hover:opacity-100 transition-opacity w-full">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: "Commission Tracking",
      description: "Real-time visibility into your commission structure with automated calculations and transparent breakdowns.",
      icon: <CommissionIllustration />,
    },
    {
      title: "Book of Business",
      description: "Manage your entire portfolio of clients and policies in one organized, searchable database.",
      icon: <BookOfBusinessIllustration />,
    },
    {
      title: "Team Hierarchy",
      description: "Visualize your agency structure with clear reporting lines and team performance metrics.",
      icon: <HierarchyIllustration />,
    },
    {
      title: "Dashboard Analytics",
      description: "Powerful insights and metrics to track performance, close rates, and revenue at a glance.",
      icon: <DashboardIllustration />,
    },
    {
      title: "Estimated Payouts",
      description: "Forecast your earnings with intelligent payout predictions based on your pipeline and historical data.",
      icon: <PayoutsIllustration />,
    },
    {
      title: "Automated Reminders",
      description: "Never miss a follow-up with smart notifications for policy renewals and client touchpoints.",
      icon: <RemindersIllustration />,
    },
    {
      title: "Carrier Management",
      description: "Centralize carrier relationships, contracts, and product offerings in one accessible location.",
      icon: <CarrierIllustration />,
    },
    {
      title: "Mobile Access",
      description: "Stay connected on the go with full mobile functionality for agents working in the field.",
      icon: <MobileIllustration />,
    },
    {
      title: "Leaderboards",
      description: "Motivate your team with real-time rankings and performance competitions across your agency.",
      icon: <LeaderboardIllustration />,
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ad4f2] to-[#5ac3e1]">
              Everything You Need
            </span>{' '}
            <span className="text-white">
              to Win
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-3xl mx-auto">
            Purpose-built tools designed specifically for life insurance agents and agencies to streamline workflows and maximize productivity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
