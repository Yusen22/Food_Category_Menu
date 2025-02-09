import { useState, useEffect } from "react"

import { FaArrowUp, FaArrowDown } from "react-icons/fa6"

const Sort = ({ setDescendingSort, displayActive, activeCat, menuItems, originalMenu, activeSort, setActiveSort, sortList }) => {
   
    const menuKeys = Object.keys(menuItems[0])

    const SortArrows = () => {
      return (
        <div>
            <button onClick={() => {setDescendingSort(true)}}>
                <FaArrowUp className="arrow-up"/>
            </button>
            <button onClick={() => {setDescendingSort(false)}}>
                <FaArrowDown className="'arrow-down'"/>
            </button>
        </div>
      )
    }
    

    const handleSortClick = (indx) => {
        const key = menuKeys[indx]
        console.log(key)
        sortList(key)
        console.log(activeCat)

        setActiveSort(prevActiveSort => {
            if (prevActiveSort.includes(key)) {
                displayActive(activeCat)
                return prevActiveSort.filter(item => item !== key)
            } else if (prevActiveSort.lenqth === 0) {
                return [key]
            } else {
                return [key]
            }
        })
    }
    useEffect(() => {
        console.log(activeSort)
    }, [activeSort])

    const sortClass = (indx) => {
        return (
            activeSort.includes(menuKeys[indx]) ? 'active-sort sort-item' : 'sort-item'
        )
    }

    return (
        <div className="sort-container">
            <p>Sort by:</p>
            <p className={sortClass(1)} onClick={() => handleSortClick(1)}>{menuKeys[1]}</p>
            {menuItems.length === originalMenu.length ? (
                <p  className={sortClass(2)} onClick={() => handleSortClick(2)}>{menuKeys[2]}</p>
            ) : ''}
            <p className={sortClass(3)} onClick={() => handleSortClick(3)}>{menuKeys[3]}</p>
            <SortArrows></SortArrows>
        </div>
    )
}
export default Sort