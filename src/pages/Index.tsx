import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle2, BookOpen, Target, BrainCircuit, Zap, Star, ArrowRight, UserCheck, BarChart, AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";
import { MadeWithDyad } from "@/components/made-with-dyad";
import BonusTimer from "@/components/BonusTimer";

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
      <section className="text-center md:text-left py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 md:gap-12 md:items-center">
          
          {/* Text & Mobile Image Wrapper */}
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Aprenda Qualquer Coisa em 20 Horas
            </h1>
            
            {/* --- Mobile-Only Image --- */}
            <div className="md:hidden flex justify-center mb-6">
              <img 
                src="/ebook-cover.png" 
                alt="Capa do Ebook Aprenda Qualquer Coisa em 20 Horas" 
                className="rounded-lg shadow-2xl max-w-xs w-full" 
              />
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-8">
              O Guia Prático para Dominar Novas Habilidades, Destravar seu Potencial e Parar de Abandonar Seus Sonhos no Meio do Caminho.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transform hover:scale-105 transition-transform">
              Quero Meu Ebook Agora! <ArrowRight className="ml-2" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">Acesso imediato. Comece a aprender hoje mesmo.</p>
          </div>

          {/* --- Desktop-Only Image --- */}
          <div className="hidden md:flex justify-center">
            <img 
              src="/ebook-cover.png" 
              alt="Capa do Ebook Aprenda Qualquer Coisa em 20 Horas" 
              className="rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Este guia é para você que...</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg">
            <div className="flex items-start space-x-4">
              <UserCheck className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
              <p>...sente que <span className="font-bold">não tem "talento"</span> para aprender coisas novas e se sente paralisado.</p>
            </div>
            <div className="flex items-start space-x-4">
              <UserCheck className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
              <p>...quer <span className="font-bold">mudar de carreira</span> ou adquirir uma nova habilidade profissional, mas não sabe por onde começar.</p>
            </div>
            <div className="flex items-start space-x-4">
              <UserCheck className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
              <p>...<span className="font-bold">começa vários projetos</span> (aprender um idioma, um instrumento) mas nunca os termina.</p>
            </div>
            <div className="flex items-start space-x-4">
              <UserCheck className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
              <p>...acredita que precisa de <span className="font-bold">10.000 horas</span> para ser bom em algo e se sente desmotivado.</p>
            </div>
            <div className="flex items-start space-x-4">
              <UserCheck className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
              <p>...tem <span className="font-bold">pouco tempo livre</span> e precisa de um método de aprendizado que seja rápido e eficiente.</p>
            </div>
            <div className="flex items-start space-x-4">
              <UserCheck className="w-8 h-8 text-green-500 mt-1 flex-shrink-0" />
              <p>...está cansado de procrastinar e quer um <span className="font-bold">sistema claro e acionável</span> para seguir.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agitation Section */}
      <section className="py-20 px-4 bg-red-50 border-t border-b border-red-200">
        <div className="max-w-5xl mx-auto text-center">
          <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">O Custo da Inércia é Alto Demais</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Continuar no mesmo ciclo de "começar e parar" não te deixa apenas no mesmo lugar. A cada projeto abandonado, você perde tempo, dinheiro e, o mais importante, autoconfiança. As oportunidades de carreira passam, seus sonhos pessoais ficam mais distantes e a frustração se acumula. Não deixe que a falta de um método defina o seu potencial.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Imagine ter um Sistema Passo a Passo para Aprender o que Quiser</h2>
          <p className="text-lg text-indigo-200 mb-12">
            Este ebook não é uma coleção de dicas motivacionais. É um manual de instruções para o seu cérebro. Um método comprovado que transforma o aprendizado de uma tarefa frustrante em um processo rápido, claro e recompensador.
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

      {/* What you'll learn (Expanded Accordion) */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Um Olhar Detalhado Dentro do Método</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold p-4 bg-white rounded-lg shadow hover:bg-slate-100"><Target className="inline-block mr-2 text-blue-600" />Módulo 1: A Fundação (O Fim do Mito do Talento)</AccordionTrigger>
              <AccordionContent className="text-base p-4 bg-white rounded-b-lg">
                Vamos reprogramar sua mente para o sucesso. Você vai descobrir por que a ideia de "talento" é o maior obstáculo ao seu desenvolvimento e como a Regra das 20 Horas de prática focada pode te levar a um nível de proficiência surpreendente em qualquer área, seja música, programação, um novo idioma ou uma habilidade profissional.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold p-4 bg-white rounded-lg shadow hover:bg-slate-100"><BrainCircuit className="inline-block mr-2 text-blue-600" />Módulo 2: Hacks Cerebrais para Retenção Máxima</AccordionTrigger>
              <AccordionContent className="text-base p-4 bg-white rounded-b-lg">
                Aprenda a usar técnicas de neurociência como Recordação Ativa e Repetição Espaçada para garantir que o conhecimento não entre por um ouvido e saia pelo outro. Vou te mostrar como usar ferramentas (muitas gratuitas) para transformar seu cérebro em uma máquina de reter informações importantes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold p-4 bg-white rounded-lg shadow hover:bg-slate-100"><Zap className="inline-block mr-2 text-blue-600" />Módulo 3: Construindo um Sistema à Prova de Falhas</AccordionTrigger>
              <AccordionContent className="text-base p-4 bg-white rounded-b-lg">
                Aprenda a remover as barreiras físicas e mentais que te levam a procrastinar. Vou te guiar em um passo a passo para deconstruir qualquer habilidade e montar um plano semanal de aprendizado tão claro e eficiente que será quase impossível não seguir.
              </AccordionContent>
            </AccordionItem>
             <AccordionItem value="item-4" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold p-4 bg-white rounded-lg shadow hover:bg-slate-100"><BarChart className="inline-block mr-2 text-blue-600" />Módulo 4: Mantendo a Chama Acesa</AccordionTrigger>
              <AccordionContent className="text-base p-4 bg-white rounded-b-lg">
                Motivação não dura. Sistemas sim. Descubra como se manter consistente mesmo nos dias difíceis, como superar os platôs de aprendizado e como usar a comunidade e o feedback para acelerar ainda mais seus resultados.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-slate-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Veja o que os leitores estão dizendo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="italic">"Eu sempre quis aprender a programar, mas desistia em uma semana. Esse método me deu um plano claro e em 1 mês eu construí meu primeiro site. Incrível!"</p>
                    <p className="font-bold mt-4">- Joana S., Designer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/vercel.png" />
                    <AvatarFallback>MP</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="italic">"O conceito de 'prática deliberada' mudou tudo para mim. Parei de perder tempo e comecei a ver progresso real no meu espanhol. Já estou planejando minha viagem!"</p>
                    <p className="font-bold mt-4">- Marcos P., Engenheiro</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Bonus Section */}
      <section className="py-20 px-4 bg-amber-50 border-t border-b border-amber-200">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <Star className="w-12 h-12 text-amber-500 mx-auto md:mx-0 mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">E ainda tem mais...</h2>
            <BonusTimer />
          </div>
          <div className="flex justify-center">
            <img src="/bonus-cover.jpg" alt="Capa do Ebook Bônus: Como Evitar Quedas de Motivação e Manter Constância" className="rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="faq-1" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold p-4 bg-white rounded-lg shadow hover:bg-slate-100"><HelpCircle className="inline-block mr-2 text-blue-600" />Eu preciso de muito tempo livre para aplicar o método?</AccordionTrigger>
              <AccordionContent className="text-base p-4 bg-white rounded-b-lg">
                Não! O método foi desenhado para pessoas ocupadas. Com apenas 45 minutos de prática focada, 3 a 4 vezes por semana, você verá um progresso surpreendente. O segredo está na qualidade da prática, não na quantidade de horas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold p-4 bg-white rounded-lg shadow hover:bg-slate-100"><HelpCircle className="inline-block mr-2 text-blue-600" />Isso funciona para qualquer habilidade?</AccordionTrigger>
              <AccordionContent className="text-base p-4 bg-white rounded-b-lg">
                Sim! Os princípios de aprendizado acelerado são universais. Funciona para habilidades cognitivas (programação, idiomas, marketing), motoras (instrumentos musicais, esportes) e criativas (desenho, escrita).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-3" className="border-b-0">
              <AccordionTrigger className="text-lg font-semibold p-4 bg-white rounded-lg shadow hover:bg-slate-100"><HelpCircle className="inline-block mr-2 text-blue-600" />E se eu não tiver "talento" nenhum?</AccordionTrigger>
              <AccordionContent className="text-base p-4 bg-white rounded-b-lg">
                Este ebook é especialmente para você. Um dos primeiros módulos é dedicado a quebrar o "mito do talento" e provar que qualquer habilidade é treinável com o método certo. O sucesso depende do sistema que você usa, não de um dom inato.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20 px-4 bg-gray-800 text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Chega de adiar seus sonhos.
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            O poder de aprender qualquer coisa está ao seu alcance. Você só precisa do mapa certo. Este é o mapa. Daqui a um mês, você pode estar no mesmo lugar de hoje ou pode estar celebrando o domínio de uma nova habilidade. A escolha é sua.
          </p>
          <Button size="lg" className="text-xl px-10 py-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg animate-pulse">
            Sim, Quero Aprender Mais Rápido!
          </Button>
          <div className="flex items-center justify-center mt-6 space-x-2">
            <ShieldCheck className="w-6 h-6 text-green-400" />
            <p className="text-sm text-gray-400">Compra segura | Acesso imediato | Garantia de 7 dias</p>
          </div>
        </div>
      </section>

      <MadeWithDyad />
    </div>
  );
};

export default Index;