export interface FAQItem {
  question: string
  answer: string
  category?: string
}

export interface FAQSectionProps {
  title?: string
  description?: string
  items: FAQItem[]
  className?: string
  showSearch?: boolean
}

