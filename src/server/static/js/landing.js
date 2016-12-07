/* eslint-disable */

// Document Ready Function
function documentReady(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function generateRoomID() {
  return Math.random().toString(36).substr(2, 9);
}

function post(url, data, successCb, errorCb) {
  var request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      successCb(request);
    } else {
      errorCb(request);
    }
  };

  request.onerror = function() {
    console.error('POST Request to \'' + url + '\': Connection Error');
  };

  request.send(data);
}

function startBoardSession(e) {
  // create new board session => POST to /api/rooms
  var room = generateRoomID();
}

documentReady(function() {
  var button = document.getElementsByClassName('start-drawing')[0];
  button.addEventListener('click', startBoardSession);
});
