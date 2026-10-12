#!/usr/bin/env bash
# Publica o app da turma: sobe a versão do cache, commita e faz push.
# Uso (na raiz do repositório da turma): ./publicar.sh "mensagem do commit"
set -euo pipefail

MSG="${1:-atualiza app}"

CACHE=$(grep -oE "claude-estruturado-[a-z0-9]+-v[0-9]+" sw.js | head -1)
[ -z "$CACHE" ] && { echo "não achei o nome do cache em sw.js"; exit 1; }
VER=${CACHE##*-v}
PREFIX=${CACHE%-v*}
NOVA=$((VER + 1))
sed -i.bak "s/${CACHE}/${PREFIX}-v${NOVA}/" sw.js && rm -f sw.js.bak
echo "cache: ${CACHE} -> ${PREFIX}-v${NOVA}"

git add -A
git commit -m "${MSG} (cache v${NOVA})"
git push origin main

REPO=$(basename "$(git rev-parse --show-toplevel)")
echo "publicado. o Pages atualiza em 1-2 minutos:"
echo "https://robertaprota-hub.github.io/${REPO}/"
