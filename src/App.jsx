import { useState } from "react";

import menu from './data'

import Title from "./Title";
import Menu from "./Menu";
import MenuItem from "./MenuItem";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu)
  return (
    <main>|
      <Title>Our menu</Title>

      
    </main>
  )
};
export default App;
