(function ($) {
  Drupal.behaviors.eveAlyson = {
    attach: function(context) {
      alert('hi');
      $('.powered-by-drupal-gardens-text').hide();
    }
  }
}) (jQuery);
