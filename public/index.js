var h1s = Array.prototype.slice.apply(document.getElementsByTagName("h1"));
var h2s = Array.prototype.slice.apply(document.getElementsByTagName("h2"));
var h3s = Array.prototype.slice.apply(document.getElementsByTagName("h3"));

var allHeadings = h1s.concat(h2s, h3s);

allHeadings.forEach(function (h) {
  var newH = document.createElement("A");
  newH.href = "#" + h.id;
  newH.appendChild(h.cloneNode(true));
  h.parentNode.replaceChild(newH, h);
});
