(function () {

  // More info https://github.com/hakimel/reveal.js#configuration
  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // More info https://github.com/hakimel/reveal.js#dependencies
    dependencies: [
      { src: '/js/reveal/classList.js', condition: function() { return !document.body.classList; } },
      { src: '/mixed/reveal/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '/mixed/reveal/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
      { src: '/mixed/reveal/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
      { src: '/mixed/reveal/zoom-js/zoom.js', async: true },
      { src: '/mixed/reveal/notes/notes.js', async: true }
    ]
  });

})();
