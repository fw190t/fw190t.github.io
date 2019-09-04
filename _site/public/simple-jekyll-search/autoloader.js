  document.write('<input id="search-input" placeholder="搜索博文" />');
  document.write('<div id="results-container"></div>');
  document.write('<script src="//cdn.jsdelivr.net/npm/simple-jekyll-search/dest/simple-jekyll-search.min.js"></script>');
  $("<link>").attr({ href: "/public/simple-jekyll-search/search_box.css", rel: "stylesheet" }).appendTo("head");
$(window).on("load", function () {
  SimpleJekyllSearch({
    json: '/public/simple-jekyll-search/search.json',
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container')
  });
});
