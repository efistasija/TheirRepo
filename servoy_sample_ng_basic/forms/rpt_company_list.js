/**
 * Loads all records, needed to print a report because the controller is private and cannot be accessed otherwise
 * @AllowToRunInFind
 * @public
 *
 * @properties={typeid:24,uuid:"13FB5AF4-3EB8-4BAA-B343-531EBCD7B585"}
 */
function loadAllRecords(){
	controller.loadAllRecords();
}

/**
 * Function that sorts the records based on the column name and direction (ascending or descending)
 * @param {String} columnName The column name on which we want to sort the records
 * @param {String} direction The direction of sorting, ascending or descending
 * @public 
 * @properties={typeid:24,uuid:"A9101770-6D44-4ECB-AE92-F9709F69A8AC"}
 */
function sort(columnName, direction){
	controller.sort(columnName+" "+direction);
}