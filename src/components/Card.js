export function Card({ src, name, shuffleCards, check, id }) {
  return (
    <div className="card">
      <img
        className="img"
        src={src}
        alt=""
        onClick={() => {
          shuffleCards();
          check(id);
        }}
      ></img>
      <p>{name}</p>
    </div>
  );
}
