import React from "react";
import { Outlet } from "react-router-dom";
import Pagination from "./../components/Paginatio";

const Home = ({setPage,page}) => {

  return (
    <div>
      <Outlet />
      <Pagination setPage={setPage} page={page} />
    </div>
  );
};

export default Home;
