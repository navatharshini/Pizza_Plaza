import React from 'react'
import { MenuList } from '../helpers/MenuLists';
import MenuItem from "../components/MenuItem";
import "../components/styles/Menu.css";
function Menu() {
  return (
    <div className='menu'>
        <h1 className="menuTitle">Navaz's Menu</h1>
      <div className='menuList'> 
{ MenuList.map((menuItem,key)=> {
  return <MenuItem
  key={key}
  image ={menuItem.image} name={menuItem.name} price={menuItem.price} />

}) }

      </div>
    </div>
  );
}

export default Menu;
