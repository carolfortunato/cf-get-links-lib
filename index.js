module.exports.getLinksFromMd = function getLinksFromMd(text) {
  if (typeof text === 'undefined') {
    throw new RangeError('Não há texto')
  }
  if (typeof text !== 'string'){
    throw new TypeError('O argumento deve ser string')
  }
  
  const regex_url = new RegExp(/(https?:\/\/)?(www\.)?[a-z0-9]+(\.\w{2,}){1,2}/g);
  const regex_md = new RegExp(/\[\w+\]/g);
  const urls = text.match(regex_url);
  const site = text.match(regex_md);
  const result = []
  for(i in urls) {
    let obj = {};
    obj['href'] = urls[i];
    obj['text'] = site[i];
    result.push(obj);
  }
  return result;
};