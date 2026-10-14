/* Claude Estruturado · Turma 3
   ÚNICO arquivo de conteúdo do app. Tudo na tela vem daqui.
   Qualquer link pode ficar vazio: o app cai para a pasta do Drive ou mostra "em breve". */

window.CURSO = {
  slug: 't3',
  nome: 'Claude Estruturado',
  turma: 'Turma 3',
  linha: 'IA estruturada, aplicada no dia a dia.',
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
   arquivos  = prompts, skills e templates da aula: { nome, tipo, url }
               tipo: 'prompt' | 'skill' | 'template' | 'link' */
window.AULAS = [
  { num: '01', data: '2026-10-13', titulo: 'Fundamentos de IA e Prompt',
    sub: 'Camadas da IA, ciclo 4D e prompt em cinco passos',
    gravacao: '', slides: 'https://drive.google.com/file/d/1NO_jTaj8q1WsbQzsmwYwP_HZ6wBxlLqD/view', pasta: 'https://drive.google.com/drive/folders/17H4qBiyNABpN5uja6uW89o8OF-sNNMnY', tarefa: '', arquivos: [] },

  { num: '02', data: '2026-10-20', titulo: 'Markdown, Projetos e Rotinas',
    sub: 'Contexto fixo em .md, projetos e rotinas agendadas',
    gravacao: '', slides: '', pasta: 'https://drive.google.com/drive/folders/11hmpaooiLaaSd4AZa6Eb48xq3Q4wO-bT', tarefa: '', arquivos: [] },

  { num: '03', data: '2026-10-27', titulo: 'Artifacts e Skills',
    sub: 'Iterar em Artifacts e criar skills sem código',
    gravacao: '', slides: '', pasta: 'https://drive.google.com/drive/folders/1Xyr7UDyMOE0pEdtX2LtYXsLJRxFH4b4c', tarefa: '', arquivos: [] },

  { num: '04', data: '2026-11-03', titulo: 'Claude no Office',
    sub: 'Claude no Excel, no Word e no PowerPoint',
    gravacao: '', slides: '', pasta: 'https://drive.google.com/drive/folders/1O0QbA6JWt30_PFCWOn1JR9kZopS_3IUu', tarefa: '', arquivos: [] }
];
