
function setupFlip(tick) {

  Tick.helper.interval(function() {

      tick.value++;

      // Set `aria-label` attribute which screenreaders will read instead of HTML content
      tick.root.setAttribute('aria-label', tick.value);

  }, 1000);

}

function handleTickInit(tick) {
  var nextYear = (new Date()).getFullYear() + 1;

  Tick.count.down(nextYear + '-01-01').onupdate = function(value) {
    tick.value = value;
  };
}