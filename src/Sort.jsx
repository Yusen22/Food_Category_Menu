import menu from "./data"

const Sort = ({menuItems, sortList}) => {
    console.log(menuItems)
    const menuKeys = Object.keys(menuItems[0])
    console.log(menuKeys)
  return (
    <div className="sort-container">
        <p>Sort by:</p>
        <p onClick={() => sortList(menuKeys[1])} className="sort-item">{menuKeys[1]}</p>
        <p onClick={() => sortList(menuKeys[2])} className="sort-item">{menuKeys[2]}</p>
        <p onClick={() => sortList(menuKeys[3])} className="sort-item">{menuKeys[3]}</p>
    </div>
  )
}
export default Sort