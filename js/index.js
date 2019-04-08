$(document).ready(function(){
  $(".slider").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000
  });
});

function submitForm(e) {
    e.preventDefault();
    fetch('form.php', {
        method: 'POST',
        body: new FormData(document.querySelector('.subscribe-form'))
    })
    .then( response => response.text() )
    .then( html => document.querySelector('.server-response')
                                .innerHTML = html );
}