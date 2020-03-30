import React from 'react';


function Timebar(props) {
        var cityId = "1";
        var url =
          'https://raw.githubusercontent.com/fayazara/ramadan-time-table/master/src/api/current-day-data.json';
        fetch(url)
         .then(res => res.json())
         .then(data => {
             let countryData  = data.time_table.india.map((city) => {
                
                 if(city.id === cityId) {
                    console.log(city.times.day);
                    city.times.map((times) => {
                        console.log(times.day);
                        let ramadhanDay = times.day;
                        let iftaarDay = times.iftaar;
                        let sehriDay = times.sehri;

                        
                    } );

                 }
             })
         });
     
    return (
        <div className='text-center fancy-font'>
          <div className="slider">
  <div className="slide" id="slide-1">1</div>
  <div className="slide" id="slide-2">1</div>
  <div className="slide" id="slide-3"></div>
  <div className="slide" id="slide-4"></div>
  <div className="slide" id="slide-5"></div>
</div>
        </div>
    )
}

export default Timebar;
{
    this.state.timing.map((times) => {
                    console.log(times.day);
                    let ramadhanDay = times.day;
                    let iftaarDay = times.iftaar;
                    let sehriDay = times.sehri;
                    <div className="container">
                        <p>{ramadhanDay}</p>
                    </div>
                    
    })
} 