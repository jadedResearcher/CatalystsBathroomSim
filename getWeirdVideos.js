

    //key, value status
    const cachedWeirdVideoNamespacePleaseInternalOnly = {}

//got tired of always adding this to places that didn't have a way to do this. so. here we are.
//now it is its own file, hosted once, in the bathroom
const getWeirdVideosArray = async (shuffled) => {

  //put it in here so it doesn't polute the namespace, lol
  const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const getWeirdVideo = async (url) => {


    const videoExtensionsPoob = [
      "mp4"
    ];
    const filePatternVideoPoob = new RegExp('<a href="([^?]*?)">', 'g');

    const extensionPatternVideoPoob = new RegExp(`\\\.(${videoExtensionsPoob.join("|")})\$`);
    if (cachedWeirdVideoNamespacePleaseInternalOnly[url]) {
      return cachedWeirdVideoNamespacePleaseInternalOnly[url];
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
        cachedWeirdVideoNamespacePleaseInternalOnly[url] = files;
        //console.log("JR NOTE: returned from network for", url)
        resolve(files);
      } catch (e) {
        console.log("JR NOTE: error", e)
        reject();
        return [];
      }
    })
    cachedWeirdVideoNamespacePleaseInternalOnly[url] = promise;
    return promise;
  }


  const video_url = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/?C=M;O=D";
  weird_videos = await getWeirdVideo(video_url);
  weird_videos = weird_videos.map((i)=>`${video_url.replace("?C=M;O=D","")}/${i}`)



  if (shuffled) {
    return shuffle(weird_videos);
  } else {
    //in the order we fetched it, which should be newest first (i'm excited to show off :) :) :) )
    return weird_videos
  }

}
