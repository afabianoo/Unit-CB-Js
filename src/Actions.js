export default {
    fruit: (value) => {
        if (value == 'banana') {
            return [{
                name: 'drink',
                value: 'cider'
            }, {
                name: 'food',
                value: 'sandwich'
            }]
        }

        return [{
            name: 'drink',
            value: 'beer'
        }]
    },
    drink: (value) => {
        if (value == 'beer') {
            return [{
                name: 'food',
                value: 'hamburguer'
            }]
        }
        else if (value == 'barley') {
            return [{
                name: 'food',
                value: 'cake'
            }]
        }

        return null;
    }
};
