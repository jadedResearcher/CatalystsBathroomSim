const layerURLs = ["http://farragofiction.com/CatalystsBathroomSim/NORTH/EAST/EAST/SOUTH/NORTH/SOUTH/EAST/EAST/images/ClownDollParts/body/", "http://farragofiction.com/CatalystsBathroomSim/NORTH/EAST/EAST/SOUTH/NORTH/SOUTH/EAST/EAST/images/ClownDollParts/face/", "http://farragofiction.com/CatalystsBathroomSim/NORTH/EAST/EAST/SOUTH/NORTH/SOUTH/EAST/EAST/images/ClownDollParts/hats/","http://farragofiction.com/CatalystsBathroomSim/NORTH/EAST/EAST/SOUTH/NORTH/SOUTH/EAST/EAST/images/ClownDollParts/extra/"];

let randomDoll;

const makeDollFromDirectories = async (directory_list) => {
  const badStyles = createElementWithClassAndParent("style", document.querySelector("body"));
  badStyles.innerHTML = `
  .doll-container {
    position: absolute;
    border-radius: 3px;
    width: 100%;
    top: 0px;
    height: fit-content;
    display: flex;
    z-index: 1000;
    opacity: 0.25;
    animation: flicker 31s ease-in infinite;

}

.doll {
  position: sticky;
  width: 50%;
  height: fit-content;
  cursor: pointer;
  top: 0px;
}

.fun-canvas {
  position: absolute;
  top: 0px;
  left: 0px;
  filter: saturate(0.5) brightness(0.75);
}

@keyframes flicker {
  0% {
    transform: skewX(1deg);
    opacity: 0.01;
  }

  50% {
    transform: skewX(-1deg);
    opacity: 0.85;

  }

  100% {
    transform: skewX(1deg);
    opacity: 0.01;

  }
}
  `

  const doll = new Doll(directory_list.map((d) => new Layer(d)));
  doll.allowColorEditing = Math.random()>0.75; //rare but not terribly so
  await doll.init();
  const parent = document.querySelector("#room-container");
  doll.render(parent);
  return doll; 
}

const initRandomDoll = ()=>{
  randomDoll = makeDollFromDirectories(layerURLs);
}


window.addEventListener("load",initRandomDoll)
//https://archiveofourown.org/works/58111936
class Doll {
  layers = [];
  constructor(layers) {
    this.layers = layers;
  }

  init = async () => {
    for (let l of this.layers) {
      await l.init();
    }
  }


  render = async (parent, dollContainer) => {
    const fuckery = true;
    if (!dollContainer) {
      dollContainer = createElementWithClassAndParent("div", parent, "doll-container section");
    } else {
      dollContainer.innerHTML = ""; //clear it out for a rerender
    }
    const dollWrapper = createElementWithClassAndParent("div", dollContainer, "doll-wrapper");
    const doll = createElementWithClassAndParent("div", dollWrapper, "doll");



    let canvas = document.createElement("canvas");
    const funCanvas = document.createElement("canvas");
    funCanvas.className = "fun-canvas";

    canvas.width = 0;
    canvas.height = 0;

    for (let layer of this.layers) {
      await layer.render(doll, canvas, funCanvas, fuckery, dollContainer, this.render);
    }

    doll.append(canvas);
    //upscale for maximum aliasing
    if (fuckery) {
      const funContext = funCanvas.getContext("2d");
      funContext.imageSmoothingEnabled = true; //glitch it out as much as you can please :)
      funContext.drawImage(funCanvas, 0, 0, canvas.width * 3, canvas.height * 3);
      funContext.clearRect(0, 0, canvas.width / 3, canvas.height / 3); //remove tiny version left for anti aliasing purposes

      doll.append(funCanvas);
    }



    if (fuckery) {
      haveFunGlitchingCanvas(funCanvas); //:) :) ;)

    }

  }
}

class Layer {
  directory = "http://farragofiction.com/404";
  parts = []; //loaded from directory (it has to have an apache file structure type list)
  current_part = ""; //what has been chosen?
  allowColorEditing = false; //could be seriously expensive, don't do it unless the part has a limited pallete
  colorMap = {}; //unless you enable scanning it for color editing, this will be empty, otherwise its keys are parts, and their values are a map of color pairings
  constructor(directory) {
    this.directory = directory;
  }

  init = async () => {
    this.parts = await getImages(this.directory);
    this.chooseRandomPart();
  }

  chooseRandomPart = () => {
    return this.choosePart(pickFrom(this.parts));
  }

  chooseRandomColors = ()=>{
    for (let colorKey of Object.keys(this.colorMap[this.current_part])) {
      this.colorMap[this.current_part][colorKey] = { red: getRandomNumberBetween(0, 255), green: getRandomNumberBetween(0, 255), blue: getRandomNumberBetween(0, 255) }
    }
  }

  choosePart = (part) => {
    this.current_part = this.directory + part;
    return this.current_part;
  }



  handleActualRendering = (layerImage, doll, canvas, funCanvas, fuckery) => {
    if (canvas.width == 0) {
      canvas.width = layerImage.width;
      canvas.height = layerImage.height;
      funCanvas.width = canvas.width;
      funCanvas.height = canvas.height;
      doll.style.width = layerImage.width + "px";
      doll.parentElement.style.width = layerImage.width + "px";

    }

    const context = canvas.getContext("2d");
    context.imageSmoothingEnabled = false;
    if (this.allowColorEditing) {
      const recolorCanvas = document.createElement("canvas");
      recolorCanvas.width = canvas.width;
      recolorCanvas.height = canvas.height;
      const recolorContext = recolorCanvas.getContext("2d");
      recolorContext.imageSmoothingEnabled = false;
      recolorContext.drawImage(layerImage, 0, 0, canvas.width, canvas.height);

      changeColorsFromPaletteMap(recolorCanvas, this.colorMap[this.current_part]);
      context.drawImage(recolorCanvas, 0, 0, canvas.width, canvas.height);

    } else {
      context.drawImage(layerImage, 0, 0, canvas.width, canvas.height);
    }
    if (fuckery) {
      const funContext = funCanvas.getContext("2d");
      funContext.imageSmoothingEnabled = true; //glitch it out as much as you can please :)

      funContext.drawImage(layerImage, 0, 0, canvas.width / 3, canvas.height / 3); //downscale for maximum aliasing
    }
    layerImage.remove();
  }


  render = async (doll, canvas, funCanvas, fuckery, dollContainer, callback) => {
    const layerImage = createElementWithClassAndParent("img", doll, "doll-layer");
    await waitForImage(layerImage, this.current_part);
    this.handleActualRendering(layerImage, doll, canvas, funCanvas, fuckery); //has to happen after we get the image
  }
}




//canvas_utils but copied here so its one file


//modified from https://stackoverflow.com/questions/46399223/async-await-in-image-loading
const waitForImage = (image, src) => {
  return new Promise((resolve, reject) => {
    image.onload = () => resolve(true)
    image.onerror = reject
    image.src = src;
  })
}

const uniqueColors = (loaded_image) => {
  let canvas = document.createElement("canvas");
  canvas.width = loaded_image.width;
  canvas.height = loaded_image.height;
  const context = canvas.getContext("2d");
  context.imageSmoothingEnabled = false;
  context.drawImage(loaded_image, 0, 0, canvas.width, canvas.height);
  const remembered_colors = {}; //map cuz its easier to not have repeats
  //TODO actually count colors
  var output = context.getImageData(0, 0, canvas.width, canvas.height);
  var d = output.data;
  for (var i = 0; i < d.length; i += 4) {
    if (d[i + 3] > 0) { //not transparent
      let red = d[i];
      let green = d[i + 1];
      let blue = d[i + 2];
      if (!remembered_colors[`${red},${green},${blue}`]) {
        remembered_colors[`${red},${green},${blue}`] = { red, green, blue }
      }
    }

  }
  return remembered_colors;
}


//async, give it an image source and it'll handle loading it and rendering it to the target canvas
const kickoffImageRenderingToCanvas = (source, canvas) => {
  var img = new Image();
  img.crossOrigin = "Anonymous";
  img.addEventListener('load', function () {
    renderImageToCanvasAndRandomizeColors(img, canvas);
  }, false);
  img.src = source;
}

//takes in a base canvas and applys each transform individually to get a css animation on the bg
//transform array is an array of functions that take in a canvas and do operations on it
const transformCanvasIntoAnimationWithTransform = (canvas, transform_array) => {
  const original = document.createElement("canvas");
  const context = original.getContext("2d");
  context.drawImage(canvas, 0, 0);

  const bigBoi = document.createElement("canvas");
  bigBoi.width = canvas.width * transform_array.length;
  bigBoi.height = canvas.height;
  const bigContext = bigBoi.getContext("2d");
  let index = 0;
  for (let transform of transform_array) {
    const copy = document.createElement("canvas");
    const context = copy.getContext("2d");
    context.drawImage(original, 0, 0);
    transform(copy);
    bigContext.drawImage(copy, canvas.width * index, 0);


    index++;

  }
  //bigContext.drawImage(original,25,25);


  return bigBoi;
}

//stacked vertically, not horizontally
const transformCanvasIntoAnimationWithTransformVertical = (canvas, transform_array) => {
  const original = document.createElement("canvas");
  const context = original.getContext("2d");
  context.drawImage(canvas, 0, 0);

  const bigBoi = document.createElement("canvas");
  bigBoi.width = canvas.width;
  bigBoi.height = canvas.height * transform_array.length;
  const bigContext = bigBoi.getContext("2d");
  let index = 0;
  for (let transform of transform_array) {
    const copy = document.createElement("canvas");
    const context = copy.getContext("2d");
    context.drawImage(original, 0, 0);
    transform(copy);
    bigContext.drawImage(copy, 0, canvas.height * index);
    index++;
  }
  //bigContext.drawImage(original,25,25);


  return bigBoi;
}

//given an already loaded image, render it to the target canvas.
const renderImageToCanvas = (img, canvas) => {
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
  }
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0);
  return canvas;
}

const renderImageToCanvasAndRandomizeColors = (img, canvas) => {
  if (!canvas) {
    canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
  }
  const context = canvas.getContext("2d");
  context.drawImage(img, 0, 0);
  randomizeColors(canvas);
  return canvas;

}

//https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    red: parseInt(result[1], 16),
    green: parseInt(result[2], 16),
    blue: parseInt(result[3], 16)
  } : null;
}
//colorMap is {[`${red},${green},${blue}`]: {red, green, blue}}
const changeColorsFromPaletteMap = (canvas, colorMap) => {
  var ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return;
  }
  ctx.imageSmoothingEnabled = false;

  var output = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var d = output.data;
  for (var i = 0; i < d.length; i += 4) {
    if (d[i + 3] > 0) {
      let red = d[i];
      let green = d[i + 1];
      let blue = d[i + 2];
      const newValue = colorMap[`${red},${green},${blue}`]
      if (newValue && (red != newValue.red || green != newValue.green || blue != newValue.blue)) {
        d[i] = newValue.red;
        d[i + 1] = newValue.green;
        d[i + 2] = newValue.blue;
      }
    }

  }

  ctx.putImageData(output, 0, 0);
}

const haveFunGlitchingCanvas = (canvas_that_is_in_dom) => {
  let remembered_colors = {}
  var ctx = canvas_that_is_in_dom.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return;
  }
  //only need to get the colors once
  var output = ctx.getImageData(0, 0, canvas_that_is_in_dom.width, canvas_that_is_in_dom.height);
  var d = output.data;

  const fuckWithColors = (d, remembered_colors) => {
    for (var i = 0; i < d.length; i += 4) {
      if (d[i + 3] > 0) {
        let red = d[i];
        let green = d[i + 1];
        let blue = d[i + 2];
        if (!remembered_colors[`${red},${green},${blue}`]) {
          remembered_colors[`${red},${green},${blue}`] = { red: getRandomNumberBetween(0, 255), green: getRandomNumberBetween(0, 255), blue: getRandomNumberBetween(0, 255) }
        }
        d[i] = remembered_colors[`${red},${green},${blue}`].red;
        d[i + 1] = remembered_colors[`${red},${green},${blue}`].green;
        d[i + 2] = remembered_colors[`${red},${green},${blue}`].blue;
      }

    }
    ctx.putImageData(output, 0, 0);
  }
  let timeout;

    fuckWithColors(d,remembered_colors);
    timeout = setInterval(()=>{
      requestAnimationFrame(()=>fuckWithColors(d,remembered_colors));
    }, 100)
}

//doesn't care about palettes. just for every color it finds shoves it in a hash map and refers to it later
const randomizeColors = (canvas) => {
  //key is color in original image, value is color in new image (both in rgb)
  let remembered_colors = {}
  var ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return;
  }
  var output = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var d = output.data;
  for (var i = 0; i < d.length; i += 4) {
    if (d[i + 3] > 0) {
      let red = d[i];
      let green = d[i + 1];
      let blue = d[i + 2];
      if (!remembered_colors[`${red},${green},${blue}`]) {
        remembered_colors[`${red},${green},${blue}`] = { red: getRandomNumberBetween(0, 255), green: getRandomNumberBetween(0, 255), blue: getRandomNumberBetween(0, 255) }
      }
      d[i] = remembered_colors[`${red},${green},${blue}`].red;
      d[i + 1] = remembered_colors[`${red},${green},${blue}`].green;
      d[i + 2] = remembered_colors[`${red},${green},${blue}`].blue;
    }

  }

  ctx.putImageData(output, 0, 0);
}

//doesn't care about palettes. just for every color it finds shoves it in a hash map and refers to it later
const turnToPureStatic = (canvas) => {
  //key is color in original image, value is color in new image
  let remembered_colors = {}
  var ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return;
  }
  var output = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var d = output.data;
  let offset = 0;
  for (var i = 0; i < d.length; i += 4) {
    if (d[i + 3] > 0) {
      d[i] = getRandomNumberBetween(0, 255)
      d[i + 1] = getRandomNumberBetween(0, 255);
      d[i + 2] = getRandomNumberBetween(0, 255);
    }


  }
  ctx.putImageData(output, 0, 0);
}

//doesn't care about palettes. just for every color it finds shoves it in a hash map and refers to it later
const turnToPartialStatic = (canvas) => {
  //key is color in original image, value is color in new image
  let remembered_colors = {}
  var ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return;
  }
  var output = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var d = output.data;
  let offset = 0;
  for (var i = 0; i < d.length; i += 4) {
    if (d[i + 3] > 0 && Math.random() > 0.35) {
      d[i] = getRandomNumberBetween(0, 255)
      d[i + 1] = getRandomNumberBetween(0, 255);
      d[i + 2] = getRandomNumberBetween(0, 255);
    }


  }
  ctx.putImageData(output, 0, 0);
}

const makeVirtualCanvas = (canvas, height, width) => {
  const virtual_canvas = document.createElement("canvas");
  virtual_canvas.height = height;
  virtual_canvas.width = width;
  return virtual_canvas;
}

const makeVirtualCopyOfCanvas = (canvas) => {
  const virtualcopy = makeVirtualCanvas(canvas, canvas.height, canvas.width);
  const context = virtualcopy.getContext("2d");
  context.drawImage(canvas, 0, 0);
  return virtualcopy;
}

const getStability = () => {
  if (placesBeen.length < 10) {
    return 100;
  }
  return placesBeen.length < 25 ? 125 - (placesBeen.length * 5) : 0;
}

const understandImage = (canvas) => {
  let virtual_canvas = makeVirtualCopyOfCanvas(canvas);
  edge_detection(virtual_canvas);
  const most_frequent_color = threshold(virtual_canvas, 100);
  //threshold(canvas,100);

  //message("Most Frequent color is "+most_frequent_color);
  handleClickEvents(canvas, virtual_canvas, most_frequent_color);
  handleMouseMoveEvents(canvas, virtual_canvas, most_frequent_color);
  clearGlitch();
  if (placesBeen.length > 10) {
    glitchCascade(canvas, getStability());
  }

}



const isThisPixelRelevant = (x, y, virtual_canvas, most_frequent_color) => {
  var ctx = virtual_canvas.getContext('2d');

  var data = ctx.getImageData(x, y, 1, 1);


  if (data.data[0] === most_frequent_color) {
    return false;
  } else {
    return true;
  }
}
//http://farragofiction.com/PerfectHeist/
const handleMouseMoveEvents = (canvas, virtual_canvas, most_frequent_color) => {
  canvas.onmousemove = (e) => {
    var ctx = canvas.getContext('2d');

    const rect = canvas.getBoundingClientRect();
    const transformedCursorPosition = { x: e.clientX - rect.x, y: e.clientY - rect.y }
    const { x, y } = transformedCursorPosition;

    //ctx.fillRect(x, y, 5, 5); //this lets me debug where it thinks the pointer is
    if (isThisPixelRelevant(x, y, virtual_canvas, most_frequent_color)) {
      canvas.style.cursor = "pointer";
    } else {
      canvas.style.cursor = "auto";
    }
  }
}



/*
sometimes i feel like a warped glass
an illusion of transparency
the clear and shining surface putting people at ease
entirely unaware theyve seen nothing from deeper in 
people always seem so surprised by my facets
its partly my fault
i can never bring myself to communicate clearly about things, even as i try so hard
and the things i do manage to say are sincere and honest and vulnerable
but never complete
the truth is layered
theres always so much unseen, even in the middle of an unsettlingly personal ramble 
sometimes its just the relentless deluge never gives people time to think, to proccess
sometimes its missing perspectives
sometimes i think ive done it
shown a light straight through to my core
but always it scatters and warps and everything is misunderstood in some way
sometimes i twist specifically to hide the core
gain the catharsis of a ramble safe in the knowledge it will never be seen
not in a way that matters
*/



const threshold = function (canvas, threshold) {
  let num_black = 0;
  let num_white = 0;
  var ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return;
  }
  var output = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var d = output.data;
  for (var i = 0; i < d.length; i += 4) {
    var r = d[i];
    var g = d[i + 1];
    var b = d[i + 2];
    var v = (0.2126 * r + 0.7152 * g + 0.0722 * b >= threshold) ? 255 : 0;
    if (v === 0) {
      num_black++;
    } else {
      num_white++;
    }
    d[i] = d[i + 1] = d[i + 2] = v
  }
  ctx.putImageData(output, 0, 0);
  return num_black > num_white ? 0 : 255;
};

const edge_detection = function (canvas) {
  kernel(canvas, [-1, -1, -1, -1, 9, -1, -1, -1, -1]);
}

const kernel = function (canvas, weights) {
  var ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) {
    return;
  }
  var pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var side = Math.round(Math.sqrt(weights.length));
  var halfSide = Math.floor(side / 2);
  var src = pixels.data;
  var sw = pixels.width;
  var sh = pixels.height;
  // pad output by the convolution matrix
  var w = sw;
  var h = sh;
  var output = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var dst = output.data;
  // go through the destination image pixels
  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      var sy = y;
      var sx = x;
      var dstOff = (y * w + x) * 4;
      // calculate the weighed sum of the source image pixels that
      // fall under the convolution matrix
      var r = 0, g = 0, b = 0, a = 0;
      for (var cy = 0; cy < side; cy++) {
        for (var cx = 0; cx < side; cx++) {
          var scy = sy + cy - halfSide;
          var scx = sx + cx - halfSide;
          if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
            var srcOff = (scy * sw + scx) * 4;
            var wt = weights[cy * side + cx];
            r += src[srcOff] * wt;
            g += src[srcOff + 1] * wt;
            b += src[srcOff + 2] * wt;
            a += src[srcOff + 3] * wt;
          }
        }
      }
      dst[dstOff] = r;
      dst[dstOff + 1] = g;
      dst[dstOff + 2] = b;
      dst[dstOff + 3] = a;
    }
  }
  ctx.putImageData(output, 0, 0);
}
