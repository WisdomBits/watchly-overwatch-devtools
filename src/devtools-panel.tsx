import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const Panel = () => {
  const [logs, setLogs] = useState<any[]>([]);

  useEffect(() => {
    window.addEventListener("message", (event) => {
      if (event.data?.type === "OVERWATCH_DEVTOOLS") {
        setLogs((prev) => [...prev, event.data.payload]);
      }
    });
  }, []);

  return (
    <div style={{ fontFamily: 'monospace', padding: 12 }}>
      <h2>Watchly - Overwatch DevTools</h2>
      {logs.map((log, i) => (
        <pre key={i}>{JSON.stringify(log, null, 2)}</pre>
      ))}
    </div>
  );
};

const root = document.getElementById("root")!;
createRoot(root).render(<Panel />);
