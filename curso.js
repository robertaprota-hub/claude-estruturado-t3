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
   insights  = o essencial da aula: { titulo, icone, num (true = enumerar), itens: [[termo, definição], ...] }
   A trilha de uma aula futura fica escondida até o dia da aula.
   arquivos  = prompts, skills e templates da aula: { nome, tipo, url }
               tipo: 'prompt' | 'skill' | 'template' | 'link' */
window.AULAS = [
  { num: '01', data: '2026-10-13', titulo: 'Fundamentos de IA e Prompt',
    sub: 'Camadas da IA, ciclo 4D e prompt em cinco passos',
    gravacao: 'https://drive.google.com/file/d/1iF7Qo2KmpyKr2-1W4jQX6YSe5sgpEB29/view', slides: 'https://drive.google.com/file/d/1NO_jTaj8q1WsbQzsmwYwP_HZ6wBxlLqD/view', pasta: 'https://drive.google.com/drive/folders/17H4qBiyNABpN5uja6uW89o8OF-sNNMnY',
    tarefa: 'Mapear 3 tarefas repetitivas.',
    arquivos: [],
    trilha: [
      'Baixar o Claude no computador e no celular',
      'Assinar o plano Pro',
      'Configurar a memória',
      'Escrever as instruções para o Claude: tom, premissas e incerteza',
      'Treinar prompts com os 5 passos',
      'Mapear 3 tarefas repetitivas'
    ],
    insights: [
      { titulo: 'Os 5 passos do prompt', icone: 'i-list', num: true, itens: [
        ['Papel', 'quem o Claude é na conversa'],
        ['Objetivo', 'o resultado esperado'],
        ['Contexto', 'a informação para executar'],
        ['Tom', 'formal, executivo ou direto'],
        ['Formato', 'tabela, lista ou bullets'] ] },
      { titulo: 'As 7 regras de ouro', icone: 'i-skill', num: true, itens: [
        ['Pedido específico', '"as 3 maiores despesas do mês"'],
        ['Exemplo, não adjetivo', '"no estilo deste e-mail"'],
        ['Tarefas em etapas', 'revisar uma antes da próxima'],
        ['Iteração', 'a primeira resposta é rascunho'],
        ['Feedback direto', '"aprofunde o 2º parágrafo"'],
        ['Raciocínio primeiro', '"raciocine passo a passo"'],
        ['Sem jargão', 'termo técnico puxa resposta técnica'] ] },
      { titulo: 'Qual modelo usar', icone: 'i-layers', itens: [
        ['Haiku', 'rápido: classificar, extrair, responder curto'],
        ['Sonnet', 'o dia a dia: redigir, resumir, analisar'],
        ['Opus', 'raciocínio complexo: estratégia, análise longa'],
        ['Fable', 'trabalho longo e autônomo: tarefas de dias'] ] },
      { titulo: '4 termos', icone: 'i-book', itens: [
        ['Token', 'pedaço de palavra; 200 mil = 500 páginas'],
        ['Contexto', 'tudo que o modelo vê na conversa'],
        ['Prompt', 'o pedido estruturado enviado ao Claude'],
        ['Memória', 'o que o Claude guarda entre as conversas'] ] },
      { titulo: 'AI Fluency - 4D', icone: 'i-cycle', itens: [
        ['Delegation', 'delegar o repetitivo, não a decisão'],
        ['Description', 'pedir com os 5 passos'],
        ['Discernment', 'conferir números, datas e nomes'],
        ['Diligence', 'a assinatura é humana; dado sensível fora'] ] }
    ] },

  { num: '02', data: '2026-10-20', titulo: 'Markdown, Projetos e Rotinas',
    sub: 'Contexto fixo em .md, projetos e rotinas agendadas',
    gravacao: 'https://drive.google.com/file/d/1BqGAPSL8N5DUQJ7sDEn1ekVtMk7NHlTS/view', slides: 'https://drive.google.com/file/d/1s7ckuVI3ns2YyA8kIuscEw5PvNMIQsKu/view', pasta: 'https://drive.google.com/drive/folders/11hmpaooiLaaSd4AZa6Eb48xq3Q4wO-bT', tarefa: 'Criar um projeto para uma tarefa da sua rotina.', arquivos: [], trilha: [
      'Transformar um documento seu em .md',
      'Criar um projeto para uma tarefa repetitiva: instruções e arquivos',
      'Conectar o e-mail ou o Drive ao Claude',
      'Agendar uma rotina',
      'Instalar o Claude no Excel, no Word e no PowerPoint'
    ], insights: [] },

  { num: '03', data: '2026-11-03', titulo: 'Artifacts e Skills',
    sub: 'Iterar em Artifacts e criar skills sem código',
    gravacao: '', slides: '', pasta: 'https://drive.google.com/drive/folders/1Xyr7UDyMOE0pEdtX2LtYXsLJRxFH4b4c', tarefa: '', arquivos: [], trilha: [
      'Criar um artifact',
      'Instalar uma skill pronta',
      'Criar uma skill',
      'Testar a skill com /nome numa conversa'
    ], insights: [] },

  { num: '04', data: '2026-11-10', titulo: 'Claude no Office',
    sub: 'Claude no Excel, no Word e no PowerPoint',
    gravacao: '', slides: '', pasta: 'https://drive.google.com/drive/folders/1O0QbA6JWt30_PFCWOn1JR9kZopS_3IUu', tarefa: '', arquivos: [], trilha: [
      'Rodar /verificar numa cópia de uma planilha sua',
      'Fazer o /fup de um arquivo e levar para um slide',
      'Criar um documento no Claude Docs ou uma apresentação no Claude Slides',
      'Responder o feedback do curso'
    ], insights: [] }
];
