alert("Hello javascript");
oFragmentSupplier: null,
oFilter : function(){
  if(!thisofragmentSupplier){
    this.oFragmentSupplier = new sap.ui.xmlfragment("ibm.fin.ar.fragments.popup");
  }
  this.oFragmentSupplier.open();

}
