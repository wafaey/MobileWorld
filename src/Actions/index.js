const setProduct = selectedProduct => ({ 
    type: 'SET_PRODUCT',
    value :selectedProduct
})
const setCompare = compareList => ({ 
    type: 'SET_COMPARE_LIST',
    value :compareList
})
const setCart = cartList => ({ 
    type: 'SET_CART_LIST',
    value :cartList
});

export default{
    setProduct,
    setCompare,
    setCart,
}