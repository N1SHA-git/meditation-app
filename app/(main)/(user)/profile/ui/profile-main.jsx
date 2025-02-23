export function ProfileMain({ tabs, chart }) {
  return (
    <div className="flex flex-col items-center gap-10">
      {tabs}
      {chart}
    </div>
  );
}
