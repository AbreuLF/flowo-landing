import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Termos de Uso - Flowo",
  description:
    "Termos e condições de uso da plataforma Flowo de agendamento para barbearias.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <Section background="white" className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Breadcrumb
                items={[
                  { label: "Início", href: "/" },
                  { label: "Termos de Uso", href: "/termos" },
                ]}
              />

              <div className="mt-8 mb-12">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full mb-4">
                  <FileText className="w-4 h-4" />
                  Termos Legais
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Termos de Uso
                </h1>
                <p className="text-gray-600">
                  Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
                </p>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 mb-8">
                  Ao usar o Flowo, você concorda com estes termos. Leia-os atentamente
                  antes de utilizar nossa plataforma.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  1. Aceitação dos Termos
                </h2>
                <p className="text-gray-600 mb-6">
                  Ao acessar ou usar o Flowo, você concorda em cumprir estes Termos de Uso
                  e nossa Política de Privacidade. Se você não concordar com algum termo,
                  não utilize nossos serviços.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  2. Descrição do Serviço
                </h2>
                <p className="text-gray-600 mb-6">
                  O Flowo é uma plataforma de agendamento online que permite a barbearias
                  e estabelecimentos similares gerenciar agendamentos via WhatsApp com
                  assistência de inteligência artificial. O serviço inclui: agendamento
                  automatizado, lembretes, gestão de equipe, relatórios e integrações.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  3. Cadastro e Conta
                </h2>
                <p className="text-gray-600 mb-4">
                  Para usar o Flowo, você deve:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Ter pelo menos 18 anos de idade</li>
                  <li>Fornecer informações verdadeiras e completas</li>
                  <li>Manter suas credenciais de acesso em sigilo</li>
                  <li>Ser responsável por todas as atividades em sua conta</li>
                  <li>Notificar-nos imediatamente sobre uso não autorizado</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  4. Planos e Pagamentos
                </h2>
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  4.1 Período de Teste
                </h3>
                <p className="text-gray-600 mb-4">
                  Oferecemos 14 dias de teste gratuito. Não é necessário cartão de crédito
                  para iniciar o teste. Ao final do período, você pode escolher um plano
                  pago ou sua conta será suspensa.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  4.2 Cobrança
                </h3>
                <p className="text-gray-600 mb-4">
                  Os planos são cobrados mensalmente ou anualmente, conforme sua escolha.
                  O pagamento pode ser feito via PIX, cartão de crédito ou boleto. A
                  cobrança é realizada no início de cada ciclo de faturamento.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                  4.3 Cancelamento e Reembolso
                </h3>
                <p className="text-gray-600 mb-6">
                  Você pode cancelar sua assinatura a qualquer momento. O acesso continua
                  até o final do período já pago. Não oferecemos reembolso proporcional
                  para cancelamentos no meio do ciclo, exceto em casos previstos pelo
                  Código de Defesa do Consumidor.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  5. Uso Aceitável
                </h2>
                <p className="text-gray-600 mb-4">
                  Você concorda em não:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Usar o serviço para atividades ilegais</li>
                  <li>Enviar spam ou mensagens não solicitadas</li>
                  <li>Tentar acessar sistemas ou dados sem autorização</li>
                  <li>Interferir no funcionamento do serviço</li>
                  <li>Revender ou redistribuir o serviço sem autorização</li>
                  <li>Violar direitos de propriedade intelectual</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  6. Dados dos Clientes
                </h2>
                <p className="text-gray-600 mb-6">
                  Você é responsável por obter consentimento dos seus clientes para
                  armazenar seus dados e enviar comunicações via WhatsApp. O Flowo
                  atua como operador de dados, e você como controlador. Você deve
                  cumprir a LGPD em relação aos dados dos seus clientes.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  7. Propriedade Intelectual
                </h2>
                <p className="text-gray-600 mb-6">
                  O Flowo e todo seu conteúdo, funcionalidades e tecnologia são de
                  propriedade exclusiva da Flowo ou seus licenciadores. Você recebe
                  uma licença limitada, não exclusiva e não transferível para usar
                  o serviço conforme estes termos.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  8. Limitação de Responsabilidade
                </h2>
                <p className="text-gray-600 mb-6">
                  O Flowo é fornecido &quot;como está&quot;. Não garantimos que o serviço será
                  ininterrupto ou livre de erros. Nossa responsabilidade é limitada ao
                  valor pago pelo serviço nos últimos 12 meses. Não nos responsabilizamos
                  por danos indiretos, lucros cessantes ou perda de dados.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  9. Disponibilidade do Serviço
                </h2>
                <p className="text-gray-600 mb-6">
                  Nos esforçamos para manter o serviço disponível 24/7, mas podem ocorrer
                  interrupções para manutenção ou por fatores fora do nosso controle.
                  Notificaremos sobre manutenções programadas com antecedência quando possível.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  10. Suspensão e Encerramento
                </h2>
                <p className="text-gray-600 mb-6">
                  Podemos suspender ou encerrar sua conta se você violar estes termos,
                  não realizar pagamentos ou por determinação legal. Você pode encerrar
                  sua conta a qualquer momento através das configurações ou entrando em
                  contato conosco.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  11. Alterações nos Termos
                </h2>
                <p className="text-gray-600 mb-6">
                  Podemos modificar estes termos a qualquer momento. Alterações
                  significativas serão comunicadas por e-mail ou aviso no serviço com
                  pelo menos 30 dias de antecedência. O uso continuado após alterações
                  constitui aceitação dos novos termos.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  12. Lei Aplicável e Foro
                </h2>
                <p className="text-gray-600 mb-6">
                  Estes termos são regidos pelas leis brasileiras. Qualquer disputa será
                  resolvida no foro da comarca de São Paulo, SP, com exceção de casos
                  onde o Código de Defesa do Consumidor determinar foro diferente.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  13. Contato
                </h2>
                <p className="text-gray-600 mb-6">
                  Para dúvidas sobre estes termos, entre em contato:
                </p>
                <ul className="list-none text-gray-600 space-y-2 mb-6">
                  <li><strong>E-mail:</strong> contato@flowo.com.br</li>
                  <li><strong>Site:</strong> flowo.com.br</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
