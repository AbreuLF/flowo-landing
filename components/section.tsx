import { ReactNode } from 'react'
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'light' | 'gradient' | 'gradient-reverse' | 'primary';
  id?: string;
}

export function Section({ children, className, background = 'white', id }: SectionProps) {
  const bgClasses = {
    'white': 'bg-white',
    'light': 'bg-gray-50',
    'gradient': 'bg-gradient-to-b from-white via-gray-50 to-gray-100',
    'gradient-reverse': 'bg-gradient-to-t from-white via-gray-50 to-gray-100',
    'primary': 'bg-primary text-white'
  }

  return (
    <section id={id} className={cn(
      "py-24",
      bgClasses[background],
      className
    )}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}

