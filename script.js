// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var saveBtn = $('.saveBtn');
var input = $('textarea');
var hourNine = $('textarea[description="description"]');

// This function ensures that the code executes when the page finishes loading
$(document).ready(function() {
  var saveBtn = $('.saveBtn');
  
  saveBtn.each(function() {
    $(this).click(handleSave);
  });

  // Load stored values when the page loads
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id', 'hour-9, hour-10, hour-11, hour-12, hour-13, hour-14, hour-15, hour-16');
    var storedValue = localStorage.getItem(timeBlockId);
    if (storedValue) {
      $(this).find('.description').val(storedValue);
    }
  });

  function handleSave() {
    var timeBlockId = $(this).closest('.time-block').attr('id', 'hour-9, hour-10, hour-11, hour-12, hour-13, hour-14, hour-15, hour-16');
    var userInput = $(this).prev('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  }
});




    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    var currentHour = dayjs().hour();

    $('.time-block').each(function() {
    var blockHour = parseInt($(this).attr('id').split('-')[1]);
  
    if (blockHour < currentHour) {
      $(this).removeClass('present future').addClass('past');
    } else if (blockHour === currentHour) {
      $(this).removeClass('past future').addClass('present');
    } else {
      $(this).removeClass('past present').addClass('future');
    }
  });

    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.

  var today = dayjs();
  $('#currentDay').text(today.format('MMM DD, YYYY'));
