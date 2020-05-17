import { Product } from '../../shared/models/product';
import { Action } from '@ngrx/store';
// import { ADD_PRODUCT } from './product-list.actions';
import * as ProductListActions from './product-list.actions';


const initialState = {
    products: [new Product(1, "computer", "Nice"),
    new Product(2, "TV", "Just so so")]
};


export function productListReducer(state = initialState, action:ProductListActions.AddProduct) {
    switch (action.type) {
        case ProductListActions.ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload]       
            };
        default:
            return state; 
    }

}