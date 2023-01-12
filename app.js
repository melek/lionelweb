/* Lionelweb.com Javascript

/* 0. Debugging Variable 
************************/
var ldg_debug = {
  logLevel: 1,
  log: function (msg) {
    if (ldg_debug.logLevel > 0) {
      console.log(msg);
    }
  }
};

ldg_debug.log("Logging Level " + ldg_debug.logLevel + " Enabled!");

/* 1. Portolio Accordian Functionality
**************************************/
var detailLabels = document.querySelectorAll("label.details");
ldg_debug.log("detailLabels = " + detailLabels);

for (var i = 0; i < detailLabels.length; i++) {        
  ldg_debug.log("detailLabels[" + i + "] = " + detailLabels[i]);
  if(detailLabels[i].hasAttribute("for")) {    
    detailLabels[i].onclick = function(e) {      
      e.preventDefault();      
      parentInput = this.control;
      parentInput.checked = !parentInput.checked;
      parentInputName = parentInput.getAttribute("name");      
      if(parentInput.checked) {
        ldg_debug.log("Checked a details input for " + parentInputName);
        detailsActive = document.querySelectorAll("label.details__toggler--active");
        
        for(var j = 0; j < detailsActive.length; j++) {
          if(detailsActive[j].control.getAttribute("name") == parentInputName)
          {
            detailsActive[j].classList.remove("details__toggler--active");
          }
        }

        this.classList.add("details__toggler--active");
      }
      else {
        ldg_debug.log("Unchecked a details input for " + parentInputName);
        this.classList.remove("details__toggler--active");
      }
    };
  }
}
