function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  console.log ("Button is working")
  var $result = $("#result");
  var email = $("#email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text(email + " Your info is confirmed. Updates will be sent soon. Thanks!");
    $result.css("color", "green");
    console.log ("VALID")
  } else {
    $result.text(email + " Your email is not valid. Please input your email again.");
    $result.css("color", "red");
    console.log ("INVALID")
  }
  return false;
}

$("form").submit(function (event) {
  event.preventDefault();
  validate();
  console.log ("Confirmation is working")
} )