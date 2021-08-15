import "./App.css";
import { Button } from "reactstrap";
import { GraphicComponent } from "./GraphicComponent";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchAndDisplayWholeDataSet = async () => {
      const rawResponse = await fetch("/all");
      const response = await rawResponse.json();
      console.log("rawResponse", rawResponse); //DEBUG
      setData(response);
      setType("Line");
    };
    fetchAndDisplayWholeDataSet();
  }, []);

  console.log(data);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="App" style={{ paddingBottom: 20, paddingTop: 20 }}>
        {/* <Button color="warning" onClick={fetchAndDisplayWholeDataSet}>
          Télécharger les données
        </Button> */}
        {/* <Button color="warning" onClick={() => fetchAndDisplayWholeDataSet()}>
          Télécharger les données
        </Button>
        <Button color="warning" onClick={() => fetchAndDisplayWholeDataSet()}>
          Télécharger les données
        </Button>
        <Button color="warning" onClick={() => fetchAndDisplayWholeDataSet()}>
          Télécharger les données
        </Button> */}
      </div>
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
    </div>
  );
}

export default App;
