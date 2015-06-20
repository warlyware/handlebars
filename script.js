var TODOS = [
  { action: "Do this first", done: false, tag: 'important', cleared: false },
  { action: "Learn HB", done: true, tag: 'semi-important', cleared: false },
  { action: "Learn Angular", done: false, tag: 'unimportant', cleared: false, funky: true }
];

var source   = $("#entry-template").html();
var template = Handlebars.compile(source);

function render() {
  var html    = template({ todos: TODOS, appName: 'To Do App' });
  $(".container").html(html);
}

Handlebars.registerHelper('findFunky', function(todo) {
  var reverseAction = todo.action.split('').reverse().join('');
  // console.log(reverseAction);
  return todo.funky ? todo.action = todo.action : todo.action = reverseAction ;
});

render();


$('.container')
  .on('click', ':checkbox', function() {
    TODOS[$(this).data('index')].done = $(this).is(':checked');
    render();
  })
  .on('click', '#clearDone', function() {
    console.log('CLEAR');
    TODOS = TODOS.filter(function(el) {
      return !el.done;
    });
    render();
  });

$('#addTaskForm').on('submit', function(evt) {
  evt.preventDefault();
  console.log('submit');
  var newTaskName = $('#newTaskName').val();
  var newTaskTag = $('#newTaskTag option:selected').val();
  TODOS.push({ action: newTaskName, done: false, tag: newTaskTag, cleared: false });
  console.log(TODOS);
  render();
});