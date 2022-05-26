// import bb, {gauge} from "billboard.js"

// const bb = require('billboard.js');
// const { gauge } = require('billboard.js');

// const bb = billboard.js;
// const { gauge } = billboard.js;

var chart = bb.generate({
    data: {
      columns: [
      ["data", 91.4]
      ],
      type: "gauge", // for ESM specify as: gauge()
      onclick: function(d, i) {
      console.log("onclick", d, i);
     },
      onover: function(d, i) {
      console.log("onover", d, i);
     },
      onout: function(d, i) {
      console.log("onout", d, i);
     }
    },
    gauge: {
      width: 50,
    },
    color: {
      pattern: [
        "#FF0000",
        "#F97600",
        "#F6C600",
        "#60B044"
      ],
      threshold: {
        values: [
          30,
          60,
          90,
          100
        ]
      }
    },
    size: {
      height: 230
    },
    bindto: "#gaugeChart"
  });
  
  setTimeout(function() {
      chart.load({
          columns: [["data", 10]]
      });
  }, 1000);
  
  setTimeout(function() {
      chart.load({
          columns: [["data", 50]]
      });
  }, 2000);
  
  setTimeout(function() {
      chart.load({
          columns: [["data", 70]]
      });
  }, 3000);
  
  setTimeout(function() {
      chart.load({
          columns: [["data", 0]]
      });
  }, 4000);
  
  setTimeout(function() {
      chart.load({
          columns: [["data", 100]]
      });
  }, 5000);