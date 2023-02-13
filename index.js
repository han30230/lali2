var chatHistory = [];
$("#chat-submit").click(function() {
  var message = $("#chat-input").val();
  var otherMessage = generateOtherMessage();
  $("#chat-output").append("<p>You: " + message + "</p>");
  $("#chat-output").append("<p>Other: " + otherMessage + "</p>");
  chatHistory