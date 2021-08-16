import "./App.css";
import { Button } from "reactstrap";
import { GraphicComponent } from "./GraphicComponent";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [type, setType] = useState("");
  const [dataSet, setDataSet] = useState(
    ["station_reference_paris_18eme", "station_reference_bp_est"]
  );

  useEffect(() => {
    const fetchAndDisplayReferenceDataSet = async () => {
      const dataSetsString = dataSet.join(",")
      const rawResponse = await fetch(`/all?datasets=${dataSetsString}`);
      const response = await rawResponse.json();
      // console.log("rawResponse", rawResponse); //DEBUG
      setData(response);
      setType("Line");
    };
    fetchAndDisplayReferenceDataSet();
  }, [dataSet, setData, setType]);

  // console.log(data);

  const addOrRemovePlaceFromDataset = (place) => {
    if (!dataSet.includes(place)) {
      setDataSet([...dataSet, place])
    } else {
      const newDataset = [...dataSet]
      const placeIndex = newDataset.indexOf(place)
      newDataset.splice(placeIndex, 1)
      setDataSet(newDataset)
    }
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          height: 700,
          width: "90%",
          border: "2px solid black",
          borderRadius: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data ? (
          <GraphicComponent data={data} type={type} style={{ flex: 1 }} />
        ) : (
          <p>Loading</p>
        )}
      </div>
      <div className="App" style={{ paddingBottom: 20, paddingTop: 20}}>
        <Button
          color="warning"
          style={{ marginLeft: 5, marginRight: 5}}
          // onClick={() => setDataSet([...dataSet, "parc_de_belleville"])}
          onClick={() => addOrRemovePlaceFromDataset("parc_de_belleville")}
        >
          Parc de Belleville
        </Button>
        <Button
          color="warning"
          style={{ marginLeft: 5, marginRight: 5}}
          // onClick={() => setDataSet([...dataSet, "rue_menilmontant"])}
          onClick={() => addOrRemovePlaceFromDataset("rue_menilmontant")}
        >
          Rue de Ménilmontant
        </Button>
        <Button
          color="warning"
          style={{ marginLeft: 5, marginRight: 5}}
          // onClick={() => setDataSet([...dataSet, "place_st_fargeau"])}
          onClick={() => addOrRemovePlaceFromDataset("place_st_fargeau")}
          
        >
          Place Saint Fargeau
        </Button>
        <Button
          color="warning"
          style={{ marginLeft: 5, marginRight: 5}}
          // onClick={() => setDataSet([...dataSet, "rue_des_pyrenees"])}
          onClick={() => addOrRemovePlaceFromDataset("rue_des_pyrenees")}
        >
          Rue des Pyrénées
        </Button>
        <Button
          color="warning"
          style={{ marginLeft: 5, marginRight: 5}}
          // onClick={() => setDataSet([...dataSet, "bd_menilmontant"])}
          onClick={() => addOrRemovePlaceFromDataset("bd_menilmontant")}
        >
          Bd Ménilmontant
        </Button>
        <Button
          color="warning"
          style={{ marginLeft: 5, marginRight: 5}}
          // onClick={() => setDataSet([...dataSet, "echangeur_a3_bp"])}
          onClick={() => addOrRemovePlaceFromDataset("echangeur_a3_bp")}
        >
          Echangeur A3 BP
        </Button>
        <Button
          color="warning"
          style={{ marginLeft: 5, marginRight: 5}}
          // onClick={() => setDataSet([...dataSet, "pere_lachaise"])}
          onClick={() => addOrRemovePlaceFromDataset("pere_lachaise")}
        >
          Père Lachaise
        </Button>
      </div>
    </div>
  );
}

export default App;
