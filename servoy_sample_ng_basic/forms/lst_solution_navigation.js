
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"A3EF7426-8C62-4AA8-8CA0-59906BBCEA07"}
 */
function onShow(firstShow, event) {
		foundset.setSelectedIndex(1);
}

/**
 * Handle record selected.
 *
 * @public
 *
 * @properties={typeid:24,uuid:"C3C948FF-CF1E-4184-90A9-E2638B8B7B6A"}
 */
function onRecordSelection() {
	forms.lst_nav_main.enableTab(foundset.item_name);
	forms.main.setSelectedTabDetailsOverviewSolution(foundset.item_name);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {String} resourceName The name of the selected record
 * @public
 * @properties={typeid:24,uuid:"2D8DCB3F-82BD-4EF4-81C0-6EBD87F9C039"}
 * @AllowToRunInFind
 */
function setSelectedIndex(resourceName){
	//duplicate the foundset to find the record with item_name = resourceName
	var duplicateFoundset = foundset.duplicateFoundSet();
	
	var searchSuccess = false;
	if(duplicateFoundset.find()) {
		duplicateFoundset.item_name = resourceName;
		searchSuccess = duplicateFoundset.search();
	}
	
	//if you found the resource, select it in the original foundset by using the record primary key nav_id
	if(searchSuccess){
		foundset.selectRecord(duplicateFoundset.nav_id);
	}
}

/**
 * @return {String} the name of the resource shown in the navigation menu
 * @public
 * @properties={typeid:24,uuid:"C8739D51-E29E-4DDF-9B16-F8F8428C6582"}
 */
function getSelectedRecord(){
	return foundset.item_name;
}