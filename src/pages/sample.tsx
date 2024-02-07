"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  const [data, setData] = useState<[] | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setData(response.data.products);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("--------------", data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>This is inside Pages</h1>
      <p>This is ScienceBeeee</p>
      {data && (
        <div>
          <h2>Data from API:</h2>
          <table>
            <thead>
              <tr>
                <th>Brand</th>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item: any) => (
                <tr key={item.id}>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                  <td>{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default About;
