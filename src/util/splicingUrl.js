var splicingUrl = (baseUrl,query) => {
  var keys = Object.keys(query);
  keys.forEach((item,i) => {
    if(!(query[item] || query[item] === 0))
      keys.splice(i,1);
  });
  keys.forEach((item,i) => {
    if(query[item] || query[item] === 0)
      baseUrl += i ? '&' + item + '=' + query[item] : '?' + item + '=' + query[item];
  });

  return baseUrl;
};

export default splicingUrl;