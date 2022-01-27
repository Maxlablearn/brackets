module.exports = function check(str, bracketsConfig) {
  let sec = str.split('');
  let stack = [];

  function ifClose(bracket) {
    return bracketsConfig.some(a => a[1] === bracket)
  };

  function getOpen(bracket) {
    return bracketsConfig.find(a => a[1] === bracket)[0];
  }

  for (let i = 0 ; i < sec.length ; i++) {
    
    if (ifClose(sec[i])) {
      stack[stack.length - 1] === getOpen(sec[i]) ? stack.pop() : stack.push(sec[i]);
    } else {
      stack.push(sec[i]);
    }
  }

  return stack.length === 0;
}
