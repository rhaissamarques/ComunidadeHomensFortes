import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, User, Phone } from "lucide-react";

export default function FormularioInscricao() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCarregando(true);

    // Simular envio do formulário
    // Você pode conectar isso a um backend real aqui
    setTimeout(() => {
      console.log("Formulário enviado:", formData);
      setEnviado(true);
      setCarregando(false);
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });

      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => setEnviado(false), 5000);
    }, 1000);
  };

  return (
    <div id="formulario" className="py-16 md:py-24 bg-background">
      <div className="container max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Comece Sua Jornada
        </h2>
        <p className="text-center card-foreground/60 mb-12">
          Preencha o formulário abaixo e dê o primeiro passo para se tornar um
          Homem de Verdade
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-card rounded-lg p-8 border border-border shadow-lg"
        >
          {enviado && (
            <div className="mb-6 p-4 bg-primary/10 border border-primary rounded-lg">
              <p className="text-primary font-semibold">
                ✓ Formulário enviado com sucesso! Em breve você receberá mais
                informações.
              </p>
            </div>
          )}

          {/* Nome */}
          <div className="mb-6">
            <label htmlFor="nome" className="block text-sm font-semibold mb-2">
              <User className="inline w-4 h-4 mr-2" />
              Nome Completo *
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="Seu nome completo"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              <Mail className="inline w-4 h-4 mr-2" />
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="seu.email@exemplo.com"
            />
          </div>

          {/* Telefone */}
          <div className="mb-6">
            <label
              htmlFor="telefone"
              className="block text-sm font-semibold mb-2"
            >
              <Phone className="inline w-4 h-4 mr-2" />
              Telefone (WhatsApp)
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              placeholder="(11) 99999-9999"
            />
          </div>

          {/* Mensagem */}
          <div className="mb-8">
            <label
              htmlFor="mensagem"
              className="block text-sm font-semibold mb-2"
            >
              Por que você quer fazer parte da Comunidade Homens Fortes?
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground resize-none"
              placeholder="Conte-nos um pouco sobre você e seus objetivos..."
            />
          </div>

          {/* Botão Submit */}
          <Button
            type="submit"
            disabled={carregando}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 text-lg"
          >
            {carregando ? "Enviando..." : "ENVIAR INSCRIÇÃO"}
          </Button>

          <p className="text-xs text-foreground/50 text-center mt-4">
            Seus dados serão tratados com confidencialidade e segurança.
          </p>
        </form>
      </div>
    </div>
  );
}
