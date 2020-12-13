
const initialState = {
    selectedProduct: {},
    compareList: [],
    cartList: [],
  };
const mainReducer= (state = initialState, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case 'SET_PRODUCT' :
        return Object.assign({}, state,{selectedProduct: action.value});
        //return { ...state,todoList: action.value }
        case 'SET_COMPARE_LIST' :
        return Object.assign({}, state,{compareList: action.value});
        case 'SET_CART_LIST' :
        return Object.assign({}, state,{cartList: action.value});
        default:
        return state;
    }
} 
export default mainReducer; 
