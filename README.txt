IMPORTANT: if you want to make a new room, copy the bathroom.html, utils.js and full_bathroom.png files.

You want to put custom text into blurb.txt

And ramble.txt will put things into the javascript console.

If you have directories (or files) named NORTH, SOUTH, or EAST it will render them as potential exits. 
If they are files, they will SEEM like an exit, but if selected it will render the files text instead.

If you include any pngs BESIDES full_bathroom.png it will attempt to render it in a semi random location (at full size).

If you include any wav files it will add a button to play them in order (the file name should be the transcript of the file plus ordering number in the front (it'll get removed).

If that would be too long you can include a filename.txt file as well (no ordering number)

Because this is a file system maze, you can do file system fuckery (like symbolic links).


If you want to have a store in a bathroom, copy "copyThisAndRunToMakeShop.sh" to that directory, it'll tell you what to do.

