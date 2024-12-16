import { Clock, Calendar, User } from 'lucide-react'

interface GuideSection {
  title: string;
  content: string;
  icon?: React.ElementType;
}

interface GuideContentProps {
  content: {
    title: string;
    author: string;
    publishDate: string;
    readTime: string;
    sections: GuideSection[];
  };
}

export function GuideContent({ content }: GuideContentProps) {
  return (
    <div className="container mx-auto px-4 max-w-3xl">
      <article className="prose lg:prose-xl">
        <div className="flex items-center justify-between mb-8 text-sm text-gray-500">
          <div className="flex items-center">
            <User className="w-4 h-4 mr-2" />
            {content.author}
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {content.publishDate}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-2" />
            {content.readTime}
          </div>
        </div>
        <h1>{content.title}</h1>
        {content.sections.map((section, index) => (
          <section key={index}>
            <h2 className="flex items-center">
              {section.icon && <section.icon className="w-6 h-6 mr-2 text-primary" />}
              {section.title}
            </h2>
            <p>{section.content}</p>
          </section>
        ))}
      </article>
    </div>
  )
}

