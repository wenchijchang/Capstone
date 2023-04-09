import React from "react";
// import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import DisplayShortages from "../../components/DisplayShortages/DisplayShortages.jsx";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  // const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       });
  //       setCars(response.data);
  //       console.log(user);
  //     } catch (error) {
  //       console.log(error.response.data);
  //     }
  //   };
  //   fetchCars();
  // }, [token]);
  return (
    <div>
      <div className="container">
        <h2>
          Home Page for {user.first_name} {user.last_name}
        </h2>
      </div>

      {/* <div className="container">
      <h1>
        Home Page for {user.first_name} {user.last_name}!
      </h1> */}
      {/* {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))} */}
      <DisplayShortages token={token} />
    </div>
  );
};

export default HomePage;
