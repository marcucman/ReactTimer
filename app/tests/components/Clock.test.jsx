var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock)); // store the root of the component in terms of the DOM
      // you can now use $el to make any jQuery call you normally would
      var actualText = $el.find('.clock-text').text();
      // make your assertion
      expect(actualText).toBe('01:02');
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      // in order to test it, we need to render the clock component. This does that
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 615; // dummy argument
      var expected = '10:15'; // expected result for dummy argument
      var actual = clock.formatSeconds(seconds); // use the method from the component

      expect(actual).toBe(expected); // see if the method provides the right answer
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds when min/sec are less than 10', () => {
      // in order to test it, we need to render the clock component. This does that
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61; // dummy argument
      var expected = '01:01'; // expected result for dummy argument
      var actual = clock.formatSeconds(seconds); // use the method from the component

      expect(actual).toBe(expected); // see if the method provides the right answer
    });
  });
});
