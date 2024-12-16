"use client";

import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface StatsCardProps {
  icon?: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  value: number;
  label: string;
  suffix?: string;
  decimal?: boolean;
}

export function StatsCard({ value, label, suffix = "" }: StatsCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div className="text-[56px] font-bold leading-tight">
        {inView ? (
          <CountUp end={value} duration={2} separator="," suffix={suffix} />
        ) : (
          "0"
        )}
      </div>
      <div className="text-gray-600 text-lg">{label}</div>
    </div>
  );
}
