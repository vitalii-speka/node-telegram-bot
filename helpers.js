function debugFn(obj = {}) {
  return JSON.stringify(obj, null, 4);
}

module.exports = debugFn;
