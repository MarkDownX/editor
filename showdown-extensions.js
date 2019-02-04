var mdxsd = function () {
 var underline = {
  type: 'lang',
  regex: '__.{1,}?__',
  replace: '<u>$1</u>'
 };
 var strike = {
  type: 'lang',
  regex: '((~~|--).{1,}?(~~|--)){1}',
  replace: '<u>$1</u>'
 };
 var sub = {
  type: 'lang',
  regex: '\^\^.{1,}?\^\^',
  replace: '<sub>$1</sub>'
 };
 var sup = {
  type: 'lang',
  regex: '\^.{1,}?\^',
  replace: '<sup>$1</sup>'
 };
 return [underline, strike, sub, sup];
}
