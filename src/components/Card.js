export function Card({ src, name }) {
  return (
    <div>
      <img src={src} alt=""></img>
      <p>{name}</p>
    </div>
  );
}
