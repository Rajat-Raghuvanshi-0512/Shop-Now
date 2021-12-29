export const reducer = (state, action) => {
    switch (action.type) {

        case "INCREMENT":
            const updatedDatainc = state.items.map((curElem) => {
                if (curElem.id === action.payload) {
                    return {
                        ...curElem, qty: curElem.qty + 1
                    }
                }
                return curElem
            });
            return {
                ...state,
                items: updatedDatainc
            }
        case "DECREMENT":
            const updatedDatadec = state.items.map((curElem) => {
                if (curElem.id === action.payload && curElem.id >= 1) {
                    return {
                        ...curElem, qty: curElem.qty - 1
                    }
                }
                return curElem;
            });
            return {
                ...state,
                items: updatedDatadec
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                items: state.items.filter((curElem) => curElem.id !== action.payload)
            };
        case "CLEAR_CART":
            return {
                ...state,
                items: state.items = [],
                totalAmount: 0,
                totalItems: 0,
            };

        case "ADD_ITEM":
            let check = new Set();
            const array = state.items.concat(action.payload)
            // To remove duplicate objects from the array
            const newItems = array.filter(obj => !check.has(obj["id"]) && check.add(obj["id"]))
            return {
                ...state,
                items: newItems
            };

        case "GET_TOTAL":
            const { totalItems, totalAmount } = state.items.reduce((accum, curItem) => {
                let total = Math.round(curItem.price * curItem.qty);
                accum.totalItems += curItem.qty;
                accum.totalAmount += total;
                return accum
            }, {
                totalItems: 0,
                totalAmount: 0.0
            })
            return {
                ...state,
                totalItems: totalItems,
                totalAmount: totalAmount,
                shipping: totalItems < 5 ? totalItems < 3 ? 0 : 100 : 200
            };

        case "DISCOUNT":
            return {
                ...state,
                totalAmount: state.totalAmount - (state.totalAmount * 0.15)
            }

        default:
            return state;
    }
}