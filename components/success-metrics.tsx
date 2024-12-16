import { motion } from "framer-motion";
import CountUp from "react-countup";

const metrics = [
  { value: 40, suffix: "%", label: "Aumento médio no faturamento" },
  { value: 60, suffix: "%", label: "Redução em faltas de clientes" },
  { value: 25, label: "Horas economizadas por semana" },
  { value: 98, suffix: "%", label: "Satisfação dos clientes" },
];

export default function SuccessMetrics() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Resultados Comprovados do Flowo
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                <CountUp end={metric.value} duration={2} />
                {metric.suffix}
              </div>
              <p className="text-gray-600">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
