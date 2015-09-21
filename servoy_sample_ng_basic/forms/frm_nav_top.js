
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param {JSFoundset} curFoundset the foundset of the child form
 * @param {Number} maxIndex the size of the table
 * 
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"270E0893-6D24-44C6-BDED-991D5D106AA8"}
 */
function nextRecord(event, curFoundset, maxIndex) {	
		curFoundset.setSelectedIndex(curFoundset.getSelectedIndex()+1);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param curFoundset
 * @param maxIndex
 *
 * @protected
 * @properties={typeid:24,uuid:"FCACA56A-6B76-4F2D-9B50-E371F139AE82"}
 */
function previousRecord(event, curFoundset, maxIndex) {
		curFoundset.setSelectedIndex(curFoundset.getSelectedIndex()-1);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {Number} curIndex The currently selected index in the foundset
 * @param {Number} maxIndex The max index in the table
 *
 * @public
 * @properties={typeid:24,uuid:"28967D3A-D308-4BA9-859A-E19DF8DA7B0D"}
 */
function setLblRecordTextAndNavigation(curIndex, maxIndex) {
	//reset the text of the label when a new record is selected
	elements.lblRecord.text = "Record: "+ curIndex + " of "+maxIndex;
	
	//enable/disable the navigation buttons depending on the selected record index
	//This code handles all possible cases:
	//case 1: curIndex == 1
	//case 2: curIndex == maxIndex
	//case 3: curIndex == 1 && curIndex ==maxIndex;
	//case 4: curIndex!=1 && curIndex != maxIndex;
	elements.btnNavLeft.enabled = curIndex !=1; 
	elements.btnNavRight.enabled = curIndex !=maxIndex;
}


/**
 * Save the changes on button Save clicked
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"94D9641D-1BB3-417F-B220-FBA17098CD21"}
 */
function btnSave(event) {
	globals.saveEdits()
	hideBtnResetFields();
}

/**
 * @properties={typeid:24,uuid:"0E2F498E-A8F5-4FB1-8447-1246CF7C5D3A"}
 */
function hideBtnResetFields()
{
	//get the names of all elements
	var allNames = elements.allnames;

	for (var i=0; i<allNames.length; i++)
	{
		//disable all editable fields
		if(allNames[i].indexOf('txt') >= 0 || allNames[i].indexOf('chk') >= 0 || allNames[i].indexOf('cb') >= 0)
		{
			//if it's a field - then change color and make not editable
			elements[allNames[i]].bgcolor = '#f0f0f0';
			elements[allNames[i]]['readOnly'] = true;
		}
	}

	elements.btnSave.visible = false;
	elements.btnCancel.visible = false;
}

/**
 * Cancel the changes on button Cancel clicked
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"D82B11AD-34A7-4FC9-98CD-695C129A0A72"}
 */
function btnCancel(event)
{
	globals.cancelEditing();
	hideBtnResetFields();
}


/**
 * @properties={typeid:24,uuid:"585078DC-E42D-4A5B-B0D1-FF69AD72D765"}
 */
function doEdit()
{
	if(!globals.isEditing()) {
		globals.startEditing();
	}
	var allNames = elements.allnames;

	for ( var i = 0 ; i < allNames.length ; i++ )
	{
		//work on fields only - starting with name "txt"
		if(allNames[i].indexOf('txt') >= 0 || allNames[i].indexOf('chk') >= 0 || allNames[i].indexOf('cb') >= 0)
		{
			//if it's a field - then change color and make editable
			elements[allNames[i]].bgcolor = '#feffe4';
			elements[allNames[i]]['readOnly'] = false;
		}
	}

	elements.btnSave.visible = true;
	elements.btnCancel.visible = true;
}


/**
 * Perform create new record.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"41B0339D-13B7-4DE7-B486-1D553C9BB6CD"}
 */
function cmdNewRecord(event) {
	forms.frm_nav_CRUD.btnAdd();
}

/**
 * @properties={typeid:24,uuid:"5380FDD7-BDF6-4A11-9C9B-2B1DE3B9FBFA"}
 */
function cmdDeleteRecord()
{
	forms.frm_nav_CRUD.btnDelete();
}

/**
 * @properties={typeid:24,uuid:"D1948F94-0D59-46F2-8DCD-BA03A026FD3C"}
 */
function cmdPrintPreview()
{
	forms.frm_nav_CRUD.btn_print();
}

/**
 * @properties={typeid:24,uuid:"A63DF650-6229-4686-88ED-4BF2E9D8098E"}
 */
function cmdShowAll()
{
	forms.frm_nav_CRUD.btnShowAll();
}
/**
 * @properties={typeid:24,uuid:"1D8FABF8-EC16-4EB8-B7D3-F26371586F86"}
 */
function sub_doDelete()
{
		controller.deleteRecord()

		//if there are no records showing - then show all
		if(controller.getMaxRecordIndex() == 0) forms.frm_nav_CRUD.btnShowAll();
}