function validateForm() {
    var x = document.forms["myForm"]["fname"]["feamil"]["farea"].value;
    if (x == "") {
      alert("Polje mora biti popunjeno");
      return false;
    }
  }