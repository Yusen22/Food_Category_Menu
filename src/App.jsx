import { useState } from "react";

import data from './data'

import Title from "./Title";

const App = () => {
  const [menuItems, setMenuItems] = useState(data)
  return (
    <main>|
      <Title>Our menu</Title>

      
    </main>
  )
};
export default App;
