/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"1B475CA2-AA24-4B01-A9A4-D893A6A68751"}
 */
var sqlQuery = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7BC3BABF-EE58-416D-8D44-8E7D626C8FEC"}
 */
var sqlQueryResult = '';
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"CED3DBBA-186C-4DD3-BFEC-D4BD3D216D9C"}
 */
function btnPerformQuery(event) {
	
	if(!sqlQuery)
	{
		//no query entered
		globals.DIALOGS.showErrorDialog('Query field empty','No SQL query entered.','OK');
		return;
	}

	//there is a query - so try to run it
	//Get a dataset based on query
	var maxReturnedRows = 1000;//useful to limit number of rows
	var sourceName = foundset.getDataSource();
	var srvname = sourceName.split('/');
	var dataset = databaseManager.getDataSetByQuery(srvname[1], sqlQuery, null, maxReturnedRows);
	var err = dataset.getException();

	if(err != null && err.getMessage() != undefined)
	{
		globals.DIALOGS.showErrorDialog("Query error",'An error occurred with your query:\n\n' + err.getMessage(),"OK");
		return;
	}

	//HTML to display the query results
	var myHTML = '<html><body>';

	sqlQueryResult = myHTML + '<b>QUERY: </b>' + sqlQuery + '<br><br>' + dataset.getAsHTML() + '</body></html>';
}
