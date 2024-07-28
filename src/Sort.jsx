
import { useState, useEffect } from "react"

const Sort = ({ displayActive, activeCat, menuItems, setMenuItems, originalMenu, activeSort, setActiveSort, sortList }) => {
   
    const menuKeys = Object.keys(menuItems[0])

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
        </div>
    )
}
export default Sort