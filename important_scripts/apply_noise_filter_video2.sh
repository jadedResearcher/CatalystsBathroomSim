#!/bin/bash
for f in *.mp4
do
  tempfile="${f##*/}"

  ## display filename
  fileName="${f%.*}"
  echo "Processing $f file...I think it should be ${fileName}"

  # take action on each file. $f store current file name 
ffmpeg -i $f -bsf:v noise=alls=20:allf=t+u+p-c:v mpeg2video -q:v 20 -c:a copy ${fileName}_macroblock.ts
ffmpeg -i ${fileName}_macroblock.ts -codec:v libx264 -pix_fmt yuv420p ${fileName}_glitch.mp4


done