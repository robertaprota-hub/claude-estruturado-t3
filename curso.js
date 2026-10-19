/* Claude Estruturado · Turma 3
   ÚNICO arquivo de conteúdo do app. Tudo na tela vem daqui.
   Qualquer link pode ficar vazio: o app cai para a pasta do Drive ou mostra "em breve". */

window.CURSO = {
  slug: 't3',
  nome: 'Claude Estruturado',
  turma: 'Turma 3',
  linha: 'Pessoas como protagonistas na era da IA.',   // frase da marca, embaixo da logo
  diaSemana: 'terças',
  diaCurto: 'ter',
  hora: '20h00',
  h: 20, m: 0,                 // início (hora, minuto)
  duracaoMin: 75,              // 20h00 às 21h15
  fuso: 'America/Sao_Paulo',
  baseUrl: 'https://robertaprota-hub.github.io/claude-estruturado-t3/',
  meet: 'https://meet.google.com/gbr-ihet-xwv',   // a mesma sala nas 4 aulas

  /* Drive da turma. Sem link nas subpastas, o app abre a pasta principal. */
  drive: 'https://drive.google.com/drive/folders/1Br8l-WPIb39bvScGEzqnAuPMwsbAcvWq',
  pastaGravacoes: 'https://drive.google.com/drive/folders/1cHjjzK1wS6t5j60g_c6NRpRcRhRLtDpr',
  pastaSlides: 'https://drive.google.com/drive/folders/1LrFE3wqZ6KUGLg7OvW1tKWPINDtF9_Tk',
  pastaArquivos: 'https://drive.google.com/drive/folders/1iRGRtzCsyQ4eDDe0JLLmz0-bflMzMyZ8'
};

/* Uma entrada por aula. Campos:
   gravacao  = link do vídeo (Drive)
   slides    = link do PDF da apresentação
   pasta     = pasta da aula no Drive (Arquivos/Aula NN), já preenchida
   tarefa    = texto da tarefa da semana (vazio = "em breve")
   trilha    = lista do que fazer depois da aula (vazia = "em breve"); o check fica salvo no aparelho
   insights  = o essencial da aula: { titulo, itens: [[termo, definição], ...] }
   arquivos  = prompts, skills e templates da aula: { nome, tipo, url }
               tipo: 'prompt' | 'skill' | 'template' | 'link' */
window.AULAS = [
  { num: '01', data: '2026-10-13', titulo: 'Fundamentos de IA e Prompt',
    sub: 'Camadas da IA, ciclo 4D e prompt em cinco passos',
    gravacao: 'https://drive.google.com/file/d/1iF7Qo2KmpyKr2-1W4jQX6YSe5sgpEB29/view', slides: 'https://drive.google.com/file/d/1NO_jTaj8q1WsbQzsmwYwP_HZ6wBxlLqD/view', pasta: 'https://drive.google.com/drive/folders/17H4qBiyNABpN5uja6uW89o8OF-sNNMnY', tarefa: '', arquivos: [],
    trilha: [
      'Baixar o Claude no computador e no celular',
      'Assinar o plano Pro',
      'Configurar a memória',
      'Escrever as instruções para o Claude: tom, premissas e incerteza',
      'Treinar prompts com os 5 passos',
      'Listar 3 tarefas que pesam na rotina, com input, output e tempo'
    ],
    insights: [
      { titulo: 'Os 5 passos do prompt', itens: [
        ['Papel', 'Quem o Claude representa na conversa.'],
        ['Objetivo', 'O resultado esperado no final.'],
        ['Contexto', 'A informação necessária para executar.'],
        ['Tom', 'Formal, executivo, didático ou direto.'],
        ['Formato', 'Tabela, lista, parágrafo ou bullets.'] ] },
      { titulo: 'As 7 regras de ouro do prompting', itens: [
        ['Pedido específico', '"As 3 maiores despesas do mês".'],
        ['Exemplo no lugar de adjetivo', '"No estilo deste e-mail [colar]".'],
        ['Tarefas em etapas', 'Revisar cada etapa antes da próxima.'],
        ['Iteração', 'A primeira resposta é rascunho.'],
        ['Feedback direto', '"Aprofunde o 2º parágrafo com um dado".'],
        ['Raciocínio primeiro', '"Raciocine passo a passo" reduz o erro pela metade.'],
        ['Sem jargão', 'Termos técnicos puxam respostas técnicas.'] ] },
      { titulo: 'Qual modelo usar', itens: [
        ['Haiku', 'O mais rápido e leve. Tarefas simples em volume: classificar, extrair dados, respostas curtas.'],
        ['Sonnet', 'Equilíbrio entre velocidade e capacidade. O dia a dia: redigir, resumir, analisar, conversar.'],
        ['Opus', 'Profundo e confiável. Raciocínio complexo: estratégia, análise longa, problemas difíceis.'],
        ['Fable', 'Topo da linha. Trabalho longo e autônomo: migrações grandes, tarefas de dias.'] ] },
      { titulo: '4 termos', itens: [
        ['Token', 'Pedaço de palavra, a unidade de medida. 200 mil tokens são cerca de 500 páginas.'],
        ['Contexto', 'Tudo que o modelo vê na conversa: janela de 200 mil a 1 milhão de tokens.'],
        ['Prompt', 'Instrução estruturada enviada ao modelo. O resultado começa aqui.'],
        ['Memória', 'O que o modelo retém entre conversas, em arquivos de preferência (.md).'] ] },
      { titulo: 'Ciclo 4D', itens: [
        ['Delegation', 'Delegar repetitivas e volume; co-executar brainstorm; não delegar decisão estratégica.'],
        ['Description', 'Os 5 passos do prompt: papel, objetivo, contexto, tom e formato.'],
        ['Discernment', 'Verificar números, datas e nomes. Pergunta útil: "Do que não há certeza?"'],
        ['Diligence', 'A assinatura do entregável é humana. Dados sensíveis ficam de fora.'] ] }
    ] },

  { num: '02', data: '2026-10-20', titulo: 'Markdown, Projetos e Rotinas',
    sub: 'Contexto fixo em .md, projetos e rotinas agendadas',
    gravacao: '', slides: '', pasta: 'https://drive.google.com/drive/folders/11hmpaooiLaaSd4AZa6Eb48xq3Q4wO-bT', tarefa: '', arquivos: [], trilha: [], insights: [] },

  { num: '03', data: '2026-10-27', titulo: 'Artifacts e Skills',
    sub: 'Iterar em Artifacts e criar skills sem código',
    gravacao: '', slides: '', pasta: 'https://drive.google.com/drive/folders/1Xyr7UDyMOE0pEdtX2LtYXsLJRxFH4b4c', tarefa: '', arquivos: [], trilha: [], insights: [] },

  { num: '04', data: '2026-11-03', titulo: 'Claude no Office',
    sub: 'Claude no Excel, no Word e no PowerPoint',
    gravacao: '', slides: '', pasta: 'https://drive.google.com/drive/folders/1O0QbA6JWt30_PFCWOn1JR9kZopS_3IUu', tarefa: '', arquivos: [], trilha: [], insights: [] }
];
