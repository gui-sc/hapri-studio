# Hapri Studio — Blueprint de Experiência Digital

> Guia de direção criativa e implementação para um site de agência de marketing feito com **React + Vite**, com foco em movimento, interatividade e identidade própria — sem cair no visual genérico de “landing page de agência”.

---

## 1. Ideia central: transformar a identidade da Hapri em uma experiência

A identidade visual já oferece elementos fortes:

- **Laranja vibrante** como energia, ação e destaque.
- **Preto** como contraste e sofisticação.
- **Branco** como espaço negativo.
- A forma branca orgânica presente no logo pode virar um **elemento de movimento da própria interface**.

A proposta não é simplesmente colocar “várias animações”. O site deve parecer que possui uma **linguagem de movimento própria**.

### Conceito recomendado: HAPRI / ORANGE PORTAL

O laranja funciona como o “motor” do site. Ao interagir, navegar, abrir um projeto ou passar o mouse por um elemento, o laranja aparece, cresce, deforma, revela informações ou transforma a tela.

A forma orgânica branca do logo pode ser usada como:

- máscara para revelar vídeos;
- transição entre páginas;
- background animado;
- container de imagens;
- recorte para projetos;
- elemento que acompanha o scroll;
- elemento do preloader;
- cursor contextual.

Isso faz com que as animações tenham relação direta com a marca, em vez de parecerem efeitos copiados de uma biblioteca.

---

## 2. Paleta sugerida

A partir da imagem da marca, a cor principal está muito próxima de:

```css
:root {
  --hapri-orange: #FF741F;
  --hapri-black: #0F1011;
  --hapri-white: #FFFFFF;

  --hapri-cream: #FFF7F1;
  --hapri-orange-soft: #FFE2D0;
  --hapri-orange-dark: #D94F00;
  --hapri-gray: #8D8D8D;
  --hapri-gray-light: #EFEFEF;
}
```

### Regra visual

Evitaria colocar laranja em tudo. Uma proporção interessante:

- **55% branco / creme**
- **30% preto**
- **15% laranja**

O laranja ganha muito mais impacto quando aparece como resposta a uma interação.

---

## 3. Linguagem visual recomendada

Misturar:

- editorial;
- motion design;
- brutalismo elegante;
- tipografia extremamente grande;
- fotografia de campanhas;
- pequenos detalhes quase “analógicos”;
- WebGL somente em momentos especiais.

### Evitar

- cards genéricos com ícones;
- gradientes roxo/azul de SaaS;
- glassmorphism em excesso;
- dezenas de blobs decorativos;
- animações diferentes em cada seção;
- carrossel padrão de “nossos clientes”;
- todos os elementos entrando com `fade-up`;
- partículas sem função;
- excesso de 3D.

A diferença deve vir da **direção criativa**, não da quantidade de efeitos.

---

# 4. Stack recomendada

## Base

```txt
React
Vite
TypeScript
CSS Modules / Tailwind CSS
```

## Motion principal — Motion for React

Usar para:

- entrada de componentes;
- animações de layout;
- hover;
- drag;
- stagger;
- microinterações;
- animações baseadas em scroll;
- presença/saída de elementos.

```bash
npm install motion
```

## Motion cinematográfico — GSAP + @gsap/react

Usar nas sequências mais elaboradas:

- timeline do hero;
- texto cinético;
- máscaras;
- pinned sections;
- scroll storytelling;
- sequência de frames;
- movimentos coordenados.

```bash
npm install gsap @gsap/react
```

**Motion pode cuidar da interface normal e GSAP das sequências especiais.**

## Smooth scroll — Lenis

```bash
npm install lenis
```

Usar para scroll suave, sincronização com animações, paralaxe e storytelling. Não exagerar na suavização: o scroll ainda precisa responder imediatamente ao usuário.

## 3D / WebGL — React Three Fiber

```bash
npm install three @react-three/fiber @react-three/drei
```

Usar para **um efeito memorável**, e não para transformar todo o site em um jogo.

Boas opções:

- símbolo Hapri flutuando em 3D;
- papel/poster que reage ao mouse;
- objeto translúcido laranja;
- cards de campanhas empilhados no espaço;
- textura que distorce conforme o cursor.

## Animação vetorial interativa — Rive

```bash
npm install @rive-app/react-webgl2
```

Ótimo para criar uma versão viva do símbolo da Hapri, com estados como:

```txt
idle
hover
loading
clicked
success
menu-open
```

Ao contrário de um GIF, a animação pode responder ao usuário.

## Componentes experimentais — Aceternity UI

Usaria como **referência/protótipo**, principalmente para:

- text reveal;
- spotlight;
- motion backgrounds;
- cards 3D;
- shaders;
- hover effects.

Não recomendo montar o site inteiro copiando componentes prontos. Pegue a ideia do efeito e reconstrua com a linguagem Hapri.

---

# 5. Estrutura ideal da Home

```txt
01  Preloader
02  Hero
03  Manifesto
04  Projetos selecionados
05  Serviços
06  Método / processo
07  Showreel
08  Clientes / resultados
09  Hapri Lab
10  CTA / contato
11  Footer
```

A experiência precisa alternar momentos de impacto e momentos de descanso.

---

# 6. Preloader — transformar o logo em abertura

Não utilizar loading tradicional.

### Ideia

Tela inicialmente preta.

No centro:

```txt
[ H ]
```

Sequência:

1. símbolo aparece;
2. gira ou sofre pequena deformação;
3. o laranja começa dentro dele;
4. o laranja cresce;
5. ocupa a tela inteira;
6. a forma branca orgânica do logo surge;
7. ela se expande;
8. funciona como máscara;
9. o hero aparece por trás.

Sugestão de duração:

```txt
Primeira visita: ~1,0 a 1,6s
Navegação interna: ~0,4 a 0,7s
```

Não repetir um preloader longo em todas as páginas.

---

# 7. Hero — evitar “imagem + título + botão”

O hero deve ser o principal momento de identidade.

## Conceito

Título enorme ocupando quase toda a viewport.

Exemplo estrutural:

```txt
NÓS FAZEMOS
MARCAS
IMPOSSÍVEIS
DE IGNORAR.
```

Adapte ao posicionamento real da Hapri.

### Animação

As palavras não entram todas iguais:

```txt
NÓS FAZEMOS     → entra lateralmente
MARCAS           → escala 160% → 100%
IMPOSSÍVEIS      → revela por máscara
DE IGNORAR.      → surge quando o cursor entra
```

Uma palavra pode ser vazada e mostrar vídeo **dentro da tipografia**.

### Fundo

Preto. No mouse:

- surge um círculo laranja;
- ele revela conteúdo escondido;
- fotografias de campanhas aparecem dentro dele.

É como se o mouse fosse uma lanterna da marca.

---

# 8. Cursor personalizado

No desktop, esconder o cursor padrão somente dentro das áreas realmente interativas.

```txt
Cursor normal      → ponto laranja de 8px
Link                → círculo de 48px
Projeto             → círculo de 90px + “VER”
Vídeo               → círculo + “PLAY”
Drag                → círculo + “ARRASTE”
```

O cursor pode ter comportamento magnético próximo a botões.

Use um núcleo quase instantâneo e um círculo externo com pequeno easing. No mobile, remover completamente.

---

# 9. Tipografia cinética

Este deve ser um dos principais diferenciais do site.

Em vez de animar caixas, **anime palavras**:

- palavras que mudam de peso;
- texto que se comprime;
- linhas que deslizam em direções opostas;
- caracteres que entram com stagger;
- palavras trocando durante o scroll;
- texto que acompanha uma curva;
- clipping vertical;
- palavras gigantes atravessando a viewport;
- letras que se separam quando o mouse passa.

A tipografia deve parecer parte da direção de arte, não um efeito isolado.

---

# 10. Marquee inteligente

Em vez de um marquee comum:

```txt
ESTRATÉGIA — DESIGN — CONTEÚDO — PERFORMANCE —
```

Quando o usuário move o mouse para a direita:

```txt
marquee acelera →
```

Para a esquerda:

```txt
← marquee inverte
```

Ao parar, a velocidade volta suavemente ao normal.

---

# 11. Portfólio que não parece um grid

Evitar:

```txt
[ projeto ][ projeto ][ projeto ]
[ projeto ][ projeto ][ projeto ]
```

## Cases cinematográficos

Cada projeto ocupa praticamente uma viewport.

```txt
┌─────────────────────────────────────────┐
│                                         │
│              CAMPANHA                   │
│                                         │
│             [ VISUAL ]                  │
│                                         │
│ Cliente                        01 / 05   │
└─────────────────────────────────────────┘
```

Ao rolar:

1. imagem começa pequena;
2. cresce;
3. nome fica preso;
4. vídeo inicia;
5. texto muda;
6. imagem é recortada pela forma orgânica Hapri;
7. próximo case entra por trás.

---

# 12. Transição do projeto para o case

Ao clicar em um projeto:

```txt
thumbnail
   ↓
cresce
   ↓
ocupa a viewport
   ↓
vira hero da página interna
```

A percepção deve ser de que a pessoa **entrou dentro do projeto**.

Use animações compartilhadas do Motion ou timeline dedicada com GSAP.

---

# 13. Imagem que vira vídeo no hover

Card inicialmente:

```txt
imagem estática
```

Ao aproximar o mouse:

```txt
imagem → vídeo de 3–6 segundos
```

Ao retirar:

```txt
vídeo → poster
```

Funciona muito bem para mostrar Reels, branding, social media, motion e campanhas.

---

# 14. GIF vs vídeo

Se a intenção era utilizar **GIFs**, prefira vídeo para conteúdos maiores.

Sugestão:

```txt
WebM
+
MP4 fallback
+
poster JPG/AVIF
```

```html
<video
  muted
  playsInline
  loop
  preload="metadata"
  poster="/media/case-poster.avif"
>
  <source src="/media/case.webm" type="video/webm" />
  <source src="/media/case.mp4" type="video/mp4" />
</video>
```

GIF pode continuar útil para detalhes muito curtos ou quando fizer parte do próprio trabalho apresentado.

---

# 15. Showreel que chama atenção

Criar um vídeo curto com cortes rápidos dos melhores trabalhos.

Não deixar um player tradicional no meio da página.

Mostrar:

```txt
[ PLAY THE HAPRI REEL ↗ ]
```

Ao clicar:

1. botão cresce;
2. vira um círculo laranja;
3. círculo ocupa a tela;
4. vídeo começa;
5. interface fica mínima;
6. cursor vira botão de fechar.

---

# 16. Vídeo preso ao scroll

Uma seção especial pode vincular scroll ao tempo do vídeo:

```txt
0% scroll  → frame inicial
25%        → identidade
50%        → produção
75%        → campanha
100%       → resultado
```

Utilize em **uma seção**, não no site inteiro.

---

# 17. Textura e ruído

Uma textura muito sutil deixa o site menos “digital perfeito”.

```txt
grain/noise
```

Exemplo:

```css
opacity: 0.025;
```

Pode vir de SVG noise, PNG pequeno repetido ou shader simples.

---

# 18. Forma orgânica do logo como máscara

Essa deveria ser uma assinatura visual do projeto.

Criar a forma em SVG e usar como:

```txt
clip-path
mask-image
SVG mask
WebGL texture mask
```

A forma pode se deformar suavemente no hover dos projetos e nas transições.

---

# 19. Menu fullscreen

Ao clicar em `MENU`, um bloco laranja sai do canto superior e cresce até ocupar a tela.

```txt
01  HOME
02  TRABALHOS
03  ESTÚDIO
04  LAB
05  CONTATO
```

No hover em cada item:

- uma foto diferente aparece;
- o fundo muda;
- a palavra desloca alguns pixels;
- pequena descrição aparece;
- cursor recebe o número.

---

# 20. Navegação que muda de contexto

A navbar não precisa ter sempre o mesmo formato.

Hero:

```txt
logo          menu
```

Durante o scroll:

```txt
[ H ]     42%     MENU
```

Em um case:

```txt
[ H ]   PROJETO / 03   MENU
```

Na área de contato:

```txt
[ H ]   VAMOS CONVERSAR ↗
```

---

# 21. Serviços sem cards genéricos

## Opção A — Orbit

No centro:

```txt
HAPRI
```

Ao redor:

```txt
Branding
Social
Performance
Conteúdo
Web
Estratégia
```

Ao hover:

- item vem para frente;
- os outros recuam;
- muda a fotografia;
- aparece uma descrição.

Pode ser DOM + Motion; não precisa ser 3D real.

## Opção B — pôster interativo

```txt
01 BRANDING
────────────────────────
02 SOCIAL MEDIA
────────────────────────
03 PERFORMANCE
────────────────────────
04 WEBSITES
────────────────────────
```

No hover, uma imagem relacionada flutua ao lado do cursor.

---

# 22. Manifesto no lugar de texto institucional genérico

Em vez de:

> Somos uma agência especializada...

Criar uma frase gigante que vai sendo montada no scroll.

Exemplo:

```txt
NÃO
CRIAMOS
CONTEÚDO
PARA
PREENCHER
FEED.
```

Depois:

```txt
CRIAMOS
MARCAS
QUE
OCUPAM
ESPAÇO.
```

Adapte à comunicação real da Hapri.

---

# 23. Scroll storytelling

Uma seção pode ficar presa enquanto o conteúdo muda.

Tela fixa:

```txt
ESTRATÉGIA
```

Scroll:

```txt
01 entender
02 questionar
03 construir
04 testar
05 lançar
06 medir
```

O fundo mostra trabalhos relacionados a cada etapa.

Boa aplicação para `GSAP ScrollTrigger`.

---

# 24. Hapri Lab

Criar uma página:

```txt
/lab
```

Conteúdo:

- experimentos visuais;
- pequenos shaders;
- geradores;
- posters;
- IA criativa;
- animações;
- tipografia;
- conceitos descartados;
- estudos de movimento.

Isso mostra que a Hapri não apenas entrega peças: **experimenta**.

---

# 25. Gerador de pôster Hapri

Dentro do Lab, criar uma experiência onde o usuário digita uma frase e o sistema gera um pôster usando:

- preto;
- branco;
- laranja;
- tipografia Hapri;
- formas orgânicas.

```txt
[ GERAR OUTRO ]
[ BAIXAR POSTER ]
```

Pode virar uma ferramenta compartilhável da própria marca.

---

# 26. Easter egg

Se a pessoa digitar:

```txt
H A P R I
```

mostrar:

```txt
ORANGE MODE ACTIVATED
```

E alterar temporariamente cores, cursor, velocidade do marquee e pequenos detalhes da interface.

---

# 27. Modo “Chaos” opcional

Botão minúsculo no footer:

```txt
DON'T CLICK
```

Ao clicar:

- letras começam a flutuar;
- imagens ficam soltas;
- cursor empurra elementos;
- aparece botão “arrumar tudo”.

Use somente se combinar com a personalidade da agência.

---

# 28. Projeto revelado pelo cursor

Tela inicialmente preta:

```txt
MOVE YOUR CURSOR
```

O cursor funciona como máscara circular. Dentro da máscara aparecem projetos, vídeos, cores e frases.

Ótimo para uma seção especial do portfólio.

---

# 29. Image Trail

Ao mover rapidamente o mouse em determinada área, pequenas imagens dos projetos aparecem em sequência atrás do cursor.

```txt
cursor →
    [1]
       [2]
          [3]
             [4]
```

Depois desaparecem.

Use em uma área específica, não no site inteiro.

---

# 30. Cards com profundidade baseada no mouse

Nos cases, cada camada se move de forma diferente:

```txt
background   2px
imagem       8px
texto        14px
badge        20px
```

Cria profundidade sem exigir WebGL.

---

# 31. Uma única experiência 3D memorável

Não faria vários objetos 3D. Escolheria **um**.

## Ideia A — símbolo Hapri

- material preto;
- borda laranja;
- reage ao cursor;
- gira lentamente;
- ao scroll explode em pequenas peças;
- peças formam a próxima seção.

## Ideia B — pilha de campanhas

Vários posters 3D que podem ser arrastados. Cada poster representa um projeto e, ao clicar, vira fullscreen.

## Ideia C — esfera laranja líquida

Esfera abstrata responde ao mouse e à velocidade do scroll e pode distorcer imagens dos projetos.

---

# 32. Transições entre seções

Alternativas a cortes retangulares normais:

### Wipe

```txt
laranja invade ↑
```

### Organic mask

Forma do logo cresce e revela a próxima seção.

### Typography wipe

Uma palavra gigante atravessa e a próxima seção surge por trás.

### Image takeover

Imagem de um case cresce até virar background da seção seguinte.

---

# 33. Sistema de entradas

Não usar 20 efeitos diferentes. Criar 4 primitives:

### A — Mask Reveal

Texto sobe de dentro de uma máscara.

### B — Scale Reveal

```txt
0.94 → 1
opacity 0 → 1
```

### C — Split Text

Caracteres entram em stagger.

### D — Image Curtain

Painel laranja cobre a imagem e sai.

Reutilizar essas quatro entradas no site inteiro.

---

# 34. Timing da animação

Sugestão de linguagem:

```txt
microinteração     160–240ms
hover              200–350ms
entrada            500–800ms
hero               800–1400ms
page transition    600–1000ms
```

Easing-base sugerido:

```css
cubic-bezier(0.16, 1, 0.3, 1)
```

---

# 35. Botões

Não criar apenas um retângulo tradicional.

Estado normal:

```txt
ENTRE EM CONTATO ↗
```

Hover:

1. círculo laranja nasce atrás do texto;
2. círculo aumenta;
3. fundo fica laranja;
4. texto muda para preto;
5. seta gira.

Outra linguagem possível:

```txt
(●) FALAR COM A HAPRI
```

No hover, o ponto vira o background inteiro.

---

# 36. Links magnéticos

Links principais podem se mover alguns pixels em direção ao cursor.

Usar em:

- CTA;
- menu;
- links de cases;
- redes sociais.

Evitar em textos comuns.

---

# 37. Footer como grande encerramento

Em vez de rodapé pequeno:

```txt
TEM UMA
IDEIA?
```

ocupando quase toda a tela.

No hover em `IDEIA?` pode aparecer:

```txt
LET'S MAKE IT REAL.
```

Abaixo:

```txt
Instagram
Behance
LinkedIn
Email
Cidade
```

Final:

```txt
HAPRI STUDIO © 2026
```

com marquee lento.

---

# 38. Página de case

Estrutura:

```txt
CASE
↓
Hero fullscreen
↓
Contexto
↓
Problema
↓
Insight
↓
Direção
↓
Peças
↓
Motion
↓
Resultado
↓
Próximo projeto
```

O case deve parecer uma mini experiência, não um artigo.

---

# 39. Before / After interativo

Para branding, feed, landing page ou campanha:

```txt
ANTES | DEPOIS
```

Criar um slider com cursor próprio e transição suave.

---

# 40. Métricas com movimento

Evitar contador básico de `0 → 100`.

Exemplo:

```txt
+240%
ENGAGEMENT
```

O número entra muito grande e empurra o layout ou funciona como transição entre cases.

---

# 41. Depoimentos sem cards

Tela limpa com uma frase grande:

```txt
“Eles entenderam a marca
antes mesmo da gente.”
```

Ao mover o mouse, surgem nome, empresa e projeto relacionado.

---

# 42. Logos de clientes

Evitar o bloco padrão com 12 logos cinzas.

Alternativas:

- logos gigantes em movimento horizontal;
- nome do cliente que revela a campanha no hover;
- composição editorial tipográfica;
- parede interativa por segmento.

---

# 43. Áudio

Pode ser interessante, mas **nunca iniciar automaticamente**.

No showreel:

```txt
SOUND ON
```

Pode virar um pequeno equalizador animado. Fora do showreel, manter o site silencioso.

---

# 44. Microinterações úteis

- seta gira no hover;
- texto do botão desliza e é substituído;
- logo reage ao scroll;
- números de projeto mudam;
- linha acompanha o cursor;
- imagens têm parallax muito pequeno;
- menu fecha com snap;
- cursor muda de contexto;
- vídeos pausam fora da viewport;
- elementos respondem à velocidade do scroll.

---

# 45. Scroll Velocity

Quando o usuário rola rapidamente:

- títulos inclinam alguns graus;
- imagens recebem pequeno skew;
- marquee acelera;
- objetos acompanham a velocidade.

Quando o scroll para, tudo retorna suavemente à posição.

---

# 46. Tratamento de imagem

Criar uma regra Hapri consistente.

Opção 1:

```txt
normal: P&B
hover: colorida
```

Opção 2:

```txt
normal: imagem natural
hover: duotone laranja/preto
```

Evitar muitos tratamentos diferentes.

---

# 47. Composição editorial

Usar layouts assimétricos controlados:

```txt
                     01
PROJECT
          imagem

              estratégia
```

O grid existe tecnicamente, mas alguns elementos podem quebrá-lo propositalmente.

---

# 48. Números gigantes

Usar números como elementos gráficos:

```txt
01
02
03
04
```

Podem indicar cases, reagir ao hover, atravessar a viewport ou virar navegação.

---

# 49. Página 404

```txt
404
PERDEMOS ESSA IDEIA.
```

Um elemento laranja foge do mouse.

Botão:

```txt
VOLTAR PARA ALGO MELHOR
```

---

# 50. Loading de imagens com identidade

Enquanto a imagem não carregou:

```txt
background laranja
01
```

Quando carrega, o painel laranja desliza e revela a imagem.

---

# 51. Skeleton personalizado

Em vez de shimmer cinza, usar blocos em preto, laranja e creme, ou a forma orgânica Hapri pulsando lentamente.

---

# 52. Organização React recomendada

```txt
src/
│
├── assets/
│   ├── images/
│   ├── video/
│   ├── fonts/
│   └── models/
│
├── components/
│   ├── ui/
│   ├── motion/
│   │   ├── RevealText.tsx
│   │   ├── MaskReveal.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── Cursor.tsx
│   │   └── PageTransition.tsx
│   │
│   ├── media/
│   │   ├── SmartVideo.tsx
│   │   └── ImageReveal.tsx
│   │
│   └── three/
│       └── HapriScene.tsx
│
├── sections/
│   ├── Hero/
│   ├── Manifesto/
│   ├── Work/
│   ├── Services/
│   ├── Showreel/
│   ├── Lab/
│   └── Contact/
│
├── hooks/
│   ├── useIsMobile.ts
│   ├── useReducedMotion.ts
│   ├── useScrollVelocity.ts
│   └── useCursor.ts
│
├── lib/
│   ├── gsap.ts
│   ├── motion.ts
│   └── lenis.ts
│
├── styles/
│   ├── tokens.css
│   ├── typography.css
│   └── globals.css
│
└── pages/
```

---

# 53. Criar primitives de animação

Em vez de reescrever animações em cada seção:

```tsx
<RevealText>
  Impossible to ignore.
</RevealText>
```

```tsx
<MaskReveal>
  <img src="/case.webp" />
</MaskReveal>
```

```tsx
<MagneticButton>
  Vamos conversar
</MagneticButton>
```

Isso mantém consistência visual e facilita manutenção.

---

# 54. Tokens de motion

```ts
export const motionTokens = {
  duration: {
    fast: 0.2,
    normal: 0.5,
    slow: 0.9,
  },
  ease: {
    out: [0.16, 1, 0.3, 1],
  },
};
```

O site inteiro deve usar a mesma “personalidade” de movimento.

---

# 55. Reduced Motion

Prever usuários que preferem menos animação.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
  }
}
```

Para WebGL, vídeo vinculado ao scroll e efeitos complexos, criar também fallback explícito.

---

# 56. Mobile não deve ser uma versão quebrada do desktop

### Remover no mobile

- cursor customizado;
- hover effects;
- tilt baseado no mouse;
- image trail;
- WebGL pesado não essencial.

### Manter

- tipografia;
- máscaras;
- transições;
- vídeo;
- storytelling;
- identidade;
- entradas;
- interações por toque.

---

# 57. Performance

Um site experimental precisa continuar rápido.

Regras:

- lazy load de Three.js;
- carregar cena 3D apenas quando próxima da viewport;
- usar `<video>` em vez de GIF grande;
- usar AVIF/WebP para imagens;
- possuir `poster` nos vídeos;
- pausar vídeos fora da viewport;
- usar `IntersectionObserver`;
- priorizar `transform` e `opacity`;
- não renderizar WebGL quando a aba estiver oculta;
- limitar DPR em cenas Three.js;
- criar fallback estático para dispositivos fracos;
- fazer code splitting das páginas de case;
- carregar o reel completo somente após intenção do usuário.

---

# 58. O que eu colocaria na primeira versão

Não recomendo implementar todas as ideias deste documento.

## Obrigatórios

1. **Preloader Hapri**
2. **Hero com tipografia cinética**
3. **Cursor contextual**
4. **Lenis**
5. **Transições orgânicas usando a forma do logo**
6. **Portfolio fullscreen**
7. **Imagem → vídeo no hover**
8. **Menu fullscreen laranja**
9. **Showreel modal cinematográfico**
10. **Footer gigante**
11. **Reduced motion**
12. **Experiência mobile própria**

## Diferenciais

13. **Image trail em uma seção**
14. **Scroll velocity**
15. **Hapri Lab**
16. **Gerador de pôster**
17. **Uma única cena React Three Fiber**

Essa combinação já é suficiente para o site parecer muito diferente de uma agência convencional.

---

# 59. Fluxo visual ideal

## Abertura

```txt
preto
↓
logo
↓
orange portal
↓
HERO
```

## Hero

```txt
tipografia gigante
+
mouse reveal
+
showreel fragmentado
```

## Manifesto

```txt
texto cinético
+
marquee responsivo à direção
```

## Projetos

```txt
cases fullscreen
+
vídeo
+
transições contínuas
```

## Serviços

```txt
lista editorial
+
imagem seguindo cursor
```

## Método

```txt
scroll storytelling
```

## Lab

```txt
experimentos interativos
```

## Contato

```txt
CTA gigante
+
orange takeover
```

---

# 60. Assinatura visual da Hapri

Definir cinco regras e repeti-las:

```txt
01. Laranja aparece como resposta à interação.
02. A forma orgânica do logo é usada como máscara.
03. Tipografia é o principal elemento gráfico.
04. Projetos são apresentados em movimento.
05. Transições parecem contínuas, nunca “troca de página”.
```

Se essas cinco regras forem respeitadas, o site começa a ter uma linguagem própria.

---

# 61. Arquitetura de animação recomendada

```txt
                   ┌─────────────────┐
                   │     React       │
                   └────────┬────────┘
                            │
          ┌─────────────────┼──────────────────┐
          │                 │                  │
          ▼                 ▼                  ▼
       Motion             GSAP             R3F / Three
          │                 │                  │
 microinterações       timelines         WebGL especial
 componentes           storytelling      hero / lab
 hover                  scroll
 layout
          │                 │
          └──────────┬──────┘
                     ▼
                   Lenis
                     │
                     ▼
                   Scroll
```

### Separação ideal

**Motion**

```txt
maior parte das animações de interface
```

**GSAP**

```txt
sequências especiais e scroll complexo
```

**Three.js / React Three Fiber**

```txt
1 ou 2 experiências visuais
```

**Rive**

```txt
logo / ilustrações interativas
```

---

# 62. Pacotes iniciais

```bash
npm install motion
npm install gsap @gsap/react
npm install lenis
npm install three @react-three/fiber @react-three/drei
npm install @rive-app/react-webgl2
```

Sugestão de ordem:

```txt
React/Vite
↓
Motion
↓
Lenis
↓
GSAP
↓
Rive
↓
React Three Fiber
```

---

# 63. Fases de implementação

## Fase 1 — identidade

- tokens;
- cores;
- tipografia;
- grid;
- buttons;
- navigation;
- responsive.

## Fase 2 — motion system

- `RevealText`;
- `MaskReveal`;
- `MagneticButton`;
- cursor;
- page transition;
- motion tokens.

## Fase 3 — homepage

- preloader;
- hero;
- manifesto;
- serviços;
- cases;
- showreel;
- footer.

## Fase 4 — cases

Criar template reutilizável para projetos.

## Fase 5 — experiências

- image trail;
- scroll velocity;
- Rive;
- WebGL;
- Lab.

## Fase 6 — performance

- mobile;
- lazy loading;
- vídeos;
- bundle;
- acessibilidade;
- reduced motion;
- teclado;
- loading.

---

# 64. Prioridade por impacto

| Recurso | Impacto | Complexidade | Prioridade |
|---|---:|---:|---:|
| Hero cinético | Muito alto | Média | 1 |
| Portfolio fullscreen | Muito alto | Média | 2 |
| Máscara orgânica Hapri | Muito alto | Média | 3 |
| Page transitions | Alto | Média | 4 |
| Cursor contextual | Alto | Baixa/Média | 5 |
| Showreel | Alto | Média | 6 |
| Menu fullscreen | Alto | Baixa/Média | 7 |
| Scroll storytelling | Alto | Alta | 8 |
| Image trail | Médio/Alto | Média | 9 |
| Scroll velocity | Médio | Média | 10 |
| Rive | Alto | Média | 11 |
| React Three Fiber | Muito alto | Alta | 12 |
| Hapri Lab | Muito alto | Alta | 13 |
| Poster Generator | Muito alto | Alta | 14 |
| Easter egg | Médio | Baixa | 15 |

---

# 65. Regra para não virar “site de efeitos”

Antes de aprovar qualquer animação, perguntar:

```txt
1. Isso reforça a marca?
2. Isso ajuda a apresentar o trabalho?
3. Isso responde a alguma ação do usuário?
4. Isso cria hierarquia?
5. Isso continua bom depois da terceira visita?
```

Se todas as respostas forem “não”, remover o efeito.

---

# 66. Composição recomendada para a Hapri

### Background principal

```txt
#FFFFFF / #FFF7F1
```

### Hero

```txt
#0F1011
```

Tipografia branca.

Cursor e detalhes:

```txt
#FF741F
```

### Portfolio

Alternância entre creme, preto, laranja e branco.

### Transições

Sempre utilizar `#FF741F` ou a forma branca orgânica da marca.

### Tipografia

Uma grotesca/display muito forte para títulos e uma sans neutra para texto.

Títulos grandes:

```css
font-size: clamp(4rem, 11vw, 11rem);
```

---

# 67. Resultado esperado

A experiência ideal não deve parecer:

```txt
“site bonito de agência”
```

Ela deve parecer:

```txt
“isso só poderia ser o site da Hapri.”
```

O objetivo é criar uma identidade digital reconhecível mesmo quando o logo não estiver visível.

---

# 68. Referências técnicas oficiais

- Motion for React — https://motion.dev/docs/react
- GSAP + React — https://gsap.com/resources/React/
- Lenis — https://lenis.dev/
- React Three Fiber — https://r3f.docs.pmnd.rs/
- Drei — https://drei.docs.pmnd.rs/
- Three.js — https://threejs.org/
- Rive para React — https://rive.app/docs/runtimes/react/react
- Lottie — https://airbnb.io/lottie/
- Aceternity UI — https://ui.aceternity.com/

---

# 69. Brief técnico resumido para entregar ao desenvolvimento

```txt
Criar uma experiência digital experimental, editorial e altamente interativa
para a Hapri Studio.

Stack:
React + Vite + TypeScript.

Motion:
Motion como biblioteca principal.
GSAP para timelines e scroll complexo.
Lenis para smooth scroll.
React Three Fiber apenas para experiências WebGL específicas.
Rive opcional para símbolo/ilustração interativa.

Identidade:
Laranja #FF741F
Preto #0F1011
Branco #FFFFFF
Creme #FFF7F1

Conceito:
ORANGE PORTAL.

Usar o laranja como resposta às interações e a forma orgânica da marca
como máscara/transição.

Homepage:
preloader
hero cinético
manifesto
cases fullscreen
serviços editoriais
showreel
processo
Hapri Lab
contato
footer

Características:
tipografia cinética
cursor contextual
magnetic buttons
page transitions
image-to-video hover
scroll velocity
organic masks
fullscreen menu
showreel modal
uma experiência WebGL
reduced-motion fallback
mobile-specific experience

Evitar:
cards genéricos
glassmorphism
gradientes SaaS
animação fade-up em tudo
efeitos sem função
excesso de WebGL
site inteiro copiado de biblioteca de componentes
```

---

# 70. Ideia final — Hapri Portal

Se for escolher **somente uma coisa realmente exclusiva**, crie a transição **Hapri Portal**.

Toda vez que algo importante for aberto — case, menu, showreel ou contato — uma pequena forma orgânica nasce no ponto da interação, cresce até ocupar a viewport e a próxima experiência aparece por dentro dela.

```txt
CLICK
  ↓
  ●
  ↓
 (   )
  ↓
(     )
  ↓
██████████████
nova página
```

A mesma lógica pode existir no menu, nos cases e no showreel.

Isso transforma um simples efeito em **sistema de identidade** e faz o site parecer autoral em vez de apenas “cheio de animações”.
