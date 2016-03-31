$(document).ready(function() {
  $("#encrypted-message").submit(function(event) {
    event.preventDefault();

    var encryptedMessage = $("#message").val();
    var message = encryptedMessage.toLowerCase().split(" ").join("");
    var length = Math.ceil(Math.sqrt(message.length));
    var result = ""
    var message2 = []
    for(var i = 0; i < length; i++){
      for(var ii = 0; ii < message.length; ii++){
            if(((ii + 1) % length) === i){
              result+=(message.charAt(ii));
              console.log(result)
            }
          }
          message2.push(" " + result);

        }
        message2.push(message2.shift());
        $(".result").text(message2.join(""));
  });
});
