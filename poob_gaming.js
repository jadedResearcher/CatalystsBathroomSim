/*
poob has it for you

you can't watch goncharov anywhere that isn't poob
you can't play zampanio anywhere that isn't poob gaming

this should be annoying, difficult to predict how its going to act and smug as fuck

https://www.tumblr.com/orcboxer/745859389762764801/poob-has-it-for-you
https://www.tumblr.com/theothin/780473513551282176?source=share

i want to have an annoying jittery attention grabbing poob gaming button
if you so much as hover over it
an obtrusive as fuck overlay comes up from the bottom
with games infinite scrolling horizontally

each game is a little thumbnail
if you hover over it it fills the screen with a steam like 
"big video player currently paused and showing thumnail"
and scroll bar of screenshots from the game

zampanio is the game thats selected initially

theres a popup that you have to explicitly dismiss that says

"Games on our website are beta. Poob Gaming has it for you!"

if you click the 'play game for free' button you get an error code

if you click 'play' on the video preview/trailer you get one of my collection of spooky, unrelated videos



*/

let weird_videos;
const video_url = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/";

const gamingDirectory = "http://farragofiction.com/CatalystsBathroomSim/images/Poob/";

const ZAMPANIO_DIRECTORY = "Zampaniortress"

const gamesRaw = `Beep%20Boop
Farm%20Rage
Grimdark%20Gambling
Grizzled%20Man%20Quest
Onii-Chan%20at%20Luchadore%20High
Zampaniortress
`;

const games = gamesRaw.split("\n")

const sinfulInjectedCSSPoob = `
  .gaming-annoying-icon{
    position: absolute; 
        font-family: Trebuchet MS;
    font-weight: bolder;
    left: 13px;
    bottom: 13px;
    width: 113px;
    height: fit-content;
    border-radius: 13px;
    cursor: pointer;
    padding: 9px;
    background: radial-gradient(circle,rgba(10, 20, 107, 1) 0%, rgba(145, 87, 199, 1) 92%, rgba(220, 126, 186, 1) 100%);
  }

  .gaming-annoying-icon .icon-image{
    width: 100%;
    animation: pulse 2.0s steps(10) infinite;

  }
    .gaming-annoying-icon:hover{
      .gaming-annoying-content{
        bottom: 0px;
        transition: 1s;
      }
    }

  .gaming-annoying-content{
    position: fixed;
    z-index:9999;
    bottom: -1000px;
                    //bottom:0px;
    left: -5px;
    width: 100%;
    height: 95%;
    background: radial-gradient(circle,rgba(10, 20, 107, 1) 0%, rgba(145, 87, 199, 1) 92%, rgba(220, 126, 186, 1) 100%);
  }

  #show-case-container{
    width: 100%;
    height: 65%;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  .gaming-annoying-content{
    video{
      height: 60%;
      object-fit: contain;
      margin-left: auto;
      margin-right: auto;
      display:block;
      background: black;
    }

    h2{
      margin-left: 31px;
      position: absolute;
    }
  }

  .fast-pulse {
  animation: pulse 2.0s steps(10) infinite;
}

.glow-pulse {
  animation: pulseGlow 2.0s steps(10) infinite;
}

.dark-container{
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    margin: 3px;
    padding:13px;
}

.dark-container-popup{
    background: rgba(0, 0, 0, 0.65);
    height: 100%;
    margin: 3px;
    padding:13px;
}

@keyframes pulseGlow {
  0% {
    box-shadow: -10px 10px 20px #fcf9bd;
  }

  50% {
    box-shadow: -10px 10px 20px #000000;
  }

  100% {
    box-shadow: -10px 10px 20px #fcf9bd;
  }
}

@keyframes pulse {
  0% {
    -moz-transform: scale(1);
    -o-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -moz-transform: scale(1.10);
    -o-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }

  100% {
    -moz-transform: scaleX(1);
    -o-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

#thumbnails-under-video{
  display: flex;
    width: 50%;
    height: 113px;
    margin-left: auto;
    margin-right: auto;
    gap: 13px;
    overflow: auto;
}

#thumbnails-under-video::-webkit-scrollbar-thumb {
  background: rgba(220, 126, 186, 1);
}

#thumbnails-under-video::-webkit-scrollbar {
  width: 15px;
  height: 5px;
}

#thumbnails-under-video img{
  width: 113px;
  height: 100%;
  fit-content: cover;
  border: 1px solid #c4c4c4;
}

#thumbnails-under{
  margin-top: 13px;
  display: flex;
    width: 95%%;
    height: 113px;
    margin-left: auto;
    margin-right: auto;
    gap: 13px;
    overflow: auto;
}

#thumbnails-under::-webkit-scrollbar-thumb {
  background: rgba(220, 126, 186, 1);
}

#thumbnails-under::-webkit-scrollbar {
  width: 15px;
  height: 5px;
}

#thumbnails-under img{
  width: 113px;
  height: 100%;
  fit-content: cover;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
}

.poob-popup-title-container {
    display: flex;
    justify-content: space-between;
    color: rgba(220, 126, 186, 1);
}

.poob-popup img{
  width: 81px;
  margin-left: auto;
  display: block;
  margin-bottom: 59px;
}

.poob-popup {
    color: rgba(220, 126, 186, 1);
    overflow: hidden;
    box-shadow: -13px 13px 33px black;
    font-family: Trebuchet MS;
    font-weight: bolder;
    background: black;
    transform: translate(-50%, -50%);
    font-family: 'Courier New', Courier, monospace;
    margin-left: auto;
    margin-right: auto;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 18px;
    background: radial-gradient(circle,rgba(10, 20, 107, 1) 0%, rgba(145, 87, 199, 1) 92%, rgba(220, 126, 186, 1) 100%);
    width: 400px;
    height: 400px;
    z-index: 9999;
    border-radius: 13px;
}

.poob-popup-title {
    width: 90%;
    text-align: center;
    font-size: 32px;
    line-height: 44px;
    font-weight: bolder;
}



`;


initPoob = async () => {
  console.warn("JR NOTE: don't forget to remove this from landing bathroom, its just there as a test")
  const body = document.querySelector("body");

  const css = document.createElement("style");
  css.innerHTML = sinfulInjectedCSSPoob;
  body.append(css);
  const annoyingIcon = document.createElement("div");
  annoyingIcon.className = 'gaming-annoying-icon';
  const annoyingIconImage = document.createElement('img');
  annoyingIconImage.className = "icon-image"
  annoyingIconImage.src = "http://farragofiction.com/CatalystsBathroomSim/images/Poob/poob-gaming.png";
  annoyingIcon.append(annoyingIconImage)
  body.append(annoyingIcon);

  const annoyingContent = document.createElement("div")
  annoyingContent.className = "gaming-annoying-content";
  annoyingIcon.append(annoyingContent);



  weird_videos = await getWeirdVideo(video_url);


  const title = ZAMPANIO_DIRECTORY;
  const showcaseVideo = video_url + pickFromPoob(weird_videos)
  
  renderPoob(annoyingContent, title, showcaseVideo);;
  const popup = document.createElement("div");
  popup.innerHTML = `<div class='dark-container-popup'><img src='http://farragofiction.com/CatalystsBathroomSim/images/Poob/POOB-LOGO.png'> <h1>Games On Our Website Are Beta</h1>Poob has all your favorite games, like Zampanio, in one convinient spot! Thanks for helping us test them in your favorite browsers!<br><br><i> Poob Has it For You!</i></div>`;
  poobPopup(annoyingContent,popup)
}

const renderPoob = async (annoyingContent, title, showcaseVideo) => {
  annoyingContent.innerHTML = "";
  const darkContainer = document.createElement("div")
  darkContainer.className = "dark-container";
  annoyingContent.append(darkContainer);
  const images = await getWeirdImage(gamingDirectory + title + "/");

  console.log("JR NOTE: rendering poob", { annoyingContent, title, showcaseVideo })
  //webkit-playsinline="" x5-playsinline=""   name="media"
  const showcaseVideoHTML = `<h2>${decodeURIComponent(title)}</h2><video controls="true" poster="${gamingDirectory + title + "/" + images[0]}"   loop="true"  playsinline="" webkit-playsinline="" x5-playsinline=""   name="media">
      <source src="${showcaseVideo}" type="video/mp4">
      </video>`

  const ele = document.createElement("div");
  ele.className = "dark-container"
  ele.id = "show-case-container"
  ele.innerHTML = showcaseVideoHTML;
  darkContainer.append(ele);

  const videoEle = ele.querySelector("video")

  //get scroll component of sample images for the game
  const videoScrollUnder = document.createElement("div");
  videoScrollUnder.className = "scroll-under-video dark-container"
  videoScrollUnder.id = "thumbnails-under-video"
  ele.append(videoScrollUnder)
  for (let image of images) {
    const img = document.createElement("div");
    img.class = "gallery-item"
    const src = gamingDirectory + title + "/" + image;
    img.innerHTML = `<img class='poob-thumbnail' src='${src}'>`;
    videoScrollUnder.append(img);
    img.onclick = () => {
      videoEle.poster = src;
    }
  }
  ;

  //then underall that ANOTHER, infinite scroll component with jjust random games
  renderGames(annoyingContent, darkContainer);
}

const renderGames = async (annoyingContent, darkContainer) => {
  const videoScrollUnder = document.createElement("div");
  videoScrollUnder.className = "dark-container"
  videoScrollUnder.id = "thumbnails-under"
  darkContainer.append(videoScrollUnder);

  for (let game of games) {
    const images = await getWeirdImage(gamingDirectory + game + "/");
    const image = images[0];
    const img = document.createElement("div");
    img.class = "gallery-item"
    const src = gamingDirectory + game + "/" + image;
    img.innerHTML = `<img class='poob-thumbnail' src='${src}'>`;
    videoScrollUnder.append(img);
    img.onclick = () => {
      renderPoob(annoyingContent, game, video_url + pickFromPoob(weird_videos)
      )


    }
  }
}

//lazy namespacing for all!

const getRandomNumberBetweenPoob = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pickFromPoob = (array) => {
  return array[getRandomNumberBetweenPoob(0, array.length - 1)];
}




//key, value status
const cachedVideoPoob = {}

const videoExtensionsPoob = [
  "mp4"
];
const filePatternVideoPoob = new RegExp('<a href="([^?]*?)">', 'g');

const extensionPatternVideoPoob = new RegExp(`\\\.(${videoExtensionsPoob.join("|")})\$`);


const getWeirdVideo = async (url) => {
  if (cachedVideoPoob[url]) {
    return cachedVideoPoob[url];
  }

  let promise = new Promise(async (resolve, reject) => {
    try {
      const rawText = await httpGetAsync(url);

      let files = [];
      const match = rawText.matchAll(filePatternVideoPoob);
      const matches = Array.from(match, (res) => res);
      for (let m of matches) {
        const item = m[1];
        if (item.match(extensionPatternVideoPoob)) {
          files.push(item);
        }
      }
      cachedVideoPoob[url] = files;
      //console.log("JR NOTE: returned from network for", url)
      resolve(files);
    } catch (e) {
      console.log("JR NOTE: error", e)
      reject();
      return [];
    }
  })
  cachedVideoPoob[url] = promise;
  return promise;
}


//key, value status
const cachedImagePoob = {}


const imageExtensionsPoob = [
  "png",
  "PNG",
  "gif",
  "jpg",
  "jpeg"
];
const filePatternImagePoob = new RegExp('<a href="([^?]*?)">', 'g');

const extensionPatternImagePoob = new RegExp(`\\\.(${imageExtensionsPoob.join("|")})\$`);


const getWeirdImage = async (url) => {
  if (cachedImagePoob[url]) {
    return cachedImagePoob[url];
  }

  let promise = new Promise(async (resolve, reject) => {
    try {
      const rawText = await httpGetAsync(url);

      let files = [];
      const match = rawText.matchAll(filePatternImagePoob);
      const matches = Array.from(match, (res) => res);
      for (let m of matches) {
        const item = m[1];
        if (item.match(extensionPatternImagePoob)) {
          files.push(item);
        }
      }
      cachedImagePoob[url] = files;
      //console.log("JR NOTE: returned from network for", url)
      resolve(files);
    } catch (e) {
      console.log("JR NOTE: error", e)
      reject();
      return [];
    }
  })
  cachedImagePoob[url] = promise;
  return promise;
}

const poobPopup =  (parent, contentEle) => {
  console.log("JR NOTE: poobPopup")
  const popup = createElementWithClassAndParent("div", parent, "poob-popup");

  popup.focus();


  const popupbody = createElementWithClassAndParent("div", popup);
  popupbody.append(contentEle);

  popup.onclick = () => {
    popup.remove();
    //just in case somehow theres multiple
    document.querySelectorAll(".poob-popup").forEach((x) => x.remove());
  }

  return popup;
}



window.addEventListener("load", initPoob)