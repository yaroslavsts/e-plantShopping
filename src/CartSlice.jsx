import {createSlice} from '@reduxjs/toolkit';
const slice=createSlice({name:'cart',initialState:{items:[]},reducers:{
 addItem(state,{payload}) { if(!state.items.some(i=>i.id===payload.id)) state.items.push({...payload,quantity:1}); },
 updateQuantity(state,{payload}) { const item=state.items.find(i=>i.id===payload.id); if(!item) return; if(Number.isInteger(payload.quantity) && payload.quantity>0) item.quantity=payload.quantity; else if(payload.quantity===0) state.items=state.items.filter(i=>i.id!==payload.id); },
 increase(state,{payload}) { const item=state.items.find(i=>i.id===payload); if(item) item.quantity++; },
 decrease(state,{payload}) { const item=state.items.find(i=>i.id===payload); if(!item) return; if(item.quantity>1) item.quantity--; else state.items=state.items.filter(i=>i.id!==payload); },
 removeItem(state,{payload}) {state.items=state.items.filter(i=>i.id!==payload);}
}});
export const {addItem,updateQuantity,increase,decrease,removeItem}=slice.actions;
export const selectCount=state=>state.cart.items.reduce((n,i)=>n+i.quantity,0);
export const selectTotal=state=>state.cart.items.reduce((n,i)=>n+i.price*i.quantity,0);
export default slice.reducer;
