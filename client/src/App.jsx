import React, { useState } from 'react';
import MyForm from './Form';
import MyData from './Data';

function App() {
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [refreshFlag, setRefreshFlag] = useState(0);

  const handleEditPlayer = async (playerId) => {
    if (!playerId) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/player/${playerId}`);
      if (!response.ok) {
        console.error('Failed to load player for edit:', response.status, response.statusText);
        return;
      }

      const data = await response.json();
      setSelectedPlayer({ ...data, id: playerId });
    } catch (error) {
      console.error('Error loading player for edit:', error);
    }
  };

  const handleFormSaved = () => {
    setSelectedPlayer(null);
    setRefreshFlag((flag) => flag + 1);
  };

  return (
    <>
      <section id="form">
        <div>
          <h3>Player Input Form</h3>
          <MyForm initialData={selectedPlayer} onSaved={handleFormSaved} />
        </div>
      </section>
      <section id="data">
        <div>
          <h3>Player Data</h3>
          <MyData onEdit={handleEditPlayer} refreshFlag={refreshFlag} />
        </div>
      </section>
    </>
  );
}

export default App;
