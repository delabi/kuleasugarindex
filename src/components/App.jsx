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
      <table class="table-fixed border-separate border-spacing-2 border border-slate-500 ...">
        <thead>
          <tr>
            <th class="border border-slate-600 ...">Name</th>
            <th class="border border-slate-600 ...">Size</th>
            <th class="border border-slate-600 ...">Price</th>
            <th class="border border-slate-600 ...">Country</th>
            <th class="border border-slate-600 ...">Date</th>
          </tr>
        </thead>

        <tbody>
          {sugars.map((sugar) => (
            <tr key={sugar.id} class="border border-slate-700 ...">
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
