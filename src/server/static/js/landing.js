/* eslint-disable */

// Document Ready Function
function documentReady(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

// Math.random should be unique because of its seeding algorithm.
// Convert it to base 36 (numbers + letters), and grab the first 9 characters
// after the decimal.
// See: https://gist.github.com/gordonbrander/2230317
function generateRoomID() {
  return Math.random().toString(36).substr(2, 9);
}

function post(url, data, successCb, errorCb) {
  var request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-Type', 'application/json');

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

  request.send(JSON.stringify(data));
}

function makeUsersFeelLikeStuffIsLoading(nextUrl) {
  setTimeout(function() {
    setTimeout(function() {
      var button = document.getElementsByClassName('start-drawing')[0];
      button.innerText = 'Redirecting...';
      window.location.href = nextUrl;
    }, 300)
  }, 700);
  
}

function startBoardSession(e) {
  var button = document.getElementsByClassName('start-drawing')[0];
  button.innerText = 'Creating New Session...';

  // create new board session => POST to /api/rooms
  var data = {
    room: generateRoomID()
  };

  post(
    '/api/rooms',
    data,
    function(request) {
      var createdRoom = request.responseText;
      var nextUrl = window.location.origin + '/b/' + createdRoom;
      makeUsersFeelLikeStuffIsLoading(nextUrl);
    },
    function(request) {
      var errorMessage = request.responseText;
      console.error(errorMessage);
    }
  )
}

documentReady(function() {
  var button = document.getElementsByClassName('start-drawing')[0];
  button.addEventListener('click', startBoardSession);
});
