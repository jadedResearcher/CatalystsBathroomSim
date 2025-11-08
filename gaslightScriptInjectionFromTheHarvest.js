/*
  all this needs to do is be injected into a page
  and you'll get a random chance
  of loading a random script
  based on the Relics from 2025 Lavinraca's Harvest
  that fucks up the page in subtle ways
  with no dependencies

  right now the scripts can:

  * apply a random svg filter
  * change the color of the page slowly over time
  * start replacing specific words with gaslight phrases (like north)
  * random font loaded up
  * (currently pending) apply a random normal filter (like sepia or blur)
  * gaslight idea: randomly put a full screen gif at increasing opacity covering the whole screen, but never get more than like, 10% 
  * pending: use the weirdTextBlurbs to do something like the gaslight words but with whole phrases
  * play random weird sound
  * play random ambient sound
  * 
  it's intended to be overall fairly rare (but more common at noon,
  because the harvest takes lunch breaks and isn't monitoring her Cult as closely)

  and because its just scripts in the normal random stuff location
  future me can add more gaslight ideas whenever without having 
  to update every sim that consumes this

  i really am leveling up at making my maze

  everything used to be bespoke for every page and now im just like

  hey hey hey

  what happens if we just

  inject javascript
  into any page we want

  anyways

  its fucking wild that the Cult of the Nameless One is now the Cult of the Harvest

i still think its so funny the harvest is having a grace arc
i labeled her as aleph (http://farragofiction.com/CodexOfRuin/viewer.html?name=The%20Harvest&data=N4IgdghgtgpiBcIAqALGACAEhATgNxgGcAXEAGhABMiBLAc0mJoHswEQAZAQQDUBaAMJ8ADMIBM5EDhqEA1uy4cAogAVMk4mliF2AcQDyAETLoAjKYDMZAZi4A5XUpPmr6AJJ2AyircAlLkhu+nZkLiaYSobBbp4Ass6WJrr+Ak5h6BxuAEL+vm5KngmuulyxWZkORSZcvlluSP6BwVXoSEpcNh66Le2BlWaWkiQQxDqIHm2+doqhiSoB+XZIs1Zuhu2ZnoECK9YAqnn6e4VhAGK+SmmJAorxYbp2+p4xRZIwAB4QAMbEADYAngB9TQ4GAwYE0AAOY04ghEAFZ0DJ0AAjACuADMMTBiDBKOhYDgvjRfkRCADUf90JoMAB3GhgSiEdDMDHoDEjGAAOnQAggaKYrCRzOIzFRGDRhDx6FpaDArT4AHU+FlTML0BBfoQxQz0JDfhB-jzqsQNSjtb8BRgcBBGcwoABuDJw4TwgDkzOGKJJNGIVK+zDRYFxOAJhvQdDFlGYtLAXLIHBdiK+tvQ0Y1YH+mgZdA16F00BgoYDaN++IDYC+MBoeAgKIp0a5kgZJAZP3YHBjJk7tJMPCLVJ7fYHGS76H7OCpmHoKGbYEIM9IiGndBQ4Rn69Xm7XWBnkhGxG+KFgwfYK535+3V93q8koMhoMIC9Y7Ang67b9Hvc-Q5-H5HPZDIe3q-L6QKkgQvzsKYd54oC1DYvOcCIMIXIwRQsq+uCCEwEh7AACySPW3yyPBMCIVK7CoehICQpq2HkbhlEoWhzZQHQgKEES7AoMQxCQvAAD0gkGngDI2imXIwP8eLML8dCFoQXIBlAgk0FAEB0EQgnYPgRDEIJtL2rapK4POoqghAlAokCbgCMCNrznRoLBlykJgHQQHMJOZGHiSMK8fxQkiRAYlgBJEBSTJ0byYpyn2oJAA6bAUEwkIwYgio1HYXTwBkvAuuI7ieOg9joEoAAaDRcHwew5TwSi+J4ij5kYXLJcl3D8EIohiMV6CGDEDTZHsfS6AN9iOL4RyFOgFyKPUACa6A5O0ADSXToGtjyKsohiOK0+hYI1vJ7BwywDQUbgPAEkT5d1IjiHwXA8hoUISJl2W5egHVgFE6CPEgvLBJ4eyxEopV2Mt5x7PUs3rM8N1tIY92FWIKo8ioTyeAUOMo1ky1dWjz08ooqiYK0+S+FtO17QdHinEoAhICVSCYE8EOKuz5UBO1KUgGlFgdgVPVFZ4yiqCVsRPED+inK0EToIt7S+NUWVrUoOUOOgwQcND+jU26ti+A1WzoDjXCeMEbomFzdkU1wKjzBcSx68DvgXNwbQlYq9QU-ozP6FkJ0eO4LNYPo4PoHVbgNU1ShNgAvkAA)
normally you can stop a grace by isolating them or killing them
anything to stop their dangerous words
but the harvest isnt even in the echidna
shes just constantly leaking gnosis to anyone who prays to her and you cant stop it


devona gets it
she treats her technical grace status as something to surpress
she tries to not info dump mind breaking knowledge (fragment of the universe)

but the harvest is just
passing it out
i bet that makes devona so mad 
she tries SO HARD
not to do this 
and now theres a whole CULT doing it

Neville shoves his head in the sand
but
i think devona and cfo are shaking hands
in wanting to avoid the grace apocalypse
and taking action to do so 






*/



// all sub functions are inside this for namespacing
//if FILENAME passed, runs the specific file requested (no matter the odds)
//otherwise loads them from specific location
//FILENAME has .js in the end
const runGaslightScriptInjectionFromTheHarvest = async (FILENAME, DEBUG) => {

  const script_url = 'http://farragofiction.com/CatalystsBathroomSim/audio_utils/weird_sounds/weird_video/WeirdGifs/WeirdHarvestScripts/'

  //more likely the closer you get to noon, 1/100 chance at midnight
  //(since most of my apps are already doing someothing weird at midnight)
  //the harvest is on lunch break at noon and she's not exactly
  //monitoring her Cult (even in her sleep)
  const oddsGaslighting = () => {
    const currentHour = new Date().getHours();
    //example for 10 am:
    //abs(10-12) = 2
    //12-2 = 8
    //8/48 = 1/6
    const maxOdds = 4; //one in 4 odds;
    const divisor = 12 * maxOdds; //max value we can get for closesness is 12, so if we want 1/4 odds we need 12*4

    return (12 - Math.abs(currentHour - 12)) / divisor;
  }

  //runSecret(`DEAD.js`);
  //file name is relative because you can't use this to trick someone
  //into running virus javascript or whatever
  const runSecret = async (fileName) => {
    const body = document.querySelector("body");
    const scriptTag = document.createElement("script")
    scriptTag.src = `${script_url}${fileName}`;
    body.append(scriptTag);

  }


  //async, you'll want to await this.
  //since using this will mean you don't have anything on screen yet, you'll want some kinda placeholder
  const httpGetAsync = async (theUrl) => {
    return new Promise(function (resolve, reject) {

      let xhr = new XMLHttpRequest();
      try {
        xhr.open("get", theUrl);

        xhr.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            resolve(xhr.response);
          } else {
            //window.alert("AN UNKNOWN NETWORK ERROR HAS OCCURED")
            reject({
              status: this.status,
              statusText: xhr.statusText
            });
          }
        };
        xhr.onerror = function () {
          //window.alert("AN UNKNOWN NETWORK ERROR HAS OCCURED")
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        };
        xhr.send();
      } catch (e) {
        console.error(e);
        //window.alert("AN UNKNOWN NETWORK ERROR HAS OCCURED")
        return `[]`;
      }
    });
  }

  const getRandomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const pickFrom = (array) => {
    return array[getRandomNumberBetween(0, array.length - 1)];
  }

  const getWeirdScripts = async () => {
    const url = script_url;

    const videoExtensionsPoob = [
      "js"
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





  const odds = oddsGaslighting();
  console.log("JR NOTE: odds are", odds);
  //we only proc when the odds are GREATER than math.random
  if (Math.random() < odds || FILENAME || DEBUG) {
    console.log("JR NOTE: going to try to gaslight");

    if (FILENAME) {
      runSecret(FILENAME);
    } else {
      //need to fetch one at random
      const scripts = await getWeirdScripts();
      console.log("JR NOTE: scripts are", scripts)
      runSecret(pickFrom(scripts));
      //pick one at random, runSecret on it

    }
  }




}



//don't use window.onload if there might be more than one on the page
//this way prevents overrides
window.addEventListener('load', () => { runGaslightScriptInjectionFromTheHarvest(undefined, false) }, false)

