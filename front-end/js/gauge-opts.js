    var opts = {
      angle: 0.15, // The span of the gauge arc
      lineWidth: 0.44, // The line thickness
      radiusScale: 1, // Relative radius
      radius: 69,
      pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.040, // The thickness
        color: '#000000' // Fill color
      },
      limitMax: false,     // If false, max value increases automatically if value > maxValue
      limitMin: false,     // If true, the min value of the gauge will be fixed
      colorStart: '#82BCDD',   // Colors
      colorStop: '#DA0000',    // just experiment with them
      strokeColor: '#E0E0E0',  // to see which ones work best for you
      generateGradient: true,
      highDpiSupport: true,     // High resolution support
      fontSize:69,
      generateGradient: true,
      renderTicks: {
        divisions: 4,
        divWidth: 1.2,
        divLength: 0.68,
        divColor: '#333333',
        subDivisions: 3,
        subLength: 0.5,
        subWidth: 0.6,
        subColor: '#666666'
      }
    };
    // http://bernii.github.io/gauge.js/#?currval=3000&animationSpeed=69&angle=6&lineWidth=45&radiusScale=100&pointer.length=60&pointer.color=000000&pointer.strokeWidth=40&fontSize=69&colorStart=3EC1CF&colorStop=DA0000&strokeColor=E0E0E0&
    var target = document.getElementById('foo'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
    gauge.maxValue = 3000; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 64; // set animation speed (32 is default value)
    gauge.set(0); // set actual value
    