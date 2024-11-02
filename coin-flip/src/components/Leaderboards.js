// src/components/Leaderboards.js

import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Leaderboards = () => {
  const { user } = useContext(AuthContext);
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('/api/leaderboards')
      .then((response) => response.json())
      .then((data) => setLeaders(data));
  }, []);

  return (
    <div>
      <h2>Leaderboards:</h2>
      <ul>
        {leaders.map((leader) => (
          <li key={leader.username}>
            {leader.username}: {leader.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboards;