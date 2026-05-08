import $ from 'jquery';
import _ from 'lodash';
import './body.css';

let count = 0;

function updateCounter() {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
}

$(function () {
  const bodySection = $('<section id="body-section"></section>');
  bodySection.append('<button id="start-button">Click here to get started</button>');
  bodySection.append('<p id="count"></p>');
  $('body').append(bodySection);

  $('#start-button').on('click', _.debounce(updateCounter, 500));
});