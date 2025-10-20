import { Shield, Clock, ThumbsUp } from "lucide-react";

export function TrustSignals() {
  return (
    <div className="flex flex-wrap justify-center gap-8 mb-16">
      <div className="flex flex-col items-center gap-2">
        <Shield className="w-8 h-8 text-primary" />
        <span className="text-sm text-center">Dados Protegidos</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ThumbsUp className="w-8 h-8 text-primary" />
        <span className="text-sm text-center">30 Dias de Garantia</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Clock className="w-8 h-8 text-primary" />
        <span className="text-sm text-center">Suporte 24/7</span>
      </div>
      {/* <div className="flex flex-col items-center gap-2">
        <Award className="w-8 h-8 text-primary" />
        <span className="text-sm text-center">Premiado em 2023</span>
      </div> */}
    </div>
  );
}
