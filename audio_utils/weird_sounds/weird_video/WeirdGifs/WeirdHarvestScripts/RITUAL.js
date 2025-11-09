
const doRITUAL = () => {
    //one FAITHFUL was offered the ability to change the Harvests' color for halloween
    //they declined.
    //this was the result
    /*
        //note, intentionally entirely stand alone, no utils used
        //wanna inject this into any random page later
    */
    const body = document.querySelector("body");
    //NOTE TO FUTURE JR: animating this filter just makes my fans spin up
    //even if its 'safe' and im trying to go low framerate just do it manually


    /* const styleEle = document.createElement("style");
 
     const duration = 365 + Math.round(Math.random() * 60 * 10); //at least one second per change (IMPORTANT: because filter animation is so heavy, you want to let it take forever)
     const delay = 3 + Math.round(Math.random() * 10); //at least three seconds
     console.log("JR NOTE:  animation with", { duration, delay })
     styleEle.innerHTML = `
         body{
             animation: color-gaslight ${duration}s steps(365,jump-end) ${delay}s infinite;
         }   
         @keyframes color-gaslight {
         0% {
             filter: hue-rotate(0deg);
         }
 
         100% {
             filter: hue-rotate(360deg);
         }
         
     `;
     body.append(styleEle);*/

    let hue = 0;

    //once a second, cycle hue
    const applyCSS = () => {
        hue++;
        body.style.filter = `hue-rotate(${hue}deg)`;
        setTimeout(() => {
            window.requestAnimationFrame(() => { applyCSS() })
        }, 3000)
    }
    //loop
    applyCSS();
}

doRITUAL();
