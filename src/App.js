import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Main from "./pages/Main";
import { Routes, Route } from "react-router";
import { useState } from "react";

function App() {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [coinData, setCoinData] = useState([1, 2, 3, 4]);
  const [page, setPage] = useState(1);
  return (
    <div className="min-h-screen bg-[#393E46] pt-3 flex flex-col">
      <Header />
      <Routes>
        <Route path="/" element={<Home setPage={setPage} page={page}/>}>
          <Route
            path=""
            element={
              <Main page={page} setPage={setPage} setCoinData={setCoinData} coinData={coinData} />
            }
          />
          <Route
            path={`:id`}
            element={
              <Main page={page} setPage={setPage} setCoinData={setCoinData} coinData={coinData} />
            }
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
