
//keep all functions internal to minimize collisions with whatever page this gets called on
const doLoop = () => {


    //https://media.discordapp.net/attachments/468574691087613952/863079687276986388/tumblr_qaosxmi6ET1xf64vf.mp4
    //https://en.m.wikipedia.org/wiki/Wordplay_(The_Twilight_Zone)
    //takes in a sentence, for each word in it decides if its going to fuck it up today.
    //seed_multiplier handles making it so that EVERY instance of the word "dog" is treated the same but each time i ask i might decide dog is changeable vs not
    function domWordMeaningFuckery() {
        const root = document.querySelector('body');
        if (root) {
            const children = root.querySelectorAll("*");
            for (let child of children) {
                const subchildren = child.querySelectorAll("*");
                if (subchildren.length === 0) {
                    child.textContent = gaslightWordMeanings(child.textContent);
                }
            }
        }
        //loop
        setTimeout(() => {
            window.requestAnimationFrame(() => { domWordMeaningFuckery() })
        }, 3000)
    };



    function gaslightWordMeanings(sentence, seed_multiplier) {
        const words = sentence.split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = getWordReplacement(words[i], seed_multiplier)
        }
        return words.join(" ");
    }

    //takes in a word, turns it into a random seed and if rngesus says so, turns it into another word
    function getWordReplacement(word) {
        if (!word) {
            return;
        }
        console.log("JR NOTE:getWordReplacement ", word);
        //internal name space, don't collide with any possible external ones
        const getRandomNumberBetween = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        const pickFrom = (array) => {
            return array[getRandomNumberBetween(0, array.length - 1)];
        }
        if (word === "you") {
            return "ya'll";
        }
        const gaslightOptions = ["echidna", "[REDACTED]", "null", "dark",
            "friendless", "alone", "minotaur", "hunt", "flesh", "changeling",
            "distortion", "watcher", "filth", "minotaur", "worm", "bug", "gas",
            "flavor", "evil fox", "lazy dog", "quick fox", "dead fox",
            "terrible fox", "bad fox", "fox", "untrustworthy fox",
            "taste", "smell", "feeling", "failure", "fear",
            "crow", "quotidian", "horse", "dolphin",
            "zampanio", "mall", "blorbo", "rat", "quotidian",
            "angel", "god", "harvest", "devil", "spiral",
            "training", "team", "eyedol games", "immune system", "loop",
            "loop", "loop", "loop", "loop", "mirror",
            "eye", "hydration", "station", "maze", "taste",
            "sweet", "candy", "corn", "pumpkin", "halloween",
            "skull", "hole", "hatsune miku", "dig", "dig",
            "dig", "k", "bird", "robot", "cyborg",
            "bunker", "High School visit on March 17", "male", "female", "zampanio",
            "zampanini", "eyedlr", "static", "fruit", "reap",
            "sow", "cult", "twins", "eye", "eyes",
            "savor", "sleep", "rest", "drink", "eat",
            "north", "south", "east", "up", "down",
            "take", "waste", "waste", "javascript", "console",
            "flower", "door", "ajar", "not", "obsession",
            "dangerous", "thing", "marathon", "sprint", "truth",
            "horror", "mistake", "line", "stay", "good dog",
            "canine", "good boy", "good boi", "bark", "garbage",
            "curious dog", "squirming dog", "make dog", "dog CODE",
            "artist", "musician", "programmer", "console", "hacker",
            "secret", "gaslight", "robot", "dog", "boredom", "corridor",
            "hallway", "backroom", "labyrinth", "minotaur", "maze", "door",
            "distortion", "spiral", "gravestone", "dinner", "ThisIsNotABG",
            "player", "ThisIsNotAGame", "ThisIsNotABlog", "situation",
            "canada", "bot", "observer", "camera", "watcher", "ThisIsNotAnEye",
            "ThisIsNotASpiral", "wednesday", "trumpets", "sunflower", "dinosaur"];

        let chance = .99;
        if (Math.random() > chance) {
            let ret = pickFrom(gaslightOptions);
            if (word[0] === word[0].toUpperCase()) {
                ret = titleCase(ret);
            }
            return ret;
        }
        return word;
    }
    domWordMeaningFuckery();
}






doLoop();


/*
in my heart the closer is a secretary bird
like not just haughty
but high alert, somewhere between predator and prey
scanning the environment


jasna just seemed so stiff to me
she never let herself just exist
like flower chick does
very opposite in a lot of ways

shes not necessarily fancy feminine like how the birds look like they are wearing makeup
but that confidence
plus the pun in secretary 

she is NOT one

but very much tries to be a hyper competent second in command
like
a secretary bird moves stiff yet confident
but is also flighty and cautious when attacking a snake 
better to OVER correct and beat the shit out of it then risk failure
the closer thinks theres no kill like overkill when being competent
she never thinks shes good enough

for flower chick
"if its not the apocalypse, no sense worrying about it"
she has borger
and video game
and Not Thinking About The Apocalypse
she's great
she's loose the way neville is

but for like opposite reasons
neville is all chill because Nothing Bad Can Ever Happen
while flower chick is all chil because Everything Will All End One Day But It Hasn't Happened Yet And You Can't Stop It Only Delay It So Enjoy It While You Can
so she tries to keep wanda more or less contained and Auditors at a minium
but its not REALLY a big deal because
again
it all ends in the end
so why not enjoy it till then
and that mestasitizes into Apocalypse Chick
"Everything Is Great Because The Worst Already Happened So Enjoy This Forever :)"
apocalypse chick is MORE traumitized than flower chick, by definition
her worst fear happened
and she decided that actually this was a good thing, look at how cool her skyrim mods in reality are
because if she stopped
if she acknowledged how fucked everything is
how scared and bored she is with infinite power
haha!
better not do that
trickster mod is GREAT :) :) :)
no problems :) :) :)

*/