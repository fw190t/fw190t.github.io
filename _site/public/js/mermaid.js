  
$("<link>").attr({ href: "//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.css", rel: "stylesheet" }).appendTo("head");
document.write('<script src="//cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>');

$(".language-mermaid").attr("class", "mermaid");

$(window).on("load", function () {
  mermaid.init();
});

