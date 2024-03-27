import './card.scss'
function Card({id, title, price, image}) {
  return (
    <div key={id} className="item">
    <img className='item-img' src={image} alt={title} />
    <div className='item-info'>
      <h4>{title}</h4>
      <p className='item-info-price'>{price} ₼</p>
    </div>
  </div>
  )
}

export default Card;