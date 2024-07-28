const Title = ({children}) => {
    return (
        <header>
            <h1 className="title">{children}</h1>
            <div className="title-underline"></div>
        </header>
    )
}
export default Title

