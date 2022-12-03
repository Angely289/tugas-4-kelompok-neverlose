import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPet from "../components/CardPet";

const HewanMungil = () => {
  const [HewanMungil, sethewanMungil] = useState([]);

  const gethewanMungil = async () => {
    const response = await axios.get("http://localhost:8080/hewan_mungil");
    sethewanMungil(response.data);
  };

  useEffect(() => {
    gethewanMungil();
  }, []);

  return HewanMungil.map((item) => (
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

export default HewanMungil;