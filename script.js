var TODOS = [
  { action: "Do this first", done: false },
  { action: "Learn HB", done: true },
  { action: "Learn Angular", done: false }
];

var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

function render() {
  var html    = template({ todos: TODOS, appName: 'Awesome' });
  $(".container").html(html);
}

render();

$('.container').on('click', ':checkbox', function() {
  TODOS[$(this).data('index')].done = $(this).is(':checked');
  render();
});