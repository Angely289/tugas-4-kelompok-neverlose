import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPet from "../components/CardPet";

const Anjing = () => {
  const [anjing, setAnjing] = useState([]);

  const getAnjing = async () => {
    const response = await axios.get("http://localhost:8080/anjing");
    setAnjing(response.data);
  };

  useEffect(() => {
    getAnjing();
  }, []);

  return anjing.map((item) => (
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

export default Anjing;