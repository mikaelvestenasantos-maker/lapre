// Conteúdo do app. É aqui que a liga edita/adiciona testes, exercícios, protocolos e casos.
// IMPORTANTE: todo o conteúdo clínico abaixo é um RASCUNHO inicial e precisa ser
// revisado pelo(a) professor(a) orientador(a) antes de uso real.

// "fonte": 'liga' = vem do documento da liga (MEMBRO INFERIOR.docx), 'literatura' = pesquisado na literatura.
// "regiao" define o agrupamento na tela: Membro inferior, Membro superior ou Coluna.
const TESTES = [
  // ---------- MEMBRO INFERIOR ----------
  {
    id: 'dorsiflexao', nome: 'Dorsiflexão em carga (Lunge / Knee-to-Wall)', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['mobilidade', 'tornozelo', 'pré-temporada'],
    objetivo: 'Medir a mobilidade de dorsiflexão do tornozelo em carga, importante para agachamento, saltos, aterrissagem e corrida.',
    como: [
      'Posicione o pé sobre uma fita métrica no chão, alinhando calcâneo, hálux e joelho, perpendicular à parede. Comece com o hálux a 10 cm da parede.',
      'Mantendo o calcanhar no chão (sobre uma folha de ofício), o atleta tenta tocar a parede com o joelho, sem perder o alinhamento.',
      'Se conseguir, afaste o pé da parede em incrementos de 1 cm até o joelho não tocar mais a parede sem levantar o calcanhar. Se não conseguir na posição inicial, aproxime o pé aos poucos até haver contato.',
      'Registre a distância máxima entre o hálux e a parede, com o calcanhar no chão e o joelho tocando a parede. O atleta pode se apoiar na parede e posicionar o outro membro de forma confortável.',
      'Faça 3 tentativas de treino e 3 testes válidos em cada membro.',
      'Outra forma de avaliar: medir o ângulo entre a tíbia e uma linha vertical em relação ao solo.'
    ],
    observar: ['Calcanhar levantando', 'Alinhamento do joelho com o 2º dedo', 'Dor anterior ou posterior no tornozelo', 'Diferença entre os lados'],
    interpretacao: [
      'Critério da liga: distância entre o hálux e a parede ≤ 9 cm indica restrição de movimento.',
      'Critério da liga: diferença entre os lados ≥ 2 cm é déficit clinicamente relevante de dorsiflexão (tornozelo/subtalar).',
      'Na literatura, valores próximos de 10 cm são usados como ponto de corte para mobilidade reduzida. Confirmar o valor final com o orientador.'
    ],
    erros: ['Calcanhar sem contato com o solo', 'Joelho fora do alinhamento do 2º dedo', 'Posição do pé diferente entre os lados'],
    refs: [
      'Bennell KL, Talbot RC, Wajswelner H, Techovanich W, Kelly DH, Hall AJ. Intra-rater and inter-rater reliability of a weight-bearing lunge measure of ankle dorsiflexion. Aust J Physiother. 1998;44(3):175-180. doi:10.1016/s0004-9514(14)60377-9',
      'Powden CJ, Hoch JM, Hoch MC. Reliability and minimal detectable change of the weight-bearing lunge test: a systematic review. Man Ther. 2015;20(4):524-532. doi:10.1016/j.math.2015.01.004'
    ]
  },
  {
    id: 'y-balance', nome: 'Star Excursion / Y Balance (SEBT modificado)', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['equilíbrio dinâmico', 'controle neuromuscular', 'risco de lesão', 'pré-temporada'],
    objetivo: 'Avaliar estabilidade e controle do membro inferior de apoio, com assimetrias entre os lados.',
    como: [
      'Fixe fitas métricas nas direções anterior, póstero-medial e póstero-lateral, formando um Y.',
      'Meça o comprimento dos membros inferiores (da EIAS ao maléolo lateral) para o cálculo.',
      'O atleta posiciona o pé do membro testado na intersecção das fitas, com o hálux bem centralizado, em apoio unipodal e com as mãos na cintura.',
      'Com o pé livre, toca a fita o mais longe possível em cada direção, sem descarregar peso nela.',
      'Se perder o equilíbrio ou apoiar o pé de alcance na fita, repita a tentativa.',
      'Faça 6 tentativas de familiarização e depois 3 tentativas válidas por direção.'
    ],
    observar: ['Perda de equilíbrio', 'Valgo dinâmico do joelho', 'Compensações de tronco e pelve', 'Diferença entre os lados'],
    interpretacao: [
      'Escore composto (%) = (ANT + PM + PL) ÷ (3 × comprimento do membro) × 100.',
      'Assimetria no alcance anterior maior que 4 cm entre os membros foi associada a maior risco de lesão (Plisky et al., 2006).',
      'Escore composto abaixo de cerca de 94% foi associado a maior risco em atletas femininas de basquete (Plisky et al., 2006). Não generalize para todos os esportes.'
    ],
    erros: ['Tentativa inválida: apoiar o pé de alcance, tirar a mão da cintura, levantar o calcanhar de apoio, perder o equilíbrio', 'Não medir o comprimento do membro', 'Mudar a ordem das direções entre os lados'],
    refs: [
      'Plisky PJ, Rauh MJ, Kaminski TW, Underwood FB. Star Excursion Balance Test as a predictor of lower extremity injury in high school basketball players. J Orthop Sports Phys Ther. 2006;36(12):911-919. doi:10.2519/jospt.2006.2244',
      'Gribble PA, Hertel J, Plisky P. Using the Star Excursion Balance Test to assess dynamic postural-control deficits and outcomes in lower extremity injury: a literature and systematic review. J Athl Train. 2012;47(3):339-357. doi:10.4085/1062-6050-47.3.08'
    ]
  },
  {
    id: 'hop-tests', nome: 'Testes de salto unipodal (Single e Triple Hop)', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['potência', 'força', 'simetria', 'retorno ao esporte', 'pré-temporada'],
    objetivo: 'Avaliar potência, controle e simetria funcional dos membros inferiores. Muito usado na decisão de retorno ao esporte.',
    como: [
      'Os atletas podem usar os membros superiores para ajudar na impulsão e devem permanecer com o pé no local da queda após a aterrissagem.',
      'Para cada teste: 1 tentativa de familiarização e 2 tentativas válidas. Comece pelo membro não dominante (ou não lesionado), depois o dominante.',
      'Posicione o paciente atrás da marcação, com o pé alinhado à marca zero. O paciente deve ficar cerca de 2 segundos na posição final para o salto valer.',
      'É inválida a tentativa em que tocar o outro membro inferior ou uma mão no chão, perder o equilíbrio na posição final ou precisar de um salto adicional.',
      'Single hop: salto unipodal com a maior distância possível. Meça do ponto mais posterior do calcanhar até a primeira marcação.',
      'Triple hop: três saltos consecutivos com o mesmo membro, buscando a maior distância. Meça do ponto mais posterior do calcanhar até a marca zero da fita.'
    ],
    observar: ['Valgo dinâmico na aterrissagem', 'Perda de estabilidade ao cair', 'Hesitação ou medo', 'Dor durante o teste'],
    interpretacao: [
      'Índice de simetria dos membros (%) = distância do membro envolvido (ou não dominante) ÷ distância do membro saudável (ou dominante) × 100.',
      'Critério da liga para a razão entre os membros: menor que 10% = baixo risco de lesão; de 10 a 20% = risco moderado; maior que 20% = alto risco.',
      'No retorno ao esporte pós-LCA, o critério mais usado é LSI ≥ 90%, junto com outros critérios. A distância isolada pode não bastar: avalie também a qualidade do movimento (compensações no quadril, joelho e tornozelo).'
    ],
    erros: ['Contar tentativa em que o atleta não estabilizou a aterrissagem', 'Mudar calçado ou superfície entre os lados', 'Fadiga por excesso de tentativas'],
    refs: [
      'Grindem H, Snyder-Mackler L, Moksnes H, Engebretsen L, Risberg MA. Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction: the Delaware-Oslo ACL cohort study. Br J Sports Med. 2016;50(13):804-808. doi:10.1136/bjsports-2016-096031',
      'Logerstedt DS, Scalzitti D, Risberg MA, Engebretsen L, Webster KE, Feller J, Snyder-Mackler L, Axe MJ. Knee stability and movement coordination impairments: knee ligament sprain revision 2017. J Orthop Sports Phys Ther. 2017;47(11):A1-A47. doi:10.2519/jospt.2017.0303'
    ]
  },
  {
    id: 'rot-quadril', nome: 'ADM de rotação de quadril (inclinômetro)', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['mobilidade', 'quadril', 'pré-temporada'],
    objetivo: 'Medir a amplitude de rotação interna e externa do quadril.',
    como: [
      'Paciente em decúbito ventral, com o joelho flexionado a 90 graus.',
      'Posicione o inclinômetro 5 cm abaixo da tuberosidade da tíbia.',
      'Estabilize a pelve do paciente.',
      'Peça uma rotação externa ou interna e registre o ângulo de inclinação na posição final.',
      'Faça 3 medidas e calcule a média. Se houver diferença maior que 10% entre os valores, faça uma nova medida.'
    ],
    observar: ['Compensação da pelve', 'Dor no final da amplitude', 'Diferença entre os lados e entre rotação interna e externa'],
    interpretacao: ['Valor de referência da liga: entre 30 e 40 graus.', 'Compare sempre os dois lados.'],
    erros: ['Pelve sem estabilização', 'Inclinômetro em posição diferente entre as medidas'],
    refs: ['Bierma-Zeinstra SM, Bohnen AM, Ramlal R, Ridderikhoff J, Verhaar JA, Prins A. Comparison between two devices for measuring hip joint motions. Clin Rehabil. 1998;12(6):497-505. doi:10.1191/026921598677459668']
  },
  {
    id: 'dinamometria', nome: 'Dinamometria manual (joelho e quadril)', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['força', 'isométrico', 'joelho', 'quadril', 'pré-temporada'],
    objetivo: 'Medir a força isométrica máxima de joelho e quadril com dinamômetro manual fixo por cinta.',
    como: [
      'Regra geral: contração isométrica máxima mantida por no mínimo 5 segundos, em 3 repetições, com 30 segundos de descanso entre elas, nos dois lados.',
      'Flexão de joelho: sentado sem apoio nas costas, pernas pendentes e joelhos a cerca de 90°, quadris a cerca de 90°. O paciente segura a lateral da maca para estabilizar o tronco.',
      'Extensão de joelho: sentado sem apoio nas costas, quadril a 90° e joelho a 60°. Dinamômetro na face anterior da tíbia distal, logo acima dos maléolos, fixo por cinta. O examinador estabiliza a coxa.',
      'Extensão de quadril: decúbito ventral, o paciente "abraça" a maca e flexiona o joelho a 90°. Dinamômetro na parte distal da coxa, cerca de 2 cm acima da fossa poplítea. O examinador estabiliza a pelve.',
      'Abdução de quadril: decúbito lateral, membro testado em posição neutra. Dinamômetro 5 cm acima da linha lateral do joelho. O examinador estabiliza a pelve e o tronco.',
      'Adução de quadril: decúbito lateral, pelve em inclinação neutra, quadril em flexão, extensão e rotação neutras. Dinamômetro 5 cm acima da linha medial do joelho. Pode-se apoiar o membro não testado em um banco de cerca de 36 cm.'
    ],
    observar: ['Compensações de tronco e pelve', 'Dor durante a contração', 'Diferença entre os lados'],
    interpretacao: ['Compare os lados (índice de simetria) e, quando possível, relacione a força ao peso corporal.', 'Valores de corte ainda não definidos neste documento: confirmar com o orientador e a literatura.'],
    erros: ['Dinamômetro fora do ponto padronizado', 'Cinta frouxa', 'Estabilização insuficiente da pelve ou da coxa'],
    refs: ['Thorborg K, Bandholm T, Hölmich P. Hip- and knee-strength assessments using a hand-held dynamometer with external belt-fixation are inter-tester reliable. Knee Surg Sports Traumatol Arthrosc. 2013;21(3):550-555. doi:10.1007/s00167-012-2115-2']
  },
  {
    id: 'slbt', nome: 'Ponte unipodal (Single Leg Bridge Test)', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['isquiotibiais', 'força', 'resistência', 'risco de lesão'],
    objetivo: 'Avaliar força e resistência dos isquiotibiais, relacionada ao risco de lesão da coxa posterior.',
    como: [
      'Atleta em decúbito dorsal, com um calcanhar apoiado em uma caixa de 60 cm de altura e o joelho a cerca de 20° de flexão.',
      'Braços cruzados sobre o peito. O outro membro fica pendente no ar e não pode ser usado para impulso ou balanço.',
      'O atleta eleva a pelve, tirando o glúteo do chão, e repete até a falha.',
      'A repetição só vale se o glúteo encostar no chão a cada vez.',
      'Faça 1 teste de familiarização e depois 1 tentativa válida em cada membro.'
    ],
    observar: ['Compensação com a lombar', 'Rotação da pelve', 'Diferença de repetições entre os lados'],
    interpretacao: ['Registre o número de repetições válidas e compare os lados.', 'Em jogadores de futebol australiano, menor número de repetições no lado direito foi associado a lesão de isquiotibiais (Freckleton et al., 2014). Valor de corte: confirmar na literatura.'],
    erros: ['Contar repetição sem encostar o glúteo no chão', 'Usar o outro membro para balanço', 'Altura da caixa diferente'],
    refs: ['Freckleton G, Cook J, Pizzari T. The predictive validity of a single leg bridge test for hamstring injuries in Australian Rules Football Players. Br J Sports Med. 2014;48(8):713-717. doi:10.1136/bjsports-2013-092356']
  },
  {
    id: 'step-down', nome: 'Step Down Test (qualidade do movimento)', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['controle motor', 'valgo dinâmico', 'dor femoropatelar', 'joelho'],
    objetivo: 'Avaliar a qualidade do movimento em descida de degrau: estabilidade lombo-pélvica, fraqueza do complexo póstero-lateral e valgo dinâmico do joelho. Validado para a síndrome da dor femoropatelar.',
    como: [
      'Marque a tuberosidade da tíbia do membro testado e uma marca de 1 cm na borda anterior do degrau.',
      'Altura do degrau: 15 cm para pacientes menores que 165 cm; 20 cm para menores que 185 cm; 25 cm para maiores que 186 cm.',
      'Paciente em pé no degrau, com o 2º dedo alinhado à marca da borda.',
      'O avaliador fica a 3 metros e posiciona a câmera de vídeo a cerca de 1,5 m de altura.',
      'Posição das mãos (sem consenso): sobre a pelve com os indicadores nas EIAS, ou com a falange distal do 3º metacarpo em contato com o processo coracóide.',
      'Peça 6 descidas (anterior ou lateral), chegando a cerca de 60° de flexão de joelho. A 1ª é de familiarização e as 5 seguintes são filmadas. Repita no outro membro.'
    ],
    observar: ['Estratégia de braços', 'Alinhamento do tronco', 'Plano da pelve', 'Posição do joelho', 'Membro não testado'],
    interpretacao: [
      'Pontuação (1 ponto cada): perda de contato das mãos; desvio do tronco da linha média; desvio do plano horizontal da pelve; descarga de peso ou oscilação do membro não testado.',
      'Posição do joelho: 1 ponto se a tuberosidade da tíbia ultrapassar o hálux sem passar do maléolo medial; 2 pontos se ultrapassar o maléolo medial.',
      'Qualidade do movimento: 0 a 1 = boa; 2 a 3 = moderada; 4 a 5 = pobre.'
    ],
    erros: ['Altura do degrau inadequada', 'Câmera mal posicionada', 'Não padronizar a posição das mãos'],
    refs: [
      'Loudon JK, Wiesner D, Goist-Foley HL, Asjes C, Loudon KL. Intrarater reliability of functional performance tests for subjects with patellofemoral pain syndrome. J Athl Train. 2002;37(3):256-261.',
      'Piva SR, Fitzgerald K, Irrgang JJ, Jones S, Hando BR, Browder DA, Childs JD. Reliability of measures of impairments associated with patellofemoral pain syndrome. BMC Musculoskelet Disord. 2006;7:33. doi:10.1186/1471-2474-7-33',
      'Teyhen DS, Shaffer SW, Lorenson CL, Wood SL, Rogers SM, Dugan JL, Walker MJ, Childs JD. Reliability of lower quarter physical performance measures in healthy service members. US Army Med Dep J. 2011:37-49.',
      'Boudreau SN, Dwyer MK, Mattacola CG, Lattermann C, Uhl TL, McKeon JM. Hip-muscle activation during the lunge, single-leg squat, and step-up-and-over exercises. J Sport Rehabil. 2009;18(1):91-103. doi:10.1123/jsr.18.1.91',
      'Measures of range of motion and strength among healthy women with differing quality of lower extremity movement during the lateral step-down test. J Orthop Sports Phys Ther. 2010. DOI: 10.2519/jospt.2010.3424.',
      'Factors associated with visually assessed quality of movement during a lateral step-down test among individuals with patellofemoral pain. J Orthop Sports Phys Ther. 2014. DOI: 10.2519/jospt.2014.5507.'
    ]
  },

  {
    id: 'bess', nome: 'BESS modificado (equilíbrio estático)', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['equilíbrio estático', 'tornozelo', 'concussão', 'pré-temporada'],
    objetivo: 'Avaliar a estabilidade postural estática e a estabilidade estática do tornozelo, contando erros de execução em posições de apoio.',
    como: [
      'Marque no chão um quadrado de 20 cm de lado. O paciente fica dentro dele, de olhos fechados e com os indicadores sobre as EIAS.',
      'Apoio unipodal: pé no centro do quadrado.',
      'Apoio tandem: pés em diagonal dentro do quadrado, em fila, com o polegar do membro dominante em contato com o calcanhar do pé não dominante.',
      'Variações: apoio unipodal e apoio tandem sobre uma base instável.',
      'Faça 3 tentativas de familiarização de 20 segundos cada, com 20 segundos de intervalo. Na 4ª tentativa, registre o número de erros de cada posição.',
      'Comece pelo membro não dominante ou pelo lado não lesionado.'
    ],
    observar: ['Abrir os olhos', 'Movimentos de tronco ou de quadril', 'Tirar os indicadores das EIAS', 'Apoiar o membro em suspensão no chão', 'Sair da área demarcada'],
    interpretacao: [
      'Erros no apoio unipodal: abrir os olhos, mover o tronco, tirar os dedos das EIAS, mover o quadril, apoiar no chão o membro em suspensão, sair da área demarcada.',
      'Erros no tandem: os mesmos, mais tirar o hálux, o arco plantar ou o calcanhar do solo e sair da posição tandem ou da área.',
      'Quanto maior o número de erros, pior o equilíbrio. Compare os lados e a evolução do atleta. Valores de corte: confirmar com o orientador e na literatura.'
    ],
    erros: ['Não fazer as 3 familiarizações', 'Superfície ou calçado diferente entre avaliações', 'Contar erros de forma diferente entre avaliadores'],
    refs: [
      'Riemann BL, Guskiewicz KM, Shields EW. Relationship between clinical and forceplate measures of postural stability. J Sport Rehabil. 1999;8(2):71-82. doi:10.1123/jsr.8.2.71',
      'Bell DR, Guskiewicz KM, Clark MA, Padua DA. Systematic review of the Balance Error Scoring System. Sports Health. 2011;3(3):287-295. doi:10.1177/1941738111403122'
    ]
  },
  {
    id: 'hop-extra', nome: 'Hop tests: 6 m Timed, Crossover e Side Hop', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['potência', 'agilidade', 'estabilidade dinâmica', 'retorno ao esporte'],
    objetivo: 'Completar a bateria de saltos unipodais com testes de tempo e de salto cruzado, além do Side Hop.',
    como: [
      'Com fita adesiva, marque duas linhas de 6 metros, com 15 cm de distância entre elas.',
      'Ordem da bateria: Single Hop for Distance, 6 m Timed Hop, Triple Hop e Cross Over Hop.',
      'Posicione o paciente atrás do início das marcações, com o pé do membro não dominante (ou não lesionado) alinhado à marca zero.',
      'Para cada teste: 1 tentativa de familiarização e 2 válidas. Comece pelo membro não dominante, depois o dominante.',
      '6 m Timed Hop: registre o tempo gasto para cruzar o final da marcação.',
      'Cross Over Hop: três saltos cruzando a linha central; meça a distância da marca zero ao calcanhar.',
      'Descanso: 30 segundos entre as tentativas e 2 a 3 minutos entre os saltos de testes diferentes.',
      'O paciente deve permanecer cerca de 2 segundos na posição final. É inválida a tentativa em que tocar o outro membro inferior ou uma mão no chão, perder o equilíbrio na posição final ou precisar de um salto adicional. Em geral, 2 tentativas válidas adicionais são permitidas.',
      'Side Hop: duas linhas a 30 cm uma da outra. O paciente fica ao lado de uma linha e faz 10 saltos laterais consecutivos, cruzando a outra e voltando, o mais rápido possível. Registre o tempo e repita no outro membro.'
    ],
    observar: ['Perda de equilíbrio na aterrissagem', 'Valgo dinâmico', 'Assimetria entre os membros', 'Medo ou hesitação'],
    interpretacao: [
      'Critério da liga para a razão entre os membros: menor que 10% = baixo risco de lesão; de 10 a 20% = risco moderado; maior que 20% = alto risco.',
      'O documento da liga cita boa confiabilidade: Single Hop e Triple Hop com ICC de 0,96; Timed Hop de 0,78 a 0,95; Cross Over Hop de 0,93 a 0,96; Side Hop teste-reteste de 0,75 a 0,97.',
      'Esses testes avaliam força e potência de joelho e estabilidade dinâmica de joelho e tornozelo.'
    ],
    erros: ['Não padronizar a ordem dos testes', 'Descanso insuficiente entre os saltos', 'Contar salto com apoio das mãos no chão'],
    refs: [
      'Bolgla LA, Keskula DR. Reliability of lower extremity functional performance tests. J Orthop Sports Phys Ther. 1997;26(3):138-142. doi:10.2519/jospt.1997.26.3.138',
      'Myers BA, Jenkins WL, Killian C, Rundquist P. Normative data for hop tests in high school and collegiate basketball and soccer players. Int J Sports Phys Ther. 2014;9(5):596-603.'
    ]
  },
  {
    id: 'single-leg-squat', nome: 'Single-Leg Squat (qualidade do movimento)', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['controle motor', 'valgo dinâmico', 'estabilidade lombo-pélvica', 'dor femoropatelar'],
    objetivo: 'Avaliar a estabilidade lombo-pélvica e o valgo dinâmico do joelho em agachamento unipodal. Validado para a síndrome da dor femoropatelar, segundo o documento da liga.',
    como: [
      'Marque a tuberosidade anterior da tíbia com adesivo reflexivo nos dois membros.',
      'Paciente em apoio unipodal, com as mãos sobre a pelve, realiza um agachamento.',
      'O avaliador fica a 3 metros e posiciona a câmera de vídeo a 1,5 m de altura do chão.',
      'Dê uma nota de 0, 5, 10 ou 15 para cada segmento analisado: tronco, pelve e quadril. Some as notas das 5 tentativas válidas.'
    ],
    observar: ['Desvio do tronco', 'Queda ou rotação da pelve', 'Adução e rotação interna do quadril e valgo do joelho'],
    interpretacao: [
      '0 = movimento neutro, sem desvios da linha média (plano frontal).',
      '5 = pequeno desvio lateral da linha média e/ou moderada frequência de oscilação do segmento.',
      '10 = moderado desvio lateral da linha média e/ou alta frequência de oscilação.',
      '15 = excessivo desvio lateral da linha média e/ou alta frequência de oscilação.',
      'Um estudo mostrou que o desempenho no single-leg squat reflete a função dos abdutores do quadril (Crossley et al., 2011).'
    ],
    erros: ['Câmera mal posicionada', 'Não padronizar a posição das mãos', 'Pontuar uma tentativa só em vez de somar as 5'],
    refs: [
      'Crossley KM, Zhang WJ, Schache AG, Bryant A, Cowan SM. Performance on the single-leg squat task indicates hip abductor muscle function. Am J Sports Med. 2011;39(4):866-873. doi:10.1177/0363546510395456',
      'Loudon JK, Wiesner D, Goist-Foley HL, Asjes C, Loudon KL. Intrarater reliability of functional performance tests for subjects with patellofemoral pain syndrome. J Athl Train. 2002;37(3):256-261.',
      'Boudreau SN, Dwyer MK, Mattacola CG, Lattermann C, Uhl TL, McKeon JM. Hip-muscle activation during the lunge, single-leg squat, and step-up-and-over exercises. J Sport Rehabil. 2009;18(1):91-103. doi:10.1123/jsr.18.1.91'
    ]
  },
  {
    id: 'less', nome: 'Landing Error Scoring System (LESS)', regiao: 'Membro inferior', fonte: 'liga',
    tags: ['aterrissagem', 'valgo dinâmico', 'LCA', 'prevenção'],
    objetivo: 'Avaliar a biomecânica de aterrissagem de salto, com foco no valgo dinâmico do joelho.',
    como: [
      'Paciente sobre um step ou caixa de 30 cm de altura.',
      'Marque no chão, à frente do step, uma fita a uma distância correspondente a 50% da altura do paciente.',
      'Posicione uma câmera à frente e outra ao lado da marcação, a 3,5 metros de distância e 1,22 m de altura.',
      'O paciente salta para a frente, aterrissa depois da linha e faz em seguida um salto vertical.',
      'Faça cerca de 2 saltos de familiarização. O 3º salto é gravado simultaneamente pelas duas câmeras.',
      'O salto é válido se os pés saem do step juntos, o salto é para a frente (não para cima) e passa da linha, a aterrissagem é com os dois pés, com apoio plantar total, e o movimento é fluido.'
    ],
    observar: ['Valgo dinâmico do joelho', 'Flexão de joelho e quadril na aterrissagem', 'Posição dos pés e do tronco'],
    interpretacao: [
      'Pontuação de erros (liga): ≤ 4 = excelente; > 4 e ≤ 5 = boa; > 5 e ≤ 6 = moderada; > 6 = pobre.',
      'O LESS mostrou ser válido e confiável para identificar padrões de aterrissagem de risco (Padua et al., 2009).',
      'A capacidade de prever lesão do LCA é controversa: em jovens atletas de futebol de elite, o corte de 5 teve sensibilidade de 86% e especificidade de 64%, com poucos casos de lesão (Padua et al., 2015). Em outra coorte, de atletas do ensino médio e universitários, o LESS não previu lesão do LCA (Smith et al., 2012). Use como avaliação do movimento, não como previsão de lesão.'
    ],
    erros: ['Câmeras fora da posição padrão', 'Aceitar salto inválido', 'Não filmar o 3º salto'],
    refs: [
      'Padua DA, et al. The Landing Error Scoring System (LESS) is a valid and reliable clinical assessment tool of jump-landing biomechanics: the JUMP-ACL study. Am J Sports Med. 2009;37(10):1996-2002. doi:10.1177/0363546509343200',
      'Padua DA, et al. The Landing Error Scoring System as a screening tool for an anterior cruciate ligament injury-prevention program in elite-youth soccer athletes. J Athl Train. 2015;50(6):589-595. doi:10.4085/1062-6050-50.1.10',
      'Smith HC, et al. A prospective evaluation of the Landing Error Scoring System (LESS) as a screening tool for anterior cruciate ligament injury risk. Am J Sports Med. 2012;40(3):521-526. doi:10.1177/0363546511429776'
    ]
  },

  // ---------- MEMBRO SUPERIOR ----------
  {
    id: 'adm-ombro', nome: 'ADM de rotação medial e lateral de ombro (inclinômetro)', regiao: 'Membro superior', fonte: 'liga',
    tags: ['mobilidade', 'ombro', 'arremesso', 'pré-temporada'],
    objetivo: 'Medir a amplitude de rotação medial (interna) e lateral (externa) do ombro, com o ombro a 90° de abdução.',
    como: [
      'Atleta em decúbito dorsal, joelhos flexionados e pés apoiados, com ombro e cotovelo a 90°. O braço deve ficar bem apoiado na maca, com o cotovelo no mesmo nível dela.',
      'Posicione o inclinômetro logo acima do punho, em região estável, alinhado ao plano do movimento.',
      'Rotação lateral: inclinômetro na face anterior (palmar) do antebraço. O examinador fica perto do tronco do atleta.',
      'Rotação medial: inclinômetro na face dorsal do antebraço. O examinador fica perto da cabeça do atleta, estabiliza a escápula pressionada contra a maca e faz o movimento de forma passiva. Pare a amplitude quando sentir que a escápula vai começar a se afastar da maca.',
      'Mantenha 90° de abdução do ombro e 90° de flexão do cotovelo durante toda a medida.',
      'Faça 2 repetições de cada lado. Faça uma terceira se a diferença entre elas for de 5° ou mais.'
    ],
    observar: ['Escápula saindo da maca', 'Perda dos 90° de abdução ou de flexão do cotovelo', 'Dor no final da amplitude', 'Diferença entre os lados'],
    interpretacao: ['Compare os dois lados, a rotação medial e a lateral e a soma das duas (amplitude total).', 'Valores de corte não constam no documento da liga: confirmar com o orientador e na literatura, principalmente em atletas de arremesso.',
      'Referência de comparação: em 176 atletas universitários e recreativos de arremesso, o arco total de movimento (rotação medial em decúbito lateral mais rotação lateral supina) foi em média de cerca de 160° no ombro dominante e 163° no não dominante, com déficit de cerca de 4° no dominante. O arco medido com a rotação medial em supino foi cerca de 14° maior: o método da liga é supino, então não compare diretamente (Cieminski et al., 2015).'],
    erros: ['Escápula sem estabilização na rotação medial', 'Cotovelo fora do nível da maca', 'Inclinômetro fora do plano do movimento'],
    refs: ['Cieminski CJ, Klaers H, Kelly SM, Stelzmiller MR, Nawrocki TJ, Indrelie AJ. Total arc of motion in the sidelying position: evidence for a new method to assess glenohumeral internal rotation deficit in overhead athletes. Int J Sports Phys Ther. 2015;10(3):319-331.']
  },
  {
    id: 'discinese', nome: 'Discinese escapular (filmagem)', regiao: 'Membro superior', fonte: 'liga',
    tags: ['escápula', 'ombro', 'controle motor', 'arremesso'],
    objetivo: 'Identificar movimento anormal da escápula (escápula alada ou perda do ritmo) durante a elevação do braço com carga.',
    como: [
      'Filme o movimento de abdução do ombro no plano escapular (30° à frente do plano frontal; peça para fazer um "V" aberto), nos dois lados, 5 repetições.',
      'Carga: 2 kg para quem pesa mais de 68 kg e 1 kg para quem pesa menos de 68 kg.',
      'Antes, faça uma familiarização sem carga para verificar o ritmo (cerca de 3 segundos para subir e 3 para descer) e o plano da escápula.',
      'Use fundo neutro e câmera alinhada ao plano do movimento. Enquadre todo o movimento, incluindo a parte superior da pelve, a cabeça e os cotovelos, durante toda a amplitude.'
    ],
    observar: ['Escápula alada (winging)', 'Perda do ritmo escapulo-umeral (disritmia)', 'Elevação precoce ou assimétrica da escápula'],
    interpretacao: [
      'Na descrição original do teste, discinese escapular é a presença de escápula alada ou de disritmia, classificada em cada lado como normal, sutil ou óbvia (McClure et al., 2009).',
      'O estudo original usou cargas de 1,4 kg ou 2,3 kg e movimentos de flexão e abdução no plano frontal. A liga usa 1 kg ou 2 kg no plano escapular, então os dados não são diretamente comparáveis.'
    ],
    erros: ['Câmera fora do plano do movimento', 'Não fazer a familiarização', 'Ritmo de subida e descida diferente do combinado'],
    refs: ['McClure P, Tate AR, Kareha S, Irwin D, Zlupko E. A clinical method for identifying scapular dyskinesis, part 1: reliability. J Athl Train. 2009;44(2):160-164. doi:10.4085/1062-6050-44.2.160']
  },
  {
    id: 'uqybt', nome: 'Y Balance Test, membro superior (UQYBT)', regiao: 'Membro superior', fonte: 'liga',
    tags: ['estabilidade do ombro', 'cadeia cinética fechada', 'controle neuromuscular', 'pré-temporada'],
    objetivo: 'Avaliar a estabilidade e o controle neuromuscular do membro superior e do tronco em cadeia cinética fechada.',
    como: [
      'Mostre ao atleta um vídeo do teste. O braço dominante (de arremesso) fica apoiado no solo e o braço de alcance é o não dominante.',
      'Posição inicial: tronco paralelo ao solo, apoio nas pontas dos pés descalços, na distância dos ombros. Mantenha 90° entre os braços e o tronco.',
      'A mão de apoio fica centralizada na "perna" do Y, com a borda ulnar (lado do dedo mínimo) encostada em uma fita perpendicular, na intersecção das 3 fitas.',
      'Com a mão livre, o atleta faz esforço máximo para alcançar a maior distância, empurrando a base do indicador (cone), não o topo, em três direções: medial, látero-superior e látero-inferior (em relação à mão de apoio).',
      'Os 3 alcances são feitos um após o outro, sem grandes pausas. O atleta desliza o cone até a distância máxima, sem perder o contato com ele.',
      'Faça 1 teste de familiarização e 2 testes válidos. Registre a distância de cada direção.',
      'Meça o comprimento do membro superior (da C7 à ponta do terceiro dedo) para o cálculo.'
    ],
    observar: ['Perda de equilíbrio', 'Compensações de tronco e escápula', 'Diferença entre os lados'],
    interpretacao: [
      'Escore composto (%) = soma dos três alcances ÷ (3 × comprimento do membro) × 100.',
      'O teste é descartado e repetido se o atleta: (1) não mantiver a postura de apoio, (2) perder o contato da mão de alcance com o indicador, (3) usar o indicador como apoio, (4) não retornar a mão de alcance de forma controlada ou (5) levantar qualquer um dos pés do solo.',
      'Em adultos ativos, médias do escore composto de cerca de 80 a 82% do comprimento do membro foram descritas por Gorman et al. (2012). Não houve diferença entre braço dominante e não dominante em universitários (Westrick et al., 2012), o que permite usar o lado não lesionado como referência.',
      'Critério da liga para a razão entre os membros: menor que 10% = baixo risco de lesão; de 10 a 20% = risco moderado; maior que 20% = alto risco. O documento da liga informa que não houve validação do teste para nenhuma lesão até o momento.'
    ],
    erros: ['Tirar a mão de apoio da posição', 'Empurrar o indicador em vez de deslizar', 'Não medir o comprimento do membro'],
    refs: [
      'Gorman PP, Butler RJ, Plisky PJ, Kiesel KB. Upper Quarter Y Balance Test: reliability and performance comparison between genders in active adults. J Strength Cond Res. 2012;26(11):3043-3048. doi:10.1519/JSC.0b013e3182472fdb',
      'Westrick RB, Miller JM, Carow SD, Gerber JP. Exploration of the Y-Balance Test for assessment of upper quarter closed kinetic chain performance. Int J Sports Phys Ther. 2012;7(2):139-147.',
      'Williamson JD, Lawson BL, Sigley D, Nasypany A, Baker RT. Intra- and inter-rater reliability for limb length measurement and trial error assessment of the Upper Quarter Y-Balance Test in healthy adults. Int J Sports Phys Ther. 2019;14(5):707-714.'
    ]
  },
  {
    id: 'dinam-ombro', nome: 'Dinamometria de rotação lateral e medial do ombro', regiao: 'Membro superior', fonte: 'liga',
    tags: ['força', 'isométrico', 'ombro', 'arremesso', 'pré-temporada'],
    objetivo: 'Medir a força isométrica dos rotadores do ombro, no membro de arremesso.',
    como: [
      'Atleta sentado em uma cadeira, pés no chão e costas apoiadas no encosto. Testar o membro usado para arremessar. A mão do outro lado fica apoiada na cadeira.',
      'Ombro e cotovelo a 90°, apoiados em uma superfície estável (por exemplo, apoio de braço de coleta de sangue).',
      'Dinamômetro logo acima do punho, estabilizado contra a parede com um pé de mesa. Distância entre a parede e o apoio de braço de cerca de 80 a 90 cm. Limiar do aparelho em 4 kgf.',
      'Oriente que o movimento é uma rotação feita só com o ombro, sem mover em adução ou abdução horizontal e sem mexer o cotovelo ou o tronco. Peça antes o movimento contra a mão do examinador para checar a compreensão e as compensações.',
      'Cada repetição máxima dura 5 segundos. Faça 2 medidas, com até 10% de diferença entre elas. Se necessário, faça uma terceira e use as duas mais próximas.',
      'Oriente a não usar força de tronco nem cervical e a olhar para a frente.'
    ],
    observar: ['Compensações de tronco e cervical', 'Movimento de cotovelo', 'Dor durante a contração'],
    interpretacao: ['Compare os lados e a relação entre rotação lateral e medial.', 'Valores de corte não constam no documento da liga: confirmar com o orientador e na literatura.',
      'Em 42 adultos, a força de rotação medida com dinamômetro portátil, com o ombro a 90° de abdução, teve confiabilidade boa a excelente (CCI de 0,89 a 0,92 e mudança mínima detectável de cerca de 8 N) (Decleve et al., 2020). A confiabilidade vale para o protocolo do estudo: padronize a posição como no documento da liga.'],
    erros: ['Cotovelo sem apoio', 'Dinamômetro fora do ponto padronizado', 'Usar força de tronco'],
    refs: ['McLaine SJ, Ginn KA, Kitic CM, Fell JW, Bird ML. The reliability of strength tests performed in elevated shoulder positions using a handheld dynamometer. J Sport Rehabil. 2016;25(2). doi:10.1123/jsr.2015-0034',
      'Decleve P, Van Cant J, De Buck E, Van Doren J, Verkouille J, Cools AM. The Self-Assessment Corner for shoulder strength: reliability, validity, and correlations with upper extremity physical performance tests. J Athl Train. 2020;55(4):350-358. doi:10.4085/1062-6050-471-18']
  },
  {
    id: 'medicine-ball', nome: 'Arremesso de medicine ball unilateral', regiao: 'Membro superior', fonte: 'liga',
    tags: ['potência', 'membro superior', 'arremesso', 'pré-temporada'],
    objetivo: 'Avaliar a potência do membro superior de arremesso.',
    como: [
      'Atleta com costas, cabeça e pelve encostadas na parede durante todo o teste.',
      'Posição inicial: bola na altura do ombro e a mão do outro lado sobre o abdômen.',
      'O movimento não é um arco: apenas arremessar ou empurrar a bola para a frente. Não pode tirar costas nem cabeça da parede.',
      'Passe amido de milho na bola para ela marcar o chão. Atenção para não confundir com outras marcas. Refaça o processo a cada arremesso e meça a distância logo após cada um.',
      'Testar só o lado dominante (braço de arremesso), com 1 familiarização e 2 repetições válidas.'
    ],
    observar: ['Costas ou cabeça saindo da parede', 'Movimento em arco', 'Dor durante o arremesso'],
    interpretacao: ['Registre a distância das tentativas válidas (melhor ou média, padronize).', 'Peso da bola e valores de referência não constam no documento: confirmar com o orientador e na literatura.',
      'Não encontrei estudo do arremesso unilateral contra a parede. A versão mais estudada é o arremesso sentado (seated medicine ball throw), que em handebolistas se correlacionou de forma moderada com a força de rotação do ombro (r de 0,57 a 0,63) e com o CKCUEST (Decleve et al., 2020). Tratar a versão da liga como adaptação a confirmar.'],
    erros: ['Tirar as costas da parede', 'Medir a marca errada no chão', 'Peso da bola diferente entre avaliações'],
    refs: ['Decleve P, Van Cant J, De Buck E, Van Doren J, Verkouille J, Cools AM. The Self-Assessment Corner for shoulder strength: reliability, validity, and correlations with upper extremity physical performance tests. J Athl Train. 2020;55(4):350-358. doi:10.4085/1062-6050-471-18']
  },
  {
    id: 'ckcuest', nome: 'Teste de estabilidade do membro superior em cadeia fechada (CKCUEST)', regiao: 'Membro superior', fonte: 'liga',
    tags: ['estabilidade do ombro', 'potência', 'cadeia cinética fechada', 'pré-temporada'],
    objetivo: 'Avaliar a estabilidade dinâmica e a potência do membro superior em cadeia cinética fechada.',
    como: [
      'Marque no chão duas fitas paralelas, a 81 cm uma da outra ou conforme a distância biacromial. (O teste original usa 36 polegadas, cerca de 91 cm.)',
      'O paciente fica na posição de flexão de braços, com as mãos ao lado das fitas, alinhadas aos ombros, e os membros inferiores estendidos, alinhados aos quadris. Mulheres podem apoiar os joelhos flexionados no solo, sobre uma espuma.',
      'Por 15 segundos, ele faz o maior número possível de toques alternados entre as mãos. Registre o total.',
      'O paciente pode usar qualquer estratégia de movimento de tronco e quadril.'
    ],
    observar: ['Perda de alinhamento do tronco', 'Elevação dos ombros', 'Queda de ritmo por fadiga'],
    interpretacao: [
      'Potência de membros superiores (PMS) = toques × (0,68 × massa corporal em kg) ÷ 15. O 0,68 corresponde à massa de membros superiores, tronco e cabeça.',
      'Normalização: divida o número de toques pela altura do paciente em metros.',
      'Classificação da liga: menos de 21 toques = alto risco de lesão; de 21 a 31 = risco moderado; mais de 31 = baixo risco.',
      'Em jogadores de futebol americano universitário (n = 26, 6 lesões), o corte de 21 toques teve sensibilidade de 0,83 e especificidade de 0,79 para lesão de ombro na temporada (Pontillo et al., 2014). A amostra é pequena: use com cautela.'
    ],
    erros: ['Distância entre as fitas diferente do padrão', 'Quadril elevado ou caído', 'Contar toques sem tocar a fita'],
    refs: [
      'Goldbeck TG, Davies GJ. Test-retest reliability of the closed kinetic chain upper extremity stability test: a clinical field test. J Sport Rehabil. 2000;9(1):35-45. (não localizado no PubMed: confirmar)',
      'Pontillo M, Spinelli BA, Sennett BJ. Prediction of in-season shoulder injury from preseason testing in division I collegiate football players. Sports Health. 2014;6(6):497-503. doi:10.1177/1941738114523239',
      'Tucci HT, et al. Closed Kinetic Chain Upper Extremity Stability test (CKCUES test): a reliability study in persons with and without shoulder impingement syndrome. BMC Musculoskelet Disord. 2014;15:1. doi:10.1186/1471-2474-15-1',
      'Roush JR, Kitamura J, Waits MC. Reference values for the Closed Kinetic Chain Upper Extremity Stability Test (CKCUEST) for collegiate baseball players. N Am J Sports Phys Ther. 2007;2(3):159-163.',
      'de Oliveira VMA, Pitangui ACR, Nascimento VYS, da Silva HA, Dos Passos MHP, de Araújo RC. Test-retest reliability of the closed kinetic chain upper extremity stability test (CKCUEST) in adolescents: reliability of CKCUEST in adolescents. Int J Sports Phys Ther. 2017;12(1):125-132.'
    ]
  },

  // ---------- COLUNA ----------
  {
    id: 'rot-toracica', nome: 'ADM de rotação torácica (inclinômetro)', regiao: 'Coluna', fonte: 'liga',
    tags: ['mobilidade', 'coluna torácica', 'arremesso', 'pré-temporada'],
    objetivo: 'Medir a amplitude de rotação da coluna torácica.',
    como: [
      'Atleta em quatro apoios, sentado sobre os calcanhares (ou o mais perto disso), com os cotovelos apoiados no tablado e em linha com os ombros.',
      'Explique e faça uma familiarização do movimento, sem o inclinômetro: rotação com uma mão atrás da cabeça (linha do pescoço), enquanto o outro antebraço continua apoiado.',
      'Zere o inclinômetro em uma superfície plana e horizontal. Posicione em T1-T2, levemente abaixo de C7, com a parte côncava alinhada aos processos espinhosos.',
      'Na posição inicial, a marcação deve estar o mais perto de zero (margem de +2 e -2). Atenção se o volume muscular altera muito a posição do inclinômetro.',
      'Durante o movimento, mantenha a postura dos membros inferiores. A cabeça acompanha a rotação.',
      'Faça 2 repetições de cada lado. Faça uma terceira se a diferença for de 5° ou mais.',
      'O nome da rotação é o lado para o qual a face fica voltada.'
    ],
    observar: ['Compensação dos membros inferiores', 'Dor', 'Diferença entre os lados'],
    interpretacao: ['Compare a rotação para a direita e para a esquerda.', 'Em adultos saudáveis, técnicas de medida de rotação torácica mostraram boa confiabilidade e erro de medida baixo (Johnson et al., 2012). Valores de corte não constam no documento da liga: confirmar com o orientador.'],
    erros: ['Inclinômetro mal posicionado', 'Deixar os quadris irem para trás', 'Não zerar o inclinômetro'],
    refs: ['Johnson KD, Kim KM, Yu BK, Saliba SA, Grindstaff TL. Reliability of thoracic spine rotation range-of-motion measurements in healthy adults. J Athl Train. 2012;47(1):52-60. doi:10.4085/1062-6050-47.1.52']
  },
  {
    id: 'dinam-tronco', nome: 'Dinamometria de tronco (extensão e flexão com rotação)', regiao: 'Coluna', fonte: 'liga',
    tags: ['força', 'tronco', 'isométrico', 'pré-temporada'],
    objetivo: 'Medir a força isométrica do tronco com dinamômetro.',
    como: [
      'Extensão de tronco: use apoio côncavo encaixado na vértebra, entre as escápulas, em uma região superior, evitando a musculatura. Oriente a não empurrar o aparelho ao respirar antes de começar, para não ativá-lo antes da força.',
      'Flexão com rotação de tronco: use a base de apoio redonda do dinamômetro, mais ou menos na altura dos mamilos (região do esterno). Cuidado ao segurar para não apertar os botões.',
      'Incline levemente o dinamômetro para o lado da rotação, conforme o voluntário, mantendo o aparelho perpendicular à força que ele faz.'
    ],
    observar: ['Compensações de pelve e membros', 'Dor durante a contração'],
    interpretacao: ['Compare com o próprio atleta ao longo da temporada e entre os lados na rotação.', 'Valores de corte, posição inicial e número de repetições não constam no documento: confirmar com o orientador.',
      'Em 23 atletas homens, a força isométrica de flexão, extensão e rotação do tronco medida com dinamômetro portátil teve confiabilidade boa a excelente (CCI de 0,70 a 0,91). O teste de flexão lateral foi o que mais variou (Dekkers et al., 2025).'],
    erros: ['Apoio posicionado sobre a musculatura', 'Ativar o aparelho antes do início da força', 'Dinamômetro fora da perpendicular'],
    refs: ['Dekkers TA, Blake C, Collins KD, McVeigh JG, O\'Sullivan KJ. Trunk strength and endurance testing in field-athletes: a reliability study. Phys Ther Sport. 2025;75:105-112. doi:10.1016/j.ptsp.2025.07.012']
  },
  {
    id: 'mcgill', nome: 'Resistência do tronco (testes de McGill)', regiao: 'Coluna', fonte: 'literatura',
    tags: ['core', 'resistência', 'estabilidade lombar', 'ponte lateral'],
    objetivo: 'Avaliar a resistência isométrica dos músculos do tronco: flexores, extensores e laterais.',
    como: [
      'Flexores do tronco: sentado, tronco inclinado cerca de 60° contra um apoio, joelhos e quadris a 90°, braços cruzados. O apoio é afastado e o atleta mantém a posição até perder o ângulo. Registre o tempo.',
      'Extensores do tronco (Biering-Sørensen modificado): em decúbito ventral com o tronco para fora da maca e as pernas fixadas, braços cruzados. Mantém o tronco na horizontal até falhar. Registre o tempo.',
      'Ponte lateral: apoio no antebraço e nos pés, quadril elevado e corpo alinhado. Mantém até falhar. Registre o tempo de cada lado.'
    ],
    observar: ['Compensações da pelve e da lombar', 'Dor durante o teste', 'Diferença entre o lado direito e o esquerdo na ponte lateral'],
    interpretacao: [
      'Compare o tempo de cada teste e as razões entre eles (flexores, extensores e laterais) com a base normativa de McGill et al. (1999).',
      'Valores de referência numéricos: conferir na publicação original antes de usar como corte.'
    ],
    erros: ['Não padronizar o momento de parar o teste', 'Posição de partida diferente entre avaliações', 'Fadiga por testar muitas vezes seguidas'],
    refs: ['McGill SM, Childs A, Liebenson C. Endurance times for low back stabilization exercises: clinical targets for testing and training from a normal database. Arch Phys Med Rehabil. 1999;80(8):941-944. doi:10.1016/s0003-9993(99)90087-4']
  },
  {
    id: 'neer-hawkins', nome: 'Neer e Hawkins-Kennedy (sinais de impacto subacromial)', regiao: 'Membro superior', fonte: 'literatura',
    tags: ['ombro', 'dor', 'impacto', 'manguito'],
    objetivo: 'Provocar dor subacromial por compressão do manguito e da bursa sob o arco coracoacromial.',
    como: [
      'Neer: com o paciente sentado ou em pé, estabilize a escápula e eleve o braço passivamente em rotação medial, no plano escapular, até a amplitude final. Dor é o sinal positivo.',
      'Hawkins-Kennedy: com o ombro e o cotovelo a 90° de flexão, faça a rotação medial passiva do ombro. Dor é o sinal positivo.',
      'Compare com o lado oposto e registre onde e quando a dor aparece (0 a 10).'
    ],
    observar: ['Dor subacromial ou lateral do ombro', 'Compensação de tronco ou de escápula', 'Resposta no lado oposto'],
    interpretacao: [
      'Os dois testes são sensíveis, mas pouco específicos: um resultado negativo ajuda a afastar impacto ou lesão do manguito, e um positivo sozinho não confirma o diagnóstico (MacDonald et al., 2000; Hegedus et al., 2008).',
      'Use junto com a história, a amplitude, a força de rotação e outros testes. Ver o protocolo de dor no ombro relacionada ao manguito rotador.'
    ],
    erros: ['Forçar o movimento além do ponto de dor', 'Não estabilizar a escápula no teste de Neer', 'Interpretar o positivo como diagnóstico fechado'],
    refs: [
      'MacDonald PB, Clark P, Sutherland K. An analysis of the diagnostic accuracy of the Hawkins and Neer subacromial impingement signs. J Shoulder Elbow Surg. 2000;9(4):299-301. doi:10.1067/mse.2000.106918',
      'Hegedus EJ, Goode A, Campbell S, et al. Physical examination tests of the shoulder: a systematic review with meta-analysis of individual tests. Br J Sports Med. 2008;42(2):80-92. doi:10.1136/bjsm.2007.038406'
    ]
  },
  {
    id: 'apreensao-relocacao', nome: 'Apreensão, relocação e surpresa (instabilidade anterior do ombro)', regiao: 'Membro superior', fonte: 'literatura',
    tags: ['ombro', 'instabilidade', 'arremesso'],
    objetivo: 'Reproduzir a sensação de instabilidade anterior da glenoumeral e a sua melhora com a força posterior sobre a cabeça do úmero.',
    como: [
      'Apreensão: paciente em decúbito dorsal, ombro a 90° de abdução e cotovelo a 90°. Leve o ombro lentamente à rotação lateral. Sensação de que o ombro vai sair do lugar (apreensão) é o sinal positivo.',
      'Relocação: com o ombro na posição de apreensão, aplique uma força posterior sobre a cabeça do úmero. Melhora da apreensão ou da dor é o sinal positivo.',
      'Surpresa: retire a força posterior de forma súbita. Retorno da apreensão é o sinal positivo.',
      'Pare o teste ao surgir apreensão, sem forçar a rotação.'
    ],
    observar: ['Apreensão, e não só dor', 'Resistência do paciente ao movimento', 'Comparação com o lado oposto'],
    interpretacao: [
      'Em um estudo com pacientes com suspeita de instabilidade, a apreensão positiva nos 3 testes foi altamente específica e preditiva de instabilidade anterior traumática. O teste da surpresa foi o mais acurado isoladamente (sensibilidade de 64% e especificidade de 99%) (Lo et al., 2004).',
      'Dor sem apreensão é inespecífica. Use junto com a história e o exame completo. Ver o protocolo de instabilidade anterior do ombro.'
    ],
    erros: ['Rodar rápido ou além do ponto de apreensão', 'Confundir dor com apreensão', 'Aplicar a força de relocação na direção errada'],
    refs: [
      'Lo IK, Nonweiler B, Woolfrey M, Litchfield R, Kirkley A. An evaluation of the apprehension, relocation, and surprise tests for anterior shoulder instability. Am J Sports Med. 2004;32(2):301-307. doi:10.1177/0095399703258690'
    ]
  },
  {
    id: 'cozen', nome: 'Teste de Cozen (tendinopatia lateral do cotovelo)', regiao: 'Membro superior', fonte: 'literatura',
    tags: ['cotovelo', 'extensores', 'epicondilalgia'],
    objetivo: 'Provocar a dor do epicôndilo lateral com a contração resistida dos extensores do punho.',
    como: [
      'Paciente com o cotovelo a 90° de flexão, antebraço em pronação e punho em extensão com o dedo cerrado.',
      'Palpe o epicôndilo lateral com uma mão e aplique uma resistência à extensão do punho com a outra, para que o paciente resista.',
      'Dor no epicôndilo lateral é o sinal positivo.',
      'Compare com o lado oposto e meça a preensão sem dor e com dor, se possível.'
    ],
    observar: ['Dor localizada no epicôndilo lateral', 'Perda de força de preensão', 'Compensações do ombro'],
    interpretacao: [
      'Em uma revisão sistemática, o teste de Cozen e a medida da força de preensão tiveram alta acurácia para o diagnóstico, mas foram pouco estudados e com grande heterogeneidade (Karanasios et al., 2022).',
      'Ver o protocolo de tendinopatia lateral do cotovelo e o questionário PRWE.'
    ],
    erros: ['Resistência súbita demais', 'Punho em desvio', 'Palpar fora do epicôndilo'],
    refs: [
      'Karanasios S, Korakakis V, Moutzouri M, et al. Diagnostic accuracy of examination tests for lateral elbow tendinopathy (LET): a systematic review. J Hand Ther. 2022;35(4):541-551. doi:10.1016/j.jht.2021.02.002'
    ]
  },
  {
    id: 'slump', nome: 'Slump test (tensão neural do membro inferior)', regiao: 'Coluna', fonte: 'literatura',
    tags: ['coluna', 'lombar', 'neural', 'dor irradiada'],
    objetivo: 'Reproduzir sintomas neurais do membro inferior com a combinação de flexão do tronco, do pescoço e extensão do joelho.',
    como: [
      'Paciente sentado na beira da maca, com as mãos atrás das costas.',
      'Peça para "afundar" o tronco (flexão torácica e lombar) e, em seguida, flexionar a cabeça.',
      'Estenda o joelho do lado testado e faça a dorsiflexão do tornozelo.',
      'Se houver sintomas, peça para estender o pescoço: se aliviar, o teste é positivo (a resposta é neural).'
    ],
    observar: ['Reprodução dos sintomas conhecidos (dor irradiada, formigamento)', 'Alívio com a extensão do pescoço', 'Comparação com o lado oposto'],
    interpretacao: [
      'Em um estudo pequeno com pacientes com dor lombar ou ciática, o slump test foi muito sensível para identificar dor neuropática no membro inferior, e a especificidade aumentou quando se somou o critério de localização da dor (Urban e MacNeil, 2015).',
      'A amostra foi pequena e restrita: não generalize. Combine com o exame neurológico e a história.'
    ],
    erros: ['Fazer a dorsiflexão antes da flexão da cabeça', 'Não pedir a extensão do pescoço para diferenciar a resposta', 'Forçar além do sintoma'],
    refs: [
      'Urban LM, MacNeil BJ. Diagnostic accuracy of the slump test for identifying neuropathic pain in the lower limb. J Orthop Sports Phys Ther. 2015;45(8):596-603. doi:10.2519/jospt.2015.5414'
    ]
  },
  {
    id: 'finkelstein-what', nome: 'Finkelstein e WHAT (tenossinovite de De Quervain)', regiao: 'Membro superior', fonte: 'literatura',
    tags: ['punho', 'polegar', 'De Quervain', 'tendão'],
    objetivo: 'Provocar dor no primeiro compartimento extensor do punho (abdutor longo e extensor curto do polegar).',
    como: [
      'Finkelstein (descrição original, em estágios): peça que o paciente segure o polegar dentro da mão fechada e, com o antebraço estável, faça o desvio ulnar do punho. Dor sobre o processo estiloide do rádio é o sinal positivo (Dawson e Mudgal, 2010).',
      'WHAT (wrist hyperflexion and abduction of the thumb): paciente com o punho em hiperflexão e o polegar em abdução, contra a resistência do examinador, mantida por alguns segundos (a duração está descrita no artigo original). Dor sobre o primeiro compartimento é o sinal positivo.',
      'Compare com o lado oposto e registre a dor (0 a 10).'
    ],
    observar: ['Dor localizada na região radial do punho', 'Crepitação ou edema sobre o primeiro compartimento', 'Diferença entre os lados'],
    interpretacao: [
      'O teste conhecido como Finkelstein é muitas vezes confundido com o teste de Eichhoff: a descrição original é em estágios, mais confiável e com menos dor (Dawson e Mudgal, 2010).',
      'Em 100 pacientes, o WHAT foi mais sensível e mais específico do que o teste de Eichhoff para o diagnóstico da doença de De Quervain (Goubau et al., 2014).',
      'Um positivo deve ser interpretado junto com a história e a palpação. Ver a anatomia do punho.'
    ],
    erros: ['Fazer o desvio ulnar sem fixar o polegar', 'Aplicar força excessiva e causar dor falsa', 'Confundir com dor da articulação carpometacarpal do polegar'],
    refs: [
      'Dawson C, Mudgal CS. Staged description of the Finkelstein test. J Hand Surg Am. 2010;35(9):1513-1515. doi:10.1016/j.jhsa.2010.05.022',
      'Goubau JF, Goubau L, Van Tongel A, Van Hoonacker P, Kerckhove D, Berghs B. The wrist hyperflexion and abduction of the thumb (WHAT) test: a more specific and sensitive test to diagnose de Quervain tenosynovitis than the Eichhoff\'s test. J Hand Surg Eur Vol. 2014;39(3):286-292. doi:10.1177/1753193412475043'
    ]
  },
  {
    id: 'preensao-jamar', nome: 'Força de preensão manual (dinamômetro tipo Jamar)', regiao: 'Membro superior', fonte: 'literatura',
    tags: ['mão', 'força', 'preensão', 'dinamômetro', 'pré-temporada'],
    objetivo: 'Medir a força isométrica de preensão manual e comparar com o lado oposto e com valores de referência.',
    como: [
      'Paciente sentado, com o ombro aduzido e neutro, o cotovelo a 90° e o antebraço em posição neutra, e o punho em leve extensão.',
      'Ajuste a empunhadura do dinamômetro (em geral, a segunda posição) e peça uma contração máxima por cerca de 3 a 5 segundos.',
      'Faça 3 medidas de cada lado, alternando, com repouso entre elas, e registre a média ou o melhor valor (padronize).',
      'Registre também a dor durante a contração e o lado dominante.'
    ],
    observar: ['Dor durante a contração', 'Compensações de tronco ou ombro', 'Diferença entre o lado dominante e o não dominante'],
    interpretacao: [
      'Em adultos de 18 a 85 anos dos Estados Unidos, foram publicados valores normativos e equações para os lados dominante e não dominante, em função de idade, altura e peso (Wang et al., 2018).',
      'Em uma população australiana, há dados normativos estratificados por idade e sexo (Massy-Westropp et al., 2011).',
      'A validade e a confiabilidade do dinamômetro tipo Jamar foram descritas por Hamilton et al. (1992). A medida de preensão é parte do exame na tendinopatia lateral do cotovelo e na avaliação do punho.',
      'A posição e o número de medidas seguem as recomendações usuais de padronização (por exemplo, da Sociedade Americana de Terapeutas da Mão): conferir antes de comparar com valores normativos.'
    ],
    erros: ['Posição do cotovelo e do ombro diferente entre as medidas', 'Ajuste da empunhadura diferente entre avaliações', 'Comparar com valores de outra população sem cuidado'],
    refs: [
      'Wang YC, Bohannon RW, Li X, Sindhu B, Kapellusch J. Hand-grip strength: normative reference values and equations for individuals 18 to 85 years of age residing in the United States. J Orthop Sports Phys Ther. 2018;48(9):685-693. doi:10.2519/jospt.2018.7851',
      'Massy-Westropp NM, Gill TK, Taylor AW, Bohannon RW, Hill CL. Hand grip strength: age and gender stratified normative data in a population-based study. BMC Res Notes. 2011;4:127. doi:10.1186/1756-0500-4-127',
      'Hamilton GF, McDonald C, Chenier TC. Measurement of grip strength: validity and reliability of the sphygmomanometer and Jamar grip dynamometer. J Orthop Sports Phys Ther. 1992;16(5):215-219. doi:10.2519/jospt.1992.16.5.215'
    ]
  },
  {
    id: 'beighton', nome: 'Escore de Beighton (hipermobilidade articular generalizada)', regiao: 'Geral', fonte: 'literatura',
    tags: ['hipermobilidade', 'frouxidão', 'pré-temporada', 'instabilidade'],
    objetivo: 'Rastrear a frouxidão articular generalizada com 9 pontos.',
    como: [
      'Cada item vale 1 ponto, e o total vai de 0 a 9.',
      'Dedo mínimo: extensão passiva acima de 90° (um ponto por lado, 2 pontos).',
      'Polegar: aproximação passiva do polegar ao antebraço (um ponto por lado, 2 pontos).',
      'Cotovelo: hiperextensão acima de 10° (um ponto por lado, 2 pontos).',
      'Joelho: hiperextensão acima de 10° (um ponto por lado, 2 pontos).',
      'Tronco: flexão à frente, com os joelhos estendidos, com as palmas das mãos apoiadas no chão (1 ponto).'
    ],
    observar: ['Pontos por lado', 'Dor ou instabilidade ao realizar as manobras', 'História de luxações e entorses'],
    interpretacao: [
      'Em crianças de 6 a 12 anos, o escore de Beighton, medido com goniometria, foi um instrumento válido para a mobilidade articular generalizada, e nenhum item extra foi necessário (Smits-Engelsman et al., 2011).',
      'O ponto de corte para hipermobilidade varia entre populações e estudos: confirmar com o orientador e na literatura para o grupo avaliado (Malek et al., 2021).',
      'Pode ajudar a entender hiperextensão no membro não operado e a decidir o foco do controle motor (ver o protocolo de LCA).'
    ],
    erros: ['Contar pontos sem medir o ângulo', 'Esquecer de contar os dois lados', 'Usar o mesmo ponto de corte para todas as idades'],
    refs: [
      'Smits-Engelsman B, Klerks M, Kirby A. Beighton score: a valid measure for generalized hypermobility in children. J Pediatr. 2011;158(1):119-123.e4. doi:10.1016/j.jpeds.2010.07.021',
      'Malek S, Reinhold EJ, Pearce GS. The Beighton score as a measure of generalised joint hypermobility. Rheumatol Int. 2021;41(10):1707-1716. doi:10.1007/s00296-021-04832-4'
    ]
  },
  {
    id: 'spurling', nome: 'Teste de Spurling (radiculopatia cervical)', regiao: 'Coluna', fonte: 'literatura',
    tags: ['coluna cervical', 'radiculopatia', 'neural'],
    objetivo: 'Provocar sintomas radiculares do membro superior com a compressão e a extensão da coluna cervical.',
    como: [
      'Paciente sentado, com a cabeça em inclinação lateral para o lado sintomático e em leve extensão.',
      'O examinador aplica uma compressão axial suave sobre a cabeça.',
      'Reprodução da dor irradiada para o braço é o sinal positivo.',
      'Interrompa o teste ao surgir sintomas, sem forçar.'
    ],
    observar: ['Dor irradiada para o braço (e não só dor cervical local)', 'Parestesias', 'Resposta ao alívio com a tração'],
    interpretacao: [
      'Em um estudo com eletromiografia como padrão, o teste de Spurling teve baixa sensibilidade e boa especificidade para radiculopatia cervical: não serve como triagem, mas ajuda a confirmar (Tong et al., 2002).',
      'A forma de aplicar o teste (posição e carga) influencia o resultado (Anekstein et al., 2012).',
      'Use com o exame neurológico e outros testes. Em dor cervical com sinais neurológicos, encaminhar.'
    ],
    erros: ['Compressão brusca ou excessiva', 'Aplicar em paciente com instabilidade cervical ou suspeita de fratura', 'Interpretar dor cervical local como positivo'],
    refs: [
      'Tong HC, Haig AJ, Yamakawa K. The Spurling test and cervical radiculopathy. Spine (Phila Pa 1976). 2002;27(2):156-159. doi:10.1097/00007632-200201150-00007',
      'Anekstein Y, Blecher R, Smorgick Y, Mirovsky Y. What is the best way to apply the Spurling test for cervical radiculopathy? Clin Orthop Relat Res. 2012;470(9):2566-2572. doi:10.1007/s11999-012-2492-3'
    ]
  },
  {
    id: 'flexao-craniocervical', nome: 'Teste de flexão craniocervical (flexores profundos do pescoço)', regiao: 'Coluna', fonte: 'literatura',
    tags: ['coluna cervical', 'controle motor', 'flexores profundos', 'cervicalgia'],
    objetivo: 'Avaliar o desempenho dos flexores profundos do pescoço com uma flexão craniocervical gradual e controlada.',
    como: [
      'Paciente em decúbito dorsal, com os joelhos flexionados, a cabeça apoiada e a face em posição neutra.',
      'Coloque uma unidade de biofeedback de pressão sob a nuca, inflada a 20 mmHg.',
      'Peça o gesto de "acenar com a cabeça" (flexão craniocervical), aumentando a pressão por etapas (22, 24, 26, 28 e 30 mmHg) e mantendo cada etapa por cerca de 10 segundos.',
      'Registre a última etapa mantida sem compensação (por exemplo, ativação dos músculos superficiais do pescoço).',
      'Os valores de pressão e os tempos acima seguem o protocolo clássico do teste: conferir na descrição original.'
    ],
    observar: ['Ativação excessiva do esternocleidomastóideo e dos escalenos', 'Elevação do queixo', 'Perda do controle ao subir a pressão'],
    interpretacao: [
      'Em um estudo com eletromiografia, o desempenho reduzido no teste se associou a menor ativação dos flexores profundos em pacientes com dor cervical, o que apoia a validade do teste (Falla et al., 2004).',
      'Em indivíduos com e sem dor cervical crônica, o desempenho foi diferente entre os grupos (Chiu et al., 2005).',
      'Valores de corte devem ser definidos com o orientador.'
    ],
    erros: ['Fazer o movimento como flexão do pescoço, e não como "aceno"', 'Pressão inicial diferente de 20 mmHg', 'Não observar a compensação dos músculos superficiais'],
    refs: [
      'Falla DL, Jull GA, Hodges PW. Patients with neck pain demonstrate reduced electromyographic activity of the deep cervical flexor muscles during performance of the craniocervical flexion test. Spine (Phila Pa 1976). 2004;29(19):2108-2114. doi:10.1097/01.brs.0000141170.89317.0e',
      'Chiu TT, Law EY, Chiu TH. Performance of the craniocervical flexion test in subjects with and without chronic neck pain. J Orthop Sports Phys Ther. 2005;35(9):567-571. doi:10.2519/jospt.2005.35.9.567'
    ]
  },
  {
    id: 'slr-passivo', nome: 'Elevação da perna estendida passiva (SLR) para radiculopatia lombar', regiao: 'Coluna', fonte: 'literatura',
    tags: ['coluna lombar', 'ciática', 'neural', 'radiculopatia'],
    objetivo: 'Provocar sintomas de radiculopatia lombar com a tensão do nervo isquiático.',
    como: [
      'Paciente em decúbito dorsal, relaxado, com os dois membros inferiores estendidos.',
      'Eleve passivamente o membro com o joelho estendido, flexionando o quadril, devagar.',
      'Interrompa quando surgir dor irradiada para a perna e registre o ângulo.',
      'Opcionalmente, baixe um pouco a perna e faça a dorsiflexão do tornozelo para confirmar o componente neural.'
    ],
    observar: ['Dor irradiada abaixo do joelho (e não só dor posterior da coxa)', 'Ângulo em que os sintomas começam', 'Comparação com o lado oposto'],
    interpretacao: [
      'Em uma revisão de 7 estudos, a sensibilidade e a especificidade do SLR por provocação de dor variaram: 4 estudos sugeriram que é sensível e 3 que é específico. A variação do padrão de referência e a dor da tensão dos isquiotibiais podem gerar falsos positivos (Scaia et al., 2012).',
      'Combine com o exame neurológico e outros testes (slump). Ver o protocolo de dor lombar.'
    ],
    erros: ['Interpretar dor posterior da coxa por encurtamento como positivo', 'Elevar rápido demais', 'Não comparar com o lado oposto'],
    refs: [
      'Scaia V, Baxter D, Cook C. The pain provocation-based straight leg raise test for diagnosis of lumbar disc herniation, lumbar radiculopathy, and/or sciatica: a systematic review of clinical utility. J Back Musculoskelet Rehabil. 2012;25(4):215-223. doi:10.3233/bmr-2012-0339'
    ]
  }
];

const EXERCICIOS = [
  {
    id: 'nordic', nome: 'Nordic Hamstring', tags: ['isquiotibiais', 'força excêntrica', 'prevenção'],
    objetivo: 'Fortalecimento excêntrico dos isquiotibiais, base da prevenção de lesões de coxa posterior.',
    como: ['De joelhos, tornozelos fixados por um parceiro ou equipamento.', 'Mantenha o corpo reto, do joelho à cabeça.', 'Incline-se para a frente o mais lentamente possível, controlando a descida com os isquiotibiais.', 'Ao perder o controle, apoie as mãos no chão, empurre e volte.'],
    progressao: 'Aumentar a amplitude controlada, o número de séries ou usar sobrecarga.',
    regressao: 'Usar elástico de apoio ou reduzir a amplitude da descida.',
    nota: 'Os programas que incluem o Nordic Hamstring reduziram à metade a taxa de lesões de isquiotibiais em uma meta-análise de 8.459 atletas (van Dyk et al., 2019). Em jogadores amadores de futebol, o exercício reduziu lesões em um ensaio randomizado (van der Horst et al., 2015).',
    refs: ['van Dyk N, Behan FP, Whiteley R. Including the Nordic hamstring exercise in injury prevention programmes halves the rate of hamstring injuries: a systematic review and meta-analysis of 8459 athletes. Br J Sports Med. 2019;53(21):1362-1370. doi:10.1136/bjsports-2018-100045', 'van der Horst N, Smits DW, Petersen J, Goedhart EA, Backx FJ. The preventive effect of the nordic hamstring exercise on hamstring injuries in amateur soccer players: a randomized controlled trial. Am J Sports Med. 2015;43(6):1316-1323. doi:10.1177/0363546515574057']
  },
  {
    id: 'copenhagen', nome: 'Prancha de Copenhagen', tags: ['adutores', 'quadril', 'prevenção'],
    objetivo: 'Fortalecer adutores, importante em esportes com mudança de direção e chutes.',
    como: ['Prancha lateral com a perna de cima apoiada em um banco, na altura do joelho ou do tornozelo.', 'Eleve o quadril em linha com o tronco.', 'Com a perna de baixo, aproxime-a da perna de cima (ou mantenha a prancha em isometria).', 'Mantenha o corpo alinhado, sem girar o tronco.'],
    progressao: 'Apoio no tornozelo (alavanca maior) e movimentação da perna de baixo.',
    regressao: 'Apoio no joelho (alavanca menor) ou isometria curta.',
    nota: 'O programa de fortalecimento dos adutores (Copenhagen) reduziu problemas de virilha em jogadores de futebol em um ensaio randomizado por clubes (Harøy et al., 2019). Em dor anterior do quadril ou impacto, ver a nota de anatomia sobre os adutores.',
    refs: ['Harøy J, Clarsen B, Wiger EG, et al. The Adductor Strengthening Programme prevents groin problems among male football players: a cluster-randomised controlled trial. Br J Sports Med. 2019;53(3):150-157. doi:10.1136/bjsports-2017-098937']
  },
  {
    id: 'step-down', nome: 'Step-down unipodal', tags: ['controle de joelho', 'quadril', 'reabilitação'],
    objetivo: 'Treinar o controle do joelho e do quadril em apoio unipodal, evitando valgo dinâmico.',
    como: ['Em pé sobre um degrau com um pé, o outro pé ao lado.', 'Desça lentamente até o calcanhar do pé livre tocar o chão.', 'Mantenha pelve nivelada e joelho alinhado com o segundo dedo.', 'Suba de volta controlando o movimento.'],
    progressao: 'Aumentar a altura do degrau, velocidade ou adicionar carga.',
    regressao: 'Degrau mais baixo, com apoio manual.',
    nota: 'O step-down lateral é usado como teste de qualidade do movimento (ver o teste Step Down) e a cinemática difere entre sintomáticos e assintomáticos, segundo a palestra do congresso. As referências de confiabilidade estão no teste.',
    refs: ['Loudon JK, Wiesner D, Goist-Foley HL, Asjes C, Loudon KL. Intrarater reliability of functional performance tests for subjects with patellofemoral pain syndrome. J Athl Train. 2002;37(3):256-261.']
  },
  {
    id: 'panturrilha', nome: 'Elevação de panturrilha unipodal', tags: ['tornozelo', 'tríceps sural', 'reabilitação'],
    objetivo: 'Fortalecer o tríceps sural, essencial na corrida, saltos e prevenção de lesões do tendão de Aquiles.',
    como: ['Apoio em um pé, em um degrau com o calcanhar para fora.', 'Eleve o calcanhar o máximo possível.', 'Desça lentamente abaixo do nível do degrau.', 'Realize com joelho estendido e depois com joelho fletido para o sóleo.'],
    progressao: 'Mais repetições, carga adicional e tempos mais lentos.',
    regressao: 'Os dois pés, com apoio manual.',
    nota: 'Elevações unipodais com carga progressiva são a base do treino do tríceps sural na tendinopatia de Aquiles (Beyer et al., 2015; Martin et al., 2018). Ver também as versões excêntrica, HSR e para o sóleo.',
    refs: ['Beyer R, Kongsgaard M, Hougs Kjær B, Øhlenschlæger T, Kjær M, Magnusson SP. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy: a randomized controlled trial. Am J Sports Med. 2015;43(7):1704-1711. doi:10.1177/0363546515584760', 'Martin RL, Chimenti R, Cuddeford T, et al. Achilles pain, stiffness, and muscle power deficits: midportion Achilles tendinopathy revision 2018. J Orthop Sports Phys Ther. 2018;48(5):A1-A38. doi:10.2519/jospt.2018.0302']
  },
  {
    id: 'ostra', nome: 'Ostra (clamshell)', tags: ['CPL', 'quadril', 'glúteo médio', 'rotadores laterais'],
    objetivo: 'Ativar os rotadores laterais e o glúteo médio em decúbito lateral, sem compensar com o tronco.',
    como: ['Deite de lado com os joelhos flexionados a 90° e o quadril flexionado no máximo 60°.', 'Mantenha tornozelo, quadril e ombro alinhados.', 'Abra o joelho de cima sem desencostar os tornozelos.', 'O terapeuta estabiliza a lombar para evitar rotação do tronco.'],
    progressao: 'Elástico ou caneleira, e aumento do ângulo de flexão do quadril conforme a progressão usada.',
    regressao: 'Menor amplitude ou apoio das mãos na pelve para sentir a compensação.',
    nota: 'Em eletromiografia, a ostra simples ativou o glúteo médio menos que a abdução em decúbito lateral (cerca de 40% contra 81% da contração máxima), e a progressão 4 chegou a 77% (Distefano 2009; Boren 2011). Fonte: módulo 5 da liga.',
    refs: ['Distefano LJ, Blackburn JT, Marshall SW, Padua DA. Gluteal muscle activation during common therapeutic exercises. J Orthop Sports Phys Ther. 2009;39(7):532-540. doi:10.2519/jospt.2009.2796', 'Boren K, Conrey C, Le Coguic J, Paprocki L, Voight M, Robinson TK. Electromyographic analysis of gluteus medius and gluteus maximus during rehabilitation exercises. Int J Sports Phys Ther. 2011;6(3):206-223.']
  },
  {
    id: 'gm-decubito', nome: 'Glúteo médio em decúbito lateral', tags: ['CPL', 'quadril', 'glúteo médio', 'abdutores'],
    objetivo: 'Fortalecer o glúteo médio e os abdutores do quadril.',
    como: ['Deite de lado com o joelho de baixo flexionado.', 'Posicione o quadril de cima com alguns graus de extensão e o pé neutro.', 'Eleve a perna de cima em abdução sem inclinar o tronco.', 'O terapeuta estabiliza a crista ilíaca para evitar compensação do quadrado lombar.'],
    progressao: 'Caneleira ou elástico que resista tanto à abdução quanto à extensão (em isometria, no caso do elástico).',
    regressao: 'Menor amplitude, sem carga.',
    nota: 'Foi o exercício que mais ativou o glúteo médio entre 12 exercícios (81% da contração máxima) em 21 pessoas saudáveis (Distefano 2009). Fonte: módulo 5 da liga.',
    refs: ['Distefano LJ, Blackburn JT, Marshall SW, Padua DA. Gluteal muscle activation during common therapeutic exercises. J Orthop Sports Phys Ther. 2009;39(7):532-540. doi:10.2519/jospt.2009.2796']
  },
  {
    id: 'cachorrinho', nome: 'Cachorrinho (quatro apoios)', tags: ['CPL', 'quadril', 'glúteo máximo', 'rotadores laterais'],
    objetivo: 'Trabalhar extensão, abdução e rotação lateral do quadril ao mesmo tempo, em diagonal.',
    como: ['Quatro apoios, joelhos juntos no início.', 'Leve a perna em diagonal, com extensão, abdução e rotação lateral simultâneas, mantendo o joelho flexionado.', 'No fim, o joelho deve ficar acima ou na linha do pé, o que confirma a rotação lateral.', 'Evite compensar com a lombar ou a rotação do tronco.'],
    progressao: 'Elástico ou caneleira e mais repetições.',
    regressao: 'Versão em decúbito lateral para quem não consegue ficar em quatro apoios: estabilizar a lombar e observar o joelho na linha do pé no fim da amplitude.',
    nota: 'Não encontrei estudo com esse nome; a elevação de braço e perna em quatro apoios ativou o glúteo máximo em nível útil para força (Ekstrom 2007). Fonte: módulo 5 da liga.',
    refs: ['Ekstrom RA, Donatelli RA, Carp KC. Electromyographic analysis of core trunk, hip, and thigh muscles during 9 rehabilitation exercises. J Orthop Sports Phys Ther. 2007;37(12):754-762. doi:10.2519/jospt.2007.2471']
  },
  {
    id: 'trendelenburg', nome: 'Trendelenburg (abdução pélvica)', tags: ['CPL', 'quadril', 'glúteo médio', 'cadeia fechada'],
    objetivo: 'Treinar os abdutores do quadril em apoio unipodal, controlando a queda da pelve.',
    como: ['Em pé, apoiado em uma perna com o joelho estendido.', 'Eleve a pelve do lado sem apoio e volte com controle.', 'Oriente o paciente a empurrar o chão e sentir os glúteos "queimarem".', 'Evite compensar com o quadrado lombar.'],
    progressao: 'Mais tempo, carga externa ou superfície instável.',
    regressao: 'Apoio manual leve ou menor amplitude.',
    nota: 'Exercício descrito no módulo 5 da liga, sem estudo específico encontrado com esse nome. O agachamento unipodal, que exige controle de pelve parecido, ativou o glúteo médio em 64 a 82% da contração máxima (Distefano 2009; Boren 2011).',
    refs: ['Distefano LJ, Blackburn JT, Marshall SW, Padua DA. Gluteal muscle activation during common therapeutic exercises. J Orthop Sports Phys Ther. 2009;39(7):532-540. doi:10.2519/jospt.2009.2796', 'Boren K, Conrey C, Le Coguic J, Paprocki L, Voight M, Robinson TK. Electromyographic analysis of gluteus medius and gluteus maximus during rehabilitation exercises. Int J Sports Phys Ther. 2011;6(3):206-223.']
  },
  {
    id: 'afundo-elastico', nome: 'Afundo com elástico (estratégia do quadril)', tags: ['CPL', 'quadril', 'joelho', 'pé', 'dor femoropatelar'],
    objetivo: 'Controlar o valgo do joelho e a estabilidade do arco durante o afundo.',
    como: ['Faça o afundo usando a estratégia do quadril (leve inclinação do tronco) se o paciente tem dor femoropatelar.', 'Coloque um elástico puxando o joelho para valgo, para o paciente resistir.', 'Opção: elástico no hálux, para ativar a musculatura intrínseca do pé e estabilizar o arco.', 'Evite o elástico na base dos metatarsos: o paciente precisa desabar o arco para segurá-lo, o contrário do objetivo.'],
    progressao: 'Mais amplitude, carga externa ou elástico mais forte.',
    regressao: 'Menor amplitude e apoio manual.',
    nota: 'A posição do elástico (hálux x metatarsos) vem da aula e não foi encontrada em estudo. O conceito de controle proximal na dor femoropatelar tem apoio em Lack 2015. Fonte: módulo 5 da liga.',
    refs: ['Lack S, Barton C, Sohan O, Crossley K, Morrissey D. Proximal muscle rehabilitation is effective for patellofemoral pain: a systematic review with meta-analysis. Br J Sports Med. 2015;49(21):1365-1376. doi:10.1136/bjsports-2015-094723']
  },
  {
    id: 'marcha-lateral', nome: 'Marcha lateral em agachamento', tags: ['CPL', 'quadril', 'joelho', 'cadeia fechada'],
    objetivo: 'Reforçar os abdutores e ensinar o paciente a não deixar o joelho entrar durante o deslocamento.',
    como: ['Agache em isometria, com a estratégia do quadril se há dor femoropatelar.', 'Desloque-se um passo para cada lado, repetidamente.', 'Mantenha o joelho alinhado com o pé durante todo o movimento.', 'Variação: associar a rotação do quadril.'],
    progressao: 'Elástico ao redor dos joelhos ou tornozelos e mais passos.',
    regressao: 'Agachamento mais alto, sem elástico.',
    nota: 'Em eletromiografia, a caminhada lateral com elástico ativou o glúteo máximo apenas 27% da contração máxima (Distefano 2009). Serve mais como exercício de controle e resistência do que como o principal de força. Fonte: módulo 5 da liga.',
    refs: ['Distefano LJ, Blackburn JT, Marshall SW, Padua DA. Gluteal muscle activation during common therapeutic exercises. J Orthop Sports Phys Ther. 2009;39(7):532-540. doi:10.2519/jospt.2009.2796']
  },
  {
    id: 'knee-to-wall', nome: 'Dorsiflexão em carga (knee-to-wall)', tags: ['tornozelo', 'mobilidade', 'dorsiflexão'],
    objetivo: 'Ganhar e manter a dorsiflexão do tornozelo em carga.',
    como: ['Fique de frente para a parede, com o pé a alguns centímetros dela e o calcanhar no chão.', 'Leve o joelho em direção à parede, sem tirar o calcanhar do chão.', 'Mantenha o joelho alinhado com o segundo dedo do pé.', 'Aumente a distância do pé até a parede conforme melhora.', 'Faça 2 a 3 séries de 10 repetições, segurando 2 a 3 segundos no final.'],
    progressao: 'Aumentar a distância do pé, usar um elástico puxando o tálus para trás ou associar uma mobilização do tornozelo.',
    regressao: 'Diminuir a distância e apoiar as mãos na parede.',
    nota: 'O mesmo movimento é usado como teste (ver o teste de dorsiflexão em carga). A dorsiflexão reduzida é fator de risco citado para tendinopatia de Aquiles e patelar na palestra do congresso.',
    refs: ['Bennell KL, Talbot RC, Wajswelner H, Techovanich W, Kelly DH, Hall AJ. Intra-rater and inter-rater reliability of a weight-bearing lunge measure of ankle dorsiflexion. Aust J Physiother. 1998;44(3):175-180. doi:10.1016/s0004-9514(14)60377-9']
  },
  {
    id: 'pe-curto', nome: 'Pé curto (short foot)', tags: ['pé', 'tornozelo', 'foot core', 'intrínsecos'],
    objetivo: 'Ativar a musculatura intrínseca do pé e dar estabilidade ao arco plantar.',
    como: ['Sente-se com o pé apoiado no chão, joelho a 90°.', 'Sem flexionar os dedos, aproxime a cabeça dos metatarsos do calcanhar, "encurtando" o pé e elevando o arco.', 'Mantenha por 5 a 10 segundos, respirando normalmente.', 'Relaxe e repita 10 vezes.', 'Verifique que os dedos não "garram" e que o calcanhar e a base do polegar ficam no chão.'],
    progressao: 'Fazer em pé bilateral, depois unipodal, depois em agachamento e em movimento.',
    regressao: 'Fazer sentado com o pé apoiado em uma toalha, com auxílio manual.',
    nota: 'O exercício do pé curto é a base do treino do "foot core" (McKeon et al., 2015). Um estudo comparou 4 semanas de pé curto e de exercício da toalha em tarefas de equilíbrio (Lynn et al., 2012).',
    refs: ['McKeon PO, Hertel J, Bramble D, Davis I. The foot core system: a new paradigm for understanding intrinsic foot muscle function. Br J Sports Med. 2015;49(5):290. doi:10.1136/bjsports-2013-092690', 'Lynn SK, Padilla RA, Tsang KK. Differences in static- and dynamic-balance task performance after 4 weeks of intrinsic-foot-muscle training: the short-foot exercise versus the towel-curl exercise. J Sport Rehabil. 2012;21(4):327-333. doi:10.1123/jsr.21.4.327']
  },
  {
    id: 'equilibrio-unipodal', nome: 'Equilíbrio unipodal e treino proprioceptivo', tags: ['tornozelo', 'equilíbrio', 'propriocepção', 'prevenção'],
    objetivo: 'Melhorar o controle postural e reduzir a recidiva de entorse.',
    como: ['Fique em um pé, com o joelho levemente flexionado e a pelve nivelada.', 'Mantenha 30 segundos olhando para a frente.', 'Troque de pé e repita 3 vezes cada lado.', 'Evolua para olhos fechados ou sobre uma superfície instável (almofada).', 'Adicione tarefas: lançar e receber uma bola, ou alcançar objetos com o outro pé.'],
    progressao: 'Superfície instável, olhos fechados, tarefas duplas e movimentos do esporte.',
    regressao: 'Apoiar uma mão na parede ou usar os dois pés em linha.',
    nota: 'Em 522 atletas, 8 semanas de treino proprioceptivo domiciliar após o tratamento usual reduziram a recidiva do entorse de 33% para 22% em 1 ano (Hupperets et al., 2009).',
    refs: ['Hupperets MDW, Verhagen EALM, van Mechelen W. Effect of unsupervised home based proprioceptive training on recurrences of ankle sprain: randomised controlled trial. BMJ. 2009;339:b2684. doi:10.1136/bmj.b2684']
  },
  {
    id: 'panturrilha-soleo', nome: 'Elevação de panturrilha com joelho flexionado (sóleo)', tags: ['tornozelo', 'sóleo', 'tríceps sural', 'Aquiles'],
    objetivo: 'Fortalecer o sóleo, que é pouco exigido nas elevações com o joelho estendido.',
    como: ['Sentado, com os joelhos a 90° e os pés no chão, coloque uma carga sobre os joelhos.', 'Eleve os calcanhares o máximo possível, sem inclinar o tronco.', 'Segure 1 segundo no alto e desça lentamente em 3 segundos.', 'Faça 3 séries de 10 a 15 repetições.', 'Aumente a carga gradualmente.'],
    progressao: 'Mais carga, unipodal e tempo sob tensão maior.',
    regressao: 'Sem carga, bilateral e com amplitude menor.',
    nota: 'O sóleo foi citado nos protocolos da liga (entorse e Aquiles) e deve ser incluído porque a elevação com joelho estendido exige mais do gastrocnêmio. Não encontrei estudo específico do sóleo nesta pesquisa. A dose deve seguir a progressão de carga e a dor.',
    refs: []
  },
  {
    id: 'aquiles-excentrico', nome: 'Treino excêntrico de panturrilha (Alfredson)', tags: ['Aquiles', 'tendinopatia', 'excêntrico', 'tornozelo'],
    objetivo: 'Carregar o tendão de Aquiles de forma excêntrica e progressiva.',
    como: ['Fique em pé em um degrau, apoiado nas pontas dos pés, com o joelho estendido.', 'Suba nas duas pontas dos pés e depois tire o pé de baixo.', 'Desça lentamente, só com o pé afetado, até o calcanhar ficar abaixo do degrau.', 'Suba de novo com os dois pés (a subida não é com o pé afetado).', 'Repita em séries; progrida a carga com mochila quando a dor permitir.'],
    progressao: 'Aumentar a carga com mochila ou pesos e depois incluir o joelho flexionado.',
    regressao: 'Reduzir a amplitude ou as repetições e manter dor tolerável.',
    nota: 'O treino excêntrico de 12 semanas melhorou a dor e a força em atletas recreativos (Alfredson et al., 1998). Treino excêntrico e HSR deram resultados iguais em 12 e 52 semanas, com maior adesão ao HSR (Beyer et al., 2015). Na tendinopatia insercional, não descer abaixo do degrau.',
    refs: ['Alfredson H, Pietilä T, Jonsson P, Lorentzon R. Heavy-load eccentric calf muscle training for the treatment of chronic Achilles tendinosis. Am J Sports Med. 1998;26(3):360-366. doi:10.1177/03635465980260030301', 'Beyer R, Kongsgaard M, Hougs Kjær B, Øhlenschlæger T, Kjær M, Magnusson SP. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy: a randomized controlled trial. Am J Sports Med. 2015;43(7):1704-1711. doi:10.1177/0363546515584760']
  },
  {
    id: 'hsr-panturrilha', nome: 'Elevação lenta e pesada de panturrilha (HSR)', tags: ['Aquiles', 'tendinopatia', 'força', 'tornozelo'],
    objetivo: 'Aumentar a capacidade do tríceps sural e do tendão com carga alta e velocidade lenta.',
    como: ['Posicione-se em uma máquina de panturrilha ou em um degrau com carga externa.', 'Suba nas pontas dos pés em cerca de 3 segundos.', 'Segure 1 segundo no alto.', 'Desça em cerca de 3 segundos até o alongamento.', 'Faça 3 a 4 séries, com carga progressiva e repetições decrescentes.'],
    progressao: 'Aumentar a carga e reduzir as repetições, e passar a unipodal.',
    regressao: 'Reduzir a carga e fazer bilateral com apoio.',
    nota: 'O HSR teve resultados clínicos iguais ao excêntrico e maior adesão (92% contra 78%) em 58 pacientes (Beyer et al., 2015). Em tendinopatia patelar, o HSR foi superior ao corticoide a longo prazo (Kongsgaard et al., 2009).',
    refs: ['Beyer R, Kongsgaard M, Hougs Kjær B, Øhlenschlæger T, Kjær M, Magnusson SP. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy: a randomized controlled trial. Am J Sports Med. 2015;43(7):1704-1711. doi:10.1177/0363546515584760', 'Kongsgaard M, Kovanen V, Aagaard P, et al. Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy. Scand J Med Sci Sports. 2009;19(6):790-802. doi:10.1111/j.1600-0838.2009.00949.x']
  },
  {
    id: 'isometrico-panturrilha', nome: 'Isométrico de panturrilha', tags: ['Aquiles', 'tendinopatia', 'isométrico', 'analgesia'],
    objetivo: 'Reduzir a dor e manter a força do tríceps sural na fase irritada.',
    como: ['Fique em pé, apoiado em uma parede ou na máquina de panturrilha.', 'Suba nas pontas dos pés até um ponto de força alta, mas sem dor intensa.', 'Mantenha a posição por 30 a 45 segundos.', 'Descanse 1 a 2 minutos.', 'Repita 5 vezes.'],
    progressao: 'Aumentar a carga, passar a unipodal e depois para HSR.',
    regressao: 'Diminuir a carga ou o tempo de sustentação.',
    nota: 'O efeito analgésico do isométrico foi descrito no tendão patelar (Rio et al., 2015), e a dose de 5 séries de 30 a 45 s é da palestra do congresso. Não encontrei estudo específico para o Aquiles nesta pesquisa.',
    refs: ['Rio E, Kidgell D, Purdam C, et al. Isometric exercise induces analgesia and reduces inhibition in patellar tendinopathy. Br J Sports Med. 2015;49(19):1277-1283. doi:10.1136/bjsports-2014-094386']
  },
  {
    id: 'fibulares-elastico', nome: 'Eversão com elástico (fibulares)', tags: ['tornozelo', 'fibulares', 'entorse', 'elástico'],
    objetivo: 'Fortalecer os eversores do tornozelo após o entorse.',
    como: ['Sentado, com a perna estendida e o elástico preso em um ponto fixo e no antepé.', 'Parta do pé na posição neutra, para não estirar o ligamento lateral se houver dor.', 'Faça a eversão contra o elástico, lentamente, e volte controlando.', 'Faça 3 séries de 12 a 15 repetições.', 'Mantenha o joelho e o quadril parados.'],
    progressao: 'Elástico mais forte, em pé e depois em apoio instável.',
    regressao: 'Sem elástico ou isométrico, com a dor como guia.',
    nota: 'Segundo o módulo 7 da liga, a inibição dos fibulares sobrecarrega o tríceps. Em revisões, o exercício e o treino neuromuscular são recomendados após o entorse (Doherty et al., 2017).',
    refs: ['Doherty C, Bleakley C, Delahunt E, Holden S. Treatment and prevention of acute and recurrent ankle sprain: an overview of systematic reviews with meta-analysis. Br J Sports Med. 2017;51(2):113-125. doi:10.1136/bjsports-2016-096178']
  },
  {
    id: 'reacao-fibulares', nome: 'Tempo de reação dos fibulares', tags: ['tornozelo', 'fibulares', 'entorse', 'propriocepção'],
    objetivo: 'Treinar a velocidade de ativação dos fibulares frente a uma perturbação.',
    como: ['Sentado, com os olhos fechados e o elástico preso ao pé, sem tensão.', 'O terapeuta puxa o elástico de forma inesperada.', 'O paciente resiste ou reage o mais rápido possível.', 'Repita em momentos aleatórios e em direções diferentes.', 'Faça séries de 8 a 10 repetições, 3 vezes.'],
    progressao: 'Passar para apoio unipodal, superfície instável e perturbações maiores.',
    regressao: 'Olhos abertos e perturbações previsíveis.',
    nota: 'Exercício descrito no módulo 7 da liga ("IMPORTANTÍSSIMO"). A literatura citada no protocolo de entorse apoia o treino neuromuscular na prevenção de recidivas, mas não encontrei estudo deste exercício específico.',
    refs: ['Hupperets MDW, Verhagen EALM, van Mechelen W. Effect of unsupervised home based proprioceptive training on recurrences of ankle sprain: randomised controlled trial. BMJ. 2009;339:b2684. doi:10.1136/bmj.b2684']
  },
  {
    id: 'elevacao-toalha', nome: 'Elevação de calcanhar com toalha sob os dedos (fáscia plantar)', tags: ['fáscia plantar', 'pé', 'força', 'calcanhar'],
    objetivo: 'Fortalecer a fáscia plantar e o tríceps sural com carga alta.',
    como: ['Fique em pé com a ponta do pé sobre uma toalha enrolada, dedos em dorsiflexão.', 'Apoie-se em uma parede e eleve o calcanhar o máximo possível.', 'Segure 1 segundo e desça lentamente em cerca de 3 segundos.', 'Faça 3 séries, com carga progressiva (mochila).', 'Realize em dias alternados (frequência do estudo; o tempo de subida e descida deve ser conferido no artigo).'],
    progressao: 'Aumentar a carga e diminuir as repetições, passando a unipodal.',
    regressao: 'Bilateral, sem toalha ou com menos carga.',
    nota: 'O treino de força de alta carga, com elevação unipodal e toalha, em dias alternados, foi melhor do que o alongamento em 3 meses (Rathleff et al., 2015).',
    refs: ['Rathleff MS, Mølgaard CM, Fredberg U, et al. High-load strength training improves outcome in patients with plantar fasciitis: a randomized controlled trial with 12-month follow-up. Scand J Med Sci Sports. 2015;25(3):e292-e300. doi:10.1111/sms.12313']
  },
  {
    id: 'quadriceps-isometrico', nome: 'Isométrico de extensão do joelho (quadríceps)', tags: ['joelho', 'quadríceps', 'isométrico', 'analgesia'],
    objetivo: 'Reduzir a dor e a inibição do quadríceps com carga controlada.',
    como: ['Sentado em uma cadeira extensora ou com o joelho a 60° e uma faixa no tornozelo presa a um ponto fixo.', 'Empurre a perna contra a resistência, com força alta e sem dor intensa.', 'Mantenha 30 a 45 segundos.', 'Descanse 1 a 2 minutos.', 'Repita 5 vezes.'],
    progressao: 'Aumentar a intensidade (cerca de 70% da força máxima) e depois passar para exercícios isotônicos.',
    regressao: 'Reduzir a intensidade e o tempo de sustentação.',
    nota: 'A dose de 5 séries de 30 a 45 s com cerca de 70% da força máxima é da palestra do congresso (tendinopatia). O efeito analgésico do isométrico foi descrito em tendinopatia patelar (Rio et al., 2015).',
    refs: ['Rio E, Kidgell D, Purdam C, et al. Isometric exercise induces analgesia and reduces inhibition in patellar tendinopathy. Br J Sports Med. 2015;49(19):1277-1283. doi:10.1136/bjsports-2014-094386']
  },
  {
    id: 'agachamento-declive', nome: 'Agachamento unipodal em declive', tags: ['joelho', 'tendão patelar', 'excêntrico', 'tendinopatia'],
    objetivo: 'Carregar o tendão patelar com o agachamento em plano inclinado.',
    como: ['Fique em pé sobre uma plataforma inclinada a 25°, com o calcanhar elevado.', 'Pese o pé afetado e agache lentamente até cerca de 90° de flexão.', 'Suba com os dois pés para reduzir a carga na subida.', 'Faça 3 séries de 15 repetições (a frequência e a dose exatas devem ser conferidas no artigo original).', 'Aumente a carga com mochila quando a dor permitir.'],
    progressao: 'Aumentar a carga e passar a subir com o pé afetado.',
    regressao: 'Plano plano, menor amplitude ou menor carga.',
    nota: 'O agachamento excêntrico em declive foi um dos grupos do ensaio de Kongsgaard et al. (2009) em tendinopatia patelar. O HSR teve bons efeitos a curto e longo prazo.',
    refs: ['Kongsgaard M, Kovanen V, Aagaard P, et al. Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy. Scand J Med Sci Sports. 2009;19(6):790-802. doi:10.1111/j.1600-0838.2009.00949.x']
  },
  {
    id: 'hsr-pernas', nome: 'Agachamento e leg press lentos e pesados (HSR)', tags: ['joelho', 'quadríceps', 'tendão patelar', 'força'],
    objetivo: 'Aumentar a capacidade do quadríceps e do tendão patelar com carga alta e velocidade lenta.',
    como: ['Escolha o leg press, o agachamento ou o hack, com a carga adequada.', 'Desça em cerca de 3 segundos até 90° de flexão.', 'Suba em cerca de 3 segundos.', 'Faça 3 a 4 séries, cerca de 3 vezes por semana (dose do estudo: conferir no artigo), com carga progressiva.', 'Diminua as repetições à medida que a carga aumenta.'],
    progressao: 'Aumentar a carga e diminuir as repetições (de 15 para 6).',
    regressao: 'Reduzir a carga e a amplitude, e manter a dor tolerável.',
    nota: 'O HSR teve bons efeitos em curto e longo prazo na tendinopatia patelar (Kongsgaard et al., 2009), e uma revisão apontou mais evidência para o HSR no tendão patelar (Malliaras et al., 2013).',
    refs: ['Kongsgaard M, Kovanen V, Aagaard P, et al. Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy. Scand J Med Sci Sports. 2009;19(6):790-802. doi:10.1111/j.1600-0838.2009.00949.x', 'Malliaras P, Barton CJ, Reeves ND, Langberg H. Achilles and patellar tendinopathy loading programmes: a systematic review comparing clinical outcomes and identifying potential mechanisms for effectiveness. Sports Med. 2013;43(4):267-286. doi:10.1007/s40279-013-0019-z']
  },
  {
    id: 'slr', nome: 'Elevação da perna estendida (SLR) com ativação do quadríceps', tags: ['joelho', 'quadríceps', 'LCA', 'pós-operatório'],
    objetivo: 'Ativar o quadríceps e confirmar a extensão completa do joelho no pós-operatório.',
    como: ['Deite de costas, com o outro joelho flexionado.', 'Contraia o quadríceps e estenda o joelho completamente.', 'Eleve a perna estendida cerca de 30 a 40 cm.', 'Desça lentamente. O calcanhar não deve encostar primeiro na maca: o gastrocnêmio encosta primeiro quando há déficit.', 'Faça 3 séries de 10 repetições.'],
    progressao: 'Caneleira, SLR com o joelho fletido e fora da maca, e SLR em decúbito lateral.',
    regressao: 'Isométrico de quadríceps com toalha sob o joelho.',
    nota: 'Descrito no congresso (G. Leão) como teste e exercício de ativação do quadríceps no LCA. O déficit de extensão tem repercussões (marcha anormal, inibição do quadríceps) e artrofibrose é complicação conhecida (Ekhtiari et al., 2017).',
    refs: ['Ekhtiari S, Horner NS, de Sa D, et al. Arthrofibrosis after ACL reconstruction is best treated in a step-wise approach with early recognition and intervention: a systematic review. Knee Surg Sports Traumatol Arthrosc. 2017;25(12):3929-3937. doi:10.1007/s00167-017-4482-1']
  },
  {
    id: 'ponte-glutea', nome: 'Ponte glútea (bilateral)', tags: ['quadril', 'glúteo máximo', 'tronco', 'posterior de coxa'],
    objetivo: 'Fortalecer extensores do quadril e treinar o controle lombopélvico.',
    como: ['Deite de costas, joelhos flexionados a 90° e pés apoiados no chão, na largura do quadril.', 'Contraia os glúteos e eleve a pelve até o tronco e as coxas formarem uma linha.', 'Evite hiperextensão lombar.', 'Mantenha 2 segundos e desça lentamente.', 'Faça 3 séries de 10 a 15 repetições.'],
    progressao: 'Carga na pelve, apoio em uma perna e pés elevados.',
    regressao: 'Amplitude menor ou isométrico curto.',
    nota: 'Em voluntários saudáveis, a ponte e a ponte unipodal ficaram abaixo de 45% da contração máxima, o que as torna mais adequadas para resistência e estabilização do que para ganho de força máximo (Ekstrom et al., 2007).',
    refs: ['Ekstrom RA, Donatelli RA, Carp KC. Electromyographic analysis of core trunk, hip, and thigh muscles during 9 rehabilitation exercises. J Orthop Sports Phys Ther. 2007;37(12):754-762. doi:10.2519/jospt.2007.2471']
  },
  {
    id: 'ponte-unipodal', nome: 'Ponte unipodal', tags: ['quadril', 'posterior de coxa', 'glúteo máximo', 'isquiotibiais'],
    objetivo: 'Fortalecer glúteo e isquiotibiais em apoio unipodal.',
    como: ['Deite de costas, com o calcanhar de uma perna apoiado em um banco ou no chão, joelho a 90°.', 'A outra perna fica estendida ou dobrada no ar.', 'Eleve a pelve, mantendo-a nivelada.', 'Mantenha 2 segundos e desça lentamente.', 'Faça 3 séries de 8 a 12 repetições por lado.'],
    progressao: 'Mais altura do apoio, carga externa e movimentos de braço.',
    regressao: 'Ponte bilateral e apoio com os dois calcanhares.',
    nota: 'A ponte unipodal foi estudada como teste de isquiotibiais em jogadores de futebol australiano (Freckleton et al., 2014; ver o teste de ponte unipodal). Em voluntários saudáveis, ficou abaixo de 45% da contração máxima (Ekstrom et al., 2007).',
    refs: ['Freckleton G, Cook J, Pizzari T. The predictive validity of a single leg bridge test for hamstring injuries in Australian Rules Football Players. Br J Sports Med. 2014;48(8):713-717. doi:10.1136/bjsports-2013-092356', 'Ekstrom RA, Donatelli RA, Carp KC. Electromyographic analysis of core trunk, hip, and thigh muscles during 9 rehabilitation exercises. J Orthop Sports Phys Ther. 2007;37(12):754-762. doi:10.2519/jospt.2007.2471']
  },
  {
    id: 'rdl-unipodal', nome: 'Levantamento terra unipodal (RDL)', tags: ['quadril', 'glúteo máximo', 'glúteo médio', 'isquiotibiais'],
    objetivo: 'Fortalecer glúteos e isquiotibiais com controle do tronco e do equilíbrio.',
    como: ['Fique em pé em uma perna, com o joelho levemente flexionado.', 'Incline o tronco à frente, com o quadril indo para trás e a outra perna estendida atrás.', 'Mantenha a coluna neutra e a pelve nivelada.', 'Volte contraindo o glúteo.', 'Faça 3 séries de 8 a 10 repetições por lado.'],
    progressao: 'Adicionar halter ou kettlebell e superfície instável.',
    regressao: 'Apoiar a mão em uma parede ou fazer com as duas pernas.',
    nota: 'O levantamento terra unipodal ativou o glúteo médio e o glúteo máximo de forma semelhante ao agachamento unipodal (cerca de 59% da contração máxima) (Distefano et al., 2009).',
    refs: ['Distefano LJ, Blackburn JT, Marshall SW, Padua DA. Gluteal muscle activation during common therapeutic exercises. J Orthop Sports Phys Ther. 2009;39(7):532-540. doi:10.2519/jospt.2009.2796']
  },
  {
    id: 'agachamento-unipodal', nome: 'Agachamento unipodal', tags: ['quadril', 'joelho', 'glúteo', 'controle'],
    objetivo: 'Fortalecer glúteos e quadríceps com controle do valgo do joelho.',
    como: ['Fique em pé em uma perna, com os braços à frente.', 'Agache, com o quadril indo para trás, até cerca de 45° a 60° de flexão do joelho.', 'Mantenha o joelho alinhado ao segundo dedo do pé e a pelve nivelada.', 'Volte à posição inicial.', 'Faça 3 séries de 8 a 10 repetições por lado.'],
    progressao: 'Aumentar a profundidade, usar carga e superfície instável.',
    regressao: 'Apoio em uma parede, ou usar um banco como limite.',
    nota: 'O agachamento unipodal ativou o glúteo médio em 64% e o glúteo máximo em 59% da contração máxima (Distefano et al., 2009). Em outro estudo, 82% no glúteo médio (Boren et al., 2011). Também é usado como teste de qualidade do movimento.',
    refs: ['Distefano LJ, Blackburn JT, Marshall SW, Padua DA. Gluteal muscle activation during common therapeutic exercises. J Orthop Sports Phys Ther. 2009;39(7):532-540. doi:10.2519/jospt.2009.2796', 'Boren K, Conrey C, Le Coguic J, Paprocki L, Voight M, Robinson TK. Electromyographic analysis of gluteus medius and gluteus maximus during rehabilitation exercises. Int J Sports Phys Ther. 2011;6(3):206-223.']
  },
  {
    id: 'step-up-lateral', nome: 'Step-up lateral', tags: ['joelho', 'quadríceps', 'quadril', 'funcional'],
    objetivo: 'Fortalecer quadríceps e glúteos em subida de degrau.',
    como: ['Fique de lado para um degrau de 15 a 20 cm, com um pé sobre ele.', 'Suba até estender o joelho, usando a perna do degrau, sem impulsionar com a outra.', 'Mantenha o joelho alinhado com o pé.', 'Desça lentamente.', 'Faça 3 séries de 10 repetições por lado.'],
    progressao: 'Degrau mais alto, carga externa e velocidade.',
    regressao: 'Degrau mais baixo.',
    nota: 'O step-up lateral e o afundo ativaram o vasto medial oblíquo acima de 45% da contração máxima (Ekstrom et al., 2007).',
    refs: ['Ekstrom RA, Donatelli RA, Carp KC. Electromyographic analysis of core trunk, hip, and thigh muscles during 9 rehabilitation exercises. J Orthop Sports Phys Ther. 2007;37(12):754-762. doi:10.2519/jospt.2007.2471']
  },
  {
    id: 'prancha-lateral', nome: 'Prancha lateral', tags: ['tronco', 'glúteo médio', 'quadril', 'core'],
    objetivo: 'Fortalecer glúteo médio, oblíquos e quadrado lombar.',
    como: ['Deite de lado, apoiado no antebraço, com o cotovelo sob o ombro.', 'Pés um sobre o outro (ou um à frente do outro).', 'Eleve a pelve até o corpo formar uma linha reta.', 'Mantenha 20 a 30 segundos, sem deixar a pelve cair.', 'Repita 3 vezes de cada lado.'],
    progressao: 'Elevar a perna de cima (com abdução), apoiar no pé e aumentar o tempo.',
    regressao: 'Apoiar os joelhos no chão.',
    nota: 'A prancha lateral com abdução teve a maior ativação do glúteo médio (103% da contração máxima), em um estudo de 18 exercícios (Boren et al., 2011), e a prancha lateral ativou o glúteo médio em nível útil para ganho de força (Ekstrom et al., 2007).',
    refs: ['Boren K, Conrey C, Le Coguic J, Paprocki L, Voight M, Robinson TK. Electromyographic analysis of gluteus medius and gluteus maximus during rehabilitation exercises. Int J Sports Phys Ther. 2011;6(3):206-223.', 'Ekstrom RA, Donatelli RA, Carp KC. Electromyographic analysis of core trunk, hip, and thigh muscles during 9 rehabilitation exercises. J Orthop Sports Phys Ther. 2007;37(12):754-762. doi:10.2519/jospt.2007.2471']
  },
  {
    id: 'prancha-frontal', nome: 'Prancha frontal', tags: ['tronco', 'core', 'resistência'],
    objetivo: 'Treinar a resistência do tronco e a estabilidade lombopélvica.',
    como: ['Apoie os antebraços e as pontas dos pés no chão, com os cotovelos sob os ombros.', 'Mantenha a cabeça, o tronco e as pernas alinhados.', 'Contraia o abdome e os glúteos, sem deixar a lombar ceder.', 'Mantenha 20 a 30 segundos.', 'Repita 3 vezes.'],
    progressao: 'Aumentar o tempo, elevar uma perna e adicionar extensão do quadril.',
    regressao: 'Apoiar os joelhos no chão.',
    nota: 'A prancha frontal com extensão do quadril teve a maior ativação do glúteo máximo (106% da contração máxima) (Boren et al., 2011). Os testes de resistência do tronco de McGill usam posições semelhantes (ver o teste de McGill).',
    refs: ['Boren K, Conrey C, Le Coguic J, Paprocki L, Voight M, Robinson TK. Electromyographic analysis of gluteus medius and gluteus maximus during rehabilitation exercises. Int J Sports Phys Ther. 2011;6(3):206-223.', 'McGill SM, Childs A, Liebenson C. Endurance times for low back stabilization exercises: clinical targets for testing and training from a normal database. Arch Phys Med Rehabil. 1999;80(8):941-944. doi:10.1016/s0003-9993(99)90087-4']
  },
  {
    id: 'bird-dog', nome: 'Bird-dog (elevação de braço e perna em quatro apoios)', tags: ['tronco', 'core', 'glúteo máximo', 'coluna'],
    objetivo: 'Treinar a estabilidade da coluna e a extensão do quadril.',
    como: ['Fique em quatro apoios, com a coluna neutra.', 'Estenda um braço à frente e a perna oposta para trás, sem girar a pelve.', 'Mantenha 5 a 10 segundos, olhando para o chão.', 'Volte e troque de lado.', 'Faça 3 séries de 8 repetições por lado.'],
    progressao: 'Aumentar o tempo, usar caneleira ou elástico, e superfície instável.',
    regressao: 'Estender só a perna ou só o braço.',
    nota: 'A elevação de braço e perna em quatro apoios ativou o glúteo máximo em nível útil para ganho de força (Ekstrom et al., 2007).',
    refs: ['Ekstrom RA, Donatelli RA, Carp KC. Electromyographic analysis of core trunk, hip, and thigh muscles during 9 rehabilitation exercises. J Orthop Sports Phys Ther. 2007;37(12):754-762. doi:10.2519/jospt.2007.2471']
  },
  {
    id: 'adutores-elastico', nome: 'Adução de quadril com elástico', tags: ['quadril', 'adutores', 'prevenção', 'virilha'],
    objetivo: 'Fortalecer os adutores com carga progressiva.',
    como: ['Fique em pé de lado para um ponto fixo, com o elástico preso acima do tornozelo da perna de dentro.', 'Afaste a perna levemente, mantendo a pelve nivelada.', 'Aduza a perna contra o elástico, cruzando à frente da outra, e volte lentamente (3 segundos).', 'Faça 3 séries de 15 a 8 repetições, progredindo a carga.', 'Treine 2 a 3 vezes por semana.'],
    progressao: 'Elástico mais forte e menos repetições, e depois Copenhagen.',
    regressao: 'Sem resistência ou isométrico com bola entre os joelhos.',
    nota: 'Em 34 jogadores de futebol, 8 semanas de adução com elástico aumentaram a força excêntrica de adução em 30%, contra 17% no controle (Jensen et al., 2014). O programa de fortalecimento dos adutores reduziu problemas de virilha em jogadores de futebol (Harøy et al., 2019). Na dor anterior do quadril ou no impacto femoroacetabular, ver a nota de anatomia sobre os adutores.',
    refs: ['Jensen J, Hölmich P, Bandholm T, Zebis MK, Andersen LL, Thorborg K. Eccentric strengthening effect of hip-adductor training with elastic bands in soccer players: a randomised controlled trial. Br J Sports Med. 2014;48(4):332-338. doi:10.1136/bjsports-2012-091095', 'Harøy J, Clarsen B, Wiger EG, et al. The Adductor Strengthening Programme prevents groin problems among male football players: a cluster-randomised controlled trial. Br J Sports Med. 2019;53(3):150-157. doi:10.1136/bjsports-2017-098937']
  },
  {
    id: 'rot-lateral-ombro', nome: 'Rotação lateral do ombro com elástico (decúbito lateral)', tags: ['ombro', 'manguito rotador', 'infraespinal', 'elástico'],
    objetivo: 'Fortalecer os rotadores laterais do ombro (infraespinal e redondo menor).',
    como: ['Deite de lado, com o braço de cima junto ao tronco e o cotovelo a 90°, com uma toalha entre o braço e o corpo.', 'Segure um halter leve ou um elástico preso à frente.', 'Gire o antebraço para cima, sem tirar o cotovelo do corpo.', 'Volte lentamente em 3 segundos.', 'Faça 3 séries de 10 a 15 repetições.'],
    progressao: 'Aumentar a carga, passar para 90° de abdução e para movimento mais rápido.',
    regressao: 'Sem carga ou com carga menor, com amplitude reduzida.',
    nota: 'A rotação lateral em decúbito lateral foi um dos exercícios com maior ativação do infraespinal e do redondo menor entre os estudados em eletromiografia (Reinold et al., 2004).',
    refs: ['Reinold MM, Wilk KE, Fleisig GS, et al. Electromyographic analysis of the rotator cuff and deltoid musculature during common shoulder external rotation exercises. J Orthop Sports Phys Ther. 2004;34(7):385-394. doi:10.2519/jospt.2004.34.7.385']
  },
  {
    id: 'elevacao-plano-escapular', nome: 'Elevação no plano escapular (full can)', tags: ['ombro', 'supraespinal', 'deltoide', 'manguito'],
    objetivo: 'Fortalecer supraespinal e deltoide em um plano seguro para o ombro.',
    como: ['Fique em pé, com os braços ao lado do corpo e os polegares para cima.', 'Eleve os braços a cerca de 30° à frente do plano frontal (plano escapular), até a altura do ombro.', 'Mantenha os ombros baixos, sem encolher.', 'Desça lentamente em 3 segundos.', 'Faça 3 séries de 10 a 12 repetições com carga leve.'],
    progressao: 'Aumentar a carga e a amplitude e depois incluir velocidade.',
    regressao: 'Sem carga, ou com apoio do outro braço.',
    nota: 'Exercício usual na reabilitação do manguito. Uma revisão apoia o exercício progressivo no impacto subacromial (Abdulla et al., 2015); os detalhes de execução variam entre estudos.',
    refs: ['Abdulla SY, Southerst D, Côté P, et al. Is exercise effective for the management of subacromial impingement syndrome and other soft tissue injuries of the shoulder? A systematic review by the Ontario Protocol for Traffic Injury Management (OPTIMa) Collaboration. Man Ther. 2015;20(5):646-656. doi:10.1016/j.math.2015.03.013']
  },
  {
    id: 'remada-elastico', nome: 'Remada com elástico (trapézio médio e romboides)', tags: ['ombro', 'escápula', 'trapézio', 'romboides'],
    objetivo: 'Fortalecer os retratores da escápula.',
    como: ['Sentado ou em pé, com o elástico preso à frente na altura do peito.', 'Puxe o elástico levando os cotovelos para trás, aproximando as escápulas.', 'Mantenha os ombros baixos e o tronco parado.', 'Segure 1 a 2 segundos e volte lentamente.', 'Faça 3 séries de 12 a 15 repetições.'],
    progressao: 'Elástico mais forte, em apoio unipodal ou com rotação externa no final.',
    regressao: 'Elástico mais leve ou amplitude menor.',
    nota: 'Recurso usual de estabilização escapular. O consenso de 2013 sobre discinese escapular recomenda avaliar e tratar a escápula dentro do contexto do ombro (Kibler et al., 2013).',
    refs: ['Kibler WB, Ludewig PM, McClure PW, Michener LA, Bak K, Sciascia AD. Clinical implications of scapular dyskinesis in shoulder injury: the 2013 consensus statement from the \'Scapular Summit\'. Br J Sports Med. 2013;47(14):877-885. doi:10.1136/bjsports-2013-092425']
  },
  {
    id: 'push-up-plus', nome: 'Flexão com "plus" (serrátil anterior)', tags: ['ombro', 'escápula', 'serrátil anterior', 'core'],
    objetivo: 'Ativar o serrátil anterior para estabilizar a escápula.',
    como: ['Comece em posição de flexão de braço, com as mãos na largura dos ombros.', 'Faça a flexão normalmente e, ao subir, empurre o chão um pouco além da extensão dos cotovelos (protração da escápula).', 'Mantenha o tronco reto e o pescoço neutro.', 'Segure 1 segundo no topo e desça com controle.', 'Faça 3 séries de 8 a 12 repetições.'],
    progressao: 'Pés elevados, superfície instável ou apoio unipodal.',
    regressao: 'Apoio nos joelhos ou na parede.',
    nota: 'A flexão com "plus" ativa o serrátil anterior em estudos de eletromiografia, com variação conforme a angulação do úmero e a superfície (Park et al., 2014; Hwang et al., 2017).',
    refs: ['Park KM, Cynn HS, Kwon OY, Yi CH, Yoon TL, Lee JH. Comparison of pectoralis major and serratus anterior muscle activities during different push-up plus exercises in subjects with and without scapular winging. J Strength Cond Res. 2014;28(9):2546-2551. doi:10.1519/jsc.0000000000000443', 'Hwang UJ, Kwon OY, Jeon IC, Kim SH, Weon JH. Effect of humeral-elevation angle on electromyographic activity in the serratus anterior during the push-up-plus exercise. J Sport Rehabil. 2017;26(1):57-64. doi:10.1123/jsr.2015-0090']
  },
  {
    id: 'extensor-punho-excentrico', nome: 'Extensão de punho excêntrica (epicondilalgia lateral)', tags: ['cotovelo', 'punho', 'extensores', 'tendinopatia'],
    objetivo: 'Carregar os extensores do punho de forma excêntrica e progressiva.',
    como: ['Sentado, apoie o antebraço na coxa, com a mão fora do apoio e a palma para baixo.', 'Segure um halter leve; use a outra mão para elevar o punho até a extensão máxima.', 'Solte e deixe a mão descer lentamente em cerca de 3 segundos com o punho afetado.', 'Faça 3 séries de 10 a 15 repetições, com frequência conforme a dor.', 'Aumente a carga gradualmente conforme a dor permitir.'],
    progressao: 'Carga maior, e depois exercícios com barra flexível ou elástico.',
    regressao: 'Sem carga ou isométrico.',
    nota: 'O exercício teve melhores resultados do que intervenções passivas, mas o efeito foi pequeno e a certeza baixa (Karanasios et al., 2021). O excêntrico é apoiado como parte de um programa multimodal; isolado, foi pouco estudado (Cullinane et al., 2014).',
    refs: ['Karanasios S, Korakakis V, Whiteley R, Vasilogeorgis I, Woodbridge S, Gioftsos G. Exercise interventions in lateral elbow tendinopathy have better outcomes than passive interventions, but the effects are small: a systematic review and meta-analysis of 2123 subjects in 30 trials. Br J Sports Med. 2021;55(9):477-485. doi:10.1136/bjsports-2020-102525', 'Cullinane FL, Boocock MG, Trevelyan FC. Is eccentric exercise an effective treatment for lateral epicondylitis? A systematic review. Clin Rehabil. 2014;28(1):3-19. doi:10.1177/0269215513491974']
  },
  {
    id: 'rotacao-toracica', nome: 'Rotação torácica em quatro apoios (open book)', tags: ['coluna torácica', 'mobilidade', 'ombro', 'arremesso'],
    objetivo: 'Ganhar mobilidade de rotação da coluna torácica.',
    como: ['Fique em quatro apoios, sentado sobre os calcanhares ou o mais próximo possível.', 'Coloque uma mão atrás da cabeça e mantenha o outro antebraço apoiado.', 'Gire o tronco, levando o cotovelo em direção ao teto, sem mover o quadril.', 'Segure 2 segundos e volte.', 'Faça 2 séries de 10 repetições por lado.'],
    progressao: 'Aumentar a amplitude e o tempo de sustentação, e adicionar respiração.',
    regressao: 'Fazer deitado de lado, com os joelhos flexionados.',
    nota: 'O posicionamento é o mesmo do teste de rotação torácica da liga (ver o teste). Em adultos saudáveis, as técnicas de medida da rotação torácica tiveram boa confiabilidade (Johnson et al., 2012).',
    refs: ['Johnson KD, Kim KM, Yu BK, Saliba SA, Grindstaff TL. Reliability of thoracic spine rotation range-of-motion measurements in healthy adults. J Athl Train. 2012;47(1):52-60. doi:10.4085/1062-6050-47.1.52']
  },
  {
    id: 'salto-aterrissagem', nome: 'Salto e aterrissagem controlada', tags: ['pliometria', 'joelho', 'tornozelo', 'LCA', 'prevenção'],
    objetivo: 'Treinar a absorção de impacto e o controle do joelho na aterrissagem.',
    como: ['Fique em pé, com os pés na largura do quadril.', 'Salte para cima e aterrisse com os dois pés ao mesmo tempo, flexionando joelhos e quadris.', 'O joelho fica alinhado com o pé e o tronco levemente inclinado à frente.', 'Mantenha a posição por 2 segundos antes de repetir.', 'Faça 3 séries de 6 a 8 repetições.'],
    progressao: 'Salto com giro, salto unipodal, salto em profundidade e aterrissagem com perturbação.',
    regressao: 'Salto para baixo de um degrau baixo, com apoio nas mãos.',
    nota: 'A qualidade da aterrissagem pode ser avaliada pelo teste LESS (ver o teste). Na palestra do congresso, o treino excêntrico e de aterrissagem não deve ser pulado antes da pliometria.',
    refs: ['Padua DA, et al. The Landing Error Scoring System (LESS) is a valid and reliable clinical assessment tool of jump-landing biomechanics: the JUMP-ACL study. Am J Sports Med. 2009;37(10):1996-2002. doi:10.1177/0363546509343200']
  },
  {
    id: 'drop-jump', nome: 'Salto em profundidade (drop jump)', tags: ['pliometria', 'joelho', 'tornozelo', 'retorno ao esporte'],
    objetivo: 'Treinar o ciclo alongamento-encurtamento e a potência reativa.',
    como: ['Fique em pé sobre uma caixa de 20 a 30 cm.', 'Dê um passo à frente e deixe-se cair, sem saltar para baixo.', 'Aterrisse com os dois pés e salte para cima de imediato, o mais alto possível, com contato rápido com o chão.', 'Aterrisse com os joelhos flexionados e alinhados.', 'Faça 3 séries de 5 repetições, com descanso completo.'],
    progressao: 'Caixa mais alta, unipodal, e salto com deslocamento.',
    regressao: 'Salto em contramovimento e salto no lugar.',
    nota: 'A pliometria como etapa de armazenamento e liberação de energia antes do retorno ao esporte é descrita na palestra de tendinopatia do congresso e em programas de retorno ao esporte do Aquiles (Silbernagel e Crossley, 2015). Exige tolerância de carga prévia.',
    refs: ['Silbernagel KG, Crossley KM. A proposed return-to-sport program for patients with midportion Achilles tendinopathy: rationale and implementation. J Orthop Sports Phys Ther. 2015;45(11):876-886. doi:10.2519/jospt.2015.5885']
  },
  {
    id: 'mudanca-direcao-reativa', nome: 'Sprint com mudança de direção reativa', tags: ['agilidade', 'tornozelo', 'joelho', 'retorno ao esporte'],
    objetivo: 'Treinar mudanças de direção inesperadas na fase final do retorno ao esporte.',
    como: ['Marque uma pista de 10 a 15 metros com cones.', 'O atleta corre em sprint a uma velocidade submáxima.', 'O terapeuta ou o próprio atleta dá o comando de mudar de direção de forma inesperada.', 'O atleta desacelera e acelera para o lado do comando.', 'Faça 4 a 6 repetições, com descanso completo.'],
    progressao: 'Maior velocidade, ângulos maiores e associação com saltos ou com bola.',
    regressao: 'Mudanças previstas e em menor velocidade.',
    nota: 'Exercício citado no módulo 7 da liga (entorse): sprint com comando inesperado de mudança de direção, associado a saltos. Não encontrei estudo específico deste exercício.',
    refs: []
  },
  {
    id: 'aperto-adutores-bola', nome: 'Aperto de adutores com bola (squeeze)', tags: ['quadril', 'adutores', 'isométrico', 'virilha'],
    objetivo: 'Fortalecer os adutores de forma isométrica, em fase inicial.',
    como: ['Deite de costas, com os joelhos flexionados e uma bola entre os joelhos (ou as pernas estendidas, com a bola entre as pernas).', 'Aperte a bola com força progressiva, até cerca de 6 a 8 em 10.', 'Mantenha 5 a 10 segundos.', 'Relaxe e repita 10 vezes.', 'Fique atento à dor na virilha: reduzir se aumentar.'],
    progressao: 'Aumentar a intensidade e o tempo, e passar para a posição de pernas estendidas (alavanca longa).',
    regressao: 'Menos força ou amplitude menor.',
    nota: 'O aperto de adutores, com alavanca longa, foi o que produziu mais torque e boa confiabilidade em jogadores de elite (Light e Thorborg, 2016). Em dor anterior do quadril ou impacto, ver a nota de anatomia sobre os adutores.',
    refs: ['Light N, Thorborg K. The precision and torque production of common hip adductor squeeze tests used in elite football. J Sci Med Sport. 2016;19(11):888-892. doi:10.1016/j.jsams.2015.12.009']
  }
];

const PREVENCAO = [
  {
    id: 'fifa11', nome: 'FIFA 11+',
    resumo: 'Programa de aquecimento de cerca de 20 minutos, em 3 partes e 15 exercícios (na versão do estudo original, 6 de corrida, 6 de força, pliometria e equilíbrio, e 3 de corrida final), feito antes do treino. Foi desenvolvido por um grupo de especialistas da FIFA, do Centro de Pesquisa em Traumas Esportivos de Oslo e da Fundação de Santa Mônica, e é adaptado para outros esportes.',
    quando: 'Como aquecimento, antes do treino. A FIFA recomenda fazer o programa ao menos 2 vezes por semana (conferir no manual oficial). Em cada sessão, a parte 2 usa um dos 3 níveis de dificuldade de cada exercício: começar pelo nível 1 e subir conforme a técnica.',
    material: 'Campo com 6 a 10 pares de cones, a 5 a 6 metros um do outro, e uma bola. Os exercícios são em duplas.',
    partes: [
      {
        nome: 'Parte 1: corrida e mobilidade (cerca de 8 min)',
        itens: [
          { nome: '1. Corrida em linha reta', oque: 'Aquecimento geral em baixa velocidade.', como: ['Corra em baixa velocidade até o último cone e volte.', 'Mantenha postura ereta e passos curtos.'], dose: '2 idas e voltas' },
          { nome: '2. Quadril para fora', oque: 'Mobilidade do quadril em abdução e rotação externa, com controle em apoio unipodal.', como: ['Corra até o próximo cone e pare.', 'Eleve o joelho e abra o quadril para fora, como se passasse por cima de uma barreira.', 'Apoie com firmeza, sem deixar o joelho entrar, e siga correndo.'], dose: '2 idas e voltas' },
          { nome: '3. Quadril para dentro', oque: 'Mobilidade do quadril em rotação interna, com controle em apoio unipodal.', como: ['Corra até o próximo cone e pare.', 'Eleve o joelho e leve a perna para dentro, passando por cima de uma barreira imaginária.', 'Apoie com firmeza e siga correndo.'], dose: '2 idas e voltas' },
          { nome: '4. Circundando o parceiro', oque: 'Controle do tronco e do joelho em passos laterais curtos, com contato leve.', como: ['Corra até o meio da pista e fique de frente para o parceiro.', 'Dê passos laterais curtos em torno do parceiro, mantendo os joelhos levemente flexionados.', 'Depois corra até o fim e volte.'], dose: '2 idas e voltas' },
          { nome: '5. Saltos de ombro com o parceiro', oque: 'Aterrissagem estável com contato do ombro, treinando o controle do joelho.', como: ['Corra até o meio e fique ao lado do parceiro.', 'Salte lateralmente para encostar o ombro no do parceiro.', 'Aterrisse com os dois pés, flexionando joelhos e quadris, sem deixar os joelhos entrarem.'], dose: '2 idas e voltas' },
          { nome: '6. Corrida rápida para frente e para trás', oque: 'Troca rápida de direção e de sentido, para ativar o corpo antes do treino.', como: ['Corra rápido para frente até o cone do meio.', 'Freie, e corra de costas até o cone anterior.', 'Repita até o fim da pista.'], dose: '2 idas e voltas' }
        ]
      },
      {
        nome: 'Parte 2: força, pliometria e equilíbrio (cerca de 10 min)',
        itens: [
          { nome: '7. Prancha frontal (the bench)', oque: 'Resistência do tronco e estabilidade lombopélvica.', como: ['Apoie os antebraços e os pés no chão, com o corpo alinhado.', 'Contraia o abdome e os glúteos, sem deixar a lombar ceder.', 'Mantenha respirando normalmente.'], niveis: ['Nível 1: com as duas pernas apoiadas, 3×20-30 s', 'Nível 2: alternando as pernas, 3×20-30 s', 'Nível 3: com elevação de uma perna, 3×20-30 s'], dose: '3 séries de 20 a 30 s' },
          { nome: '8. Prancha lateral (sideways bench)', oque: 'Força dos estabilizadores laterais do tronco e do quadril, e controle da pelve.', como: ['Deite de lado, apoiado no antebraço, com o cotovelo sob o ombro.', 'Eleve a pelve, formando uma linha reta com o corpo.', 'Não deixe a pelve cair.'], niveis: ['Nível 1: estática, 3×20-30 s por lado', 'Nível 2: dinâmica (subir e descer o quadril), 3×20-30 s por lado', 'Nível 3: com elevação da perna de cima, 3×20-30 s por lado'], dose: '3 séries de 20 a 30 s por lado' },
          { nome: '9. Nordic hamstring', oque: 'Força excêntrica dos isquiotibiais, fator de risco de lesão.', como: ['Ajoelhado, com os tornozelos presos por um parceiro ou equipamento.', 'Mantenha o corpo reto do joelho à cabeça e incline-se à frente o mais devagar possível, controlando com os isquiotibiais.', 'Ao perder o controle, apoie as mãos, empurre-se de volta e repita.'], niveis: ['Nível 1: 3 a 5 repetições', 'Nível 2: 7 a 10 repetições', 'Nível 3: 12 a 15 repetições'], dose: 'Conforme o nível' },
          { nome: '10. Equilíbrio unipodal', oque: 'Propriocepção e controle do joelho em apoio unipodal.', como: ['Fique em uma perna, com o joelho levemente flexionado e a pelve nivelada.', 'Mantenha o joelho alinhado com o pé.', 'Realize em cada perna.'], niveis: ['Nível 1: segurando a bola, 2×30 s por perna', 'Nível 2: lançando a bola ao parceiro, 2×30 s por perna', 'Nível 3: testando o parceiro (empurrões leves), 2×30 s por perna'], dose: '2 séries de 30 s por perna' },
          { nome: '11. Agachamentos', oque: 'Força do membro inferior e controle do valgo do joelho.', como: ['Pés na largura do quadril e joelhos alinhados com os pés.', 'Desça controlando o tronco e suba com os glúteos.', 'Nos níveis seguintes, o exercício passa a ser afundo e agachamento unipodal.'], niveis: ['Nível 1: com os calcanhares elevados, 2×30 s', 'Nível 2: afundos caminhando, 2×30 s', 'Nível 3: agachamento unipodal, 2×10 por perna'], dose: 'Conforme o nível' },
          { nome: '12. Saltos', oque: 'Potência e absorção de impacto, com aterrissagem controlada.', como: ['Salte com as duas pernas, aterrissando suavemente, com joelhos flexionados e alinhados.', 'Evite o valgo do joelho e aterrisse sem barulho.'], niveis: ['Nível 1: saltos verticais, 2×30 s', 'Nível 2: saltos laterais, 2×30 s', 'Nível 3: saltos sobre caixa, 2×30 s'], dose: '2 séries de 30 s' }
        ]
      },
      {
        nome: 'Parte 3: corrida final (cerca de 2 min)',
        itens: [
          { nome: '13. Corrida pelo campo', oque: 'Aumentar a velocidade gradualmente, preparando para o treino.', como: ['Corra de um lado a outro do campo, em cerca de 75 a 80% da velocidade máxima.', 'Mantenha postura e passada controladas.'], dose: '2 repetições' },
          { nome: '14. Saltos com passada longa (bounding)', oque: 'Potência e controle em saltos alternados.', como: ['Corra com passadas amplas e saltos alternados, apoiando em uma perna de cada vez.', 'Mantenha o joelho alinhado e o tronco ereto.'], dose: '2 repetições' },
          { nome: '15. Corrida com mudança de direção (plant and cut)', oque: 'Preparar o joelho e o tornozelo para as frenagens e mudanças de direção.', como: ['Corra 3 a 5 passos e plante o pé externo, mudando de direção sem deixar o joelho entrar.', 'Acelere de novo.'], dose: '2 repetições' }
        ]
      }
    ],
    cuidados: [
      'O programa só funciona se for feito: a adesão é determinante (Steffen et al., 2013).',
      'A descrição dos exercícios acima é didática e segue a estrutura do programa do estudo original (Soligard et al., 2008). O manual oficial da FIFA 11+ pode ter pequenas diferenças: conferir o manual e os vídeos antes de aplicar.',
      'Corrigir a técnica (joelho alinhado, pelve nivelada, aterrissagem suave) é mais importante do que fazer mais repetições.'
    ],
    evidencia: [
      'Em 1.892 jogadoras de 13 a 17 anos (125 clubes), o desfecho principal (lesões de membro inferior) não alcançou significância (razão de taxas de 0,71), mas houve menos lesões no total (0,68), por sobrecarga (0,47) e graves (0,55) no grupo do programa (Soligard et al., 2008).',
      'Em jogadoras jovens canadenses, a alta adesão ao FIFA 11+ melhorou o equilíbrio funcional e reduziu o risco de lesão (razão de taxas de 0,28) (Steffen et al., 2013).',
      'Em atletas universitários do sexo masculino, o FIFA 11+ reduziu as lesões em 46,1% e o tempo afastado em 28,6% (Silvers-Granelli et al., 2015).',
      'Em uma revisão sistemática, o FIFA 11+ reduziu o risco de lesão em 30% (Sadigursky et al., 2017). Uma meta-análise concluiu que o 11+ reduziu as lesões em 39%, enquanto o programa anterior (FIFA 11) não mostrou efeito (Thorborg et al., 2017).',
      'Revisão narrativa dos autores do programa descreve seu uso em vários grupos de jogadores (Bizzini e Dvorak, 2015).'
    ],
    refs: [
      'Soligard T, Myklebust G, Steffen K, et al. Comprehensive warm-up programme to prevent injuries in young female footballers: cluster randomised controlled trial. BMJ. 2008;337:a2469. doi:10.1136/bmj.a2469',
      'Steffen K, Emery CA, Romiti M, et al. High adherence to a neuromuscular injury prevention programme (FIFA 11+) improves functional balance and reduces injury risk in Canadian youth female football players: a cluster randomised trial. Br J Sports Med. 2013;47(12):794-802. doi:10.1136/bjsports-2012-091886',
      'Silvers-Granelli H, Mandelbaum B, Adeniji O, et al. Efficacy of the FIFA 11+ injury prevention program in the collegiate male soccer player. Am J Sports Med. 2015;43(11):2628-2637. doi:10.1177/0363546515602009',
      'Sadigursky D, Braid JA, De Lira DNL, Machado BAB, Carneiro RJF, Colavolpe PO. The FIFA 11+ injury prevention program for soccer players: a systematic review. BMC Sports Sci Med Rehabil. 2017;9:18. doi:10.1186/s13102-017-0083-z',
      'Thorborg K, Krommes KK, Esteve E, Clausen MB, Bartels EM, Rathleff MS. Effect of specific exercise-based football injury prevention programmes on the overall injury rate in football: a systematic review and meta-analysis of the FIFA 11 and 11+ programmes. Br J Sports Med. 2017;51(7):562-571. doi:10.1136/bjsports-2016-097066',
      'Bizzini M, Dvorak J. FIFA 11+: an effective programme to prevent football injuries in various player groups worldwide: a narrative review. Br J Sports Med. 2015;49(9):577-579. doi:10.1136/bjsports-2015-094765'
    ]
  },
  {
    id: 'adutores-copenhagen', nome: 'Programa de fortalecimento dos adutores (Copenhagen)',
    resumo: 'Programa de um único exercício, a prancha de Copenhagen, com 3 níveis de progressão, para prevenir dor na virilha em jogadores de futebol.',
    quando: '3 vezes por semana na pré-temporada (6 a 8 semanas) e 1 vez por semana durante a temporada competitiva (28 semanas).',
    material: 'Banco e um parceiro (ou apoio) para a perna de cima.',
    partes: [
      {
        nome: 'O exercício',
        itens: [
          { nome: 'Prancha de Copenhagen (Copenhagen Adduction Exercise)', oque: 'Força excêntrica e isométrica dos adutores do quadril, principal fator de risco para dor na virilha.', como: ['Deite de lado, apoiado no antebraço, com a perna de cima apoiada em um banco na altura do joelho ou do tornozelo.', 'Eleve a pelve até formar uma linha com o tronco e a perna de cima.', 'Eleve a perna de baixo até tocar a de cima, ou mantenha-a no ar, controlando por alguns segundos.', 'Desça com controle e repita; depois troque de lado.'], niveis: ['Níveis de progressão: do apoio no joelho (alavanca curta) ao apoio no tornozelo (alavanca longa), com maior dificuldade', 'Os níveis e as repetições exatas do programa estão descritos no artigo original'], dose: 'Conforme o programa e o nível' }
        ]
      }
    ],
    cuidados: [
      'Em dor anterior do quadril ou no impacto femoroacetabular, ver a nota de anatomia do quadril sobre o fortalecimento dos adutores.',
      'Se houver dor na virilha, reduzir o nível e consultar o protocolo de dor inguinal.'
    ],
    evidencia: [
      'Em um ensaio com 35 times semiprofissionais da Noruega (652 jogadores), o programa de um exercício com 3 níveis, feito 3 vezes por semana na pré-temporada e 1 vez por semana na temporada, reduziu a prevalência de problemas de virilha (Harøy et al., 2019).',
      'Em uma meta-análise, programas de exercício reduziram lesões esportivas, e o treino de força reduziu as lesões a menos de um terço (Lauersen et al., 2014).'
    ],
    refs: [
      'Harøy J, Clarsen B, Wiger EG, et al. The Adductor Strengthening Programme prevents groin problems among male football players: a cluster-randomised controlled trial. Br J Sports Med. 2019;53(3):150-157. doi:10.1136/bjsports-2017-098937',
      'Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. Br J Sports Med. 2014;48(11):871-877. doi:10.1136/bjsports-2013-092538'
    ]
  },
  {
    id: 'nordic-programa', nome: 'Programa de prevenção de lesões de isquiotibiais (Nordic hamstring)',
    resumo: 'Programa de fortalecimento excêntrico dos isquiotibiais com o exercício nórdico, para reduzir a incidência de lesões de coxa posterior em jogadores de futebol.',
    quando: 'Em um ensaio, 25 sessões em um período de 13 semanas. Em seguida, manutenção com uma sessão por semana é prática comum, mas não foi verificada nesta pesquisa.',
    material: 'Colchonete e um parceiro (ou equipamento) para fixar os tornozelos.',
    partes: [
      {
        nome: 'O exercício',
        itens: [
          { nome: 'Nordic hamstring (descida nórdica)', oque: 'Força excêntrica dos isquiotibiais.', como: ['Ajoelhe-se com os tornozelos presos por um parceiro ou equipamento.', 'Mantenha o corpo reto, do joelho à cabeça.', 'Incline-se para a frente o mais lentamente possível, controlando a descida.', 'Ao perder o controle, apoie as mãos no chão, empurre-se de volta e repita.'], niveis: ['Nível 1: 3 a 5 repetições', 'Nível 2: 7 a 10 repetições', 'Nível 3: 12 a 15 repetições'], dose: 'Conforme o nível, progredindo ao longo das semanas' }
        ]
      }
    ],
    cuidados: [
      'Após lesão aguda dos isquiotibiais, o exercício deve entrar na reabilitação de forma progressiva: ver o protocolo de lesão muscular.',
      'O exercício provoca dor muscular tardia nas primeiras sessões: progredir devagar.'
    ],
    evidencia: [
      'Em 579 jogadores amadores de futebol (40 times), o grupo de intervenção fez 25 sessões em 13 semanas e foi acompanhado quanto à incidência e à gravidade de lesões (van der Horst et al., 2015).',
      'Em uma revisão sistemática com meta-análise de 8.459 atletas, a inclusão do exercício nórdico em programas de prevenção reduziu à metade a taxa de lesões de isquiotibiais (van Dyk et al., 2019).'
    ],
    refs: [
      'van der Horst N, Smits DW, Petersen J, Goedhart EA, Backx FJ. The preventive effect of the nordic hamstring exercise on hamstring injuries in amateur soccer players: a randomized controlled trial. Am J Sports Med. 2015;43(6):1316-1323. doi:10.1177/0363546515574057',
      'van Dyk N, Behan FP, Whiteley R. Including the Nordic hamstring exercise in injury prevention programmes halves the rate of hamstring injuries: a systematic review and meta-analysis of 8459 athletes. Br J Sports Med. 2019;53(21):1362-1370. doi:10.1136/bjsports-2018-100045'
    ]
  },
  {
    id: 'ombro-ostrc', nome: 'Programa de prevenção de lesões de ombro em arremessadores (OSTRC)',
    resumo: 'Programa de exercícios para aumentar a rotação interna do ombro, a força de rotação lateral e dos músculos da escápula, e melhorar a cadeia cinética e a mobilidade torácica, usado no aquecimento de handebol.',
    quando: '3 vezes por semana, como parte do aquecimento, durante a temporada (estudo de 7 meses).',
    material: 'Elástico, bola e colchonete.',
    partes: [
      {
        nome: 'Objetivos do programa',
        itens: [
          { nome: 'Mobilidade: rotação interna e torácica', oque: 'Aumentar a rotação interna do ombro (déficit de rotação interna é fator de risco) e a rotação torácica.', como: ['Mobilidade de rotação interna do ombro e rotação torácica em quatro apoios.', 'Ver o exercício "Rotação torácica em quatro apoios".'], dose: 'Conforme o programa original' },
          { nome: 'Força: rotação lateral e escápula', oque: 'Aumentar a força de rotação lateral do ombro e dos estabilizadores da escápula (fraqueza de rotação lateral e discinese são fatores de risco).', como: ['Rotação lateral com elástico, remada e flexão com "plus".', 'Ver os exercícios correspondentes na aba Exercícios.'], dose: 'Conforme o programa original' },
          { nome: 'Cadeia cinética', oque: 'Integrar tronco, quadril e escápula ao gesto do arremesso.', como: ['Exercícios de tronco e de quadril associados a movimentos do arremesso.'], dose: 'Conforme o programa original' }
        ]
      }
    ],
    cuidados: [
      'Os exercícios, as séries e as repetições exatas estão no artigo original e no material do OSTRC: conferir antes de aplicar.',
      'Adaptar a outros esportes de arremesso e de raquete com cautela: o ensaio foi em handebol de elite.'
    ],
    evidencia: [
      'Em 660 jogadores de handebol de elite (45 times), o programa reduziu em 28% o risco de problemas no ombro (OR 0,72); a redução dos problemas substanciais (22%) não foi significativa (Andersson et al., 2017).'
    ],
    refs: [
      'Andersson SH, Bahr R, Clarsen B, Myklebust G. Preventing overuse shoulder injuries among throwing athletes: a cluster-randomised controlled trial in 660 elite handball players. Br J Sports Med. 2017;51(14):1073-1080. doi:10.1136/bjsports-2016-096226'
    ]
  },
  {
    id: 'lca-neuromuscular', nome: 'Treino neuromuscular para prevenção de lesão do LCA',
    resumo: 'Combinação de treino de força, pliometria, técnica de aterrissagem e de mudança de direção e equilíbrio, para reduzir lesões do LCA, principalmente em atletas do sexo feminino.',
    quando: 'Como parte do aquecimento ou do treino, 2 a 3 vezes por semana, na pré-temporada e na temporada. A frequência varia entre os estudos.',
    material: 'Cones, caixas e bola.',
    partes: [
      {
        nome: 'Componentes',
        itens: [
          { nome: 'Técnica de aterrissagem e salto', oque: 'Reduzir o valgo do joelho e as cargas na aterrissagem.', como: ['Aterrisse com joelhos e quadris flexionados, com os joelhos alinhados aos pés e o tronco levemente inclinado.', 'Ver os exercícios "Salto e aterrissagem controlada" e "Salto em profundidade".'], dose: 'Conforme o programa' },
          { nome: 'Força do membro inferior', oque: 'Fortalecer quadríceps, isquiotibiais, glúteos e músculos do tronco.', como: ['Agachamentos, afundos, ponte e Nordic hamstring.', 'Ver os exercícios correspondentes na aba Exercícios.'], dose: 'Conforme o programa' },
          { nome: 'Mudança de direção e equilíbrio', oque: 'Controlar o joelho em desaceleração e em apoio unipodal.', como: ['Corridas com mudança de direção, equilíbrio unipodal e tarefas duplas.'], dose: 'Conforme o programa' }
        ]
      }
    ],
    cuidados: [
      'Programas eficazes combinam vários componentes, e não só um: uma meta-análise compara os elementos em comum dos estudos.',
      'Atletas com LCA reconstruído seguem o protocolo de reabilitação, e não só a prevenção.'
    ],
    evidencia: [
      'Uma meta-análise de intervenções neuromuscular em atletas do sexo feminino examinou a efetividade na redução de lesões do LCA e os componentes em comum dos estudos (Hewett et al., 2006).',
      'Em uma meta-análise de ensaios randomizados, os programas de exercício reduziram as lesões esportivas de forma consistente, exceto o alongamento; o treino de força foi o mais eficaz (Lauersen et al., 2014).'
    ],
    refs: [
      'Hewett TE, Ford KR, Myer GD. Anterior cruciate ligament injuries in female athletes: part 2, a meta-analysis of neuromuscular interventions aimed at injury prevention. Am J Sports Med. 2006;34(3):490-498. doi:10.1177/0363546505282619',
      'Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. Br J Sports Med. 2014;48(11):871-877. doi:10.1136/bjsports-2013-092538'
    ]
  },
  {
    id: 'entorse-prevencao', nome: 'Prevenção de recidiva de entorse de tornozelo',
    resumo: 'Reúne o treino proprioceptivo e neuromuscular e o uso de órtese (brace) para reduzir novos entorses depois do primeiro episódio.',
    quando: 'Treino proprioceptivo por 8 semanas depois do tratamento usual, e manutenção no aquecimento. Órtese em esportes de risco, conforme a decisão clínica.',
    material: 'Colchonete, almofada instável, elástico e órtese de tornozelo, se indicado.',
    partes: [
      {
        nome: 'Componentes',
        itens: [
          { nome: 'Treino proprioceptivo domiciliar', oque: 'Controle postural e reação a perturbações.', como: ['Equilíbrio unipodal, com olhos fechados e superfícies instáveis.', 'Ver o exercício "Equilíbrio unipodal e treino proprioceptivo".'], dose: '8 semanas (estudo de Hupperets)' },
          { nome: 'Força e reação dos fibulares', oque: 'Aumentar a força e a velocidade de ativação dos eversores.', como: ['Eversão com elástico e treino de tempo de reação com perturbação inesperada.', 'Ver os exercícios correspondentes na aba Exercícios.'], dose: 'Conforme o protocolo de entorse' },
          { nome: 'Órtese (brace)', oque: 'Reduzir a recidiva em esportes de risco.', como: ['Uso da órtese durante o treino e o jogo, conforme a orientação clínica.'], dose: 'Conforme a indicação' }
        ]
      }
    ],
    cuidados: [
      'Dosagem, tipo de órtese e tempo de uso devem ser definidos com o orientador.',
      'Ver o protocolo de entorse lateral e os critérios de retorno ao esporte.'
    ],
    evidencia: [
      'Em 522 atletas, 8 semanas de treino proprioceptivo domiciliar após o tratamento usual reduziram a recidiva do entorse de 33% para 22% em 1 ano (Hupperets et al., 2009).',
      'Em uma revisão de revisões, há evidência forte para órtese e moderada para treino neuromuscular na prevenção da recidiva (Doherty et al., 2017). A diretriz holandesa considera a órtese uma opção eficaz (Vuurberg et al., 2018).'
    ],
    refs: [
      'Hupperets MDW, Verhagen EALM, van Mechelen W. Effect of unsupervised home based proprioceptive training on recurrences of ankle sprain: randomised controlled trial. BMJ. 2009;339:b2684. doi:10.1136/bmj.b2684',
      'Doherty C, Bleakley C, Delahunt E, Holden S. Treatment and prevention of acute and recurrent ankle sprain: an overview of systematic reviews with meta-analysis. Br J Sports Med. 2017;51(2):113-125. doi:10.1136/bjsports-2016-096178',
      'Vuurberg G, Hoorntje A, Wink LM, et al. Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med. 2018;52(15):956. doi:10.1136/bjsports-2017-098106'
    ]
  }
];

const PROTOCOLOS = [
  {
    id: 'pubalgia', nome: 'Dor inguinal no atleta (pubalgia): foco em adutores', fonte: 'liga',
    aviso: 'Base: protocolo da liga (resumo). A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'A palavra "pubalgia" não é termo recomendado no consenso de Doha (2015). Antes de iniciar o protocolo, classifique a dor: relacionada aos adutores, ao iliopsoas, inguinal, púbica ou relacionada ao quadril. Este protocolo é voltado à dor relacionada aos adutores, a mais frequente em esportes de chute e mudança de direção.',
    avaliacao: [
      'ADM de rotação do quadril (ver teste "ADM de rotação de quadril")',
      'Mobilidade de tornozelo (ver teste "Dorsiflexão em carga")',
      'Escalas de dor de 0 a 10 para: caminhar, correr, movimento do passe, movimento do chute, contração isométrica de adutores, relações sexuais, respirar fundo, ficar sentado e outras queixas do paciente',
      'Força isométrica (ver "Dinamometria manual")',
      'Controle pélvico (ver "Step Down Test")'
    ],
    fases: [
      {
        nome: 'Fase 1: reduzir a dor e recuperar função básica',
        objetivos: ['Fortalecer os adutores sem dor', 'Fortalecer o glúteo médio', 'Ganhar ADM de rotação do quadril', 'Manter a atividade das outras musculaturas'],
        conteudo: [
          'Adutores: isométrico com faixa na coxa e oclusão, sem dor (pode ser feito mesmo com dor se não for fase aguda)',
          'Glúteo médio: perna que passa a bola (cadeia cinética aberta) e perna de apoio (cadeia cinética fechada)',
          'Ganho de ADM de rotação',
          'Mobilização do quadril, e específica da púbis quando a dor diminuir na contração isométrica',
          'Manter quadríceps, isquiotibiais, glúteos, gastrocnêmios e core',
          'Bicicleta sem dor',
          'Movimentos específicos (chute e passe) sem dor',
          'Treino sensório-motor sem dor',
          'Corrida sem dor'
        ],
        criterios: ['Redução da dor por no mínimo 2 semanas seguidas na contração isométrica de adutores, nos movimentos específicos (chute e passe) e na corrida']
      },
      {
        nome: 'Fase 2: aumentar carga e velocidade',
        objetivos: ['Aumentar a carga de força', 'Reintroduzir velocidade e gestos esportivos', 'Melhorar controle pélvico e valgo dinâmico'],
        conteudo: [
          'Manter as condutas anteriores com aumento de carga (trabalho isotônico)',
          'Corrida com aumento gradual de intensidade e velocidade',
          'Treino sensório-motor mais difícil para controle pélvico e valgo dinâmico',
          'Passe e chute fortes, gradualmente',
          'Mudanças de direção, gradualmente'
        ],
        criterios: [
          'Correr na velocidade máxima sem dor ou com pouca dor (EVA 1 a 3)',
          'Contração isométrica sem dor ou com pouca dor',
          'Movimentos específicos sem dor ou com pouca dor',
          'Assimetria de no máximo 15% entre os adutores (critério da liga: confirmar fonte)'
        ]
      },
      {
        nome: 'Fase 3: retorno ao esporte',
        objetivos: ['Voltar ao treino da equipe com segurança'],
        conteudo: [
          'Manter as condutas com incremento de carga',
          'Retorno gradual aos treinos com a equipe, junto com a preparação física',
          'Atenção: observar se a dor piora nesse momento de retorno'
        ],
        criterios: ['Treino completo da equipe sem piora da dor']
      }
    ],
    evidencia: [
      'Treino ativo com foco em força e coordenação dos músculos da pelve, principalmente os adutores, foi muito mais eficaz que fisioterapia sem treino ativo em atletas com dor crônica relacionada aos adutores: entre 68 atletas, 23 do grupo de treino ativo e 4 do grupo de fisioterapia voltaram ao esporte sem dor (OR 12,7). Tratamento de 8 a 12 semanas (Hölmich et al., 1999).',
      'A dor relacionada aos adutores foi a entidade mais comum (61%) em 100 atletas avaliados com a classificação de Doha, e em 44% havia mais de uma causa (Taylor et al., 2018).',
      'Jogadores com dor relacionada aos adutores tiveram força excêntrica de adução menor (2,47 contra 3,12 N·m/kg), sem diferença na força isométrica (Thorborg et al., 2014). Vale considerar avaliar também a força excêntrica, além da isométrica.',
      'O Copenhagen Adduction Exercise (3 níveis de progressão) em prevenção reduziu em 41% o risco de problemas na virilha em jogadores de futebol (OR 0,59): 3 vezes por semana na pré-temporada (6 a 8 semanas) e 1 vez por semana na temporada (Harøy et al., 2019). Em reabilitação de jogadores com dor nos adutores, um ECR pequeno (n = 30) mostrou maior ganho de força excêntrica e menor dor (Alsirhani et al., 2024).',
      'Em lesões agudas de adutor, a reabilitação baseada em critérios teve reincidência de 8% em 1 ano; atletas que ficaram sem dor tiveram menos reincidência (Serner et al., 2020). Medidas clínicas repetidas (dor à palpação, força, flexibilidade) mostraram só uma ideia aproximada do progresso (Serner et al., 2021).',
      'Revisões sistemáticas apontam que a evidência sobre tratamento conservador da dor crônica nos adutores é limitada e de baixa qualidade. Terapia manual junto com exercício de fortalecimento teve evidência moderada (Bisciotti et al., 2021). O tratamento conservador deve ser considerado antes da cirurgia (Serafim et al., 2022).',
      'Testes de triagem musculoesquelética não identificaram bem quem tem risco de lesão na virilha, apesar de lesão prévia e força excêntrica de adução estarem associadas ao risco (Mosler et al., 2018). O critério de assimetria de 15% entre adutores é da liga e não foi encontrado em estudo: confirmar com o orientador.'
    ],
    refs: [
      'Weir A, et al. Doha agreement meeting on terminology and definitions in groin pain in athletes. Br J Sports Med. 2015;49(12):768-774. doi:10.1136/bjsports-2015-094869',
      'Taylor R, et al. Multidisciplinary assessment of 100 athletes with groin pain using the Doha agreement: high prevalence of adductor-related groin pain in conjunction with multiple causes. Clin J Sport Med. 2018;28(4):364-369. doi:10.1097/JSM.0000000000000469',
      'Hölmich P, et al. Effectiveness of active physical training as treatment for long-standing adductor-related groin pain in athletes: randomised trial. Lancet. 1999;353(9151):439-443. doi:10.1016/S0140-6736(98)03340-6',
      'Thorborg K, et al. Eccentric and isometric hip adduction strength in male soccer players with and without adductor-related groin pain: an assessor-blinded comparison. Orthop J Sports Med. 2014;2(2):2325967114521778. doi:10.1177/2325967114521778',
      'Harøy J, Clarsen B, Wiger EG, et al. The Adductor Strengthening Programme prevents groin problems among male football players: a cluster-randomised controlled trial. Br J Sports Med. 2019;53(3):150-157. doi:10.1136/bjsports-2017-098937',
      'Alsirhani AA, et al. The effectiveness of the Copenhagen adduction exercise on improving eccentric hip adduction strength among soccer players with groin injury: a randomized controlled trial. Phys Sportsmed. 2024;52(5):497-506. doi:10.1080/00913847.2024.2321958',
      'Serner A, et al. Return to sport after criteria-based rehabilitation of acute adductor injuries in male athletes: a prospective cohort study. Orthop J Sports Med. 2020;8(1):2325967119897247. doi:10.1177/2325967119897247',
      'Serner A, et al. Progression of strength, flexibility, and palpation pain during rehabilitation of athletes with acute adductor injuries: a prospective cohort study. J Orthop Sports Phys Ther. 2021;51(3):126-134. doi:10.2519/jospt.2021.9951',
      'Bisciotti GN, et al. The conservative treatment of longstanding adductor-related groin pain syndrome: a critical and systematic review. Biol Sport. 2021;38(1):45-63. doi:10.5114/biolsport.2020.97669',
      'Serafim TT, et al. Return to sport after conservative versus surgical treatment for pubalgia in athletes: a systematic review. J Orthop Surg Res. 2022;17(1):484. doi:10.1186/s13018-022-03376-y',
      'Mosler AB, et al. Musculoskeletal screening tests and bony hip morphology cannot identify male professional soccer players at risk of groin injuries: a 2-year prospective cohort study. Am J Sports Med. 2018;46(6):1294-1305. doi:10.1177/0363546518763373'
    ]
  },
  {
    id: 'lca', nome: 'Reconstrução do LCA (aula Amir / método FOR)', fonte: 'liga',
    aviso: 'Base: resumo da aula da liga (pré-operatório até o 6º mês e critérios de alta). A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'A reabilitação começa antes da cirurgia. A decisão entre cirurgia e fisioterapia é tomada em conjunto com o médico e o paciente, conforme nível de atividade, idade e instabilidade. Os exercícios em cadeia cinética fechada não sobrecarregam o LCA; em cadeia cinética aberta há sobrecarga se o exercício for feito até os últimos graus de extensão nas semanas 4 a 12, então respeite a angulação de proteção (90° a 45°).',
    avaliacao: [
      'Lachman: gaveta anterior com o joelho estendido',
      'Gaveta anterior: decúbito dorsal, joelho a 90° e pé fixo na maca. Antes, confira o alinhamento entre o ápice da patela e a tuberosidade da tíbia (se não alinhar, suspeite de lesão do LCP)',
      'Pivot shift: joelho estendido, estresse em valgo e flexão do joelho (subluxação da tíbia)',
      'Força de quadríceps e isquiotibiais e assimetria entre os lados',
      'Hop tests (ver os testes de salto) e controle de valgo dinâmico (Step Down, Single-Leg Squat, LESS)',
      'Questionário de função do joelho (o resumo cita "76 ou mais no questionário" sem dizer qual: confirmar)'
    ],
    fases: [
      {
        nome: 'Pré-operatório',
        objetivos: ['Explicar o mecanismo de lesão, a reabilitação e o tempo de retorno', 'Preparar o joelho e o membro para a cirurgia'],
        conteudo: [
          'Orientações: deitado, joelho esticado; sentado, joelho dobrado; gelo',
          'Fortalecimento e ativação de todo o membro inferior',
          'Ativar o quadríceps do membro lesionado (com eletroestimulação) e do não lesionado',
          'Discutir prós e contras das opções de tratamento para o paciente decidir com informação (investigar o que e como fazer no pré-operatório)'
        ],
        criterios: ['Extensão completa e quadríceps ativando bem antes da cirurgia']
      },
      {
        nome: 'Semana 1',
        objetivos: ['Extensão completa até o fim da semana', '90° de flexão até o fim da semana (depois, ganhar 10° por semana)'],
        conteudo: [
          'Laser',
          'Ativação de quadríceps em isometria, em ângulos de proteção, com eletroestimulação',
          'Mobilização patelar (se o enxerto for dos flexores)',
          'Mobilização de extensão (rolinho no calcanhar)',
          'Mobilização de flexão com o paciente sentado',
          'Muletas: 2 por 1 semana. No fim da 1ª semana tira 1 e no fim da 2ª tira a outra. Treinar a marcha com 1 muleta já na 1ª semana'
        ],
        criterios: ['Extensão completa', '90° de flexão']
      },
      {
        nome: 'Semanas 2 e 3',
        objetivos: ['Reforçar orientações', 'Ativar todo o membro inferior sem exigir o joelho'],
        conteudo: [
          'Se tem 90° de flexão: bicicleta com carga (a bicicleta exige flexão e também ajuda a ganhá-la; suba a altura do banco aos poucos)',
          'SLR (elevação da perna estendida) sem dor',
          'Protocolo de quadril: gastrocnêmios, abdutores, adutores, extensores e flexores do quadril, sem exigir o joelho (faixa no joelho)',
          'Ainda não fortalecer quadríceps e isquiotibiais em cadeia aberta',
          'Agachamento na parede até 30°',
          'Apoio unipodal com correção do valgo (progressão: olhos fechados, mini band puxando para valgo, elevação da pelve)',
          'Marcha no colchonete (controle motor)',
          'Exercícios em cadeia fechada liberados em todos os graus, se não houver dor femoropatelar',
          'Mobilização ativa em cadeia fechada: ativação com eletro de quadríceps (puxa a tíbia para a frente) e gastrocnêmios (puxa o fêmur para trás)'
        ],
        criterios: ['Marcha sem muleta', 'Controle do valgo no apoio unipodal']
      },
      {
        nome: 'Semanas 4 e 5',
        objetivos: ['Extensão 0° e flexão de 120° a 130° no fim da 4ª semana', 'Aumentar carga do quadril'],
        conteudo: [
          'Pode surgir dor anterior no joelho (estresse femoropatelar, com o quadríceps ainda fraco). Avise e explique ao paciente; se necessário, joelheira',
          'Bicicleta',
          'Carga no quadril (50% de 1RM), principalmente abdutores',
          'Ganho forçado de extensão (se não chegou a 0°) e de flexão (se não chegou a 120° a 130°)',
          'Agachamento até 30° com carga e eletroestimulação',
          'Flexão de joelho (tempo mínimo de reparação do enxerto dos flexores), com carga conforme tolerância',
          'Marcha e apoio unipodal no colchonete, mantendo o alinhamento pélvico e evitando o valgo',
          'Cadeira extensora de 90° a 45°'
        ],
        criterios: ['Extensão 0°', 'Flexão de 120° a 130°']
      },
      {
        nome: 'Semanas 6 a 8',
        objetivos: ['Mais carga e variação dos estímulos', 'Preparar para a corrida'],
        conteudo: [
          'Semana 6: aumento de carga na bicicleta, no quadril e nos isquiotibiais; agachamento sem carga com eletro; apoio unipodal; leg press de 0° a 60° com eletro; levantar da cadeira com uma perna só; treino sensório-motor em base instável (controle de pelve, joelho e tronco)',
          'Semanas 7 e 8: o mesmo, variando estímulos e aumentando carga',
          'Semana 8: saltos na cama elástica evitando o valgo; leg press de 0° a 90°',
          'Na semana seguinte o paciente vai correr, então prepare com exercícios que simulem o gesto'
        ],
        criterios: ['Controle de pelve, joelho e tronco nos exercícios unipodais']
      },
      {
        nome: 'Semanas 9 a 12',
        objetivos: ['Iniciar a corrida', 'Fortalecimento forte e específico'],
        conteudo: [
          'Semana 9: o mesmo, com carga gradual; corrida em linha reta (esteira)',
          'Semanas 10 e 11: aumento gradual de carga em tudo',
          'Semana 12: aumento gradual de carga; cadeira extensora de 90° a 0°; leg press de 0° a 90°; nórdico de isquiotibiais e de quadríceps (fortalecimento excêntrico forte antes, se não conseguir fazer)',
          'Ir para a quadra ou campo: corrida lateral, pliometria bipodal no solo (antes era na cama elástica), saltos para a frente e não só verticais'
        ],
        criterios: ['Corrida sem dor', 'Pliometria bipodal com controle do valgo']
      },
      {
        nome: '4º mês (semanas 13 a 16)',
        objetivos: ['Aumentar carga e criar novos desafios'],
        conteudo: [
          'Aumento de carga do que já vinha sendo feito, conforme tolerância',
          'Na 16ª semana, introduzir o que será feito daí em diante',
          'Controle motor e salto unipodal',
          'Criar novos desafios sempre'
        ],
        criterios: ['Salto unipodal com controle']
      },
      {
        nome: '5º e 6º mês em diante',
        objetivos: ['Retorno ao esporte com estímulos específicos da modalidade'],
        conteudo: [
          'Aumento de carga do que vem sendo feito',
          'Corrida em zigue-zague, aceleração e desaceleração, troca de direção (pivô), carioca',
          'Pliometria unipodal e hop tests',
          '6º mês: gestos esportivos (passe, chute, sprint, drible, giros), deslocamento associado a saltos, controle motor e o máximo de estímulos progressivos relacionados à atividade do paciente'
        ],
        criterios: [
          'Critérios de alta (liga): hop tests com assimetria menor que 10% nos 4 hop tests',
          'Força de quadríceps e isquiotibiais com assimetria menor que 10% a 20%',
          '1 mês de treino pliométrico sem dor',
          'Isquiotibiais com força próxima de 50% a 60% da força do quadríceps',
          'Escore de 76 ou mais no questionário (qual questionário: confirmar)',
          'Sem valgo dinâmico'
        ]
      },
      {
        nome: 'Pontos-chave (III Congresso, G. Leão)',
        objetivos: ['Evitar falhas comuns no pós-operatório do LCA'],
        conteudo: [
          'Ganhar a extensão total até no máximo a 2ª semana de pós-operatório (o protocolo da liga acima prevê a extensão completa já até o fim da 1ª semana: o objetivo é o mesmo, com o prazo da palestra sendo o limite). O déficit de extensão causa marcha anormal, inibição do quadríceps, sobrecarga tibiofemoral e femoropatelar e pode evoluir com artrose',
          'Teste inicial de ativação do quadríceps: tirar o calcanhar da maca com o joelho em hiperextensão e manter fora da maca. Biofeedback com manguito insuflado até encostar na fossa poplítea ajuda quem ativa glúteo e isquiotibiais, mas não o quadríceps',
          'No SLR, ao descer, o calcanhar não deve encostar primeiro na maca (sinal de "leg": gastrocnêmio encosta primeiro)',
          'O ganho de extensão é feito com orientações no pós-operatório (não deixar o joelho fletido) e sem terapia manual nas primeiras semanas. Se não ganhou até lá, é preciso forçar',
          'Modular a carga sempre e evoluir, nunca manter linear, e mudar volume e não só peso',
          'Crioterapia é importante para diminuir a inibição (dor e edema)',
          'Não negligenciar o componente excêntrico do quadríceps e o treino de aterrissagem antes da pliometria',
          'Cinesiofobia e catastrofização: identificar em quais movimentos aparecem e expor gradualmente (por exemplo, o giro de pivô não precisa começar a 180°)'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: [
          'A oclusão parcial (restrição de fluxo) foi considerada pelo palestrante como sem muito sentido neste contexto: ver a seção sobre estratégias de alívio da dor',
          'Os prazos e as técnicas são da palestra: confirmar com a equipe cirúrgica e com o orientador'
        ]
      }
    ],
    evidencia: [
      'Do III Congresso: a regra de recuperar a extensão total até a 2ª semana, o teste do calcanhar fora da maca e o biofeedback com manguito são da palestra e não foram verificados em estudo próprio. A artrofibrose após reconstrução do LCA é a complicação mais comum e é mais bem tratada de forma escalonada, com reconhecimento e intervenção precoces (Ekhtiari et al., 2017).',
      'Em adultos jovens e ativos com ruptura aguda do LCA, reabilitação estruturada com reconstrução precoce não foi superior a reabilitação com reconstrução tardia opcional após 2 anos (KOOS4: diferença de 0,2 ponto). Na estratégia opcional, 23 de 59 acabaram operando, e 36 ficaram só com a reabilitação (Frobell et al., 2010). Por isso é prudente tentar um período de reabilitação antes de decidir pela cirurgia na maioria dos casos (Filbay e Grindem, 2019).',
      'A diretriz holandesa de reabilitação do LCA recomenda: fase de pré-habilitação e 3 fases pós-operatórias guiadas por critérios (foco em deficiências, treino específico do esporte e retorno ao esporte). Uma bateria de testes de força, hop tests, qualidade do movimento e testes psicológicos deve guiar a progressão. A reabilitação pós-operatória deve durar de 9 a 12 meses (van Melick et al., 2016).',
      'Retornar ao esporte de nível I aumentou mais de 4 vezes a taxa de nova lesão em 2 anos. Cada mês de atraso no retorno, até 9 meses, reduziu em 51% a taxa de nova lesão, e quadríceps mais simétrico antes do retorno reduziu a nova lesão (Grindem et al., 2016).',
      'Em 158 atletas profissionais, não cumprir 6 critérios de alta (força isocinética, teste em T, single, triple e triple crossover hop) antes do treino com a equipe associou-se a risco 4 vezes maior de ruptura do enxerto. A menor relação entre isquiotibiais e quadríceps do membro operado também se associou ao risco (Kyritsis et al., 2016).',
      'Atletas com menos de 25 anos que voltam ao esporte tiveram taxa de segunda lesão do LCA de 23% (ipsilateral e contralateral), o que reforça preparar também o membro contralateral e o retorno gradual (Wiggins et al., 2016).',
      'A eletroestimulação neuromuscular associada à fisioterapia melhorou a força do quadríceps e a função nas semanas iniciais (4 a 12 semanas) após a cirurgia (Hauger et al., 2018).',
      'Os critérios de alta do resumo da liga (assimetria < 10% nos hop tests, 10% a 20% na força, relação isquiotibiais/quadríceps de 50% a 60%, 1 mês de pliometria, escore ≥ 76) não foram encontrados com esses números exatos nos estudos acima. A literatura usa de forma comum simetria ≥ 90%. Confirmar os valores com o orientador.'
    ],
    refs: [
      'Ekhtiari S, Horner NS, de Sa D, et al. Arthrofibrosis after ACL reconstruction is best treated in a step-wise approach with early recognition and intervention: a systematic review. Knee Surg Sports Traumatol Arthrosc. 2017;25(12):3929-3937. doi:10.1007/s00167-017-4482-1',
      'Frobell RB, Roos EM, Roos HP, Ranstam J, Lohmander LS. A randomized trial of treatment for acute anterior cruciate ligament tears. N Engl J Med. 2010;363(4):331-342. doi:10.1056/NEJMoa0907797',
      'Filbay SR, Grindem H. Evidence-based recommendations for the management of anterior cruciate ligament (ACL) rupture. Best Pract Res Clin Rheumatol. 2019;33(1):33-47. doi:10.1016/j.berh.2019.01.018',
      'van Melick N, et al. Evidence-based clinical practice update: practice guidelines for anterior cruciate ligament rehabilitation based on a systematic review and multidisciplinary consensus. Br J Sports Med. 2016;50(24):1506-1515. doi:10.1136/bjsports-2015-095898',
      'Grindem H, Snyder-Mackler L, Moksnes H, Engebretsen L, Risberg MA. Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction: the Delaware-Oslo ACL cohort study. Br J Sports Med. 2016;50(13):804-808. doi:10.1136/bjsports-2016-096031',
      'Kyritsis P, Bahr R, Landreau P, Miladi R, Witvrouw E. Likelihood of ACL graft rupture: not meeting six clinical discharge criteria before return to sport is associated with a four times greater risk of rupture. Br J Sports Med. 2016;50(15):946-951. doi:10.1136/bjsports-2015-095908',
      'Wiggins AJ, et al. Risk of secondary injury in younger athletes after anterior cruciate ligament reconstruction: a systematic review and meta-analysis. Am J Sports Med. 2016;44(7):1861-1876. doi:10.1177/0363546515621554',
      'Hauger AV, Reiman MP, Bjordal JM, Sheets C, Ledbetter L, Goode AP. Neuromuscular electrical stimulation is effective in strengthening the quadriceps muscle after anterior cruciate ligament surgery. Knee Surg Sports Traumatol Arthrosc. 2018;26(2):399-410. doi:10.1007/s00167-017-4669-5'
    ]
  },
  {
    id: 'corredor', nome: 'Corredor com lesão por sobrecarga (resumo da aula)', fonte: 'liga',
    aviso: 'Base: resumo da aula da liga sobre lesão em corredores. O resumo não define fases nem critérios de progressão, então está organizado em blocos. A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'Fatores de risco citados: lesão prévia e aumento desregrado do volume de treino. A lesão surge quando o estresse passa do "envelope de função" da estrutura, ou seja, da capacidade dela de se adaptar a estresse repetitivo, aumento de volume, calçado, terreno e biomecânica.',
    avaliacao: [
      'Queixa do paciente: há quanto tempo sente, o que faz sentir e em que momento da corrida',
      'Há quanto tempo corre, quanto corre (volume de treino) e onde corre',
      'Se quer competir',
      'Avaliação cinético-funcional',
      'Mecânica da corrida nos planos sagital e frontal (ver se tem relação com a queixa)',
      'Força de glúteo médio, extensores do quadril, quadríceps e gastrocnêmios'
    ],
    fases: [
      {
        nome: 'Bloco 1: avaliação funcional e da mecânica da corrida',
        objetivos: ['Relacionar os achados funcionais e da corrida com a queixa do paciente'],
        conteudo: [
          'Avaliação funcional: Lunge (dorsiflexão), Y Balance, Step Down e Hop tests (ver a seção Testes)',
          'Valgo dinâmico: significa pobre absorção de impacto, com repercussão no quadril, cisalhamento da púbis, carga na sacroilíaca e na lombar',
          'Biomecânica da corrida: ângulos de flexão de joelho, quadril e tronco',
          'Pronação anormal: desabamento exagerado do arco ou perda de contato da região lateral do pé na fase média e de propulsão. Gera sobrecarga na fáscia plantar, tibial anterior e tibial posterior',
          'Queda exagerada da pelve: associada à fraqueza do complexo póstero-lateral do quadril (CPL: extensores, abdutores e rotadores laterais)',
          'Outros sinais para observar: sinal de crossover e hiperlordose transitória (o resumo cita psoas contraturado; confirmar qual achado se liga a qual)'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Observe como o corredor absorve o impacto e faz a propulsão, nos planos sagital e frontal']
      },
      {
        nome: 'Bloco 2: ajuste de carga e calçado',
        objetivos: ['Dar ao tecido condição de se adaptar'],
        conteudo: [
          'Reduzir 20% do volume de treino durante a reabilitação',
          'Calçado (orientação da liga): solado alto na lateral e que extravasa para os lados favorece a hiperpronação; o ideal é o solado o mais justo possível ao tênis',
          'Na hiperpronação, fortalecer o tibial anterior'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['A redução de 20% e a regra do calçado são orientações da liga: ver a seção "O que a literatura mostra"']
      },
      {
        nome: 'Bloco 3: fortalecimento e gesto',
        objetivos: ['Melhorar a absorção de impacto e a propulsão'],
        conteudo: [
          'Fortalecer o CPL (complexo póstero-lateral do quadril: extensores, abdutores e rotadores laterais)',
          'Fortalecer o complexo propulsor: glúteo, quadríceps e gastrocnêmios',
          'Trabalhar também a potência desses músculos',
          'Sempre mimetizar o gesto da corrida e encorajar leve flexão do tronco',
          'Fazer os exercícios diante do espelho, para o paciente observar o gesto e corrigir se necessário'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['O resumo não traz critérios de progressão nem de retorno à corrida: definir com o orientador']
      }
    ],
    evidencia: [
      'As lesões mais frequentes em corredores são a síndrome do estresse tibial medial, a tendinopatia de Aquiles e a fascite plantar. Em ultramaratonistas, tendinopatia de Aquiles e dor femoropatelar (Lopes et al., 2012).',
      'Uma revisão sistemática sobre erros de treino encontrou resultados conflitantes entre volume, duração, intensidade ou frequência e lesão. Não foi possível dizer quais erros de treino causam lesão (Nielsen et al., 2012).',
      'Em 874 corredores novatos, quem aumentou a distância semanal em mais de 30% em duas semanas teve tendência a mais lesões ligadas à distância, comparado a quem aumentou menos de 10% (HR 1,59; IC 95% 0,96 a 2,66; p = 0,07). O estudo é exploratório (Nielsen et al., 2014).',
      'O modelo atual de lesão por corrida compara a capacidade da estrutura com a carga acumulada, o que combina com o conceito de "envelope de função" da aula (Bertelsen et al., 2017).',
      'Pronação do pé: em 927 corredores novatos com tênis neutro, a pronação não aumentou o risco de lesão (Nielsen et al., 2014). Uma revisão concluiu que não há evidência conclusiva de que impacto e pronação sejam os principais preditores de lesão (Nigg et al., 2015). Por isso, trate a pronação como achado a relacionar com a queixa, não como causa automática.',
      'Meta-análise: programas de exercício reduziram lesões esportivas, com o treino de força reduzindo a menos de 1/3 (RR 0,315) e os programas em geral reduzindo quase pela metade as lesões por sobrecarga (RR 0,527). Alongamento não mostrou efeito (Lauersen et al., 2014).',
      'Reeducação da corrida: em 320 corredores novatos, 2 semanas de treino de marcha com feedback visual reduziram a taxa de impacto e o risco de lesão em 12 meses (16% contra 38%; HR 0,38) (Chan et al., 2018). Aumentar a cadência em 5% a 10% diminuiu a absorção de energia no joelho e no quadril em corredores recreacionais (Heiderscheit et al., 2011). São ideias para discutir com o orientador.',
      'O valor de 20% de redução do volume durante a reabilitação não foi encontrado em estudo: confirmar com o orientador.'
    ],
    refs: [
      'Lopes AD, Hespanhol Júnior LC, Yeung SS, Costa LOP. What are the main running-related musculoskeletal injuries? A systematic review. Sports Med. 2012;42(10):891-905. doi:10.1007/BF03262301',
      'Nielsen RO, Buist I, Sørensen H, Lind M, Rasmussen S. Training errors and running related injuries: a systematic review. Int J Sports Phys Ther. 2012;7(1):58-75.',
      'Nielsen RO, Parner ET, Nohr EA, Sørensen H, Lind M, Rasmussen S. Excessive progression in weekly running distance and risk of running-related injuries: an association which varies according to type of injury. J Orthop Sports Phys Ther. 2014;44(10):739-747. doi:10.2519/jospt.2014.5164',
      'Bertelsen ML, Hulme A, Petersen J, et al. A framework for the etiology of running-related injuries. Scand J Med Sci Sports. 2017;27(11):1170-1180. doi:10.1111/sms.12883',
      'Nielsen RO, Buist I, Parner ET, et al. Foot pronation is not associated with increased injury risk in novice runners wearing a neutral shoe: a 1-year prospective cohort study. Br J Sports Med. 2014;48(6):440-447. doi:10.1136/bjsports-2013-092202',
      'Nigg BM, Baltich J, Hoerzer S, Enders H. Running shoes and running injuries: mythbusting and a proposal for two new paradigms: "preferred movement path" and "comfort filter". Br J Sports Med. 2015;49(20):1290-1294. doi:10.1136/bjsports-2015-095054',
      'Lauersen JB, Bertelsen DM, Andersen LB. The effectiveness of exercise interventions to prevent sports injuries: a systematic review and meta-analysis of randomised controlled trials. Br J Sports Med. 2014;48(11):871-877. doi:10.1136/bjsports-2013-092538',
      'Chan ZYS, Zhang JH, Au IPH, et al. Gait retraining for the reduction of injury occurrence in novice distance runners: 1-year follow-up of a randomized controlled trial. Am J Sports Med. 2018;46(2):388-395. doi:10.1177/0363546517736277',
      'Heiderscheit BC, Chumanov ES, Michalski MP, Wille CM, Ryan MB. Effects of step rate manipulation on joint mechanics during running. Med Sci Sports Exerc. 2011;43(2):296-302. doi:10.1249/MSS.0b013e3181ebedf4'
    ]
  },
  {
    id: 'tendinopatia', nome: 'Tendinopatia no membro inferior (workshop da liga)', fonte: 'liga',
    aviso: 'Base: resumo do workshop de tendinopatia no membro inferior (os 7 pontos da aula 1). O resumo não traz exercícios nem fases, então está organizado em blocos. A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'A tendinopatia é uma condição de dor e perda de função que pesa muito na vida do paciente. O manejo do resumo gira em torno de: identificar o perfil do paciente, entender as adaptações do tendão, fazer uma avaliação simples e bem feita, educar, agir na causa, priorizar exercício com carga bem manejada e progredir de forma adequada.',
    avaliacao: [
      'História clínica: perfil do paciente, o que ele deixou de fazer, há quanto tempo sente e quando sente',
      'Royal London Test (Aquiles): palpar o tendão em posição neutra e depois alongado. O teste é positivo se a dor some com o tendão alongado',
      'Dor ao agachar: nota de 0 a 10 ao fazer 10 agachamentos (angulação de 30° a 45°)',
      'Questionários (por exemplo, VISA-A para Aquiles e VISA-P para o tendão patelar, na seção Questionários)',
      'Perfil de risco, função muscular e articular',
      'Exame de imagem, se houver'
    ],
    fases: [
      {
        nome: 'Bloco 1: perfil do paciente e avaliação',
        objetivos: ['Entender por que o tendão sobrecarregou e o que o paciente quer voltar a fazer'],
        conteudo: [
          'Perfil atlético: sobrecarga, controle de carga mal feito ou exercícios mal executados, com queda de desempenho. Um bom controle de carga e alguns ajustes tendem a resolver',
          'Perfil metabólico: obesidade, diabetes e sedentarismo. Estimular atividade física e o controle das condições metabólicas',
          'Perfil misto: alteração metabólica com atividade física, ou atleta de alto rendimento com alteração hormonal (por exemplo, amenorreia secundária, sem menstruar por mais de 3 meses)',
          'Entender as adaptações do tendão: quem volta à atividade depois de muito tempo com cargas baixas ou nulas corre risco maior (no resumo, o exemplo é o retorno após a pandemia)',
          'Definir como meta do tratamento a atividade que o paciente deixou de fazer (por exemplo, ajoelhar para rezar)'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['O tratamento deve se adequar à tarefa que o paciente quer realizar']
      },
      {
        nome: 'Bloco 2: educação e causa',
        objetivos: ['Dar confiança e engajar o paciente no tratamento'],
        conteudo: [
          'Educar o paciente é a primeira conduta',
          'Explicar que a tendinopatia não é grave, mas tem alto impacto na vida (o resumo cita que a tendinopatia glútea tem impacto grande)',
          'Transmitir confiança: tem solução simples, mas o paciente precisa participar ativamente',
          'Agir na causa e não na consequência'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['O resumo compara as alterações psicológicas à de pacientes com câncer: essa afirmação não foi encontrada em estudo e deve ser confirmada antes de usar com pacientes']
      },
      {
        nome: 'Bloco 3: exercício, carga e progressão',
        objetivos: ['Usar exercício com manejo adequado de carga como base da reabilitação'],
        conteudo: [
          'Mais exercício e menos maca: o exercício com manejo adequado de carga é a chave',
          'Avaliar a dor todos os dias (nota de 0 a 10 no agachamento) e a carga interna de cada sessão (percepção de esforço × tempo da sessão)',
          'Meta de dor: entre 0 e 3 no teste de agachamento',
          'Exemplo da aula: com a mesma carga externa por 5 dias, a percepção de esforço e a dor caíram, o que mostra que a carga externa já pode progredir'
        ],
        rotuloCriterios: 'Critério para progredir (aula)',
        criterios: ['Dor no agachamento entre 0 e 3 e percepção de esforço em queda com a mesma carga externa. O limite de 0 a 3 é da liga: ver a seção "O que a literatura mostra"']
      },
      {
        nome: 'Bloco 4: opções de carga descritas na literatura (para discutir)',
        objetivos: ['Escolher o tipo de exercício de acordo com a dor e o tendão'],
        conteudo: [
          'Treino de força lento e pesado (heavy slow resistance, HSR) e exercícios excêntricos mostraram bons resultados no Aquiles e no tendão patelar',
          'Exercício isométrico pode reduzir a dor logo após a série em tendinopatia patelar',
          'Continuar correndo e saltando com monitoramento de dor não prejudicou o tratamento do Aquiles',
          'Educação mais exercício foi mais eficaz que injeção de corticoide na tendinopatia glútea'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Estas opções vêm dos estudos citados abaixo. A escolha e a dose devem ser definidas com o orientador']
      },
      {
        nome: 'Bloco 5: etapas e isométricos (III Congresso)',
        objetivos: ['Organizar a progressão de carga até o retorno ao esporte'],
        conteudo: [
          'Etapa 1: tratar a cadeia cinética e os fatores de sobrecarga, e manejar a carga',
          'Etapa 2: fortalecimento com cargas progressivas e altas para o tendão se adaptar. O mais importante não é o tipo de contração, mas a progressão gradual constante de carga',
          'Etapa 3: armazenamento e liberação de energia (pliometria), com trabalho conjunto com o preparador físico já no início',
          'Etapa 4: retorno ao esporte',
          'Isométricos na fase inicial: 5 séries de 30 a 45 s, com cerca de 70% da força máxima de compressão e 1 a 2 minutos de repouso, em cadeia aberta ou fechada, para reduzir dor e inibição',
          'Repouso: no mínimo 36 horas para a readaptação colagenosa (patelar)',
          'Fortalecer o membro inferior todo, incluindo glúteos, para tirar sobrecarga do patelar e do quadríceps',
          'Evitar alongamento e meia de compressão, que podem aumentar a compressão no tendão. Usar foco externo ("alcance o cone") em vez de dizer que o movimento está errado'
        ],
        rotuloCriterios: 'Critérios (congresso)',
        criterios: [
          'Para ir à etapa 3: sem dor em agachamento unipodal e em saltos',
          'Alta por testes funcionais: side hop no Aquiles e hop test no patelar, e salto vertical',
          'As doses e o repouso de 36 horas são da palestra: ver a seção "O que a literatura mostra"'
        ]
      }
    ],
    evidencia: [
      'Os limites de dor variam entre os conteúdos da liga e do congresso (0 a 3 no agachamento aqui; 0 a 4 na escala visual em lesão muscular e na SIFA): são contextos diferentes e o critério deve ser o do protocolo em uso, com a reavaliação no dia seguinte.',
      'Do III Congresso: o isométrico com 5 séries de 30 a 45 s a 70% da força máxima, o repouso mínimo de 36 horas e as etapas de reabilitação não foram verificados em estudo próprio. O efeito analgésico do isométrico em tendinopatia patelar está em Rio et al. (2015), e a progressão de carga em Malliaras et al. (2013). Confirmar as doses com o orientador.',
      'O modelo de continuum da patologia do tendão (Cook e Purdam, 2009) foi revisitado em 2016: classificar a tendinopatia pela estrutura, quando ela é principalmente uma condição de dor, foi questionado, e a relação entre estrutura, dor e função ainda não é totalmente entendida (Cook et al., 2016).',
      'Royal London Test: no estudo original, com 10 atletas com tendinopatia de Aquiles e 14 controles, a sensibilidade combinada de 3 testes (palpação, arco doloroso e Royal London) foi de 58,6% e a especificidade de 83,3% (Maffulli et al., 2003). Os valores do resumo da liga (especificidade 86% e sensibilidade 54%) vêm de outra fonte e devem ser conferidos.',
      'Em um ensaio com 204 pessoas com tendinopatia glútea, educação sobre manejo de carga mais exercício foi melhor que corticoide e que não tratar: sucesso global em 8 semanas em 51 de 66 (educação e exercício), 38 de 65 (corticoide) e 20 de 68 (esperar). A dor média foi 1,5, 2,7 e 3,8. Em 52 semanas, educação e exercício foi melhor que corticoide na melhora global (Mellor et al., 2018).',
      'Em tendinopatia de Aquiles (58 pacientes), treino excêntrico e treino de força lento e pesado (HSR) deram resultados clínicos iguais por 12 semanas e se mantiveram em 52 semanas. A adesão foi maior no HSR (92% contra 78%) e a satisfação tendeu a ser maior no HSR às 12 semanas (Beyer et al., 2015).',
      'Em tendinopatia patelar (39 homens), o corticoide teve bom efeito em curto prazo e efeito ruim em longo prazo. O HSR teve bons efeitos em curto e longo prazo (Kongsgaard et al., 2009). Uma revisão sistemática concluiu que há pouca evidência de que isolar o componente excêntrico seja melhor, e que o HSR tem mais evidência no tendão patelar (Malliaras et al., 2013).',
      'Continuar a atividade com corrida e salto, com um modelo de monitoramento de dor, durante o tratamento de tendinopatia de Aquiles (38 pacientes) não trouxe efeitos negativos, e os dois grupos melhoraram (Silbernagel et al., 2007). Isso apoia o "mais exercício e menos maca" do resumo.',
      'Em 6 jogadores de vôlei com tendinopatia patelar, uma série de contrações isométricas reduziu a dor no agachamento unipodal em declive de 7,0 para 0,17 (isotônico: de 6,3 para 3,8), com efeito por 45 minutos. A amostra é muito pequena (Rio et al., 2015).',
      'A diretriz da APTA para tendinopatia de porção média do Aquiles (revisão de 2018) reúne as recomendações de manejo fisioterapêutico (Martin et al., 2018).',
      'O limite de dor de 0 a 3 no agachamento, as alterações psicológicas comparáveis às do câncer e o exemplo de rupturas de Aquiles após a pandemia, do resumo da liga, não foram encontrados nos estudos acima: confirmar com o orientador.'
    ],
    refs: [
      'Cook JL, Purdam CR. Is tendon pathology a continuum? A pathology model to explain the clinical presentation of load-induced tendinopathy. Br J Sports Med. 2009;43(6):409-416.',
      'Cook JL, Rio E, Purdam CR, Docking SI. Revisiting the continuum model of tendon pathology: what is its merit in clinical practice and research? Br J Sports Med. 2016;50(19):1187-1191. doi:10.1136/bjsports-2015-095422',
      'Maffulli N, Kenward MG, Testa V, Capasso G, Regine R, King JB. Clinical diagnosis of Achilles tendinopathy with tendinosis. Clin J Sport Med. 2003;13(1):11-15. doi:10.1097/00042752-200301000-00003',
      'Mellor R, Bennell K, Grimaldi A, et al. Education plus exercise versus corticosteroid injection use versus a wait and see approach on global outcome and pain from gluteal tendinopathy: prospective, single blinded, randomised clinical trial. Br J Sports Med. 2018;52(22):1464-1472. doi:10.1136/bjsports-2018-k1662rep',
      'Beyer R, Kongsgaard M, Hougs Kjær B, Øhlenschlæger T, Kjær M, Magnusson SP. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy: a randomized controlled trial. Am J Sports Med. 2015;43(7):1704-1711. doi:10.1177/0363546515584760',
      'Kongsgaard M, Kovanen V, Aagaard P, et al. Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy. Scand J Med Sci Sports. 2009;19(6):790-802. doi:10.1111/j.1600-0838.2009.00949.x',
      'Malliaras P, Barton CJ, Reeves ND, Langberg H. Achilles and patellar tendinopathy loading programmes: a systematic review comparing clinical outcomes and identifying potential mechanisms for effectiveness. Sports Med. 2013;43(4):267-286. doi:10.1007/s40279-013-0019-z',
      'Silbernagel KG, Thomeé R, Eriksson BI, Karlsson J. Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy: a randomized controlled study. Am J Sports Med. 2007;35(6):897-906. doi:10.1177/0363546506298279',
      'Rio E, Kidgell D, Purdam C, et al. Isometric exercise induces analgesia and reduces inhibition in patellar tendinopathy. Br J Sports Med. 2015;49(19):1277-1283. doi:10.1136/bjsports-2014-094386',
      'Martin RL, Chimenti R, Cuddeford T, et al. Achilles pain, stiffness, and muscle power deficits: midportion Achilles tendinopathy revision 2018. J Orthop Sports Phys Ther. 2018;48(5):A1-A38. doi:10.2519/jospt.2018.0302'
    ]
  },
  {
    id: 'entorse-tornozelo', nome: 'Entorse lateral de tornozelo (módulo 7 da liga)', fonte: 'liga',
    aviso: 'Base: resumo do módulo 7 (entorse de tornozelo), com as anotações do congresso (palestra "Do campo ao consultório"). O resumo não traz doses de exercício, então as fases foram organizadas com o que a liga descreve, e a seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'A reabilitação do entorse lateral é mais simples do que parece: o edema assusta, mas não significa lesão grave. O foco é descartar fratura, controlar o edema, devolver função cedo (carga, ativação muscular e treino sensório-motor) e evitar as complicações mais comuns: perda de dorsiflexão e tendinopatias de Aquiles e dos fibulares. O ligamento mais acometido é o talofibular anterior, seguido do calcaneofibular, por inversão com flexão plantar.',
    avaliacao: [
      'História: mecanismo (inversão com flexão plantar) e se é um entorse recorrente',
      'Regras de Ottawa para descartar fratura. Região maleolar: dor à palpação da borda posterior ou da ponta do maléolo lateral (cerca de 6 cm da fíbula distal) ou do maléolo medial, ou incapacidade de dar 4 passos. Médio pé: dor à palpação da base do 5º metatarso ou do navicular, ou incapacidade de dar 4 passos',
      'Dor na descarga de peso e capacidade de andar',
      'Fatores de risco: déficit de dorsiflexão, entorse prévio, fraqueza de panturrilha e quadríceps, controle de carga',
      'Fora do padrão (suspeitar de fratura ou lesão de sindesmose): dor no médio pé ou nos maléolos pelas regras de Ottawa, ou incapacidade de apoiar. Nesses casos a imobilização e a conduta são diferentes e o paciente precisa de avaliação médica',
      'Confiança do atleta para voltar (auto-relato) e medo do movimento'
    ],
    fases: [
      {
        nome: 'Fase 1: abordagem imediata e controle do edema',
        objetivos: ['Descartar fratura', 'Controlar edema e dor', 'Começar a carga e a ativação muscular logo'],
        conteudo: [
          'Aplicar as regras de Ottawa antes de qualquer conduta',
          'Enfaixar de distal para proximal para controlar o edema, molhar a atadura (para transmitir temperatura), gelo e elevação do membro. O paciente deve repetir o gelo o máximo possível e manter a atadura, inclusive para dormir. Se acordar com ela muito apertada, pode tirar',
          'Imobilização não é necessária em entorses leves ou quando o paciente consegue fazer as atividades do dia a dia sem dor. Se estiver inseguro nos primeiros dias, usar imobilização semirrígida e removível, tirada o máximo possível nas consultas e durante o dia para dar movimento e função',
          'Descarga de peso e ativação muscular precoces (associadas à eletroestimulação) são fundamentais',
          'Treinar o restante do corpo desde o 1º dia, com as cargas que o atleta já usava (CPL, quadríceps, glúteos e core), adaptando o que expõe o tornozelo (por exemplo, pranchas). Evitar cadeia cinética fechada nos exercícios de membro inferior enquanto gerar dor'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Crioterapia sozinha não resolve: precisa de exercício precoce', 'Mostrar ao atleta que o exame de imagem e a possível ruptura de ligamento importam menos do que a função']
      },
      {
        nome: 'Fase 2: liberação, ativação e força',
        objetivos: ['Recuperar a dorsiflexão', 'Reativar fibulares e dorsiflexores', 'Fortalecer o tríceps sural e o sóleo'],
        conteudo: [
          'Liberar a musculatura, principalmente fibulares e panturrilha: foram estirados e tendem a ficar contraturados por reflexo',
          'Ativar e fortalecer fibulares e dorsiflexores. Nos fibulares, partir do pé em posição neutra para não estirar as estruturas laterais se houver dor',
          'Ativar e fortalecer os flexores plantares (tríceps sural, sem esquecer o sóleo), com eletroestimulação nos fibulares e no tríceps. Motivo: os fibulares são inibidos pela inflamação e a carga vai toda para o tríceps, o que pode gerar tendinopatia em ambos',
          'Treinar o músculo intrínseco do pé (foot core), por exemplo com o exercício do pé curto',
          'Trabalhar o tempo de ativação dos fibulares: paciente de olhos fechados, faixa elástica sem tensão, puxando a faixa em momentos aleatórios',
          'Em todos os exercícios o parâmetro é a dor: se doer, reduzir a amplitude ou a carga'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dorsiflexão simétrica ou perto disso e marcha sem dor. Critérios numéricos de força não foram definidos no resumo da liga']
      },
      {
        nome: 'Fase 3: treino sensório-motor e controle neuromuscular',
        objetivos: ['Recuperar equilíbrio e propriocepção', 'Preparar o tornozelo para cargas maiores'],
        conteudo: [
          'Treino sensório-motor: apoio unipodal em superfícies estáveis e depois instáveis, com tarefas duplas e olhos fechados',
          'Treino de reação dos fibulares (ver fase 2) e de controle do tornozelo em movimentos do esporte',
          'Associar os recursos dos módulos anteriores para quebrar o ciclo da dor'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['A liga cita a importância do treino sensório-motor, mas sem doses. As doses devem ser definidas com o orientador']
      },
      {
        nome: 'Fase 4: agilidade, pliometria e retorno ao esporte',
        objetivos: ['Voltar a trocar de direção, saltar e correr com confiança'],
        conteudo: [
          'Progressão de exercícios de troca de direção e agilidade',
          'Sprint com comando do próprio atleta para trocar de direção de forma inesperada, associado a saltos',
          'Introduzir a pliometria no processo',
          'Se possível, trabalhar junto do preparador físico',
          'Considerar o uso de órtese (brace) ou fita no retorno para reduzir recidiva'
        ],
        rotuloCriterios: 'Critérios de retorno (liga)',
        criterios: ['Prazo de retorno citado no módulo: cerca de 2 semanas (para casos leves, a confirmar)', 'Auto-relato de confiança para voltar', 'Não há critérios numéricos consensuais na literatura: ver a seção "O que a literatura mostra"']
      }
    ],
    evidencia: [
      'Regras de Ottawa: em revisão sistemática com 27 estudos e 15.581 pacientes, a razão de verossimilhança negativa combinada foi de 0,08 para tornozelo e para médio pé. A sensibilidade é de quase 100%, a especificidade é modesta, e o uso reduz de 30 a 40% as radiografias desnecessárias (Bachmann et al., 2003).',
      'A diretriz holandesa atualizada (Vuurberg et al., 2018) indica que a gravidade do dano ligamentar é avaliada de forma mais confiável por exame físico tardio (4 a 5 dias após o trauma). Uma imobilização curta pode aliviar dor e edema, mas quem tem ruptura ligamentar aguda se beneficia mais de fita ou órtese associada a exercícios. Exercícios supervisionados são preferíveis a recursos passivos, e a órtese é uma opção eficaz para prevenir recidiva.',
      'Em um ensaio com 101 pacientes (entorse grau 1 ou 2), um protocolo acelerado com exercício terapêutico logo na primeira semana melhorou a função do tornozelo (LEFS) nas semanas 1 e 2 e deixou os pacientes mais ativos, sem diferença na dor ou no edema (Bleakley et al., 2010). Isso apoia o "carga e ativação precoces" do módulo.',
      'Uma revisão de revisões (46 artigos) encontrou evidência forte para AINEs e mobilização precoce, e moderada para exercício e terapia manual, no entorse agudo. Para evitar recidiva, a evidência é forte para órtese e moderada para treino neuromuscular. Há evidência insuficiente para ultrassom (Doherty et al., 2017).',
      'Em 522 atletas, 8 semanas de treino proprioceptivo domiciliar depois do tratamento usual reduziram as recidivas do entorse de 33% para 22% em um ano (risco relativo 0,63) (Hupperets et al., 2009).',
      'O "foot core" (músculos intrínsecos do pé) é um conceito para explicar a função do arco e orientar o treino, com o exercício do pé curto como base (McKeon et al., 2015; McKeon e Fourchet, 2015). São artigos de revisão e de opinião, sem ensaio clínico de desfecho no entorse.',
      'Retorno ao esporte: uma revisão sistemática não encontrou nenhum estudo que usasse critérios objetivos de retorno no entorse lateral (Tassignon et al., 2019). Uma revisão de opiniões de especialistas chegou a consenso só em avaliar o movimento específico do esporte, com acordo parcial em equilíbrio estático, relatos do paciente, amplitude e força, sem valores de corte (Wikstrom et al., 2020). Por isso, o prazo de 2 semanas do módulo e o critério da liga devem ser tratados como orientação clínica, não como regra comprovada.',
      'A diretriz de prática clínica da APTA (JOSPT) revisada em 2021 reúne as recomendações de manejo do entorse lateral e da instabilidade crônica (Martin et al., 2021).',
      'Do módulo, não foram encontrados em estudo: a estimativa de que 80 de 100 jogadores de futebol teriam ligamento do tornozelo comprometido na ressonância e a recomendação de enfaixar com atadura molhada. Confirmar com o orientador antes de passar ao paciente.'
    ],
    refs: [
      'Bachmann LM, Kolb E, Koller MT, Steurer J, ter Riet G. Accuracy of Ottawa ankle rules to exclude fractures of the ankle and mid-foot: systematic review. BMJ. 2003;326(7386):417. doi:10.1136/bmj.326.7386.417',
      'Vuurberg G, Hoorntje A, Wink LM, et al. Diagnosis, treatment and prevention of ankle sprains: update of an evidence-based clinical guideline. Br J Sports Med. 2018;52(15):956. doi:10.1136/bjsports-2017-098106',
      'Bleakley CM, O\'Connor SR, Tully MA, et al. Effect of accelerated rehabilitation on function after ankle sprain: randomised controlled trial. BMJ. 2010;340:c1964. doi:10.1136/bmj.c1964',
      'Doherty C, Bleakley C, Delahunt E, Holden S. Treatment and prevention of acute and recurrent ankle sprain: an overview of systematic reviews with meta-analysis. Br J Sports Med. 2017;51(2):113-125. doi:10.1136/bjsports-2016-096178',
      'Hupperets MDW, Verhagen EALM, van Mechelen W. Effect of unsupervised home based proprioceptive training on recurrences of ankle sprain: randomised controlled trial. BMJ. 2009;339:b2684. doi:10.1136/bmj.b2684',
      'McKeon PO, Hertel J, Bramble D, Davis I. The foot core system: a new paradigm for understanding intrinsic foot muscle function. Br J Sports Med. 2015;49(5):290. doi:10.1136/bjsports-2013-092690',
      'McKeon PO, Fourchet F. Freeing the foot: integrating the foot core system into rehabilitation for lower extremity injuries. Clin Sports Med. 2015;34(2):347-361. doi:10.1016/j.csm.2014.12.002',
      'Tassignon B, Verschueren J, Delahunt E, et al. Criteria-based return to sport decision-making following lateral ankle sprain injury: a systematic review and narrative synthesis. Sports Med. 2019;49(4):601-619. doi:10.1007/s40279-019-01071-3',
      'Wikstrom EA, Mueller C, Cain MS. Lack of consensus on return-to-sport criteria following lateral ankle sprain: a systematic review of expert opinions. J Sport Rehabil. 2020;29(2):231-237. doi:10.1123/jsr.2019-0038',
      'Martin RL, Davenport TE, Fraser JJ, et al. Ankle stability and movement coordination impairments: lateral ankle ligament sprains revision 2021. J Orthop Sports Phys Ther. 2021;51(4):CPG1-CPG80. doi:10.2519/jospt.2021.0302'
    ]
  },
  {
    id: 'cpl', nome: 'Fortalecimento do CPL do quadril (módulo 5 da liga)', fonte: 'liga',
    aviso: 'Base: resumo do módulo 5 (exercícios para o CPL, complexo póstero-lateral do quadril: extensores, abdutores e rotadores laterais). O resumo descreve os exercícios, mas não traz séries, repetições nem cargas. A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar. Os exercícios também estão na aba Exercícios.',
    resumo: 'Movimentos excessivos que sobrecarregam joelho e tornozelo costumam vir de uma falha da musculatura estabilizadora do quadril. Como essa musculatura tem mais torque e maior área de secção transversa do que a de joelho e tornozelo, o foco é fortalecer o CPL e, conforme o caso e a lesão, os demais grupos. Os exercícios vão do mais simples (ostra, glúteo médio em decúbito lateral) aos de cadeia fechada (Trendelenburg, afundo e marcha lateral).',
    avaliacao: [
      'Observar o controle do joelho e da pelve em agachamento, step-down e apoio unipodal (valgo dinâmico, queda da pelve)',
      'Teste de força do quadril: abdutores, rotadores laterais e extensores (dinamômetro ou teste manual)',
      'Avaliar também tronco, joelho e pé: o quadril é só parte da cadeia',
      'Conferir se o paciente consegue o padrão sem compensar (quadrado lombar, rotação de tronco)'
    ],
    fases: [
      {
        nome: 'Bloco 1: raciocínio clínico',
        objetivos: ['Entender por que fortalecer o quadril ajuda joelho e tornozelo'],
        conteudo: [
          'Cadeia cinética aberta (CCA) x fechada (CCF): na aula, a CCA é descrita só com força de cisalhamento e a CCF com cisalhamento mais compressão (exemplo: bicicleta numa descida x numa subida)',
          'Movimento excessivo no joelho e no tornozelo costuma vir de falha da musculatura estabilizadora do quadril (extensores, abdutores e rotadores laterais)',
          'O quadril tem torque e área de secção transversa maiores que joelho e tornozelo, por isso é o foco do fortalecimento',
          'Dependendo do caso, fortalecer também os outros grupos musculares'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['A descrição de CCA e CCF é uma simplificação da aula: na prática há cisalhamento e compressão nos dois tipos, em graus diferentes. Conferir com o orientador']
      },
      {
        nome: 'Bloco 2: exercícios de base (decúbito)',
        objetivos: ['Ativar glúteo médio, glúteo máximo e rotadores laterais sem compensação'],
        conteudo: [
          'Ostra: joelhos flexionados a 90° e quadril a no máximo 60°. Tornozelo, quadril e ombro alinhados. Não desencostar os tornozelos. Estabilizar a lombar para o paciente não rodar o tronco',
          'Glúteo médio em decúbito lateral: joelho de baixo flexionado, quadril com alguns graus de extensão e pé neutro. Estabilizar a crista ilíaca para evitar compensação do quadrado lombar. Evolução: caneleira ou elástico posicionado para resistir à abdução e à extensão (em isometria, no caso do elástico)',
          'Cachorrinho (quatro apoios): movimento em diagonal, com extensão, abdução e rotação lateral ao mesmo tempo. Joelhos juntos no início e flexionados durante todo o movimento. No fim, o joelho deve ficar acima ou na mesma linha do pé, o que confirma a rotação lateral',
          'Cachorrinho em decúbito lateral: para quem não consegue ficar em quatro apoios. Estabilizar a lombar e observar a linha do joelho com o pé no fim da amplitude'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Executa o movimento sem compensar (tronco, lombar, pelve) e sem dor. Número de séries e repetições não consta no resumo da liga']
      },
      {
        nome: 'Bloco 3: cadeia fechada e controle em carga',
        objetivos: ['Transferir a força do CPL para o apoio, com controle do joelho e da pelve'],
        conteudo: [
          'Trendelenburg: abdução pélvica em cadeia fechada, joelho estendido. Evitar compensação com o quadrado lombar: orientar o paciente a empurrar o chão e sentir "queimar" nos glúteos',
          'Afundo e variações: usar a estratégia do quadril se o paciente tem dor femoropatelar (DFP). Graduar com elástico puxando para valgo. Elástico no hálux faz o paciente ativar a musculatura intrínseca do pé (estabilidade do arco). Se o elástico for colocado 1 cm para trás, na base dos metatarsos, o paciente precisa desabar o arco para segurar, o que é o contrário do objetivo',
          'Marcha lateral: educar e estimular o paciente a não deixar o joelho entrar. Agachar em isometria, com estratégia do quadril em DFP, e deslocar para cada lado repetidamente. Variação: associar a rotação do quadril'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Espelho e feedback verbal ajudam a manter o joelho alinhado', 'O efeito do elástico no hálux x metatarsos é da aula: ver a seção "O que a literatura mostra"']
      }
    ],
    evidencia: [
      'Em 21 pessoas saudáveis, a abdução de quadril em decúbito lateral foi o exercício que mais ativou o glúteo médio (81% da contração isométrica máxima), contra cerca de 40% na ostra. O agachamento unipodal e o levantamento terra unipodal ativaram bem os dois glúteos (Distefano et al., 2009).',
      'Em outro estudo com 18 exercícios, a prancha lateral com abdução (103% e 89% da contração máxima), o agachamento unipodal (82%) e a progressão 4 da ostra (77%) ativaram o glúteo médio acima de 70%. A prancha frontal com extensão de quadril e a contração glútea ativaram mais o glúteo máximo (Boren et al., 2011). Em 30 pessoas, a prancha lateral ativou o glúteo médio e a elevação de braço e perna em quatro apoios ativou o glúteo máximo em nível útil para ganho de força (acima de 45% da contração máxima); a abdução ativa simples ficou abaixo disso e serve mais para resistência ou estabilização (Ekstrom et al., 2007).',
      'Esses dados são de eletromiografia em pessoas saudáveis e mostram quanto o músculo é ativado, não o resultado clínico. A ostra simples ativa menos que a abdução lateral, e a progressão com resistência ou posição muda isso.',
      'Em dor femoropatelar, a reabilitação proximal (quadril) associada ao quadríceps reduz a dor e melhora a função a curto prazo (evidência forte), e a de quadril isolada reduz a dor mais que a de quadríceps isolada a curto e médio prazo (evidência moderada) (Lack et al., 2015). Uma revisão com 14 estudos mostrou que o fortalecimento de abdutores e rotadores laterais melhorou dor e função, e a maioria dos ensaios o achou superior ao fortalecimento só do quadríceps (Alammari et al., 2023). Um ensaio com 60 mulheres com dor femoropatelar usou exercícios resistidos e proprioceptivos para tronco, abdutores e rotadores laterais do quadril e extensores do joelho por 6 semanas e melhorou dor, função, força e valgo dinâmico em relação à orientação sozinha (da Silva Boitrago et al., 2021).',
      'O consenso do retiro internacional de dor femoropatelar reúne os fatores proximais, distais e locais associados à condição (Powers et al., 2012).',
      'Do resumo da liga, não foram encontrados em estudo: a posição do elástico no hálux versus na base dos metatarsos e os detalhes do cachorrinho (movimento em diagonal com rotação lateral). Confirmar com o orientador e tratar como orientação clínica.'
    ],
    refs: [
      'Distefano LJ, Blackburn JT, Marshall SW, Padua DA. Gluteal muscle activation during common therapeutic exercises. J Orthop Sports Phys Ther. 2009;39(7):532-540. doi:10.2519/jospt.2009.2796',
      'Boren K, Conrey C, Le Coguic J, Paprocki L, Voight M, Robinson TK. Electromyographic analysis of gluteus medius and gluteus maximus during rehabilitation exercises. Int J Sports Phys Ther. 2011;6(3):206-223.',
      'Ekstrom RA, Donatelli RA, Carp KC. Electromyographic analysis of core trunk, hip, and thigh muscles during 9 rehabilitation exercises. J Orthop Sports Phys Ther. 2007;37(12):754-762. doi:10.2519/jospt.2007.2471',
      'Lack S, Barton C, Sohan O, Crossley K, Morrissey D. Proximal muscle rehabilitation is effective for patellofemoral pain: a systematic review with meta-analysis. Br J Sports Med. 2015;49(21):1365-1376. doi:10.1136/bjsports-2015-094723',
      'Alammari A, Spence N, Narayan A, Karnad SD, Ottayil ZC. Effect of hip abductors and lateral rotators\' muscle strengthening on pain and functional outcome in adult patients with patellofemoral pain: a systematic review and meta-analysis. J Back Musculoskelet Rehabil. 2023;36(1):35-60. doi:10.3233/BMR-220017',
      'da Silva Boitrago MV, de Mello NN, Barin FR, et al. Effects of proprioceptive exercises and strengthening on pain and functionality for patellofemoral pain syndrome in women: a randomized controlled trial. J Clin Orthop Trauma. 2021;18:94-99. doi:10.1016/j.jcot.2021.04.017',
      'Powers CM, Bolgla LA, Callaghan MJ, Collins N, Sheehan FT. Patellofemoral pain: proximal, distal, and local factors, 2nd International Research Retreat. J Orthop Sports Phys Ther. 2012;42(6):A1-54. doi:10.2519/jospt.2012.0301'
    ]
  },
  {
    id: 'ganho-adm', nome: 'Ganho de amplitude de movimento por mobilização (módulo 8 da liga)', fonte: 'liga',
    aviso: 'Base: resumo do módulo 8 (ganho de ADM em tornozelo, joelho e quadril). O resumo traz as técnicas, as posições e os cuidados, mas os desenhos não foram lidos e não há doses fixas, exceto no joelho (oscilação e tempo de sustentação). A seção "O que a literatura mostra" foi pesquisada no PubMed: a maioria dos estudos fala de tornozelo e de quadril com osteoartrite, e não encontrei estudo para as técnicas de joelho. Revisar com o orientador antes de usar.',
    resumo: 'Mobilizações articulares para recuperar amplitude: posterior do tálus (dorsiflexão), posterior da tíbia e da fíbula (flexão plantar), posteriorização da tíbia e oscilação no fim da amplitude (flexão do joelho), anteriorização com rotação lateral da tíbia e posteriorização do fêmur (extensão do joelho), e tração e mobilização do quadril, sempre com ou sem cinto. Regra geral da liga: reavaliar logo depois e orientar exercícios de mobilidade em casa para manter o ganho.',
    avaliacao: [
      'Medir a amplitude antes (dorsiflexão, flexão e extensão do joelho, rotações do quadril) e definir se o bloqueio é articular, de partes moles ou doloroso',
      'Conferir restrições: fratura, cirurgia recente e protocolo do cirurgião, instabilidade, derrame importante',
      'Reavaliar a amplitude logo depois da técnica e comparar com o lado oposto'
    ],
    fases: [
      {
        nome: 'Bloco 1: tornozelo',
        objetivos: ['Ganhar dorsiflexão e flexão plantar'],
        conteudo: [
          'Mobilização posterior do tálus para dorsiflexão: mobilizar o tálus e, mantendo-o posteriorizado, pedir a dorsiflexão ao paciente. Pode ser feita com o terapeuta empurrando com a perna ao fim da amplitude ou com cinto, caso em que o paciente puxa conforme seu limiar de dor',
          'Cuidado: segurar um pouco abaixo da região do tálus e "tirar" o tecido mole, para ter certeza de que se mobiliza a articulação e não a pele',
          'Com descarga de peso: no fim da amplitude, pode-se puxar a tíbia para frente (over pressure), sem tirar o calcanhar do chão',
          'Flexão plantar: posteriorizar a tíbia e a fíbula (o equivalente à anteriorização do tálus). Uma mão estabiliza e a outra faz a força de posteriorização; manter a posição e fazer o movimento junto com o paciente'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Reavaliar depois da aplicação e orientar exercícios de mobilidade em casa para manter o ganho']
      },
      {
        nome: 'Bloco 2: joelho (flexão)',
        objetivos: ['Ganhar flexão de joelho'],
        conteudo: [
          'Posteriorização da tíbia em decúbito dorsal: o braço que mobiliza fica alinhado com o fêmur (para não empurrar a tíbia para cima ou para baixo), a mão fica um pouco acima da tuberosidade anterior da tíbia, e a técnica é feita no fim da amplitude máxima de flexão do paciente',
          'Posteriorização da tíbia em decúbito ventral: melhor para quem já tem flexão de 90° ou mais. Pode ser feita com ajuda do ombro (posterioriza, mantém, empurra a perna para a flexão com o ombro, com cinto estabilizando o paciente na maca) ou com cinto. Manter o braço perpendicular (90°) à tíbia, acompanhando a flexão',
          'Regra da liga: mobilizar primeiro a artrocinemática e depois a osteocinemática',
          'Oscilação no fim da amplitude: ir até o fim, empurrar e voltar um pouco mais (cerca de 1 minuto). Segurar na nova amplitude por 2 a 3 minutos (pode doer, mas alivia logo). Depois ir um pouco mais e segurar outros 2 a 3 minutos. O cinto evita que o paciente "fuja"',
          'Oscilação ativa no fim da amplitude: pode ser orientada para fazer em casa'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Em joelho operado (por exemplo, após LCA), seguir as restrições do cirurgião e do protocolo da liga para o pós-operatório', 'Em lesão do LCP, a posteriorização da tíbia exige cuidado e pode ser contraindicada: ver o protocolo de LCP e canto póstero-lateral']
      },
      {
        nome: 'Bloco 3: joelho (extensão)',
        objetivos: ['Ganhar extensão de joelho'],
        conteudo: [
          'Anteriorização com rotação lateral da tíbia: estabilizar o fêmur e, no fim da amplitude, anteriorizar e rodar lateralmente a tíbia ao mesmo tempo',
          'Posteriorização do fêmur com apoio no calcanhar: apoiar o calcanhar em algo rígido, estabilizar a tíbia com uma mão e empurrar o fêmur para baixo com rotação medial ("como se torcesse o joelho"), com cotovelos estendidos',
          'Com cinto: o cinto estabiliza o fêmur e é apertado conforme o paciente ganha amplitude. Também é possível pegar o calcanhar para ganhar osteocinematicamente com o fêmur estabilizado. Manter o paciente com o cinto apertado na amplitude por cerca de 10 minutos é uma opção',
          'Em pé com cinto: estabilizar calcanhar e pelve, e pedir ao paciente que estenda o joelho ao máximo enquanto se oscila puxando o fêmur para trás e para rotação medial. Existe também a versão sem cinto'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['A própria liga diz que o tempo prolongado com o cinto "é agressivo", mas necessário em alguns casos: usar com critério e acompanhar a dor', 'No pós-operatório de LCA, a palestra do congresso (G. Leão) ganha a extensão com orientações e sem terapia manual nas primeiras semanas: ver o protocolo de LCA antes de aplicar estas técnicas']
      },
      {
        nome: 'Bloco 4: quadril',
        objetivos: ['Melhorar a mobilidade do quadril com tração e mobilização'],
        conteudo: [
          'Tração distal, com ou sem cinto, podendo variar a posição do quadril (por exemplo, abduzir um pouco)',
          'Tração lateral e distal com cinto: estabilizar a pelve, cuidar para não posicionar o cinto exatamente a 90° (por causa da angulação do encaixe do quadril) e oscilar jogando para trás. Primeiro tirar o tecido mole (adutores)',
          'Rotação interna do quadril: pedir o movimento ao paciente e acompanhar com a tração, com ou sem cinto. Objetivo da tração: mobilizar a articulação para lubrificá-la e deixar o movimento mais "limpo"'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Reavaliar a amplitude depois de cada técnica']
      }
    ],
    evidencia: [
      'A mobilização com movimento (MWM) do tornozelo, que combina deslizamento posterior do tálus com dorsiflexão ativa, melhorou o deslizamento posterior do tálus em cerca de 50 a 55% do déficit e a dorsiflexão em carga em 26% (contra 9% do controle) em 16 pessoas com entorses recorrentes (Vicenzino et al., 2006). Em 14 pessoas com entorse subagudo, a MWM melhorou a dorsiflexão logo depois, sem mudança no limiar de dor, o que sugere efeito mecânico (Collins et al., 2004).',
      'Revisão com meta-análise sobre mobilização articular em entorse de tornozelo (23 estudos): benefício imediato no equilíbrio dinâmico e, a curto prazo, na dorsiflexão em carga. Benefícios a longo prazo não foram bem estudados (Weerasekara et al., 2018). Em instabilidade crônica, as mobilizações melhoram levemente a dorsiflexão (evidência grau A) (Vallandingham et al., 2019). Seis sessões de terapia manual melhoraram a função mais que uma sessão (Shi et al., 2019).',
      'Quadril: em 109 pessoas com osteoartrite de quadril, um programa de manipulação e mobilização por 5 semanas (9 sessões) teve sucesso em 81%, contra 50% do exercício, com melhor dor, função e amplitude, e efeito mantido em 29 semanas (Hoeksma et al., 2004). Em 60 pacientes com osteoartrite de quadril, a distração em eixo longo com força alta em posição de repouso aumentou a amplitude em todos os planos, o que não ocorreu com força baixa ou média (Estébanez-de-Miguel et al., 2018). São estudos em osteoartrite, não em atletas.',
      'Joelho: uma revisão sistemática da artrofibrose após reconstrução do LCA descreve que o manejo em etapas, com reconhecimento e intervenção precoces, trata mais da metade dos casos sem cirurgia. O tratamento mais estudado foi o cirúrgico, e as definições variam muito (Ekhtiari et al., 2017). Não encontrei estudo que testasse as técnicas de joelho do módulo (posteriorização da tíbia, oscilação com sustentação de 2 a 3 minutos, cinto por 10 minutos).',
      'Os tempos e as intensidades do módulo (por exemplo, 2 a 3 minutos de sustentação, cinto por 10 minutos) vêm da prática clínica do palestrante. Tratar como orientação a confirmar com o orientador, e sempre reavaliar.'
    ],
    refs: [
      'Vicenzino B, Branjerdporn M, Teys P, Jordan K. Initial changes in posterior talar glide and dorsiflexion of the ankle after mobilization with movement in individuals with recurrent ankle sprain. J Orthop Sports Phys Ther. 2006;36(7):464-471. doi:10.2519/jospt.2006.2265',
      'Collins N, Teys P, Vicenzino B. The initial effects of a Mulligan\'s mobilization with movement technique on dorsiflexion and pain in subacute ankle sprains. Man Ther. 2004;9(2):77-82. doi:10.1016/S1356-689X(03)00101-2',
      'Weerasekara I, Osmotherly P, Snodgrass S, Marquez J, de Zoete R, Rivett DA. Clinical benefits of joint mobilization on ankle sprains: a systematic review and meta-analysis. Arch Phys Med Rehabil. 2018;99(7):1395-1412.e5. doi:10.1016/j.apmr.2017.07.019',
      'Vallandingham RA, Gaven SL, Powden CJ. Changes in dorsiflexion and dynamic postural control after mobilizations in individuals with chronic ankle instability: a systematic review and meta-analysis. J Athl Train. 2019;54(4):403-417. doi:10.4085/1062-6050-380-17',
      'Shi X, Han J, Witchalls J, Waddington G, Adams R. Does treatment duration of manual therapy influence functional outcomes for individuals with chronic ankle instability: a systematic review with meta-analysis? Musculoskelet Sci Pract. 2019;40:87-95. doi:10.1016/j.msksp.2019.01.015',
      'Hoeksma HL, Dekker J, Ronday HK, et al. Comparison of manual therapy and exercise therapy in osteoarthritis of the hip: a randomized clinical trial. Arthritis Rheum. 2004;51(5):722-729. doi:10.1002/art.20685',
      'Estébanez-de-Miguel E, Fortún-Agud M, Jimenez-Del-Barrio S, Caudevilla-Polo S, Bueno-Gracia E, Tricás-Moreno JM. Comparison of high, medium and low mobilization forces for increasing range of motion in patients with hip osteoarthritis: a randomized controlled trial. Musculoskelet Sci Pract. 2018;36:81-86. doi:10.1016/j.msksp.2018.05.004',
      'Ekhtiari S, Horner NS, de Sa D, et al. Arthrofibrosis after ACL reconstruction is best treated in a step-wise approach with early recognition and intervention: a systematic review. Knee Surg Sports Traumatol Arthrosc. 2017;25(12):3929-3937. doi:10.1007/s00167-017-4482-1'
    ]
  },
  {
    id: 'alivio-dor', nome: 'Estratégias de alívio da dor (módulos 3 e 4 da liga)', fonte: 'liga',
    aviso: 'Base: resumo dos módulos 3 e 4 (estratégias de alívio da dor). A própria liga diz que não são recomendações absolutas: testar com o paciente e, se funcionar, ele usa sempre que sentir dor, não só na sessão. As figuras do resumo não foram lidas. A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'Recursos simples para reduzir a dor durante o movimento enquanto o tratamento de base (fortalecimento) acontece: faixa na tendinopatia, compressão no estiramento, hierarquia de recursos na dor anterior do joelho, cunhas de EVA na palmilha e barra infracapital para dor anterior do quadril.',
    avaliacao: [
      'Reproduzir a dor do paciente no movimento (por exemplo, agachar) e ver em que ângulo e com que intensidade ela aparece',
      'Aplicar o recurso na hora e repetir o movimento para ver se a dor muda (0 a 10)',
      'Só manter o recurso se o paciente tiver resultado promissor e conseguir usá-lo no dia a dia'
    ],
    fases: [
      {
        nome: 'Bloco 1: tendinopatias e lesão muscular',
        objetivos: ['Reduzir a dor durante a contração enquanto o tecido se adapta'],
        conteudo: [
          'Tendinopatias (patelar, pata de ganso e tríceps sural): fixar uma faixa elástica ou rígida acima do ponto de inserção do tendão ou do ponto de dor. O objetivo é distribuir a tensão no tendão no momento da contração muscular',
          'Estiramento muscular: aproximar as fibras na fase inicial com uma atadura enrolada ao redor da lesão. Testar se funciona nas funções básicas (como caminhar) e, se sim, manter durante o dia todo. Na fase inicial, priorizar o gelo',
          'Contratura: o resumo não traz conduta (marcado com interrogações)'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['A faixa não substitui o fortalecimento: é um recurso para tolerar a carga. Para o plano de exercício, ver o protocolo de tendinopatia']
      },
      {
        nome: 'Bloco 2: dor difusa na região anterior do joelho',
        objetivos: ['Reduzir a dor no agachamento e nas escadas com recursos em ordem'],
        conteudo: [
          '1) Joelheira, para dar mais estabilidade à patela',
          '2) Estratégia do quadril no agachamento (cadeia fechada) ou angulações de proteção em cadeia aberta (90° a 45°)',
          '3) Angulações de proteção em cadeia fechada (0° a 45°)',
          '4) Reduzir a carga. A oclusão vascular (restrição de fluxo sanguíneo) pode ser usada para diminuir a sobrecarga articular',
          'Seguir essa ordem e associar os recursos se necessário'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Para dor femoropatelar, a base do tratamento continua sendo o exercício, e a joelheira e o taping têm benefício pequeno ou nenhum: ver a seção "O que a literatura mostra"']
      },
      {
        nome: 'Bloco 3: cunhas de EVA e barra infracapital',
        objetivos: ['Redistribuir a carga no joelho e no quadril por meio da palmilha'],
        conteudo: [
          'Dor no menisco medial ou no ligamento colateral lateral: cunha de EVA antivaro, fixada na região posterior e lateral da palmilha, para evitar o varo de tornozelo e joelho (distração do compartimento lateral e compressão do medial)',
          'Dor no menisco lateral ou no ligamento colateral medial: cunha de EVA antivalgo, fixada na região posterior e medial da palmilha, para evitar o valgo (distração do compartimento medial e compressão do lateral)',
          'Dor anterior no quadril: barra infracapital, cunha de EVA na palmilha na região da cabeça dos metatarsos. Favorece a dorsiflexão durante a marcha, o que faz o paciente iniciar a flexão do quadril mais cedo, diminuindo a extensão e o deslizamento anterior excessivo da cabeça do fêmur'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['As indicações das cunhas e da barra vêm da aula: não encontrei estudo para elas nessas lesões. Ver a seção "O que a literatura mostra"']
      }
    ],
    evidencia: [
      'Tendinopatia patelar: em uma revisão de 9 ensaios, um estudo achou que a faixa patelar (strapping) e o taping esportivo reduziram a dor durante o esporte e logo depois, e 3 estudos apoiaram o exercício isométrico para reduzir a dor de forma imediata. O efeito mais duradouro foi do exercício excêntrico, de agulhamento seco e de injeções (Vander Doelen et al., 2020). Ou seja, a faixa tem apoio fraco e de curto prazo.',
      'Dor femoropatelar: em revisão sobre tratamentos adicionais ao exercício, taping, joelheira, vibração de corpo inteiro e biofeedback não trouxeram benefício além do exercício sozinho (evidência de certeza muito baixa). Estimulação elétrica neuromuscular e diatermia dielétrica monopolar pareceram melhorar a dor (Souto et al., 2024).',
      'Dor femoropatelar e osteoartrite: palmilhas de suporte medial não alteraram a carga na articulação femoropatelar na caminhada nem na corrida, e o calçado minimalista reduziu um pouco o pico de carga na corrida (Kayll et al., 2023).',
      'Cunha lateral (equivalente à antivaro) na osteoartrite medial do joelho: a meta-análise não mostrou melhora de dor nem de função (Zhang et al., 2018). Não encontrei estudo da cunha para a dor de menisco ou de colateral, nem da cunha antivalgo.',
      'Restrição de fluxo sanguíneo: em 20 estudos (incluindo reconstrução de LCA e osteoartrite de joelho), o treino de baixa carga com restrição aumentou a força de forma moderada, mas menos que o treino de alta carga (Hughes et al., 2017). Orientações práticas de uso em Patterson et al. (2017). Exige cuidado com a segurança e a prescrição individual.',
      'Do resumo da liga, não foram encontrados em estudo: a barra infracapital para dor anterior do quadril, a atadura de compressão para estiramento muscular e a ordem exata dos recursos para dor anterior do joelho. Tratar como orientação clínica a confirmar com o orientador.'
    ],
    refs: [
      'Vander Doelen T, Jelley W. Non-surgical treatment of patellar tendinopathy: a systematic review of randomized controlled trials. J Sci Med Sport. 2020;23(2):118-124. doi:10.1016/j.jsams.2019.09.008',
      'Souto LR, De Oliveira Silva D, Pazzinatto MF, Siqueira MS, Moreira RFC, Serrão FV. Are adjunct treatments effective in improving pain and function when added to exercise therapy in people with patellofemoral pain? A systematic review with meta-analysis. Br J Sports Med. 2024;58(14):792-804. doi:10.1136/bjsports-2024-108145',
      'Kayll SA, Hinman RS, Bryant AL, Bennell KL, Rowe PL, Paterson KL. Do biomechanical foot-based interventions reduce patellofemoral joint loads in adults with and without patellofemoral pain or osteoarthritis? Br J Sports Med. 2023;57(14):872-881. doi:10.1136/bjsports-2022-106542',
      'Zhang J, Wang Q, Zhang C. Ineffectiveness of lateral-wedge insoles on the improvement of pain and function for medial knee osteoarthritis: a meta-analysis of randomized controlled trials. Arch Orthop Trauma Surg. 2018;138(10):1453-1462. doi:10.1007/s00402-018-3004-z',
      'Hughes L, Paton B, Rosenblatt B, Gissane C, Patterson SD. Blood flow restriction training in clinical musculoskeletal rehabilitation: a systematic review and meta-analysis. Br J Sports Med. 2017;51(13):1003-1011. doi:10.1136/bjsports-2016-097071',
      'Patterson SD, Hughes L, Head P, Warmington S, Brandner C. Blood flow restriction training: a novel approach to augment clinical rehabilitation: how to do it. Br J Sports Med. 2017;51(23):1648-1649. doi:10.1136/bjsports-2017-097738'
    ]
  },
  {
    id: 'metodo-for', nome: 'Avaliação do método FOR (módulo 2 da liga)', fonte: 'liga',
    aviso: 'Base: resumo do módulo 2 (avaliação pelo método FOR). O método tem duas fases de tratamento, liberação miofascial e fortalecimento, e a avaliação já identifica o que precisa ser liberado. Deixei de fora os trechos do resumo sobre venda e fechamento de planos de tratamento, que não são conteúdo clínico. As figuras do resumo não foram lidas. A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'Avaliação conduzida com foco no paciente: ouvir a queixa, reproduzir a dor, entender o que ele quer voltar a fazer, observar o movimento e testar o que ele NÃO tem. A liberação miofascial começa já na avaliação e vem antes do fortalecimento, que é o que de fato resolve. O quadril recebe atenção especial por absorver e dissipar forças nos três planos.',
    avaliacao: [
      'Buscar o paciente na recepção e chamá-lo pelo nome: observar como ele senta e anda',
      'Explicar o que será feito em cada fase da reabilitação e por quê',
      'Perguntar: "É essa dor que você sente?" (reproduzir a dor, quantificar de 0 a 10), "O que a dor impede você de fazer?" e "Qual o seu objetivo na fisioterapia?"',
      'Pedir que o paciente mostre a dor fazendo o movimento (por exemplo, agachar), observar o ângulo e a intensidade e, se possível, corrigir o movimento ou aplicar uma técnica de alívio na hora',
      'Duração (aguda x crônica) e mecanismo (traumático x atraumático): lesões atraumáticas sugerem falha do sistema musculoesquelético e neural; as traumáticas costumam ser mais simples',
      'Fatores que aumentam ou diminuem a queixa, atividade de vida diária e prática esportiva (manter o paciente na atividade sempre que possível), medicações (saber, sem interferir) e uso de muletas'
    ],
    fases: [
      {
        nome: 'Bloco 1: relação com o paciente e anamnese',
        objetivos: ['Criar confiança e entender o que importa para o paciente'],
        conteudo: [
          'Pôr o paciente à vontade: sem bolsa ou celular no colo, conversar de outro assunto antes',
          'Olhar o exame de imagem para dar segurança: o paciente tem crenças de que o problema está ali, e olhar não significa que o achado seja relevante',
          'Alinhar expectativas: por exemplo, quem fez prótese total de quadril e quer voltar ao futebol deve saber que é muito difícil. Oferecer alternativas, como tênis em dupla',
          'Perguntar sobre sintomas típicos da hipótese (por exemplo, dor femoropatelar: dor ao levantar depois de muito tempo sentado). Quanto mais "sim", mais o paciente confia na avaliação',
          'Muletas: quem precisa de fato usa duas; uma só dá segurança, e o paciente pode e deve ser estimulado a andar sem ela'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['A avaliação serve para dar diagnóstico e prognóstico ao paciente e motivar a participação dele no tratamento']
      },
      {
        nome: 'Bloco 2: observação, marcha e amplitude',
        objetivos: ['Identificar compensações e o papel do quadril'],
        conteudo: [
          'Quadril: absorve e dissipa forças ascendentes e descendentes, tem grande amplitude nos 3 eixos e o torque do CPL. Movimento excessivo no quadril repercute no joelho e no tornozelo nos planos frontal, sagital e transverso',
          'Discrepância de membros: diferenças menores que 1 a 1,5 cm não significam nada',
          'Amplitude: não precisa medir em graus, basta ver se está preservada e comparar os lados (goniômetro só em poucos casos)',
          'Marcha: Trendelenburg clássico (tronco inclina para o lado oposto) e compensado (inclina para o mesmo lado) têm o mesmo problema, a fraqueza glútea',
          'Pé rodado para fora ao pisar: possível compensação de retroversão femoral. Pé rodado para dentro: possível anteversão femoral. A rotação do pé nem sempre vem do quadril: pode ser a torção tibial (cerca de 20°)',
          'Alterações anatômicas não se mudam: indicam apenas que o tempo de reabilitação e de fortalecimento tende a ser maior'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Observar também a posição no trabalho e na cadeira (o resumo cita caso de impacto femoroacetabular com cadeira giratória)']
      },
      {
        nome: 'Bloco 3: palpação e liberação miofascial',
        objetivos: ['Identificar o ponto de dor e iniciar a liberação já na avaliação'],
        conteudo: [
          'Identificar o ponto álgico e pressionar em 3 ciclos, aumentando a pressão gradativamente conforme a dor diminui',
          'Se a dor não diminuir em 3 tentativas, parar de manipular esse músculo naquele dia, pois estressa mais do que libera',
          'Músculos citados: ilíaco (pressionar contra a parede da crista ilíaca), glúteo médio, glúteo máximo e piriforme, adutores, tensor da fáscia lata, fibulares (almofada entre os joelhos), tibial posterior e fáscia plantar',
          'Em pacientes de quadril e joelho, liberar principalmente os músculos da primeira coluna; nos de tornozelo, também os da segunda coluna',
          'Cuidar do conforto do paciente na maca. A liberação precede o fortalecimento'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['O resumo repete que o fortalecimento é o que de fato resolve. Para os exercícios, ver o protocolo do CPL']
      },
      {
        nome: 'Bloco 4: testes especiais de quadril e joelho',
        objetivos: ['Usar os testes para excluir hipóteses e confirmar a causa da dor'],
        conteudo: [
          'Os testes especiais dizem mais o que o paciente NÃO tem do que o que ele tem',
          'Thomas: se positivo (quadril não fica neutro), perguntar o que sente. Dor anterior sugere psoas contraturado: liberar, e não alongar. Dor posterior sugere impacto articular',
          'Ober adaptado: avalia encurtamento do trato iliotibial, estabilizando a crista ilíaca para a pelve não cair',
          'Patrick (FABER): estabilizar a crista ilíaca contralateral e empurrar a perna para a maca. Dor anterior: psoas; medial da coxa: adutores; posterior no meio dos glúteos: impacto articular; sacroilíaca: alteração da articulação',
          'Sinal de Drehmann: flexão passiva do quadril. Se houver abdução durante o movimento, sugere impacto femoroacetabular',
          'Mapa de dor do joelho: pedir que o paciente aponte a dor (patelar: logo abaixo da patela; Hoffa: em pinça; pata de ganso: medial, perto da tuberosidade anterior da tíbia; femoropatelar: difusa anterior; menisco: interlinha; quadricipital: acima da patela; posterior: cabeça da fíbula ou cisto de Baker) e depois confirmar com testes',
          'LCA: gaveta anterior (joelho a 90°, tirar o tecido mole antes) e Lachman (15 a 20°, estabilizar o fêmur). LCP: observar o alinhamento da patela e da tuberosidade antes da gaveta posterior, para não gerar falso positivo de LCA; teste de Godfrey. Canto póstero-lateral: Dial test a 20° de flexão comparando os lados',
          'Colaterais: estresse em valgo (medial) ou varo (lateral) a 0°, 15° e 30°, comparando os lados',
          'Meniscos: sinal de Espinho (flexão máxima, rodando a tíbia), McMurray, compressão de Appley (perguntar se dói medial ou lateral e parar quando houver dor)',
          'Femoropatelar: raspagem da patela contra a tróclea. Para diferenciar tendinopatia patelar de Hoffa, comparar a dor ao pressionar o tendão e ao pressioná-lo em pinça (mais dor em pinça sugere Hoffa)',
          'Mapa do tornozelo e do pé: fascite plantar, ligamento talofibular anterior e estruturas laterais (inversão), Aquiles (inserção ou ao longo do tendão) e deltoide (eversão)'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Nenhum teste isolado fecha o diagnóstico: ver a seção "O que a literatura mostra" e combinar com a história e o mapa de dor']
      }
    ],
    evidencia: [
      'LCA: em meta-análise de 28 estudos, o teste de Lachman teve sensibilidade de 85% e especificidade de 94%, o pivot shift teve especificidade de 98% e sensibilidade de 24%, e a gaveta anterior teve 92% e 91% no quadro crônico, mas não no agudo. Recomenda-se o Lachman e, se possível, o pivot shift (Benjaminse et al., 2006).',
      'Menisco: McMurray teve sensibilidade de 70% e especificidade de 71%, Apley 60% e 70%, e dor na interlinha 63% e 77%, com resultados muito variáveis. Nenhum teste isolado diagnostica bem a lesão meniscal (Hegedus et al., 2007).',
      'Quadril: os testes de flexão-adução-rotação interna e de flexão-rotação interna (que correspondem aos de impacto) têm sensibilidade alta (cerca de 94 a 99%), mas só servem como triagem, e poucos testes de quadril foram estudados com qualidade suficiente (Reiman et al., 2015). Isso apoia a ideia do resumo de que os testes servem para excluir.',
      'Não encontrei na PubMed estudo que sustente: a liberação miofascial em 3 ciclos antes do fortalecimento, a regra de parar após 3 tentativas, a recomendação de não alongar o psoas e os sinais de Patrick e Drehmann com a interpretação dada na aula. Tratar como orientação clínica da liga.'
    ],
    refs: [
      'Benjaminse A, Gokeler A, van der Schans CP. Clinical diagnosis of an anterior cruciate ligament rupture: a meta-analysis. J Orthop Sports Phys Ther. 2006;36(5):267-288. doi:10.2519/jospt.2006.2011',
      'Hegedus EJ, Cook C, Hasselblad V, Goode A, McCrory DC. Physical examination tests for assessing a torn meniscus in the knee: a systematic review with meta-analysis. J Orthop Sports Phys Ther. 2007;37(9):541-550. doi:10.2519/jospt.2007.2560',
      'Reiman MP, Goode AP, Cook CE, Hölmich P, Thorborg K. Diagnostic accuracy of clinical tests for the diagnosis of hip femoroacetabular impingement/labral tear: a systematic review with meta-analysis. Br J Sports Med. 2015;49(12):811. doi:10.1136/bjsports-2014-094302'
    ]
  },
  {
    id: 'dfp', nome: 'Dor femoropatelar (III Congresso da Fisioortopedia)', fonte: 'liga',
    aviso: 'Base: anotações da palestra "Dor femoropatelar" do III Congresso da Fisioortopedia (dia 1). São notas de congresso, não um protocolo com fases e doses. A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'A explicação da dor femoropatelar mudou: do vasto medial oblíquo (VMO) para o valgo dinâmico e o fortalecimento do CPL, e agora para uma visão biopsicossocial, em que o exercício não precisa ser tão específico. O foco é dar boa informação, fugir de nocebos, reduzir o sintoma rápido e individualizar.',
    avaliacao: [
      'Perfil do paciente: individualizar (por exemplo, bailarina com hipotonia de quadríceps, extensão restrita e sinal de leg x corredor de 10 km com dor nos últimos quilômetros)',
      'Força: às vezes o paciente é forte e mesmo assim tem dor, e às vezes não precisa ganhar força para melhorar',
      'Fatores biopsicossociais, como catastrofização e medo do movimento',
      'Step-down lateral para observar a mecânica (ver seção Testes)'
    ],
    fases: [
      {
        nome: 'Bloco 1: raciocínio e comunicação',
        objetivos: ['Reduzir o sintoma rápido e evitar nocebo'],
        conteudo: [
          'Dar boa informação e desmistificar a patologia: evitar frases como "você sente dor porque seu movimento é assim"',
          'Fugir de nocebos e dar ao paciente novos estímulos para que ele perceba que pode se mover sem dor',
          'Usar recursos como a joelheira como apoio, para mudar o sintoma',
          'Deixar o "ego terapêutico" de lado e focar no que de fato melhora o paciente',
          'Não ser restritivo com carga (corrida, etc.) nem supervalorizar o exame de imagem'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['A relação entre dor e catastrofização pode ser maior do que entre dor e fraqueza']
      },
      {
        nome: 'Bloco 2: exercício e carga',
        objetivos: ['Melhorar a função com exercícios próximos da tarefa do paciente'],
        conteudo: [
          'Fortalecer controlando o valgo ou sem controlar o valgo teve resultados parecidos em todos os desfechos, na dor femoropatelar (segundo a palestra)',
          'Exercícios mais globais e próximos da função, com ativações com sobrecarga, nem sempre precisam gerar ganho de força',
          'Trabalhar o músculo dentro da tarefa (a análise de movimento mostrou que o cérebro ativa sinergias, e não um músculo isolado)',
          'O que se acreditava funcionar continua funcionando: o que mudou foi a explicação do mecanismo de alívio da dor'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Ver os protocolos de CPL do quadril e de alívio da dor para exercícios e recursos']
      }
    ],
    evidencia: [
      'O consenso de 2018 do retiro internacional de dor femoropatelar apoia o exercício terapêutico (principalmente a combinação de exercícios focados em quadril e joelho), as intervenções combinadas e as órteses plantares para dor e função. Não recomenda mobilizações isoladas (patelofemoral, joelho ou lombar) nem agentes eletrofísicos, e há incerteza sobre taping, joelheira, agulhamento e terapia manual de partes moles (Collins et al., 2018).',
      'O consenso de 2016 define terminologia, exame clínico e história natural, e recomenda as intervenções físicas (exercício, taping, órtese, calçado e outras) (Crossley et al., 2016a e 2016b).',
      'A reabilitação proximal (quadril) combinada ao quadríceps reduz a dor e melhora a função a curto prazo, com evidência forte (Lack et al., 2015).',
      'Taping, joelheira, vibração de corpo inteiro e biofeedback não acrescentaram benefício ao exercício isolado (certeza muito baixa). Estimulação elétrica neuromuscular e diatermia dielétrica monopolar pareceram melhorar a dor (Souto et al., 2024).',
      'Combinar exercícios de joelho e quadril com feedback interno foi o que mais reduziu movimentos frontais do joelho (evidência moderada). Joelheira e taping isolados não mostraram efeito sobre o movimento (Nunes et al., 2023).',
      'Do resumo da palestra, não foram verificadas em estudo próprio as frases sobre "fortalecer controlando ou não controlando o valgo ter o mesmo resultado" e sobre catastrofização x fraqueza: tratar como a visão do palestrante e confirmar com o orientador.'
    ],
    refs: [
      'Collins NJ, Barton CJ, van Middelkoop M, et al. 2018 Consensus statement on exercise therapy and physical interventions (orthoses, taping and manual therapy) to treat patellofemoral pain: recommendations from the 5th International Patellofemoral Pain Research Retreat, Gold Coast, Australia, 2017. Br J Sports Med. 2018;52(18):1170-1178. doi:10.1136/bjsports-2018-099397',
      'Crossley KM, Stefanik JJ, Selfe J, et al. 2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat, Manchester. Part 1: terminology, definitions, clinical examination, natural history, patellofemoral osteoarthritis and patient-reported outcome measures. Br J Sports Med. 2016;50(14):839-843. doi:10.1136/bjsports-2016-096384',
      'Crossley KM, van Middelkoop M, Callaghan MJ, Collins NJ, Rathleff MS, Barton CJ. 2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat, Manchester. Part 2: recommended physical interventions (exercise, taping, bracing, foot orthoses and combined interventions). Br J Sports Med. 2016;50(14):844-852. doi:10.1136/bjsports-2016-096268',
      'Lack S, Barton C, Sohan O, Crossley K, Morrissey D. Proximal muscle rehabilitation is effective for patellofemoral pain: a systematic review with meta-analysis. Br J Sports Med. 2015;49(21):1365-1376. doi:10.1136/bjsports-2015-094723',
      'Souto LR, De Oliveira Silva D, Pazzinatto MF, Siqueira MS, Moreira RFC, Serrão FV. Are adjunct treatments effective in improving pain and function when added to exercise therapy in people with patellofemoral pain? A systematic review with meta-analysis. Br J Sports Med. 2024;58(14):792-804. doi:10.1136/bjsports-2024-108145',
      'Nunes GS, de Oliveira J, Iacob GS, et al. Effectiveness of interventions aimed at changing movement patterns in people with patellofemoral pain: a systematic review with network meta-analysis. J Orthop Sports Phys Ther. 2023;53(12):748-760. doi:10.2519/jospt.2023.11956'
    ]
  },
  {
    id: 'lesao-muscular', nome: 'Lesão muscular: como ser mais assertivo (III Congresso)', fonte: 'liga',
    aviso: 'Base: anotações da palestra "Lesões musculares: como ser mais assertivo" do III Congresso da Fisioortopedia (dia 2). São notas, não um protocolo com doses. As figuras não foram lidas. A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'O tempo de reparo biológico (cerca de 28 dias) não é sempre igual ao tempo de afastamento, e a classificação em graus não gera diretrizes nem prognóstico bons. A reabilitação deve ser dinâmica, com função desde o início, carga progressiva e exercícios de alongamento excêntrico controlado, e a alta deve se basear em critérios, não só no tempo.',
    avaliacao: [
      'Anamnese e exame físico precisam conversar: um hematoma grande não significa lesão grave',
      'Identificar o quanto a lesão é estrutural e o quanto é funcional: se mais estrutural, a ênfase passiva e anti-inflamatória inicial pode ser maior',
      'Se a lesão estende ao tecido conjuntivo (junção miotendínea ou tendão), o afastamento tende a ser maior',
      'Mecanismo e gesto: "o que você fez quando sentiu?", para expor a esse gesto durante a reabilitação',
      'Reavaliar sempre, inclusive como o atleta dormiu e como foi o dia (questionário pré-treino, tabela Aspetar)'
    ],
    fases: [
      {
        nome: 'Bloco 1: princípios',
        objetivos: ['Estimular regeneração em vez de apenas reparo e manter o atleta funcional'],
        conteudo: [
          'A reabilitação não deve ser "encaixotada" em fases: as condutas se sobrepõem, com ênfases diferentes. Ativação muscular já no primeiro dia',
          'Dar função: não exagerar na proteção. Em geral a lesão é de um músculo, e não de todo o grupo, então é possível dar carga aos músculos do grupo que não foram lesados (por exemplo, extensão do quadril com a cabeça longa em lesão da cabeça curta do bíceps femoral)',
          'Nos primeiros dias, atividades leves, como passes fracos de bola, ajudam o atleta a se sentir bem e não geram risco',
          'Dor durante o exercício até 4 na escala visual pode; mais que isso, parar. No dia seguinte, se doeu, a intensidade foi errada: ajustar a carga, sem desistir do exercício. Na fase aguda, o autor prefere não expor à dor',
          'Introduzir exercícios excêntricos de forma controlada (Askling) e criar progressões próprias',
          'Em atleta reincidente: ver a demanda específica e normatizar a força, porque equilibrado não é o mesmo que forte. Expor gradualmente ao gesto e adicionar carga'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['O processo não é linear: há modulação entre dor e não dor', 'Relacionar a queixa com a carga de treino da equipe']
      },
      {
        nome: 'Bloco 2: critérios de alta e prevenção',
        objetivos: ['Decidir a alta por critérios funcionais'],
        conteudo: [
          'Alongamento indolor',
          'Função indolor',
          'H-test de Askling indolor nos isquiotibiais, e adaptação para outros grupos com contração pliométrica do antagonista (por exemplo, abdução rápida de quadril para avaliar a dor nos adutores)',
          'Tempo não é bom critério',
          'Prevenção: fortalecimento, controle de carga, nórdico e Copenhagen'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Em queixas diárias de dor sem lesão, o controle de carga é o principal recurso (o palestrante cita termografia, sem referência)', 'Contusão direta ("tostão"): o resumo não traz conduta']
      }
    ],
    evidencia: [
      'O consenso de Munique propõe a classificação em 4 tipos: distúrbios funcionais (tipo 1, por esforço, e tipo 2, neuromuscular) e lesões estruturais (tipo 3, ruptura parcial, e tipo 4, ruptura subtotal ou total ou avulsão tendinosa) (Mueller-Wohlfahrt et al., 2013).',
      'Em 56 velocistas e saltadores de elite com lesão aguda de isquiotibiais, o protocolo com exercícios de alongamento (L-protocol) teve retorno em média de 49 dias, contra 86 dias do protocolo convencional. Lesões com o tendão livre proximal envolvido demoraram mais (Askling et al., 2014).',
      'Em 90 homens com lesão aguda, iniciar exercícios de alongamento no dia 1 ou depois de correr a 70% da velocidade máxima não mudou o tempo de retorno (23 contra 33 dias, diferença sem significância) nem a recidiva (Vermeulen et al., 2022). Ou seja, a introdução precoce é segura, mas o ganho de tempo não foi demonstrado.',
      'A classificação britânica BAMIC usa a RM e o local da lesão (miofascial, junção miotendínea ou intratendínea) e grau de 0 a 4, e associa cada tipo a um plano de reabilitação (Macdonald et al., 2019).',
      'Do resumo, não foram encontrados em estudo: o limite de dor 4 para cada exercício e a alta pelo H-test adaptado a outros grupos. Tratar como prática da palestra e confirmar com o orientador.'
    ],
    refs: [
      'Mueller-Wohlfahrt HW, Haensel L, Mithoefer K, et al. Terminology and classification of muscle injuries in sport: the Munich consensus statement. Br J Sports Med. 2013;47(6):342-350. doi:10.1136/bjsports-2012-091448',
      'Askling CM, Tengvar M, Tarassova O, Thorstensson A. Acute hamstring injuries in Swedish elite sprinters and jumpers: a prospective randomised controlled clinical trial comparing two rehabilitation protocols. Br J Sports Med. 2014;48(7):532-539. doi:10.1136/bjsports-2013-093214',
      'Vermeulen R, Whiteley R, van der Made AD, et al. Early versus delayed lengthening exercises for acute hamstring injury in male athletes: a randomised controlled clinical trial. Br J Sports Med. 2022;56(14):792-800. doi:10.1136/bjsports-2020-103405',
      'Macdonald B, McAleer S, Kelly S, Chakraverty R, Johnston M, Pollock N. Hamstring rehabilitation in elite track and field athletes: applying the British Athletics Muscle Injury Classification in clinical practice. Br J Sports Med. 2019;53(23):1464-1473. doi:10.1136/bjsports-2017-098971'
    ]
  },
  {
    id: 'sifa', nome: 'Síndrome do impacto femoroacetabular, SIFA (III Congresso)', fonte: 'liga',
    aviso: 'Base: anotações da última palestra do III Congresso da Fisioortopedia ("Estado da arte na reabilitação da síndrome do impacto femoroacetabular"). São notas, não um protocolo com doses. As figuras não foram lidas. A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'O diagnóstico de SIFA exige sintomas, sinais clínicos e imagem juntos: alterações de cam e pincer existem também em quem não tem dor. O tratamento conservador, com terapia ativa por pelo menos 3 meses, vem antes da cirurgia, com carga e amplitude progressivas e exposição gradual aos movimentos que doem.',
    avaliacao: [
      'Para confirmar SIFA, 3 condições juntas: sintomas, sinais clínicos e imagem (cam: "calo ósseo" anormal na cabeça do fêmur; pincer: sobrecobertura acetabular)',
      'Dor na virilha, mas pode ser em "C" (lateral e posterior), de início insidioso, em atividades do dia a dia ou específicas, também em jovens',
      'Não há relação forte entre grau de lesão condral, testes positivos e intensidade da dor',
      'Não há um grupo muscular específico causal: há fraqueza geral dos músculos do quadril'
    ],
    fases: [
      {
        nome: 'Bloco 1: tratamento conservador',
        objetivos: ['Melhorar a função e tolerância à carga antes de pensar em cirurgia'],
        conteudo: [
          'Terapia ativa por pelo menos 3 meses, antes da cirurgia',
          'Treinar todo o membro inferior com progressão de carga e de amplitude, expondo ao movimento sem agredir',
          'Fortalecer também adutores e buscar simetria entre os membros (prática da palestrante), e ativar os flexores do quadril de forma gradual (por exemplo, SLR com o joelho fletido e fora da maca)',
          'Trabalhar tronco e quadril é melhor do que só quadril: incluir o core de forma dinâmica',
          'Elevação pélvica com step como exemplo de exercício'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['No resumo da aula de anatomia, a liga recomenda evitar fortalecer adutores em SIFA. A palestra diz o contrário: confirmar com o orientador']
      },
      {
        nome: 'Bloco 2: exposição à função e modulação',
        objetivos: ['Reintegrar o paciente às atividades que provocam a dor'],
        conteudo: [
          'Introduzir a função específica, expondo ao ângulo e à ação muscular que dói, mas "fora de contexto" (por exemplo, simular entrar no carro na clínica, de forma gradual)',
          'A atividade deve entrar independente de haver dor (escala 0 a 4) e a carga e a exposição são moduladas',
          'Se o paciente acha que a dor não vai piorar o quadro no dia seguinte, pode fazer a atividade com dor moderada'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Reavaliar no dia seguinte para ajustar a carga']
      }
    ],
    evidencia: [
      'O acordo de Warwick define a SIFA como uma condição clínica com 3 componentes: sintomas, sinais clínicos e achados de imagem (Griffin et al., 2016).',
      'Alterações de cam e pincer são comuns em voluntários assintomáticos: 37% para cam e 67% para pincer em uma revisão, com média de ângulo alfa de 54° (Frank et al., 2015). O cam é mais frequente em atletas do que em assintomáticos (Mascarenhas et al., 2016).',
      'O consenso de Zurique para dor relacionada ao quadril recomenda tratamento com exercício, com duração de pelo menos 3 meses, reabilitação com fisioterapeuta após cirurgia, atividade física e esporte, educação, decisão compartilhada e monitoramento com medidas de desfecho, de capacidade física e de fatores psicossociais (Kemp et al., 2020).',
      'Ensaios comparando cuidado com fisioterapeuta e artroscopia incluem o estudo australiano FASHIoN (Murphy et al., 2022, análise secundária). Os resultados principais não foram revisados aqui: consultar o artigo original antes de citar.',
      'A afirmação do resumo de que adutores devem ser fortalecidos na SIFA não foi encontrada em estudo, e conflita com o resumo de anatomia: confirmar com o orientador.'
    ],
    refs: [
      'Griffin DR, Dickenson EJ, O\'Donnell J, et al. The Warwick Agreement on femoroacetabular impingement syndrome (FAI syndrome): an international consensus statement. Br J Sports Med. 2016;50(19):1169-1176. doi:10.1136/bjsports-2016-096743',
      'Frank JM, Harris JD, Erickson BJ, et al. Prevalence of femoroacetabular impingement imaging findings in asymptomatic volunteers: a systematic review. Arthroscopy. 2015;31(6):1199-1204. doi:10.1016/j.arthro.2014.11.042',
      'Mascarenhas VV, Rego P, Dantas P, et al. Imaging prevalence of femoroacetabular impingement in symptomatic patients, athletes, and asymptomatic individuals: a systematic review. Eur J Radiol. 2016;85(1):73-95. doi:10.1016/j.ejrad.2015.10.016',
      'Kemp JL, Risberg MA, Mosler A, et al. Physiotherapist-led treatment for young to middle-aged active adults with hip-related pain: consensus recommendations from the International Hip-related Pain Research Network, Zurich 2018. Br J Sports Med. 2020;54(9):504-511. doi:10.1136/bjsports-2019-101458',
      'Murphy NJ, Eyles J, Spiers L, et al. Moderators, mediators, and prognostic indicators of treatment with hip arthroscopy or physical therapy for femoroacetabular impingement syndrome: secondary analyses from the Australian FASHIoN trial. Am J Sports Med. 2023;51(1):141-154.'
    ]
  },
  {
    id: 'lcp-canto', nome: 'LCP e canto póstero-lateral do joelho (III Congresso)', fonte: 'liga',
    aviso: 'Base: anotações da palestra "LCP / canto póstero-lateral do joelho: aspectos cirúrgicos e cuidado pós-operatório" do III Congresso (dia 3). São notas de uma palestra de cirurgia, sem protocolo completo. As figuras não foram lidas. A seção "O que a literatura mostra" foi pesquisada no PubMed e é limitada. Revisar com o orientador antes de usar.',
    resumo: 'O LCP é o ligamento mais forte do joelho e raramente se lesiona sozinho: costuma vir junto com o canto póstero-lateral. A cirurgia reconstrói tudo isso, e a conduta pós-operatória muda conforme o caso (avulsão óssea é tratada como fratura). A queixa crônica principal costuma ser dor anterior no joelho, e não instabilidade.',
    avaliacao: [
      'Dial test: comparar a rotação externa da tíbia com o lado sadio, a 30° e a 90° de flexão. O resumo cita diferença de 10° a 15° como sugestiva de lesão do canto, e positivo a 90° como lesão do canto e do LCP',
      'Antes da gaveta posterior, observar o alinhamento entre o ápice da patela e a tuberosidade: o LCP rompido deixa a tíbia posteriorizada (ver o protocolo de avaliação do método FOR)',
      'Principais estruturas passivas do canto: ligamento colateral lateral, tendão do poplíteo e ligamento poplitiofibular'
    ],
    fases: [
      {
        nome: 'Bloco 1: cuidados no pós-operatório',
        objetivos: ['Proteger o enxerto e evitar a artrofibrose'],
        conteudo: [
          'Descarga de peso conforme o tolerado, mas é contraindicada se houve reconstrução do canto póstero-lateral',
          'A amplitude progressiva é melhor antes da 4ª semana para fugir da artrofibrose',
          'Na manipulação para ganho de amplitude, cuidar da posteriorização da tíbia. Em lesão isolada do LCP, rodar a tíbia lateralmente para dar tensão no canto e tirar tensão do LCP. Em lesão combinada do LCP e do canto, rodar medialmente',
          'A literatura recomenda empurrar a tíbia para frente para ganhar flexão. Orientar o paciente e o acompanhante a fazer em casa, sem medo',
          'Mobilização patelar é fundamental, principalmente quando o enxerto é do quadríceps'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Em avulsão óssea, a cirurgia fixa o fragmento com o ligamento: a conduta é de fratura (cuidados com a fixação primeiro), e há menos restrições depois porque não é enxerto']
      }
    ],
    evidencia: [
      'A técnica do dial test importa: a medida do ângulo entre a patela e a tuberosidade da tíbia representou melhor a rotação externa da tíbia do que o ângulo coxa-pé (Alam et al., 2011, cadáver; Jung et al., 2009, 21 pacientes com LCP e canto póstero-lateral). Nos pacientes, reduzir a subluxação posterior da tíbia aumentou a rotação externa medida no dial test.',
      'Em uma revisão de artrofibrose após reconstrução do LCA (que é um problema análogo), o manejo em etapas com reconhecimento precoce tratou mais da metade dos casos sem cirurgia (Ekhtiari et al., 2017). Não encontrei revisão específica de reabilitação do LCP ou do canto póstero-lateral nesta pesquisa.',
      'Não foram encontrados em estudo: os valores de 10° a 15° do dial test, a regra de rotação lateral ou medial da tíbia na mobilização e o prazo de 4 semanas. São conduta do cirurgião palestrante e devem ser confirmados com a equipe médica.'
    ],
    refs: [
      'Alam M, Bull AMJ, Thomas RD, Amis AA. Measurement of rotational laxity of the knee: in vitro comparison of accuracy between the tibia, overlying skin, and foot. Am J Sports Med. 2011;39(12):2575-2581. doi:10.1177/0363546511424872',
      'Jung YB, Lee YS, Jung HJ, Nam CH. Evaluation of posterolateral rotatory knee instability using the dial test according to tibial positioning. Arthroscopy. 2009;25(3):257-261. doi:10.1016/j.arthro.2008.10.007',
      'Ekhtiari S, Horner NS, de Sa D, et al. Arthrofibrosis after ACL reconstruction is best treated in a step-wise approach with early recognition and intervention: a systematic review. Knee Surg Sports Traumatol Arthrosc. 2017;25(12):3929-3937. doi:10.1007/s00167-017-4482-1'
    ]
  },
  {
    id: 'jovem-atleta', nome: 'Lesões de sobrecarga no jovem atleta (III Congresso)', fonte: 'liga',
    aviso: 'Base: anotações da palestra "Lesões de sobrecarga em MMII no jovem atleta" do III Congresso (dia 2). São notas, sem protocolo e sem doses. A seção "O que a literatura mostra" foi pesquisada no PubMed. Revisar com o orientador antes de usar.',
    resumo: 'Em crianças e adolescentes, a placa de crescimento (apófise, onde o músculo se insere; epífise, de crescimento longitudinal) é o ponto fraco: quadríceps (tuberosidade anterior da tíbia), tríceps sural (calcâneo) e trocânter maior são as regiões mais acometidas. Cerca de 90% dos casos são tratados de forma conservadora, com manejo de carga, recuperação e educação.',
    avaliacao: [
      'Contexto da criança: educação física, quantas vezes treina por semana, quanto de impacto recebe (por exemplo, goleiros), como é a recuperação',
      'O jovem pode esconder a lesão para não perder oportunidades',
      'Aspectos biopsicossociais e o desenvolvimento cognitivo: aos 14 anos pode haver contrato importante com um clube'
    ],
    fases: [
      {
        nome: 'Bloco 1: manejo',
        objetivos: ['Reduzir a dor mantendo o jovem ativo e informado'],
        conteudo: [
          'Recursos anti-inflamatórios (crioterapia) e liberação do músculo',
          'Alongamento: citado como recurso com ressalvas ("mas...")',
          'Ativação global, core, CPL e sensório-motor',
          'Foco no grupo muscular envolvido, com progressão: isometria, concêntrico, excêntrico, de bilateral para unilateral',
          'Retorno ao esporte de forma gradual',
          'Educação do jovem e dos pais, desmitificando crenças: "crescer não dói" e "no pain, no gain"',
          'Respeitar a variabilidade de movimento: não tentar fixar um padrão em um corpo que muda a cada semana'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Ainda existem protocolos de alongamento e imobilização, e a metodologia dos estudos é frágil', 'Crianças não são pequenos adultos: não copiar a carga e o fortalecimento de adultos sem pensar']
      }
    ],
    evidencia: [
      'Uma revisão Cochrane de tratamentos não cirúrgicos para lesões apofisárias de membros inferiores concluiu que a evidência é limitada, na maioria de certeza baixa ou muito baixa. Os estudos tinham desfechos heterogêneos e não avaliaram qualidade de vida nem custo (Williams et al., 2026). Em apofisite do calcâneo, a evidência sobre almofada de calcanhar x faixa de calcanhar (heel strap) é muito incerta.',
      'Um estudo piloto de viabilidade testou um programa de exercício e modificação de atividade para a doença de Sever, sem resultados de eficácia (Hanlon et al., 2026).',
      'Os dados do resumo sobre o esporte mais acometido no Brasil (futebol) e os 90% de tratamento conservador não foram verificados em estudo: confirmar com o orientador.'
    ],
    refs: [
      'Williams CM, Krommes K, Paterson KL, Haines T, Caserta A, Thorborg K. Non-surgical treatment for lower limb apophyseal injuries. Cochrane Database Syst Rev. 2026;7:CD015156. doi:10.1002/14651858.CD015156.pub2',
      'Hanlon SL, Seymore KD, Potter MN, Bley BC, Silbernagel KG. The feasibility of a novel exercise therapy and activity modification intervention for patients with Sever\'s disease. Pilot Feasibility Stud. 2026;12. doi:10.1186/s40814-026-01850-6'
    ]
  },
  {
    id: 'aquiles-guideline', nome: 'Tendinopatia de Aquiles (porção média e inserção): guideline e literatura', fonte: 'literatura',
    aviso: 'Montado a partir da diretriz da APTA (JOSPT, revisão 2018) e de ensaios e revisões do PubMed. Não é protocolo da liga. As doses variam entre os estudos: usar como ponto de partida e individualizar. Revisar com o orientador antes de usar.',
    resumo: 'Dor no tendão de Aquiles, na porção média (2 a 6 cm acima da inserção) ou na inserção, pior ao iniciar e com a carga. O tratamento de primeira linha é o exercício com carga progressiva, com educação e manejo de carga, e não o repouso. Porção média e inserção são tratadas de forma diferente: na inserção evita-se a dorsiflexão acima do degrau.',
    avaliacao: [
      'História: início, volume e tipo de treino, mudanças de calçado ou piso, rigidez matinal',
      'Palpação e teste do arco doloroso e Royal London (ver teste na seção de tendinopatia)',
      'Dor ao salto e ao elevar o calcanhar unipodal; força e resistência do tríceps sural (elevações unipodais)',
      'Amplitude de dorsiflexão (teste de lunge) e controle de carga',
      'Questionário VISA-A (seção Questionários) para acompanhar a evolução'
    ],
    fases: [
      {
        nome: 'Fase 1: educação, manejo de carga e isométricos',
        objetivos: ['Reduzir a dor e manter o atleta ativo', 'Dar confiança e controlar a carga'],
        conteudo: [
          'Educação: não é grave nem inflamação simples (tendinopatia); o tendão responde a carga bem dosada',
          'Manter a atividade com um modelo de monitoramento de dor (Silbernagel): o atleta continua a corrida e os saltos enquanto a dor fica dentro do limite do modelo e acalma até o dia seguinte. Os limites exatos devem ser conferidos no artigo original',
          'Isométricos do tríceps sural para analgesia (por exemplo, elevação do calcanhar sustentada), com séries e repouso conforme tolerância',
          'Reduzir picos de carga (saltos, sprint, subidas) em vez de parar'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dor controlada nas atividades diárias e no isométrico, sem piora na manhã seguinte']
      },
      {
        nome: 'Fase 2: fortalecimento progressivo (excêntrico ou HSR)',
        objetivos: ['Aumentar a capacidade do tríceps sural e a tolerância do tendão'],
        conteudo: [
          'Treino excêntrico clássico (Alfredson) ou treino de força lento e pesado (HSR): os dois deram resultados clínicos semelhantes em 12 semanas, com maior adesão ao HSR',
          'Elevação do calcanhar com o joelho estendido e com o joelho fletido (para o sóleo), progredindo a carga com mochila ou pesos',
          'Na tendinopatia insercional, fazer a elevação no chão ou em degrau sem descer abaixo do nível, para evitar compressão do tendão contra o calcâneo',
          'Fortalecer o membro todo, incluindo glúteos e quadríceps'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Elevações unipodais com carga e boa qualidade, dor estável ou em queda, e VISA-A melhorando']
      },
      {
        nome: 'Fase 3: energia elástica, pliometria e retorno',
        objetivos: ['Treinar armazenamento e liberação de energia e voltar ao esporte'],
        conteudo: [
          'Pliometria progressiva: saltitos bilaterais, unipodais, saltos em profundidade e deslocamentos',
          'Corrida e mudança de direção graduais, com monitoramento de dor',
          'Retorno ao esporte por critérios (força, salto e dor), não só por tempo',
          'Trabalhar com o preparador físico a especificidade do esporte'
        ],
        rotuloCriterios: 'Critérios de retorno',
        criterios: ['Força de panturrilha próxima do lado oposto, saltos sem dor e sem piora no dia seguinte', 'Os valores de corte devem ser definidos com o orientador']
      }
    ],
    evidencia: [
      'A diretriz da APTA (revisão 2018) reúne as recomendações de avaliação e manejo da tendinopatia da porção média do Aquiles, com exercício com carga como base (Martin et al., 2018).',
      'O treino excêntrico de 12 semanas melhorou a dor e a força e levou 15 corredores recreativos de volta ao nível anterior (Alfredson et al., 1998). O protocolo clássico usa carga alta e progressiva; as séries e as repetições exatas devem ser conferidas no artigo original.',
      'Em 58 pacientes, treino excêntrico e HSR deram resultados clínicos iguais em 12 e 52 semanas, com maior adesão ao HSR (92% contra 78%) (Beyer et al., 2015).',
      'Continuar o esporte com monitoramento de dor durante a reabilitação não prejudicou o resultado (Silbernagel et al., 2007). Uma proposta de programa de retorno ao esporte descreve as etapas e a racionalização (Silbernagel e Crossley, 2015).',
      'Uma revisão com meta-análise em rede de 29 ensaios comparou tratamentos para a tendinopatia de Aquiles: não houve diferença clinicamente relevante entre os tratamentos ativos em 3 e 12 meses, esperar e ver não é recomendado, e nenhum ensaio tinha baixo risco de viés, com grande incerteza nas estimativas. Os autores sugerem começar por um programa de exercício de panturrilha, por ser simples, barato e com poucos danos (van der Vlist et al., 2021).',
      'Na tendinopatia insercional, um regime adaptado de excêntrico (sem dorsiflexão abaixo do degrau) foi descrito em estudo piloto (Jonsson et al., 2008), e o excêntrico foi comparado com ondas de choque em um ensaio (Rompe et al., 2008).'
    ],
    refs: [
      'Martin RL, Chimenti R, Cuddeford T, et al. Achilles pain, stiffness, and muscle power deficits: midportion Achilles tendinopathy revision 2018. J Orthop Sports Phys Ther. 2018;48(5):A1-A38. doi:10.2519/jospt.2018.0302',
      'Alfredson H, Pietilä T, Jonsson P, Lorentzon R. Heavy-load eccentric calf muscle training for the treatment of chronic Achilles tendinosis. Am J Sports Med. 1998;26(3):360-366. doi:10.1177/03635465980260030301',
      'Beyer R, Kongsgaard M, Hougs Kjær B, Øhlenschlæger T, Kjær M, Magnusson SP. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy: a randomized controlled trial. Am J Sports Med. 2015;43(7):1704-1711. doi:10.1177/0363546515584760',
      'Silbernagel KG, Thomeé R, Eriksson BI, Karlsson J. Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy: a randomized controlled study. Am J Sports Med. 2007;35(6):897-906. doi:10.1177/0363546506298279',
      'Silbernagel KG, Crossley KM. A proposed return-to-sport program for patients with midportion Achilles tendinopathy: rationale and implementation. J Orthop Sports Phys Ther. 2015;45(11):876-886. doi:10.2519/jospt.2015.5885',
      'van der Vlist AC, Winters M, Weir A, et al. Which treatment is most effective for patients with Achilles tendinopathy? A living systematic review with network meta-analysis of 29 randomised controlled trials. Br J Sports Med. 2021;55(5):249-256. doi:10.1136/bjsports-2019-101872',
      'Jonsson P, Alfredson H, Sunding K, Fahlström M, Cook J. New regimen for eccentric calf-muscle training in patients with chronic insertional Achilles tendinopathy: results of a pilot study. Br J Sports Med. 2008;42(9):746-749. doi:10.1136/bjsm.2007.039545',
      'Rompe JD, Furia J, Maffulli N. Eccentric loading compared with shock wave treatment for chronic insertional Achilles tendinopathy: a randomized, controlled trial. J Bone Joint Surg Am. 2008;90(1):52-61. doi:10.2106/jbjs.f.01494'
    ]
  },
  {
    id: 'menisco-guideline', nome: 'Lesão meniscal: manejo conservador e pós-operatório (guideline e literatura)', fonte: 'literatura',
    aviso: 'Montado a partir de ensaios, de um guideline do BMJ e de revisões do PubMed. Não é protocolo da liga. A conduta após sutura meniscal varia muito entre cirurgiões: seguir sempre o protocolo da equipe cirúrgica. Revisar com o orientador antes de usar.',
    resumo: 'Lesão degenerativa em adultos de meia-idade: exercício supervisionado é a primeira linha, e a artroscopia não se mostrou superior. Lesão traumática em jovem (reparável) segue o protocolo do cirurgião, com progressão de carga e amplitude e retorno por critérios.',
    avaliacao: [
      'Mecanismo (trauma x degenerativo), idade, bloqueio verdadeiro e sintomas mecânicos',
      'Testes clínicos de menisco (McMurray, Apley e dor na interlinha) têm acurácia limitada isoladamente: combinar com história e exame (ver avaliação do método FOR)',
      'Derrame, amplitude, força de quadríceps e isquiotibiais, e controle em apoio unipodal',
      'Questionários: KOOS e IKDC (seção Questionários)'
    ],
    fases: [
      {
        nome: 'Fase 1: tratamento conservador (lesão degenerativa)',
        objetivos: ['Reduzir dor e derrame', 'Recuperar força e função sem cirurgia'],
        conteudo: [
          'Exercício supervisionado de força e controle neuromuscular do membro inferior por cerca de 12 semanas, com progressão de carga',
          'Educação: lesão degenerativa é comum e muitas vezes não explica sozinha a dor; manter a atividade',
          'Evitar posições de agachamento profundo e torção sob carga enquanto houver sintomas mecânicos',
          'Reavaliar em 12 semanas: se não houver melhora ou houver bloqueio verdadeiro, encaminhar'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Bloqueio articular verdadeiro (não consegue estender) é sinal para encaminhamento', '19% do grupo de exercício acabou operando no ensaio de 2 anos, sem benefício adicional']
      },
      {
        nome: 'Fase 2: pós-operatório de meniscectomia parcial',
        objetivos: ['Voltar a andar sem dor e recuperar a amplitude e a força'],
        conteudo: [
          'Carga conforme tolerância, amplitude completa o quanto antes e controle do derrame',
          'Fortalecer quadríceps e isquiotibiais e treinar controle neuromuscular',
          'Progredir para corrida e gestos esportivos por critérios de força e ausência de derrame'
        ],
        rotuloCriterios: 'Critérios',
        criterios: ['Sem derrame, amplitude completa e força próxima do lado oposto, definidos com o cirurgião e o orientador']
      },
      {
        nome: 'Fase 3: pós-operatório de sutura meniscal',
        objetivos: ['Proteger a sutura e recuperar a função'],
        conteudo: [
          'Os protocolos variam muito. Em uma revisão, a amplitude precoce e a descarga de peso imediata não prejudicaram a taxa de sucesso clínico',
          'Restrições de flexão profunda e de torção sob carga costumam ser mantidas nas primeiras semanas, conforme a técnica e o tipo de lesão',
          'Seguir o protocolo escrito do cirurgião e comunicar qualquer dor ou bloqueio'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Não há consenso sobre o ideal de descarga e amplitude: usar o protocolo da equipe cirúrgica']
      }
    ],
    evidencia: [
      'Em um ensaio com pacientes de meia-idade com lesão meniscal degenerativa e sem artrose evidente, o exercício supervisionado não diferiu da meniscectomia parcial em 2 anos, e 19% do grupo de exercício acabou operando. O exercício melhorou mais a força da coxa a curto prazo (Kise et al., 2016).',
      'O guideline do BMJ recomenda de forma forte contra a artroscopia na maioria dos pacientes com doença degenerativa do joelho e lesão meniscal (Siemieniuk et al., 2017).',
      'O estudo FIDELITY comparou a meniscectomia parcial com cirurgia placebo na lesão degenerativa: sem diferença em 2 e em 5 anos (Sihvonen et al., 2018 e 2020).',
      'Uma síntese de revisões para o consenso OPTIKNEE concluiu que a evidência da reabilitação após lesões de LCA e menisco é, em geral, de baixa certeza: o exercício melhora a força do quadríceps, e a órtese não alterou a função (Culvenor et al., 2022).',
      'Uma revisão dos protocolos após sutura meniscal encontrou grande variação entre estudos: a amplitude precoce e a descarga de peso imediata não pareceram prejudicar o resultado, sem consenso sobre o ideal (O\'Donnell et al., 2017).'
    ],
    refs: [
      'Kise NJ, Risberg MA, Stensrud S, Ranstam J, Engebretsen L, Roos EM. Exercise therapy versus arthroscopic partial meniscectomy for degenerative meniscal tear in middle aged patients: randomised controlled trial with two year follow-up. BMJ. 2016;354:i3740. doi:10.1136/bmj.i3740',
      'Siemieniuk RAC, Harris IA, Agoritsas T, et al. Arthroscopic surgery for degenerative knee arthritis and meniscal tears: a clinical practice guideline. BMJ. 2017;357:j1982. doi:10.1136/bmj.j1982',
      'Sihvonen R, Paavola M, Malmivaara A, et al. Arthroscopic partial meniscectomy versus placebo surgery for a degenerative meniscus tear: a 2-year follow-up of the randomised controlled trial. Ann Rheum Dis. 2018;77(2):188-195. doi:10.1136/annrheumdis-2017-211172',
      'Sihvonen R, Paavola M, Malmivaara A, et al. Arthroscopic partial meniscectomy for a degenerative meniscus tear: a 5 year follow-up of the placebo-surgery controlled FIDELITY (Finnish Degenerative Meniscus Lesion Study) trial. Br J Sports Med. 2020;54(22):1332-1339. doi:10.1136/bjsports-2020-102813',
      'Culvenor AG, Girdwood MA, Juhl CB, et al. Rehabilitation after anterior cruciate ligament and meniscal injuries: a best-evidence synthesis of systematic reviews for the OPTIKNEE consensus. Br J Sports Med. 2022;56(24):1445-1453. doi:10.1136/bjsports-2022-105495',
      'O\'Donnell K, Freedman KB, Tjoumakaris FP. Rehabilitation protocols after isolated meniscal repair: a systematic review. Am J Sports Med. 2017;45(7):1687-1697. doi:10.1177/0363546516667578'
    ]
  },
  {
    id: 'ombro-manguito', nome: 'Dor no ombro relacionada ao manguito rotador (impacto subacromial)', fonte: 'literatura',
    aviso: 'Montado a partir de revisões sistemáticas e de um guideline do BMJ do PubMed. Não é protocolo da liga. Evidência de qualidade variável e doses pouco padronizadas. Revisar com o orientador antes de usar.',
    resumo: 'Dor no ombro, em geral ao elevar o braço, relacionada ao manguito e à bursa subacromial. O exercício progressivo, supervisionado ou domiciliar, é a base do tratamento. A descompressão subacromial cirúrgica não deve ser oferecida a esses pacientes.',
    avaliacao: [
      'História: atividade, arremesso ou trabalho acima da cabeça, início e noite',
      'Amplitude ativa e passiva, arco doloroso, rotação medial e lateral (ver testes de ombro na seção Testes)',
      'Força de rotação lateral e medial, e controle escapular (discinese: ver teste)',
      'Descartar origem cervical, ruptura completa e instabilidade',
      'Questionários: SPADI (seção Questionários)'
    ],
    fases: [
      {
        nome: 'Fase 1: educação e redução da irritação',
        objetivos: ['Reduzir dor e proteger o ombro sem imobilizar'],
        conteudo: [
          'Educação: dor no ombro costuma ser uma sobrecarga; manter o movimento e modular a carga',
          'Reduzir provocações (elevação acima da cabeça com carga, dormir sobre o lado, repetições até a dor)',
          'Isométricos de rotação e de elevação em amplitude sem dor, para analgesia',
          'Mobilidade escapular e torácica sem provocar dor'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dor nas atividades diárias reduzida e isométricos tolerados']
      },
      {
        nome: 'Fase 2: fortalecimento progressivo',
        objetivos: ['Aumentar a capacidade do manguito e dos estabilizadores da escápula'],
        conteudo: [
          'Fortalecimento progressivo do manguito rotador (rotação lateral e medial, abdução no plano escapular) com elástico e carga',
          'Fortalecimento dos estabilizadores da escápula: serrátil anterior e trapézio inferior e médio',
          'Exercícios excêntricos podem ser incluídos, dentro de uma progressão gradual',
          'Treino supervisionado ou domiciliar progressivo: os dois mostraram benefício'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dor estável durante e após o exercício, amplitude completa e força de rotação simétrica']
      },
      {
        nome: 'Fase 3: função e esporte',
        objetivos: ['Voltar às demandas do esporte ou do trabalho'],
        conteudo: [
          'Exercícios acima da cabeça com carga progressiva e velocidade',
          'Padrões do esporte: arremesso, saque e remada, com volume graduado',
          'Cadeia cinética: tronco, quadril e escápula'
        ],
        rotuloCriterios: 'Critérios de retorno',
        criterios: ['Sem dor no gesto esportivo, força de rotação e estabilidade escapular adequadas. Os valores de corte devem ser definidos com o orientador']
      }
    ],
    evidencia: [
      'Em uma revisão da colaboração OPTIMa, o fortalecimento e o alongamento progressivos, supervisionados ou domiciliares, foram eficazes no impacto subacromial. Na dor inespecífica de baixo grau, o fortalecimento supervisionado e o alongamento foram equivalentes à injeção de corticoide ou ao cuidado multimodal (Abdulla et al., 2015).',
      'Uma revisão sistemática encontrou evidência apenas limitada de apoio ao exercício no impacto subacromial, com 4 de 8 estudos de baixa qualidade (Kelly et al., 2010).',
      'Uma revisão do exercício na tendinopatia do manguito concluiu que a literatura apoia o exercício, mas com poucos estudos e limitações (Littlewood et al., 2012).',
      'O guideline do BMJ recomenda não oferecer a descompressão subacromial a adultos com dor subacromial, porque não há benefício e há danos, como o ombro congelado (Vandvik et al., 2019). Há incerteza sobre qual alternativa é melhor.',
      'As doses (séries, repetições e frequência) variam muito entre os estudos e não há um protocolo único: usar a progressão de carga e a dor para ajustar.'
    ],
    refs: [
      'Abdulla SY, Southerst D, Côté P, et al. Is exercise effective for the management of subacromial impingement syndrome and other soft tissue injuries of the shoulder? A systematic review by the Ontario Protocol for Traffic Injury Management (OPTIMa) Collaboration. Man Ther. 2015;20(5):646-656. doi:10.1016/j.math.2015.03.013',
      'Kelly SM, Wrightson PA, Meads CA. Clinical outcomes of exercise in the management of subacromial impingement syndrome: a systematic review. Clin Rehabil. 2010;24(2):99-109. doi:10.1177/0269215509342336',
      'Littlewood C, Ashton J, Chance-Larsen K, May S, Sturrock B. Exercise for rotator cuff tendinopathy: a systematic review. Physiotherapy. 2012;98(2):101-109. doi:10.1016/j.physio.2011.08.002',
      'Vandvik PO, Lähdeoja T, Ardern C, et al. Subacromial decompression surgery for adults with shoulder pain: a clinical practice guideline. BMJ. 2019;364:l294. doi:10.1136/bmj.l294'
    ]
  },
  {
    id: 'epicondilalgia-lateral', nome: 'Tendinopatia lateral do cotovelo (epicondilalgia lateral)', fonte: 'literatura',
    aviso: 'Montado a partir de revisões sistemáticas e ensaios do PubMed. Não é protocolo da liga. A evidência é de baixa a muito baixa certeza, e as doses variam. Revisar com o orientador antes de usar.',
    resumo: 'Dor na face lateral do cotovelo, que piora ao agarrar e ao estender o punho com carga. A história natural costuma ser favorável. Exercício é a base, com educação e manejo de carga. A injeção de corticoide traz alívio curto e piora a longo prazo.',
    avaliacao: [
      'Dor à palpação do epicôndilo lateral e dor ao extensor do punho contra resistência (teste de Cozen) e ao agarrar',
      'Diferenciar de dor cervical e de compressão do nervo radial',
      'Força de preensão sem dor e com dor, e carga de trabalho ou de esporte (raquete)',
      'Questionários: PRWE (seção Questionários)'
    ],
    fases: [
      {
        nome: 'Fase 1: educação e redução da carga irritativa',
        objetivos: ['Reduzir a dor e orientar a carga'],
        conteudo: [
          'Explicar a evolução favorável e o papel da carga progressiva',
          'Ajustar a atividade que provoca a dor (empunhadura, ferramenta, raquete) sem parar totalmente',
          'Isométricos do extensor do punho em amplitude sem dor, para analgesia',
          'Mobilização com movimento e exercício podem ser usados como adjuvantes'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dor nas tarefas diárias reduzida e isométrico tolerado']
      },
      {
        nome: 'Fase 2: fortalecimento progressivo',
        objetivos: ['Aumentar a capacidade dos extensores do punho e da preensão'],
        conteudo: [
          'Exercício excêntrico e concêntrico dos extensores do punho com carga progressiva (halter leve ou elástico)',
          'Fortalecimento dos flexores e da preensão em progressão',
          'Controle escapular e do ombro como parte da cadeia'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dor estável durante e depois do exercício, e preensão melhorando']
      },
      {
        nome: 'Fase 3: retorno às demandas',
        objetivos: ['Voltar ao esporte ou ao trabalho com carga controlada'],
        conteudo: [
          'Gestos específicos (saque, backhand, movimentos repetitivos) com volume graduado',
          'Ajuste de equipamento (tamanho do cabo, tensão da raquete) como medida de apoio'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['A injeção de corticoide não deve ser a primeira escolha: ver a seção "O que a literatura mostra"']
      }
    ],
    evidencia: [
      'Uma revisão de 30 ensaios (2123 pessoas) concluiu que as intervenções com exercício tiveram melhores resultados do que as passivas, mas o efeito foi pequeno e a certeza da evidência foi baixa ou muito baixa. As descrições de carga, duração e frequência variaram muito (Karanasios et al., 2021).',
      'No ensaio de Bisset et al., a fisioterapia com manipulação do cotovelo e exercício foi superior a esperar e ver nas primeiras 6 semanas e ao corticoide depois de 6 semanas. O benefício do corticoide a curto prazo se inverteu depois de 6 semanas, com altas taxas de recidiva (Bisset et al., 2006).',
      'Em outro ensaio, o sucesso em curto prazo foi de 92% com corticoide, 47% com fisioterapia e 32% esperando; em 52 semanas, foi de 69% com corticoide, 91% com fisioterapia e 83% esperando (Smidt et al., 2002).',
      'Uma revisão sobre o exercício excêntrico na epicondilite concluiu que os achados apoiam incluí-lo em um programa multimodal; um único estudo de baixa qualidade o avaliou isoladamente e não encontrou melhora significativa da dor (Cullinane et al., 2014).'
    ],
    refs: [
      'Karanasios S, Korakakis V, Whiteley R, Vasilogeorgis I, Woodbridge S, Gioftsos G. Exercise interventions in lateral elbow tendinopathy have better outcomes than passive interventions, but the effects are small: a systematic review and meta-analysis of 2123 subjects in 30 trials. Br J Sports Med. 2021;55(9):477-485. doi:10.1136/bjsports-2020-102525',
      'Bisset L, Beller E, Jull G, Brooks P, Darnell R, Vicenzino B. Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow: randomised trial. BMJ. 2006;333(7575):939. doi:10.1136/bmj.38961.584653.ae',
      'Smidt N, van der Windt DA, Assendelft WJ, et al. Corticosteroid injections, physiotherapy, or a wait-and-see policy for lateral epicondylitis: a randomised controlled trial. Lancet. 2002;359(9307):657-662. doi:10.1016/s0140-6736(02)07811-x',
      'Cullinane FL, Boocock MG, Trevelyan FC. Is eccentric exercise an effective treatment for lateral epicondylitis? A systematic review. Clin Rehabil. 2014;28(1):3-19. doi:10.1177/0269215513491974'
    ]
  },
  {
    id: 'mtss', nome: 'Síndrome do estresse tibial medial ("canelite")', fonte: 'literatura',
    aviso: 'Montado a partir de revisões do PubMed. Não é protocolo da liga. A evidência de tratamento é fraca: os próprios autores das revisões dizem que nenhum estudo está livre de viés. Revisar com o orientador antes de usar.',
    resumo: 'Dor difusa na borda posteromedial da tíbia, em corredores e militares, ligada ao aumento da carga. É uma lesão por sobrecarga do osso e das partes moles. O manejo é por carga e fatores de risco, e a evidência de tratamentos específicos é limitada.',
    avaliacao: [
      'Dor à palpação ao longo da borda medial da tíbia (cerca de 5 cm ou mais), que melhora com o aquecimento e piora após o treino',
      'Diferenciar de fratura de estresse (dor focal, dor em repouso e à percussão) e síndrome compartimental',
      'Fatores de risco: IMC, queda do navicular, rotação externa do quadril, amplitude de flexão plantar, volume e piso de treino',
      'Mecânica da corrida e calçado'
    ],
    fases: [
      {
        nome: 'Fase 1: manejo de carga',
        objetivos: ['Reduzir a dor com carga relativa, sem parar totalmente'],
        conteudo: [
          'Reduzir o volume e a intensidade da corrida e dos saltos até a dor permitir, e substituir por atividade sem impacto',
          'Educação sobre a progressão de carga (aumentos graduais)',
          'Gelo e recursos analgésicos conforme necessidade'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dor ao andar ausente e sem dor à palpação importante']
      },
      {
        nome: 'Fase 2: fortalecimento e fatores de risco',
        objetivos: ['Aumentar a capacidade do tríceps sural, do tibial e do pé'],
        conteudo: [
          'Fortalecimento do tríceps sural e dos músculos do pé e do tornozelo',
          'Fortalecimento do quadril (rotadores laterais e abdutores) e controle da pelve',
          'Considerar suporte plantar e calçado conforme o perfil (queda do navicular)',
          'Ajuste da mecânica da corrida (frequência de passos) quando houver sobrecarga evidente'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Elevação unipodal e saltos sem dor e sem dor à palpação']
      },
      {
        nome: 'Fase 3: retorno gradual à corrida',
        objetivos: ['Voltar ao volume anterior com progressão controlada'],
        conteudo: [
          'Corrida em intervalos curtos e aumento do volume em etapas',
          'Evitar piso duro e aumento simultâneo de volume e intensidade',
          'Monitorar a dor no dia seguinte'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['A dor focal persistente ou em repouso exige avaliação por imagem para fratura de estresse']
      }
    ],
    evidencia: [
      'Uma revisão crítica encontrou, em estudos prospectivos, a pronação do pé em pé e o sexo feminino como fatores de risco intrínsecos, e a história prévia da síndrome como fator extrínseco. Em 3 ensaios de tratamento, o repouso foi equivalente a qualquer intervenção (Moen et al., 2009).',
      'Uma revisão sistemática do tratamento concluiu que nenhum estudo estava livre de viés para recomendar uma intervenção; entre as examinadas, as ondas de choque pareceram a mais promissora. Laser de baixa energia, alongamento e fortalecimento, meias de compressão, órteses de perna e campos eletromagnéticos não foram comprovados (Winters et al., 2013).',
      'Em uma revisão e meta-análise de fatores de risco, o IMC, a queda do navicular, a amplitude de flexão plantar e a rotação externa do quadril foram associados à síndrome; a dorsiflexão e o ângulo Q não foram (Hamstra-Wright et al., 2015). Isso sugere por onde começar a abordar os fatores de risco.'
    ],
    refs: [
      'Moen MH, Tol JL, Weir A, Steunebrink M, De Winter TC. Medial tibial stress syndrome: a critical review. Sports Med. 2009;39(7):523-546. doi:10.2165/00007256-200939070-00002',
      'Winters M, Eskes M, Weir A, Moen MH, Backx FJ, Bakker EW. Treatment of medial tibial stress syndrome: a systematic review. Sports Med. 2013;43(12):1315-1333. doi:10.1007/s40279-013-0087-0',
      'Hamstra-Wright KL, Bliven KC, Bay C. Risk factors for medial tibial stress syndrome in physically active individuals such as runners and military personnel: a systematic review and meta-analysis. Br J Sports Med. 2015;49(6):362-369. doi:10.1136/bjsports-2014-093462'
    ]
  },
  {
    id: 'itbs', nome: 'Síndrome da banda iliotibial em corredores', fonte: 'literatura',
    aviso: 'Montado a partir de estudos e revisões do PubMed. Não é protocolo da liga. A evidência de tratamento é limitada, como dizem as próprias revisões. Revisar com o orientador antes de usar.',
    resumo: 'Dor lateral do joelho em corredores, que aparece com cerca de 30° de flexão e piora em descidas e com a distância. Associada à fraqueza dos abdutores do quadril em estudos de corredores. Manejo por carga, fortalecimento do quadril e retorno gradual.',
    avaliacao: [
      'Dor no epicôndilo lateral do fêmur, à palpação e ao agachamento a 30° (teste de Noble)',
      'Força dos abdutores do quadril (dinamometria: ver teste) e controle da pelve no apoio unipodal',
      'Volume e piso de corrida, calçado, cadência e mecânica',
      'Diferenciar de lesão de menisco lateral e tendinopatia do poplíteo'
    ],
    fases: [
      {
        nome: 'Fase 1: redução da irritação',
        objetivos: ['Reduzir a dor e o atrito'],
        conteudo: [
          'Reduzir a corrida até o limite da dor e evitar descidas e piso inclinado',
          'Liberação miofascial e analgesia conforme necessidade',
          'Manter a condição física com atividade sem a dor (bicicleta, natação)'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Caminhar e agachar sem dor lateral']
      },
      {
        nome: 'Fase 2: fortalecimento do quadril',
        objetivos: ['Aumentar a força dos abdutores e o controle da pelve'],
        conteudo: [
          'Fortalecimento dos abdutores e rotadores laterais (ver exercícios de CPL)',
          'Controle do valgo e do alinhamento no agachamento unipodal e no step-down',
          'Progredir de decúbito para apoio unipodal e depois para movimentos funcionais'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Força de abdução simétrica ou melhorada e controle sem queda da pelve']
      },
      {
        nome: 'Fase 3: retorno gradual',
        objetivos: ['Voltar a correr sem recidiva'],
        conteudo: [
          'Corrida em intervalos curtos em piso plano, com aumento gradual do volume',
          'Ajuste da cadência e do calçado, se indicado',
          'Retorno ao volume anterior por etapas'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['A dor deve ser monitorada no dia seguinte; piora exige reduzir a carga']
      }
    ],
    evidencia: [
      'Corredores de longa distância com síndrome da banda iliotibial tinham a abdução do quadril mais fraca no membro afetado do que no não afetado e do que em corredores saudáveis. Com a reabilitação, 22 de 24 atletas ficaram sem dor e voltaram a correr, e a melhora do sintoma acompanhou a melhora da força dos abdutores (Fredericson et al., 2000).',
      'Uma revisão sistemática da síndrome concluiu que há poucos estudos, de baixa qualidade, sobre o tratamento conservador, e que os tratamentos estudados não mostraram benefício significativo (Ellis et al., 2007).',
      'Uma revisão sistemática dos fatores de risco biomecânicos em corredores encontrou associação com maior rotação interna do joelho e inclinação do tronco para o lado ipsilateral no apoio, com limitações (poucos estudos e efeitos pequenos) (Aderem e Louw, 2015).',
      'Uma revisão sobre inovações no tratamento descreve uma abordagem abrangente, com fortalecimento e movimentos integrados, com a qual a maioria dos pacientes se recupera em cerca de 6 semanas. Correr mais rápido agrava menos do que o trote lento, e o volume é aumentado de forma gradual (Fredericson e Wolf, 2005).'
    ],
    refs: [
      'Fredericson M, Cookingham CL, Chaudhari AM, Dowdell BC, Oestreicher N, Sahrmann SA. Hip abductor weakness in distance runners with iliotibial band syndrome. Clin J Sport Med. 2000;10(3):169-175. doi:10.1097/00042752-200007000-00004',
      'Ellis R, Hing W, Reid D. Iliotibial band friction syndrome: a systematic review. Man Ther. 2007;12(3):200-208. doi:10.1016/j.math.2006.08.004',
      'Aderem J, Louw QA. Biomechanical risk factors associated with iliotibial band syndrome in runners: a systematic review. BMC Musculoskelet Disord. 2015;16:356. doi:10.1186/s12891-015-0808-7',
      'Fredericson M, Wolf C. Iliotibial band syndrome in runners: innovations in treatment. Sports Med. 2005;35(5):451-459. doi:10.2165/00007256-200535050-00006'
    ]
  },
  {
    id: 'fascite-plantar-cpg', nome: 'Dor plantar do calcanhar (fascite plantar): diretriz JOSPT', fonte: 'literatura',
    aviso: 'Montado a partir da diretriz da APTA (JOSPT, revisões 2014 e 2023) e de ensaios do PubMed. Não é protocolo da liga. Revisar com o orientador antes de usar.',
    resumo: 'Dor na região plantar do calcanhar, pior nos primeiros passos da manhã e após repouso. O tratamento reúne educação, exercício de força de carga alta, alongamento, suporte plantar e manejo de carga. O exercício de alta carga para a panturrilha e a fáscia teve resultado melhor em 3 meses do que o alongamento isolado.',
    avaliacao: [
      'Dor à palpação da inserção medial da fáscia, dor nos primeiros passos e teste de windlass',
      'Amplitude de dorsiflexão e força do tríceps sural',
      'Peso corporal, tipo de calçado, tipo de pé e volume de carga',
      'Descartar compressão neural e fratura de estresse do calcâneo'
    ],
    fases: [
      {
        nome: 'Fase 1: educação e alívio',
        objetivos: ['Reduzir a dor com suporte e manejo de carga'],
        conteudo: [
          'Educação: condição comum, de boa evolução, relacionada à carga',
          'Suporte plantar (palmilha, calçado adequado) e redução temporária de impacto',
          'Alongamento específico da fáscia e do tríceps sural',
          'Fita ou órtese noturna podem ser usadas em casos selecionados'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dor nos primeiros passos reduzida e carga diária tolerada']
      },
      {
        nome: 'Fase 2: fortalecimento de carga alta',
        objetivos: ['Aumentar a capacidade da fáscia, do tríceps sural e do pé'],
        conteudo: [
          'Elevação unipodal do calcanhar com uma toalha enrolada sob os dedos (dorsiflexão dos dedos), com carga progressiva, em dias alternados',
          'Fortalecimento intrínseco do pé (pé curto)',
          'Progressão de carga, repetições e tempo sob tensão'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Elevação com carga e boa qualidade, dor estável após o exercício']
      },
      {
        nome: 'Fase 3: retorno à corrida e ao esporte',
        objetivos: ['Voltar ao impacto com carga controlada'],
        conteudo: [
          'Caminhada e corrida graduais, com monitoramento da dor da manhã',
          'Pliometria leve e depois específica',
          'Ajuste do calçado e do volume de treino'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Dor persistente por mais de 3 a 6 meses deve ser reavaliada pelo médico']
      }
    ],
    evidencia: [
      'A diretriz da APTA para dor no calcanhar e fascite plantar teve revisão em 2014 e em 2023 e reúne as recomendações de manejo fisioterapêutico (Martin et al., 2014; Koc et al., 2023).',
      'Em 48 pacientes com fascite plantar, todos com palmilha, o treino de força de alta carga (elevação unipodal do calcanhar com toalha sob os dedos, em dias alternados) teve resultado melhor do que o alongamento específico em 3 meses, e sem diferença em 6 e 12 meses (Rathleff et al., 2015).',
      'Uma revisão sistemática do treino de força na fascite plantar e na musculatura intrínseca do pé foi publicada (Huffer et al., 2017).'
    ],
    refs: [
      'Martin RL, Davenport TE, Reischl SF, et al. Heel pain-plantar fasciitis: revision 2014. J Orthop Sports Phys Ther. 2014;44(11):A1-33. doi:10.2519/jospt.2014.0303',
      'Koc TA, Bise CG, Neville C, Carreira D, Martin RL, McDonough CM. Heel pain - plantar fasciitis: revision 2023. J Orthop Sports Phys Ther. 2023;53(12):CPG1-CPG39. doi:10.2519/jospt.2023.0303',
      'Rathleff MS, Mølgaard CM, Fredberg U, et al. High-load strength training improves outcome in patients with plantar fasciitis: a randomized controlled trial with 12-month follow-up. Scand J Med Sci Sports. 2015;25(3):e292-e300. doi:10.1111/sms.12313',
      'Huffer D, Hing W, Newton R, Clair M. Strength training for plantar fasciitis and the intrinsic foot musculature: a systematic review. Phys Ther Sport. 2017;24:44-52. doi:10.1016/j.ptsp.2016.08.008'
    ]
  },
  {
    id: 'lombalgia-cpg', nome: 'Dor lombar em atletas e praticantes: diretriz JOSPT (revisão 2021)', fonte: 'literatura',
    aviso: 'Montado a partir da diretriz da APTA (JOSPT, 2021 e 2012) do PubMed. Não é protocolo da liga e é um resumo: a diretriz tem recomendações por nível de evidência que devem ser consultadas. Revisar com o orientador antes de usar.',
    resumo: 'A dor lombar inespecífica é muito comum em esportistas. A diretriz de 2021 recomenda intervenções não farmacológicas conduzidas por fisioterapeutas, como educação, exercício e manejo ativo, e o enfoque por fases (aguda, subaguda e crônica).',
    avaliacao: [
      'Triagem de sinais de alerta (trauma importante, febre, perda de peso, déficit neurológico progressivo, perda de controle esfincteriano)',
      'Classificação em aguda, subaguda e crônica, e fatores psicossociais (medo, catastrofização)',
      'Mobilidade, força e resistência do tronco e do quadril, e controle motor',
      'Questionários: Roland-Morris, Oswestry e escala numérica de dor (seção Questionários)'
    ],
    fases: [
      {
        nome: 'Fase 1: dor aguda',
        objetivos: ['Reduzir a dor e manter o movimento'],
        conteudo: [
          'Educação: boa evolução na maioria dos casos, e manter atividade conforme tolerância',
          'Mobilidade e exercícios em amplitude sem dor',
          'Evitar repouso prolongado',
          'Terapia manual como adjuvante a curto prazo, quando indicada'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dor controlada e capacidade de andar e de se mover sem piora importante']
      },
      {
        nome: 'Fase 2: subaguda e crônica: exercício',
        objetivos: ['Aumentar a capacidade funcional do tronco e do quadril'],
        conteudo: [
          'Exercício terapêutico: resistência e força do tronco, controle motor, e fortalecimento do quadril',
          'Treino progressivo de carga (agachamento, levantamento) com técnica',
          'Condicionamento aeróbico e atividade graduada'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Capacidade de realizar as tarefas do esporte com dor estável ou em queda']
      },
      {
        nome: 'Fase 3: retorno ao esporte e prevenção',
        objetivos: ['Voltar às demandas específicas e reduzir recidivas'],
        conteudo: [
          'Gesto esportivo com volume graduado (rotação, flexo-extensão com carga)',
          'Programa de manutenção de força e controle de carga',
          'Orientação sobre fatores psicossociais e sono'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Dor lombar com déficit neurológico ou sinais de alerta exige encaminhamento']
      }
    ],
    evidencia: [
      'A diretriz da APTA (JOSPT, revisão 2021) atualiza as recomendações de intervenções para dor lombar aguda e crônica conduzidas por fisioterapeutas ou estudadas em ambientes com fisioterapia, com foco nas intervenções não farmacológicas (George et al., 2021).',
      'A diretriz de 2012 descreve a classificação baseada em tratamento e as recomendações da época (Delitto et al., 2012).',
      'Os detalhes de dose e de nível de recomendação estão no texto das diretrizes e não foram transcritos aqui.'
    ],
    refs: [
      'George SZ, Fritz JM, Silfies SP, et al. Interventions for the management of acute and chronic low back pain: revision 2021. J Orthop Sports Phys Ther. 2021;51(11):CPG1-CPG60. doi:10.2519/jospt.2021.0304',
      'Delitto A, George SZ, Van Dillen L, et al. Low back pain. J Orthop Sports Phys Ther. 2012;42(4):A1-57. doi:10.2519/jospt.2012.42.4.a1'
    ]
  },
  {
    id: 'lesao-estresse-osseo', nome: 'Lesão por estresse ósseo (fratura de estresse) em corredores', fonte: 'literatura',
    aviso: 'Montado a partir de revisões do PubMed. Não é protocolo da liga. Lesões de alto risco (colo do fêmur, navicular, tíbia anterior) exigem conduta médica. Revisar com o orientador antes de usar.',
    resumo: 'Dor óssea focal por sobrecarga repetida, que piora com o impacto. O manejo busca reduzir a carga no osso, tratar os fatores de risco (energia disponível, vitamina D, mecânica, calçado) e retomar de forma gradual, com atenção à localização de risco.',
    avaliacao: [
      'Dor focal à palpação ou à percussão, dor com salto unipodal e dor em repouso ou noturna em casos avançados',
      'Localização: baixo risco (por exemplo, tíbia posteromedial, metatarsos laterais) ou alto risco (colo do fêmur, navicular, tíbia anterior)',
      'Fatores de risco: histórico de lesão, baixa disponibilidade de energia, densidade óssea, volume e mecânica, calçado',
      'Imagem (ressonância) para confirmar e classificar o grau'
    ],
    fases: [
      {
        nome: 'Fase 1: proteção do osso',
        objetivos: ['Reduzir a carga e permitir a cicatrização'],
        conteudo: [
          'Reduzir ou suspender impacto conforme a localização e a gravidade; manter atividade sem impacto',
          'Muletas ou imobilização em lesões de alto risco, por indicação médica',
          'Avaliar e corrigir fatores sistêmicos: energia, cálcio e vitamina D'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Sem dor focal ao andar e à palpação, e imagem compatível com cicatrização']
      },
      {
        nome: 'Fase 2: retorno gradual ao impacto',
        objetivos: ['Reintroduzir carga de forma progressiva'],
        conteudo: [
          'Progressão de caminhada, corrida em intervalos e aumento do volume em etapas, com dor como guia',
          'Fortalecimento do músculo local (tríceps sural na tíbia, intrínsecos do pé nos metatarsos)',
          'Ajuste da mecânica (por exemplo, aumento da cadência) e do calçado'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dor ausente durante a corrida e sem piora no dia seguinte']
      },
      {
        nome: 'Fase 3: prevenção de recidiva',
        objetivos: ['Reduzir o risco de nova lesão'],
        conteudo: [
          'Controle do volume e da intensidade e de aumentos bruscos',
          'Manter fortalecimento e treino de força',
          'Acompanhar energia disponível, menstruação e sono em atletas de risco'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Recidiva ou múltiplas lesões de estresse sugerem investigar a tríade da atleta e outros fatores']
      }
    ],
    evidencia: [
      'Uma revisão em JOSPT descreve a fisiopatologia, os fatores de risco, o diagnóstico clínico e a classificação das lesões ósseas por estresse em corredores, com intervenções para reduzir a carga por impacto (corrida mais "macia" ou com maior frequência de passos) e aumentar a força e a resistência da musculatura local, como o tríceps sural para a tíbia e os músculos intrínsecos do pé para os metatarsos (Warden et al., 2014).',
      'Em uma coorte de atletas universitários de atletismo, o grau de lesão na ressonância se correlacionou com fatores de risco clínicos e com o tempo de retorno (Nattiv et al., 2013).',
      'Uma revisão de reabilitação descreve o manejo das lesões ósseas por estresse em corredores (Tenforde et al., 2016).'
    ],
    refs: [
      'Warden SJ, Davis IS, Fredericson M. Management and prevention of bone stress injuries in long-distance runners. J Orthop Sports Phys Ther. 2014;44(10):749-765. doi:10.2519/jospt.2014.5334',
      'Nattiv A, Kennedy G, Barrack MT, et al. Correlation of MRI grading of bone stress injuries with clinical risk factors and return to play: a 5-year prospective study in collegiate track and field athletes. Am J Sports Med. 2013;41(8):1930-1941. doi:10.1177/0363546513490645',
      'Tenforde AS, Kraus E, Fredericson M. Bone stress injuries in runners. Phys Med Rehabil Clin N Am. 2016;27(1):139-149. doi:10.1016/j.pmr.2015.08.008'
    ]
  },
  {
    id: 'instabilidade-ombro', nome: 'Instabilidade anterior do ombro (primeiro episódio): manejo conservador', fonte: 'literatura',
    aviso: 'Montado a partir de revisões e consensos do PubMed. Não é protocolo da liga. Em atletas jovens de contato, a recorrência é alta e a decisão cirúrgica deve ser médica. Revisar com o orientador antes de usar.',
    resumo: 'Luxação ou subluxação anterior do ombro, comum em esportes de contato e arremesso. A conduta depende da idade, do esporte e da instabilidade. O manejo conservador reúne imobilização breve, recuperação de amplitude, força do manguito e da escápula, controle neuromuscular e retorno progressivo.',
    avaliacao: [
      'Mecanismo, número de episódios, idade, esporte e dominância',
      'Apreensão, relocação e testes de translação; frouxidão generalizada',
      'Amplitude, força de rotação e controle escapular',
      'Descartar lesão associada (fratura, lesão do nervo axilar, ruptura do manguito em maiores de 40 anos)'
    ],
    fases: [
      {
        nome: 'Fase 1: proteção e analgesia',
        objetivos: ['Reduzir dor e proteger a cápsula'],
        conteudo: [
          'Imobilização por curto período, conforme a decisão médica; não há consenso sobre a posição ideal',
          'Mobilidade do cotovelo, punho e mão, e movimentos pendulares leves',
          'Isométricos de rotação em posição neutra, sem provocar dor'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Dor controlada, e amplitude passiva dentro dos limites protegidos']
      },
      {
        nome: 'Fase 2: amplitude e força',
        objetivos: ['Recuperar amplitude e força do manguito e da escápula'],
        conteudo: [
          'Recuperar a amplitude ativa de forma progressiva, evitando extremos de abdução com rotação lateral no início',
          'Fortalecimento do manguito (rotação lateral e medial) e dos estabilizadores da escápula',
          'Controle neuromuscular e propriocepção (apoios, estabilizações rítmicas)'
        ],
        rotuloCriterios: 'Critério para progredir',
        criterios: ['Sem apreensão, força de rotação próxima do lado oposto e controle escapular adequado']
      },
      {
        nome: 'Fase 3: retorno ao esporte',
        objetivos: ['Voltar às demandas do esporte com segurança'],
        conteudo: [
          'Progressão para movimentos acima da cabeça e de contato, e gestos específicos',
          'Cadeia cinética completa (tronco, quadril, escápula)',
          'Decisão de retorno por critérios de força, estabilidade e confiança, com a equipe médica'
        ],
        rotuloCriterios: 'Pontos de atenção',
        criterios: ['Novas luxações ou apreensão persistente indicam reavaliação cirúrgica']
      }
    ],
    evidencia: [
      'O consenso internacional (Parte I) trata do diagnóstico, do manejo não operatório e da cirurgia de Bankart. Houve consenso unânime sobre o que avaliar na história e nos fatores prognósticos do manejo não operatório, e não houve consenso sobre a posição ideal de imobilização (Hurley et al., 2022).',
      'Uma revisão propõe classificar a instabilidade em 3 tipos, com componentes estruturais e não estruturais. As causas estruturais podem ser abordadas por cirurgia, e as não estruturais, como a alteração do controle neuromuscular do manguito, devem ser tratadas de forma conservadora (Jaggi e Lambert, 2010).',
      'Em atletas que sofreram instabilidade anterior durante a temporada, a maioria voltou ao esporte e completou a temporada com manejo não operatório, mas 37% tiveram ao menos um novo episódio, e 16 foram operados na entressafra (Buss et al., 2004).',
      'Os protocolos de reabilitação variam e não há um padrão único com doses: usar as fases e adaptar a cada paciente.'
    ],
    refs: [
      'Hurley ET, Matache BA, Wong I, et al. Anterior shoulder instability part I: diagnosis, nonoperative management, and Bankart repair: an international consensus statement. Arthroscopy. 2022;38(2):214-223.e7. doi:10.1016/j.arthro.2021.07.022',
      'Jaggi A, Lambert S. Rehabilitation for shoulder instability. Br J Sports Med. 2010;44(5):333-340. doi:10.1136/bjsm.2009.059311',
      'Buss DD, Lynch GP, Meyer CP, Huber SM, Freehill MQ. Nonoperative management for in-season athletes with anterior shoulder instability. Am J Sports Med. 2004;32(6):1430-1433. doi:10.1177/0363546503262069'
    ]
  }
];

const ANATOMIA = [
  {
    id: 'quadril', nome: 'Quadril e pelve', fonte: 'liga',
    aviso: 'Base: resumo "Anatomia e biomecânica do quadril" da liga. Os valores de ângulos do resumo estão marcados em "Confirmar", porque alguns não batem com a literatura consultada. Revisar com o orientador antes de usar.',
    resumo: 'O quadril é a articulação da cabeça do fêmur com o acetábulo. Quem estabiliza de verdade são os músculos, em especial o glúteo médio, que reduzem a pressão na articulação ao aumentar a área de contato (pressão = força ÷ área). Fraqueza dos abdutores e alterações ósseas somam efeito sobre a região anterossuperior, a de menor área de contato.',
    secoes: [
      {
        titulo: 'Movimentos',
        itens: [
          'Quadril: flexão e extensão (plano sagital), adução e abdução (frontal), rotação interna e externa (axial)',
          'Pelve (movimentos do quadril em cadeia fechada): anteversão (tilt anterior) equivale à flexão do quadril; retroversão (tilt posterior) equivale à extensão; inclinação para a direita ou esquerda equivale à adução ou abdução; rotação interna ou externa da pelve equivale à anteriorização ou posteriorização de um lado',
          'Pelve: ílio, ísquio, púbis e sacro'
        ]
      },
      {
        titulo: 'Fêmur e acetábulo (osso)',
        itens: [
          'Fêmur: a cabeça olha para dentro, para cima (ângulo cérvico-diafisário de 125° a 130°) e para frente (anteversão de cerca de 15°)',
          'Coxa vara: alavanca maior e relação comprimento-tensão pior para os abdutores. Coxa valga: alavanca menor. Nos dois casos o ganho de força do CPL tende a demorar mais',
          'Acetábulo: olha para fora, para baixo e para frente (anteversão de cerca de 20°). Menos de 20° (retroversão) aumenta o risco de impacto femoroacetabular; mais de 20° se associa à instabilidade',
          'Ângulo de Wiberg (cobertura da cabeça pelo acetábulo): o resumo cita cerca de 40°, com mais de 40° favorecendo o impacto (flexão, rotação interna e adução) e menos de 40° favorecendo instabilidade e cisalhamento',
          'Alavanca: distância perpendicular entre o eixo da articulação e o ponto de aplicação da força. Comprimento-tensão: distância entre origem e inserção'
        ]
      },
      {
        titulo: 'Estabilizadores',
        itens: [
          'Estabilizadores estáticos: lábio acetabular ("menisco do quadril") e ligamentos. Na extensão os ligamentos ficam tensos, porque o quadril rola para posterior e desliza para anterior, região de menor estabilidade. O lábio e o iliopsoas ajudam a evitar esse deslizamento anterior',
          'Estabilizadores reais: os músculos, principalmente o glúteo médio, que responde por cerca de 60% da área de secção transversa dos abdutores',
          'A região de menor área de contato é a anterossuperior do acetábulo. A displasia acetabular (acetábulo mais raso) reduz ainda mais essa área, e a fraqueza dos abdutores soma-se a isso',
          'Fraqueza dos abdutores gera queda contralateral da pelve (Trendelenburg, ou adução em cadeia fechada), o que diminui a área de contato anterossuperior, como na displasia',
          'Lesão do lábio: consequência do impacto (pinçamento) ou da instabilidade (cisalhamento) de forma crônica',
          'O impacto pode existir sem dor. Quando vem com dor, chama-se síndrome do impacto femoroacetabular'
        ]
      },
      {
        titulo: 'Músculos',
        itens: [
          'Glúteo médio: o mais importante, com 3 direções de fibras. Com o quadril a 90° de flexão, as fibras posteriores passam à frente do eixo e viram flexoras e rotadoras internas. Por isso, fortalecer o glúteo médio com o quadril neutro ou em extensão',
          'Adutores: além de aduzir, auxiliam na flexão (quadril estendido) e na extensão (quadril fletido) e fazem rotação interna',
          'A adução (em cadeia fechada com queda da pelve ou em cadeia aberta) diminui a área de contato femoroacetabular. Por isso, na dor anterior do quadril ou no impacto femoroacetabular, não fortalecer os adutores. Foco do fortalecimento dos adutores: dor inguinal relacionada aos adutores (pubalgia), tendinopatia dos adutores, tendinopatia da pata de ganso e lesão muscular',
          'Rotadores laterais: fortalecer com o quadril o mínimo fletido possível, no máximo 50° a 60°',
          'Iliopsoas: função principal é a estabilidade anterior do quadril (0° a 15° de flexão). Só tem torque flexor em ângulos maiores',
          'Balança de Pauwels: alterada pela queda da pelve, exige muito mais dos abdutores. Exemplo: muletas. Quando se retira a muleta de um lado, retira-se a do lado lesionado, para ela evitar a queda da pelve'
        ]
      }
    ],
    clinica: [
      'Quem tem alteração anatômica não muda o osso, mas pode e deve fortalecer: o tempo de ganho de força tende a ser maior',
      'Com dor anterior no quadril, priorizar abdutores, extensores e rotadores laterais (CPL) e evitar fortalecer adutores',
      'Fortalecer abdutores com o quadril neutro ou em extensão e rotadores laterais com no máximo 50° a 60° de flexão',
      'Ver os protocolos de CPL do quadril e de alívio da dor (barra infracapital)'
    ],
    confirmar: [
      'O valor de 40° para o ângulo de Wiberg não bate com a literatura consultada: a displasia e a zona limítrofe são definidas por ângulo centro-borda de 18° a 25° (Dornacher 2023), e a média em quadris assintomáticos foi de cerca de 31° (Frank 2015). Confirmar o valor e a regra com o orientador',
      'Os valores de anteversão do fêmur (15°), do acetábulo (20°) e do ângulo cérvico-diafisário (125° a 130°) são do resumo e devem ser conferidos em livro-texto de anatomia',
      'Alterações como cam e pincer são comuns em pessoas assintomáticas: a prevalência foi de 37% para cam e 67% para pincer em voluntários sem sintomas (Frank 2015), e o cam é mais comum em atletas (Mascarenhas 2016). Não é causa de dor por si só',
      'Não foi encontrado em estudo que a adução diminua a área de contato a ponto de contraindicar o fortalecimento dos adutores no impacto femoroacetabular: tratar como orientação da liga'
    ],
    refs: [
      'Dornacher D, Lutz B, Fuchs M, Zippelius T, Reichel H. Acetabular deficiency in borderline hip dysplasia is underestimated by lateral center edge angle alone. Arch Orthop Trauma Surg. 2023;143(7):3937-3944. doi:10.1007/s00402-022-04652-6',
      'Frank JM, Harris JD, Erickson BJ, et al. Prevalence of femoroacetabular impingement imaging findings in asymptomatic volunteers: a systematic review. Arthroscopy. 2015;31(6):1199-1204. doi:10.1016/j.arthro.2014.11.042',
      'Mascarenhas VV, Rego P, Dantas P, et al. Imaging prevalence of femoroacetabular impingement in symptomatic patients, athletes, and asymptomatic individuals: a systematic review. Eur J Radiol. 2016;85(1):73-95. doi:10.1016/j.ejrad.2015.10.016',
      'Griffin DR, Dickenson EJ, O\'Donnell J, et al. The Warwick Agreement on femoroacetabular impingement syndrome (FAI syndrome): an international consensus statement. Br J Sports Med. 2016;50(19):1169-1176. doi:10.1136/bjsports-2016-096743'
    ]
  },
  {
    id: 'joelho', nome: 'Joelho (anatomia e biomecânica avançada)', fonte: 'liga',
    aviso: 'Base: resumo "Anatomia e biomecânica avançada do joelho" (Amir Curcio). As referências abaixo cobrem só parte do conteúdo: o restante é anatomia clássica de livro-texto e está marcado como "confirmar". Revisar com o orientador antes de usar.',
    resumo: 'Fêmur, tíbia e patela. O côndilo medial é maior e mais distal, o que gera a rotação lateral da tíbia nos últimos 15° de extensão ("parafuso do joelho"). Meniscos, ligamentos e canto póstero-lateral dão estabilidade; a gordura de Hoffa sustenta a patela e o tendão patelar.',
    secoes: [
      {
        titulo: 'Ossos',
        itens: [
          'Côndilo medial do fêmur maior (mais distal e posterior) que o lateral: maior área de contato com a tíbia. Nos últimos 15° de extensão a tíbia roda lateralmente para encaixar e manter a extensão sem contração do quadríceps (parafuso do joelho)',
          'Tróclea: ângulo de 135° a 145°. Acima de 145° é tróclea rasa, fator importante de instabilidade e luxação femoropatelar, geralmente para lateral',
          'Ângulo de Merchant (congruência femoropatelar): o resumo cita de 4° a −4°. Maior que 4°, patela lateralizada; menor que −4°, medializada',
          'Altura da patela: o resumo cita diâmetro da patela dividido pela distância do ápice à tuberosidade anterior da tíbia. Acima de 1,2 é patela alta e abaixo de 0,8 é patela baixa',
          'Platôs tibiais: o medial é mais fundo (recebe o côndilo medial, mais distal) e o lateral é mais raso'
        ]
      },
      {
        titulo: 'Patela',
        itens: [
          'Na extensão a patela sobe: as facetas inferiores têm mais contato com a tróclea (dor femoropatelar ao subir escada)',
          'Na flexão a patela desce: as facetas superiores têm mais contato (fase excêntrica máxima do agachamento)',
          'Patela alta aumenta o contato das facetas inferiores na extensão, com mais desgaste e risco de instabilidade ou luxação'
        ]
      },
      {
        titulo: 'Meniscos',
        itens: [
          'São 4 ligamentos com origem nos meniscos: transverso (une os cornos anteriores), meniscofemorais (ligam os meniscos ao fêmur, posteriormente), coronário (menisco à tíbia) e o feixe profundo do LCM',
          'Função: amortecer e dar estabilidade, ao aumentar a área de contato entre fêmur e tíbia (pressão = força ÷ área)',
          'A periferia é vascularizada: lesão periférica pode ser suturada, principalmente em jovens. Lesão central tende a ser meniscectomia parcial ou total'
        ]
      },
      {
        titulo: 'Ligamentos e canto póstero-lateral',
        itens: [
          'LCA: banda anteromedial (mais tensa na flexão) e posterolateral (mais tensa na extensão). Evita anteriorização excessiva da tíbia',
          'LCP: banda anterolateral (tensa na flexão) e posteromedial (tensa na extensão). Evita posteriorização excessiva da tíbia, a partir de 60° de flexão',
          'LCM: banda superficial e profunda (a profunda se liga ao menisco). Evita valgo. LCM mais LCA mais menisco: "tríade infeliz"',
          'LCL: inserção na fíbula, evita varo',
          'Canto póstero-lateral: LCL e poplíteo. Evita varo (plano frontal), rotação lateral da tíbia e medial do fêmur (axial) e hiperextensão (sagital)',
          'Poplíteo: origem no côndilo lateral do fêmur e inserção na borda medial da tíbia. Gira medialmente a tíbia durante a flexão em cadeia aberta, e em cadeia fechada gira lateralmente o fêmur (desparafusar). Liberação miofascial do poplíteo nos últimos 15° de extensão, ou eletroestimulação, para ganho de extensão',
          'Ligamento patelofemoral medial: geralmente rompido na luxação patelar. Menos denso que os outros, parece uma fáscia',
          'Gordura de Hoffa: abaixo da patela, sustenta a patela e o tendão. Inflamada, pode ser confundida com tendinopatia patelar: comparar a dor ao pressionar o tendão contra a tíbia e ao pressionar em pinça a região intra-articular'
        ]
      },
      {
        titulo: 'Artrocinemática',
        itens: [
          'Cadeia aberta, extensão: tíbia desliza e rola anteriormente e roda lateralmente (últimos 15°). Flexão: tíbia desliza e rola posteriormente e roda medialmente (primeiros 15°)',
          'Cadeia fechada, extensão: fêmur desliza posteriormente, rola anteriormente e roda medialmente (últimos 15°). Flexão: fêmur desliza anteriormente, rola posteriormente e roda lateralmente (primeiros 15°)',
          'Após lesão com déficit de extensão, trabalhar a mobilização de rotação lateral da tíbia'
        ]
      }
    ],
    clinica: [
      'Déficit de extensão: mobilização de rotação lateral da tíbia, liberação do poplíteo e, se necessário, eletroestimulação do quadríceps (ver protocolos de ganho de ADM e de LCA). No pós-operatório de LCA, nas primeiras semanas, a palestra do congresso não usa terapia manual para extensão',
      'Dor anterior: identificar a faceta mais exigida (extensão x flexão) pela posição em que dói',
      'Dor sob a patela: comparar a pressão no tendão e em pinça para separar tendinopatia patelar de Hoffa'
    ],
    confirmar: [
      'Os valores do ângulo de Merchant (±4°), da altura da patela (1,2 e 0,8) e da tróclea (135° a 145°) são do resumo e não foram confirmados em estudo: conferir método de medida e cortes em livro-texto ou na referência original',
      'A descrição da altura da patela lembra índices como Insall-Salvati ou Caton-Deschamps: confirmar qual índice e o corte correto antes de usar',
      'As bandas dos ligamentos cruzados e as estruturas do canto póstero-lateral são anatomia clássica do resumo, sem referência específica encontrada nesta pesquisa',
      'Para a composição clínica da instabilidade patelar e do canto póstero-lateral, ver as referências dos protocolos de LCP e canto póstero-lateral e de dor femoropatelar'
    ],
    refs: [
      'Crossley KM, Stefanik JJ, Selfe J, et al. 2016 Patellofemoral pain consensus statement from the 4th International Patellofemoral Pain Research Retreat, Manchester. Part 1: terminology, definitions, clinical examination, natural history, patellofemoral osteoarthritis and patient-reported outcome measures. Br J Sports Med. 2016;50(14):839-843. doi:10.1136/bjsports-2016-096384'
    ]
  },
  {
    id: 'tornozelo-pe', nome: 'Tornozelo e pé', fonte: 'liga',
    aviso: 'Base: resumo "Anatomia e biomecânica do tornozelo e pé" da liga. O resumo é curto e traz poucos valores. As figuras do resumo não foram lidas. Revisar com o orientador antes de usar.',
    resumo: 'O tornozelo (tíbia, fíbula e tálus) faz dorsiflexão e flexão plantar. O pé faz pronação e supinação. A pronação é natural na marcha: o problema é a pronação exacerbada, que repercute em tornozelo, joelho e quadril.',
    secoes: [
      {
        titulo: 'Ossos e movimentos',
        itens: [
          'Tornozelo: tíbia, fíbula e tálus. Movimentos: dorsiflexão e flexão plantar',
          'Pé: tálus, calcâneo, tarsos, metatarsos e falanges. Movimentos: pronação e supinação, adução e abdução, eversão e inversão',
          'Raio: linha que parte do tornozelo e acompanha cada dedo',
          'Pé de recepção: estruturas mais laterais, que recebem a carga primeiro na marcha. Pé de propulsão: estruturas mais mediais, que recebem a carga conforme a pronação natural e realizam a propulsão'
        ]
      },
      {
        titulo: 'Artrocinemática',
        itens: [
          'Cadeia aberta, flexão plantar: o tálus rola para posterior e desliza para anterior. Dorsiflexão: rola para anterior e desliza para posterior',
          'Cadeia fechada, flexão plantar: a tíbia desliza para posterior. Dorsiflexão: a tíbia desliza para anterior',
          'Supinação: adução com inversão. Pronação: abdução com eversão (o tálus vai para medial e o calcâneo para lateral)'
        ]
      },
      {
        titulo: 'Arco e cadeia',
        itens: [
          'O arco plantar ajuda o movimento de pronação a absorver a carga. A diminuição do arco sobrecarrega as estruturas que o sustentam',
          'Pronação excessiva gera valgo no tornozelo e no joelho, com compressão do compartimento lateral e distração do medial',
          'Supinação excessiva gera varo, com compressão do compartimento medial e distração do lateral'
        ]
      },
      {
        titulo: 'Músculos',
        itens: [
          'Tibial anterior: dorsiflexor e inversor',
          'Fibulares: flexores plantares e eversores',
          'Tibial posterior: flexor plantar e inversor'
        ]
      }
    ],
    clinica: [
      'Entorse: o tríceps sural e os fibulares são flexores plantares, e a inibição dos fibulares sobrecarrega o tríceps (ver protocolo de entorse)',
      'Pronação exagerada: fortalecer tibial anterior e a musculatura intrínseca do pé (foot core) e observar a cadeia até o joelho e o quadril',
      'Ganho de dorsiflexão por mobilização posterior do tálus (ver protocolo de ganho de ADM)'
    ],
    confirmar: [
      'O resumo não traz valores numéricos de amplitude ou de cortes: conferir em livro-texto de anatomia',
      'A relação entre pronação excessiva, valgo e compressão lateral é uma explicação da aula: estudos de causa e efeito entre postura do pé e lesões são variáveis, e o resumo não cita referência',
      'O conceito de "foot core" está descrito em McKeon et al. (2015), usado no protocolo de entorse'
    ],
    refs: [
      'McKeon PO, Hertel J, Bramble D, Davis I. The foot core system: a new paradigm for understanding intrinsic foot muscle function. Br J Sports Med. 2015;49(5):290. doi:10.1136/bjsports-2013-092690'
    ]
  },
  {
    id: 'ombro', nome: 'Ombro (complexo do ombro)', fonte: 'literatura',
    aviso: 'Não há resumo de aula da liga para esta região. O conteúdo é anatomia clássica de livro-texto, organizada a partir dos artigos de revisão listados. Valores numéricos e detalhes devem ser conferidos em livro-texto de anatomia. Revisar com o orientador antes de usar.',
    resumo: 'O complexo do ombro é formado por 4 articulações (glenoumeral, acromioclavicular, esternoclavicular e escapulotorácica) que trabalham juntas. A glenoumeral é a mais móvel e a menos estável, e depende dos músculos do manguito, da cápsula e do lábio glenoidal, além do controle da escápula.',
    secoes: [
      {
        titulo: 'Articulações',
        itens: [
          'Glenoumeral: cabeça do úmero e cavidade glenoidal, rasa e aprofundada pelo lábio. Maior mobilidade do corpo, com menor estabilidade óssea',
          'Acromioclavicular: entre o acrômio e a clavícula. Entorses e luxações são comuns em esportes de contato',
          'Esternoclavicular: única conexão óssea do membro superior com o esqueleto axial',
          'Escapulotorácica: não é articulação verdadeira; a escápula desliza sobre o gradil costal e dá a base para o movimento do braço'
        ]
      },
      {
        titulo: 'Estabilidade',
        itens: [
          'Estáticos: lábio glenoidal, cápsula e ligamentos glenoumerais (superior, médio e inferior). O feixe anterior do ligamento glenoumeral inferior é importante contra a translação anterior com o braço abduzido e rodado lateralmente',
          'Dinâmicos: manguito rotador (supraespinal, infraespinal, subescapular e redondo menor), que centraliza a cabeça do úmero na glenoide, e o bíceps (cabeça longa)',
          'A escápula precisa se posicionar para dar uma base estável ao movimento do úmero'
        ]
      },
      {
        titulo: 'Ritmo escapuloumeral',
        itens: [
          'Na elevação do braço, a glenoumeral e a escapulotorácica se movem juntas. A proporção clássica é de cerca de 2 graus de glenoumeral para 1 de escapulotorácica; o valor varia entre estudos e entre as fases do movimento',
          'A fadiga dos músculos da escápula altera o ritmo e a cinemática (McQuade et al., 1998)',
          'Discinese escapular: alteração do movimento ou da posição da escápula. É um achado clínico, não um diagnóstico, e deve ser avaliada em conjunto com o resto do exame (Kibler et al., 2013)'
        ]
      },
      {
        titulo: 'Músculos da escápula e espaço subacromial',
        itens: [
          'Serrátil anterior: rotação superior e protração, mantém a escápula contra o gradil',
          'Trapézio (superior, médio e inferior) e romboides: elevação, retração e rotação superior; o trapézio inferior controla a rotação superior e a inclinação posterior',
          'Espaço subacromial: entre o acrômio e a cabeça do úmero, por onde passam o supraespinal e a bursa. A posição da escápula e do úmero muda esse espaço',
          'Arremesso e outros gestos acima da cabeça pedem grande amplitude de rotação lateral e carga sobre o manguito e a cápsula anterior (Perry, 1983)'
        ]
      }
    ],
    clinica: [
      'Dor no arremesso ou em gestos acima da cabeça: avaliar a escápula, a rotação do ombro e o manguito (ver testes de ombro)',
      'Instabilidade anterior: ver o protocolo de instabilidade do ombro',
      'Dor subacromial: ver o protocolo de dor relacionada ao manguito rotador'
    ],
    confirmar: [
      'A proporção de 2:1 do ritmo escapuloumeral é uma média clássica, e vários estudos mostram variação conforme o plano e a fase',
      'Os nomes e as inserções musculares devem ser conferidos em livro-texto de anatomia',
      'A relação entre discinese escapular e dor no ombro é complexa: o consenso de 2013 trata a discinese como um achado, e não como causa isolada'
    ],
    refs: [
      'Terry GC, Chopp TM. Functional anatomy of the shoulder. J Athl Train. 2000;35(3):248-255.',
      'Culham E, Peat M. Functional anatomy of the shoulder complex. J Orthop Sports Phys Ther. 1993;18(1):342-350. doi:10.2519/jospt.1993.18.1.342',
      'McQuade KJ, Dawson J, Smidt GL. Scapulothoracic muscle fatigue associated with alterations in scapulohumeral rhythm kinematics during maximum resistive shoulder elevation. J Orthop Sports Phys Ther. 1998;28(2):74-80. doi:10.2519/jospt.1998.28.2.74',
      'Perry J. Anatomy and biomechanics of the shoulder in throwing, swimming, gymnastics, and tennis. Clin Sports Med. 1983;2(2):247-270. doi:10.1016/s0278-5919(20)31406-x',
      'Kibler WB, Ludewig PM, McClure PW, Michener LA, Bak K, Sciascia AD. Clinical implications of scapular dyskinesis in shoulder injury: the 2013 consensus statement from the \'Scapular Summit\'. Br J Sports Med. 2013;47(14):877-885. doi:10.1136/bjsports-2013-092425'
    ]
  },
  {
    id: 'cotovelo', nome: 'Cotovelo', fonte: 'literatura',
    aviso: 'Não há resumo de aula da liga para esta região. O conteúdo é anatomia clássica de livro-texto, organizada a partir dos artigos de revisão listados. Detalhes devem ser conferidos em livro-texto de anatomia. Revisar com o orientador antes de usar.',
    resumo: 'O cotovelo tem 3 articulações em uma mesma cápsula (umeroulnar, umerorradial e radioulnar proximal), que permitem a flexo-extensão e a pronossupinação. Estabilidade vem dos ossos, dos ligamentos colaterais e dos músculos. O arremesso impõe muito estresse em valgo na face medial.',
    secoes: [
      {
        titulo: 'Articulações e movimentos',
        itens: [
          'Umeroulnar: dobradiça, principal para a flexo-extensão',
          'Umerorradial: entre o capítulo do úmero e a cabeça do rádio',
          'Radioulnar proximal: pronação e supinação, com o ligamento anular',
          'Flexo-extensão (cotovelo) e pronossupinação (antebraço)'
        ]
      },
      {
        titulo: 'Ligamentos',
        itens: [
          'Colateral ulnar (medial): estabilizador principal em valgo, com destaque para o feixe anterior. É muito exigido no arremesso (Morrey e An, 1985; Werner et al., 1993)',
          'Colateral radial (lateral): estabiliza contra varo e rotação posterolateral',
          'Ligamento anular: mantém a cabeça do rádio contra a ulna'
        ]
      },
      {
        titulo: 'Músculos e origens',
        itens: [
          'Origem comum dos extensores no epicôndilo lateral (por exemplo, extensor radial curto do carpo): ligada à tendinopatia lateral',
          'Massa flexopronadora no epicôndilo medial: ligada à epicondilalgia medial e à proteção do ligamento colateral ulnar (Davidson et al., 1995)',
          'Flexores do cotovelo: bíceps braquial, braquial e braquiorradial. Extensor: tríceps braquial'
        ]
      },
      {
        titulo: 'Nervos',
        itens: [
          'Nervo ulnar: passa pelo túnel cubital, medial, e pode ser comprimido ou irritado em arremessadores',
          'Nervo mediano e nervo radial: próximos ao cotovelo, em estruturas anterior e lateral'
        ]
      }
    ],
    clinica: [
      'Dor lateral em carga: ver o protocolo de tendinopatia lateral do cotovelo',
      'Dor medial no arremesso: avaliar valgo, flexopronadores e carga do arremesso',
      'Sintomas de formigamento medial: considerar o nervo ulnar'
    ],
    confirmar: [
      'Os feixes ligamentares e seus papéis devem ser conferidos em livro-texto',
      'A anatomia nervosa e os pontos de compressão devem ser conferidos em livro-texto de anatomia'
    ],
    refs: [
      'Morrey BF, An KN. Functional anatomy of the ligaments of the elbow. Clin Orthop Relat Res. 1985;(201):84-90. doi:10.1097/00003086-198512000-00015',
      'Werner SL, Fleisig GS, Dillman CJ, Andrews JR. Biomechanics of the elbow during baseball pitching. J Orthop Sports Phys Ther. 1993;17(6):274-278. doi:10.2519/jospt.1993.17.6.274',
      'Davidson PA, Pink M, Perry J, Jobe FW. Functional anatomy of the flexor pronator muscle group in relation to the medial collateral ligament of the elbow. Am J Sports Med. 1995;23(2):245-250. doi:10.1177/036354659502300220'
    ]
  },
  {
    id: 'punho', nome: 'Punho', fonte: 'literatura',
    aviso: 'Não há resumo de aula da liga para esta região. O conteúdo é anatomia clássica de livro-texto, organizada a partir dos artigos de revisão listados. Detalhes devem ser conferidos em livro-texto de anatomia. Revisar com o orientador antes de usar.',
    resumo: 'O punho é formado pelo rádio, pela ulna (com o complexo da fibrocartilagem triangular) e pelos 8 ossos do carpo, em 2 fileiras. Os movimentos são flexo-extensão e desvio radial e ulnar. É muito exigido em quedas com a mão espalmada e em esportes de raquete e de ginástica.',
    secoes: [
      {
        titulo: 'Ossos e articulações',
        itens: [
          'Fileira proximal: escafoide, semilunar, piramidal e pisiforme',
          'Fileira distal: trapézio, trapezoide, capitato e hamato',
          'Articulação radiocarpal e articulação mediocarpal: juntas, permitem a flexo-extensão e os desvios',
          'Articulação radioulnar distal: pronação e supinação, no antebraço'
        ]
      },
      {
        titulo: 'Ligamentos e fibrocartilagem',
        itens: [
          'Ligamento escafossemilunar: sua lesão pode levar à instabilidade carpal (Mayfield, 1984)',
          'Complexo da fibrocartilagem triangular (TFCC): estabiliza o lado ulnar do punho, absorve carga e é causa de dor ulnar em esportes de raquete, ginástica e arremesso (Palmer e Werner, 1981)',
          'Os ligamentos extrínsecos (volares e dorsais) e intrínsecos estabilizam o carpo'
        ]
      },
      {
        titulo: 'Escafoide e túnel do carpo',
        itens: [
          'Escafoide: a irrigação entra pela região distal e segue para a proximal, o que explica o risco de necrose avascular e de pseudoartrose em fraturas do polo proximal',
          'Túnel do carpo: o nervo mediano e 9 tendões flexores passam pelo túnel, coberto pelo retináculo flexor'
        ]
      },
      {
        titulo: 'Músculos',
        itens: [
          'Extensores: extensor radial longo e curto do carpo e extensor ulnar do carpo',
          'Flexores: flexor radial do carpo, flexor ulnar do carpo e palmar longo',
          'Os tendões dos dedos passam pelos compartimentos extensores dorsais e pelo túnel do carpo'
        ]
      }
    ],
    clinica: [
      'Queda com a mão espalmada e dor na tabaqueira anatômica: suspeitar de fratura do escafoide, mesmo com radiografia inicial normal',
      'Dor ulnar em esportes de raquete e ginástica: considerar o TFCC',
      'Formigamento na mão: considerar o túnel do carpo (ver o questionário de Boston)'
    ],
    confirmar: [
      'A irrigação do escafoide e o conteúdo do túnel do carpo devem ser conferidos em livro-texto',
      'A classificação de instabilidades carpais e as lesões do TFCC têm detalhes que dependem do exame de imagem e da avaliação médica'
    ],
    refs: [
      'Mayfield JK. Wrist ligamentous anatomy and pathogenesis of carpal instability. Orthop Clin North Am. 1984;15(2):209-216. doi:10.1016/s0030-5898(20)31311-0',
      'Palmer AK, Werner FW. The triangular fibrocartilage complex of the wrist: anatomy and function. J Hand Surg Am. 1981;6(2):153-162. doi:10.1016/s0363-5023(81)80170-0',
      'Moore DC, Crisco JJ, Trafton TG, Leventhal EL. A digital database of wrist bone anatomy and carpal kinematics. J Biomech. 2007;40(11):2537-2542. doi:10.1016/j.jbiomech.2006.10.041'
    ]
  },
  {
    id: 'mao', nome: 'Mão e dedos', fonte: 'literatura',
    aviso: 'Não há resumo de aula da liga para esta região. O conteúdo é anatomia clássica de livro-texto, organizada a partir do artigo de revisão listado. Detalhes devem ser conferidos em livro-texto de anatomia. Revisar com o orientador antes de usar.',
    resumo: 'A mão combina estabilidade e destreza. Os dedos têm articulações metacarpofalângica e interfalângicas proximal e distal; o polegar tem a carpometacarpal em sela, que dá oposição. Músculos extrínsecos (do antebraço) e intrínsecos (da própria mão) funcionam juntos.',
    secoes: [
      {
        titulo: 'Articulações',
        itens: [
          'Metacarpofalângicas (MCF): flexo-extensão e abdução e adução',
          'Interfalângicas proximais (IFP) e distais (IFD): dobradiças, só flexo-extensão',
          'Carpometacarpal do polegar: em sela, permite oposição, flexão, extensão e abdução',
          'Arcos da mão (transverso e longitudinais) permitem a preensão'
        ]
      },
      {
        titulo: 'Músculos',
        itens: [
          'Extrínsecos: flexores superficial e profundo dos dedos e extensores, no antebraço',
          'Intrínsecos: lumbricais, interósseos, tenares e hipotenares',
          'Mecanismo extensor: tendão central e bandas laterais; a lesão do tendão terminal gera o dedo em martelo'
        ]
      },
      {
        titulo: 'Polias e estabilizadores',
        itens: [
          'Polias dos flexores (A2 e A4 são as mais importantes): mantêm o tendão perto do osso. A lesão da polia A2 é descrita em escaladores',
          'Ligamento colateral ulnar da MCF do polegar: lesão por queda com abdução forçada (polegar do esquiador ou do guarda-caça)',
          'Placa volar e ligamentos colaterais estabilizam as articulações dos dedos'
        ]
      },
      {
        titulo: 'Tipos de preensão',
        itens: [
          'Preensão de força (power grip) e de precisão',
          'Para avaliar força de preensão, ver o teste de dinamometria da mão, quando disponível, e o questionário PRWE'
        ]
      }
    ],
    clinica: [
      'Dedo em martelo e lesões de polia são comuns em esportes de bola e em escalada',
      'Lesão do ligamento colateral ulnar do polegar exige avaliação e proteção precoces',
      'Reabilitação da mão depende da cicatrização dos tendões e das polias: seguir a orientação do cirurgião'
    ],
    confirmar: [
      'Nomes, inserções e funções dos músculos intrínsecos devem ser conferidos em livro-texto de anatomia da mão',
      'Os tipos de preensão e a classificação das lesões de polia devem ser conferidos em referências específicas da mão'
    ],
    refs: [
      'Duncan SF, Saracevic CE, Kakinoki R. Biomechanics of the hand. Hand Clin. 2013;29(4):483-492. doi:10.1016/j.hcl.2013.08.003',
      'Soubeyrand M, Assabah B, Bégin M, Laemmel E, Dos Santos A, Crézé M. Pronation and supination of the hand: anatomy and biomechanics. Hand Surg Rehabil. 2017;36(1):2-11. doi:10.1016/j.hansur.2016.09.012'
    ]
  },
  {
    id: 'coluna', nome: 'Coluna vertebral (cervical, torácica e lombar)', fonte: 'literatura',
    aviso: 'Não há resumo de aula da liga para esta região. O conteúdo é anatomia clássica de livro-texto, organizada a partir dos artigos de revisão listados. Valores de amplitude devem ser conferidos em livro-texto. Revisar com o orientador antes de usar.',
    resumo: 'A coluna tem 7 vértebras cervicais, 12 torácicas e 5 lombares, além do sacro e do cóccix. Cada região tem uma função: a cervical dá mobilidade à cabeça, a torácica é mais rígida e liga ao gradil e a lombar sustenta carga. A estabilidade vem das estruturas passivas (discos, ligamentos), ativas (músculos) e do controle neural.',
    secoes: [
      {
        titulo: 'Regiões e movimentos',
        itens: [
          'Cervical: maior mobilidade, com a rotação concentrada no atlas e no áxis (C1 e C2)',
          'Torácica: menor mobilidade, protegida pelo gradil costal, com papel importante na rotação do tronco',
          'Lombar: flexo-extensão importante e menos rotação, com carga alta sobre os discos',
          'A rotação torácica é relevante em esportes de arremesso e raquete (ver o teste de rotação torácica)'
        ]
      },
      {
        titulo: 'Discos e articulações',
        itens: [
          'Disco intervertebral: núcleo pulposo central e ânulo fibroso em camadas. Absorve e distribui carga',
          'Articulações zigapofisárias (facetas): guiam e limitam o movimento e participam da estabilidade',
          'Ligamentos longitudinais anterior e posterior, amarelo, interespinal e supraespinal limitam o movimento'
        ]
      },
      {
        titulo: 'Músculos e estabilidade',
        itens: [
          'Músculos locais (multífidos, transverso do abdome) controlam o segmento; globais (eretores, reto do abdome, oblíquos) produzem e controlam torque',
          'A estabilidade da coluna lombar depende da coordenação entre os músculos, as estruturas passivas e o controle neural, e não de um músculo isolado (Cholewicki e McGill, 1996; McGill et al., 2003)',
          'Resistência do tronco é mais preditiva de função do que a força máxima isolada em vários protocolos (ver o teste de McGill)'
        ]
      },
      {
        titulo: 'Quadril, pelve e coluna',
        itens: [
          'A pelve conecta a coluna e o quadril: a inclinação pélvica altera a lordose lombar',
          'Fraqueza ou rigidez do quadril pode aumentar a demanda sobre a coluna lombar',
          'Ver a anatomia do quadril e o protocolo do CPL'
        ]
      }
    ],
    clinica: [
      'Dor lombar em atletas: ver o protocolo de dor lombar e os questionários de Roland-Morris e Oswestry',
      'Rotação torácica limitada em arremessadores: pode sobrecarregar o ombro e a lombar',
      'Resistência do tronco: ver o teste de McGill e a dinamometria de tronco'
    ],
    confirmar: [
      'As amplitudes de movimento por região e o desenho dos ligamentos devem ser conferidos em livro-texto de anatomia da coluna',
      'A distinção entre músculos locais e globais é um modelo clínico e não é aceita de forma unânime na literatura'
    ],
    refs: [
      'Cholewicki J, McGill SM. Mechanical stability of the in vivo lumbar spine: implications for injury and chronic low back pain. Clin Biomech (Bristol). 1996;11(1):1-15. doi:10.1016/0268-0033(95)00035-6',
      'McGill SM, Grenier S, Kavcic N, Cholewicki J. Coordination of muscle activity to assure stability of the lumbar spine. J Electromyogr Kinesiol. 2003;13(4):353-359. doi:10.1016/s1050-6411(03)00043-9'
    ]
  }
];

const CASOS = [
  {
    id: 'lca-futsal', nome: 'Futsal: 5 meses após reconstrução de LCA',
    historia: 'Atleta de futsal, 21 anos, 5 meses após reconstrução do LCA. Sem dor ou derrame. Quer voltar ao treino coletivo na próxima semana. No single hop, o LSI é de 82%. No Y Balance, a assimetria no alcance anterior é de 5 cm.',
    perguntas: [
      { q: 'Você libera o retorno ao treino coletivo?', r: 'Ainda não. O LSI está abaixo de 90% e a assimetria anterior passa de 4 cm. Mesmo sem dor, os critérios funcionais não foram atingidos.' },
      { q: 'O que mais você avaliaria antes de decidir?', r: 'Força de quadríceps e isquiotibiais (dinamometria), outros hop tests, qualidade do movimento na aterrissagem e mudança de direção, e aspectos psicológicos, como a prontidão e o medo de nova lesão.' },
      { q: 'O tempo de reabilitação importa?', r: 'Sim. Retornos antes de 9 meses foram associados a maior risco de nova lesão (Grindem et al., 2016). Tempo e critérios funcionais devem ser considerados juntos.' },
      { q: 'Qual seria a conduta nas próximas semanas?', r: 'Continuar o fortalecimento e o treino de pliometria e controle neuromuscular, reavaliar os testes em 3 a 4 semanas e planejar uma progressão gradual de carga específica do esporte.' }
    ],
    refs: [
      'Grindem H, Snyder-Mackler L, Moksnes H, Engebretsen L, Risberg MA. Simple decision rules can reduce reinjury risk by 84% after ACL reconstruction: the Delaware-Oslo ACL cohort study. Br J Sports Med. 2016;50(13):804-808. doi:10.1136/bjsports-2016-096031',
      'Plisky PJ, Rauh MJ, Kaminski TW, Underwood FB. Star Excursion Balance Test as a predictor of lower extremity injury in high school basketball players. J Orthop Sports Phys Ther. 2006;36(12):911-919. doi:10.2519/jospt.2006.2244',
      'Logerstedt DS, Scalzitti D, Risberg MA, Engebretsen L, Webster KE, Feller J, Snyder-Mackler L, Axe MJ. Knee stability and movement coordination impairments: knee ligament sprain revision 2017. J Orthop Sports Phys Ther. 2017;47(11):A1-A47. doi:10.2519/jospt.2017.0303'
    ]
  },
  {
    id: 'dfp-corredor-bailarina', nome: 'Dor femoropatelar: bailarina x corredor (III Congresso)',
    historia: 'Duas pacientes com dor femoropatelar. A primeira é uma bailarina com hipotonia de quadríceps, extensão do joelho restrita e sinal de leg. A segunda é uma corredora de 10 km que sente a dor nos últimos quilômetros. As duas fazem o mesmo exercício de fortalecimento prescrito por outro profissional e não melhoram.',
    perguntas: [
      { q: 'O mesmo programa serve para as duas?', r: 'Provavelmente não. A palestra reforça a individualização: a bailarina tem déficit de força e de amplitude de extensão que pedem trabalho local do quadríceps e da mobilidade, e a corredora tende a precisar de manejo de carga e de capacidade do quadril e do tronco em fadiga. O consenso de 2018 apoia o exercício que combina quadril e joelho, e a resposta deve ser ajustada ao perfil (Collins et al., 2018; Lack et al., 2015).' },
      { q: 'O que mais avaliar além da força?', r: 'Fatores biopsicossociais, como catastrofização e medo do movimento, o histórico de carga e a tarefa que dói (step-down, agachamento). Na aula, a relação entre dor e catastrofização pode ser maior que entre dor e fraqueza.' },
      { q: 'Que cuidado de comunicação ter?', r: 'Evitar nocebo, como "você sente dor porque seu movimento é assim", explicar que o quadro é tratável, dar novos estímulos sem dor e mostrar isso ao paciente. Joelheira ou taping podem servir como apoio, mas não somam ao exercício isolado (Souto et al., 2024).' }
    ],
    refs: [
      'Collins NJ, Barton CJ, van Middelkoop M, et al. 2018 Consensus statement on exercise therapy and physical interventions (orthoses, taping and manual therapy) to treat patellofemoral pain: recommendations from the 5th International Patellofemoral Pain Research Retreat, Gold Coast, Australia, 2017. Br J Sports Med. 2018;52(18):1170-1178. doi:10.1136/bjsports-2018-099397',
      'Lack S, Barton C, Sohan O, Crossley K, Morrissey D. Proximal muscle rehabilitation is effective for patellofemoral pain: a systematic review with meta-analysis. Br J Sports Med. 2015;49(21):1365-1376. doi:10.1136/bjsports-2015-094723',
      'Souto LR, De Oliveira Silva D, Pazzinatto MF, Siqueira MS, Moreira RFC, Serrão FV. Are adjunct treatments effective in improving pain and function when added to exercise therapy in people with patellofemoral pain? A systematic review with meta-analysis. Br J Sports Med. 2024;58(14):792-804. doi:10.1136/bjsports-2024-108145'
    ]
  },
  {
    id: 'isquio-velocista', nome: 'Lesão de isquiotibiais em velocista (III Congresso)',
    historia: 'Velocista de 22 anos, lesão aguda de isquiotibiais confirmada por ressonância, com hematoma grande. Está no 3º dia, caminha com leve dor, e o treinador pergunta se "são 28 dias de afastamento".',
    perguntas: [
      { q: 'O prazo de 28 dias vale?', r: 'É uma referência, não uma regra. O tempo de reparo biológico e o afastamento clínico nem sempre coincidem, e lesão que envolve o tecido conjuntivo (junção miotendínea ou tendão livre) tende a demorar mais. Os critérios devem ser funcionais, e não só de tempo (Askling et al., 2014; Macdonald et al., 2019).' },
      { q: 'O tamanho do hematoma define a gravidade?', r: 'Não necessariamente: anamnese e exame precisam conversar, e um hematoma grande pode acompanhar uma lesão menos grave. Usar a classificação (por exemplo, a de Munique ou a BAMIC) para orientar a conduta (Mueller-Wohlfahrt et al., 2013).' },
      { q: 'Quando começar os exercícios de alongamento (excêntricos)?', r: 'Um ensaio com 90 homens não achou diferença de tempo de retorno entre iniciar no dia 1 ou depois de correr a 70% da velocidade máxima (Vermeulen et al., 2022). A reabilitação deve ser dinâmica, com ativação já no primeiro dia e carga modulada pela dor (até 4 na escala visual segundo a palestra) e pela resposta no dia seguinte.' },
      { q: 'Quais critérios de alta usar?', r: 'Alongamento indolor, função indolor e o H-test de Askling indolor. Tempo não é bom critério.' }
    ],
    refs: [
      'Askling CM, Tengvar M, Tarassova O, Thorstensson A. Acute hamstring injuries in Swedish elite sprinters and jumpers: a prospective randomised controlled clinical trial comparing two rehabilitation protocols. Br J Sports Med. 2014;48(7):532-539. doi:10.1136/bjsports-2013-093214',
      'Macdonald B, McAleer S, Kelly S, Chakraverty R, Johnston M, Pollock N. Hamstring rehabilitation in elite track and field athletes: applying the British Athletics Muscle Injury Classification in clinical practice. Br J Sports Med. 2019;53(23):1464-1473. doi:10.1136/bjsports-2017-098971',
      'Mueller-Wohlfahrt HW, Haensel L, Mithoefer K, et al. Terminology and classification of muscle injuries in sport: the Munich consensus statement. Br J Sports Med. 2013;47(6):342-350. doi:10.1136/bjsports-2012-091448',
      'Vermeulen R, Whiteley R, van der Made AD, et al. Early versus delayed lengthening exercises for acute hamstring injury in male athletes: a randomised controlled clinical trial. Br J Sports Med. 2022;56(14):792-800. doi:10.1136/bjsports-2020-103405'
    ]
  },
  {
    id: 'lcp-canto-pos', nome: 'Pós-operatório de LCP e canto póstero-lateral (III Congresso)',
    historia: 'Atleta de 25 anos, 2 semanas depois de reconstrução do LCP associada à reconstrução do canto póstero-lateral. Está com 45° de flexão. O cirurgião liberou a mobilização. A queixa que mais incomoda é dor anterior no joelho.',
    perguntas: [
      { q: 'A descarga de peso pode ser total?', r: 'Segundo a palestra, a descarga é conforme o tolerado em geral, mas é contraindicada se houve reconstrução do canto póstero-lateral. Seguir o protocolo do cirurgião.' },
      { q: 'Como ganhar flexão com segurança?', r: 'Segundo a palestra, a amplitude progressiva é melhor antes da 4ª semana para fugir da artrofibrose, evitando posteriorizar a tíbia no ganho de amplitude (em lesão combinada, rodar medialmente a tíbia) e orientando exercícios em casa (Ekhtiari et al., 2017, sobre artrofibrose no LCA). Os detalhes devem ser alinhados com o cirurgião.' },
      { q: 'Por que a dor anterior?', r: 'Segundo a palestra, a queixa crônica mais comum no LCP não é a instabilidade, mas a dor anterior, porque a tíbia posteriorizada leva a patela contra o fêmur. Incluir mobilização patelar, especialmente se o enxerto foi do quadríceps.' }
    ],
    refs: [
      'Ekhtiari S, Horner NS, de Sa D, et al. Arthrofibrosis after ACL reconstruction is best treated in a step-wise approach with early recognition and intervention: a systematic review. Knee Surg Sports Traumatol Arthrosc. 2017;25(12):3929-3937. doi:10.1007/s00167-017-4482-1',
      'Jung YB, Lee YS, Jung HJ, Nam CH. Evaluation of posterolateral rotatory knee instability using the dial test according to tibial positioning. Arthroscopy. 2009;25(3):257-261. doi:10.1016/j.arthro.2008.10.007'
    ]
  },
  {
    id: 'sever-futebol', nome: 'Menino de 12 anos com dor no calcanhar (III Congresso)',
    historia: 'Menino de 12 anos, joga futebol 4 vezes por semana e na escola. Dor no calcanhar há 3 semanas, pior após o treino, sem trauma. A família pergunta se ele deve parar o esporte e se precisa de alongamento e imobilização.',
    perguntas: [
      { q: 'Qual a hipótese principal e o que a explica?', r: 'Lesão por sobrecarga na apófise do calcâneo (doença de Sever ou apofisite do calcâneo), local de inserção do tríceps sural, uma região em crescimento onde a tração do músculo e o impacto sobrecarregam a placa (resumo da palestra). Excluir outras causas se houver trauma ou sinais de alerta.' },
      { q: 'Qual a conduta básica?', r: 'Cerca de 90% dos casos são conservadores (palestra). Manejo da carga e da recuperação, recursos para dor, ativação global, core, CPL e sensório-motor, e progressão no grupo envolvido (isometria, concêntrico, excêntrico, bilateral para unilateral). Educação com os pais ("crescer não dói" é crença a desmistificar).' },
      { q: 'Precisa parar o esporte, alongar ou imobilizar?', r: 'A revisão Cochrane de 2026 concluiu que a evidência de tratamentos não cirúrgicos é limitada, de certeza baixa a muito baixa (Williams et al., 2026). A palestra critica os protocolos de alongamento e imobilização. A decisão deve considerar a carga total e o contexto da criança.' }
    ],
    refs: [
      'Williams CM, Krommes K, Paterson KL, Haines T, Caserta A, Thorborg K. Non-surgical treatment for lower limb apophyseal injuries. Cochrane Database Syst Rev. 2026;7:CD015156. doi:10.1002/14651858.CD015156.pub2'
    ]
  },
  {
    id: 'sifa-3meses', nome: 'Dor na virilha em jovem: SIFA? (III Congresso)',
    historia: 'Jogador de futsal de 24 anos com dor de início insidioso na virilha, em "C" (lateral e posterior), ao entrar no carro e ao mudar de direção. A radiografia mostra deformidade cam. O cirurgião sugeriu artroscopia.',
    perguntas: [
      { q: 'A imagem confirma SIFA?', r: 'Não sozinha. A síndrome exige sintomas, sinais clínicos e achados de imagem juntos (Warwick, Griffin et al., 2016), e cam e pincer são comuns em pessoas sem dor (Frank et al., 2015).' },
      { q: 'Qual é a primeira linha de tratamento?', r: 'Segundo a palestra e o consenso de Zurique, tratamento ativo antes da cirurgia, por pelo menos 3 meses, com educação, decisão compartilhada, exercícios para todo o membro inferior e o tronco, e monitoramento de desfechos (Kemp et al., 2020).' },
      { q: 'Como lidar com a dor durante a reabilitação?', r: 'Modular carga e exposição. A atividade entra com dor de 0 a 4 e é reavaliada no dia seguinte. Se piorou, ajustar a carga, sem abandonar o movimento. Simular as ações que doem (entrar no carro) de forma gradual.' }
    ],
    refs: [
      'Griffin DR, Dickenson EJ, O\'Donnell J, et al. The Warwick Agreement on femoroacetabular impingement syndrome (FAI syndrome): an international consensus statement. Br J Sports Med. 2016;50(19):1169-1176. doi:10.1136/bjsports-2016-096743',
      'Frank JM, Harris JD, Erickson BJ, et al. Prevalence of femoroacetabular impingement imaging findings in asymptomatic volunteers: a systematic review. Arthroscopy. 2015;31(6):1199-1204. doi:10.1016/j.arthro.2014.11.042',
      'Kemp JL, Risberg MA, Mosler A, et al. Physiotherapist-led treatment for young to middle-aged active adults with hip-related pain: consensus recommendations from the International Hip-related Pain Research Network, Zurich 2018. Br J Sports Med. 2020;54(9):504-511. doi:10.1136/bjsports-2019-101458'
    ]
  },
  {
    id: 'tendinopatia-volei', nome: 'Tendinopatia patelar em jogador de vôlei (III Congresso)',
    historia: 'Jogador de vôlei de 20 anos, dor no tendão patelar há 4 meses, pior nos saltos. Já fez "repouso" por 3 semanas e voltou com a mesma dor. Tem dorsiflexão restrita do lado afetado e teve entorse de tornozelo há 1 ano.',
    perguntas: [
      { q: 'O que pesquisar na avaliação além do tendão?', r: 'A dorsiflexão (importante tanto no Aquiles quanto no patelar), o histórico de entorse, a fraqueza do músculo local e o controle de carga, e fatores psicológicos. Observar a aterrissagem.' },
      { q: 'Como organizar o tratamento?', r: 'Segundo a palestra: etapa 1, controle de carga e dos fatores de sobrecarga; etapa 2, fortalecimento progressivo de carga alta; etapa 3, armazenamento e liberação de energia (pliometria); etapa 4, retorno ao esporte. Isométricos ajudam na fase inicial (5 séries de 30 a 45 s, cerca de 70% da força máxima, 1 a 2 min de repouso), mas a progressão gradual de carga importa mais do que o tipo de contração (Rio et al., 2015; Malliaras et al., 2013).' },
      { q: 'Precisa sair do esporte?', r: 'Não necessariamente: manejar a carga e o que gera sobrecarga. Na tendinopatia de Aquiles, continuar o esporte com monitoramento de dor não prejudicou o tratamento (Silbernagel et al., 2007).' },
      { q: 'Que cuidados na linguagem e na biomecânica?', r: 'Tendinite não é tendinopatia: educar de forma franca, ouvir as crenças e evitar dizer que o movimento está errado. Adaptar a mecânica ao contexto do esporte (o jogador de vôlei não pode flexionar o tronco como o corredor porque bate na rede), e usar foco externo ("alcance o cone"). Evitar alongamento e meia de compressão se aumentarem a compressão no tendão (palestra).' },
      { q: 'Que critérios para progredir e dar alta?', r: 'Para a fase 3: sem dor em agachamento unipodal e saltos. Alta por testes funcionais (side hop no Aquiles, hop test no patelar e salto vertical, segundo a palestra). Os valores de corte devem ser confirmados com o orientador.' }
    ],
    refs: [
      'Rio E, Kidgell D, Purdam C, et al. Isometric exercise induces analgesia and reduces inhibition in patellar tendinopathy. Br J Sports Med. 2015;49(19):1277-1283. doi:10.1136/bjsports-2014-094386',
      'Malliaras P, Barton CJ, Reeves ND, Langberg H. Achilles and patellar tendinopathy loading programmes: a systematic review comparing clinical outcomes and identifying potential mechanisms for effectiveness. Sports Med. 2013;43(4):267-286. doi:10.1007/s40279-013-0019-z',
      'Silbernagel KG, Thomeé R, Eriksson BI, Karlsson J. Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy: a randomized controlled study. Am J Sports Med. 2007;35(6):897-906. doi:10.1177/0363546506298279'
    ]
  },
  {
    id: 'aquiles-corredor', nome: 'Corredor com dor no tendão de Aquiles',
    historia: 'Corredor recreativo de 38 anos, 4 meses de dor na porção média do tendão de Aquiles, pior ao iniciar a corrida e com rigidez matinal. Aumentou o volume de treino há 3 meses. Já tentou repouso por 3 semanas e voltou com a mesma dor.',
    perguntas: [
      { q: 'O que fazer em vez do repouso total?', r: 'Educação, manejo de carga e exercício com carga progressiva. Manter a corrida com monitoramento de dor não prejudicou o tratamento em um ensaio (Silbernagel et al., 2007).' },
      { q: 'Qual exercício escolher: excêntrico ou HSR?', r: 'Em 58 pacientes, os dois deram resultados iguais em 12 e 52 semanas, com maior adesão ao HSR (Beyer et al., 2015). Entre os tratamentos ativos não houve diferença clinicamente relevante, e começar por um programa de exercício de panturrilha é razoável (van der Vlist et al., 2021).' },
      { q: 'Como saber que pode voltar a correr normalmente?', r: 'Por critérios (força de panturrilha, saltos e dor), e não só por tempo, em um programa de retorno em etapas (Silbernagel e Crossley, 2015).' }
    ],
    refs: ['Silbernagel KG, Thomeé R, Eriksson BI, Karlsson J. Continued sports activity, using a pain-monitoring model, during rehabilitation in patients with Achilles tendinopathy: a randomized controlled study. Am J Sports Med. 2007;35(6):897-906. doi:10.1177/0363546506298279', 'Beyer R, Kongsgaard M, Hougs Kjær B, Øhlenschlæger T, Kjær M, Magnusson SP. Heavy slow resistance versus eccentric training as treatment for Achilles tendinopathy: a randomized controlled trial. Am J Sports Med. 2015;43(7):1704-1711. doi:10.1177/0363546515584760', 'van der Vlist AC, Winters M, Weir A, et al. Which treatment is most effective for patients with Achilles tendinopathy? A living systematic review with network meta-analysis of 29 randomised controlled trials. Br J Sports Med. 2021;55(5):249-256. doi:10.1136/bjsports-2019-101872', 'Silbernagel KG, Crossley KM. A proposed return-to-sport program for patients with midportion Achilles tendinopathy: rationale and implementation. J Orthop Sports Phys Ther. 2015;45(11):876-886. doi:10.2519/jospt.2015.5885']
  },
  {
    id: 'menisco-degenerativo', nome: 'Dor no joelho de meia-idade com lesão meniscal degenerativa',
    historia: 'Paciente de 52 anos, dor medial no joelho há 3 meses, sem trauma, com estalidos e sem bloqueio verdadeiro. A ressonância mostra lesão degenerativa do menisco medial. O paciente pergunta se precisa operar.',
    perguntas: [
      { q: 'Qual é a primeira linha de tratamento?', r: 'Exercício supervisionado. Em um ensaio, o exercício não diferiu da meniscectomia parcial em 2 anos, e o exercício melhorou mais a força da coxa a curto prazo (Kise et al., 2016).' },
      { q: 'A cirurgia é recomendada?', r: 'O guideline do BMJ recomenda de forma forte contra a artroscopia na maioria dos pacientes com doença degenerativa do joelho e lesão meniscal (Siemieniuk et al., 2017). No estudo FIDELITY, a cirurgia parcial não superou a cirurgia placebo (Sihvonen et al., 2020).' },
      { q: 'Quais sinais pedem encaminhamento?', r: 'Bloqueio articular verdadeiro (não estende), falha em melhorar com 12 semanas de exercício e suspeita de outra lesão. 19% do grupo de exercício acabou operando em 2 anos (Kise et al., 2016).' }
    ],
    refs: ['Kise NJ, Risberg MA, Stensrud S, Ranstam J, Engebretsen L, Roos EM. Exercise therapy versus arthroscopic partial meniscectomy for degenerative meniscal tear in middle aged patients: randomised controlled trial with two year follow-up. BMJ. 2016;354:i3740. doi:10.1136/bmj.i3740', 'Siemieniuk RAC, Harris IA, Agoritsas T, et al. Arthroscopic surgery for degenerative knee arthritis and meniscal tears: a clinical practice guideline. BMJ. 2017;357:j1982. doi:10.1136/bmj.j1982', 'Sihvonen R, Paavola M, Malmivaara A, et al. Arthroscopic partial meniscectomy for a degenerative meniscus tear: a 5 year follow-up of the placebo-surgery controlled FIDELITY (Finnish Degenerative Meniscus Lesion Study) trial. Br J Sports Med. 2020;54(22):1332-1339. doi:10.1136/bjsports-2020-102813']
  },
  {
    id: 'ombro-nadador', nome: 'Nadador com dor no ombro ao elevar o braço',
    historia: 'Nadador de 19 anos, dor lateral no ombro há 6 semanas, pior ao elevar o braço acima da cabeça e à noite. Arco doloroso positivo, sem instabilidade. A ressonância não foi feita. O médico sugeriu cirurgia de descompressão.',
    perguntas: [
      { q: 'Qual a base do tratamento?', r: 'Exercício progressivo de manguito e escápula, supervisionado ou domiciliar, com educação e modulação de carga (Abdulla et al., 2015).' },
      { q: 'A descompressão subacromial está indicada?', r: 'Não. O guideline do BMJ recomenda não oferecer a descompressão subacromial na dor subacromial, porque não há benefício e há danos (Vandvik et al., 2019).' },
      { q: 'Como evoluir a carga?', r: 'Dos isométricos para o fortalecimento progressivo com elástico e carga, e depois para exercícios acima da cabeça e para o gesto do esporte, dentro da tolerância à dor (Littlewood et al., 2012).' }
    ],
    refs: ['Abdulla SY, Southerst D, Côté P, et al. Is exercise effective for the management of subacromial impingement syndrome and other soft tissue injuries of the shoulder? A systematic review by the Ontario Protocol for Traffic Injury Management (OPTIMa) Collaboration. Man Ther. 2015;20(5):646-656. doi:10.1016/j.math.2015.03.013', 'Vandvik PO, Lähdeoja T, Ardern C, et al. Subacromial decompression surgery for adults with shoulder pain: a clinical practice guideline. BMJ. 2019;364:l294. doi:10.1136/bmj.l294', 'Littlewood C, Ashton J, Chance-Larsen K, May S, Sturrock B. Exercise for rotator cuff tendinopathy: a systematic review. Physiotherapy. 2012;98(2):101-109. doi:10.1016/j.physio.2011.08.002']
  },
  {
    id: 'epicondilalgia-tenista', nome: 'Tenista com dor lateral no cotovelo',
    historia: 'Tenista amador de 45 anos, dor no epicôndilo lateral há 8 semanas, pior ao agarrar e ao fazer o backhand. Cozen positivo. O colega sugeriu infiltração de corticoide.',
    perguntas: [
      { q: 'O corticoide é a melhor escolha?', r: 'Não como primeira opção. Em um ensaio, o corticoide foi melhor em curto prazo (92% de sucesso), mas em 52 semanas teve pior resultado (69%) do que a fisioterapia (91%) (Smidt et al., 2002). No ensaio de Bisset, o benefício do corticoide se inverteu após 6 semanas, com alta recidiva (Bisset et al., 2006).' },
      { q: 'Qual a base do tratamento?', r: 'Educação, ajuste de carga e exercício progressivo dos extensores do punho. Uma revisão de 30 ensaios mostrou que o exercício tem melhores resultados do que intervenções passivas, mas o efeito é pequeno e a certeza é baixa (Karanasios et al., 2021).' },
      { q: 'O que ajustar no esporte?', r: 'Volume de jogo, tamanho do cabo e tensão da raquete, e a técnica do backhand, mantendo o atleta ativo.' }
    ],
    refs: ['Smidt N, van der Windt DA, Assendelft WJ, et al. Corticosteroid injections, physiotherapy, or a wait-and-see policy for lateral epicondylitis: a randomised controlled trial. Lancet. 2002;359(9307):657-662. doi:10.1016/s0140-6736(02)07811-x', 'Bisset L, Beller E, Jull G, Brooks P, Darnell R, Vicenzino B. Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow: randomised trial. BMJ. 2006;333(7575):939. doi:10.1136/bmj.38961.584653.ae', 'Karanasios S, Korakakis V, Whiteley R, Vasilogeorgis I, Woodbridge S, Gioftsos G. Exercise interventions in lateral elbow tendinopathy have better outcomes than passive interventions, but the effects are small: a systematic review and meta-analysis of 2123 subjects in 30 trials. Br J Sports Med. 2021;55(9):477-485. doi:10.1136/bjsports-2020-102525']
  },
  {
    id: 'mtss-recruta', nome: 'Corredor iniciante com dor na canela',
    historia: 'Mulher de 24 anos começou a correr há 2 meses e aumentou rapidamente o volume. Dor difusa na borda medial da tíbia, que melhora com o aquecimento e piora depois do treino. Sem dor em repouso.',
    perguntas: [
      { q: 'Qual a hipótese e como diferenciar de fratura de estresse?', r: 'Síndrome do estresse tibial medial. A fratura de estresse tem dor focal, dor em repouso ou noturna e dor à percussão. Se houver dúvida, imagem (Moen et al., 2009).' },
      { q: 'Qual a base do manejo?', r: 'Redução e progressão da carga, e fortalecimento. A evidência de tratamentos específicos é fraca, e nenhum estudo foi livre de viés na revisão de 2013 (Winters et al., 2013).' },
      { q: 'Que fatores de risco investigar?', r: 'IMC, queda do navicular, amplitude de flexão plantar e rotação externa do quadril foram associados (Hamstra-Wright et al., 2015).' }
    ],
    refs: ['Moen MH, Tol JL, Weir A, Steunebrink M, De Winter TC. Medial tibial stress syndrome: a critical review. Sports Med. 2009;39(7):523-546. doi:10.2165/00007256-200939070-00002', 'Winters M, Eskes M, Weir A, Moen MH, Backx FJ, Bakker EW. Treatment of medial tibial stress syndrome: a systematic review. Sports Med. 2013;43(12):1315-1333. doi:10.1007/s40279-013-0087-0', 'Hamstra-Wright KL, Bliven KC, Bay C. Risk factors for medial tibial stress syndrome in physically active individuals such as runners and military personnel: a systematic review and meta-analysis. Br J Sports Med. 2015;49(6):362-369. doi:10.1136/bjsports-2014-093462']
  },
  {
    id: 'itbs-maratonista', nome: 'Maratonista com dor lateral no joelho',
    historia: 'Maratonista de 33 anos, dor lateral no joelho depois de 3 km, que piora em descidas e a obriga a parar. Dor à palpação do epicôndilo lateral do fêmur. A força de abdução do quadril é menor no lado afetado.',
    perguntas: [
      { q: 'Qual a hipótese e o que explica?', r: 'Síndrome da banda iliotibial. Corredores com a síndrome tinham abdução do quadril mais fraca no membro afetado do que no não afetado e do que em saudáveis (Fredericson et al., 2000).' },
      { q: 'Qual a conduta?', r: 'Reduzir a corrida até o limite da dor, fortalecer abdutores e rotadores laterais do quadril e retornar gradualmente. Em um estudo, 22 de 24 corredores voltaram a correr sem dor (Fredericson et al., 2000).' },
      { q: 'Qual a força da evidência?', r: 'Revisões dizem que a evidência de tratamento conservador é limitada e de baixa qualidade (Ellis et al., 2007).' }
    ],
    refs: ['Fredericson M, Cookingham CL, Chaudhari AM, Dowdell BC, Oestreicher N, Sahrmann SA. Hip abductor weakness in distance runners with iliotibial band syndrome. Clin J Sport Med. 2000;10(3):169-175. doi:10.1097/00042752-200007000-00004', 'Ellis R, Hing W, Reid D. Iliotibial band friction syndrome: a systematic review. Man Ther. 2007;12(3):200-208. doi:10.1016/j.math.2006.08.004']
  },
  {
    id: 'fascite-plantar-corredor', nome: 'Dor no calcanhar nos primeiros passos da manhã',
    historia: 'Corredor de 41 anos, 3 meses de dor plantar no calcanhar nos primeiros passos da manhã, que melhora com o movimento e volta depois de treinos longos. Usa tênis antigo e tem pouca dorsiflexão.',
    perguntas: [
      { q: 'Qual a hipótese e a diretriz?', r: 'Dor plantar do calcanhar (fascite plantar). A diretriz da APTA, revisada em 2014 e em 2023, reúne as recomendações de manejo fisioterapêutico (Martin et al., 2014; Koc et al., 2023).' },
      { q: 'Alongamento ou fortalecimento?', r: 'Em 48 pacientes, o treino de força de alta carga (elevação unipodal com toalha sob os dedos, em dias alternados) teve melhor resultado do que o alongamento específico em 3 meses, sem diferença em 6 e 12 meses (Rathleff et al., 2015).' },
      { q: 'Quando reavaliar?', r: 'Dor persistente por vários meses deve ser reavaliada pelo médico, com investigação de outras causas, como fratura de estresse do calcâneo.' }
    ],
    refs: ['Martin RL, Davenport TE, Reischl SF, et al. Heel pain-plantar fasciitis: revision 2014. J Orthop Sports Phys Ther. 2014;44(11):A1-33. doi:10.2519/jospt.2014.0303', 'Koc TA, Bise CG, Neville C, Carreira D, Martin RL, McDonough CM. Heel pain - plantar fasciitis: revision 2023. J Orthop Sports Phys Ther. 2023;53(12):CPG1-CPG39. doi:10.2519/jospt.2023.0303', 'Rathleff MS, Mølgaard CM, Fredberg U, et al. High-load strength training improves outcome in patients with plantar fasciitis: a randomized controlled trial with 12-month follow-up. Scand J Med Sci Sports. 2015;25(3):e292-e300. doi:10.1111/sms.12313']
  },
  {
    id: 'lombalgia-remador', nome: 'Remador com dor lombar',
    historia: 'Remador de 20 anos, dor lombar há 5 semanas, sem irradiação, pior no fim do treino e ao levantar de manhã. Sem sinais de alerta. Quer saber se deve parar de treinar e se precisa de ressonância.',
    perguntas: [
      { q: 'Precisa parar totalmente e fazer imagem?', r: 'Sem sinais de alerta, não é necessário parar totalmente nem pedir imagem de rotina. A diretriz da APTA de 2021 recomenda intervenções ativas conduzidas por fisioterapeutas, como educação e exercício (George et al., 2021).' },
      { q: 'Que sinais de alerta pesquisar?', r: 'Trauma importante, febre, perda de peso inexplicada, déficit neurológico progressivo e perda de controle esfincteriano exigem encaminhamento.' },
      { q: 'Como organizar o exercício?', r: 'Mobilidade e atividade graduada na fase aguda, e exercício de resistência e força do tronco e do quadril com técnica na fase subaguda e crônica, com retorno por demanda do esporte (George et al., 2021; ver o protocolo de dor lombar).' }
    ],
    refs: ['George SZ, Fritz JM, Silfies SP, et al. Interventions for the management of acute and chronic low back pain: revision 2021. J Orthop Sports Phys Ther. 2021;51(11):CPG1-CPG60. doi:10.2519/jospt.2021.0304', 'Delitto A, George SZ, Van Dillen L, et al. Low back pain. J Orthop Sports Phys Ther. 2012;42(4):A1-57. doi:10.2519/jospt.2012.42.4.a1']
  },
  {
    id: 'estresse-osseo-corredora', nome: 'Corredora de fundo com dor tibial focal',
    historia: 'Corredora de fundo de 22 anos, dor focal na tíbia há 4 semanas, que passou a doer ao andar e à noite. Dor à percussão. Tem histórico de amenorreia e baixa ingestão calórica.',
    perguntas: [
      { q: 'Qual a hipótese e como confirmar?', r: 'Lesão por estresse ósseo da tíbia. A ressonância confirma e classifica o grau, que se correlaciona com o tempo de retorno (Nattiv et al., 2013).' },
      { q: 'Que fatores sistêmicos investigar?', r: 'Disponibilidade de energia, ciclo menstrual, vitamina D e cálcio. Revisões destacam a importância desses fatores e do treino de força local (Warden et al., 2014; Tenforde et al., 2016).' },
      { q: 'Como retornar à corrida?', r: 'Progressão gradual, com a dor como guia, fortalecendo o músculo local e ajustando a carga e a mecânica, como o aumento da cadência (Warden et al., 2014).' }
    ],
    refs: ['Warden SJ, Davis IS, Fredericson M. Management and prevention of bone stress injuries in long-distance runners. J Orthop Sports Phys Ther. 2014;44(10):749-765. doi:10.2519/jospt.2014.5334', 'Nattiv A, Kennedy G, Barrack MT, et al. Correlation of MRI grading of bone stress injuries with clinical risk factors and return to play: a 5-year prospective study in collegiate track and field athletes. Am J Sports Med. 2013;41(8):1930-1941. doi:10.1177/0363546513490645', 'Tenforde AS, Kraus E, Fredericson M. Bone stress injuries in runners. Phys Med Rehabil Clin N Am. 2016;27(1):139-149. doi:10.1016/j.pmr.2015.08.008']
  },
  {
    id: 'ombro-rugbi', nome: 'Jogador de rúgbi com primeira luxação anterior do ombro',
    historia: 'Jogador de rúgbi de 21 anos teve a primeira luxação anterior do ombro, reduzida em campo. Está na pré-temporada e quer voltar em 3 semanas. Apreensão em abdução e rotação lateral.',
    perguntas: [
      { q: 'O que o consenso diz sobre o manejo não operatório?', r: 'O consenso internacional trata do diagnóstico, do manejo não operatório e da cirurgia de Bankart. Houve consenso sobre a história e os fatores prognósticos, mas não sobre a posição de imobilização (Hurley et al., 2022).' },
      { q: 'Que fases seguir na reabilitação?', r: 'Proteção, amplitude, força do manguito e da escápula, controle neuromuscular e retorno progressivo (Jaggi e Lambert, 2010).' },
      { q: 'Em 3 semanas, ele volta?', r: 'Não é seguro afirmar. Em atletas da temporada, a maioria voltou e completou a temporada com manejo não operatório, mas 37% tiveram nova instabilidade (Buss et al., 2004). A decisão deve ser conjunta com a equipe médica, por critérios.' }
    ],
    refs: ['Hurley ET, Matache BA, Wong I, et al. Anterior shoulder instability part I: diagnosis, nonoperative management, and Bankart repair: an international consensus statement. Arthroscopy. 2022;38(2):214-223.e7. doi:10.1016/j.arthro.2021.07.022', 'Jaggi A, Lambert S. Rehabilitation for shoulder instability. Br J Sports Med. 2010;44(5):333-340. doi:10.1136/bjsm.2009.059311', 'Buss DD, Lynch GP, Meyer CP, Huber SM, Freehill MQ. Nonoperative management for in-season athletes with anterior shoulder instability. Am J Sports Med. 2004;32(6):1430-1433. doi:10.1177/0363546503262069']
  }
];

const REFERENCIAS_GERAIS = [
  'Esta seção será preenchida com as referências indicadas pela liga e pelo orientador.'
];
