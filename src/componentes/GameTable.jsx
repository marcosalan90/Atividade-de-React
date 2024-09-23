import React from 'react';

const GameTable = () => {
  const games = [
    {
      name: 'Fortnite',
      platform: 'Nintendo Switch',
      year: 2017,
    },
    {
      name: 'Call of Duty: Black Ops 2',
      platform: 'PlayStation 3',
      year: 2012,
    },
    {
      name: 'Gran Turismo 7',
      platform: 'PlayStation 4',
      year: 2022,
    },
    {
      name: 'NBA 2k25',
      platform: 'PlayStation 5',
      year: 2023,
    },
  ];

  return (
    <table border>
      <thead>
        <tr>
          <th>Nome do Jogo</th>
          <th>Plataforma</th>
          <th>Ano de Lançamento</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game, index) => (
          <tr key={index}>
            <td>{game.name}</td>
            <td>{game.platform}</td>
            <td>{game.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GameTable;
