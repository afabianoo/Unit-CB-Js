export default {
    fruit: (value) => {
        if (value === 'banana') {
            return ([{
              name: 'drink',
              method: 'block',
              values: ['cider']
            },{
              name: 'food',
              method: 'reduce',
              values: ['sandwich', 'cake']
            }]);
        }
        return [{
          name: 'drink',
          method: 'block',
          values: ['beer']
        }];
    },
    drink: (value) => {
        if (value === 'beer') {
            return [{
              name: 'food',
              method: 'reduce',
              values: ['sandwich']
            }]
        }
        else if (value === 'barley') {
            return [{
                name: 'food',
                method: 'block',
                values: ['cake']
            }]
        }
        return [{
          name: 'food',
          method: 'add',
          values: [{ value: 'pie', description: 'Pie'}, { value: 'pizza', description: 'Pizza'}]
      }];
    }
};
