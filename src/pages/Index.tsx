import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle2, BookOpen, Target, BrainCircuit, Zap, Star, ArrowRight } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  const features = [
    "O mito do talento e por que ele está te paralisando.",
    "A Regra das 20 Horas para atingir proficiência funcional rapidamente.",
    "Técnicas de memorização para reter o que aprendeu.",
    "Como remover as barreiras que causam a procrastinação.",
    "Um passo a passo para montar seu plano de aprendizado semanal.",
    "Ferramentas e apps que multiplicam sua velocidade de domínio.",
    "Estratégias para manter a motivação e a consistência a longo prazo."
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              Aprenda Qualquer Coisa em 20 Horas
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              O Guia Prático para Dominar Novas Habilidades, Destravar seu Potencial e Parar de Abandonar Seus Sonhos no Meio do Caminho.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:scale-105 transition-transform">
              Quero Meu Ebook Agora! <ArrowRight className="ml-2" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">Acesso imediato. Comece a aprender hoje mesmo.</p>
          </div>
          <div className="flex justify-center">
            <img src="https://placehold.co/400x500/3b82f6/ffffff?text=Ebook+Cover" alt="Capa do Ebook Aprenda Qualquer Coisa em 20 Horas" className="rounded-lg shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Essa história parece familiar?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
            Você se empolga para aprender algo novo — um idioma, um instrumento, uma habilidade profissional — mas depois de algumas semanas, a motivação desaparece e a frustração toma conta.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-center">Falta de Progresso</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Você pratica, mas sente que não está saindo do lugar, o que te leva a pensar: "acho que não levo jeito para isso".</p>
              </CardContent>
            </Card>
            <Card className="transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-center">O Mito das 10.000 Horas</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A ideia de precisar de uma década para ser bom em algo é paralisante e te faz nem querer começar.</p>
              </CardContent>
            </Card>
            <Card className="transform hover:-translate-y-2 transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-center">Ciclo da Desistência</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Você acumula projetos inacabados e a autoconfiança diminui a cada nova tentativa abandonada.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O problema não é você. É o seu método.</h2>
          <p className="text-lg text-indigo-200 mb-12">
            Este ebook não é sobre "força de vontade". É sobre ter um sistema inteligente que torna o aprendizado rápido, eficiente e motivador.
          </p>
          <Card className="bg-white/90 backdrop-blur-sm text-gray-900 text-left shadow-2xl">
            <CardHeader>
              <div className="flex items-center gap-4">
                <BookOpen className="w-10 h-10 text-blue-600" />
                <CardTitle className="text-2xl">O que você vai encontrar neste guia:</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4 text-lg">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What you'll learn (Accordion) */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Um Olhar por Dentro do Método</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold p-4 bg-white rounded-lg shadow hover:bg-slate-100"><Target className="inline-block mr-2 text-blue-600" />O Fim do Mito do Talento</AccordionTrigger>
              <AccordionContent className="text-base p-4 bg-white rounded-b-lg">
                Descubra por que a ideia de "talento" é o maior obstáculo ao seu desenvolvimento e como a Regra das 20 Horas de prática focada pode te levar a um nível de proficiência surpreendente em qualquer área.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold p-4 bg-white rounded-lg shadow hover:bg-slate-100"><BrainCircuit className="inline-block mr-2 text-blue-600" />Hacks Cerebrais para Retenção</AccordionTrigger>
              <AccordionContent className="text-base p-4 bg-white rounded-b-lg">
                Aprenda a usar técnicas como Recordação Ativa e Repetição Espaçada para garantir que o conhecimento não entre por um ouvido e saia pelo outro. Transforme seu cérebro em uma máquina de reter informações.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold p-4 bg-white rounded-lg shadow hover:bg-slate-100"><Zap className="inline-block mr-2 text-blue-600" />Construindo um Sistema à Prova de Falhas</AccordionTrigger>
              <AccordionContent className="text-base p-4 bg-white rounded-b-lg">
                Aprenda a remover as barreiras que te levam a procrastinar e monte um plano semanal de aprendizado tão claro e eficiente que será quase impossível não seguir.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
      
      {/* Bonus Section */}
      <section className="py-20 px-4 bg-amber-50 border-t border-b border-amber-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Star className="w-12 h-12 text-amber-500 mx-auto md:mx-0 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E ainda tem mais...</h2>
            <h3 className="text-2xl font-bold mb-2 text-amber-700">BÔNUS EXCLUSIVO</h3>
            <p className="text-lg text-gray-600">
              Ao adquirir o ebook, você recebe um **Cheatsheet de 1 Página** com todo o método resumido. Imprima, cole na parede e nunca mais se esqueça do caminho para o aprendizado acelerado!
            </p>
          </div>
          <div className="flex justify-center">
            <img src="https://placehold.co/500x350/f59e0b/ffffff?text=Cheatsheet+Bônus" alt="Bônus Cheatsheet" className="rounded-lg shadow-xl border-4 border-white" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chega de adiar seus sonhos.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            O poder de aprender qualquer coisa está ao seu alcance. Você só precisa do mapa certo. Este é o mapa.
          </p>
          <Button size="lg" className="text-xl px-10 py-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg animate-pulse">
            Sim, Quero Aprender Mais Rápido!
          </Button>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;