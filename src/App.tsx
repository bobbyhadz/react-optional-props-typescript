interface EmployeeProps {
  name?: string; // 👈️ marked optional
  age?: number; // 👈️ marked optional
  country: string; // 👈️ required (no question mark)
}

function Employee({
  name = 'Alice',
  age = 30,
  country,
}: EmployeeProps) {
  return (
    <div>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{country}</h2>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Employee name="Bob" age={29} country="Belgium" />

      <hr />

      <Employee country="Austria" />
    </div>
  );
}
