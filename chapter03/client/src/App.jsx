import { useEffect, useState } from "react";

export default function App() {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/health")
      .then((r) => r.json())
      .then(setStatus)
      .catch(() => setStatus({ ok: false }));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui", padding: 24 }}>
      <h1>MERN Skeleton</h1>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}
