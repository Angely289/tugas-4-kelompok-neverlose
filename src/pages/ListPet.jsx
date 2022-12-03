import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPet from "../components/CardPet";

const ListPet = () => {
  const [pet, setPet] = useState([]);

  const getPet = async () => {
    const response = await axios.get("http://localhost:8080/pet");
    setPet(response.data);
  };

  useEffect(() => {
    getPet();
  }, []);
  return pet.map((item) => (
    <CardPet
    key={item.id}
    img={item.url}
    name={item.name}
    rating={item.rating}
    sold={item.sold}
    des={item.des}
    price={item.price}
    id={item.id}
    />
  ));
};

export default ListPet;