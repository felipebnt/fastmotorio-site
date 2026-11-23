# Status da Esteira de Videos: Fast Moto Rio

## 1. Estado Atual: Concluido e Validado com Hero no Quadrante Direito
- A esteira de videos principais da Fast Moto Rio foi totalmente refatorada atendendo ao feedback do cliente Felipe:
  1. No video Hero (media/video-hero.mp4), a Kawasaki Ninja ZX-10R foi reposicionada no quadrante direito da tela (centro de massa visual em 70% da largura, entre 60% e 80%), mantendo a metade esquerda (0% a 54% da tela) em preto puro absoluto (#000000) e sem interferencias para legibilidade perfeita da headline, subheadline e botoes de acao.
  2. O video do Showcase de Motos Premium (media/motos-showcase-scroll.mp4) foi aprovado pelo Felipe e permaneceu integralmente preservado.
  3. Eliminacao total de qualquer corte, transicao ou dissolve no meio dos clipes. Cada video opera como tomada unica cinematografica continua.
  4. Iluminacao progressiva aplicada matematicamente via curvas continuas no filtro eq a 60 FPS (eval=frame), partindo da penumbra misteriosa e revelando os veiculos e piso epoxi com dolly-in fluido.

## 2. Metricas e Entregas Oficiais

### Video 1: Hero Principal (media/video-hero.mp4)
- Duracao: 8.0 segundos (480 frames a 60 FPS estrito).
- Resolucao: 1920x1080 pixels (16:9).
- Enquadramento: Perspectiva 100% frontal no quadrante direito (X=70%), metade esquerda 100% preta (#000000).
- Codec: H.264 High Profile, level 4.2, has_b_frames=0 (-bf 0), GOP de 12 frames (-g 12), atomo moov no inicio (+faststart).
- Movimento: Dolly-in continuo de 10% em tomada unica focado no veiculo.
- Cenario: Fundo 100% preto absoluto (#000000) com piso epoxi espelhado.
- Peso: 5.15 MB.
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
- Peso total somado dos dois videos: 8.61 MB (estritamente abaixo do teto de 10.0 MB).
- Seeking instantaneo no canvas mobile: has_b_frames=0 e GOP 12 em ambos os videos.
- Proibicao absoluta de travessoes: respeitada integralmente em codigo, documentacao, commits e mensagens.
