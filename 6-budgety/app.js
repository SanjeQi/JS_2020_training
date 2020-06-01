//Budget Controller
var budgetController = (function () {
  //some code
})();

// UI controller
var UIController = (function () {
  //some code
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
