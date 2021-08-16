const sortDataByDateByPlace = (data, chosenDataSets) => {
  const labels = []
  // console.log("chosenDataSets", chosenDataSets)
  const datasets = chosenDataSets.map(place => {
    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255
    return {
      label: place,
      data: [],
      fill: false,
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      borderColor: `rgba(${r}, ${g}, ${b}, 1)`,
      yAxisID: 'y-axis-1',
    }
  })
  // console.log("datasets voulus", datasets)

  data.forEach((day) => {
    labels.push(day.fields.date_time.slice(0, 10))
    datasets.forEach(place => {
      place.data.push(Math.floor(day.fields[place.label]))
    })
 })
  return {labels: labels, datasets: (Object.values(datasets))}
}

module.exports = { sortDataByDateByPlace };
