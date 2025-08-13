type Props = { label: string; value: string };
export default function KPICard({ label, value }: Props) {
  return (
    <div className="rounded-xl border border-border bg-[#1a1a1a] px-6 py-4 text-center">
      <div className="text-sm text-white/70">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  );
}
