#!/bin/bash
for f in *.m4a
do
  tempfile="${f##*/}"

  ## display filename
  fileName="${f%.*}"
  echo "Processing $f file...I think it should be ${fileName}.ogg and mp3"

  # take action on each file. $f store current file name
  ffmpeg -i $f -acodec libvorbis ${fileName}.ogg
  ffmpeg -i $f  ${fileName}.mp3


done
