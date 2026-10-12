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
  drive: '',
  pastaGravacoes: '',
  pastaSlides: '',
  pastaArquivos: ''
};

/* Uma entrada por aula. Campos:
   gravacao  = link do vídeo (Drive)
   slides    = link do PDF da apresentação
   tarefa    = texto da tarefa da semana (vazio = "em breve")
   arquivos  = prompts, skills e templates da aula: { nome, tipo, url }
               tipo: 'prompt' | 'skill' | 'template' | 'link' */
window.AULAS = [
  { num: '01', data: '2026-10-13', titulo: 'Fundamentos de IA e Prompt',
    sub: 'camadas da IA, ciclo 4D e prompt em cinco passos',
    gravacao: '', slides: '', tarefa: '', arquivos: [] },

  { num: '02', data: '2026-10-20', titulo: 'Markdown, Projetos e Rotinas',
    sub: 'contexto fixo em .md, projetos e rotinas agendadas',
    gravacao: '', slides: '', tarefa: '', arquivos: [] },

  { num: '03', data: '2026-10-27', titulo: 'Artifacts e Skills',
    sub: 'iterar em Artifacts e criar skills sem código',
    gravacao: '', slides: '', tarefa: '', arquivos: [] },

  { num: '04', data: '2026-11-03', titulo: 'Claude no Office',
    sub: 'arquivo aberto no Office, da planilha ao slide',
    gravacao: '', slides: '', tarefa: '', arquivos: [] }
];
