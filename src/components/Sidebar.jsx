import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */
export default function Sidebar({ initialMenuItems }) {
  let [newMenuItem, setNewMenuItem] = useState("")
  // TODO: 2 Using a state hook, maintain the current menu items as an array state.
  let [menuItems, setMenuItems] = useState(initialMenuItems)
  let [filter, setFilter] = useState("")
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.
  let addMenuItem = useCallback(() => {
    console.log("Added menu item")
    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
    if (newMenuItem !== "") {
      setMenuItems([newMenuItem, ...menuItems]);
      setNewMenuItem("");
    }
  }, [newMenuItem, menuItems])

  const menuItemsFiltered = menuItems.filter((item) => {
    const regex = new RegExp(filter, 'i'); // case insensitive [i] through the use of regular expressions.
    return item.match(regex) !== null;  // if theres a match it will return true
  });

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.
  return (
    <div>
      <ul>
        {/* maps over filtered menu items and display each item onto the page as a list item. key pop is added for DOM modification. react sees which items have been manipulated using this key */}
        {menuItemsFiltered.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick={() => { // on click of the button, the addMenuItem function will be called for adding new items.
          addMenuItem();
        }}
      >
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>

    </div>

  )
}
