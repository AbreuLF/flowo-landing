import { CheckCircle } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Save time with AI-powered scheduling",
  "Reduce no-shows with smart reminders",
  "Improve productivity with data-driven insights",
  "Seamless integration with your existing tools",
  "Customizable to fit your unique workflow",
];

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <Image
              src="/benefits-illustration.svg"
              alt="Flowo Benefits"
              className="max-w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold mb-6">Why Choose Flowo?</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-2 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
