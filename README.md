# Claude Estruturado · Turma 3

App da turma (PWA, sem build) publicado no GitHub Pages: `https://robertaprota-hub.github.io/claude-estruturado-t3/`.
Quatro abas: **Gravações · Slides · Arquivos · Semana** (próxima aula, Meet, tarefa da semana, calendário).

- `curso.js` — ÚNICO arquivo de conteúdo: datas, links de gravação e slides, tarefa da semana, arquivos (prompts, skills, templates).
- `index.html` — o app inteiro. Não tem dado de turma.
- `sw.js` — cache offline. O nome do cache traz a versão; `publicar.sh` sobe o número a cada publicação.

## Rotina pós-aula

1. Abrir `curso.js`, colar o link da gravação e do PDF na aula, escrever a `tarefa`, listar os `arquivos`.
2. `./publicar.sh "aula 01: links e tarefa"`.
