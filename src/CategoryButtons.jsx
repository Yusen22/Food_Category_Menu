const CategoryButtons = (props) => {
    const { category, displayActive } = props

    console.log(category)
    return (
        <section >
            <div className="btn-container">
                {category.map((item, i) => {
                    console.log(item)
                    return (
                    <button onClick={() => displayActive(item)} className="btn btn-hipster">{item}</button>
                    )
                })}

            </div>
        </section>
    )
}
export default CategoryButtons