// contact-form.js
// A script for processing forms and storing data in a
// Google Docs spreadsheet

function postToGoogle() {

  // capture input values, store in variables
  var firstName = document.forms[0].elements.firstName.value;
  var lastName = document.forms[0].elements.lastName.value;
  var emailAddress = document.forms[0].elements.emailAddress.value;
  var message = document.forms[0].elements.message.value;

  // The following is Ajax -- what allows two-way communication
  // with our page and Google's servers. jQuery is used here to
  // make the code a little easier.

  $.ajax({
    // url: the url generated for the form's action attribute
    // remember to replace uniqueId
    url: "https://docs.google.com/forms/d/1ctg8Dn2gCmobpXYzU3ZwK_nAmrP3z7ntgUVu_VCQImU/formResponse",
    data: {
      // each entry corresponds with a form field as generated by
      // Google's Form Builder; remember to replace uniqueId
      "entry.1707086415": firstName,
      "entry.2028596634": lastName,
      "entry.222424602": emailAddress,
      "entry.410205785": message
    },
    // we POST the data, sending it in the 'json' format
    type: "POST",
    dataType: "json",
    // we execute an action when the status code is 200 (OK)
    // in this case, we re-direct the user to a page thanking
    // them for their submission. The 0 status code is a
    // default, catch-all
    statusCode: {
      0: function() {
        window.location.replace("thank-you.html");
      },
      200: function() {
        window.location.replace("thank-you.html");
      }
    }
  });
}

// identify the submit button
var submit = document.forms[0].elements.submit;

// add an event listener to submit
submit.addEventListener("click", function() {
  // prevent the page from refreshing
  event.preventDefault();
  // call the postToGoogle() function
  postToGoogle();
}, false);
