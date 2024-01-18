#!/bin/bash
for f in *.mp3
do
  tempfile="${f##*/}"

  ## display filename
  fileName="${f%.*}"
  echo "Processing $f file...I think it should be ${fileName}.json"

  #need to copy sample.json (which is also in this dir) to fileName.json
  #don't worry about putting it in the right spot, for slurps it will just be in the dir directly
  cp sample.json ${fileName}.json

done
