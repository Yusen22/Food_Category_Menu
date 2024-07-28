const MenuItem = (item) => {
  const { img, title, category, price, desc, id, key } = item
  return (
    <article key={key} className="menu-item">
      <img className="img" src={img} />
      <div className="item-info">
        <header className="">
          <h5>{title}</h5>
          <p className="item-price">{price}</p>
        </header>
        <p className="item-text">{desc}</p>
      </div>

    </article>
  )
}
export default MenuItem