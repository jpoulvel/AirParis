import { Line } from "react-chartjs-2";

export const GraphicComponent = ({data, type}) => {
  console.log("data", data)

  return (
      <div style={{height: "100%", width: "100%"}}>
        <Line
          data={data}
          options={{
            title:{
              display:true,
              text:'Evolution de la pollution sur neuf bornes de mesure à Paris XX',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
};
