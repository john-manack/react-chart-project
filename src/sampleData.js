const originalData = [
  { name: "John", gender: "male", math: 100, physics: 80 },
  { name: "Jane", gender: "female", math: 80, physics: 20 },
  { name: "Biju", gender: "male", math: 60, physics: 90 },
];

const data = {
  labels: originalData.map((obj) => obj.name),
  datasets: [
    {
      label: "Math Score",
      data: originalData.map((obj) => obj.math),
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
      ],
    },
    {
      label: "Physics Score",
      data: originalData.map((obj) => obj.physics),
      backgroundColor: [
        "rgba(54, 162, 235, 1)",
      ],
    },
  ],
};

export default data;
