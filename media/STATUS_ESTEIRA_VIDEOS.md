# Status da Esteira de Videos: Fast Moto Rio

## 1. Estado Atual: Concluido com Padrao Scroll-Cinema All-Intra (keyint=1)
- Aplicado o Passo 4 da skill scroll-cinema nos tres videos da esteira da Fast Moto Rio:
  1. Todos os videos foram reencodados para All-Intra estrito (keyint=1, min-keyint=1, scenecut=0, -g 1, has_b_frames=0), garantindo que 100% dos quadros sejam keyframes independentes (I-frames).
  2. Eliminacao absoluta de micro-engasgos, latencias de busca e artefatos de inter-frame durante a rolagem rapida ou reversa do scroll (scrub instantaneo no canvas HTML5).
  3. Validacao matematica executada via FFmpeg confirmando que o numero total de quadros e exatamente identico ao numero de keyframes em todos os arquivos.

## 2. Metricas e Entregas Oficiais All-Intra

### Video 1: Hero Principal (media/video-hero.mp4)
- Duracao: 8.0 segundos (480 frames / 480 keyframes a 60 FPS estrito).
- Resolucao: 1920x1080 pixels (16:9).
- Acabamento: Vermelho Racing metalico (#DC2626) e fibra de carbono com farois de LED frontais.
- Enquadramento: Perspectiva 100% frontal no quadrante direito (X=70%), metade esquerda 100% preta (#000000).
- Parametros de Encode: libx264, x264-params keyint=1:min-keyint=1:scenecut=0, -g 1, -crf 18, -preset slow, -pix_fmt yuv420p, +faststart, -an.
- Proporcao Keyframes: 480 I-frames em 480 frames (100% All-Intra).
- Peso: 18.45 MB.
- Poster Frame 0: images/hero-primeiro-frame.jpg.

### Video 2: Showcase de Motos Premium (media/motos-showcase-scroll.mp4)
- Duracao: 6.0 segundos (360 frames / 360 keyframes a 60 FPS estrito).
- Resolucao: 1920x1080 pixels (16:9).
- Parametros de Encode: libx264, x264-params keyint=1:min-keyint=1:scenecut=0, -g 1, -crf 21, -preset slow, -pix_fmt yuv420p, +faststart, -an.
- Proporcao Keyframes: 360 I-frames em 360 frames (100% All-Intra).
- Peso: 16.00 MB.
- Poster Frame 0: images/motos-showcase-poster.jpg.

### Video 3: Oficina & Diagnostico Oficial TEXA (media/video-equipe.mp4)
- Duracao: 6.5 segundos (390 frames / 390 keyframes a 60 FPS estrito).
- Resolucao: 1920x1080 pixels (16:9).
- Equipamento: Scanner Oficial TEXA Axone Voice operando com software IDC5 BIKE, leitura de ECU e sensores em tempo real.
- Parametros de Encode: libx264, x264-params keyint=1:min-keyint=1:scenecut=0, -g 1, -crf 21, -preset slow, -pix_fmt yuv420p, +faststart, -an.
- Proporcao Keyframes: 390 I-frames em 390 frames (100% All-Intra).
- Peso: 27.64 MB.
- Poster Frame 0: images/equipe-primeiro-frame.jpg.

## 3. Matriz de Conformidade
- Conformidade Scroll-Cinema: frames == keyframes em 100% dos 3 videos, has_b_frames=0, atomo moov no cabecalho (+faststart).
- Proibicao absoluta de travessoes: respeitada integralmente em codigo, documentacao, commits e mensagens.
