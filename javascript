alert("Hello javascript");
oFragmentSupplier: null,
oFilter : function(){
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
  }
  this.oFragmentSupplier.open();
  

}
