var budgetController = (function (){

})();


var UIController = (function (){
	
	/*usado para evitar retrabalho caso uma classe CSS seja alterada
	caso isso acontça, a modificação só precisará ser feita aqui*/
	var DOMstrings = {
		inputType: 'add__type',
		inputDescription: 'add__description',
		inputValue: 'add__value',
		inputBtn: 'add__btn',
	}


	return {
		getInput: function(){
			return{
				type: document.querySelector(DOMstrings.inputType).value,
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: document.querySelector(DOMstrings.add__value).value,
				
			}
		},

		getDOMstrings: function(){
			return DOMstrings;
		}
	}

})();


var controller = (function (budgetCtrl, UICtrl){

	var setupEventListeners = function(){
		var DOM = UICtrl.getDOMstrings();
		
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function(event){
			if(event.keyCode === 13 || event.witch === 13){
				ctrlAddItem();
			}
		})
	};


	var ctrlAddItem = function(){
		// 1. Get the field input data
		var input = UICtrl.getInput();

		// 2. Add the item to the budget
		// 3. Add the item to the UI
		// 4. Caculate de budget
		// 5. Display the budget on the UI

	}

	return{
		init: function(){
			setupEventListeners();
		}
	}	

})(budgetController, UIController);


controller.init();