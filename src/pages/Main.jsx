import React, { useEffect } from "react";
import axios from "axios";
import Card from "./../components/Card";
import { useParams } from "react-router-dom";

const Main = ({ page,setPage, setCoinData, coinData }) => {

  const {id} = useParams()
  setPage(id)
  const getData = async () => {
    try {
      const res = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`
      );
      setCoinData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="flex flex-col gap-3 mt-10 mb-5 mx-5">
      {coinData.map((c) => (
        <Card key={c.id} {...c}/>
      ))}
    </div>
  );
};

export default Main;
