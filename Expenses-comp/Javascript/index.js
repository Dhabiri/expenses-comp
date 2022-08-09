var xValues = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
var yValues = [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48];
var barColors = [
  "#ec775f",
  "#ec775f",
  "#76b5bc",
  "#ec775f",
  "#ec775f",
  "#ec775f",
  "#ec775f",
];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: false,
      text: "World Wine Production 2018",
    },
  },
});
