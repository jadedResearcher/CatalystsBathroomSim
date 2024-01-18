#!/bin/bash
for f in *.mp4
do
  tempfile="${f##*/}"

  ## display filename
  fileName="${f%.*}"
  echo "Processing $f file...I think it should be ${fileName}"

  # take action on each file. $f store current file name 
ffmpeg -i ${f} -codec:v huffyuv -c:a pcm_s16le -bsf noise=1000000 ${fileName}_glitch.mkv
ffmpeg -i ${fileName}_glitch.mkv -codec:v libx264 -pix_fmt yuv420p ${fileName}_glitch.mp4


done