import { combineReducers } from 'redux';

const INITIAL_STATE = 
  [
    {
      name:'Slope Intercept formula',
      variations:[
        { name:'Find Y', string: 'y = mx + b', formula: (m,x,b)=> (m*x+b) },
        { name:'Find X', string: 'x = (y-b)/m', formula: (y,b,m)=> ((y-b)/m) },
        { name:'Find m', string: 'm = (y-b)/x', formula: (y,b,x)=> ((y-b)/x) },
        { name:'Find b', string: 'b = y/mx', formula: (y,m,x)=> (y/(m*x)) }
      ]
    },
    {
      name:'Slope Intercept formula 2',
      variations:[
        { name:'Find Y', string: 'y = mx + b', formula: (m,x,b)=> (m*x+b) },
        { name:'Find X', string: 'x = (y-b)/m', formula: (y,b,m)=> ((y-b)/m) },
        { name:'Find m', string: 'm = (y-b)/x', formula: (y,b,x)=> ((y-b)/x) },
        { name:'Find b', string: 'b = y/mx', formula: (y,m,x)=> (y/(m*x)) }
      ]
    },
    {
      name:'Slope Intercept formula 3',
      variations:[
        { name:'Find Y', string: 'y = mx + b', formula: (m,x,b)=> (m*x+b) },
        { name:'Find X', string: 'x = (y-b)/m', formula: (y,b,m)=> ((y-b)/m) },
        { name:'Find m', string: 'm = (y-b)/x', formula: (y,b,x)=> ((y-b)/x) },
        { name:'Find b', string: 'b = y/mx', formula: (y,m,x)=> (y/(m*x)) }
      ]
    },
    {
      name:'Slope Intercept formula 4',
      variations:[
        { name:'Find Y', string: 'y = mx + b', formula: (m,x,b)=> (m*x+b) },
        { name:'Find X', string: 'x = (y-b)/m', formula: (y,b,m)=> ((y-b)/m) },
        { name:'Find m', string: 'm = (y-b)/x', formula: (y,b,x)=> ((y-b)/x) },
        { name:'Find b', string: 'b = y/mx', formula: (y,m,x)=> (y/(m*x)) }
      ]
    }
  ]


const formulaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default formulaReducer
// export default combineReducers({
//   formula: formulaReducer
// });