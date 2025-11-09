
const doSAFE = () => {
    const body = document.querySelector("body");
    mildAmount = 13;
    moderateAmount = 31;
    extremeAmount = 81;
    const options = [`opacity: 1.0-${mildAmount / 100}`,
    `opacity: 1.0-${moderateAmount / 100}`,
    `filter: contrast(${extremeAmount / 100});`,
    `filter: constrast(${mildAmount / 100});`,
    `filter: contrast(${moderateAmount / 100});`,
    `filter: contrast(${mildAmount});`,
    `filter: brightness(${extremeAmount / 100});`,
    `filter: brightness(${mildAmount / 100});`,
    `filter: brightness(${mildAmount});`,
    `filter: brightness(${moderateAmount / 100});`,
    `filter: saturate(${extremeAmount / 100});`,
    `filter: saturate(${mildAmount / 100});`,
    `filter: saturate(${mildAmount});`,
    `filter: saturate(${moderateAmount / 100});`,
    `opacity: 1.0-${extremeAmount / 100}`,
    `filter: hue-rotate(${extremeAmount / 360});`,
    `filter: hue-rotate(${mildAmount / 360});`,
    `filter: hue-rotate(${moderateAmount / 360});`,
    `filter: grayscale(${extremeAmount / 100});`,
    `filter: grayscale(${mildAmount / 100});`,
    `filter: grayscale(${moderateAmount / 100});`,
    `filter: sepia(${extremeAmount / 100});`,
    `filter: sepia(${mildAmount / 100});`,
    `filter: sepia(${moderateAmount / 100});`];

    const applyCSS = () => {
        body.style.cssText = pickFrom(options);
        setTimeout(() => {
            window.requestAnimationFrame(() => { applyCSS() })
        }, 30000 * Math.random())
    }
    //loop
    applyCSS();

}


doSAFE();
