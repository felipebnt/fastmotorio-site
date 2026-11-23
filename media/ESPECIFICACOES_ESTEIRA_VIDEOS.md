# Especificacoes Tecnicas e Roteirizacao da Nova Esteira de Videos
## Fast Moto Rio (Referencia Visual Felipe - Prints image-2, image-4, image-5 e image-6)

### 1. Visao Geral e Direcao de Arte
Este documento formaliza o roteiro tecnico frame a frame e as diretrizes de producao, captacao e pos-producao para a refacao da esteira de videos da Fast Moto Rio.
A nova esteira traduz a referencia visual aprovada pelo Felipe (Ala Automoveis) para o universo das motocicletas de media e alta cilindrada (Kawasaki Ninja ZX-10R, BMW S1000RR, BMW R1250 GS e Triumph Tiger), corrigindo os erros de ritmo da versao anterior:
- Eliminacao de cortes acelerados e interrupcoes abruptas.
- Cadencia cinematografica mais lenta, fluida e natural (slow-motion suave).
- Respiracao de transicao organica entre penumbra, iluminacao de farois e abertura do box.
- Manutencao de 60 FPS estrito com codec otimizado para scrub no canvas do navegador.

---

### 2. Video 1: Hero Principal (video-hero.mp4)
- **Funcao na Pagina:** Video de abertura em canvas scrub sincronizado com a rolagem do scroll (#inicio).
- **Duracao Padrao:** 8.0 segundos (480 frames a 60 FPS).
- **Proporcao e Resolucao:** 1920x1080 pixels (16:9 estrito).
- **Especificacao de Encode:** H.264 High Profile, level 4.2, has_b_frames=0 (-bf 0), GOP de 12 frames (-g 12), atomo moov no inicio (+faststart), sem audio (-an), taxa de bits media de 3.400 kbps (peso final ~3.4MB a 3.8MB).
- **Veiculo em Cena:** Motocicleta superesportiva de alta cilindrada (Kawasaki Ninja ZX-10R ou BMW S1000RR) em acabamento Dark Racing (verde metalico/preto ou grafite com detalhes em fibra de carbono).

#### Roteiro Frame a Frame e Fases de Scroll:

#### Fase 1: Penumbra & Misterio (Scroll 0% a 25% | 0.0s a 2.0s | Frames 0 a 120)
- **Referencia Visual:** image-4.png.
- **Enquadramento e Posicao:** A motocicleta repousa estatica no quadrante direito da tela (centro de massa visual posicionado entre 65% e 85% da largura total). O quadrante esquerdo (0% a 50%) permanece em escuridao profunda para garantir legibilidade absoluta da headline ("MECANICA DE ALTA PERFORMANCE"), subheadline e botoes de CTA.
- **Iluminacao:** Galpao em ambiente escuro de alta penumbra. Farois da moto totalmente desligados. Luminarias de teto apagadas. Apenas uma luz de recorte minima e sutil (rim light fria) desenha o contorno da carenagem traseira, borda do pneu traseiro e topo do tanque de combustivel.
- **Comportamento de Camera:** Camera rigida ou com micro-drift quase imperceptivel de respiracao (menos de 1% de variacao espacial), criando tensao cinematografica e elegancia.
- **Poster Oficial:** O frame 0 exato deste bloco sera extraido como hero-primeiro-frame.jpg.

#### Fase 2: Ignicao dos Farois DRL & Feixes Volumetricos (Scroll 25% a 55% | 2.0s a 4.5s | Frames 120 a 270)
- **Referencia Visual:** image-5.png.
- **Acao Principal:** O conjunto optico frontal de LED da motocicleta e acionado. Primeiro pulsa o DRL estilizado e, em seguida, os projetores de LED cortam a escuridao.
- **Dinamica de Luz:** Dois fachos volumetricos imponentes se projetam para frente e para baixo em direcao ao solo. A luz reflete intensamente no piso de resina epoxi preta, criando manchas luminosas e reflexos especulares nitidos.
- **Estabilidade do Enquadramento:** A moto se mantem estatica na posicao a direita, mas a iluminacao agora ativa a base inferior da cena. A area textual no topo esquerdo continua preservada em contraste limpo.
- **Ritmo de Transicao:** Acendimento progressivo e controlado (rampa de brilho entre frames 120 e 150), transmitindo forca e potencia tecnologica.

#### Fase 3: Abertura do Galpao & Translacao Cinematografica (Scroll 55% a 100% | 4.5s a 8.0s | Frames 270 a 480)
- **Referencia Visual:** image-6.png.
- **Acao Principal:** As linhas de luminarias de LED no teto do galpao (barras lineares) acendem em sequencia suave (temperatura 5500K), revelando o ecossistema completo da oficina tecnica.
- **Cenario Revelado:** Piso resinado brilhante com faixas de sinalizacao tecnica, bancada de ferramentas e elevador hidraulico ao fundo sob leve profundidade de campo (bokeh). A maquina e iluminada por inteiro, destacando os freios a disco perfurados, suspensao dianteira invertida e textura da carenagem.
- **Movimento da Maquina e Camera:** Movimento suave e continuo em tracking diagonal ou avanco lento da moto em direcao ao centro-esquerda (terminando entre 40% e 55% da tela), assumindo posicao imponente no encerramento da dobra.
- **Desaceleracao Final:** Os ultimos 60 frames (1 segundo) possuem easing suave (desaceleracao organica), permitindo encaixe natural na transicao para a proxima secao.

---

### 3. Video 2: Showcase de Motos Premium (motos-showcase-scroll.mp4)
- **Funcao na Pagina:** Apresentacao visual do padrao da frota atendida (#padrao).
- **Duracao Padrao:** 6.0 segundos (360 frames a 60 FPS).
- **Proporcao e Resolucao:** 1920x1080 pixels (16:9 estrito).
- **Especificacao de Encode:** H.264 High Profile, has_b_frames=0 (-bf 0), GOP de 12 frames (-g 12), atomo moov no inicio (+faststart), taxa de bits media de 2.200 kbps (peso final ~1.6MB a 1.9MB).
- **Referencia Visual:** image-2.png.

#### Roteiro Frame a Frame e Fases de Cena:

#### Fase 1: Formacao do Trio na Penumbra (0.0s a 2.0s | Frames 0 a 120)
- **Composicao:** Tres motocicletas de alta cilindrada representativas dos pilares da oficina alinhadas lado a lado em perspectiva frontal estrita:
  1. Posicao Esquerda (X=20%): Big Trail (BMW R 1250 GS ou Triumph Tiger 1200 Rally).
  2. Posicao Centro (X=50%): Superesportiva (Kawasaki Ninja ZX-10R ou BMW S1000RR).
  3. Posicao Direita (X=80%): Naked / Roadster Premium (Triumph Speed Triple 1200 ou Ducati Streetfighter).
- **Iluminacao:** Fundo escuro com iluminacao zenital suave marcando os ombros e guidaos das tres motos. Farois desligados.
- **Poster Oficial:** O frame 0 exato compoe motos-showcase-poster.jpg.

#### Fase 2: Ignicao Simultanea dos Farois Frontais (2.0s a 4.0s | Frames 120 a 240)
- **Acao de Destaque:** Os farois de LED das tres maquinas acendem em sincronia milimetrica.
- **Efeito Visual:** Tres pares de fachos luminosos desenham colunas de luz no piso escuro, gerando triplo reflexo espelhado. A assinatura visual replica a forca do print image-2.png.

#### Fase 3: Iluminacao Superior e Dolly-In Suave (4.0s a 6.0s | Frames 240 a 360)
- **Movimento:** Camera executa um dolly-in frontal muito lento e estavel em direcao ao trio.
- **Luz de Preenchimento:** As barras de LED no teto acendem parcialmente, destacando o porte imponente das tres maquinas reunidas. Finaliza com respiracao estavel e estetica de catalogo de luxo.

---

### 4. Video 3: Galpao e Equipe Tecnica (video-equipe.mp4)
- **Funcao na Pagina:** Credibilidade e bastidores da engenharia mecanica (#galpao).
- **Duracao Padrao:** 6.5 segundos (390 frames a 60 FPS).
- **Proporcao e Resolucao:** 1920x1080 pixels (16:9 estrito).
- **Especificacao de Encode:** H.264 High Profile, has_b_frames=0 (-bf 0), GOP 12, peso ~2.6MB a 3.0MB.
- **Cenario e Acao:** Filmagem continua real de oficina de alta precisao. Mecanico especializado atuando na moto sobre elevador hidraulico pneumatico com torquimetro digital e ferramentas tecnicas. Zero cortes secos, ritmo cadenciado em slow-motion natural a 60 FPS com color grading Dark Racing.
- **Poster Oficial:** Frame 0 exato gera equipe-primeiro-frame.jpg.

---

### 5. Parametros Tecnicos de Captacao e Gravacao
Para alcancar o resultado identico as referencias:
1. **Camera:** Captacao em resolucao minima de 4K (3840x2160) em 60p ou 120p nativos (Sony FX3/FX6 ou RED), permitindo desaceleracao organica sem interpolacao artificial.
2. **Lentes:** Distancias focais de 35mm e 50mm com abertura ampla (f/1.8 a f/2.8) para isolamento do objeto e profundidade de campo cinematografica.
3. **Estabilizacao:** Slider motorizado de precisao ou dolly sobre trilhos para evitar micro-trepidacoes de gimbal manual.
4. **Tratamento de Superficie:** Piso do galpao encerado/resinado brilhante com acabamento epoxi para maximizar os reflexos dos farois e tubos de LED.
5. **Iluminacao:** Tubos de LED RGBW dimerizaveis no teto programados para rampa de fade-in controlado.

---

### 6. Matriz de Conformidade
- Peso total somado dos 3 videos: abaixo de 10.0 MB.
- Formato: 1920x1080 (16:9 estrito).
- Taxa de quadros: 60 FPS estrito.
- Seeking no Canvas: has_b_frames=0 e GOP=12 obrigatorios.
- Proibicao absoluta de travessoes em documentacao, codigo e mensagens.
