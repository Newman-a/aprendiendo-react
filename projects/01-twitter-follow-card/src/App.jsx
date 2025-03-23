import React, { useState } from 'react';
import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx';

export function App() {
  const [users, setUsers] = useState([
    { userName: 'midudev', name: 'Miguel Angel Duran' },
    { userName: 'PedroGuanipa', name: 'Pedro Guanipa' },
    { userName: 'Angel', name: 'Angel Acosta' },
    { userName: 'Gabriel', name: 'Gabriel Acosta' }
  ]);

  const [newUserName, setNewUserName] = useState('');
  const [newName, setNewName] = useState('');

  const handleAddUser = () => {
    if (newUserName && newName) {
      setUsers([...users, { userName: newUserName, name: newName }]);
      setNewUserName('');
      setNewName('');
    }
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nombre"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={handleAddUser}>Agregar Usuario</button>
      </div>

      {users.map((user, index) => (
        <TwitterFollowCard key={index} userName={user.userName} name={user.name} />
      ))}
    </div>
  );
}