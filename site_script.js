$(document).ready(function () {
  $('a').on('click', function (event) {
    var hash = this.hash;
    if (hash !== '') {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, () => {
        window.location.hash = hash;
      });
    }
  });
});
