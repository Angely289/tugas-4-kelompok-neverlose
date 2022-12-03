import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPet from "../components/CardPet";

const Burung = () => {
  const [burung, setBurung] = useState([]);

  const getBurung = async () => {
    const response = await axios.get("http://localhost:8080/burung");
    setBurung(response.data);
  };

  useEffect(() => {
    getBurung();
  }, []);

  return burung.map((item) => (
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

export default Burung;