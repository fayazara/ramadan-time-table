import React, { useState, useEffect } from "react";

const Timebar = () => {
  const [hasError, setErrors] = useState(false);
  const [timebar, setTimer] = useState({});

  async function fetchData() {
    const res = await fetch("https://raw.githubusercontent.com/fayazara/ramadan-time-table/master/src/api/current-day-data.json");
    res
      .json()
      .then(res => setTimer(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  });

  
  return(
    <div>
    <span>{ JSON.stringify(timebar.time_table) }</span>
        
     
        </div> 
  ) 
  /* return (
    <div>
      <span>{ JSON.stringify(timebar.time_table)
      
        
      }</span>
      <hr />
      
        <span> { 
        timebar.time_table.map((times) => {
            return( console.log(times) )
        })
        
    } </span>
      
    <hr />
      <span>Has error: {JSON.stringify(hasError)}</span>
    </div>
  ); */
  
};
export default Timebar;