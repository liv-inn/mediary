export function Card({ title, icon, imgUrl }) {
    return (
      <div className="card">
        <img src={imgUrl} alt={`Capa de ${title}`} />
        <h3>{title}</h3>
        <div className="icon-container">
          {icon}
        </div>
      </div>
    );
  }