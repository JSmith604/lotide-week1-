const assertEqual  = require('./assert_equal');

tail = (array) =>  {
  if (array === undefined || array.length <= 1) {
    return [];
  } else {
    newArray = array.slice(1);
    return (newArray);
  }
};

module.exports = tail;

