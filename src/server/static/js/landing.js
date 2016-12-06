/* eslint-disable */

// Document Ready Function
function documentReady(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

documentReady(function() {
  console.log('it works');
});
