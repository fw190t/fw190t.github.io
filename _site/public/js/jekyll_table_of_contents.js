  document.write('<div id="toc"></div>');
document.write('<script src="//cdn.jsdelivr.net/gh/ghiculescu/jekyll-table-of-contents/toc.js"></script>');
$(window).on("load", function () {
  $('#toc').toc();
});
