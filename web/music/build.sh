#!/usr/bin/env bash
# Composes the music and puts it into ../media.
#   1. node compose.mjs                -> out/film.wav, out/map-loop.wav
#   2. map theme                       -> ../media/music-map.webm (Opus) and ../media/music-map.m4a (AAC)
#   3. film cue muxed into the films   -> ../media/intro-*.mp4 (AAC) and intro-*.webm (Opus); the video is copied, not re-encoded
# Re-running replaces the audio track: only the video stream of each film is kept.
# Requires Node.js and ffmpeg.
set -euo pipefail
cd "$(dirname "$0")"
media=../media

node compose.mjs out

ffmpeg -v error -y -i out/map-loop.wav -c:a libopus -b:a 96k "$media/music-map.webm"
ffmpeg -v error -y -i out/map-loop.wav -c:a aac -b:a 128k -movflags +faststart "$media/music-map.m4a"

for tag in 16x9 9x16; do
  for ext in mp4 webm; do
    film="$media/intro-$tag.$ext"
    [ -f "$film" ] || { echo "skipped $film (not found)"; continue; }
    if [ "$ext" = mp4 ]; then acodec=(-c:a aac -b:a 160k -movflags +faststart); else acodec=(-c:a libopus -b:a 128k); fi
    tmp="out/intro-$tag.$ext"
    ffmpeg -v error -y -i "$film" -i out/film.wav -map 0:v:0 -map 1:a:0 -c:v copy "${acodec[@]}" -shortest "$tmp"
    mv "$tmp" "$film"
  done
done
ls -l "$media"/music-map.* "$media"/intro-*
