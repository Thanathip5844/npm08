
export function Card({ image , caption, description }) {
  return (
    <div>
      <img src={image} alt={caption}/>
      <p>{caption}</p>
      <p>{description}</p>
    </div>
  )
}
