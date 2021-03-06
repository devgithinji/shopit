import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {
    productsReducers,
    productDetailsReducer,
    newReviewReducer,
    newProductReducer,
    productReducer, productReviewsReducer, reviewReducer
} from "./reducers/productReducers";
import {
    authReducer,
    userReducer,
    forgetPasswordReducer,
    allUsersReducer,
    userDetailsReducer
} from "./reducers/userReducers";
import {cartReducer} from "./reducers/cartReducers";
import {
    newOrderReducer,
    myOrdersReducer,
    orderDetailsReducer,
    allOrdersReducer,
    orderReducer
} from "./reducers/orderReducers";

const reducer = combineReducers({
    products: productsReducers,
    productDetails: productDetailsReducer,
    newProduct: newProductReducer,
    product: productReducer,
    productReviews: productReviewsReducer,
    review: reviewReducer,
    auth: authReducer,
    user: userReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
    forgetPassword: forgetPasswordReducer,
    cart: cartReducer,
    newOrder: newOrderReducer,
    myOrders: myOrdersReducer,
    allOrders: allOrdersReducer,
    orderDetails: orderDetailsReducer,
    order: orderReducer,
    newReview: newReviewReducer
})

let initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
        shippingInfo: localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {}
    }
}

const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;
