//Budget Controller
var budgetController = (function () {
  //some code
})();

// UI controller
var UIController = (function () {
  return {
    getInput: function () {
      var type = document.querySelector(".add__type").value; // will be:  inc or exp
      var description = document.querySelector(".add_description").value;
      var value = document.querySelector(".add_value").value;
    },
  };
})();

//Global APP Controller
var controllrer = (function (budgetCtrl, UICtrl) {
  var ctrlAddItem = function () {
    // 1.Get the filed input data
    // 2.Add  the item to the budgetController
    // 3.Add the item to the UI
    // 4.Calculate the budget
    // 5.Display the new budget to the UI
    console.log("It works");
  };

  document.querySelector(".add__btn").addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
