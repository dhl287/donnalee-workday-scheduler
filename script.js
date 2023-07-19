// This function ensures that the code executes when the page finishes loading.
$(document).ready(function() {
  var saveBtn = $('.saveBtn');
  
  // Add a listener for click events on the save button. 
  saveBtn.each(function() {
    $(this).click(handleSave);
  });

  // Add code to get any user input that was saved in localStorage 
  $('.time-block').each(function() {
    var timeBlockId = $(this).attr('id');
    var storedText = localStorage.getItem(timeBlockId);
    if (storedText) {
      $(this).find('.description').val(storedText);
    }
  });

  // Set the values of the corresponding textarea elements. Load stored values when the page loads (and reloads), getting 'id="hour-x"'.
  function handleSave() {
    var timeBlockId = $(this).closest('.time-block').attr('id');
    var userInput = $(this).prev('.description').val();
    localStorage.setItem(timeBlockId, userInput);
  }
});

    // Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. 
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

  // Add code to display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('MMM DD, YYYY'));
