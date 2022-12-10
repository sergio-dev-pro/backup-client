import React from "react";

const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};

const config = {
  type: "doughnut",
  data: data,
};

function App() {
  return (
    <div className="w-100 bg-slate-100">
      <header className="p-4 prose container-sm mx-auto">
        <h1>Backups</h1>
      </header>
      <main></main>
    </div>
  );
}

export default App;
