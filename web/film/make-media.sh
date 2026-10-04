#!/usr/bin/env bash
# Renders the final films and posters into ../media from the plates in public/plates.
# H.264 MP4 (CRF 28) from Remotion; VP9 WebM by two-pass ffmpeg from a high-quality VP9 intermediate.
# Usage: ./make-media.sh [16x9|9x16 ...]   (default: both). Requires ffmpeg.
set -euo pipefail
cd "$(dirname "$0")"
M=../media
mkdir -p out "$M"
tags=("$@"); [ ${#tags[@]} -gt 0 ] || tags=(16x9 9x16)
for tag in "${tags[@]}"; do
  case $tag in
    16x9) id=Intro16; rate=4800k; srccrf=34 ;;
    9x16) id=Intro9;  rate=4300k; srccrf=30 ;;
    *) echo "unknown format: $tag" >&2; exit 1 ;;
  esac
  CRF=28 node render.mjs media $id "$M/intro-$tag.mp4"
  CODEC=vp9 CRF=$srccrf node render.mjs media $id "out/src-$tag.webm"
  ffmpeg -nostdin -loglevel error -y -i "out/src-$tag.webm" -c:v libvpx-vp9 -b:v $rate -row-mt 1 -deadline good -cpu-used 2 -pass 1 -passlogfile "out/vp9-$tag" -an -f null /dev/null
  ffmpeg -nostdin -loglevel error -y -i "out/src-$tag.webm" -c:v libvpx-vp9 -b:v $rate -row-mt 1 -deadline good -cpu-used 2 -pass 2 -passlogfile "out/vp9-$tag" -an "$M/intro-$tag.webm"
  node render.mjs still $id 0
  ffmpeg -nostdin -loglevel error -y -i "out/$id-0.png" -q:v 3 "$M/poster-$tag.jpg"
done
# put the music track back into the new films (see ../music/build.sh)
../music/build.sh
