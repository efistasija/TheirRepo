
/**
 * Open the currently selected order in the main details overview form of orders (frm_orders)
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"EC93C46D-405A-4528-9142-959DE6360D49"}
 */
function btnOpenOrder(event) {
	//load the record based on the current id
	forms.frm_orders.selectOrdersRecord(order_id);
	//change the selected solution type in the main navigation to 'Orders'
	forms.lst_solution_navigation.setSelectedIndex(scopes.constants.CONST_ORDERS_NAME);
}