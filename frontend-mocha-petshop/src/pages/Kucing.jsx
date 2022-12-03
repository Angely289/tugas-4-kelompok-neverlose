import React, { useState, useEffect } from "react";
import axios from "axios";
import CardPet from "../components/CardPet";

const Kucing = () => {
  const [kucing, setKucing] = useState([]);

  const getKucing = async () => {
    const response = await axios.get("http://localhost:8080/kucing");
    setKucing(response.data);
  };

  useEffect(() => {
    getKucing();
  }, []);

  return kucing.map((item) => (
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

export default Kucing;