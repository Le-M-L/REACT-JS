import { ADDPERSON } from '../constant';

const initState = [
    {
        id: 0,
        name: 'tom',
        age: 18,
    },
];

export default function personReducer(perState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case ADDPERSON:
            return [data, ...perState];
        default:
            return perState;
    }
}
