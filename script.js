var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

$.ajax('https://api.github.com/users').success(function(data) {
  var html = template(data);
  $("body").append(html);
});