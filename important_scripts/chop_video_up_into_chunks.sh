#!/bin/bash
for f in *.mp4
do
  tempfile="${f##*/}"

  ## display filename
  fileName="${f%.*}"
  echo "Processing $f file...I think it should be ${fileName}"

  # take action on each file. $f store current file name 

ffmpeg -i ${f} -threads 3 \
       -vcodec copy -f segment -segment_time 00:21 \
       -reset_timestamps 1 \
       ${fileName}h264_%02d.mp4

done