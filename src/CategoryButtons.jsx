const CategoryButtons = (props) => {
    const { category } = props
    return (
        <section >
            <div className="btn-container">
                {category.map((item, i) => {
                    console.log(item)
                    return (
                    <button className="btn btn-hipster">{item}</button>
                    )
                })}

            </div>
        </section>
    )
}
export default CategoryButtons