export function Card({ src, name, shuffleCards, check, id }) {
  return (
    <div className="card">
      <img
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
