'use strict';

var todoApp = angular.module('todoApp',[todoList]);

var todoList = angular.module('todoList',[]);

todoList.controller('todoCtrl',['$scope',
  function($scope){
    var todos = $scope.todos = [];

    $scope.addTodo = function(){
      var newTodo = $scope.newTodo.trim();
      if(!newTodo.length){
        return;
      }
      todos.push({
        title: newTodo,
        completed: false
      });
      $scope.newTodo = '';
    };

    $scope.removeTodo = function(todo){
      todos.splice(todos.indexOf(todo),1);
    };    

    $scope.markAll = function(completed){
      todos.forEach(function(todo){
        todo.completed = !todo.completed;
      });
    };
    
    $scope.clearCompletedTodos = function(todo){
      //todos.forEach(function(todo){
      //  if(todo.completed){todos.splice(todos.indexOf(todo),1);}
      //});
      $scope.todos = todos = todos.filter(function(todo){
        return !todo.completed;
      });
    };

  }
]);