import React,{useContext,useEffect,useState} from 'react'

// import cartIcon from '../Cart/CartIcon'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../../store/cart-context'
import classes from './HeaderCartBtn.module.css'
import cartContext from '../../store/cart-context'

const HeaderCartBtn = (props) => {
  const [BtnisHighlighted,setBtnisHighlighted] =useState(false);
 const cartCtx= useContext(CartContext);

 const numberofCartItems=cartCtx.items.reduce((curNumber,item)=>{
  return curNumber + item.amount;
 },0);

 const btnClasses=`${classes.button} ${ BtnisHighlighted ?classes.bump :''}`;

 const {items}=cartCtx;

 useEffect(()=>{
  if(items.length===0){
    return;
  }
  setBtnisHighlighted(true);

 const timer= setTimeout(()=>{
    setBtnisHighlighted(false);
  },300);

  return ()=>{
    clearTimeout(timer);
  };
 },[items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  )
}

export default HeaderCartBtn