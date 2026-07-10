// Tracking de conversión de Google Ads para clicks de WhatsApp / envíos de formulario.
//
// PENDIENTE: pedirle a la agencia que maneja la pauta de Google Ads el ID de conversión
// real (formato AW-XXXXXXXXX) y la etiqueta de conversión (formato
// AW-XXXXXXXXX/XXXXXXXXXXXXXXXXXXXX), y:
//   1) Agregar el script base de Google tag (gtag.js) en el <head> de cada página:
//        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
//        <script>
//          window.dataLayer = window.dataLayer || [];
//          function gtag(){dataLayer.push(arguments);}
//          gtag('js', new Date());
//          gtag('config', 'AW-XXXXXXXXX');
//        </script>
//   2) Reemplazar SEND_TO_ID acá abajo por la etiqueta de conversión real.
// Hasta entonces, esta función no hace nada dañino: si gtag no existe todavía,
// simplemente sigue de largo (el link de WhatsApp o el formulario funcionan igual).
var SEND_TO_ID = 'AW-XXXXXXXXX/XXXXXXXXXXXXXXXXXXXX';

function fireGoogleAdsConversion(callback) {
  var done = false;
  function proceed() {
    if (!done) {
      done = true;
      if (callback) callback();
    }
  }
  if (typeof gtag === 'function') {
    gtag('event', 'conversion', {
      send_to: SEND_TO_ID,
      event_callback: proceed
    });
    setTimeout(proceed, 500);
  } else {
    proceed();
  }
}

function trackWhatsAppClick(e, url) {
  e.preventDefault();
  fireGoogleAdsConversion(function () {
    window.location.href = url;
  });
}
