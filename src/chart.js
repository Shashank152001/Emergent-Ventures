import { useRef, useEffect, useState } from "react";
import OrgChart from "@balkangraph/orgchart.js";

const url = 'https://nerve-calculation-mario-excluded.trycloudflare.com/user/get-user-hierarchy';


const Chart = () => {

  const currentRef = useRef();

  const[data,setData] = useState(null);


  useEffect(()=>{

    fetch(url,{
      method:'GET',
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    }).then((res)=>res.json()).then((data)=>{
      // console.log(data);
      setData(data);
    }).catch((err)=>{
      console.log(err);
    })

  },[])

  useEffect(() => {

    OrgChart.templates.ana.plus = "";
    OrgChart.templates.ana.minus = "";


    if(data){

   const chart =  new OrgChart(currentRef.current, {
     
      nodes: data,
      enableSearch: false,
      mouseScrool: OrgChart.action.none,
      nodeMouseClick: OrgChart.action.none,
      toolbar: {
        zoom: true,
        fit: true,
      },

      tags: {
        "node-with-subtrees": {
          template: "group",
          subTreeConfig: {
            siblingSeparation: 10,
            columns: 3,
          },
        },
      },

      nodeBinding: {
        field_0: "name",
        field_1: "role",
        img_0: "profileImage",
      },
    });

   
  }

  }, [data]);

  return (
    <div
      id="tree"
      ref={currentRef}
      style={{ height: "100vh"}}
    ></div>
  );
};

export default Chart;
