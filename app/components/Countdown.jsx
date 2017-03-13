var React = require('react');
var Clock = require('Clock');

// var Countdown = () => {
//   return (
//     <div>
//       <h1>Countdown.jsx</h1>
//       <p>This is where the countdown will go</p>
//     </div>
//   )
// };

var Countdown = React.createClass({
  render: function () {
    return (
      <div>
        <Clock totalSeconds={129}/>
      </div>
    )
  }
});

module.exports = Countdown;
