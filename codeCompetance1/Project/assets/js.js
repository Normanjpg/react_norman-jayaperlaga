// var firstName = document.getElementById("firstName");
// var lastName = document.getElementById("lastName");
// var email = document.getElementById("email");
// var message = document.getElementById("message");

$(document).ready(function () {
  $("#formbutton").click(function () {
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var email = $('#email').val();
    var message = $('#message').val();

    alert(
      "FirstName = " +
        firstName +
        "\n\n LastName = " +
        lastName +
        "\n\n Email = " +
        email +
        "\n\n Message = " +
        message
    );
  });
});
