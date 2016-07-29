(function () {

  var link = document.createElement( 'link' );
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = window.location.search.match(/print-pdf/gi) ?
    '/css/reveal/print/pdf.css' :
    '/css/reveal/print/paper.css';
  document.getElementsByTagName( 'head' )[0].appendChild( link );

})();
