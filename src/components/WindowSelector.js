export default function WindowSelector({ windowDays, setWindowDays }) {
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
      <button
        onClick={() => setWindowDays(7)}
        style={{ fontWeight: windowDays === 7 ? "bold" : "normal" }}
      >
        Last 7 days
      </button>
      <button
        onClick={() => setWindowDays(30)}
        style={{ fontWeight: windowDays === 30 ? "bold" : "normal" }}
      >
        Last 30 days
      </button>
    </div>
  );
}
