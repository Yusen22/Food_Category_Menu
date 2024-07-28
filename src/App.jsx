import { useState, useEffect } from "react";

import menu from './data'

import Title from "./Title";
import Menu from "./Menu";
import CategoryButtons from "./CategoryButtons";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getCategories = () => {
      const catSet = new Set(menuItems.map(item => item.category));
      const catSetArray = Array.from(catSet)
      catSetArray.unshift('all')
      setCategories(catSetArray)
    }
    getCategories()
  }, [menuItems])
  

  
  return (
    <main>|
      <Title>Our menu</Title>
      <CategoryButtons category = {categories} />
      <Menu menuItems = {menuItems}/>


    </main>
  )
};
export default App;
