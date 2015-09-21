/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"AE78A47B-1F0E-4A15-9EC2-28D7B61769D2"}
 */
function nextRecord(event) {
	_super.nextRecord(event, foundset, databaseManager.getTableCount(foundset));
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"DE62AD5A-B5B7-4C57-8CB9-9F12371BB4DF"}
 */
function previousRecord(event) {
	_super.previousRecord(event, foundset, databaseManager.getTableCount(foundset));
}

/**
 * Handle record selected.
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"6162F0ED-A9A6-47A5-8D9A-A0CDAAB4075B"}
 */
function onRecordSelection() {
	_super.setLblRecordTextAndNavigation(foundset.getSelectedIndex(),databaseManager.getTableCount(foundset));
	
	//setup the special tooltips on the addresses
	var billTT = 'Click the EDIT button to set the billing address'
	var shipTT = 'Click the EDIT button to set the shipping address'

	if(bill_address_id)
	{
		billTT = orders_to_companies.company_name + '\n' + orders_to_addresses$bill_address.address_display_calc
		billTT = '<html>' + utils.stringReplace(billTT, '\n', '<br>') + '</html>'
	}
	if(ship_address_id)
	{
		shipTT = orders_to_companies.company_name + '\n' + orders_to_addresses$ship_address.address_display_calc
		shipTT = '<html>' + utils.stringReplace(shipTT, '\n', '<br>') + '</html>'
	}

	elements.cbBillingAddress.toolTipText = billTT
	elements.cbShipAddress.toolTipText = shipTT

	sub_slideLabels();
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSFoundSet} curFoundset Replace the default foundset with the form foundset
 *
 * @properties={typeid:24,uuid:"053B3562-A96E-4603-9C1F-22BC26FBD547"}
 */
function loadRecords(curFoundset) {
	controller.loadRecords(curFoundset);
}
/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param {Number} curOrderID the id of the selected order in a related form
 *
 * @properties={typeid:24,uuid:"AC524B8F-6C55-44AD-9BD3-A31DDE7A1B84"}
 */
function selectOrdersRecord(curOrderID) {
	if(curOrderID) {
		foundset.selectRecord(curOrderID);
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"6354BC68-29B2-45C0-B2F8-C20EF0331CB6"}
 */
function btnOpenCompany(event) {
	//load the record based on the current id
	forms.frm_contacts.selectContactsRecord(contact_id);
	//change the selected solution type in the main navigation to 'Contacts'
	forms.lst_solution_navigation.setSelectedIndex(scopes.constants.CONST_CONTACTS_NAME);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"5EECC715-C1DA-45A2-9070-BDAF87596BFA"}
 */
function btnOpenContact(event) {
	//load the record based on the current id
	forms.frm_contacts.selectContactsRecord(contact_id);
	//change the selected solution type in the main navigation to 'Contacts'
	forms.lst_solution_navigation.setSelectedIndex(scopes.constants.CONST_CONTACTS_NAME);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"B69F4EA3-9E4D-405F-8CEE-4111FF4DDEA7"}
 */
function btnSave(event) {
	//check to make sure all the fields are filled out
	if(!bill_address_id){
		globals.DIALOGS.showErrorDialog("Empty billing address","You must choose a billing address.");
	}
	if(!ship_address_id) {
		globals.DIALOGS.showErrorDialog("Empty shipping address","You must choose a shipping address.");
	}
	if(!contact_id) {
		globals.DIALOGS.showErrorDialog("Empty contact","You must choose a contact.");
	}
	if(!company_id) {
		globals.DIALOGS.showErrorDialog("Empty company","You must choose a company.");
	}
	if(!order_number) {
		globals.DIALOGS.showErrorDialog("Empty order number","There must be an order number.");
	}
	if(!order_date) {
		globals.DIALOGS.showErrorDialog("Empty order date","There must be an order date.");
	}
	_super.btnSave(event);
	hideBtnResetFields();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"D315C9F2-575E-4FD1-A7F6-FBB75B1C43B0"}
 */
function btnCancel(event) {
 	_super.btnCancel(event);
	hideBtnResetFields();

}

/**
 * @properties={typeid:24,uuid:"5e10a4b0-3efa-4903-98d3-151c8c80eec0"}
 */
function btnShowBillAddr()
{
	var title = "Order " + order_number + " Bill Address";
	var message = orders_to_companies.company_name + '\n' + orders_to_addresses$bill_address.address_display_calc + '\n (You can select the text and copy it to the clipboard)';
	globals.DIALOGS.showInfoDialog(title,message,'Done');
}

/**
 * @properties={typeid:24,uuid:"ae55cbd6-2caf-4895-b698-9dd9312ed56f"}
 */
function btnShowShipAddr()
{
	var title = "Order " + order_number + " Ship Address";
	var message = orders_to_companies.company_name + '\n' + orders_to_addresses$ship_address.address_display_calc + '\n (You can select the text and copy it to the clipboard)';
	globals.DIALOGS.showInfoDialog(title,message,'Done');
}

/**
 * @properties={typeid:24,uuid:"6B2844CE-ECE7-4807-9D27-5B6FAC4940BC"}
 */
function doEdit()
{
	_super.doEdit()

	//make sure that we set this to 0 or if they add an item - the dialog will commit the entire transaction
	globals.okToCommit = 0;

	//hide the 'jump' buttons
	elements.btnShowCompany.visible = false;
	elements.btnShowContact.visible = false;
	elements.btnShowBillAddr.visible = false;
	elements.btnShowShipAddr.visible = false;

	//enable the comboboxes, except for the company name
	elements.cbBillingAddress.enabled = true;
	elements.cbContact.enabled = true;
	elements.cbShipAddress.enabled = true;
	elements.cbShipVia.enabled = true;
	elements.cbStatus.enabled = true;
	
	//make the items editable
	sub_slideLabels();

}

/**
 * @properties={typeid:24,uuid:"07AFAD50-BCC8-412B-9F8E-EDB786317A79"}
 */
function evt_companyChange()
{
	contact_id = null
	bill_address_id = null
	ship_address_id = null
}

/**
 * @properties={typeid:24,uuid:"252d0576-3d54-4591-866c-402dcf81df07"}
 */
function hideBtnResetFields()
{
	_super.hideBtnResetFields();

	//enable the 'jump' buttons
	elements.btnShowCompany.visible = true;
	elements.btnShowContact.visible = true;
	elements.btnShowBillAddr.visible = true;
	elements.btnShowShipAddr.visible = true;

	//disable the comboboxes
	elements.cbBillingAddress.enabled = false;
	elements.cbCompany.enabled = false;
	elements.cbContact.enabled = false;
	elements.cbShipAddress.enabled = false;
	elements.cbShipVia.enabled = false;
	elements.cbStatus.enabled = false;

	sub_slideLabels();

	//make sure that we set this to 1 so the next call to the dialog will commit the entire transaction
	globals.okToCommit = 1;
}

/**
 * @properties={typeid:24,uuid:"9296d2ff-65b9-481e-8203-4e1aaa5c6f56"}
 */
function onLoad()
{
	//replace some valuelist "-" stuff if we're in the web client
		globals.setupWcValueList('order_shipVia');
}


/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"71B36F4D-A643-49F0-9EC5-542EF6AA2FC6"}
 */
function onShow(firstShow, event) {
	//if we are not in edit mode, disable fields that are editable
	if(!globals.isEditing()) {
		hideBtnResetFields();
	}
}

/**
 * @properties={typeid:24,uuid:"42A6BAE3-35BC-478F-8149-A1D8316B9B69"}
 */
function sub_setNewOrderNumber()
{
	//set the next order number
	if(databaseManager.getFoundSetCount(foundset) == 0)
	{
		//never been an order number
		order_number = 1000;
	}
	else
	{
		//sql query to get the highest invoice number = then add 1
		var query = 'select order_number from orders order by order_number desc';
		var ds = controller.getDataSource().split('/');
		var dataset = databaseManager.getDataSetByQuery(ds[1], query, null, 1);
		order_number = dataset.getValue(1, 1) + 1;
	}
}

/**
 * @properties={typeid:24,uuid:"ca2ec5ef-80b2-4512-88d7-6fc3db05b5c3"}
 */
function sub_slideLabels()
{
	//if the order is closed (is_active == 1) - don't show the add or edit buttons
	if(!globals.isEditing() || is_active == 0)
	{
		application.output("Not editing");
		forms.lst_order_items.showHideAddShowButton(false);
	}
	else
	{
		application.output("Editing");
		forms.lst_order_items.showHideAddShowButton(true);
	}
}

/**
 * @properties={typeid:24,uuid:"18135df0-2a18-42ea-844f-e483c023e697"}
 */
function validate_autoEnter()
{
	sub_setNewOrderNumber();
	order_date = new Date();
}

/**
 * @properties={typeid:24,uuid:"fe82eb98-b3d7-4064-83e1-b499dd1a8d26"}
 */
function validate_beforeDelete()
{
	return '0';
}

/**
 * @public
 * @properties={typeid:24,uuid:"B9EF64BC-A31D-4F51-8467-BE22AA69C3C2"}
 */
function printDefault()
{
	rpt_printThisOrder();
}

/**
 * @properties={typeid:24,uuid:"c51f7a81-8193-4f9f-9edb-b2c9274896cf"}
 */
function rpt_printOrderReport()
{
	//load the related items for this order
	forms.rpt_order_form.controller.loadRecords(orders_to_order_items);

	forms.rpt_order_month.controller.sort('order_month_year asc, orders_to_companies.company_name asc');

	globals.printRoutine('rpt_order_form', null);
}

/**
 * @properties={typeid:24,uuid:"6213972b-f0db-4996-8be5-b9aca7398efd"}
 */
function rpt_printThisOrder()
{
	//load the related items for this order
	forms.rpt_order_form.controller.loadRecords(orders_to_order_items);

	globals.printRoutine('rpt_order_form', null);
}

/**
 * @properties={typeid:24,uuid:"BEC30A51-D157-47C4-82BC-F04948410FF7"}
 */
function getOrderId() {
	return order_id;
}
