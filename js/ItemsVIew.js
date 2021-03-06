window.Todo = window.Todo || {};        
window.Todo.ItemsView=
(function(window){
                // private methods
               
                //ItemsView constructor
                function ItemsView(name) {
                               
								this.name=name || "item2";
                }
 
                // ItemsView public methods
                ItemsView.prototype.init = function() {
                        
						
						var Item=new Todo.ItemView();
						Item.init();   
                };
 
                ItemsView.prototype.display = function (items) { 
					var item1=document.querySelector("#todoTextBox");
					item1.value = null;
					$div = document.createElement('DIV');
					$div.id = items+"div";
					var divid = $div.id;
					var stat = "unchecked";
					var Item=new Todo.ItemView();
					$div.innerHTML = Item.display(items,divid);
					var ul=document.querySelector("#itemContainer");
					ul.appendChild($div);
					console.log("new TODO item added");
					var insertedItems = {id : divid, name : items, state : stat};
					var store=new Todo.Store();
					store.save(insertedItems);
					return items;
				};
               
				
				ItemsView.prototype.assignListeners=function(){
					var Items= new ItemsView();
					var Item=new Todo.ItemView();
					var store=new Todo.Store();
					console.log("reached delegation");
					var id = event.target.id;
					item = event.target;
					console.log(item);
					if (item.classList.contains("checkButton")){
						
						var DivId = event.target.getAttribute("divid");
						
						Item.checkBoxEffect(id,DivId);
					}
					else if(item.classList.contains("deletestyle")){
						
						var outerDivId = event.target.getAttribute("divid");
						console.log(outerDivId);
						
						Items.remove(outerDivId);													//remove (ItemsView-->ItemView)
						store.remove(outerDivId);														//delete (ItemsView-->Store)
					}
				
				};
				 ItemsView.prototype.remove = function (outerDivId) {
					
					var Item=new Todo.ItemView();
					Item.remove(outerDivId);
					return outerDivId;
					
				};
				ItemsView.prototype.clearScreen=function(){
					var clrbutton = document.querySelector("#clrButton");
					var Item=new Todo.ItemView();
					Item.remove(clrbutton.id);
				}
 
              return ItemsView;     
})(window);
 