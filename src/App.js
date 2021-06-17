import './App.css';
import { Bar } from 'react-chartjs-2';
import data from './sampleData';

function App() {
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <div className="App">
        <h1>Chart App</h1>
      </div>
      <div className="App-chart">
        <h2>Subject Scoring Data by Student</h2>
        <Bar data={data} options={options} />
      </div>
    </>
  );
}

export default App;
