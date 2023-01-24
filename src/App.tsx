import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css";
require("dotenv").config();

const client = axios.create({
  baseURL: "https://sugar-scraper.onrender.com",
});

const App = () => {
  const [sugars, setSugars] = useState([] as any[]);

  useEffect(() => {
    const fetchSugars = async () => {
      let response = await client.get("/sugars");
      setSugars(
        response.data.sort((a: { id: number }, b: { id: number }) =>
          a.id < b.id ? 1 : -1
        )
      );
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
      
      <table className="table-fixed border-separate border-spacing-2 border border-slate-500 ...">
        <thead>
          <tr className="divide-y divide-gray-200">
            <th className="border border-slate-600 ...">Name</th>
            <th className="border border-slate-600 ...">Size</th>
            <th className="border border-slate-600 ...">Price</th>
            <th className="border border-slate-600 ...">Country</th>
            <th className="border border-slate-600 ...">Date</th>
          </tr>
        </thead>

        <tbody>
          {sugars.map((sugar) => (
            <tr key={sugar.id} className="border border-slate-700 ...">
              <td className="border border-slate-700 ...">{sugar.name}</td>
              <td className="border border-slate-700 ...">{sugar.size}</td>
              <td className="text-right border border-slate-700 ...">
                {sugar.price}
              </td>
              <td className="border border-slate-700 ...">{sugar.country}</td>
              <td className="border border-slate-700 ...">{sugar.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
