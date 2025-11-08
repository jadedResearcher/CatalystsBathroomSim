/*
am i aware that you should basically never do this?

yes.

am i in love with the idea of random loaded fonts?

also yes.

lavinraca is about joy and this is what sparks joy in me right now
*/
//key, value status
const cachedFonts = {}

const fontExtensions = [
    "ttf",
];
const filePatternFonts = new RegExp('<a href="([^?]*?)">', 'g');

const fontExtensionPattern = new RegExp(`\\\.(${fontExtensions.join("|")})\$`);



//returns a promise which resolves with the content, prevents network spam
const getFonts = async (url) => {
    if (cachedFonts[url]) {
        return cachedFonts[url];
    }

    let promise = new Promise(async (resolve, reject) => {
        try {
            const rawText = await httpGetAsync(url);

            let files = [];
            const match = rawText.matchAll(filePatternFonts);
            const matches = Array.from(match, (res) => res);
            for (let m of matches) {
                const item = m[1];
                if (item.match(fontExtensionPattern)) {
                    files.push(item);
                }
            }
            cachedFonts[url] = files;
            //console.log("JR NOTE: returned from network for", url)
            resolve(files);
        } catch (e) {
            console.log("JR NOTE: error", e)
            reject();
            return [];
        }
    })
    cachedFonts[url] = promise;
    return promise;
}


const doLaugh = async () => {
    let global_background_music = new Audio();
    global_background_music.loop = true;
    global_background_music.src = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/giggle_echo.mp3";
    global_background_music.play();

    const font_url = "http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/WeirdFonts/";
    const fonts = await getFonts(font_url)
    console.log("JR NOTE: fonts are", fonts);
    //pick one at random
    const chosen_font = pickFrom(fonts);
    //inject into the dom
    const css = `
       div{
            font-family: random_font !important;
        }

        p{
            font-family: random_font !important;
        }

        span{
            font-family: random_font !important;
        }

        button{
            font-family: random_font !important;
        }
        `;

    const body = document.querySelector("body");


    //https://stackoverflow.com/questions/41852594/dynamically-load-fonts
    const random_font = new FontFace('random_font', `url(${font_url}${chosen_font})`);
    await random_font.load();
    document.fonts.add(random_font);
    body.style.fontFamily = "random_font";
    const styleTag = createElementWithClassAndParent("style", body);
    styleTag.innerHTML = css;

    //once every so often, not too fast (poor network ), load a new font
    //mostly doing this cuz i want to see them
    const loopFontFuckery = async () => {
        await sleep(3000);
        const chosen_font = pickFrom(fonts);
        const random_font = new FontFace('random_font', `url(${font_url}${chosen_font})`);
        await random_font.load();
        document.fonts.add(random_font);
        loopFontFuckery();
    }
    loopFontFuckery();

}

doLaugh();
