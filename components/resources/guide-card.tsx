import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface GuideCardProps {
  title: string
  description: string
  href: string
  readTime: string
  tags: string[]
  icon: React.ElementType
  sellHook: string
}

export function GuideCard({ title, description, href, readTime, tags, icon: Icon, sellHook }: GuideCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <Icon className="w-8 h-8 text-primary mr-3" />
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="w-4 h-4 mr-1" />
            {readTime}
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary">
                <Tag className="w-3 h-3 mr-1" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
        <p className="text-primary font-semibold mb-4">{sellHook}</p>
        <Button asChild className="w-full">
          <Link href={href}>
            Ler mais <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

