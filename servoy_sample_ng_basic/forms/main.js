/**
 * @param {String} selectedItemName
 * @public
 * @doc Sets the tab in the main Tabs panel based on the selected Project in the main navigation
 * @properties={typeid:24,uuid:"BC030D9C-1C93-46D7-ACFD-398AADC28955"}
 */
function setSelectedTabDetailsOverviewSolution(selectedItemName)
{
	for(var i=0; i<=elements.tabsDetailsOverviewSolution.getMaxTabIndex(); i++){
		var tabName = elements.tabsDetailsOverviewSolution.getTabNameAt(i);
		if(tabName.equalsIgnoreCase('tab'+selectedItemName)) {
			elements.tabsDetailsOverviewSolution.tabIndex = i;
		}
	}
}
