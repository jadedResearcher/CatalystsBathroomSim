#!/bin/bash
for f in *.mp4
do
  tempfile="${f##*/}"

  ## display filename
  fileName="${f%.*}"
  echo "Processing $f file...I think it should be ${fileName}"

  # take action on each file. $f store current file name 
ffmpeg -i ${f}\
 -vf noise=alls=100:allf=t+u+p \
-c:v libx264 \
${fileName}_noise.mp4 \

done