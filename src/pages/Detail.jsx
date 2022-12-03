import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CardPet from "../components/CardPet";

const Detail = () => {
  const { id } = useParams();
  const [pet, setPet] = useState("");

  const getPet = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/pet/${id}`);
      setPet(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  return (
    <CardPet
      img={pet.url}
      name={pet.name}
      rating={pet.rating}
      sold={pet.sold}
      des={pet.des}
      price={pet.price}
      id={pet.id}
    />
  );
};

export default Detail;