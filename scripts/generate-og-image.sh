#!/usr/bin/env bash
#
# Regenera public/og-image.png (en) y public/og-image-es.png (es) a partir de assets/og/og-image.template.svg.
#
# Uso:
#   npm run og:generate
#   ./scripts/generate-og-image.sh
#
# Para cambiar el diseno, edita assets/og/og-image.template.svg.
# Para cambiar los textos, edita los bloques TECH / ROLE / LOCATION / SUBTITLE / STICKER de cada idioma.
#
# Las fuentes de marca se descargan una sola vez a una cache local aislada
# (assets/og/.fonts, ignorada por git) para que el render sea identico en
# cualquier maquina sin tocar las fuentes del sistema.

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
TEMPLATE="$ROOT_DIR/assets/og/og-image.template.svg"
FONT_DIR="$ROOT_DIR/assets/og/.fonts"

WIDTH=1200
HEIGHT=630

# --- Textos --------------------------------------------------------------------
# El "&" debe ir como "&amp;" (es XML).
# Un bloque por idioma; el nombre del archivo de salida va en OUT_<lang>.
declare -A TECH=(
  [en]="BACKEND · INTEGRATIONS · SQL · PRODUCTION SUPPORT · INTERNAL TOOLS · REMOTE"
  [es]="BACKEND · INTEGRACIONES · SQL · SOPORTE DE PRODUCCIÓN · HERRAMIENTAS INTERNAS"
)
declare -A ROLE=(
  [en]="Backend &amp; Integration Engineer"
  [es]="Ingeniero Backend y de Integraciones"
)
declare -A SUBTITLE=(
  [en]="Backend systems, integrations and production support"
  [es]="Sistemas backend, integraciones y soporte de producción"
)
declare -A LOCATION=(
  [en]="Tunja, Colombia · Remote"
  [es]="Tunja, Colombia · Remoto"
)
# Same outcome stickers as the hero (src/i18n/ui.ts → stickers.items).
declare -A STICKER1=(
  [en]="Systems that talk"
  [es]="Sistemas que se hablan"
)
declare -A STICKER2=(
  [en]="Bugs traced to the root"
  [es]="Errores hasta la raíz"
)
declare -A OUT=(
  [en]="$ROOT_DIR/public/og-image.png"
  [es]="$ROOT_DIR/public/og-image-es.png"
)

# Fuentes requeridas: "archivo|URL".
FONTS=(
  "ArchivoBlack.ttf|https://github.com/google/fonts/raw/main/ofl/archivoblack/ArchivoBlack-Regular.ttf"
  "SpaceGrotesk.ttf|https://github.com/google/fonts/raw/main/ofl/spacegrotesk/SpaceGrotesk%5Bwght%5D.ttf"
  "JetBrainsMono.ttf|https://github.com/google/fonts/raw/main/ofl/jetbrainsmono/JetBrainsMono%5Bwght%5D.ttf"
)

# --- Verificaciones previas ----------------------------------------------------
if [[ ! -f "$TEMPLATE" ]]; then
  echo "ERROR: no se encontro la plantilla en $TEMPLATE" >&2
  exit 1
fi

# Elegir un rasterizador disponible (en orden de preferencia)
RENDERER=""
if command -v rsvg-convert >/dev/null 2>&1; then
  RENDERER="rsvg"
elif command -v inkscape >/dev/null 2>&1; then
  RENDERER="inkscape"
elif command -v magick >/dev/null 2>&1; then
  RENDERER="magick"
elif command -v convert >/dev/null 2>&1; then
  RENDERER="convert"
else
  echo "ERROR: necesitas uno de: rsvg-convert, inkscape o ImageMagick (magick/convert)." >&2
  echo "  Fedora/Nobara:  sudo dnf install librsvg2-tools   (o inkscape / ImageMagick)" >&2
  echo "  Debian/Ubuntu:  sudo apt install librsvg2-bin" >&2
  echo "  macOS:          brew install librsvg" >&2
  exit 1
fi

# --- Descargar fuentes a la cache local si faltan ------------------------------
mkdir -p "$FONT_DIR"
for entry in "${FONTS[@]}"; do
  name="${entry%%|*}"
  url="${entry#*|}"
  if [[ ! -f "$FONT_DIR/$name" ]]; then
    echo "Descargando fuente $name ..."
    if ! curl -sfL -o "$FONT_DIR/$name" "$url"; then
      echo "ERROR: no se pudo descargar $name desde $url" >&2
      rm -f "$FONT_DIR/$name"
      exit 1
    fi
  fi
done

# --- Entorno fontconfig aislado (no toca las fuentes del usuario) --------------
FC_HOME="$(mktemp -d)"
trap 'rm -rf "$FC_HOME"' EXIT
export XDG_DATA_HOME="$FC_HOME/share"
export XDG_CACHE_HOME="$FC_HOME/cache"
mkdir -p "$XDG_DATA_HOME/fonts" "$XDG_CACHE_HOME"
cp "$FONT_DIR"/*.ttf "$XDG_DATA_HOME/fonts/"
fc-cache -f "$XDG_DATA_HOME/fonts" >/dev/null 2>&1 || true

render() {
  local svg="$1" png="$2"
  case "$RENDERER" in
    rsvg) rsvg-convert -w "$WIDTH" -h "$HEIGHT" -o "$png" "$svg" ;;
    inkscape) inkscape "$svg" --export-type=png --export-filename="$png" \
      --export-width="$WIDTH" --export-height="$HEIGHT" >/dev/null 2>&1 ;;
    magick) magick -background none -density 96 "$svg" -resize "${WIDTH}x${HEIGHT}" "$png" ;;
    convert) convert -background none -density 96 "$svg" -resize "${WIDTH}x${HEIGHT}" "$png" ;;
  esac
}

# Escapa un "&" para usarlo como reemplazo en ${var//pat/repl} (Bash 5).
esc() {
  local s="$1"
  s="${s//\\/\\\\}"
  s="${s//&/\\&}"
  printf '%s' "$s"
}

for lang in en es; do
  svg="$(cat "$TEMPLATE")"
  svg="${svg//@@TECH@@/$(esc "${TECH[$lang]}")}"
  svg="${svg//@@ROLE@@/$(esc "${ROLE[$lang]}")}"
  svg="${svg//@@SUBTITLE@@/$(esc "${SUBTITLE[$lang]}")}"
  svg="${svg//@@LOCATION@@/$(esc "${LOCATION[$lang]}")}"
  svg="${svg//@@STICKER1@@/$(esc "${STICKER1[$lang]}")}"
  svg="${svg//@@STICKER2@@/$(esc "${STICKER2[$lang]}")}"

  tmp_svg="$FC_HOME/og-$lang.svg"
  printf '%s' "$svg" >"$tmp_svg"

  echo "Generando ${OUT[$lang]##*/} con $RENDERER ..."
  render "$tmp_svg" "${OUT[$lang]}"
  echo "OK -> public/${OUT[$lang]##*/} ${WIDTH}x${HEIGHT}"
done
