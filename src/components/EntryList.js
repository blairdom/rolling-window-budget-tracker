export default function EntryList({ entries }) {
  return (
    <div>
      <strong>EntryList</strong>
      <ul>
        {entries.map((e) => (
          <li key={e.id}>
            {e.type}: ${e.amount} — {new Date(e.timestamp).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}
