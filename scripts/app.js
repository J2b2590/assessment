console.log("Connected")


$(document).ready(function() {
   $("input[name='accountType']").on("click", function() {
     if (this.id == "checking") {
       $(".checkOnly").show();
       $(".cardOnly").hide();
     } else {
       $(".cardOnly").show();
       $(".checkOnly").hide();
     }
   });
 });



  $(document).ready(function() {
     $("button[name='submitPayment']").on("click", function() {
      //  console.log("submit")
       if (this.required !== false) {
         $(".requiredField").show();
        } else {
         $(".requiredField").hide();
       }
     });
   });
