import { 
    // SET_SHOP_CATEGORIES 
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    SET_SHOP_CATEGORIES,
    FILTER_PRODUCTS_WITH_QUERY
} from './types';



export function filterProductsWithQuery(fields) {
    return({
        type: FILTER_PRODUCTS_WITH_QUERY,
        payload: fields
    })
}


export function filterProductsWithCategoryId(_id) {
    return({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories(){
    return({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'Javascript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            }
        ]
        
        
    })
}



export function fetchShopProducts(){
    return({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'Javacript in the Browser',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Sodales ut etiam sit amet nisl purus in mollis.',
                price: 9.99,
                belongsTo: [0,1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Sodales ut etiam sit amet nisl purus in mollis.',
                price: 9.99,
                belongsTo: [0,6]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Sodales ut etiam sit amet nisl purus in mollis.',
                price: 9.99,
                belongsTo: [0,1,4]
            },
            {
                _id: 3,
                title: 'User Interface Design',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Sodales ut etiam sit amet nisl purus in mollis.',
                price: 9.99,
                belongsTo: [0,2]
            },
            {
                _id: 4,
                title: 'User Experience Design',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Sodales ut etiam sit amet nisl purus in mollis.',
                price: 9.99,
                belongsTo: [0,1]
            },
            {
                _id: 5,
                title: 'Javascript Development',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Sodales ut etiam sit amet nisl purus in mollis.',
                price: 9.99,
                belongsTo: [0,2]
            },
            {
                _id: 6,
                title: 'Advanced OOP',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Sodales ut etiam sit amet nisl purus in mollis.',
                price: 9.99,
                belongsTo: [0,6]
            }
        ]
    })
}