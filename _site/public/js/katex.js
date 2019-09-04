  
$("<link>").attr({ href: "//cdn.jsdelivr.net/npm/katex/dist/katex.min.css", rel: "stylesheet" }).appendTo("head");
document.write('<script src="//cdn.jsdelivr.net/npm/katex/dist/katex.min.js"></script>');
document.write('<script src="//cdn.jsdelivr.net/npm/katex/dist/contrib/auto-render.min.js"></script>');

$(window).on("load", function () {
  renderMathInElement(document.body,
    {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ]
    }
  );
});


