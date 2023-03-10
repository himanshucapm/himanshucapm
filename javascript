alert("Hello javascript");
oFragmentSupplier: null,
selectedFieldId: null,
oFilter : function(oEvent){

  this.selectedFieldId = oEvent.getSource().getId();
  if(!thisofragmentSupplier){
    this.oFragmentSupplier = new sap.ui.xmlfragment("ibm.fin.ar.fragments.popup");
    this.getView().addDependent(this.oFragmentSupplier);
    this.oFragmentSupplier.bindAggregation("items",{
     path: '/supplier',
     template: new sap.m.StandardListItem({
        title: "{name}",
        description: "{city}",
        icon: "sap-icon://supplier"
     
     })
  
  });
  
  this.oFragmentSupplier.attachConfirm(this.onConfirm).bind(this);
  }
  this.oFragmentSupplier.open();
}

onConfirm: function(oEvent){

var selectedItem = oEvent.getParameter("selectedItem");
var citySelected = oEvent.getLabel();
sap.ui.getCore().byId(this.selectedFieldId).setValue(citySelected);

}
