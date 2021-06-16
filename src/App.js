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
      <Bar data={data} options={options}/>
    </>
  );
}

export default App;
