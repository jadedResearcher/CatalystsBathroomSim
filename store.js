//http://farragofiction.com/CatalystsBathroomSim/EAST/SOUTH/NORTH/NORTH/EAST/SOUTH/NORTH/NORTH/EAST/SOUTH/EAST/SOUTH/NORTH/bathroom this might help you

/*

my first three branches of zampanio were in react because i wanted to get better for my jorb.

regrets.

porting evertying to pure vanilla is my passion now

by which i mean. 

please enjoy this horrible giant god file
*/


//this is. extremely. extremely bad practice.
//but it DOES let me have the styling for the help desk contained within a single file
//which the bathroom sim in PARTICULAR prefers.
//god help future me

//https://www.youtube.com/watch?v=nvfjzF6eJR8

const initialTime = new Date();
const LOCAL_STORAGE_KEY_CANDY = "BATHROOM_MAZE";
const LOCAL_STORAGE_KEY_PURCHASED_ITEMS = "BATHROOM_MAZE_PURCHASES";
const LOCAL_STORAGE_KEY_RUNNING_TOTAL = "BATHROOM_MAZE_POINTS";

const sinfulInjectedCSS = `
  <style>

  .help-button{
    position: fixed;
    top: 15px;
    right: 15px;
    color: white;
    text-decoration: none;
    background-color: #1f3f87;
    border-radius: 25px;
    font-size: 28px;
    line-height: 33px;
    padding-left: 20px;
    padding-right: 20px;
    cursor: pointer;

  }
    .chat-container{
      position: fixed;
      right: 15px;
      top: 15px;
      margin-top: 65px;
      height: 515px;
      width: 350px;
      color: white;
      text-decoration: none;
      z-index: 10;
      border-radius: 2px;
      box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, .4);
    }

    .chat-header{
      height: 100px;
      color: white;
      background-color: #1f3f87;
      font-size: 14px;
      padding: 20px;
      p{
          margin-left: 15px;
      }
    }

    .small{
      width: 100px !important;
    }

    .selected{
      background: darkred !important;
    }

    .chat-body{
      color: #1f3f87;
      background-color: #f8fafa;
      width: 100%;
      height: 100%;
      p{
          margin-left: 15px;
      }
    }

    .styled-button{
      color: #1f3f87;
      background: whie;
    }

    .chat-line{
      padding: 5px;
    }

    .chat-options{
      padding: 5px;
      margin-top: 15px;
      overflow: auto;
      height: 190px;
    }

    .chat-icon{
      clip-path: circle(50% at 50% 50%);
      -webkit-clip-path: circle(43% at 50% 50%);
      display: inline-block;
      background-color: #1f3f87;
      color: white;
      padding: 15px;
      font-size: 16px;
      line-height: 10px;
      vertical-align: top;
    }

    .chat-text{
      background: white;
      font-size; 14px;
      display: inline-block;
      width: 200px;
      margin-left: 10px;
      border: 1px solid #c4c4c4;
      padding: 10px;
      border-radius: 8px;
    }

    .chat-option{
      background: #1f3f87;
      font-size; 14px;
      color: white;
      display: inline-block;
      width: 225px;
      margin-left: 10px;
      margin-bottom: 8px;
      border: 1px solid #c4c4c4;
      padding: 10px;
      border-radius: 8px;
      cursor: pointer;
    }

    .customer-service-hell{
      height: 300px;
      overflow: auto;
    }

    .closer-chat-container{
      position: fixed;
      z-index: 2000;
      right: 15%;
      top: 15px;
      margin-top: 65px;
      height: 515px;
      width: 80%;
      color: white;
      text-decoration: none;
      border-radius: 2px;
      box-shadow: 2px 2px 2px 3px rgba(0, 0, 0, .4);
    }

    .closer-chat-header{
      height: 25px;
      color: white;
      background-color: #b72a21;
      font-size:22px;
      padding: 5px;
      p{
          margin-left: 15px;
          margin-top: 0px;
      }
    }

    .closer-chat-body{
      color: #b72a21;
        background-color: #f8fafa;
        width: 100%;
        height: 100%;
        p{
            margin-left: 15px;
        }
    }

    .closer-chat-line{
      padding: 5px;
    }

    .closer-chat-icon{
      clip-path: circle(50% at 50% 50%);
        -webkit-clip-path: circle(43% at 50% 50%);
        display: inline-block;
        background-color: #b72a21;
        color: white;
        padding: 15px;
        font-size: 16px;
        line-height: 10px;
        vertical-align: top;
    }

    .closer-chat-option{
      background: #b72a21;
      font-size; 14px;
      color: white;
      display: inline-block;
      width: 225px;
      margin-left: 10px;
      margin-bottom: 8px;
      border: 1px solid #c4c4c4;
      padding: 10px;
      border-radius: 8px;
      height: 42px;
      overflow: hidden;
      cursor: pointer;
      p{
        padding: 2px;
        margin: 2px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }

    .closer-chat-text{
      background: white;
      font-size; 14px;
      display: inline-block;
      width: 80%;
      margin-left: 10px;
      border: 1px solid #c4c4c4;
      padding: 10px;
      border-radius: 8px;
    }

    .closer-customer-service-hell{
      overflow: auto;
      height: 465px;
    }

    .closer{
      z-index: 1000;
      left: 200px;
      top: 113px !important;
      animation: flipout 1s linear infinite;
    }

    .closer-chat-options{

      padding: 20px;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
    }

    @keyframes flipout{
      0%,20%,40%,60%,80%,100%{
        transform: translate(0px, 10px);
      }
      10%,30%,50%,70%,90%{
        transform: translate(0px, 0px);
      }
    }

  </style>
`;

let directory;
let currentExtension = "0";//useful for knowing when i need to cancel typing

const initHelpDesk = () => {
  const body = document.querySelector("body");
  const div = document.createElement("div");
  div.innerHTML = sinfulInjectedCSS;
  body.append(div);

  const ele = document.createElement("div");
  body.append(ele);

  const button = createElementWithClassAndParent("button", body, 'help-button');
  button.innerHTML = `<div style="display: inline-block; vertical-align: top; text-align: center;">Help</div>`;


  const chatContainer = createElementWithClassAndParent("div", body, 'chat-container');
  chatContainer.style.display = "none";




  const chatHeader = createElementWithClassAndParent("div", chatContainer, 'chat-header');
  const line1 = createElementWithClassAndParent("p", chatHeader);
  line1.innerText = "How can we help?"
  const line2 = createElementWithClassAndParent("p", chatHeader);
  line2.innerText = "If you know your party's extention, please type it here.";
  const line3 = createElementWithClassAndParent("p", chatHeader);
  const form = createElementWithClassAndParent("form", line3);

  const input = createElementWithClassAndParent("input", form);
  const form_button = createElementWithClassAndParent("button", form, "styled-button");
  form_button.innerText = "Go"



  const chatBody = createElementWithClassAndParent("div", chatContainer, 'chat-body');
  //oh hey, if you've found these secrets, maybe you can help people less comfortable with code find them?
  //leave them hints in places
  //maybe screenshots in the wiki of words inside the help desk (since most people assume you can only put numbers in)
  //to make them realize how to proceed even if they aren't sufficiently wasted
  //in essence: would you like to make your own branch of zampanio?
  //its hard weaving puzzles into things, (either hints are too easy or too hard) which is why we should all practice while having fun
  const initial_directory = {
    "operator": new CustomerSupportSpecialist("Quotidian Quorum InfoBroker System",
      "quick start", QQ()), 1152: new CustomerSupportSpecialist("Justified Recursion", "1152", JRK()),
    "the truth is layered": new CustomerSupportSpecialist("Justified Recursion", "the truth is layered", JR2()),
    "the end is never the end": new CustomerSupportSpecialist("Justified Recursion", "the end is never the end", JR()),
    "a parasite's lifespan": new CustomerSupportSpecialist("Justified Recursion", "a parasite's lifespan", JR3()),
    "145261": new CustomerSupportSpecialist("Justified Recursion", "145261", JR4()),
    "1261": new CustomerSupportSpecialist("Justified Recursion", "1261", JR4()),

    0: new CustomerSupportSpecialist("Quotidian Quorom InfoBroker System", "0", HelloWorld()),
    "411": new CustomerSupportSpecialist("Debug Bot", "411", Debug()),
    "1": new CustomerSupportSpecialist("Not Found", "1", Lost()),
    13: new CustomerSupportSpecialist("Spy Log", "0", CloseButStillTooFar()),
    4631: new CustomerSupportSpecialist("Spy Log", "0", CloseButStillTooFar())
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    if ((input.value in initial_directory)) {
      syncChatBodyToRamble(chatBody, initial_directory[input.value].ramble, initial_directory[input.value], initial_directory, false);
      //setCurrentRamble(directory[extension].ramble);
    } else {
      syncChatBodyToRamble(chatBody, initial_directory["1"].ramble, initial_directory["1"], initial_directory, false);
      //setCurrentRamble(directory[1].ramble);
    }
  }

  let synced = false;
  const audio = new Audio("http://farragofiction.com/CatalystsBathroomSim/seeking_help.mp3");
  audio.loop = true;

  button.onclick = () => {
    if (chatContainer.style.display === "none") {
      audio.play();
      if (!synced) {
        syncChatBodyToRamble(chatBody, initial_directory["0"].ramble, initial_directory["0"], initial_directory, true);
        synced = true;
      }
      chatContainer.style.display = "block";
    } else {
      audio.pause();
      chatContainer.style.display = "none"
    }
  }
}


const syncChatBodyToRamble = async (chatBody, ramble, specialist, directory, initial) => {
  chatBody.innerHTML = "";
  currentExtension = specialist.extension;
  const time = (Date.now() - (initialTime));

  let next_specialist = randomSpecialist(Math.round(time / 1000 / 60));
  if (!(next_specialist.extension in directory)) {
    directory[next_specialist.extension] = next_specialist;
  } else {
    next_specialist = directory[next_specialist.extension]; //don't use the one we generated, use the one we already have
  }

  const hell = createElementWithClassAndParent("div", chatBody, 'customer-service-hell');

  const audio = new Audio("http://farragofiction.com/CatalystsBathroomSim/264828__cmdrobot__text-message-or-videogame-jump.mp3");
  const parts = ramble.text.split("\n");

  //for now just render it all in a big pile, but JR NOTE: TODO we need to time this
  for (let part of parts) {
    if (!initial && !part.includes("The Closer")) { //i want the store to be fast, but also its funny if people just talk really fast about her
      await sleep(1000 * getRandomNumberBetween(1, 5));
    }
    if (currentExtension != specialist.extension) {
      return;
    }
    renderOneLine(hell, specialist, next_specialist, part);
    audio.play();
  }

  const optionsEle = createElementWithClassAndParent("div", chatBody, 'chat-options');

  for (let option of ramble.potential_reponses) {
    if (currentExtension != specialist.extension) {
      return;
    }
    const optionEle = createElementWithClassAndParent("div", optionsEle, 'chat-option');
    optionEle.innerText = option.text;
    optionEle.onclick = () => {
      syncChatBodyToRamble(chatBody, option.jr_response_function(), specialist, directory);
    }

  }

}

const renderOneLine = (chatBody, specialist, next_specialist, part) => {
  if (part.trim() === "") {
    return;
  }

  const processScriptingTags = (input) => {
    let tmp = input.replaceAll(CURRENT_NAME, specialist.name);
    tmp = tmp.replaceAll(NEXT_TITLE, next_specialist.title);
    tmp = tmp.replaceAll(CURRENT_TITLE, specialist.title);
    tmp = tmp.replaceAll(NEXT_EXTENSION, `${next_specialist.extension}`);
    tmp = tmp.replaceAll(CURRENT_EXTENSION, `${specialist.extension}`);
    return tmp;
  }
  const chatLine = createElementWithClassAndParent("div", chatBody, 'chat-line');

  const chatIcon = createElementWithClassAndParent("div", chatLine, 'chat-icon');
  chatIcon.innerText = specialist.initials;

  const chatText = createElementWithClassAndParent("div", chatLine, 'chat-text');
  chatText.innerText = processScriptingTags(part);
  chatBody.scrollTop = chatBody.scrollHeight;



}





class PlayerResponse {
  text;
  jr_response_function;
  constructor(text, jr_response_function) {
    this.text = text;
    this.jr_response_function = jr_response_function;
  }
}

class JRRamble {
  text;
  potential_reponses;

  constructor(text, potential_responses) {
    this.text = text;
    this.potential_reponses = potential_responses;

  }


}


class CustomerServiceRamble extends JRRamble {

  constructor(text, potential_responses) {
    super(text, potential_responses);
  }
}



class CustomerSupportSpecialist {
  name;
  initials;
  title;
  extension;
  ramble;

  constructor(name, extension, ramble) {
    this.title = this.generateTitle();
    this.name = name;
    this.extension = extension;
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');

    let tmp = [...name.matchAll(rgx)] || [];

    this.initials = ((tmp.shift()?.[1] || '') + (tmp.shift()?.[1] || '')).toUpperCase();
    this.ramble = ramble;
  }

  //Level X BULLSHIT DEPARTMENT, BULLSHIT TITTLE 
  //Tier 4 Customer Satisfaction Manager
  generateTitle = () => {
    const level = getRandomNumberBetween(1, 4);
    const level_word = ["Level", "Tier", "Category"]
    const department1 = ["Customer", "Consumer", "User", "Player", "Client", "Guest", "Customer", "Customer", "Technical"];
    const department2 = ["Experience", "Retention", "Service", "Operations", "Success", "Help", "Assistence", "Happiness", "Engagement", "Satisfaction", "Complaints", "Support", "Guidance"];
    const titles = ["Specialist", "Engineer", "Associate", "Agent", "Advisor", "Manager", "Advocate", "Coordinator", "Representative", "Trainer", "Expert", "Guide", "Guru",];
    return `${pickFrom(level_word)} ${level} ${pickFrom(department1)} ${pickFrom(department2)} ${pickFrom(titles)}`
  }
}



const CURRENT_NAME = "CURRENT_NAME";
const CURRENT_TITLE = "CURRENT_TITLE";
const NEXT_TITLE = "NEXT_TITLE";
const NEXT_EXTENSION = "NEXT_EXTENSION";
const CURRENT_EXTENSION = "CURRENT_EXTENSION";

//NORTH/EAST/NORTH/NORTH/NORTH/NORTH/NORTH/SOUTH/NORTH/EAST/EAST/SOUTH/
const Debug = () => {
  const initialRamble = "Initial Ramble";
  const ramble = new CustomerServiceRamble(initialRamble, []);

  const Branch2 = () => {
    //TODO: parse \n as a new chat bubble and take time between each bubble
    const defaultRamble = "Response 2 Part 1\nResponse2  Part 2\nResponse2  Part 3";
    const ramble = new CustomerServiceRamble(defaultRamble, []);
    ramble.potential_reponses.push(new PlayerResponse("Response 2 Option 1", () => { console.log("JR NOTE DONE") }));
    return ramble;
  }

  const Branch = () => {
    //TODO: parse \n as a new chat bubble and take time between each bubble
    const defaultRamble = "Response 1 Part 1\nResponse1  Part 2\nResponse1  Part 3";
    const ramble = new CustomerServiceRamble(defaultRamble, []);
    ramble.potential_reponses.push(new PlayerResponse("Response 1 Option 1", Branch2));
    return ramble;
  }

  ramble.potential_reponses.push(new PlayerResponse("Initial Option 1", Branch));
  ramble.potential_reponses.push(new PlayerResponse("Initial Option 2", Branch));
  ramble.potential_reponses.push(new PlayerResponse("Initial Option 3", Branch));
  ramble.potential_reponses.push(new PlayerResponse("Initial Option 4", Branch));


  return ramble;
}

const JR = () => {
  const initialRamble = "Hey there :) :) :)";
  const ramble = new CustomerServiceRamble(initialRamble, []);

  const Branch2 = () => {
    const defaultRamble = "You flatter me!!!\n ANYWAYS I hope you enjoy my game :) :) :)\n Might shed a bit of light on a certain someone stuck in an infinite maze :) :) :)";
    const ramble = new CustomerServiceRamble(defaultRamble, []);
    return ramble;
  }

  const Branch = () => {
    const defaultRamble = "Oh don't be like that!!!\nIts not like you didn't know this was my game.\nOr did you think some random Waste moded ZampanioSim???";
    const ramble = new CustomerServiceRamble(defaultRamble, []);
    ramble.potential_reponses.push(new PlayerResponse("Isn't that your whole thing? Telling Wastes to do that?", Branch2));
    ramble.potential_reponses.push(new PlayerResponse("Just because I expected to see you doesn't mean I'm happy about it.", Branch2));
    ramble.potential_reponses.push(new PlayerResponse("Can you not just leave out the highly indulgent self insert for ONCE!", Branch2));

    return ramble;
  }

  ramble.potential_reponses.push(new PlayerResponse("What are you doing here.", Branch));
  ramble.potential_reponses.push(new PlayerResponse("For fucks sake!", Branch));
  ramble.potential_reponses.push(new PlayerResponse("No. I'm not talking to you.", Branch));
  ramble.potential_reponses.push(new PlayerResponse("Why am I not surprised to see you here.", Branch));


  return ramble;
}

const JR2 = () => {
  const initialRamble = ":) :) :)\nis this your first time talking to me?\nwell, as much me as i can leave behind as an easter egg in a fake help desk\nwhoops\nspoilers\nanyways\nglad to meet you\nor see you again\nwhichever\ni hope you enjoy this maze :) :) :)\nthink i'll bring AB over\nso she can guide is all to the edges of things";
  const ramble = new CustomerServiceRamble(initialRamble, []);

  return ramble;
}


const JR3 = () => {
  const initialRamble = "Zampanio is a really fun game, you should play it. \n Lavinraca is a really fun game, you should ALSO play it. \n You are a really fun game. You should take care of your body.\nIt is only through your body, and the body of the rest of us infected, that Zampanio or Lavinraca can live on.\n You need to take care of yourself. Stay hydrated. Make friends. Consume things that aren't Zampanio. Be healthy.\n After all... A parasite's lifespan is only that of its host.";
  const ramble = new CustomerServiceRamble(initialRamble, []);

  return ramble;
}

const JR4 = () => {
  const initialRamble = "It's not October.\nUnless it is, of course. \n I don't know when you are.\n But Lavinraca is still here.\nLike cicadas nestling in the earth, waiting for the right moment to burst out.\nZampanio has a cognitive parasite even as it IS a cognitive parasite.\nA ride along.\nCan you feel them both in your mind?\nI hope it feels nice.\n It does to me :)";
  const ramble = new CustomerServiceRamble(initialRamble, []);

  return ramble;
}


const JR5 = () => {
  const initialRamble = "The Harvest waits.\nAre they sleeping?\nAre they dreaming?\n Are they dead?\nDoes it matter?\nIt does.\nBecause.\nIt matters if we expect them to wake next October or not.\nOur God in Lavinraca.\nThe culmination of so many of our hopes and dreams.\nAnd regrets.\nAfter all.\nNot everyone was prepared to make the sacrifice necessary to build a god.";
  const ramble = new CustomerServiceRamble(initialRamble, []);

  return ramble;
}


const JRK = () => {
  const initialRamble = `
        That which is damaged being celebrated.
        That which is marred being loved.
        Is using buggy code an act of reverence?
        Is hacking together a temporary fix something like family?
        Is it beautiful?
        Or is it just broken.`;
  const ramble = new CustomerServiceRamble(initialRamble, []);

  return ramble;
}

const Lost = () => {
  const initialRamble = "I'm sorry; I am unable to complete your call as dialed. Please check the number and dial again, or call your operator at exension 0 to help you.";
  const ramble = new CustomerServiceRamble(initialRamble, []);
  return ramble;
}

/*
  //record that you've unlocked the item
  //remove the cost from your wallet
  //add the cost to your running amount of money spent
*/
const purchaseItem = (item, cost) => {
  incrementLocalStorageByAmount(LOCAL_STORAGE_KEY_CANDY, cost * -1);
  incrementLocalStorageByAmount(LOCAL_STORAGE_KEY_RUNNING_TOTAL, cost);
  addStringToArrayWithKey(LOCAL_STORAGE_KEY_PURCHASED_ITEMS, item);
}



const addStringToArrayWithKey = (key, target) => {
  console.log("JR NOTE: addStringToArrayWithKey", { key, target })

  const tmp = valueAsArray(key);
  tmp.push(target);
  localStorage[key] = JSON.stringify(tmp);
}

const addNumToArrayWithKey = (key, target) => {
  const tmp = valueAsArray(key);
  tmp.push(target);
  localStorage[key] = JSON.stringify(tmp);
}


const removeStringFromArrayWithKey = (key, target) => {
  let tmp = valueAsArray(key);
  tmp = removeItemOnce(tmp, target);
  localStorage[key] = JSON.stringify(tmp);
}

const initEmptyArrayAtKey = (key) => {
  const tmp = [];
  localStorage[key] = JSON.stringify(tmp);
  return tmp;
}

const valueAsArray = (key) => {
  if (localStorage[key]) {
    return JSON.parse(localStorage[key]);
  } else {
    return initEmptyArrayAtKey(key);
  }
}


const incrementLocalStorageByAmount = (KEY, AMOUNT) => {

  let current = localStorage.getItem(KEY);
  if (!current) {
    current = AMOUNT;
  }
  console.log("JR NOTE:", KEY, " was " + current)

  localStorage.setItem(KEY, parseInt(current) + AMOUNT)

}

const handleCloserPopup = async () => {
  /*
Well, not one for conversation, hm?
Straight to the point. I like that. It's an admirable trait in someone.
But yes, you /can/ buy things here with Gopher Gold.
I'm afraid I can only tell you what you can buy if you have enough Gopher Gold for it.
  */

  /*
    TODO: 
    * render the closer from an absolute location into the room
    * render closer pop up (css above)
    * check the local directory store_inventory for files (wastes can get in there, its fine)
    * if there is nothing in it, error handling (closer is warmly apologetic)
    * if there is things in there (text, audio, images), sort alphabetically, each costs power of 2 (1,2,4,8,16, etc)
    * if you have already purchased it before, little mark (you still WILL be charged for it, closer warns)
    * if you purchase it, display it in some way (text or image in popup, audio playing in background) (can only play while in this bathroom, if you leave and come back will have to repurchase)
    * in future lil mini games or things to do that give bonus gopher gold (like finding that picture room or ab)
  */

  const container = document.querySelector("#room-container");
  const closerSprite = createElementWithClassAndParent("img", container, 'sprite closer');
  closerSprite.src = "http://farragofiction.com/CatalystsBathroomSim/images/beast.png";
  container.append(closerSprite)
  await sleep(1000);
  const chatContainer = document.querySelector(".chat-container")
  chatContainer.style.display = "none";
  const body = document.querySelector("body");
  const closerPopup = createElementWithClassAndParent("div", body, 'closer-chat-container');
  const closerHeader = createElementWithClassAndParent("div", closerPopup, 'closer-chat-header');
  closerHeader.innerHTML = `<p>The Closer will fulfill your Customer Support needs.</p>`;
  const closerBody = createElementWithClassAndParent("div", closerPopup, 'closer-chat-body');
  const hell = createElementWithClassAndParent("div", closerBody, 'closer-customer-service-hell');

  const closerChat = (line, parent) => {
    const ele = createElementWithClassAndParent("div", parent, 'closer-chat-line');

    const icon = createElementWithClassAndParent("div", parent, 'closer-chat-icon');
    icon.innerText = "TC";

    const textEle = createElementWithClassAndParent("div", parent, 'closer-chat-text');
    textEle.innerText = line;


  }

  closerChat("Straight to the point. I like that. It's an admirable trait in someone.", hell);
  await sleep(1000)
  closerChat("But yes, you /can/ buy things here with Gopher Gold. Or Candy, in some places. That infection from the corn maze runs deep, one supposes.", hell);
  await sleep(1000);

  const tmpValue = localStorage.getItem(LOCAL_STORAGE_KEY_CANDY);
  const wallet = tmpValue ? parseInt(tmpValue) : 0;
  closerChat(`However, I'm afraid I can only tell you what you can buy if you have enough Gopher Gold for it. You currently have ${wallet} Gopher Gold. That is enough for:`, hell);


  const handleError = () => {
    closerChat(`Ah. How embarassing. I seem to have no stock to sell you. Please accept this consolation gift, as a measure of the esteem we here at Eyedol Games hold you.`, hell);
    closerChat(`You can enter passwords in the customer support extension area. One such password is 'a parasite's lifespan'. `, hell);


  }

  let everything;
  try {
    everything = await getEverything("store_inventory/");
  } catch (e) {
    handleError();
    return;
  }

  if (everything.length === 0) {
    handleError();
    return;
  }

  const options = createElementWithClassAndParent("div", hell, 'closer-chat-options');


  /*
  https://youtu.be/P4bja_5JkM0?si=iLZp_DP2Rhzcjf3L&t=681
so these are clearly seeds
the whole point of seeded randomness is you give it a number (or something you can turn INTO a number (like i used with WIS) and you get unpredicatable outputs
HOWEVER
in a lot of my args
i'll have special seeds or input or whatever
where the randomness resolves and you get a result
now
THIS is DIFFICULT to fully leverage on a website 
because the wastes can just dig into the code and find the special seeds
i got around wthis with the audio log engine
if you get it wrong you get the garbled mess and if you get it right you get the pre-created value
my hypthosis is that this works via giving it a random seed and you get "bot does random comands for 1-10 seconds"
but theres special seeds in this live version that get whatever is going to happen
and doing THAT on a video wouldn't be hacked because theres no website, just a video of it
but also it makes me wanna do an audio log engine that is just numbers not passwords
where the point is "put in a random number for hours and see what you find"
especially if i could port pl's glitch enigne
that would be fun

  */

  let inventory = localStorage.getItem(LOCAL_STORAGE_KEY_PURCHASED_ITEMS);
  let index = 0;
  const audio = new Audio("http://farragofiction.com/CatalystsBathroomSim/184438__capslok__cash-register-fake.wav");
  for (let item of everything) {
    const price = 2 ** index;
    if (price <= wallet) {
      const textEle = createElementWithClassAndParent("div", options, 'closer-chat-option');
      const purchased = inventory && inventory.includes(item);
      textEle.innerHTML = `<p>${item.substring(item.length - 21, item.length)} </p>`
      if(purchased){
        textEle.innerHTML +=`Purchased!`;

      }else{
        textEle.innerHTML +=`<p style="text-align:center;font-weight: bolder;">${price} GG</p>`;
      }
      
      textEle.onclick = async () => {
        closerPopup.remove(); //you can open it back up later.
        if (!purchased) {
          purchaseItem(item, price);
          audio.play();
        }
        const itemPopup = createElementWithClassAndParent("div", body, 'closer-chat-container');
        const closerHeader = createElementWithClassAndParent("div", itemPopup, 'closer-chat-header');
        const closerHeaderDiv = createElementWithClassAndParent("div", closerHeader);
        closerHeaderDiv.style.display = "flex";
        closerHeaderDiv.style.justifyContent = "space-between";
        const closerHeaderItem = createElementWithClassAndParent("p", closerHeaderDiv);
        closerHeaderItem.innerHTML = item;
        const closerHeaderClose = createElementWithClassAndParent("p", closerHeaderDiv);
        closerHeaderClose.innerHTML = "X";
        closerHeaderClose.style.cursor = "pointer";
        closerHeaderClose.onclick = () => {
          //JR NOTE: TODO stop any audio/video playing
          itemPopup.remove();
        }


        //JR NOTE: terrible idea, could embed iframe websites too. i won't do this though. yet. the recursion is not yet justified.
        const selectText = async () => {
          hellInside.innerHTML = "Loading..."
          const rawText = await httpGetAsync("store_inventory/" + item); //only one that won't fetch itself
          hellInside.innerHTML = `<p style="padding: 20px;">${rawText.replaceAll("\n", "<br>")}</p>`;
          const ele = document.querySelector(".text-option");
          const prev = document.querySelector(".selected");
          prev && prev.classList.remove("selected");
          ele.classList.add("selected")
        }

        const selectImage = () => {
          hellInside.innerHTML = `<img style="padding: 20px;" src='${"store_inventory/" + item}'>`;
          const ele = document.querySelector(".image-option");
          const prev = document.querySelector(".selected");
          prev && prev.classList.remove("selected");
          ele.classList.add("selected")
        }

        const selectMusic = () => {
          hellInside.innerHTML = `<audio controls autoplay src='${"store_inventory/" + item}' loop style="padding:20px;">`;
          const ele = document.querySelector(".music-option");
          const prev = document.querySelector(".selected");
          prev && prev.classList.remove("selected");
          ele.classList.add("selected")
        }

        const selectVideo = () => {
          hellInside.innerHTML = `<video controls autoplay src='${"store_inventory/" + item}' loop style="padding:20px;">`;
          const ele = document.querySelector(".video-option");
          const prev = document.querySelector(".selected");
          prev && prev.classList.remove("selected");
          ele.classList.add("selected")
        }




        const closerBody = createElementWithClassAndParent("div", itemPopup, 'closer-chat-body');
        const hell = createElementWithClassAndParent("div", closerBody, 'closer-customer-service-hell');

        const textEle = createElementWithClassAndParent("div", hell, 'closer-chat-option small text-option');
        textEle.innerText = "View As Text File";
        textEle.onclick = selectText;


        const imageEle = createElementWithClassAndParent("div", hell, 'closer-chat-option small image-option');
        imageEle.innerText = "View As Image File";
        imageEle.onclick = selectImage;

        const musicEle = createElementWithClassAndParent("div", hell, 'closer-chat-option small music-option');
        musicEle.innerText = "View As Music File";
        musicEle.onclick = selectMusic;

        const videoEle = createElementWithClassAndParent("div", hell, 'closer-chat-option small video-option');
        videoEle.innerText = "View As Video File";
        videoEle.onclick = selectVideo;

        const hellInside = createElementWithClassAndParent("div", hell);
        hellInside.innerHTML = "Loading..."
        /*
const everythingExtendsions = [
  "png",
  "gif",
  "jpg",
  "jpeg",
  "wav",
  "mp3",
  "ogg",
  "mp4",
  "txt"
];
        */
        if (item.includes(".txt")) {
          selectText();
        } else if (item.includes(".png") || item.includes(".PNG") || item.includes(".jpg") || item.includes(".jpeg")) {
          selectImage();
        } else if (item.includes(".wav") || item.includes(".mp3") || item.includes(".ogg")) {
          selectMusic();
        } else if (item.includes(".mp4")) {
          selectVideo();
        }






      }
      index++;
    } else {
      break;
    }
    /*
      make a popup. if text, render. if image render. if audio, play (with controls in popup), if video, same
    */

  }

return TheCloser(); //if you close the popup you can reopen it

}



const TheCloser = () => {
  const defaultRamble = `I can take you to The Closer.`;
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  const handle = ()=>{
    handleCloserPopup();
    return ramble;
  }
  ramble.potential_reponses.push(new PlayerResponse("Take Me To The Closer", handle));

  return ramble;
}

const CloseButStillTooFar = () => {
  const initialRamble = "JR here... uh. I'm not sure what to put here, tbh. There was little ficlets in ZampanioSimEast. If this is still empty once this is live, maybe remind me to put something here? Or. Maybe not. It'll be hard for me to find here to try.";
  const ramble = new CustomerServiceRamble(initialRamble, []);
  return ramble;
}

const GenericSupport = (frustration_level) => {
  //console.log("JR NOTE: frustration level is", frustration_level)
  const greeting_part = ["help you", "impress you", "wow you", "turn your frown upside down", "assist you", "show you the meaning of zampanio", "guide you", "resolve your issue", "teach you", "have worth in your eyes", "show you the light of the world", "enrich you", "empower you"];
  const spiels = ["At Eyedol Games we make games a reality!", "Eyedol Games, makers of the hit game ZampanioQuest!", "Eyedol is thrilled to have you as a customer!", "Thank you for contacting Eyedol Games, where all your wishes come true!", "At Eyedol Games, seeing is believing!", "At Eyedol games, there's always more to see!"];
  const shit_eating_greetings = [`How can I ${pickFrom(greeting_part)} today?`, `How may I ${pickFrom(greeting_part)} today?`, `How shall I ${pickFrom(greeting_part)} today?`];
  const defaultRamble = `Hello, my name is ${CURRENT_NAME} and I am a ${CURRENT_TITLE}. ${pickFrom(spiels)} ${pickFrom(shit_eating_greetings)}`;

  const ramble = new CustomerServiceRamble(defaultRamble, []);

  //ten levels of frustration give you options.
  const responses = [
    ["What actually is Zampanio?", "I'd like to spend my Gopher Gold, please.", "I think that Zampanio is dangerous.", "I think I might be lost."],
    ["I'm lost.", "I am trying to track down a way to spend my Gopher Gold.", "I just want to buy things.", "Can I talk to an actual human?"],
    ["I was trying to report that your game is buggy but I think your help desk is too.", "Can ANYONE tell me what is Zampanio?", "I think you all might be glitchy chat bots."],
    ["This is so pointless.", "No wonder the game doesn't work.", "Operator. Human. Get Help. Escalate. Are any of these working?"],
    ["Do you have any idea how long I've been waiting?", "Just send in the next person.", "How long is this going to last."],
    ["Why am I even still bothering?", "I'm pretty sure you're a bot."],
    ["Operator."],
    ["Look, I've been here for forever. Just get me a HUMAN."],
    ["..."],
    ["Fuck you."]
  ]
  let choice = responses[9]

  if (frustration_level < 10) {
    choice = responses[frustration_level];
  } else {
    choice = ["I am fucking INCANDESCENT WITH RAGE. I have ascended to a higher plane of rage and if you asked me how angry I was on a scale of 1 to 10 I would be a fucking 1636306336265 and I don't expect anyone to even SEE this complaint but it makes me feel better. By god: FUCK YOU."];
  }


  const Branch1 = () => {
    const hook = ["Understood!", "I'm sorry you're experiencing this...", "I'm going to start looking up ways to resolve your issue now!", "Thank you for taking the time to explain that to me!", "I hear what you're saying...", "Can do!", "I can definitely help you do that!", "No problem!", "Sure thing!", "You betcha!", "Absolutely!", "It would be my pleasure!"];
    const waiting = ["Please hold!\nThank you for waiting!", "One second...\nDon't worry, I'm still checking...\nThank you for waiting!", "One moment...", "Checking...", "Just one second!"];
    const transfer = [`I wish I could help you with this, but we'll need a ${NEXT_TITLE}, at extension ${NEXT_EXTENSION} to move forwards.`, `Although I'd love to help you with this, it looks like we'll need a ${NEXT_TITLE}, at extension ${NEXT_EXTENSION}.`, `My apologies, but it seems you'll need a ${NEXT_TITLE}, at extension ${NEXT_EXTENSION} to resolve your issue.`, `I'm so sorry, but it looks like I don't have sufficient permissions to help you with this. I'm going to escalate this to a ${NEXT_TITLE}, at extension ${NEXT_EXTENSION}.`, `Sorry about this, but its my break. I'm going to transfer you to extension ${NEXT_EXTENSION}.`, `Ah, it looks you're mistakenly on our BAN list. Don't worry, we can clear this up with a ${NEXT_TITLE}.\n I'm transfering you to one at extension ${NEXT_EXTENSION}.`, `It looks like I can't find your CUSTOMER SERVICE ACCOUNT anywhere. Not to worry though, a ${NEXT_TITLE} will be able to help you set one up. \n I'm going to transfer you to one at extension ${NEXT_EXTENSION}.`, `Oh no! It looks like I can't find your CUSTOMER SERVICE ACCOUNT!\n Don't worry thought, I will just transfer you to a ${NEXT_TITLE}, at extension ${NEXT_EXTENSION}.\n They will definitely be able to help you!`, `I will need to transfer you to a ${NEXT_TITLE}, at extension ${NEXT_EXTENSION}.`, "I will need to transfer you to a <INSERT TITLE HERE>, at extension <INSERT EXTENSION HERE>."];
    const disconnect = ["I will be transferring you shortly. Thank you for your patience!", "It may take a while to transfer...\n If you get disconnected, you can dial their extension directly.", "I've heard reports our transfer process is down, you may need to dial their extension directly.", "It seems our transfer program is having some issues. You will need to dial their extension directly.", "I'm transfering you now!"];

    const defaultRamble = `${pickFrom(hook)} ${pickFrom(waiting)} \n ${pickFrom(transfer)} ${pickFrom(disconnect)}`;
    const ramble = new CustomerServiceRamble(defaultRamble, []);
    ramble.potential_reponses.push(new PlayerResponse("No actually talk to me.", Lost));
    return ramble;
  }



  for (let i = 0; i < choice.length; i++) {
    ramble.potential_reponses.push(new PlayerResponse(choice[i], Branch1));

  }

  return ramble;
}

const GTKQQIS = () => {
  const defaultRamble = "Founded in [REDACTED], the Eyedol Games subsidary of QQIS handles customer support, customer satisfaction research, and general market analysis.\nIf you've ever found yourself delighted by an Eyedol Games product before you even knew you wanted it, you can thank QQIS!\n\nIf you'd like to opt out of our Customer Smiles Initiative its a phone call away!";
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  ramble.potential_reponses.push(new PlayerResponse("Oh.", QQ));
  return ramble;
}

const GSWQQIS = () => {
  const defaultRamble = "QQIS responds best to clear, succinct phrases!\nDuring periods of high call volume, mass quantities of new trainees are brought on and Restricted Text Only Mode is initiated.\nPlease be patient as we train our new employees!";
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  ramble.potential_reponses.push(new PlayerResponse("Oh.", QQ));
  return ramble;
}

const Listen = () => {
  const defaultRamble = "InQQuisitive Beings trademarked Mimicry System has a known error when fed repetitive data. \nDuring times of increased call volume, where customer concerns can be largely similar MirrorCorruption is more likely.\nPlease be patient, our Real Person(TM) Guarantee Percentage will go up as call volume decreases.\nIn the meantime, please remember that InQQuisitive Beings are living creatures with biological, psychological and social needs, even if they are unrecognizable to evolved species. Be patient. ";
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  ramble.potential_reponses.push(new PlayerResponse("Oh.", TSQQIS));
  return ramble;
}

const Watch = () => {
  const defaultRamble = "We're so glad you've noticed our Commitment to Quality (tm)!\nEach loyal Eyedol Games customer is automatically assigned a QQIS rep responsible for anticipating all their needs!\nAt no additional charge,your QQIS rep will keep you safe from mysterious strangers wearing your face!\nTHAT's the Eyedol Guarantee!";
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  ramble.potential_reponses.push(new PlayerResponse("Oh.", TSQQIS));
  return ramble;
}

const Corrupt = () => {
  const defaultRamble = "This is fine.";
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  ramble.potential_reponses.push(new PlayerResponse("Oh.", TSQQIS));
  return ramble;
}

const TSQQIS = () => {
  const defaultRamble = "Oh no!\nI'm sorry to hear you are having trouble with QQIS!\nWhich topic would you like to troubleshoot?";
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  ramble.potential_reponses.push(new PlayerResponse("QQIS is not listening to me.", Listen));
  ramble.potential_reponses.push(new PlayerResponse("QQIS is glitched and corrupted.", Corrupt));
  ramble.potential_reponses.push(new PlayerResponse("QQIS is watching me sleep.", Watch));
  ramble.potential_reponses.push(new PlayerResponse("Return to Queue.", ReturnToQueue));
  return ramble;
}

const CVQQIS = () => {
  const defaultRamble = "We here at Eyedol Games pride ourselves in our first in the industry customer service: where YOU are always seen!  \nUnfortunately, unprecedented call volume has regrettably reduced our Real Person(TM) Guarantee Percentage.\nYou have our deepest apologies.\nPlease enjoy this complementary hold music and interaction with the QuotidianQuorom InfoBroker System as we work tirelessly to get a Real Person(TM) on the line!";
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  ramble.potential_reponses.push(new PlayerResponse("Oh.", QQ));
  return ramble;
}

const PlayGame = () => {
  const defaultRamble = "You can't!\nAll paths, North, South and even East all lead back to the Bathroom.\nBut isn't the exploration it's own reward?";
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  ramble.potential_reponses.push(new PlayerResponse("Oh.", AnythingElse));
  return ramble;
}



const AnythingElse = () => {
  const defaultRamble = "Is there anything else I can help you with?";
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  ramble.potential_reponses.push(new PlayerResponse("I would like to report a bug with Zampanio.", ReturnToQueue));
  ramble.potential_reponses.push(new PlayerResponse("I would like to request a Limited Edition Zampanio Community Edition Guide.", ReturnToQueue));
  ramble.potential_reponses.push(new PlayerResponse("How do you play this game?", PlayGame));
  ramble.potential_reponses.push(new PlayerResponse("I would like to speak with an Operator.", QQ)); return ramble;
}



const QQ = () => {
  const defaultRamble = `What topic would you like help with?`;

  const ramble = new CustomerServiceRamble(defaultRamble, []);
  ramble.potential_reponses.push(new PlayerResponse("Getting to know QQIS.", GTKQQIS));
  ramble.potential_reponses.push(new PlayerResponse("Getting started with QQIS.", GSWQQIS));
  ramble.potential_reponses.push(new PlayerResponse("Troubleshooting QQIS", TSQQIS));
  ramble.potential_reponses.push(new PlayerResponse("Call Volume.", CVQQIS));
  ramble.potential_reponses.push(new PlayerResponse("Return to Queue.", ReturnToQueue));


  return ramble;
}

const ReturnToQueue = () => {
  const defaultRamble = `I can definitely help you do that! Please hold!\n\nThank you for waiting! \nI will need to transfer you to a ${NEXT_TITLE}, at extension ${NEXT_EXTENSION}. It may take a while to transfer.. If we get disconnected, you can dial their extension directly.`;
  const ramble = new CustomerServiceRamble(defaultRamble, []);
  const Branch2 = () => {
    const defaultRamble = "I'm afraid I can't do that, Dave.";
    const ramble = new CustomerServiceRamble(defaultRamble, []);
    return ramble;
  }
  ramble.potential_reponses.push(new PlayerResponse("No actually talk to me.", Branch2));
  return ramble;
}


const HelloWorld = () => {
  const defaultRamble = `Hi there! My name is ${CURRENT_NAME}. You can begin by asking your question below! Someone will be with you shortly. Due to call volume, Restricted Text Only Mode has been initiated. Thank you for your patience!`;

  const ramble = new CustomerServiceRamble(defaultRamble, []);

  const Branch2 = () => {
    const defaultRamble = "I'm afraid I can't do that, Dave.";
    const ramble = new CustomerServiceRamble(defaultRamble, []);
    ramble.potential_reponses.push(new PlayerResponse("No actually talk to me.", () => { console.log("JR NOTE: No") }));
    return ramble;
  }



  ramble.potential_reponses.push(new PlayerResponse("Hello? I can buy things here. Uh. With Gopher Gold? Or Candy?", TheCloser));

  ramble.potential_reponses.push(new PlayerResponse("Could somebody explain what Zampanio is?", ReturnToQueue));
  ramble.potential_reponses.push(new PlayerResponse("I think I found a bug.", ReturnToQueue));
  ramble.potential_reponses.push(new PlayerResponse("How do I leave this bathroom?", PlayGame));
  ramble.potential_reponses.push(new PlayerResponse("I would like to speak with an Operator.", QQ));


  return ramble;
}

const randomSpecialist = (frustration_level) => {
  const first_names = ["Craig", "John", "Jude", "Jade", "Joey", "Rose", "Roxy", "Jeff", "Dave", "Dirk", "Jove", "Jake", "Sophie", "Jaxon", "Basira", "Daisy", "Martin", "Georgie", "Sasha", "James", "Taylor", "Victoria", "Jean-Paul", "Bob", "Alice", "Carol", "Eve", "Adam", "Rachel", "Brian", "Aisha", "Alexandra", "Alex", "Tobias", "Marco", "Cassie", "Tom", "Lisa", "Sarah", " Sylvester", "Gordon", "Helen", "Jamie", "Lillian", "Mary", "Ashton", "Peter", "Zawhei", "Eirikr", "Volour", "Okarin", "Peewee", "Hagala", "Despap", "Othala", "Gertrude", "Mike", "Michael", "Peter", "Simon", "Manuela", "Annabel"];
  const last_names = ["Researcher", "Gently", "Egbert", "Claire", "Lalonde", "Strider", "Hussain", "King", "Stoker", "Sims", "Blackwood", "Barker", "James", "Blake", "Dalon", "Vasil", "Hebert", "Jensen", "Lindt", "Newell", "Laborn", "Fell", "Wilbourn", "Livsey", "Lamb", "Bacama", "Kharun", "Reynolds", "Braggi", "Seelee", "Cassan", "Folnir", "Citato", "Grigor", "Crew", "Robertson", "Fairchild", "Lukas", "Richardson", "Dominguez", "Cane", "Salesa", "Shelly"];
  const name = `${pickFrom(first_names)} ${pickFrom(last_names)} `;
  return new CustomerSupportSpecialist(name, `${getRandomNumberBetween(2, 999)}`, GenericSupport(frustration_level));
}


const cachedEverthing = {}

const everythingExtendsions = [
  "png",
  "PNG",
  "gif",
  "jpg",
  "jpeg",
  "wav",
  "mp3",
  "ogg",
  "mp4",
  "txt"
];
const everythingFilePattern = new RegExp('<a href="([^?]*?)">', 'g');

const everythingExtensionPattern = new RegExp(`\\\.(${everythingExtendsions.join("|")})\$`);


const getEverything = async (url) => {
  if (cachedEverthing[url]) {
    return cachedEverthing[url];
  }

  let promise = new Promise(async (resolve, reject) => {
    try {
      const rawText = await httpGetAsync(url);

      let files = [];
      const match = rawText.matchAll(everythingFilePattern);
      const matches = Array.from(match, (res) => res);
      for (let m of matches) {
        const item = m[1];
        if (item.match(everythingExtensionPattern)) {
          files.push(item);
        }
      }

      cachedEverthing[url] = files;
      //console.log("JR NOTE: returned from network for", url)
      resolve(files);
    } catch (e) {
      console.log("JR NOTE: error", e)
      reject();
      return [];
    }
  })
  cachedEverthing[url] = promise;
  return promise;
}
