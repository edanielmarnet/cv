import {
  Chart as ChartJS,
  ArcElement,  // Para gráficos do tipo Doughnut
  CategoryScale,  // Para as escalas de categoria
  LinearScale,  // Para escalas lineares
  BarElement,  // Para gráficos de barra
  Title,  // Para título do gráfico
  Tooltip,  // Para tooltip
  Legend,  // Para legendas
} from 'chart.js';

import { Doughnut, Bar } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';

// Registrar os componentes que o Chart.js precisa
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {

  const pageViewsData = {
    labels: ['Página Inicial', 'Página de CV', 'Página de Contato'],
    datasets: [
      {
        data: [150, 75, 50], // Dados de exemplo
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const buttonClicksData = {
    labels: ['Botão 1', 'Botão 2', 'Botão 3'],
    datasets: [
      {
        label: 'Cliques nos Botões',
        data: [30, 50, 20], // Dados de exemplo
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div className='container-fluid'>
      <div className="row p-2">
        <div className="col-6">
          <Card>
            <Card.Body>
              <Card.Title>Visitas por Página</Card.Title>
              <Doughnut data={pageViewsData} />
            </Card.Body>
          </Card>
        </div>
        <div className="col-6">
          <Card>
            <Card.Body>
              <Card.Title>Cliques nos Botões</Card.Title>
              <Bar data={buttonClicksData} options={{ indexAxis: 'y' }} />
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
