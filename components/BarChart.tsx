export default function BarChart() {
  const bars = [60, 100, 75, 120, 55, 95];
  return (
    <div className="grid grid-cols-6 items-end gap-6">
      {bars.map((h, i) => (
        <div key={i} className="mx-auto h-40 w-10 rounded-xl bg-accent" style={{ height: h }} aria-hidden="true" />
      ))}
    </div>
  );
}
