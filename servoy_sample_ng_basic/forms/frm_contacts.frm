dataSource:"db:/udm/contacts",
encapsulation:60,
extendsID:"5C820362-78D5-47B9-B053-12D84B9BAED8",
items:[
{
dataProviderID:"contact_type_id",
displayType:2,
editable:false,
location:"205,414",
name:"cbContactType",
size:"165,20",
typeid:4,
uuid:"00F19F2C-DD58-490D-B1ED-61D1A84B2EE7",
valuelistID:"745000C5-3612-4076-98C3-64723B2F9EF2"
},
{
anchors:12,
dataProviderID:"mail_use_company",
displayType:4,
location:"519,716",
name:"chkCompanyNameOnMailLabel",
size:"450,20",
text:"Use company name on mail label",
typeid:4,
uuid:"055BF406-9CFC-4164-BB9F-CE94E26AAD8F"
},
{
displaysTags:true,
extendsID:"811E916B-E90F-4CE2-A6C1-4B357BA73B48",
text:"Contact Info - %%name_first%% %%name_last%%",
typeid:7,
uuid:"095D0FE1-4E33-4F54-90E4-9CF0352B16E1"
},
{
dataProviderID:"company_id",
location:"547,187",
name:"txtCompanyName",
size:"421,20",
typeid:4,
uuid:"0CC2240F-62F2-4BCC-80BF-170EDE546873",
valuelistID:"375BF2E4-2A61-4C62-8CE0-A41568897AEC"
},
{
location:"323,160",
name:"lblLastName",
size:"90,20",
text:"Last Name",
typeid:7,
uuid:"0F4A4415-AB3C-4A72-98CB-AA188D93A127"
},
{
location:"18,247",
name:"lblEmail",
size:"80,20",
text:"Email",
typeid:7,
uuid:"0FE8FEF7-33BF-4D34-B628-67E3D013F0F5"
},
{
anchors:11,
dataProviderID:"mailing_address_label",
displayType:1,
location:"519,244",
name:"txtContactMilingAddress",
size:"450,140",
typeid:4,
uuid:"0FFBDF90-2B78-4E25-87D1-806792EF20B4"
},
{
dataProviderID:"phone_direct",
location:"19,361",
name:"txtDirectPhone",
size:"165,20",
typeid:4,
uuid:"109F218A-017C-48A7-872B-3E777B390FC7"
},
{
anchors:15,
items:[
{
containsFormID:"764DA5C3-16E5-41FE-A003-A78A263DE1BF",
location:"493,460",
relationName:"contacts_to_addresses$lst_contacts_company_addresses",
text:"tab_1",
typeid:15,
uuid:"D8B24220-A818-4208-A2DF-09915A38BF75"
}
],
location:"519,391",
name:"tabs_availableAddresses",
size:"450,312",
tabOrientation:-1,
typeid:16,
uuid:"1632766F-8C18-40E8-8E38-D6BC980AB787"
},
{
location:"519,164",
name:"lblCompanyName",
size:"120,20",
text:"Company Name",
typeid:7,
uuid:"2056C099-D63E-4DBD-8CD7-DC09223F5128"
},
{
anchors:11,
background:"#808080",
location:"519,158",
size:"450,2",
typeid:7,
uuid:"3A47A0FE-3E87-4A44-8E74-E4992BBC4164"
},
{
borderType:"EmptyBorder,0,0,0,0",
imageMediaID:"37233563-5DEF-4F1B-9EF7-32EC2B58ECD9",
location:"517,187",
name:"btnShowCompany",
onActionMethodID:"F93438B7-459F-40F0-B5AE-F54DA6CB8C2A",
size:"30,20",
styleClass:"buttonWithImage",
toolTipText:"View company details",
typeid:7,
uuid:"445D845C-D601-4AAE-9C29-4E38C67E8F20"
},
{
location:"205,337",
name:"lblMobile",
size:"80,20",
text:"Mobile",
typeid:7,
uuid:"4606CE47-D4FD-42C0-AFB2-32ECE765F20C"
},
{
location:"18,394",
name:"lblDirectFax",
size:"80,20",
text:"Direct Fax",
typeid:7,
uuid:"48CF484A-15BA-4E93-971E-24D054B3354D"
},
{
background:"#808080",
foreground:"#ffffff",
horizontalAlignment:0,
location:"18,137",
name:"lblPersonalInfo",
size:"109,20",
text:"Personal Info",
typeid:7,
uuid:"50D49CBD-71F2-4EB5-BE3B-CCA2480431CC"
},
{
background:"#808080",
foreground:"#ffffff",
horizontalAlignment:0,
location:"519,138",
name:"lblCompanyInfo",
size:"116,20",
text:"Company Info",
typeid:7,
uuid:"53A2FDBD-5E81-4F59-938B-90FCCBE51677"
},
{
location:"18,337",
name:"lblDirectPhone",
size:"100,20",
text:"Direct Phone",
typeid:7,
uuid:"5D3346D3-715D-46C0-97FF-55FAD1AB5F4E"
},
{
dataProviderID:"name_first",
location:"18,179",
name:"txtFirstName",
size:"140,20",
typeid:4,
uuid:"6787EEA3-BE73-40BE-BC3E-4CEAEB1E54DB"
},
{
anchors:3,
background:"#808080",
foreground:"#ffffff",
horizontalAlignment:0,
location:"842,111",
size:"45,20",
text:"Status",
typeid:7,
uuid:"6D0D6434-7201-4971-9351-835EFD56E6A3"
},
{
background:"#808080",
location:"18,331",
size:"450,2",
typeid:7,
uuid:"6FE1AADD-E08F-45AC-B8E7-24581CA1DA02"
},
{
anchors:13,
dataProviderID:"contact_notes",
displayType:1,
location:"18,479",
name:"txtNotes",
size:"450,307",
typeid:4,
uuid:"72DD7C5E-A4A3-4702-9089-04361E1324DC"
},
{
location:"18,204",
name:"lblTitle",
size:"80,20",
text:"Title",
typeid:7,
uuid:"883A0831-7B1F-4914-BD58-A8F88ECB1A42"
},
{
dataProviderID:"name_last",
location:"324,180",
name:"txtLastName",
size:"140,20",
typeid:4,
uuid:"8C6E6C40-B0AD-4760-9AAD-D1F65322F51D"
},
{
dataProviderID:"job_title",
displayType:2,
editable:false,
location:"18,223",
name:"cbTitle",
size:"450,20",
typeid:4,
uuid:"8E5354AC-B29F-4063-B724-33D0C0AF8031",
valuelistID:"B9F44FD3-5891-486C-B18C-D714DCC35145"
},
{
background:"#808080",
foreground:"#ffffff",
horizontalAlignment:0,
location:"18,457",
name:"lblNotes",
size:"80,20",
text:"Notes",
typeid:7,
uuid:"901A48E3-E037-4886-9A1D-C9CC4C579F40"
},
{
background:"#808080",
location:"18,477",
size:"450,2",
typeid:7,
uuid:"98B83A8C-761D-40D5-9EE2-A50768A478BB"
},
{
location:"170,161",
name:"lblMiddleName",
size:"110,20",
text:"Middle Name",
typeid:7,
uuid:"A08686A5-C491-4D22-8D49-4F4012ED548E"
},
{
dataProviderID:"fax_direct",
location:"18,414",
name:"txtDirectFax",
size:"165,20",
typeid:4,
uuid:"A487BBCC-203D-459D-BC09-35F7DF9A84EB"
},
{
dataProviderID:"name_middle",
location:"170,181",
name:"txtMiddleName",
size:"140,20",
typeid:4,
uuid:"B2A51637-33C7-449E-B6FE-13E6374C3ABE"
},
{
anchors:12,
dataProviderID:"mail_use_country",
displayType:4,
location:"519,746",
name:"chkCountryOnMailLabel",
size:"450,20",
text:"Use country on mail label",
typeid:4,
uuid:"B787B5E6-10F5-47C4-91CD-CEE05C8FC177"
},
{
dataProviderID:"phone_cell",
location:"205,361",
name:"txtMobile",
size:"165,20",
typeid:4,
uuid:"B8CEDB88-6541-4A12-828E-82E7299D944A"
},
{
borderType:"EmptyBorder,0,0,0,0",
imageMediaID:"0E4C041B-8AF0-4A3F-9CDF-EBD9841BE21D",
location:"18,265",
name:"btnSendEmail",
onActionMethodID:"8885710C-9972-4822-9FA7-3404B4326CA5",
size:"30,20",
typeid:7,
uuid:"BFAF146C-19C6-4FE8-ACF8-2D508234256B"
},
{
location:"205,395",
name:"lblContactType",
size:"100,20",
text:"Contact Type",
typeid:7,
uuid:"C64CE3A8-745C-4BF9-B445-9ECFD1CC1D23"
},
{
background:"#808080",
location:"18,157",
size:"450,2",
typeid:7,
uuid:"C70E28BE-AF8B-42E6-AD77-274D724B5306"
},
{
height:800,
partType:5,
typeid:19,
uuid:"CC0D9073-EC13-440F-863D-F48025F88EFF"
},
{
location:"18,159",
name:"lblFirstName",
size:"90,20",
text:"First Name",
typeid:7,
uuid:"D0619B66-6A70-4BCE-AFC1-F5B460EC74B7"
},
{
location:"519,221",
size:"200,20",
text:"Contact Mailing Address",
typeid:7,
uuid:"D8DBBFB0-C4A8-4192-9E82-0F5A11D7F001"
},
{
anchors:3,
dataProviderID:"is_active",
displayType:2,
editable:false,
location:"887,111",
name:"cbStatus",
size:"96,20",
typeid:4,
uuid:"E62DFC61-BC03-4A2E-8E17-CA3FCB84E389",
valuelistID:"7B25DB58-7F68-478F-AED3-7F6FE9F9647D"
},
{
dataProviderID:"email",
location:"46,264",
name:"txtEmail",
size:"423,20",
typeid:4,
uuid:"EABA1C3D-ECA8-4F72-AEC1-DBA79596CCFE"
},
{
background:"#808080",
foreground:"#ffffff",
horizontalAlignment:0,
location:"18,311",
name:"lblContactInfo",
size:"90,20",
text:"Contact Info",
typeid:7,
uuid:"ECAF545E-FEAD-4622-913A-335CCF6A6FC7"
}
],
name:"frm_contacts",
onDeleteRecordCmdMethodID:"12B90F52-90F4-466F-A8D9-0D981CBA9BB8",
onNewRecordCmdMethodID:"81470A9C-AE51-4688-A300-13298B5324FD",
onRecordSelectionMethodID:"E09BD800-92D2-4303-96B9-4A7388FE4040",
onShowAllRecordsCmdMethodID:"F33DEAE2-827F-4E7B-B25B-6F6D337614F2",
onShowMethodID:"8A7DF4EC-FFD8-4197-AC6C-99C4B0896534",
showInMenu:true,
size:"1000,440",
titleText:null,
typeid:3,
uuid:"66BD1071-7589-4C8D-B250-715C010201A2"