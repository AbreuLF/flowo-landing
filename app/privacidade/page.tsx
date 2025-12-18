import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Section } from "@/components/section";
import { Breadcrumb } from "@/components/breadcrumb";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade - Flowo",
  description:
    "Saiba como o Flowo coleta, usa e protege seus dados pessoais em conformidade com a LGPD.",
};

export default function PrivacyPolicyPage() {
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
                  { label: "Política de Privacidade", href: "/privacidade" },
                ]}
              />

              <div className="mt-8 mb-12">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/5 px-3 py-1.5 rounded-full mb-4">
                  <Shield className="w-4 h-4" />
                  LGPD Compliant
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  Política de Privacidade
                </h1>
                <p className="text-gray-600">
                  Última atualização: {new Date().toLocaleDateString("pt-BR", { month: "long", year: "numeric" })}
                </p>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-600 mb-8">
                  A Flowo está comprometida em proteger sua privacidade. Esta política
                  explica como coletamos, usamos e protegemos seus dados pessoais em
                  conformidade com a Lei Geral de Proteção de Dados (LGPD).
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  1. Dados que Coletamos
                </h2>
                <p className="text-gray-600 mb-4">
                  Coletamos os seguintes dados quando você utiliza nossos serviços:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li><strong>Dados de identificação:</strong> nome, e-mail, telefone</li>
                  <li><strong>Dados do negócio:</strong> nome da barbearia, endereço, CNPJ (opcional)</li>
                  <li><strong>Dados de uso:</strong> interações com a plataforma, preferências</li>
                  <li><strong>Dados de clientes:</strong> informações dos clientes que você cadastra para agendamento</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  2. Como Usamos seus Dados
                </h2>
                <p className="text-gray-600 mb-4">
                  Utilizamos seus dados para:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Fornecer e melhorar nossos serviços de agendamento</li>
                  <li>Enviar lembretes e notificações sobre agendamentos</li>
                  <li>Processar pagamentos e emitir notas fiscais</li>
                  <li>Enviar comunicações sobre atualizações do serviço</li>
                  <li>Enviar conteúdo de marketing (apenas com seu consentimento)</li>
                  <li>Cumprir obrigações legais</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  3. Base Legal para Tratamento
                </h2>
                <p className="text-gray-600 mb-6">
                  O tratamento dos seus dados é realizado com base em: execução de contrato
                  (para fornecer o serviço), consentimento (para marketing), cumprimento de
                  obrigação legal (dados fiscais) e legítimo interesse (melhorias do serviço).
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  4. Compartilhamento de Dados
                </h2>
                <p className="text-gray-600 mb-4">
                  Seus dados podem ser compartilhados com:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li><strong>Processadores de pagamento:</strong> para processar transações financeiras</li>
                  <li><strong>Provedores de infraestrutura:</strong> serviços de hospedagem e banco de dados</li>
                  <li><strong>Ferramentas de comunicação:</strong> para envio de mensagens WhatsApp e e-mail</li>
                  <li><strong>Autoridades:</strong> quando exigido por lei</li>
                </ul>
                <p className="text-gray-600 mb-6">
                  Não vendemos seus dados pessoais a terceiros.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  5. Seus Direitos (LGPD)
                </h2>
                <p className="text-gray-600 mb-4">
                  Você tem direito a:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
                  <li>Confirmar a existência de tratamento de dados</li>
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou desatualizados</li>
                  <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários</li>
                  <li>Solicitar portabilidade dos dados</li>
                  <li>Revogar consentimento a qualquer momento</li>
                  <li>Solicitar informações sobre compartilhamento com terceiros</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  6. Retenção de Dados
                </h2>
                <p className="text-gray-600 mb-6">
                  Mantemos seus dados enquanto você tiver uma conta ativa ou conforme necessário
                  para cumprir obrigações legais. Dados fiscais são mantidos por 5 anos conforme
                  legislação brasileira. Após o encerramento da conta, dados não essenciais são
                  excluídos em até 30 dias.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  7. Segurança dos Dados
                </h2>
                <p className="text-gray-600 mb-6">
                  Implementamos medidas técnicas e organizacionais para proteger seus dados,
                  incluindo: criptografia em trânsito e em repouso, controle de acesso,
                  monitoramento de segurança e backups regulares.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  8. Cookies
                </h2>
                <p className="text-gray-600 mb-6">
                  Utilizamos cookies essenciais para o funcionamento do site e cookies de
                  análise para entender como você usa nossos serviços. Você pode gerenciar
                  suas preferências de cookies nas configurações do seu navegador.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  9. Contato
                </h2>
                <p className="text-gray-600 mb-6">
                  Para exercer seus direitos ou esclarecer dúvidas sobre esta política,
                  entre em contato conosco:
                </p>
                <ul className="list-none text-gray-600 space-y-2 mb-6">
                  <li><strong>E-mail:</strong> privacidade@flowo.com.br</li>
                  <li><strong>Encarregado de Dados (DPO):</strong> dpo@flowo.com.br</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
                  10. Alterações nesta Política
                </h2>
                <p className="text-gray-600 mb-6">
                  Podemos atualizar esta política periodicamente. Notificaremos sobre
                  mudanças significativas por e-mail ou através de aviso em nosso site.
                  O uso continuado dos serviços após alterações constitui aceitação da
                  política atualizada.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
