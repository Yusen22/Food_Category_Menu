const CategoryButtons = (props) => {
    const { category, activeCat, displayActive } = props

    console.log(category)
    return (
        <section >
            <div className="btn-container">
                {category.map((item, i) => {
                    console.log(item)
                    return (
                    <button onClick={() => displayActive(item)} className={activeCat === item ? 'btn btn-hipster active-cat' : 'btn btn-hipster'}>{item}</button>
                    )
                })}

            </div>
        </section>
    )
}
export default CategoryButtons