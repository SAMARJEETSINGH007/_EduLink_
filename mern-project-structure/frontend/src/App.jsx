import React, { useState } from 'react';

function App() {
  const [topic, setTopic] = useState('');
  const [joke, setJoke] = useState('');

  const getJoke = async () => {
    const res = await fetch(`http://localhost:3001/joke/${topic}`);
    const data = await res.json();
    setJoke(data.joke);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>😂 Joke Recommender</h2>
      <input
        type="text"
        placeholder="Enter a topic (e.g. school)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button onClick={getJoke}>Get Joke</button>
      <p><strong>Joke:</strong> {joke}</p>
    </div>
  );
}

export default App;