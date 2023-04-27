import { useRef, useEffect,useState } from "react";
import OrgChart from "@balkangraph/orgchart.js";
import {getRequest} from '../../Service/ProfileService'
const Chart = (props) => {
  const currentRef = useRef();
  
  const[hire,setHire]=useState(null)

  useEffect(()=>{
      getRequest().then((data)=>{
        console.log(data);
        setHire(data)
      })
  },[])
  useEffect(() => {
    OrgChart.templates.ana.plus = "";
    OrgChart.templates.ana.minus = "";

    if(hire){

    new OrgChart(currentRef.current, {
      nodes: hire,
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
        img_0:"profileImage"
      },
    });
  }
  }, [hire]);

  return (
    <div
      id="tree"
      ref={currentRef}
      style={{ height: "100%" }}
    ></div>
  );
};

export default Chart;
