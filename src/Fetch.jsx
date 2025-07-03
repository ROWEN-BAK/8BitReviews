import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);     // Om de opgehaalde data op te slaan
  const [loading, setLoading] = useState(true); // Om de laadstatus bij te houden
  const [error, setError] = useState(null);   // Om eventuele fouten op te slaan

  useEffect(() => {
    fetch('https://api.example.com/data') // Vervang met jouw API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse de JSON
      })
      .then(data => {
        setData(data); // Zet de data in state
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []); // Lege dependency array => alleen uitvoeren bij mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Data van de API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
