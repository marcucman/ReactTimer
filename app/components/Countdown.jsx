var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },
  // LifeCycle method that gets called every time a component is updated
  componentDidUpdate: function (prevProps, prevState) {
    // if a change occurred for countdownStatus ...
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      // check the current countdownStatus
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  // // LifeCycle method that fires just before updating
  // componentWillUpdate: function (nextProps, nextState) {
  //
  // },
  // // LifeCycle method
  // componentWillMount: function () {
  //   console.log('component will mount');
  // },
  // // LifeCycle method
  // componentDidMount: function () {
  //   console.log('component did mount');
  // },
  // LifeCycle method
  componentWillUnmount: function () {
    // console.log('component did unmount');
    clearInterval(this.timer); // get rid of the interval
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }

      // check if we've reached the end of the time
    }, 1000);
  },
  handleSetCountdown: function (seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  render: function () {
    var {count, countdownStatus} = this.state;
    var renderControlArea = () => {
      if (countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>;
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    )
  }
});

module.exports = Countdown;
