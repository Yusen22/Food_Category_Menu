import MenuItem from "./MenuItem"

const Menu = ({menuItems}) => {
  console.log(menuItems)
  return (
    <section className="menu section-center">
    {menuItems.map((item, i) => {
      console.log(item)
      return (
        <MenuItem key={item.id} {...item}/>
      )
    })}
    
    </section>
  )
}
export default Menu