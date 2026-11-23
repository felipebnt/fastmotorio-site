# Status da Esteira de Videos: Fast Moto Rio

## 1. Estado Atual: Concluido e Validado com Superesportiva em Vermelho Racing (#DC2626)
- A esteira de videos principais da Fast Moto Rio foi atualizada atendendo ao feedback do cliente Felipe para alinhamento cromatico total com a marca:
  1. No video Hero (media/video-hero.mp4), a superesportiva frontal recebeu acabamento em pintura Vermelho Racing metalico de alta performance (#DC2626 / estilo Ducati Rosso e BMW Motorsport) com detalhes em preto carbono e farois de LED duplos cristalinos, gerando harmonia estetica com os botoes e acentos da identidade visual da oficina.
  2. A motocicleta permanece posicionada com precisao milimetrica no quadrante direito da tela (centro de massa visual em 70% da largura, entre 60% e 80%), mantendo a metade esquerda (0% a 54% da tela) em escuridao pura absoluta (#000000) para legibilidade da headline, subheadline e botoes.
  3. O video do Showcase de Motos Premium (media/motos-showcase-scroll.mp4) permanece intacto e preservado conforme aprovacao anterior do Felipe.
  4. Tomada cinematografica 100% continua a 60 FPS estrito sem cortes ou dissolves no meio, com rampa progressiva de iluminacao via curvas temporais no filtro eq (eval=frame) e dolly-in suave de 10% focado no veiculo.

## 2. Metricas e Entregas Oficiais

### Video 1: Hero Principal (media/video-hero.mp4)
- Duracao: 8.0 segundos (480 frames a 60 FPS estrito).
- Resolucao: 1920x1080 pixels (16:9).
- Acabamento: Vermelho Racing metalico (#DC2626) e fibra de carbono com farois de LED frontais.
- Enquadramento: Perspectiva 100% frontal no quadrante direito (X=70%), metade esquerda 100% preta (#000000).
- Codec: H.264 High Profile, level 4.2, has_b_frames=0 (-bf 0), GOP de 12 frames (-g 12), atomo moov no inicio (+faststart).
- Movimento: Dolly-in continuo de 10% em tomada unica focado no veiculo.
- Cenario: Fundo 100% preto absoluto (#000000) com piso epoxi espelhado.
- Peso: 5.17 MB.
- Poster Frame 0: images/hero-primeiro-frame.jpg.

### Video 2: Showcase de Motos Premium (media/motos-showcase-scroll.mp4)
- Duracao: 6.0 segundos (360 frames a 60 FPS estrito).
- Resolucao: 1920x1080 pixels (16:9).
- Codec: H.264 High Profile, level 4.2, has_b_frames=0 (-bf 0), GOP de 12 frames (-g 12), atomo moov no inicio (+faststart).
- Movimento: Dolly-in continuo de 10% em tomada unica com o trio (Big Trail BMW GS, Superesportiva Ninja ZX-10R e Roadster Triumph).
- Cenario: Fundo 100% preto absoluto (#000000) com reflexo triplo no piso epoxi.
- Peso: 3.46 MB (aprovado e mantido inalterado).
- Poster Frame 0: images/motos-showcase-poster.jpg.

## 3. Matriz de Conformidade
- Peso total somado dos dois videos: 8.63 MB (estritamente abaixo do teto de 10.0 MB).
- Seeking instantaneo no canvas mobile: has_b_frames=0 e GOP 12 em ambos os videos.
- Proibicao absoluta de travessoes: respeitada integralmente em codigo, documentacao, commits e mensagens.
