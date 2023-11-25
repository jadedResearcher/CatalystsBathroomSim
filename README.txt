IMPORTANT: if you want to make a new room, copy the bathroom.html, utils.js and full_bathroom.png files.

You want to put custom text into blurb.txt

And ramble.txt will put things into the javascript console.

If you have directories (or files) named NORTH, SOUTH, or EAST it will render them as potential exits. 
If they are files, they will SEEM like an exit, but if selected it will render the files text instead.

If you include any pngs BESIDES full_bathroom.png it will attempt to render it in a random location (at full size).

If you include any mp3 files it will try to play it, or the ogg equivalent (browser dependant) as well as look for the same filename.txt to display a transcript.

Because this is a file system maze, you can do file system fuckery (like symbolic links).



