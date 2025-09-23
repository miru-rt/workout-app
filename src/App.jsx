import exercises from './data/exercises.json';

function App() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Workout Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {exercises.map((ex) => (
          <div key={ex.id} className="border p-4 rounded shadow-md bg-white">
            <img src={ex.svgPath} alt={ex.name} className="w-20 h-20 mx-auto mb-2" />
            <h2 className="font-bold">{ex.name}</h2>
            <p className="text-sm text-gray-600">{ex.muscleGroups.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;