#!/bin/bash
for f in *.mp4
do
  tempfile="${f##*/}"

  ## display filename
  fileName="${f%.*}"
  echo "Processing $f file...I think it should be ${fileName}"

  # take action on each file. $f store current file name 
## hey be careful this doesnt seem to know when to end so i hardcoded it to 4 seconds
## and makes somethign encoded weird
## just editing it in like, clipchamp or something will be enough to fix it tho
ffmpeg -i $f -filter_complex "color=c=0x000000:r=1:s=8x16,format=rgb24[b];color=c=0xa1b234:r=1:s=8x16,format=rgb24[w];[b][w]hstack=2[bw];[0:V:0][bw]paletteuse=bayer:bayer_scale=1" -t 00:00:04 ${fileName}_dither.mp4


done
