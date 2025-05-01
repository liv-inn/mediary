export function Card({ title, icon }) {
    return (
      <div className="card">
        <h3>{title}</h3>
        <div className="icon-container">
          {icon}
        </div>
      </div>
    );
  }