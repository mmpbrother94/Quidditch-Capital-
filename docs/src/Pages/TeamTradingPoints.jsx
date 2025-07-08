import React from "react";

function TeamTradingPoints() {
  const teams = [
    { name: "Gryffindor Bulls", points: "+5.2%", description: "Gryffindor's trading strategy led to significant gains in magical stock investments." },
    { name: "Slytherin Vipers", points: "-2.4%", description: "Slytherin faced losses due to high-risk investments in volatile markets." },
    { name: "Ravenclaw Owls", points: "+3.8%", description: "Smart market analysis helped Ravenclaw maintain steady profits." },
    { name: "Hufflepuff Badgers", points: "+1.5%", description: "Hufflepuff’s cautious investments ensured slow but consistent growth." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-400 text-center mb-10">
        Team Trading Points
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {teams.map((team, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-yellow-300">{team.name}</h2>
            <p className="mt-2 text-xl text-green-400">Trading Points: {team.points}</p>
            <p className="mt-4 text-gray-300">{team.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamTradingPoints;
