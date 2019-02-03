function extractClass (node,cls){
 if(node.getAttribute("class")){
  var clss = node.getAttribute("class").split(" ");
  for(var i = 0;i < clss.length;i++){
   if(clss[i].indexOf(cls) > -1){
    return clss[i].slice(clss[i].indexOf(cls));
   };
  };
  return "";
 }else{
  return "";
 };
}
turndown.addRule("underline",{
 filter: ['u'],
 replacement: function (content){
  return '__' + content + '__';
 }
});
turndown.addRule("strike",{
 filter: ['strike','s','del'],
 replacement: function (content){
  return '~~' + content + '~~';
 }
});
turndown.addRule("superscript",{
 filter: ['sup'],
 replacement: function (content){
  return '^' + content + '^';
 }
});
turndown.addRule("subscript",{
 filter: ['sub'],
 replacement: function (content){
  return '^^' + content + '^^';
 }
});
turndown.addRule("textcolor",{
 filter: function (node){
  return node.getAttribute("data-color");
 },
 replacement: function (content, node){
  return '{#' + node.getAttribute("data-color") + '}' + content + '{#}';
 }
});
turndown.addRule("highlightcolor",{
 filter: function (node){
  return node.getAttribute("data-hcolor");
 },
 replacement: function (content, node){
  return '{h' + node.getAttribute("data-hcolor") + '}' + content + '{h}';
 }
});
turndown.addRule("font",{
 filter: function (node){
  return node.getAttribute("data-font");
 },
 replacement: function (content, node){
  return '{)' + node.getAttribute("font") + '}' + content + '{)}';
 }
});
turndown.addRule("fontsize",{
 filter: function (node){
  return node.getAttribute("data-font");
 },
 replacement: function (content, node){
  return '{(' + node.getAttribute("fontsize") + '}' + content + '{(}';
 }
});
turndown.addRule("imagesize",{
 filter: function (node){
  return node.getAttribute("width") && node.tagName === "IMG";
 },
 replacement: function (content, node){
  return '![' + (node.getAttribute("title") || node.getAttribute("alt")) + '](' + node.getAttribute("src") + '{' + node.getAttribute("width") + '})';
 }
});
turndown.addRule("code",{
 filter: ['code','pre'],
 replacement: function (content, node){
  return '```' + extractClass(node, "highlight-") + '\n' + content + '\n```';
 }
});
