#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
usage() {
  echo "Usage: $(basename "$0") [path-to.png]" >&2
  exit 1
}

[[ $# -le 1 ]] || usage

src="${1:-$root/assets/logo.png}"
[[ "$src" = /* ]] || src="$root/$src"
[[ -f "$src" ]] || { echo "PNG not found: $src" >&2; exit 1; }

out="$root/icons"
sizes=(16 32 48 128)
mkdir -p "$out"

render() {
  local size="$1"
  local file="$out/icon${size}.png"
  command -v magick >/dev/null && magick "$src" -filter Lanczos -resize "${size}x${size}" -strip "$file" && return
  command -v convert >/dev/null && convert "$src" -filter Lanczos -resize "${size}x${size}" -strip "$file" && return
  echo "Need imagemagick installed." >&2
  exit 1
}

for size in "${sizes[@]}"; do
  render "$size"
done

echo "Generated ${#sizes[@]} MV3 icons from $src into $out/"
