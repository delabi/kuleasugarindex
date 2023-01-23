import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
import "../index.css";

const client = axios.create({
  baseURL: "https://sugar-scraper.onrender.com",
});

const App = () => {
  const [sugars, setSugars] = useState([]);

  useEffect(() => {
    const fetchSugars = async () => {
      let response = await client.get("/sugars");
      setSugars(response.data.reverse());
    };
    fetchSugars().catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="app">
      <div>
        <h1 className="text-3xl font-bold underline">Latest Sugar Prices</h1>
      </div>
      <table class="table-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Size</th>
            <th>Price</th>
            <th>Country</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {sugars.map((sugar) => (
            <tr key={sugar.id}>
              <td>{sugar.name}</td>
              <td>{sugar.size}</td>
              <td className="text-right">{sugar.price}</td>
              <td>{sugar.country}</td>
              <td>{sugar.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
