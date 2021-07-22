//Каким будет результат выполнения этого кода?
let user = {
    name: "Джон",
    go: function() { alert(this.name) }
  }
  
  (user.go)()
  //результат: нет точки с запятой перед (user.go)()