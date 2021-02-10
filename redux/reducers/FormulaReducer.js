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
      name:"Pythagora's Theorem",
      variations:[
        { name:'Find c', string: 'c^2 = a^2+b^2', formula: (a,b)=> Math.sqrt(b**2 + a**2) },
        { name:'Find b', string: 'b^2 = c^2-a^2', formula: (c,a)=> Math.sqrt(c**2 - a**2) },
        { name:'Find a', string: 'a^2 = c^2-b^2', formula: (c,b)=> Math.sqrt(c**2 - b**2) },
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