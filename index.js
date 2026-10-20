const dateJs = require(`datejs`);

function combineUsers(...args){
  const combineObject= {
    users: [],
  };
  for(const arr of args){
    combineObject.users= [...combineObject.users, ...arr];
  }
  combineObject.merge_date= new Date().toString('M/d/yyyy')
  
  return combineObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};