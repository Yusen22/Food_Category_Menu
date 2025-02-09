import { useState, useEffect } from "react";

import menu from './data'

import Title from "./Title";
import Menu from "./Menu";
import CategoryButtons from "./CategoryButtons";
import Sort from "./Sort";

const App = () => {
  const [originalMenu, setOriginalMenu] = useState(menu)
  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState([])
  const [activeCat, setActiveCat] = useState('all')
  const [activeSort, setActiveSort] = useState([])
  const [descendingSort, setDescendingSort] = useState('asc')



  useEffect(() => {
    const getCategories = () => {
      const catSet = new Set(menuItems.map(item => item.category));
      const catSetArray = Array.from(catSet)
      catSetArray.unshift('all')
      console.log(catSetArray)
      setCategories(catSetArray)
    }
    getCategories()
    
  }, [])

const displayActive = (cat) => {
  setActiveSort([])
  setActiveCat(cat)
  console.log(cat)
  if (cat === 'all') {
    return setMenuItems(originalMenu)
  } else {
  const filteredMenu = originalMenu.filter(result => result.category === cat)
  console.log(filteredMenu)
  setMenuItems(filteredMenu)
  console.log(categories)
  }
}

const sortList = (term) => {
  const sortedMenu = [...menuItems].sort((a, b) => {
    if (term === 'price') {
      const comparison = a[term] - b[term]
      return descendingSort ? comparison : -comparison;
    } 
   const comparison = a[term].localeCompare(b[term])
   return descendingSort ? comparison : -comparison;
  }
)
  setMenuItems(sortedMenu)
  console.log(sortedMenu)
  
}
  return (
    <main>|
      <Title>Our menu</Title>
      <CategoryButtons activeCat = {activeCat} category={categories} displayActive={displayActive} />
      <Sort descendingSort={descendingSort} setDescendingSort={setDescendingSort} displayActive={displayActive} activeCat={activeCat}  sortList={sortList} setActiveSort={setActiveSort} activeSort={activeSort} originalMenu={originalMenu} menuItems = {menuItems} setMenuItems={setMenuItems}/>
      <Menu menuItems = {menuItems}/>


    </main>
  )
};
export default App;
