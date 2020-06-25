//Budget Controller !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var budgetController = (function () {
  var Expense = function (id, description, value) {
    (this.id = id), (this.description = description), (this.value = value);
  };

  var Income = function (id, description, value) {
    (this.id = id), (this.description = description), (this.value = value);
  };

  var calculateTotal = function (type) {
    var sum = 0;
    data.allItems[type].forEach(function (cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };
  return {
    addItem: function (type, des, val) {
      var newItem;
      //Create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //Create new item based on 'inc' or 'exp'
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }

      //Push it into my data structure
      data.allItems[type].push(newItem);

      //Return the new element
      return newItem;
    },
    deleteItem: function (type, id) {
      var ids, index;

      ids = data.allItems[type].map(function (current) {
        return current.id;
      });

      index = ids.indexOf(id);
      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },
    //!!!!!!!!Calculate the budget for income, expenses and percentage (exp/inc)*100
    calculateBudget: function () {
      // Calc total income and expenses
      calculateTotal("exp");
      calculateTotal("inc");
      //Calc budget : income  minus expenses
      data.budget = data.totals.inc - data.totals.exp;
      //Calc the percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },
    // !!!!!! Only get the budget from data object
    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage,
      };
    },
    //temp func for testing purposes
    testing: function () {
      console.log(data);
    },
  };
})();

// UI controller !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expenseContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expenseLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container",
  };
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // will be:  inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
      };
    },

    getListItems: function (obj, type) {
      var html, newHtml, element;
      // Create HTML strings with placeholder text
      if (type === "inc") {
        element = DOMstrings.incomeContainer;
        html =
          '<div class="item clearfix" id="inc-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"><div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === "exp") {
        element = DOMstrings.expenseContainer;
        html =
          ' <div class="item clearfix" id="exp-%id%""> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__percentage">21%</div><div class="item__delete"> <button class="item__delete--btn"> <i class="ion-ios-close-outline"></i> </button></div></div> </div>';
      }

      //Replace the placeholder text with actual data
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);
      //Insert the HTML into the DOM
      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },
    deleteListItem: function (selectorId) {
      var el = document.getElementById(selectorId);
      el.parentNode.removeChild(el);
    },
    clearFields: function () {
      var fields, fieldsArr;
      fields = document.querySelectorAll(
        DOMstrings.inputDescription + ", " + DOMstrings.inputValue
      ); // returns a list
      fieldsArr = Array.prototype.slice.call(fields); //trick!!! to make slice work on lists :)
      // Empty description and value filed
      fieldsArr.forEach(function (cur) {
        cur.value = "";
      });
      //Refocus to inputDescription field
      fieldsArr[0].focus();
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
    displayBudget: function (obj) {
      //Select the dom elements
      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMstrings.expenseLabel).textContent =
        obj.totalExp;

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = "---";
      }
    },
  };
})();

//Global APP Controller !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);
  };

  var updateBudget = function () {
    var budget;
    // 1. Calculate the budget
    budgetCtrl.calculateBudget();
    // 2.  Return budget
    budget = budgetCtrl.getBudget();
    // 3.  Display the budget on the UI
    UICtrl.displayBudget(budget);
  };

  var ctrlAddItem = function () {
    //Variable declaration
    var input, newItem;
    // 1.Get the filed input data
    input = UICtrl.getInput();
    if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
      // 2.Add  the item to the budgetController
      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3.Add the item to the UI
      UICtrl.getListItems(newItem, input.type);
      //4. Clear the fields
      UICtrl.clearFields();
      // 5.Calculate the budget
      updateBudget();
      // 6.Display the new budget to the UI
    }
  };
  var ctrlDeleteItem = function (event) {
    var itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1.Delete the item from the data structure
      budgetCtrl.deleteItem(type, ID);

      // 2.Delete the item from the UI
      UICtrl.deleteListItem(itemID);

      // 3.Update and show the budget
      updateBudget();
    }
  };
  return {
    init: function () {
      console.log("APP has started");
      setupEventListeners();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1,
      });
    },
  };
})(budgetController, UIController);

controller.init();
