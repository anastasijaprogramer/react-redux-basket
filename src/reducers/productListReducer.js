const defaultState = {
    productList: [
        {
            id: 1,
            name: 'Apple',
            price: 2,
            quanTotal: 10,
      quanSell: 0,
      quanCart: 0,
        },
        {
            id: 2,
            name: 'Orange',
            price: 4,
            quanTotal: 10,
            quanSell: 0,
            quanCart: 0,
        },
        {
            id: 3,
            name: 'banana',
            price: 5,
            quanTotal: 10,
            quanSell: 0,
            quanCart: 0,
        },

    ]
};



const productListReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD":
            return {
                ...state, 
                productList: state.productList.map(product => {
                    if(product.id === action.id && product.quanTotal - product.quanSell - product.quanCart > 0){
                        return { ...product, quanCart: product.quanCart + 1}
                    }
                    return product
                })
            };
        case "REMOVE":
            return {
                ...state, 
                productList: state.productList.map(product => {
                    if(product.id === action.id && product.quanCart > 0){
                        console.log("to remove: ", product)
                        return { ...product, quanCart: product.quanCart - 1 }
                    }
                    console.log("to ", product)
                    
                    return product
                })
            }    
        default:
            return state
    }
}

export default productListReducer;
