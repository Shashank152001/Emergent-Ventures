import { useRef, useEffect } from "react";
import OrgChart from "@balkangraph/orgchart.js";

const Chart = (props) => {
  const currentRef = useRef();

  useEffect(() => {

    OrgChart.templates.ana.plus = "";
    OrgChart.templates.ana.minus = "";

    new OrgChart(currentRef.current, {
      nodes: props.nodes,
      enableSearch: false,
      mouseScrool: OrgChart.action.none,
      nodeMouseClick: OrgChart.action.none,

      tags: {
        "node-with-subtrees": {
            template: "group",
            subTreeConfig: {
                siblingSeparation: 10,
                columns: 3
            }
        }
    },
    
      nodeBinding: {
        field_0: "name",
        img_0: "img",
      },
    });
  }, []);

  return (
    <div
      id="tree"
      ref={currentRef}
      style={{ height: "100vh", backgroundColor: "#ff6e6e" }}
    ></div>
  );
};

export default Chart;
