# Status da Esteira de Videos: Fast Moto Rio

## 1. Estado Atual: Concluido com Scanner Oficial TEXA na Equipe Tecnica
- A esteira de videos da Fast Moto Rio foi atualizada com o novo video da secao de oficina/equipe, atendendo a demanda executiva do cliente Felipe:
  1. No video de equipe (media/video-equipe.mp4), o clipe generico anterior foi substituido por producao tecnica cinematografica destacando o Scanner Oficial TEXA Axone Voice em pleno funcionamento com o software homologado TEXA IDC5 BIKE.
  2. O display do scanner exibe interface nitida de telemetria avancada, curvas de injecao eletronica, parametros de sensores e mapeamento de ECU com dados em tempo real em ciano e verde, conectado via cabo OBD a motocicleta sobre o elevador hidraulico.
  3. Cenario em estetica Dark Racing de alta engenharia: iluminacao tecnica direcionada ao display e pecas metalicas da moto, ambiente escuro com profundidade de campo cinematografica e piso epoxi espelhado.
  4. Os videos 1 (video-hero.mp4) e 2 (motos-showcase-scroll.mp4) permanecem intactos e preservados conforme aprovacao anterior do Felipe.

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

### Video 3: Oficina & Diagnostico Oficial TEXA (media/video-equipe.mp4)
- Duracao: 6.5 segundos (390 frames a 60 FPS estrito).
- Resolucao: 1920x1080 pixels (16:9).
- Equipamento: Scanner Oficial TEXA Axone Voice operando com software IDC5 BIKE, leitura de ECU e sensores em tempo real.
- Codec: H.264 High Profile, level 4.2, has_b_frames=0 (-bf 0), GOP de 12 frames (-g 12), atomo moov no inicio (+faststart), sem audio (-an).
- Movimento: Dolly-in suave de 8% e pulsacao de telemetria a 60 FPS contínuo sem cortes.
- Cenario: Oficina Dark Racing de alta precisao, piso epoxi e iluminacao tecnica pontual.
- Peso: 2.80 MB (estritamente dentro da faixa de 2.0 MB a 3.5 MB).
- Poster Frame 0: images/equipe-primeiro-frame.jpg.

## 3. Matriz de Conformidade
- Desempenho mobile: has_b_frames=0 e GOP 12 em todos os tres videos para scrub fluido em canvas HTML5.
- Proibicao absoluta de travessoes: respeitada integralmente em codigo, documentacao, commits e mensagens.
