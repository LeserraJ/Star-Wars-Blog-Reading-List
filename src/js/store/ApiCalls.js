import React, { useEffect, useState } from "react";
/*import axios from "axios";

export default function ApiCall() {
  const [people, setPeople] = useState([]);
  const [planet, setPlanet] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  const getPeople= async () => {
    const { people } = await axios.get(`https://www.swapi.tech/api/people/1`);
    setPeople(people);
  };

  useEffect(() => {
    getPeople();
    
    console.log(people)
  }, []);

  const getPlanet= async () => {
    const { planet } = await axios.get(`https://www.swapi.tech/api/planets/1`);
    setPlanet(planet);
  };

  useEffect(()=> {
    getPlanet();
  }, []);

const getVehicle = async () => {
    const{vehicle} = await axios.get('https://www.swapi.tech/api/starships/2');
    setVehicle(vehicle);
};

useEffect(()=>{
    getVehicle();
}, []);

  return <div></div>;
}*/


export default ApiCall = () => {

useEffect(() => {
    /**
     * EDIT THIS!
     * This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
     * you should do your ajax requests or fetch api requests here. Do not use setState() to save data in the
     * store, instead use actions, like this:
     *
     * state.actions.loadSomeData(); <---- calling this function from the flux.js actions
     *
     **/
    fetch("https://www.swapi.tech/api/people/")
      .then(response => response.json())
      .then((actualPeople) => {
        console.log(actualPeople);
        setPeople(actualPeople.message);
        console.log(people);
      })
      .catch((err) => {
        console.log(err.message);
      });
  
}, []);


return (

<div className="card" style="width: 18rem;">
  	<img className="card-img-top" src="..." alt="Card image cap"/>
  	<div className="card-body">
   		<h5 className="card-title">Card title</h5>
    	<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    	<a href="#" className="btn btn-primary">Go somewhere</a>
  	</div>
</div>);
};