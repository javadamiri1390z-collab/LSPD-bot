export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
  type
}) {
  return (
    <div className="stat-card">

      <div className={`stat-icon ${type}`}>
        <Icon size={22} />
      </div>

      <div className="stat-info">
        <span>{title}</span>

        <strong>{value}</strong>

        <small>{subtitle}</small>
      </div>

    </div>
  );
}
