import React, { useEffect, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";



export const Home = () => {
	const [people, setPeople] = useState([]);
	useEffect(() => {
    
		fetch("https://www.swapi.tech/api/people/")
		  .then(response => response.json())
		  .then((actualPeople) => {
			console.log(actualPeople);
			setPeople(actualPeople.results);
			console.log(people);
		  })
		  .catch((err) => {
			console.log(err.message);
		  });
	  
	}, []);


	return (
		<div className="card">
			{people.map((person, index) => (
				<div key={index}>
					<img className="card-img-top" src="..." alt="Card image cap" />
					<div className="card-body">
						<h5 className="card-title">{person.name}</h5>
							<p className="card-text">
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</p>
							<a href="#" className="btn btn-primary">{person.url}</a>
						</div>
				</div>
			))}
		</div>
	);
};
