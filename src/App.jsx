import { useState, useEffect } from "react";

import menu from './data'

import Title from "./Title";
import Menu from "./Menu";
import CategoryButtons from "./CategoryButtons";

const App = () => {
  const [originalMenu, setOriginalMenu] = useState(menu)
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState([])
  const [activeCat, setActiveCat] = useState('')



  useEffect(() => {
    const getCategories = () => {
      const catSet = new Set(menuItems.map(item => item.category));
      const catSetArray = Array.from(catSet)
      catSetArray.unshift('all')
      console.log(catSetArray)
      setCategories(catSetArray)
    }
    getCategories()
    
  }, [originalMenu])

const displayActive = (cat) => {
  setActiveCat(cat)
  console.log(cat)
  if (cat === 'all') {
    return setMenuItems(originalMenu)
  } else {
  const filteredMenu = originalMenu.filter(result => result.category === cat)
  console.log(filteredMenu)
  setMenuItems(filteredMenu)
  }

}

  return (
    <main>|
      <Title>Our menu</Title>
      <CategoryButtons category = {categories} displayActive={displayActive} />
      <Menu menuItems = {menuItems}/>


    </main>
  )
};
export default App;
