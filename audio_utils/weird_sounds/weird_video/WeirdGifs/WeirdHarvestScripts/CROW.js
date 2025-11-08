
const doCROW = () => {
    //fun fact, i originally did this on eyedol games
    //so CROW makes sense

    const root = document.querySelector('body');
    const ele = document.createElement("div");
    //just do raw html to inject the svg filters
    ele.innerHTML = `<div id="possible-filters"
    data-src="https://blog.logrocket.com/complete-guide-using-css-filters-svgs/#using-css-filters-svgs">
    <svg>
      <filter id="wavy">
        <feTurbulence id="turbulence" type="turbulence" numOctaves="1" result="NOISE"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="50">
        </feDisplacementMap>
        <animate xlink:href="#turbulence" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1"
          values="0.01 0.02;0.02 0.04;0.01 0.02" repeatCount="indefinite"></animate>
      </filter>
    </svg>

    <svg>
      <filter id="wavy-subtle">
        <feTurbulence id="turbulence-subtle" type="turbulence" numOctaves="1" result="NOISE"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="50">
        </feDisplacementMap>
        <animate xlink:href="#turbulence-subtle" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1"
          values="0.001 0.002;0.002 0.004;0.001 0.002" repeatCount="indefinite"></animate>
      </filter>
    </svg>

    <svg>
      <filter id="wavy-super-subtle">
        <feTurbulence id="turbulence-super-subtle" type="turbulence" numOctaves="1" result="NOISE"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="50">
        </feDisplacementMap>
        <animate xlink:href="#turbulence-super-subtle" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1"
          values="0.0001 0.0002;0.0002 0.0004;0.0001 0.0002" repeatCount="indefinite"></animate>
      </filter>
    </svg>

    <svg>
      <filter id="wavy-subtle-octave">
        <feTurbulence id="turbulence-subtle-octave" type="turbulence" numOctaves="13" result="NOISE"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="50">
        </feDisplacementMap>
        <animate xlink:href="#turbulence-subtle-octave" attributeName="baseFrequency" dur="60s" keyTimes="0;0.5;1"
          values="0.001 0.002;0.002 0.004;0.001 0.002" repeatCount="indefinite"></animate>
      </filter>
    </svg>

    <svg>
      <filter id="blur">
        <feGaussianBlur stdDeviation="5"></feGaussianBlur>
      </filter>
    </svg>


    <svg>
      <filter id="blur-tiny">
        <feGaussianBlur stdDeviation="1"></feGaussianBlur>
      </filter>
    </svg>


    <svg>
      <filter id="blur-big">
        <feGaussianBlur stdDeviation="13"></feGaussianBlur>
      </filter>
    </svg>

    <svg>
      <filter id="shadow">
        <feDropShadow in="SourceGraphic" dx="10" dy="10"></feDropShadow>
      </filter>
    </svg>

    <svg>
      <filter id="dilate">
        <feMorphology in="SourceGraphic" operator="dilate" radius="5">
        </feMorphology>
      </filter>
    </svg>


    <svg>
      <filter id="dilate-small">
        <feMorphology in="SourceGraphic" operator="dilate" radius="1">
        </feMorphology>
      </filter>
    </svg>

    <svg>
      <filter id="dilate-huge">
        <feMorphology in="SourceGraphic" operator="dilate" radius="13">
        </feMorphology>
      </filter>
    </svg>

    <svg>
      <filter id="erode">
        <feMorphology in="SourceGraphic" operator="erode" radius="5">
        </feMorphology>
      </filter>
    </svg>

    <svg>
      <filter id="erode-small">
        <feMorphology in="SourceGraphic" operator="erode" radius="1">
        </feMorphology>
      </filter>
    </svg>

    <svg>
      <filter id="erode-huge">
        <feMorphology in="SourceGraphic" operator="erode" radius="13">
        </feMorphology>
      </filter>
    </svg>

    <svg>
      <filter id="simplewave">
        <feTurbulence type="turbulence" baseFrequency="0.01 0.02" numOctaves="1" result="NOISE"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="NOISE" scale="50">
        </feDisplacementMap>
      </filter>
    </svg>


    <svg>
      <filter id="half-colors">
        <feComponentTransfer>
          <feFuncR type="discrete" tableValues="0 0.5 0 1" />
          <feFuncG type="discrete" tableValues="0 0.5 0 1" />
          <feFuncB type="discrete" tableValues="0 0.5 0 1" />
          <feFuncA type="discrete" tableValues="0 0.5 0 1" />
        </feComponentTransfer>
      </filter>
    </svg>

    <svg>
      <filter id="half-contrast">
        <feComponentTransfer>
          <feFuncR type="table" tableValues="0 0.5 0 1" />
          <feFuncG type="table" tableValues="0 0.5 0 1" />
          <feFuncB type="table" tableValues="0 0.5 0 1" />
          <feFuncA type="table" tableValues="0 0.5 0 1" />
        </feComponentTransfer>
      </filter>
    </svg>

    <svg>
      <filter id="amplify">
        <feComponentTransfer>
          <feFuncR type="gamma" exponent="1.9" amplitude="1.9" offset="0" />
          <feFuncG type="gamma" exponent="1.9" amplitude="1.9" offset="0" />
          <feFuncB type="gamma" exponent="1.9" amplitude="1.9" offset="0" />
        </feComponentTransfer>
      </filter>
    </svg>



    <svg>
      <filter id="cloudy-blend">
        <feTurbulence in="SourceGraphic" type="turbulence" baseFrequency="0.01 0.02" numOctaves="1" result="NOISE">
        </feTurbulence>
        <feBlend in="SourceGraphic" in2="NOISE" mode="multiply" result="BLEND"> </feBlend>
      </filter>
    </svg>

    <svg>
      <filter id="point-light">
        <feDiffuseLighting in="SourceGraphic" lighting-color="#00c2cb" diffuseConstant="2">
          <fePointLight x="580" y="100" z="40" />
        </feDiffuseLighting>
        <feComposite in="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" />
      </filter>
    </svg>

    <svg>
      <filter id="tiles">
        <feTile in="SourceGraphic" x="13" y="25" width="140" height="75" />
        <feTile />
      </filter>
    </svg>

  </div>
`;

    root.append(ele);



    let filterIds = [];

    const fetchAllFilterIds = () => {
        const filters = document.querySelectorAll("#possible-filters filter");
        const ids = [];
        //normally id map, but filters isn't an array but a node list and can only be accessed by index
        for (let i = 0; i < filters.length; i++) {
            ids.push(filters[i].id);
        }
        return ids;
    }
    /*
    cycles through all the filters this knows about so i can see them and compare
    */
    const filterTest = () => {
        if (!filterIds || filterIds.length == 0) {
            filterIds = fetchAllFilterIds();//no reason not to cache them
        }

        let currentIndex = 0;
        const body = document.querySelector("body");
        body.onclick = () => {
            const id = filterIds[currentIndex % filterIds.length];
            console.log("JR NOTE: displaying filter", id)
            body.style.filter = `url(#${id})`;
            currentIndex++;
        }

    }

    //internal name space, don't collide with any possible external ones
    const getRandomNumberBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const pickFrom = (array) => {
        return array[getRandomNumberBetween(0, array.length - 1)];
    }

    /*
    waits a random amount of time and picks a new filter
    */
    const filterFuckery = async () => {
        if (!filterIds || filterIds.length == 0) {
            filterIds = fetchAllFilterIds();//no reason not to cache them
        }
        const body = document.querySelector("body");

        body.style.filter = `url(#${pickFrom(filterIds)})`;
        //loop
        setTimeout(() => {
            window.requestAnimationFrame(() => { filterFuckery() })
        }, (31000 * Math.random()) + 3000)

    }

    filterFuckery();




}

doCROW();
