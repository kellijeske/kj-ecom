import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail(_id) {
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function fetchUserPurchases() {
    return({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19.40,
                orderNumber: 'A0037543897',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street'
                }

            },
            {
                _id: 1,
                total: 1.38,
                orderNumber: 'A0037515492',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Maxwell Nelson',
                    shippingAddress: '1337 West State Street'
                }

            },
            {
                _id: 2,
                total: 1.30,
                orderNumber: 'B0037543456',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jonas Mars',
                    shippingAddress: '1111 South State Street'
                }

            },
            {
                _id: 3,
                total: 19.40,
                orderNumber: 'A0037543897',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Marie Hudgens',
                    shippingAddress: '1234 West State Street'
                }

            },
            {
                _id: 4,
                total: 19.40,
                orderNumber: 'G0537543291',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Marissa Lopez',
                    shippingAddress: '1234 West State Street'
                }

            },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'A0137543890',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Kristine Hudgens',
                    shippingAddress: '1234 West State Street'
                }

            },
            {
                _id: 6,
                total: 20.20,
                orderNumber: 'C6037543897',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jose Hernandez',
                    shippingAddress: '1233 North State Street'
                }

            },
            {
                _id: 7,
                total: 3.20,
                orderNumber: 'A0037543897',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Andrew Wild',
                    shippingAddress: '348 Yo State Street'
                }

            }
        ]
    })
}