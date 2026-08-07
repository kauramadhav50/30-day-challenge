export function TaskCard({ name, Taskno }) {
  return (
    <div className="h-full flex flex-col justify-between border bg-gray-700 text-white rounded-lg shadow-md p-6">
      <h1 className="text-4xl font-semibold">{name}</h1>
      <p className="text-2xl font-semibold mt-4">{Taskno}</p>
    </div>
  );
}
