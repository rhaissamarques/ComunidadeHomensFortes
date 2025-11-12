import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { APP_LOGO } from "@/const";
import { Heart, Users, Home as HomeIcon, Shield, Zap, ChevronUp, Target } from "lucide-react";
import FormularioInscricao from "@/components/FormularioInscricao";

export default function Home() {
  const [mostrarBotaoTopo, setMostrarBotaoTopo] = useState(false);
  const whatsappLink = "https://chat.whatsapp.com/JOnOaUzaLlr7XBQQ2WFRdB ";
  const formLink = "https://u6k2l.share.hsforms.com/2uEdwV7t9SfuQniCIv4iKCw"; 
  const aulaGratis = "https://comunidadehomensfortes.com.br/a-primeira-aula"
  // Mostrar botão de voltar ao topo quando rolar a página
  useEffect(() => {
    const handleScroll = () => {
      setMostrarBotaoTopo(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollParaTopo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pillars = [
    {
      icon: Heart,
      title: "Vida com Deus",
      subtitle: "Disciplina e Constância",
      description:
        "Um Homem de Verdade começa com Deus. Disciplina espiritual é o alicerce. Sem ela, tudo desaba. Com ela, tudo é possível.",
    },
    {
      icon: Users,
      title: "Casamento",
      subtitle: "Sendo um Marido Melhor",
      description:
        "Liderança servil, sacrifício genuíno e compromisso inabalável. Ser um marido melhor é construir um lar baseado em confiança e amor verdadeiro.",
    },
    {
      icon: HomeIcon,
      title: "Paternidade",
      subtitle: "Sendo um Pai Melhor",
      description:
        "Um legado que transcende gerações. Estar presente, ser exemplo e ensinar seus filhos a serem homens e mulheres de verdade.",
    },
    {
      icon: Shield,
      title: "Vencendo Vícios",
      subtitle: "Liberdade da Pornografia",
      description:
        "Um dos maiores males que assola o homem moderno. Mas você não está sozinho. Homens como você estão vencendo isso AGORA.",
    },
    {
      icon: Zap,
      title: "Enfrentando Dificuldades",
      subtitle: "Força na Adversidade",
      description:
        "A vida do homem é dura. Um Homem de Verdade não nega as dificuldades. Ele as enfrenta de frente, com fé e coragem.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img src={APP_LOGO} alt="Logo" className="h-12 w-12" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-primaryFont">COMUNIDADE</span>
              <span className="text-lg font-bold text-foreground">HOMENS FORTES</span>
            </div>
          </div>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              ENTRAR
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background to-secondary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              QUEM É O{" "}
              <span className="text-primaryFont">HOMEM DE VERDADE?</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              A Verdade está na Palavra de Deus. Um Homem de Verdade é aquele que
              se constrói sobre os princípios bíblicos, vivendo com integridade,
              propósito e excelência em tudo aquilo que faz.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  ENTRAR NO GRUPO WHATSAPP
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="border-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6"
              >
                <a href={formLink} target="_blank" rel="noopener noreferrer">COMEÇAR AGORA</a>
              </Button>
            </div>

            <p className="text-sm md:text-base text-primaryFont font-bold uppercase tracking-wider">
              2026 COMEÇA HOJE
            </p>
            <br />
              <Button
                asChild
                size="lg"
                className="border-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6"
              >
                <a href={aulaGratis} target="_blank" rel="noopener noreferrer">ASSISTIR 1 AULA GRÁTIS</a>
              </Button>
            
          </div>
        </div>
      </section>

      {/* Positioning Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            2026 Será o Melhor Ano das Nossas Vidas
          </h2>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              O ano já começou. E você já sabe disso: <strong>2026 será exatamente o resultado das ações que você começar a tomar AGORA.</strong> Não é coincidência. Não é sorte. É consequência.
            </p>

            <p>
              Você pode continuar como está, ou pode ser parte de um movimento que vai transformar sua vida, sua família e seu legado. A escolha é sua. Mas saiba que <strong>homens como você</strong> já estão começando essa jornada.
            </p>

            <p>
              Eles estão se tornando os homens que Deus espera que sejam. E você pode ser um deles.
            </p>
          </div>
        </div>
      </section>

      {/* The 5 Pillars Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Os 5 Pilares da Transformação
          </h2>
          <p className="text-center text-foreground/60 mb-16 text-lg">
            Construa sua vida sobre estes fundamentos bíblicos
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-lg p-8 border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="mb-4">
                    <Icon className="w-12 h-12 text-primaryFont" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-primaryFont font-semibold mb-4 uppercase">
                    {pillar.subtitle}
                  </p>
                  <p className="text-foreground/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            O Que Você Vai Ganhar
          </h2>

          <p className="text-lg text-foreground/80 leading-relaxed mb-8">
            <strong>Transformação Real, Não Promessas Vazias</strong>
          </p>

          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              Você vai aprender a construir uma vida espiritual sólida e consistente. Você vai descobrir como ser o marido que sua esposa merece. Você vai aprender a ser o pai que seus filhos precisam.
            </p>

            <p>
              Você vai vencer as batalhas que o mantêm preso. E você vai encontrar força para enfrentar qualquer dificuldade que a vida trouxer.
            </p>

            <p className="text-primaryFont font-bold text-lg">
              Mas mais importante que tudo isso: você vai se tornar um Homem de Verdade. Um homem que se respeita. Um homem que respeita a Deus. Um homem que deixa um legado.
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 md:py-24 bg-secondary text-primary-foreground">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            O Tempo Não Espera
          </h2>

          <div className="space-y-6 text-lg leading-relaxed mb-12">
            <p>
              Você pode continuar procrastinando. Pode continuar esperando o "momento certo". Mas sabe o que vai acontecer? Nada. Absolutamente nada.
            </p>

            <p className="text-xl font-bold">
              O momento certo é AGORA. Hoje. Este segundo.
            </p>

            <p>
              Cada dia que passa sem ação é um dia que você não está sendo o homem que poderia ser. É um dia que sua família não está recebendo o melhor de você.
            </p>

            <p className="text-xl font-bold">
              Mas você ainda tem tempo. Você ainda pode começar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold text-lg px-8 py-6"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                ENTRAR NO GRUPO
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-bold text-lg px-8 py-6"
            >
              <a href={formLink} target="_blank" rel="noopener noreferrer">PREENCHER FORMULÁRIO</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial/Reinforcement Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-8 border border-border">
              <p className="text-lg font-bold text-primaryFont mb-4">
                "A Verdade não é opinião."
              </p>
              <p className="text-foreground/70">
                A Verdade é a Palavra de Deus.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <p className="text-lg font-bold text-primaryFont mb-4">
                "Ser forte não é não ter medo."
              </p>
              <p className="text-foreground/70">
                Ser forte é agir apesar do medo.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <p className="text-lg font-bold text-primaryFont mb-4">
                "Seus filhos não precisam de um pai perfeito."
              </p>
              <p className="text-foreground/70">
                Eles precisam de um pai que tenta.
              </p>
            </div>

            <div className="bg-card rounded-lg p-8 border border-border">
              <p className="text-lg font-bold text-primaryFont mb-4">
                "2026 não será diferente porque o calendário mudou."
              </p>
              <p className="text-foreground/70">
                Será diferente porque VOCÊ mudou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-secondary to-secondary/80 text-primary-foreground">
        <div className="container max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comece Sua Transformação Hoje
          </h2>

          <p className="text-lg mb-12 leading-relaxed">
            Escolha uma das opções abaixo e dê o primeiro passo para se tornar o Homem de Verdade que você foi criado para ser.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-bold text-lg px-8 py-6"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                JUNTE-SE À COMUNIDADE
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 font-bold text-lg px-8 py-6"
            >
              <a href={formLink} target="_blank" rel="noopener noreferrer">PREENCHER INSCRIÇÃO</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Formulário de Inscrição */}
      {/* <FormularioInscricao /> */}

      {/* Botão Voltar ao Topo */}
      {mostrarBotaoTopo && (
        <button
          onClick={scrollParaTopo}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary/90 text-primary-foreground p-3 rounded-full shadow-lg transition-all z-40"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Footer */}
      <footer className="bg-footer text-primary-foreground py-12">
        <div className="container text-center">
          <p className="mb-4">
            © 2025 Comunidade Homens Fortes. Todos os direitos reservados.
          </p>
          <p className="text-sm opacity-75">
            Construindo Homens de Verdade, segundo a Palavra de Deus.
          </p>
        </div>
      </footer>
    </div>
  );
}
