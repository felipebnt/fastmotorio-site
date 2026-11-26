# Resumo Executivo e Régua de Pós-Venda da Fast Moto Rio

**Versão 1.0 | Novembro de 2026**

Documento preparado para a equipe da Fast Moto Rio e para a LF Nexus.
Tom: executivo, operacional, humano e direto. Zero travessões. Zero termos proibidos.

---

# PARTE 1: RESUMO EXECUTIVO DE TUDO QUE FOI FEITO ATÉ AGORA

## 1.1 Posicionamento e Arquitetura Visual

A Fast Moto Rio é uma oficina especializada multimarcas para motocicletas de média e alta cilindrada, localizada no Anil, Jacarepaguá, Rio de Janeiro (Rua Encontro Marcado, 174, CEP 22765-270). A oficina atende todas as marcas: Yamaha, Honda, Suzuki, Kawasaki, BMW Motorrad, Ducati, Triumph, Harley-Davidson, Royal Enfield, KTM, Bajaj, Haojue, Dafra e Shineray.

O site foi construído com arquitetura visual de alto impacto:

- **Scroll-Cinema:** sistema de animação no scroll que cria uma experiência cinematográfica ao navegar pelas seções da página.
- **Preloader inteligente:** aparece apenas quando o carregamento inicial leva 250ms ou mais, desaparecendo assim que os frames ficam prontos, com limite máximo (teto) de 1,8 segundo. Se o carregamento for inferior a 250ms, o preloader é pulado.
- **Carrossel contínuo de marcas:** exibe 14 logotipos oficiais monocromáticos das montadoras atendidas (Yamaha, Honda, Suzuki, Kawasaki, BMW Motorrad, Ducati, Triumph, Harley-Davidson, Royal Enfield, KTM, Bajaj, Haojue, Dafra e Shineray) em loop infinito.
- **Galeria com 19 fotos reais:** organizadas em 5 galerias fechadas sem buracos no desktop, com zoom interativo (lightbox) e animação no scroll.
- **Design Full Dark:** paleta escura (preto fosco) com vermelho racing (#E11D2E), inspirada em pista/MotoGP.

## 1.2 Adequação Técnica e Comercial

Durante o desenvolvimento, foram removidos termos inadequados para o público final:

- "acompanhamento instantâneo" (substituído por "acompanhamento pelo WhatsApp")
- "box" (substituído por "bancada" ou "oficina")
- "elevador" (substituído por "bancada" ou "espaço")
- "peças genuínas" (substituído por "componentes" ou "peças")
- "Motorex" (substituído por Gulf, Repsol e Motul)

Foram incluídos os óleos Gulf, Repsol e Motul como lubrificantes oficiais da oficina.

O catálogo de serviços foi expandido para 12 serviços, incluindo:

1. Mecânica Geral
2. Revisão Preventiva
3. Manutenção Corretiva
4. Preparação de Suspensão
5. Pane Elétrica
6. Pintura e Recuperação Geral
7. Instalação de Acessórios
8. Estética para Motos (novo)
9. Montagem e Balanceamento dos Pneus
10. Scanner Diagnóstico (Texa)
11. Proteção Veicular ELLO Benefícios (novo)
12. Atendimento via Seguro e Seguradoras (novo)

A parceria com a ELLO Benefícios oferece rastreador dedicado, reboque 24h no RJ e proteção total contra roubo, furto, colisão e terceiros.

## 1.3 Auditoria de Copy

Foi realizada uma auditoria completa de copy em todo o site:

- **87 trechos analisados** em 11 seções (Hero, Carrossel de Marcas, Padrão, Ecossistema, Serviços, Metodologia, Equipe, Galpão, Depoimentos, Contato, Rodapé).
- **38 melhorias aplicadas** para linguagem humana e natural em português do Brasil.
- **Backup integral** salvo em `BACKUP_COPY_ANTERIOR.md` com todo o texto original organizado por seção e número de linha.
- **Auditoria lado a lado** salva em `AUDITORIA_COPY_SITE.md` com texto atual e sugestão de novo texto para cada trecho.
- **Ajustes de quebra de linha no mobile** para evitar overflow horizontal.
- **Zero travessões** em todo o site após a auditoria.

Principais padrões de melhoria:

- Termos técnicos substituídos por linguagem natural ("torquímetro" para "ferramenta calibrada", "chicotes" para "fiação", "descontaminação ferrosa" para "limpeza profunda").
- Gírias profissionalizadas ("sem gambiarras" para "sem adivinhação", "no tato" para "no feeling").
- Termos corporativos simplificados ("hub definitivo" removido, "proteção patrimonial" para "proteção").
- Redundâncias eliminadas ("Engenharia de Fábrica" + "Torque Calibrado e Padrão de Fábrica" para "Padrão de Fábrica" + "Torque Calibrado").

## 1.4 Conversão, SEO, Infraestrutura e Preparação para Google Meu Negócio

- **Botões CTA:** todos com ícone oficial do WhatsApp, alternando entre "Agende seu atendimento" e "Agende sua experiência".
- **WhatsApp oficial:** (21) 96880-1919 (Lidiane).
- **CNPJ:** 57.045.822/0001-06.
- **Páginas legais:** Política de Privacidade e Termos de Uso (LGPD).
- **Página de confirmação:** arquivo HTML de agradecimento com mensagem de confirmação.
- **SEO:** meta tags, Open Graph, Twitter Cards, canonical URL.
- **Schema.org:** markup estruturado (AutoRepair, MotorcycleRepair) com endereço, telefone, horários, avaliações e catálogo de serviços.
- **sitemap.xml:** mapa do site para indexação.
- **robots.txt:** diretrizes para crawlers.
- **llms.txt:** arquivo para leitura por IAs (ChatGPT, Gemini, Perplexity).
- **Domínio próprio:** `https://fastmotorio.com.br` configurado na Vercel com tabela DNS para o Registro.br.
- **Preparação para Google Meu Negócio:** o site foi estruturado para consistência total de NAP (Nome, Endereço, Telefone) com a ficha do Google Meu Negócio. Endereço no Anil, Jacarepaguá (Rua Encontro Marcado, 174, CEP 22765-270). WhatsApp oficial (21) 96880-1919. CNPJ 57.045.822/0001-06. Schema.org com dados estruturados de endereço, telefone, horários e avaliações para que o Google exiba informações consistentes na ficha e no Ask Maps (Gemini). A URL do site com parâmetros UTM (`?utm_source=google&utm_medium=organic&utm_campaign=gbp_perfil`) deve ser inserida no campo "Website" da ficha para rastrear visitas originadas do Google Maps.

---

# PARTE 2: RÉGUA ATIVA DE PÓS-VENDA D30 E D90 NO WHATSAPP

## 2.1 Regras Operacionais de Disparo

### 2.1.1 Registro da Entrega

- A cada moto entregue na oficina, a Lidiane registra no sistema (planilha ou CRM) os seguintes dados: nome do cliente, modelo da moto, tipo de serviço realizado, data de entrega e número de WhatsApp.
- O registro deve ser feito no mesmo dia da entrega, sem atraso.

### 2.1.2 Personalização

- Toda mensagem deve usar o nome do cliente e o modelo da moto. Exemplo: "Olá, Rodrigo! Como está a sua BMW R 1250 GS?"
- Nunca enviar mensagem genérica sem personalização. Mensagem sem nome é descartada.

### 2.1.3 Horário Comercial

- Disparos apenas de segunda a sexta, das 09h às 17h.
- Nunca enviar mensagens aos sábados, domingos ou feriados.
- Nunca enviar mensagens após as 18h.

### 2.1.4 Anti-Ban no WhatsApp

- Máximo de 30 mensagens por dia por número.
- Intervalo mínimo de 3 minutos entre cada disparo.
- Nunca enviar a mesma mensagem para mais de 5 clientes no mesmo dia (variar o texto).
- Nunca usar listas de transmissão (broadcast). Enviar individualmente.
- Se o cliente responder "pare" ou "não quero mais", remover imediatamente da lista e não enviar mais.
- Usar o WhatsApp Business oficial da oficina: (21) 96880-1919.

### 2.1.5 Tom de Voz

- Humano, próximo e profissional. A Lidiane fala como se fosse uma amiga que entende de motos.
- Nunca usar linguagem robótica ou corporativa.
- Nunca usar emojis em excesso (máximo 2 por mensagem).
- Nunca mencionar "automação", "sistema" ou "campanha".
- Sempre assinar como "Lidiane" ou "Equipe Fast Moto Rio".

## 2.2 Régua D30 (30 Dias Após a Entrega)

### 2.2.1 Objetivo

Verificar se o cliente está satisfeito com o serviço realizado, identificar possíveis problemas e manter o relacionamento ativo para futuras visitas.

### 2.2.2 Mensagem Principal (para todos os tipos de serviço)

**Texto pronto para copiar e colar:**

Olá, [Nome]! Tudo bem? Aqui é a Lidiane da Fast Moto Rio. Faz 30 dias que sua [Modelo da Moto] passou por aqui e queria saber como ela está rodando. Algum detalhe, barulho ou dúvida? Estou à disposição. Abraço!

### 2.2.3 Variações por Tipo de Serviço

**Para Revisão e Mecânica:**

Olá, [Nome]! Tudo bem? Aqui é a Lidiane da Fast Moto Rio. Faz 30 dias que sua [Modelo da Moto] fez a revisão/mecânica aqui. Como está o comportamento do motor, freios e suspensão? Algum detalhe que queira me contar? Estou à disposição. Abraço!

**Para Estética para Motos:**

Olá, [Nome]! Tudo bem? Aqui é a Lidiane da Fast Moto Rio. Faz 30 dias que sua [Modelo da Moto] recebeu a estética aqui. O brilho e a proteção estão segurando bem? Algum detalhe sobre a pintura ou a vitrificação? Estou à disposição. Abraço!

**Para Atendimento via Seguro:**

Olá, [Nome]! Tudo bem? Aqui é a Lidiane da Fast Moto Rio. Faz 30 dias que sua [Modelo da Moto] foi atendida via seguro aqui. Como está o resultado do reparo? Algum detalhe ou dúvida sobre o serviço? Estou à disposição. Abraço!

### 2.2.4 Árvore de Resposta

**Cenário A: O cliente responde que está tudo perfeito**

**Resposta da Lidiane:**

Que ótimo saber, [Nome]! Fico feliz que a [Modelo da Moto] esteja rodando bem. Se puder deixar uma avaliação sincera no Google, ajuda muito a oficina a ser encontrada por outros pilotos da região: [LINK_CURTO_GOOGLE]. E se tiver algum amigo que também cuida da moto, pode indicar. A oficina tem parceria com a ELLO Benefícios para proteção veicular com rastreador e reboque 24h. Qualquer coisa, estou por aqui. Abraço!

**Regras:**
- Nunca oferecer desconto ou brinde em troca da avaliação.
- Nunca pedir "5 estrelas" ou palavras-chave específicas.
- A avaliação deve ser enviada pelo próprio celular do cliente.
- O link curto do Google deve ser copiado do painel do Google Meu Negócio.

**Cenário B: O cliente relata algum detalhe, barulho ou dúvida**

**Resposta da Lidiane:**

Entendi, [Nome]. Obrigada por me contar. Pode trazer a [Modelo da Moto] para a oficina para uma conferência rápida, sem custo. Qual dia e horário fica melhor para você? Estou à disposição para resolver isso. Abraço!

**Regras:**
- Acolher imediatamente, sem questionar o cliente.
- Nunca dizer "isso é normal" ou "não tem problema".
- Agendar conferência gratuita na oficina.
- Registrar a ocorrência para acompanhamento.
- Se o problema for grave, priorizar o atendimento no mesmo dia ou no dia seguinte.

## 2.3 Régua D90 (90 Dias Após a Entrega ou Última Visita)

### 2.3.1 Objetivo

Reativar o cliente para uma nova visita preventiva, lembrando da importância da manutenção periódica e oferecendo um motivo concreto para retornar.

### 2.3.2 Segmentação por Perfil de Uso

**Perfil 1: Uso diário e alta rodagem**

**Texto pronto para copiar e colar:**

Olá, [Nome]! Tudo bem? Aqui é a Lidiane da Fast Moto Rio. Faz 3 meses que a [Modelo da Moto] esteve aqui e, para quem roda todo dia, a revisão dos 3.000 km ou 3 meses já está no prazo. Freios, relação, óleo e pneus precisam de atenção regular para evitar surpresas na estrada. Quer agendar uma conferência preventiva? Estou à disposição. Abraço!

**Perfil 2: Média e alta cilindrada de fim de semana**

**Texto pronto para copiar e colar:**

Olá, [Nome]! Tudo bem? Aqui é a Lidiane da Fast Moto Rio. Faz 3 meses que a [Modelo da Moto] esteve aqui. Mesmo para quem roda só nos fins de semana, a manutenção preventiva é essencial: óleo, freios, suspensão e bateria precisam de atenção periódica. Quer agendar uma revisão preventiva? Estou à disposição. Abraço!

**Perfil 3: Manutenção de estética e vitrificação**

**Texto pronto para copiar e colar:**

Olá, [Nome]! Tudo bem? Aqui é a Lidiane da Fast Moto Rio. Faz 3 meses que a [Modelo da Moto] recebeu a estética aqui. A proteção da vitrificação cerâmica dura de 6 a 12 meses dependendo do uso e da exposição. Quer agendar uma manutenção da vitrificação para manter o brilho e a proteção? Estou à disposição. Abraço!

### 2.3.3 Gancho de Revisão de Fluidos e Componentes

Toda mensagem D90 deve incluir pelo menos um dos seguintes ganchos:

- **Óleo:** "O óleo Gulf, Repsol ou Motul precisa ser trocado a cada 3.000 a 5.000 km ou 3 meses, o que vier primeiro."
- **Relação:** "A relação (corrente, coroa e pinhão) precisa de lubrificação e ajuste a cada 1.000 km."
- **Freios:** "O fluido de freio deve ser trocado a cada 12 meses ou 10.000 km."
- **Pneus:** "A calibragem e o desgaste dos pneus devem ser verificados a cada 15 dias."
- **Suspensão:** "O óleo da suspensão deve ser trocado a cada 12 meses ou 15.000 km."

### 2.3.4 Follow-Up Gentil (D93)

Se o cliente não responder a mensagem D90 em 3 dias, enviar um follow-up gentil:

**Texto pronto para copiar e colar:**

Olá, [Nome]! Passando rapidinho para lembrar da mensagem anterior. Sei que a rotina é corrida. Quando tiver um tempinho, a [Modelo da Moto] agradece uma conferência preventiva. Sem pressa. Estou à disposição quando precisar. Abraço!

**Regras:**
- Enviar no máximo 1 follow-up.
- Após o follow-up, encerrar. Não insistir.
- Nunca usar urgência falsa ou pressão.

### 2.3.5 Script de Confirmação de Agendamento

Quando o cliente aceitar agendar, confirmar com:

**Texto pronto para copiar e colar:**

Perfeito, [Nome]! Agendado para [dia] às [hora] na Rua Encontro Marcado, 174, Anil, Jacarepaguá. Lembre de trazer a [Modelo da Moto] com o tanque cheio e os documentos. Qualquer dúvida antes, me chama. Até lá!

## 2.4 Checklist Operacional para a Lidiane

- [ ] Registro de entrega feito no mesmo dia (nome, modelo, serviço, data, WhatsApp).
- [ ] Mensagem D30 enviada 30 dias após a entrega (personalizada com nome e modelo).
- [ ] Resposta do cliente registrada (satisfeito ou com detalhe).
- [ ] Se satisfeito: avaliação no Google solicitada + gancho de indicação/ELLO.
- [ ] Se com detalhe: conferência gratuita agendada na oficina.
- [ ] Mensagem D90 enviada 90 dias após a entrega (segmentada por perfil de uso).
- [ ] Follow-up D93 enviado se não houver resposta em 3 dias.
- [ ] Agendamento confirmado com data, hora e endereço.
- [ ] Cliente removido da lista se pedir "pare" ou "não quero mais".
- [ ] Máximo de 30 mensagens por dia respeitado.
- [ ] Intervalo de 3 minutos entre disparos respeitado.
- [ ] Disparos apenas em horário comercial (seg-sex, 09h-17h).

## 2.5 Resumo Financeiro de Retenção

A régua D30 e D90 tem como objetivo:

1. **Aumentar a taxa de retorno:** clientes que retornam para manutenção preventiva geram receita recorrente.
2. **Reduzir o intervalo entre visitas:** de 6-12 meses para 3 meses (D90).
3. **Gerar avaliações no Google:** clientes satisfeitos que deixam avaliação aumentam a visibilidade da oficina no Maps.
4. **Gerar indicações:** clientes satisfeitos indicam amigos, reduzindo o custo de aquisição.
5. **Vender proteção ELLO:** gancho sutil de indicação gera receita adicional com a parceria.

Estimativa: se 30% dos clientes retornarem a cada 3 meses (em vez de 6-12 meses), a receita anual da oficina pode aumentar em até 40% com a mesma base de clientes.

---

# PARTE 3: GOOGLE MEU NEGÓCIO E CRONOGRAMA DE POSTAGENS (3 MESES)

## 3.1 Guia Rápido da Lidiane no Google Meu Negócio

### Frequência Semanal

- **1 post por semana** (publicar sempre no mesmo dia, sugestão: terça-feira pela manhã).
- **2 fotos reais da oficina por semana** (fachada, bancada, motos em atendimento). Nunca usar fotos de banco de imagens ou capturas de tela com dados de clientes.
- **Resposta a 100% das avaliações em até 48 horas** (positivas e negativas).

### Regras do Google Posts (inegociáveis)

1. **Não colocar número de telefone no corpo do texto.** O Google pode rejeitar o post. Usar o botão de ação oficial (Ligar agora, Saiba mais, Agendar).
2. **Não colocar @arroba no corpo do texto.** Mencionar o Instagram apenas no botão ou no link.
3. **Não colocar link no corpo do texto.** Usar sempre o botão de ação oficial com URL e parâmetros UTM.
4. **Texto entre 60 e 150 palavras.** Gancho forte nas 2 primeiras linhas (o preview corta o restante).
5. **Usar apenas fotos reais da oficina.** Nunca usar imagens de banco de fotos.
6. **Não listar bairros ou cidades no corpo do texto.** Mencionar "Anil, Jacarepaguá" apenas quando necessário para contexto.
7. **Aprovar cada post antes de publicar.** A Lidiane ou o Felipe devem aprovar o texto e a foto antes da publicação.

### Fotos Recomendadas (sem rostos de clientes)

- Fachada da oficina (diurna e noturna).
- Bancada de diagnóstico com Scanner TEXA.
- Motos em atendimento (Yamaha R1, BMW S1000XR, Honda Gold Wing, Ducati Hypermotard, Kawasaki Ninja, Triumph Tiger).
- Estética com lavagem técnica snow foam.
- Reboque ELLO em operação.
- Óleos Gulf, Repsol e Motul na bancada.
- Atendimento via seguro (vistoria, orçamento).
- Equipe uniformizada na bancada.

## 3.2 Cronograma de 3 Meses (12 Semanas)

Todas as 12 semanas estão prontas para copiar e colar no Google Meu Negócio. Cada semana contém: tema, texto pronto, botão de ação, URL com UTM e foto real sugerida.

### MÊS 1

#### Semana 1: Boas-Vindas e Apresentação da Oficina

**Tema:** Apresentar a oficina e o padrão de atendimento.

**Texto pronto (copiar e colar):**

Conheça a Fast Moto Rio, oficina especializada multimarcas no Anil, Jacarepaguá. Atendemos Yamaha, Honda, BMW, Triumph, Ducati, Kawasaki e demais marcas com Scanner TEXA, lubrificantes Gulf, Repsol e Motul, estética para motos e atendimento via seguro. Fotos e vídeos da bancada no WhatsApp para total transparência. Agende sua experiência com a Lidiane.

**Botão de ação:** Saiba mais

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana1

**Foto real sugerida:** Fachada diurna da oficina com motos na entrada e letreiro Fast Moto Rio.

#### Semana 2: Scanner TEXA e Diagnóstico Eletrônico

**Tema:** Destacar o diagnóstico computadorizado com Scanner TEXA.

**Texto pronto (copiar e colar):**

Sua moto com luz de injeção acesa ou comportamento irregular? Na Fast Moto Rio usamos Scanner TEXA Axone para leitura eletrônica de injeção, ABS e módulos. Diagnóstico preciso antes de abrir qualquer peça. Atendemos todas as marcas com ferramental homologado. Agende com a Lidiane e evite gastos desnecessários.

**Botão de ação:** Agendar

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana2

**Foto real sugerida:** Scanner TEXA Axone conectado na central de uma moto na bancada.

#### Semana 3: Estética para Motos e Vitrificação

**Tema:** Divulgar o serviço de estética e vitrificação cerâmica.

**Texto pronto (copiar e colar):**

Sua moto merece brilho de moto nova. Na Fast Moto Rio oferecemos lavagem técnica com produto neutro, descontaminação ferrosa de rodas e pinças, polimento de alta definição e vitrificação cerâmica com proteção UV. Proteção contra sol, chuva e poluição do Rio de Janeiro. Agende sua experiência de estética com a Lidiane.

**Botão de ação:** Agendar

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana3

**Foto real sugerida:** Moto recebendo lavagem técnica snow foam na bancada da oficina.

#### Semana 4: Atendimento via Seguro e Seguradoras

**Tema:** Divulgar o atendimento para motos seguradas.

**Texto pronto (copiar e colar):**

Teve sinistro na sua moto? A Fast Moto Rio atende via seguro e seguradoras com orçamento técnico detalhado, vistoria e execução completa de reparos mecânicos e estéticos. Trabalhamos com todas as seguradoras. Fotos e vídeos do serviço no WhatsApp para total transparência. Converse com a Lidiane e saiba como funciona.

**Botão de ação:** Saiba mais

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana4

**Foto real sugerida:** Moto em vistoria na oficina com equipe uniformizada.

### MÊS 2

#### Semana 5: Revisão Preventiva e Troca de Óleo

**Tema:** Incentivar a revisão preventiva e troca de óleo.

**Texto pronto (copiar e colar):**

Manutenção preventiva é a melhor forma de evitar surpresas na estrada. Na Fast Moto Rio realizamos revisão completa com checklist minucioso, torquímetro calibrado e lubrificantes Gulf, Repsol e Motul. Troca de óleo, inspeção de freios, suspensão e relação. Agende sua revisão preventiva com a Lidiane e rode com segurança.

**Botão de ação:** Agendar

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana5

**Foto real sugerida:** Bancada com óleos Gulf, Repsol e Motul e ferramentas de precisão.

#### Semana 6: Proteção Veicular ELLO Benefícios

**Tema:** Divulgar a parceria com a ELLO Benefícios.

**Texto pronto (copiar e colar):**

Sua moto protegida na cidade e nas estradas com a parceria Fast Moto Rio e ELLO Benefícios. Rastreador dedicado, reboque 24h em todo o RJ e proteção total contra roubo, furto, colisão e terceiros. Adesão facilitada sem análise de perfil. Converse com a Lidiane e solicite uma cotação de proteção veicular.

**Botão de ação:** Saiba mais

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana6

**Foto real sugerida:** Reboque ELLO em operação na porta da oficina com motos.

#### Semana 7: Preparação de Suspensão

**Tema:** Divulgar o serviço de preparação de suspensão.

**Texto pronto (copiar e colar):**

Suspensão dura ou mole demais? Na Fast Moto Rio realizamos calibração hidráulica de bengalas e amortecedores traseiros, troca de óleo específico e ajuste fino de pré-carga, compressão e retorno. Melhore a estabilidade e o conforto da sua moto. Agende a preparação de suspensão com a Lidiane.

**Botão de ação:** Agendar

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana7

**Foto real sugerida:** Suspensão de moto desmontada na bancada para calibração.

#### Semana 8: Fotos e Vídeos da Bancada (Transparência)

**Tema:** Destacar a transparência com fotos e vídeos no WhatsApp.

**Texto pronto (copiar e colar):**

Na Fast Moto Rio você acompanha cada detalhe do serviço na tela do seu celular. A Lidiane e a equipe enviam fotos e vídeos da sua moto direto da bancada. Você aprova previamente qualquer intervenção com clareza total. Nenhuma surpresa na entrega. Agende sua experiência e rode com tranquilidade.

**Botão de ação:** Saiba mais

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana8

**Foto real sugerida:** Tela de celular mostrando vídeo da bancada com moto em atendimento (sem dados de clientes visíveis).

### MÊS 3

#### Semana 9: Instalação de Acessórios

**Tema:** Divulgar a instalação de acessórios.

**Texto pronto (copiar e colar):**

Personalize sua moto com segurança. Na Fast Moto Rio realizamos instalação técnica de escapamentos esportivos, sliders de proteção, suportes de placa, bolhas aerodinâmicas e manetes homologados. Montagem com ferramental adequado e acabamento profissional. Agende a instalação de acessórios com a Lidiane.

**Botão de ação:** Agendar

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana9

**Foto real sugerida:** Moto com escapamento esportivo instalado na bancada.

#### Semana 10: Montagem e Balanceamento de Pneus

**Tema:** Divulgar a troca e balanceamento de pneus.

**Texto pronto (copiar e colar):**

Pneu desgastado ou desbalanceado compromete a segurança. Na Fast Moto Rio realizamos troca com maquinário pneumático especializado que não risca as rodas e balanceamento de precisão para máxima estabilidade em retas e curvas. Agende a troca e o balanceamento dos pneus da sua moto com a Lidiane.

**Botão de ação:** Agendar

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana10

**Foto real sugerida:** Pneu de moto sendo montado em máquina pneumática na oficina.

#### Semana 11: Pintura e Recuperação Geral

**Tema:** Divulgar o serviço de pintura e recuperação.

**Texto pronto (copiar e colar):**

Carenagem riscada ou tanque amassado? Na Fast Moto Rio oferecemos funilaria fina, alinhamento técnico e restauração estética de carenagens, tanque e pintura no padrão original de fábrica. Devolvemos o visual de moto nova com qualidade profissional. Agende uma avaliação de pintura com a Lidiane.

**Botão de ação:** Avaliar

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana11

**Foto real sugerida:** Carenagem de moto em processo de pintura na oficina.

#### Semana 12: Retrospectiva e Convite para Revisão

**Tema:** Fechar o trimestre com convite para revisão preventiva.

**Texto pronto (copiar e colar):**

A Fast Moto Rio agradece a confiança de todos os pilotos que passaram por aqui neste trimestre. Se sua moto ainda não fez a revisão preventiva, agende com a Lidiane. Scanner TEXA, lubrificantes Gulf, Repsol e Motul, estética e atendimento via seguro. Sua moto merece esse padrão de cuidado. Estamos no Anil, Jacarepaguá, com fácil acesso pela Linha Amarela.

**Botão de ação:** Agendar

**URL com UTM:** https://fastmotorio.com.br/?utm_source=google&utm_medium=organic&utm_campaign=gbp-post-semana12

**Foto real sugerida:** Collage ou foto panorâmica da oficina com várias motos e equipe.

## 3.3 Checklist de Publicação para a Lidiane

- [ ] Post publicado na terça-feira pela manhã.
- [ ] Texto copiado exatamente como está (sem alterações).
- [ ] Botão de ação selecionado corretamente.
- [ ] URL com UTM colada no campo de link.
- [ ] Foto real da oficina selecionada (sem rostos de clientes).
- [ ] Foto com boa iluminação e sem dados pessoais visíveis.
- [ ] Aprovação do Felipe ou da Lidiane antes da publicação.
- [ ] Resposta a todas as avaliações do Google em até 48 horas.
- [ ] 2 fotos reais publicadas por semana na galeria da ficha.
- [ ] Validação: zero travessões e zero número de telefone no corpo do post.

---

## FIM DO DOCUMENTO

**Arquivos gerados:**
- `RESUMO_EXECUTIVO_E_POS_VENDA_FAST_MOTO_RIO.md`
- `RESUMO_EXECUTIVO_E_POS_VENDA_FAST_MOTO_RIO.docx`

**Cópias em:**
- `/data/OpenBot/Shared/Workspace/fastmotorio-site/`
- `/data/OpenBot/Shared/Workspace/Bnt-Brain-Repo/01 - Projetos/Fast Moto Rio/`

**Validação:** Zero travessões. Zero termos proibidos. Português do Brasil impecável. .docx validado com python-docx.