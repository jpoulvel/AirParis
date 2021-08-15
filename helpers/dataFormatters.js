const sortDataByDateByPlace = (data) => {
  const labels = []
  const datasets = {
    parc_de_belleville: {
      label: "parc_de_belleville",
      data: [],
      fill: false,
      backgroundColor: 'rgb(200, 99, 132)',
      borderColor: 'rgba(200, 99, 132, 1)',
      yAxisID: 'y-axis-1',
    },
    station_reference_bp_est: {
      label: "station_reference_bp_est",
      data: [],
      fill: false,
      backgroundColor: 'rgb(255, 200, 132)',
      borderColor: 'rgba(255, 200, 132, 1)',
      yAxisID: 'y-axis-1',
    },
    rue_menilmontant: {
      label: "rue_menilmontant",
      data: [],
      fill: false,
      backgroundColor: 'rgb(255, 99, 200)',
      borderColor: 'rgba(255, 99, 200, 1)',
      yAxisID: 'y-axis-1',
    },
    place_st_fargeau: {
      label: "place_st_fargeau",
      data: [],
      fill: false,
      backgroundColor: 'rgb(20, 99, 132)',
      borderColor: 'rgba(20, 99, 132, 1)',
      yAxisID: 'y-axis-1',
    },
    rue_des_pyrenees: {
      label: "rue_des_pyrenees",
      data: [],
      fill: false,
      backgroundColor: 'rgb(255, 20, 132)',
      borderColor: 'rgba(255, 20, 132, 1)',
      yAxisID: 'y-axis-1',
    },
    bd_menilmontant: {
      label: "bd_menilmontant",
      data: [],
      fill: false,
      backgroundColor: 'rgb(255, 99, 20)',
      borderColor: 'rgba(255, 99, 20, 1)',
      yAxisID: 'y-axis-1',
    },
    echangeur_a3_bp: {
      label: "echangeur_a3_bp",
      data: [],
      fill: false,
      backgroundColor: 'rgb(0, 99, 132)',
      borderColor: 'rgba(0, 99, 132, 1)',
      yAxisID: 'y-axis-1',
    },
    station_reference_paris_18eme: {
      label: "station_reference_paris_18eme",
      data: [],
      fill: false,
      backgroundColor: 'rgb(255, 0, 132)',
      borderColor: 'rgba(255, 0, 132, 1)',
      yAxisID: 'y-axis-1',
    },
    pere_lachaise: {
      label: "pere_lachaise",
      data: [],
      fill: false,
      backgroundColor: 'rgb(255, 99, 0)',
      borderColor: 'rgba(255, 99, 0, 1)',
      yAxisID: 'y-axis-1',
    },
  }

  data.forEach((day) => {
    labels.push(day.fields.date_time.slice(0, 10))
    datasets.parc_de_belleville.data.push(Math.floor(day.fields.parc_de_belleville))
    datasets.station_reference_bp_est.data.push(Math.floor(day.fields.station_reference_bp_est))
    datasets.rue_menilmontant.data.push(Math.floor(day.fields.rue_menilmontant))
    datasets.place_st_fargeau.data.push(Math.floor(day.fields.place_st_fargeau))
    datasets.rue_des_pyrenees.data.push(Math.floor(day.fields.rue_des_pyrenees))
    datasets.bd_menilmontant.data.push(Math.floor(day.fields.bd_menilmontant))
    datasets.echangeur_a3_bp.data.push(Math.floor(day.fields.echangeur_a3_bp))
    datasets.station_reference_paris_18eme.data.push(Math.floor(day.fields.station_reference_paris_18eme))
    datasets.pere_lachaise.data.push(Math.floor(day.fields.pere_lachaise))
  })
  return {labels: labels, datasets: (Object.values(datasets))}
}

module.exports = { sortDataByDateByPlace };
