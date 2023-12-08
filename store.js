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

const initialTime = new Date();
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
  const initial_directory = { "operator": new CustomerSupportSpecialist("Quotidian Quorum InfoBroker System", "quick start", QQ()), 1152: new CustomerSupportSpecialist("Justified Recursion", "1152", JRK()), "the truth is layered": new CustomerSupportSpecialist("Justified Recursion", "the truth is layered", JR2()), "the end is never the end": new CustomerSupportSpecialist("Justified Recursion", "the end is never the end", JR()), 0: new CustomerSupportSpecialist("Quotidian Quorom InfoBroker System", "0", HelloWorld()), "411": new CustomerSupportSpecialist("Debug Bot", "411", Debug()), "1": new CustomerSupportSpecialist("Not Found", "1", Lost()), 13: new CustomerSupportSpecialist("Spy Log", "0", CloseButStillTooFar()), 4631: new CustomerSupportSpecialist("Spy Log", "0", CloseButStillTooFar()) };
  
  form.onsubmit = (e) => {
    e.preventDefault();
    if((input.value in initial_directory) ){
      syncChatBodyToRamble(chatBody, initial_directory[input.value].ramble, initial_directory[input.value], initial_directory);
      //setCurrentRamble(directory[extension].ramble);
  }else{
    syncChatBodyToRamble(chatBody, initial_directory["1"].ramble, initial_directory["1"], initial_directory);
    //setCurrentRamble(directory[1].ramble);
  }
  }

  let synced = false;

  button.onclick = () => {
    if (chatContainer.style.display === "none") {
      if (!synced) {
        syncChatBodyToRamble(chatBody, initial_directory["0"].ramble, initial_directory["0"], initial_directory);
        synced = true;
      }
      chatContainer.style.display = "block";
    } else {
      chatContainer.style.display = "none"
    }
  }
}


const syncChatBodyToRamble = async (chatBody, ramble, specialist, directory) => {
  chatBody.innerHTML = "";
  currentExtension = specialist.extension;
  const time = (Date.now() - (initialTime));

  let next_specialist = randomSpecialist(Math.round(time / 1000 / 60));
  if (!(next_specialist.extension in directory)) {
    directory[next_specialist.extension] = next_specialist;
  }else{
    next_specialist = directory[next_specialist.extension]; //don't use the one we generated, use the one we already have
  }

  const hell = createElementWithClassAndParent("div", chatBody, 'customer-service-hell');

  const audio = new Audio("264828__cmdrobot__text-message-or-videogame-jump.mp3");
  const parts = ramble.text.split("\n");

  //for now just render it all in a big pile, but JR NOTE: TODO we need to time this
  for (let part of parts) {
    await sleep(1000 * getRandomNumberBetween(1, 5));
    if(currentExtension != specialist.extension){
      return;
    }
    renderOneLine(hell, specialist, next_specialist, part);
    audio.play();
  }

  const optionsEle = createElementWithClassAndParent("div", chatBody, 'chat-options');

  for (let option of ramble.potential_reponses) {
    if(currentExtension != specialist.extension){
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

const TheCloser = () => {
  const defaultRamble = `Hello, Wodin.
    I'm sure you are alarmed that I am contacting you like this; very sudden, I know. However, please, do not worry. I assure you that everything is under control.
     How are you, by the way? Not fantastic, I assume. I believe you don't need to be told that I've been monitoring your chat, but I offer it for the sake of transparency.
     I would like to apologize for the experience you've had, and any feelings that may have surfaced because of it.
     My job, and the service I provide for you, is simple: I am here to make sure your complaint gets heard, Wodin. You may call me the Closer, if you like. It is certainly easier to say than my full title. 
     As for what you're here for: You'd like to find…
     Excuse me, a killer? Contracted by our company?
     Oh, my. Well, that can't stand at all. We at Eyedol Games would never stand for these sorts of misdemeanors affecting our treasured relationship with our clients, and I can see how one could confuse a mere uncouth fan with an employee, especially with their…
     ...strange efficiency, on the matter.
     Nevermind that. I'd be more than happy to look into it for you.
     I'll need some starting information, though. Could you provide me with a name? A first and last name is ideal, we just started transferring our physical databases onto the World Wide Web, or ‘the Cloud', as they have been calling it. The technicalities of it escape me, I'm afraid.
      Any physical characteristics would do as well, of course-- although, I must say I can only take photographs on this one. I cannot bring myself to fire some unlucky fellow because of someone else's crime, would you? It does not seem very fair. 
      I would then have to look through the old documents, but anything to please a client, of course.
      ...…ah. You do not happen to possess any of those, do you, Wodin?
      A shame. I'm afraid there's not much I can do for you without them. We cannot take someone to trial without evidence, and, as you'd understand, much less fire them. 
      Labor laws mean that we cannot always do what is most efficient, after all. Such are the trappings of modern legislature.
      This leaves us at an impasse. I'm afraid that if you publish these accusations without evidence, our lawyers might be inclined to sue for libel. 
      I know it sounds like a threat, but I'd like to assure you that it's not. I'd argue it's more of a headache for me than you.
      If such a thing were to happen, I'd be happy and willing to use my position to retract the charges, all for such a valued client. But I do not envy the paperwork.
      So, perhaps we can reach an understanding, Wodin.
      If you happen to come across any identifiable features of this Killer, let me know, and I will cross reference with our available documents. If I find anything that seems like a match, the employee will be terminated immediately, and then we can see the case together in court. That way we can reach an amicable solution that benefits all parties.
      And, of course, shed light on one of the most infamous serial killers of the decade. All with your help.
      Well, if there is anything else I can do to help you, Wodin, feel free to let me know.
      Thank you for calling Eyedol Games, and have a nice night.  `;
  const ramble = new CustomerServiceRamble(defaultRamble, []);
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
  const defaultRamble = "Our latest entry in the Zampanio (TM) Franchise can be played with either keyboard or mouse for your convinience!";
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
  const defaultRamble = `Hi there! My name is ${CURRENT_NAME}. You can begin by asking your question below! Someone will be with you shortly. Due to call volume, Restricted Text Only Mode has been initiated. Thank you for your patience! \n Please select an option below!`;

  const ramble = new CustomerServiceRamble(defaultRamble, []);

  const Branch2 = () => {
    const defaultRamble = "I'm afraid I can't do that, Dave.";
    const ramble = new CustomerServiceRamble(defaultRamble, []);
    ramble.potential_reponses.push(new PlayerResponse("No actually talk to me.", () => { console.log("JR NOTE: No") }));
    return ramble;
  }



  ramble.potential_reponses.push(new PlayerResponse("I would like to report a bug with Zampanio.", ReturnToQueue));
  ramble.potential_reponses.push(new PlayerResponse("I would like to request a Limited Edition Zampanio Community Edition Guide.", ReturnToQueue));
  ramble.potential_reponses.push(new PlayerResponse("How do you play this game?", PlayGame));
  ramble.potential_reponses.push(new PlayerResponse("I would like to speak with an Operator.", QQ));


  return ramble;
}

const randomSpecialist = (frustration_level) => {
  const first_names = ["Craig", "John", "Jude", "Jade", "Joey", "Rose", "Roxy", "Jeff", "Dave", "Dirk", "Jove", "Jake", "Sophie", "Jaxon", "Basira", "Daisy", "Martin", "Georgie", "Sasha", "James", "Taylor", "Victoria", "Jean-Paul", "Bob", "Alice", "Carol", "Eve", "Adam", "Rachel", "Brian", "Aisha", "Alexandra", "Alex", "Tobias", "Marco", "Cassie", "Tom", "Lisa", "Sarah", " Sylvester", "Gordon", "Helen", "Jamie", "Lillian", "Mary", "Ashton", "Peter", "Zawhei", "Eirikr", "Volour", "Okarin", "Peewee", "Hagala", "Despap", "Othala", "Gertrude", "Mike", "Michael", "Peter", "Simon", "Manuela", "Annabel"];
  const last_names = ["Researcher", "Gently", "Egbert", "Claire", "Lalonde", "Strider", "Hussain", "King", "Stoker", "Sims", "Blackwood", "Barker", "James", "Blake", "Dalon", "Vasil", "Hebert", "Jensen", "Lindt", "Newell", "Laborn", "Fell", "Wilbourn", "Livsey", "Lamb", "Bacama", "Kharun", "Reynolds", "Braggi", "Seelee", "Cassan", "Folnir", "Citato", "Grigor", "Crew", "Robertson", "Fairchild", "Lukas", "Richardson", "Dominguez", "Cane", "Salesa", "Shelly"];
  const name = `${pickFrom(first_names)} ${pickFrom(last_names)} `;
  return new CustomerSupportSpecialist(name, `${getRandomNumberBetween(2, 999)}`, GenericSupport(frustration_level));
}
