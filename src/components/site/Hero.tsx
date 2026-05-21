import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import portrait from "@/assets/lawyer-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: EASE, delay: 0.2 + i * 0.12 },
  }),
} as const;

export function Hero() {
  return (
    <section id="top" className="relative min-h-dvh overflow-hidden pt-32 lg:pt-40">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-radial-gold)" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        {/* Left — copy */}
        <div className="lg:col-span-7 lg:pt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-muted-foreground"
          >
            <span className="h-px w-10 bg-gold/60" />
            Advocacia · OAB/SP 412.908
          </motion.div>

          <h1 className="font-display text-[15vw] leading-[0.92] tracking-tight md:text-[10vw] lg:text-[8.2vw] xl:text-[7.5rem]">
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="block"
            >
              Defesa que
            </motion.span>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="block italic gradient-gold-text"
            >
              antecipa.
            </motion.span>
            <motion.span
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="block"
            >
              Estratégia que
              <span className="italic gradient-gold-text"> resolve.</span>
            </motion.span>
          </h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="mt-10 max-w-xl text-[15px] leading-relaxed text-muted-foreground"
          >
            Atuação jurídica de alto padrão para indivíduos e empresas que exigem
            discrição, precisão e resultado. Uma advocacia construída sobre
            inteligência analítica e relacionamento de confiança.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <a
              href="#contato"
              className="group relative inline-flex items-center gap-3 rounded-full bg-gold px-7 py-4 text-[12px] uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-[0_0_50px_-5px_oklch(0.82_0.09_82/0.7)]"
            >
              Agendar Consulta
              <ArrowUpRight
                size={16}
                className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#sobre"
              className="link-underline text-[12px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
            >
              Conheça o escritório
            </a>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="relative lg:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-sm">
            <img
              src={portrait}
              alt="Retrato da advogada Helena Vasconcellos"
              width={1024}
              height={1280}
              className="h-full w-full object-cover grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[11px] uppercase tracking-[0.2em] text-foreground/80">
              <span>Helena V.</span>
              <span className="text-gold">Est. 2009</span>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-4 -z-10 rounded-sm border border-gold/20" />
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative mt-24 overflow-hidden border-y border-border/60 py-5">
        <div className="marquee flex w-max items-center gap-16 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span>Direito Civil</span><span className="text-gold">✦</span>
              <span>Empresarial</span><span className="text-gold">✦</span>
              <span>Trabalhista</span><span className="text-gold">✦</span>
              <span>Família</span><span className="text-gold">✦</span>
              <span>Previdenciário</span><span className="text-gold">✦</span>
              <span>Consultoria Estratégica</span><span className="text-gold">✦</span>
            </div>
          ))}
        </div>
      </div>

      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-32 right-6 hidden flex-col items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:flex"
      >
        Role
        <ArrowDown size={14} className="animate-bounce text-gold" />
      </motion.a>
    </section>
  );
}
