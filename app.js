$(function() {

  $('#search-term').submit(function(event) {
    event.preventDefault();
    var ip = $('#query').val();
    $.getJSON('https://api.ip2country.info/ip?' + ip, function(json) {
      response = 'The IP is located in ';
      country = json.countryName;
      var html = "";
      html += '<p>' + response + country + '</p>';
      $('.result').html(html);
    });
  });

});
