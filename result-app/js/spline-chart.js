var chart = bb.generate({
  data: {
    columns: [
      ["data1", 30, 200, 100, 400, 150, 250],
      ["data2", 130, 100, 140, 200, 150, 50],
    ],
    type: "spline", // for ESM specify as: spline()
  },
  bindto: "#splineChart",
});
