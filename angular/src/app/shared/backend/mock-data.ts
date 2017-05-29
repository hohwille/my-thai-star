import { ExtraView, OrderListView, ReservationView } from '../viewModels/interfaces';
import { Dish, LoginInfo, Role } from './backendModels/interfaces';

export const extras: ExtraView[] = [{
                id: 0,
                name: 'Tofu',
                price: 1,
                selected: false,
        }, {
                id: 1,
                name: 'Chiken',
                price: 1,
                selected: false,
        }, {
                id: 2,
                name: 'Pork',
                price: 2,
                selected: false,
        }];

export const dishes: Dish[] = [{
                id: 0,
                isfav: false,
                image: '../../../assets/images/basil-fried.jpg',
                likes: 21,
                extras: [
                        { id: 0, name: 'Tofu', price: 1, selected: false },
                        { id: 1, name: 'Chiken', price: 1, selected: false },
                        { id: 2, name: 'Pork', price: 2, selected: false }],
                description:
                'Lorem ipsum dolor sit amet. Proin fermentum lobortis neque. ' +
                'Pellentesque habitant morbi tristique.',
                name: 'Red Curry',
                price: 5.90,
                categories: [
                        {id: '0'},
                        {id: '3'},
                        {id: '5'},
                        {id: '6'},
                        {id: '7'}],
        }, {
                id: 1,
                isfav: false,
                image: '../../../assets/images/garlic-paradise.jpg',
                likes: 10,
                extras: [
                        { id: 0, name: 'Tofu', price: 1, selected: false },
                        { id: 1, name: 'Chiken', price: 1, selected: false },
                        { id: 2, name: 'Pork', price: 2, selected: false }],
                description:
                        'Consectetur adipiscing elit. Nulla id viverra turpis, sed eleifend dui. ' +
                        'Proin fermentum lobortis neque. Pellentesque habitant morbi tristique.',
                name: 'Purple Curry',
                price: 9.00,
                categories: [
                        {id: '1'},
                        {id: '6'}],
        }, {
                id: 2,
                isfav: false,
                image: '../../../assets/images/green-curry.jpg',
                likes: 61,
                extras: [
                        { id: 0, name: 'Tofu', price: 1, selected: false },
                        { id: 1, name: 'Chiken', price: 1, selected: false },
                        { id: 2, name: 'Pork', price: 2, selected: false }],
                description:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                        'Nulla id viverra turpis, sed eleifend dui. Proin fermentum lobortis neque.',
                name: 'Green Curry',
                price: 7.60,
                categories: [
                        {id: '2'},
                        {id: '4'},
                        {id: '6'}],
        }, {
                id: 3,
                isfav: false,
                image: '../../../assets/images/dish.png',
                likes: 48,
                extras: [
                        { id: 0, name: 'Tofu', price: 1, selected: false },
                        { id: 1, name: 'Chiken', price: 1, selected: false },
                        { id: 2, name: 'Pork', price: 2, selected: false }],
                description: 'Lorem ipsum dolor. Pellentesque habitant morbi tristique.',
                name: 'Yellow Curry',
                price: 8.50,
                categories: [
                        {id: '1'},
                        {id: '4'},
                        {id: '7'}],
        }];

export const users: LoginInfo[] = [{
        username: 'user',
        password: 'pass',
        role: 'user',
        }, {
        username: 'waiter',
        password: 'pass',
        role: 'waiter',
        }];

export const roles: Role[] = [
        {name: 'user', permission: 0},
        {name: 'waiter', permission: 1},
];

export const bookedTables: ReservationView[] = [{
        date: '19/03/2017 22:00',
        creationDate: '11/03/2017 12:45',
        name: 'Brok',
        email: 'email1@email.com',
        bookingType: 1,
        assistants: 3,
        bookingId: 500,
        tableId: 0,
        guestList: [{email: 'emailFriend1@email.com', acceptance: 'yes'},
                        {email: 'emailFriend2@email.com', acceptance: 'yes'},
                        {email: 'emailFriend3@email.com', acceptance: ''}],
        }, {
        date: '13/03/2017 21:45',
        creationDate: '17/03/2017 23:30',
        name: 'Jesse',
        email: 'email2@email.com',
        bookingType: 1,
        assistants: 2,
        bookingId: 501,
        tableId: 1,
        guestList: [{email: 'emailFriend1@email.com', acceptance: 'yes'},
                  {email: 'emailFriend2@email.com', acceptance: 'no'}],
        }, {
        date: '15/03/2017 21:00',
        creationDate: '17/03/2017 17:12',
        name: 'James',
        email: 'email3@email.com',
        bookingType: 0,
        assistants: 4,
        bookingId: 502,
        tableId: 2,
        guestList: [],
        }, {
        date: '16/03/2017 20:45',
        creationDate: '17/03/2017 18:45',
        name: 'Mara',
        email: 'email4@email.com',
        bookingType: 0,
        assistants: 1,
        bookingId: 503,
        tableId: 3,
        guestList: [{email: 'emailFriend1@email.com', acceptance: 'yes'},
                        {email: 'emailFriend2@email.com', acceptance: 'no'},
                        {email: 'emailFriend3@email.com', acceptance: 'yes'},
                        {email: 'emailFriend4@email.com', acceptance: ''},
                        {email: 'emailFriend5@email.com', acceptance: 'yes'}],
        }];

export const orderList: OrderListView[] = [{
                bookingId: 500,
                booking: {
                            name: 'user0',
                            bookingDate: '38820586113508',
                            creationDate: '1495782513508',
                            email: 'user0@mail.com',
                            tableId: 0,
                          },
                orderList: [{
                        idDish: 0,
                        name: 'Pad Kee Mao',
                        price: 5.90,
                        extras: [{id: 1, name: 'Chicken', price: 2, selected: true}],
                        amount: 1,
                        comment: 'Hello mom!',
                        }, {
                        idDish: 1,
                        name: 'Red Curry',
                        price: 5.90,
                        extras: [],
                        amount: 1,
                        comment: 'I want it really red',
                        }],
        }, {
                bookingId: 501,
                booking: {
                            name: 'user0',
                            bookingDate: '38820586113508',
                            creationDate: '1495782513508',
                            email: 'user0@mail.com',
                            tableId: 1,
                          },
                orderList: [{
                        idDish: 1,
                        name: 'Red Curry',
                        price: 5.90,
                        extras: [{id: 2, name: 'Pork', price: 1, selected: true},
                                {id: 0, name: 'Tofu', price: 1, selected: true},
                                {id: 1, name: 'Chicken', price: 2, selected: true}],
                        amount: 1,
                        comment: 'I hope this curry worths the price',
                        }, {
                        idDish: 1,
                        name: 'Red Curry',
                        price: 5.90,
                        extras: [{id: 2, name: 'Pork', price: 1, selected: true}],
                        amount: 1,
                        comment: 'hot sauce',
                }],
        }, {
                bookingId: 502,
                booking: {
                            name: 'user0',
                            bookingDate: '38820586113508',
                            creationDate: '1495782513508',
                            email: 'user0@mail.com',
                            tableId: 2,
                          },
                orderList: [{
                  idDish: 1,
                  name: 'Red Curry',
                  price: 5.90,
                  extras: [{id: 2, name: 'Pork', price: 1, selected: true},
                           {id: 0, name: 'Tofu', price: 1, selected: true}],
                  amount: 1,
                  comment: 'it would be nice if the pork can be well-cooked',
                }],
        }, {
                bookingId: 503,
                booking: {
                            name: 'user0',
                            bookingDate: '38820586113508',
                            creationDate: '1495782513508',
                            email: 'user0@mail.com',
                            tableId: 3,
                          },
                orderList: [{
                  idDish: 3,
                  name: 'Brown Curry',
                  price: 5.40,
                  extras: [],
                  amount: 1,
                  comment: '',
                }, {
                  idDish: 5,
                  name: 'Yellow Curry',
                  price: 8.20,
                  extras: [{id: 1, name: 'Chicken', price: 1, selected: true}],
                  amount: 1,
                  comment: '',
                }, {
                  idDish: 4,
                  name: 'Purple Curry',
                  price: 6.70,
                  extras: [],
                  amount: 2,
                  comment: 'one without tomatoe',
                }, {
                  idDish: 2,
                  name: 'Green Curry',
                  price: 7.90,
                  extras: [{id: 0, name: 'Tofu', price: 1, selected: true}],
                  amount: 1,
                  comment: '',
                }],
        },
        ];
