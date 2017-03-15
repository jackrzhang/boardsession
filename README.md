# boardsession
[![Build Status](https://travis-ci.org/jackrzhang/boardsession.svg?branch=master)](https://travis-ci.org/jackrzhang/boardsession)
[![dependencies Status](https://david-dm.org/jackrzhang/boardsession/status.svg)](https://david-dm.org/jackrzhang/boardsession)
[![devDependencies Status](https://david-dm.org/jackrzhang/boardsession/dev-status.svg)](https://david-dm.org/jackrzhang/boardsession?type=dev)

A web application for collaborative whiteboarding - kind of like a simple Google Docs for drawing. This is my CS50 Final Project for Fall 2016, though I had this idea bouncing around for a while even before CS50. Really happy to have finally built it!

Find documentation for usage [here](documentation.md). Find some explanation of my design decisions [here](design.md).

### For the future
- Add unit tests, at least for reducers/action creators
- Revamp the landing page
- Dockerize & deploy to AWS
- Set timeout for deleting room state server-side after all users have disconnected
- Reduce technical debt - the logic for dispatching redux actions, emitting socket events, and manipulating the canvas is tightly coupled (see `canvasEventHandlers` and the `configureSocket` files). Utilizing redux middleware would be the way to go...
- Real-time messaging
- Google OAuth(?)
- Some sort of rollback feature - this should be possible by periodically taking snapshots of the board state.

## Requirements
[Node.js](https://nodejs.org) v6+

## License
[MIT](https://github.com/jackrzhang/boardsession/blob/master/LICENSE)
