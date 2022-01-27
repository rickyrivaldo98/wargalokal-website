import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

export const KesehatanChart = () => {
  const data = {
    labels: [
      "Jarak Sarana Kesehatan Terdekat",
      "Ketersediaan Tenaga Kesehatan",
      "Askes ke poskesdes, polindes, atau posyandu",
      "Tingkat kepesetaan BPJS",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [1, 2, 3, 4],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export const PieChartPendidikan = () => {
  const data = {
    labels: [
      "Akses Pendidikan Dasar SD/MI < 3KM",
      "Akses Pendidikan Dasar SMP/MTS < 6KM",
      "Kegiatan PAUD",
      "Kegiatan PKBM Paket A-B-C",
      "Kegiatan Kurus",
      "Perpustakaan Desa",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [1, 1, 1, 1, 1, 1],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {};

  return <Doughnut data={data} options={options} />;
};
