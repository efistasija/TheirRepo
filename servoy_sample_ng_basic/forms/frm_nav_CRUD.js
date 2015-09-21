/**
 * @properties={typeid:24,uuid:"d3d6fab2-3de2-4ddb-a2aa-a4082de2b0d5"}
 */
function btnAdd()
{
	//see what form is front-most i.e. active in the main panel
	var selectedRecord = forms.lst_solution_navigation.getSelectedRecord().toLowerCase();
	//to account for the form name for customers actually being companies
	if(selectedRecord.equalsIgnoreCase('customers')){
		selectedRecord = 'companies';
	}
	
	var frm = 'frm_'+ selectedRecord;

	//if there's no transaction, start one - so they can "cancel"
	if(!globals.isEditing()){
		globals.startEditing();
	}

	//make a new record
	forms[frm].controller.newRecord(true);

	//see if there is an auto-enter method to be performed on that form
	if(forms[frm].validate_autoEnter != undefined){ 
		forms[frm].validate_autoEnter();
	}

	//ALL forms must have a method "doEdit" for this to work
	forms[frm].doEdit();

	//tell the first field in the tab order to receive focus
	controller.focusFirstField();
}

/**
 * @properties={typeid:24,uuid:"1d2a4133-4be9-4f3b-a2ed-e645df77eab9"}
 */
function btnDelete()
{
	//see what form is front-most
	var selectedRecord = forms.lst_solution_navigation.getSelectedRecord().toLowerCase();
	//to account for the form name for customers actually being companies
	if(selectedRecord.equalsIgnoreCase('customers')){
		selectedRecord = 'companies';
	}
	
	var frm = 'frm_'+ selectedRecord;
	
	if(forms[frm].validate_beforeDelete() != 0){
		return;
	}

	var msg = forms[frm].delete_text;

	if(!msg) {
		msg = 'Are you sure you want to delete this record?';
	}

	//show a warning dialog
	var answer = globals.DIALOGS.showWarningDialog('Delete record',msg,'Cancel', 'Delete');
	//if the answer is 'Delete', delete the record
	if(answer.equalsIgnoreCase('Delete')) {
		forms[frm].sub_doDelete();
	}
}

/**
 * @properties={typeid:24,uuid:"cf01232d-9929-4efc-a65c-bc900874ddd7"}
 */
function btnEdit()
{
	//only do edit if there is no existing transaction
	if(!globals.isEditing())
	{
		//see what form is front-most
		var selectedRecord = forms.lst_solution_navigation.getSelectedRecord().toLowerCase();
		//to account for the form name for customers actually being companies
		if(selectedRecord.equalsIgnoreCase('customers')){
			selectedRecord = 'companies';
		}
		
		var frm = 'frm_'+ selectedRecord;
		//ALL forms must have a method "doEdit" for this to work
		forms[frm].doEdit();

		//tell the first field in the tab order to receive focus
		forms[frm].controller.focusFirstField();
	}
}

/**
 * @properties={typeid:24,uuid:"c8282890-992f-49f1-bd3f-91096804b32b"}
 */
function btnPrint()
{
	//see what form is front-most
	var selectedRecord = forms.lst_solution_navigation.getSelectedRecord().toLowerCase();
	//to account for the form name for customers actually being companies
	if(selectedRecord.equalsIgnoreCase('customers')){
		selectedRecord = 'companies';
	}
	
	var frm = 'frm_'+ selectedRecord;

	//execute the "print_default" method on each form
	forms[frm].printDefault();
}

/**
 * @public
 * @properties={typeid:24,uuid:"108bc665-1370-4db2-bb62-de30e0fcfd80"}
 * @AllowToRunInFind
 */
function btnShowAll()
{
	//see what form is front-most
	var selectedRecord = forms.lst_solution_navigation.getSelectedRecord().toLowerCase();
	//to account for the form name for customers actually being companies
	if(selectedRecord.equalsIgnoreCase('customers')){
		selectedRecord = 'companies';
	}
	
	var frm = 'frm_'+ selectedRecord;
	var frm2 = utils.stringReplace(frm, 'frm', 'lst');

	//load all records
	forms[frm].controller.loadAllRecords();
	forms[frm2].controller.loadAllRecords();
	forms[frm2].btn_sortAsc();

	//hide the "show all" button
	sub_hideShowAll();
}

/**
 * @properties={typeid:24,uuid:"59d82235-78c2-4567-b3f3-ea732c1e7424"}
 */
function onShow()
{
	//see what form is front-most
	var selectedRecord = forms.lst_solution_navigation.getSelectedRecord().toLowerCase();
	//to account for the form name for customers actually being companies
	if(selectedRecord.equalsIgnoreCase('customers')){
		selectedRecord = 'companies';
	}	
	var frm = 'frm_'+ selectedRecord;
	
	//see if the record status has as "(" in it - if so, it's a foundset
	if(databaseManager.getTableCount(forms[frm].foundset) > databaseManager.getFoundSetCount(forms[frm].foundset))
	{
		sub_showShowAll();
	}
	else
	{
		sub_hideShowAll();
	}
}


/**
 * @properties={typeid:24,uuid:"6de17789-f4fa-457b-86d3-d33e5228b4c1"}
 */
function sub_hideShowAll()
{
	elements.btnReload.visible = false;
	elements.lblReload.visible = false;
	elements.lblGrDivider.visible = false;
}

/**
 * @public
 * @properties={typeid:24,uuid:"c9e82da8-d1b8-4fea-8c16-dec55532fe95"}
 */
function sub_showShowAll()
{
	elements.btnReload.visible = true;
	elements.lblReload.visible = true;
	elements.lblGrDivider.visible = true;
}
