var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render Pause when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'started'}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      // locate a button that contains the word "Pause"
      var $pauseButton = $el.find('button:contains(Pause)');
      // 1 button should be found
      expect($pauseButton.length).toBe(1);
    });

    it('should render Start when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={'paused'}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      // locate a button that contains the word "Pause"
      var $startButton = $el.find('button:contains(Start)');
      // 1 button should be found
      expect($startButton.length).toBe(1);
    });
  });
});
