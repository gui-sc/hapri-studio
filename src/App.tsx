import {
    AnimatePresence,
    MotionConfig,
    motion,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { useEffect, useMemo, useState, type CSSProperties, type ReactNode } from "react";
import {
    FaArrowDown,
    FaArrowUpRightFromSquare,
    FaInstagram,
    FaPlay,
    FaWhatsapp,
    FaXmark,
} from "react-icons/fa6";

type Project = {
    number: string;
    title: string;
    category: string;
    description: string;
    image: string;
    tone: string;
    details: string[];
};

const projects: Project[] = [
    {
        number: "01",
        title: "Perfor",
        category: "Estratégia / social",
        description: "Uma presença digital que transforma produto em desejo.",
        image: "/perfor.png",
        tone: "#d9d0c5",
        details: ["Direção criativa", "Conteúdo", "Performance"],
    },
    {
        number: "02",
        title: "Padaria Gomes",
        category: "Marca / conteúdo",
        description: "Afeto, rotina e apetite em uma identidade que dá vontade de ficar.",
        image: "/gomes.png",
        tone: "#e9c6a4",
        details: ["Posicionamento", "Identidade visual", "Campanha"],
    },
    {
        number: "03",
        title: "Pérola",
        category: "Campanha / direção",
        description: "Um universo visual para acessórios que acompanham todos os dias.",
        image: "/perola.png",
        tone: "#d7d5ce",
        details: ["Direção de arte", "Social media", "Lançamento"],
    },
    {
        number: "04",
        title: "Uzi Supply",
        category: "Branding / digital",
        description: "Energia de rua, precisão de marca e uma comunidade em movimento.",
        image: "/uzi.png",
        tone: "#bcc9c8",
        details: ["Estratégia", "Design", "Conteúdo"],
    },
];

const services = [
    {
        number: "01",
        title: "Estratégia",
        description: "Clareza para decidir o que a marca diz, para quem e por que agora.",
        image: "/principios.png",
    },
    {
        number: "02",
        title: "Direção criativa",
        description: "Ideias com forma, ritmo e uma assinatura que não se perde no feed.",
        image: "/perola.png",
    },
    {
        number: "03",
        title: "Conteúdo",
        description: "Sistemas de conteúdo que transformam presença em conversa contínua.",
        image: "/gomes.png",
    },
    {
        number: "04",
        title: "Performance",
        description: "Leitura de dados, teste e otimização para fazer a atenção avançar.",
        image: "/tasse.png",
    },
];

const processSteps = [
    ["entender", "Ouvimos o negócio antes de propor a próxima postagem. O contexto é a matéria-prima da estratégia."],
    ["questionar", "Encontramos o que está repetido, silencioso ou pronto para ser visto de outro jeito."],
    ["construir", "Criamos uma linguagem visual e verbal que cabe no mundo real da marca."],
    ["testar", "Colocamos as ideias na rua, observamos a resposta e ajustamos com intenção."],
    ["medir", "Resultado não é só número. É clareza para decidir o próximo movimento."],
] as const;

const clients = [
    { name: "Perfor", image: "/perfor.png" },
    { name: "Gomes", image: "/gomes.png" },
    { name: "Pérola", image: "/perola.png" },
    { name: "Princípios", image: "/principios.png" },
    { name: "Tasse", image: "/tasse.png" },
    { name: "Uzi", image: "/uzi.png" },
];

const posterPhrases = ["OCUPE ESPAÇO.", "FAÇA BARULHO.", "VIRE REFERÊNCIA.", "COMECE AGORA."];
const posterColors = ["#ff741f", "#0f1011", "#fff7f1", "#d9d0c5"];

function useReducedMotion() {
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReducedMotion(mediaQuery.matches);
        update();
        mediaQuery.addEventListener("change", update);
        return () => mediaQuery.removeEventListener("change", update);
    }, []);

    return reducedMotion;
}

function MagneticButton({
    children,
    onClick,
    dark = false,
}: {
    children: ReactNode;
    onClick?: () => void;
    dark?: boolean;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 300, damping: 25 });
    const springY = useSpring(y, { stiffness: 300, damping: 25 });

    return (
        <motion.button
            type="button"
            className={`magnetic-button ${dark ? "magnetic-button--dark" : ""}`}
            style={{ x: springX, y: springY }}
            onClick={onClick}
            onMouseMove={(event) => {
                const rect = event.currentTarget.getBoundingClientRect();
                x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
                y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
            }}
            onMouseLeave={() => {
                x.set(0);
                y.set(0);
            }}
        >
            <span>{children}</span>
            <span className="magnetic-button__arrow">↗</span>
        </motion.button>
    );
}

function Cursor({ label }: { label: string }) {
    const [position, setPosition] = useState({ x: -100, y: -100 });

    useEffect(() => {
        const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <motion.div
            className={`cursor-orb ${label ? "cursor-orb--labeled" : ""}`}
            animate={{ left: position.x, top: position.y }}
            transition={{ type: "spring", stiffness: 500, damping: 35, mass: 0.35 }}
        >
            {label && <span>{label}</span>}
        </motion.div>
    );
}

function Preloader({ onComplete }: { onComplete: () => void }) {
    useEffect(() => {
        const timer = window.setTimeout(onComplete, 1050);
        return () => window.clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
            <motion.div
                className="preloader__portal"
                initial={{ scale: 0.2, rotate: -14 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <img src="/logo.png" alt="" />
            </motion.div>
            <div className="preloader__meta">
                <span>HAPRI / STUDIO</span>
                <span>ORANGE PORTAL — 2026</span>
            </div>
        </motion.div>
    );
}

function MenuOverlay({ onClose, onNavigate }: { onClose: () => void; onNavigate: (id: string) => void }) {
    const menuItems = [
        ["01", "home", "a entrada"],
        ["02", "trabalhos", "o que já moveu"],
        ["03", "estudio", "como pensamos"],
        ["04", "lab", "onde testamos"],
        ["05", "contato", "vamos conversar"],
    ];

    return (
        <motion.div
            className="menu-overlay"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="menu-overlay__head">
                <span>HAPRI / MENU</span>
                <button type="button" onClick={onClose} aria-label="Fechar menu">
                    <FaXmark />
                </button>
            </div>
            <div className="menu-overlay__body">
                <p className="eyebrow eyebrow--dark">Navegue pelo portal</p>
                <nav aria-label="Menu principal">
                    {menuItems.map(([number, id, label]) => (
                        <button
                            type="button"
                            key={id}
                            onClick={() => onNavigate(id)}
                            onMouseEnter={() => document.body.setAttribute("data-cursor-label", number)}
                            onMouseLeave={() => document.body.removeAttribute("data-cursor-label")}
                        >
                            <span>{number}</span>
                            <strong>{id}</strong>
                            <em>{label}</em>
                        </button>
                    ))}
                </nav>
            </div>
            <div className="menu-overlay__foot">
                <span>Florianópolis, SC</span>
                <span>Instagram ↗</span>
                <span>WhatsApp ↗</span>
            </div>
        </motion.div>
    );
}

function ProjectCard({ project, onOpen, onCursor }: { project: Project; onOpen: () => void; onCursor: (label: string) => void }) {
    return (
        <motion.button
            type="button"
            className="project-card"
            style={{ "--project-tone": project.tone } as CSSProperties}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            onClick={onOpen}
            onMouseEnter={() => onCursor("VER")}
            onMouseLeave={() => onCursor("")}
        >
            <div className="project-card__topline">
                <span>{project.number}</span>
                <span>{project.category}</span>
                <span>2026</span>
            </div>
            <div className="project-card__art">
                <motion.img
                    src={project.image}
                    alt={`Projeto ${project.title}`}
                    whileHover={{ scale: 1.06, rotate: -1 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                />
                <span className="project-card__stamp">HAPRI<br />ARCHIVE</span>
            </div>
            <div className="project-card__bottomline">
                <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                </div>
                <span className="project-card__open">Abrir projeto ↗</span>
            </div>
        </motion.button>
    );
}

function CaseModal({ project, onClose, onNext }: { project: Project; onClose: () => void; onNext: () => void }) {
    return (
        <motion.div
            className="case-modal"
            initial={{ clipPath: "circle(0% at 50% 100%)", opacity: 0 }}
            animate={{ clipPath: "circle(150% at 50% 100%)", opacity: 1 }}
            exit={{ clipPath: "circle(0% at 50% 100%)", opacity: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="case-modal__head">
                <span>CASE / {project.number}</span>
                <button type="button" onClick={onClose} aria-label="Fechar projeto">
                    Fechar <FaXmark />
                </button>
            </div>
            <div className="case-modal__body">
                <div className="case-modal__copy">
                    <p className="eyebrow">Projeto selecionado</p>
                    <h2>{project.title}</h2>
                    <p className="case-modal__description">{project.description}</p>
                    <div className="case-modal__details">
                        {project.details.map((detail) => <span key={detail}>{detail}</span>)}
                    </div>
                    <p className="case-modal__note">Um recorte do nosso jeito de transformar estratégia em presença, com espaço para a marca respirar e ser lembrada.</p>
                </div>
                <div className="case-modal__media" style={{ backgroundColor: project.tone }}>
                    <img src={project.image} alt={`Detalhe visual do projeto ${project.title}`} />
                    <span>Arraste o olhar<br />para dentro.</span>
                </div>
            </div>
            <button type="button" className="case-modal__next" onClick={onNext}>
                Próximo projeto <FaArrowDown />
            </button>
        </motion.div>
    );
}

function ShowreelModal({ onClose }: { onClose: () => void }) {
    const [frame, setFrame] = useState(0);
    const reelFrames = ["/perfor.png", "/gomes.png", "/perola.png", "/uzi.png"];

    useEffect(() => {
        const interval = window.setInterval(() => setFrame((current) => (current + 1) % reelFrames.length), 1500);
        return () => window.clearInterval(interval);
    }, [reelFrames.length]);

    return (
        <motion.div className="reel-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="reel-modal__noise" />
            <div className="reel-modal__head">
                <span>HAPRI SHOWREEL / 00:36</span>
                <button type="button" onClick={onClose} aria-label="Fechar showreel"><FaXmark /> Fechar</button>
            </div>
            <div className="reel-modal__stage">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={reelFrames[frame]}
                        src={reelFrames[frame]}
                        alt="Frame do showreel Hapri"
                        initial={{ opacity: 0, scale: 1.18, rotate: 4 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.88, rotate: -4 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                </AnimatePresence>
                <div className="reel-modal__title">MAKE<br /><i>IT</i><br />MOVE.</div>
                <div className="reel-modal__play"><FaPlay /></div>
            </div>
            <div className="reel-modal__foot"><span>SOUND ON / IMAGINE A BATIDA</span><span>01 — 04</span></div>
        </motion.div>
    );
}

function App() {
    const reducedMotion = useReducedMotion();
    const [isLoading, setIsLoading] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [cursorLabel, setCursorLabel] = useState("");
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [isReelOpen, setIsReelOpen] = useState(false);
    const [activeService, setActiveService] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [posterPhrase, setPosterPhrase] = useState(0);
    const [posterColor, setPosterColor] = useState(0);
    const [heroPoint, setHeroPoint] = useState({ x: 58, y: 44 });

    useEffect(() => {
        const onScroll = () => setIsScrolled(window.scrollY > window.innerHeight * 0.72);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen || Boolean(selectedProject) || isReelOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMenuOpen, selectedProject, isReelOpen]);

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        window.setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" }), 80);
    };

    const cursor = (label: string) => {
        setCursorLabel(label);
        if (label) document.body.setAttribute("data-cursor-label", label);
        else document.body.removeAttribute("data-cursor-label");
    };

    const nextProject = () => {
        if (!selectedProject) return;
        const currentIndex = projects.findIndex((project) => project.number === selectedProject.number);
        setSelectedProject(projects[(currentIndex + 1) % projects.length]);
    };

    const posterStyle = useMemo(() => ({
        "--poster-color": posterColors[posterColor],
        "--poster-text": posterColor === 1 ? "#fff7f1" : "#0f1011",
        "--poster-rotation": `${posterColor % 2 === 0 ? -3 : 3}deg`,
    } as CSSProperties), [posterColor]);

    return (
        <MotionConfig reducedMotion={reducedMotion ? "always" : "never"}>
            <div className="app-shell">
                <AnimatePresence>{isLoading && <Preloader onComplete={() => setIsLoading(false)} />}</AnimatePresence>
                <Cursor label={cursorLabel} />

                <header className={`site-nav ${isScrolled ? "site-nav--scrolled" : ""}`}>
                    <button type="button" className="site-nav__brand" onClick={() => scrollToSection("home")} aria-label="Voltar para o início">
                        <span className="site-nav__mark">H</span>
                        <span>HAPRI / STUDIO</span>
                    </button>
                    <div className="site-nav__context">{isScrolled ? "ORANGE PORTAL / 2026" : "ESTÚDIO CRIATIVO"}</div>
                    <button
                        type="button"
                        className="site-nav__menu"
                        onClick={() => setIsMenuOpen(true)}
                        onMouseEnter={() => cursor("MENU")}
                        onMouseLeave={() => cursor("")}
                    >
                        Menu <span className="site-nav__menu-line" />
                    </button>
                </header>

                <AnimatePresence>{isMenuOpen && <MenuOverlay onClose={() => setIsMenuOpen(false)} onNavigate={scrollToSection} />}</AnimatePresence>

                <main>
                    <section
                        id="home"
                        className="hero"
                        onMouseMove={(event) => {
                            const rect = event.currentTarget.getBoundingClientRect();
                            setHeroPoint({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 });
                        }}
                    >
                        <div className="hero__grain" />
                        <motion.div className="hero__portal" animate={{ left: `${heroPoint.x}%`, top: `${heroPoint.y}%` }} transition={{ type: "spring", stiffness: 45, damping: 20 }}>
                            <div className="hero__portal-inner"><img src="/logo.png" alt="Logo Hapri Studio" /></div>
                        </motion.div>
                        <div className="hero__meta">
                            <span>Florianópolis — Brasil</span>
                            <span>Scroll para entrar <FaArrowDown /></span>
                        </div>
                        <div className="hero__content">
                            <motion.p className="eyebrow" initial={{ opacity: 0, x: -25 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>HAPRI / ORANGE PORTAL</motion.p>
                            <h1>
                                <motion.span initial={{ x: -80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>Marcas</motion.span>
                                <motion.span className="hero__outline" initial={{ scale: 1.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.48, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>que</motion.span>
                                <motion.span initial={{ x: 85, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.62, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>ocupam</motion.span>
                                <motion.span className="hero__last" initial={{ clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ delay: 0.8, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}>espaço.</motion.span>
                            </h1>
                            <div className="hero__bottom">
                                <p>Estratégia, design e conteúdo para marcas que não vieram para preencher espaço.</p>
                                <MagneticButton onClick={() => scrollToSection("trabalhos")}>Ver trabalhos</MagneticButton>
                            </div>
                        </div>
                        <div className="hero__reveal-copy" style={{ left: `${heroPoint.x}%`, top: `${heroPoint.y}%` }}>MOVE<br />YOUR<br />CURSOR</div>
                        <div className="hero__counter">01 <span>/</span> 05</div>
                    </section>

                    <section id="estudio" className="manifesto section-cream">
                        <div className="section-frame">
                            <div className="section-label"><span>02 — MANIFESTO</span><span>Uma ideia de cada vez</span></div>
                            <div className="manifesto__headline">
                                <p>Não criamos conteúdo</p>
                                <p className="manifesto__indent">para preencher <em>feed.</em></p>
                                <p className="manifesto__small">Criamos marcas</p>
                                <p className="manifesto__indent manifesto__accent">que ocupam espaço.</p>
                            </div>
                            <div className="manifesto__foot"><span>Uma agência para quem quer movimento</span><span>↓ continue</span></div>
                        </div>
                    </section>

                    <section className="marquee-band" aria-label="Áreas de atuação">
                        <div className="marquee-band__track">
                            <span>ESTRATÉGIA</span><i>✳</i><span>DIREÇÃO</span><i>✳</i><span>CONTEÚDO</span><i>✳</i><span>PERFORMANCE</span><i>✳</i>
                            <span>ESTRATÉGIA</span><i>✳</i><span>DIREÇÃO</span><i>✳</i><span>CONTEÚDO</span><i>✳</i><span>PERFORMANCE</span><i>✳</i>
                        </div>
                    </section>

                    <section id="trabalhos" className="projects section-black">
                        <div className="section-frame">
                            <div className="section-label section-label--light"><span>03 — TRABALHOS SELECIONADOS</span><span>Arraste o olhar</span></div>
                            <div className="projects__intro"><h2>O que a gente <i>moveu.</i></h2><p>Projetos que começam em uma pergunta e terminam em alguma coisa impossível de ignorar.</p></div>
                            <div className="projects__list">
                                {projects.map((project) => <ProjectCard key={project.number} project={project} onOpen={() => setSelectedProject(project)} onCursor={cursor} />)}
                            </div>
                            <div className="projects__end"><span>04 — MAIS EM BREVE</span><span>O próximo projeto começa numa conversa.</span></div>
                        </div>
                    </section>

                    <section id="servicos" className="services section-cream">
                        <div className="section-frame">
                            <div className="section-label"><span>04 — O QUE FAZEMOS</span><span>Sem receita pronta</span></div>
                            <div className="services__grid">
                                <div className="services__heading"><p className="eyebrow">Um sistema, não um pacote</p><h2>Ideias que<br /><i>ganham corpo.</i></h2><p>Da estratégia ao último frame, construímos a parte que faz uma marca ser reconhecida antes mesmo do logo aparecer.</p></div>
                                <div className="services__list">
                                    {services.map((service, index) => (
                                        <button type="button" key={service.number} className={`service-row ${activeService === index ? "service-row--active" : ""}`} onMouseEnter={() => { setActiveService(index); cursor("ABRIR"); }} onMouseLeave={() => cursor("")} onClick={() => setActiveService(index)}>
                                            <span>{service.number}</span><strong>{service.title}</strong><span className="service-row__arrow">↗</span><em>{service.description}</em>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="process section-orange">
                        <div className="section-frame">
                            <div className="section-label section-label--dark"><span>05 — NOSSO MÉTODO</span><span>Movimento contínuo</span></div>
                            <div className="process__grid">
                                <div><p className="eyebrow eyebrow--dark">Não é linha reta</p><h2>Do primeiro<br /><i>e se?</i> ao<br />agora vai.</h2><p className="process__note">Cada marca pede um ritmo. A gente entra para encontrar o seu.</p></div>
                                <div className="process__steps">
                                    {processSteps.map(([title, copy], index) => <button type="button" key={title} className={`process-step ${activeStep === index ? "process-step--active" : ""}`} onClick={() => setActiveStep(index)}><span>0{index + 1}</span><strong>{title}</strong><span className="process-step__plus">{activeStep === index ? "−" : "+"}</span>{activeStep === index && <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>{copy}</motion.p>}</button>)}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="reel-section section-black">
                        <div className="section-frame">
                            <div className="section-label section-label--light"><span>06 — SHOWREEL</span><span>Somente o necessário</span></div>
                            <div className="reel-section__stage">
                                <div className="reel-section__copy"><p className="eyebrow">Aperte o play</p><h2>Ideias<br /><i>em movimento.</i></h2></div>
                                <motion.button type="button" className="reel-trigger" onClick={() => setIsReelOpen(true)} onMouseEnter={() => cursor("PLAY")} onMouseLeave={() => cursor("")} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}><span><FaPlay /></span><strong>Play the<br />Hapri reel</strong><small>00:36 ↗</small></motion.button>
                                <div className="reel-section__orb" />
                            </div>
                        </div>
                    </section>

                    <section className="results section-cream">
                        <div className="section-frame">
                            <div className="section-label"><span>07 — GENTE QUE CONFIOU</span><span>Feito junto</span></div>
                            <div className="results__headline"><p>Presença que deixa</p><p className="results__accent">rastro.</p></div>
                            <div className="client-wall">{clients.map((client, index) => <div className="client-wall__item" key={client.name} style={{ "--client-delay": `${index * 0.08}s` } as CSSProperties}><img src={client.image} alt={client.name} /><span>{client.name}</span></div>)}</div>
                            <div className="metrics"><div><strong>+4</strong><span>anos criando</span></div><div><strong>3<span>mi</span></strong><span>visualizações</span></div><div><strong>100</strong><span>campanhas</span></div><div><strong>30</strong><span>marcas atendidas</span></div></div>
                        </div>
                    </section>

                    <section id="lab" className="lab section-black">
                        <div className="section-frame">
                            <div className="section-label section-label--light"><span>08 — HAPRI LAB</span><span>Teste, erro, descoberta</span></div>
                            <div className="lab__grid">
                                <div className="lab__copy"><p className="eyebrow">Um playground para ideias</p><h2>Nem tudo precisa<br />ser <i>explicado.</i></h2><p>Aqui a gente experimenta combinações, formatos e pequenos acidentes felizes. Leve um poster com você.</p><button type="button" className="text-link" onClick={() => { setPosterPhrase((current) => (current + 1) % posterPhrases.length); setPosterColor((current) => (current + 1) % posterColors.length); }}>Gerar outra versão ↗</button></div>
                                <motion.div className="poster-generator" style={posterStyle} key={`${posterPhrase}-${posterColor}`} initial={{ opacity: 0, rotate: 6, scale: 0.92 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}><span>HAPRI<br />LAB / 001</span><strong>{posterPhrases[posterPhrase]}</strong><small>estratégia é dar<br />forma ao que importa.</small><i>✳</i></motion.div>
                            </div>
                        </div>
                    </section>

                    <section id="contato" className="contact section-orange">
                        <div className="section-frame">
                            <div className="section-label section-label--dark"><span>09 — CONTATO</span><span>O portal está aberto</span></div>
                            <div className="contact__main"><p className="eyebrow eyebrow--dark">Tem uma ideia?</p><h2>Vamos fazer<br /><i>acontecer.</i></h2><MagneticButton dark onClick={() => window.open("https://wa.me/5548996040786?text=Olá,%20vim%20pelo%20site%20da%20Hapri.%20Vamos%20conversar?", "_blank")}>Falar com a Hapri</MagneticButton></div>
                            <div className="contact__footer"><div><strong>HAPRI / STUDIO</strong><span>Estratégia, design e conteúdo<br />para marcas em movimento.</span></div><div className="contact__links"><a href="https://www.instagram.com/gvieira_gomes/" target="_blank" rel="noreferrer"><FaInstagram /> Instagram ↗</a><a href="https://wa.me/5548996040786" target="_blank" rel="noreferrer"><FaWhatsapp /> WhatsApp ↗</a><a href="mailto:oi@hapristudio.com">oi@hapristudio.com ↗</a></div><div className="contact__city">Florianópolis, SC<br />Brasil</div></div>
                        </div>
                    </section>
                </main>

                <footer className="site-footer"><div>HAPRI STUDIO © {new Date().getFullYear()}</div><div>feito com intenção <span>✳</span> sem atalhos</div><button type="button" onClick={() => scrollToSection("home")} aria-label="Voltar ao topo"><FaArrowUpRightFromSquare /></button></footer>

                <AnimatePresence>{selectedProject && <CaseModal project={selectedProject} onClose={() => setSelectedProject(null)} onNext={nextProject} />}</AnimatePresence>
                <AnimatePresence>{isReelOpen && <ShowreelModal onClose={() => setIsReelOpen(false)} />}</AnimatePresence>
            </div>
        </MotionConfig>
    );
}

export default App;
