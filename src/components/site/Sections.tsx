import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Scale, Briefcase, Building2, Users, Heart, Sparkles,
  Plus, Minus, MapPin, Mail, Phone, Instagram, Linkedin, MessageCircle,
  ArrowUpRight, Quote, ChevronLeft, ChevronRight,
} from "lucide-react";
import { Reveal, SectionLabel } from "./Reveal";

/* ---------------- ABOUT ---------------- */
export function About() {
  const stats = [
    { n: "15+", l: "Anos de atuação" },
    { n: "480", l: "Causas conduzidas" },
    { n: "92%", l: "Êxito em mérito" },
    { n: "06", l: "Áreas de especialização" },
  ];
  return (
    <section id="sobre" className="relative border-t border-border py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel n="01">Sobre o Escritório</SectionLabel>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Uma advocacia <span className="italic gradient-gold-text">discreta</span>,
              construída para decisões de consequência.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="space-y-6 text-[15px] leading-relaxed text-muted-foreground lg:col-span-5 lg:pt-3">
            <p>
              Helena Vasconcellos fundou o escritório com uma convicção simples:
              causas complexas exigem leitura precisa de cenário, não volume de
              palavras. Mestre em Direito Civil pela USP e LL.M. em Direito
              Empresarial pelo Insper.
            </p>
            <p>
              Atende clientes individuais de alto patrimônio e empresas de
              médio porte em São Paulo e em todo o território nacional, com
              redes de correspondentes selecionadas.
            </p>
            <p className="text-foreground/90">
              <span className="text-gold">Missão.</span> Transformar
              complexidade jurídica em clareza estratégica — com transparência,
              ética e resultado mensurável.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div className="group flex h-full flex-col justify-between bg-background p-8 transition-colors hover:bg-card lg:p-10">
                <div className="font-display text-6xl tracking-tight gradient-gold-text lg:text-7xl">
                  {s.n}
                </div>
                <div className="mt-8 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AREAS ---------------- */
const areas = [
  { icon: Scale, t: "Direito Civil", d: "Contratos, responsabilidade civil, sucessões e patrimônio familiar." },
  { icon: Briefcase, t: "Direito Trabalhista", d: "Defesa empresarial e individual em conflitos e auditoria preventiva." },
  { icon: Building2, t: "Direito Empresarial", d: "Societário, M&A, governança e contratos comerciais sob medida." },
  { icon: Heart, t: "Direito de Família", d: "Divórcios, guarda, planejamento sucessório e acordos privados." },
  { icon: Users, t: "Direito Previdenciário", d: "Aposentadorias estratégicas, revisões e planejamento de longo prazo." },
  { icon: Sparkles, t: "Consultoria Jurídica", d: "Pareceres, due diligence e assessoria continuada para decisões críticas." },
];

export function Areas() {
  return (
    <section id="areas" className="relative border-t border-border py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel n="02">Áreas de Atuação</SectionLabel>
        <Reveal>
          <h2 className="mb-20 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            Especialização vertical em <span className="italic gradient-gold-text">seis frentes</span>.
          </h2>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.t} delay={(i % 3) * 0.08}>
              <div className="group relative h-full overflow-hidden bg-background p-10 transition-all duration-700 hover:bg-card">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <a.icon
                  size={28}
                  strokeWidth={1.2}
                  className="text-gold transition-transform duration-700 group-hover:-translate-y-1"
                />
                <h3 className="mt-10 font-display text-3xl tracking-tight">{a.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
                <ArrowUpRight
                  size={18}
                  className="absolute right-8 top-8 text-muted-foreground opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold group-hover:opacity-100"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CASES / RESULTS ---------------- */
const cases = [
  { y: "2024", t: "Reestruturação societária — grupo familiar", d: "Conduzido acordo entre sucessores com preservação integral do patrimônio operacional.", tag: "Empresarial" },
  { y: "2023", t: "Acordo extrajudicial — litígio trabalhista coletivo", d: "Mediação concluída em 90 dias, evitando processo de longo curso.", tag: "Trabalhista" },
  { y: "2022", t: "Planejamento sucessório multipatrimonial", d: "Estrutura holding com governança aprovada e mecanismos de continuidade.", tag: "Civil" },
  { y: "2021", t: "Defesa de M&A — empresa de tecnologia", d: "Due diligence reversa e blindagem contratual em operação de R$ 80M.", tag: "Empresarial" },
];

export function Cases() {
  return (
    <section id="casos" className="relative border-t border-border py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel n="03">Casos & Resultados</SectionLabel>
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Trajetória feita de <span className="italic gradient-gold-text">decisões</span>, não de promessas.
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Casos selecionados — apresentados sem dados sensíveis, em respeito
              ao sigilo profissional. Cada linha representa um problema real
              resolvido.
            </p>
          </Reveal>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              {cases.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.1}>
                  <div className="group relative grid grid-cols-[auto_1fr] gap-8 py-8">
                    <div className="relative pt-2">
                      <span className="block h-4 w-4 rounded-full border border-gold/50 bg-background transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_0_20px_oklch(0.82_0.09_82/0.6)]" />
                    </div>
                    <div className="border-b border-border/60 pb-8">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-display text-2xl text-gold">{c.y}</span>
                        <span className="rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                          {c.tag}
                        </span>
                      </div>
                      <h3 className="mt-3 font-display text-2xl leading-snug tracking-tight md:text-3xl">
                        {c.t}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const quotes = [
  { q: "Helena conduziu um processo delicado da nossa família com a discrição e a firmeza que esperávamos. Resultado impecável.", a: "C.M.", r: "Cliente privado · Direito de Família" },
  { q: "Estratégica, técnica e absolutamente confiável. Reorganizamos toda a estrutura societária em quatro meses, sem desgaste.", a: "R.A.", r: "CEO · Grupo industrial" },
  { q: "É raro encontrar uma advogada que combina elegância, leitura analítica e velocidade de decisão. Recomendo sem reservas.", a: "P.O.", r: "Diretor jurídico · Tech" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % quotes.length);
  const prev = () => setI((v) => (v - 1 + quotes.length) % quotes.length);

  return (
    <section id="depoimentos" className="relative border-t border-border py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel n="04">Depoimentos</SectionLabel>
        <Reveal>
          <div className="relative overflow-hidden rounded-sm border border-border bg-card/40 p-10 md:p-16 lg:p-20">
            <Quote className="absolute -left-4 -top-6 text-gold/15" size={160} strokeWidth={0.6} />
            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
                  className="font-display text-3xl leading-snug tracking-tight md:text-4xl lg:text-5xl"
                >
                  “{quotes[i].q}”
                  <footer className="mt-10 flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    <span className="h-px w-10 bg-gold/60" />
                    <span className="text-foreground">{quotes[i].a}</span>
                    <span>· {quotes[i].r}</span>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>

            <div className="mt-12 flex items-center justify-between">
              <div className="flex gap-2">
                {quotes.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Depoimento ${idx + 1}`}
                    onClick={() => setI(idx)}
                    className={`h-px transition-all duration-500 ${
                      idx === i ? "w-12 bg-gold" : "w-6 bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button aria-label="Anterior" onClick={prev} className="rounded-full border border-border p-3 transition-colors hover:border-gold hover:text-gold">
                  <ChevronLeft size={16} />
                </button>
                <button aria-label="Próximo" onClick={next} className="rounded-full border border-border p-3 transition-colors hover:border-gold hover:text-gold">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- DIFFERENTIALS ---------------- */
const diffs = [
  { t: "Atendimento humanizado", d: "Escuta ativa, linguagem clara, presença real em cada etapa." },
  { t: "Estratégia personalizada", d: "Plano de ação desenhado para o seu cenário, não para o manual." },
  { t: "Transparência total", d: "Honorários, prazos e expectativas pactuados desde o primeiro dia." },
  { t: "Agilidade decisória", d: "Respostas em até 24h. Movimentações processuais reportadas em tempo real." },
  { t: "Especialização vertical", d: "Atuação concentrada em áreas onde a profundidade técnica faz diferença." },
  { t: "Discrição absoluta", d: "Sigilo profissional tratado como cláusula pétrea, não como cortesia." },
];

export function Differentials() {
  return (
    <section className="relative border-t border-border py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel n="05">Diferenciais</SectionLabel>
        <Reveal>
          <h2 className="mb-20 max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
            O que torna a relação <span className="italic gradient-gold-text">diferente</span>.
          </h2>
        </Reveal>
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {diffs.map((d, i) => (
            <Reveal key={d.t} delay={(i % 3) * 0.08}>
              <div className="group">
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-display text-2xl text-gold">0{i + 1}</span>
                  <span className="h-px flex-1 bg-border transition-all duration-700 group-hover:bg-gold/60" />
                </div>
                <h3 className="font-display text-2xl tracking-tight">{d.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  { q: "Como funciona a primeira consulta?", a: "A consulta inicial é agendada presencialmente ou por videochamada. Conduzimos uma análise de cenário, escutamos seu caso e apresentamos um diagnóstico técnico, sem compromisso." },
  { q: "Vocês atendem clientes fora de São Paulo?", a: "Sim. Atendemos em todo o território nacional com rede de correspondentes selecionados e acompanhamento centralizado pelo escritório." },
  { q: "Como são definidos os honorários?", a: "Os honorários são apresentados por escrito antes do início dos trabalhos. Trabalhamos com modelos fixos, por êxito ou consultoria mensal — definidos conforme a natureza da demanda." },
  { q: "Existe sigilo absoluto sobre o meu caso?", a: "Sim. O sigilo profissional é a base do nosso trabalho. Apenas a equipe envolvida tem acesso à sua matéria, e todos os documentos seguem protocolo de segurança." },
  { q: "Em quanto tempo recebo retorno?", a: "Mensagens são respondidas em até 24h úteis. Movimentações relevantes do processo são comunicadas no mesmo dia." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative border-t border-border py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel n="06">Perguntas Frequentes</SectionLabel>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Respostas <span className="italic gradient-gold-text">diretas</span>.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Se a sua dúvida não estiver aqui, escreva diretamente. Respondemos em até 24h.
            </p>
          </Reveal>
          <div className="lg:col-span-8">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={f.q} delay={i * 0.05}>
                  <div className="border-b border-border">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-7 text-left transition-colors hover:text-gold"
                      aria-expanded={isOpen}
                    >
                      <span className="font-display text-xl tracking-tight md:text-2xl">
                        {f.q}
                      </span>
                      <span className="shrink-0 rounded-full border border-border p-2 text-muted-foreground">
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-8 pr-12 text-[15px] leading-relaxed text-muted-foreground">
                            {f.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function Contact() {
  return (
    <section id="contato" className="relative border-t border-border py-32 lg:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel n="07">Contato</SectionLabel>
        <div className="grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="font-display text-5xl leading-[1.05] tracking-tight md:text-6xl">
              Vamos conversar sobre o seu <span className="italic gradient-gold-text">caso</span>.
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              Atendimento por agendamento, em ambiente reservado. A primeira
              conversa é confidencial e sem custo.
            </p>

            <div className="mt-12 space-y-5 text-sm">
              <a href="https://wa.me/5511999999999" className="flex items-center gap-4 text-foreground transition-colors hover:text-gold">
                <MessageCircle size={18} className="text-gold" /> +55 11 9 9999-9999
              </a>
              <a href="mailto:helena@vasconcellos.adv.br" className="flex items-center gap-4 text-foreground transition-colors hover:text-gold">
                <Mail size={18} className="text-gold" /> helena@vasconcellos.adv.br
              </a>
              <div className="flex items-start gap-4 text-muted-foreground">
                <MapPin size={18} className="mt-0.5 text-gold" />
                <span>Av. Brigadeiro Faria Lima, 3.477<br />Itaim Bibi · São Paulo · SP</span>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <Phone size={18} className="text-gold" /> +55 11 3000-0000
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-gold hover:text-gold">
                <Instagram size={16} />
              </a>
              <a aria-label="LinkedIn" href="#" className="rounded-full border border-border p-3 text-muted-foreground transition-all hover:border-gold hover:text-gold">
                <Linkedin size={16} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Recebido. Responderemos em até 24h."); }}
              className="glass rounded-sm p-8 md:p-12"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <Field label="Nome" name="nome" required />
                <Field label="E-mail" name="email" type="email" required />
                <Field label="Telefone" name="telefone" />
                <Field label="Assunto" name="assunto" />
              </div>
              <div className="mt-6">
                <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">Mensagem</label>
                <textarea
                  rows={5}
                  required
                  className="w-full resize-none border-b border-border bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-gold"
                />
              </div>
              <button
                type="submit"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_50px_-5px_oklch(0.82_0.09_82/0.7)]"
              >
                Enviar mensagem
                <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>

            {/* Stylised map */}
            <div className="relative mt-8 aspect-[16/7] overflow-hidden rounded-sm border border-border">
              <iframe
                title="Mapa do escritório"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6951%2C-23.5896%2C-46.6751%2C-23.5696&layer=mapnik"
                className="absolute inset-0 h-full w-full grayscale invert-[92%] hue-rotate-180 contrast-90 opacity-70"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-background/30 via-transparent to-background/60" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/5511999999999"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 text-[11px] uppercase tracking-[0.2em] text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.82_0.09_82/0.7)] transition-transform hover:scale-105"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
    </section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-border bg-transparent py-3 text-[15px] outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}

/* ---------------- FOOTER ---------------- */
export function Footer() {
  return (
    <footer className="relative border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl tracking-tight">Helena</span>
              <span className="font-display text-3xl italic text-gold">Vasconcellos</span>
            </div>
            <p className="mt-6 max-w-sm font-display text-xl italic leading-snug text-muted-foreground">
              “A excelência jurídica não se anuncia. Ela se constrói, caso a caso.”
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-7 lg:grid-cols-3">
            <div>
              <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-gold">Navegação</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#sobre" className="hover:text-foreground">Sobre</a></li>
                <li><a href="#areas" className="hover:text-foreground">Atuação</a></li>
                <li><a href="#casos" className="hover:text-foreground">Resultados</a></li>
                <li><a href="#contato" className="hover:text-foreground">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-gold">Contato</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>helena@vasconcellos.adv.br</li>
                <li>+55 11 3000-0000</li>
                <li>São Paulo · SP</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-5 text-[11px] uppercase tracking-[0.25em] text-gold">Social</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Instagram</a></li>
                <li><a href="#" className="hover:text-foreground">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Helena Vasconcellos Advocacia · OAB/SP 412.908</span>
          <span>Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  );
}
