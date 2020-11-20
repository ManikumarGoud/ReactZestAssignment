import React, {useState, useEffect} from "react";
import TableData from "./TableData";
import axios from 'axios';

const TableContainer = () => {
  const [infoData, setInfoData] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try{
        const result = await axios(`http://devserver.blkbox.ai/api/box/analysisPerformanceImpact?auth_test=true`);
        setInfoData(result.data);
      } 
      catch (error) {
        console.log(error);
      }
      
      setIsLoading(false)
    })();
  }, [])
  return (
    <div>
      {isLoading ? 
      (
        <div><h3 data-text = "It's loading…"> It's loading…</h3></div>
      )
      :(
      <div>
      {Object.keys(infoData).length !== 0 ? (
            infoData.data.map((dataItem, index) => (
              <TableData
                key={index}
                feature={dataItem.feature}
                description={dataItem.description}
                data={dataItem.data}
              />
            ))
          ):null
        }
      </div>
      )
}
  </div>
  )

}
export default TableContainer;