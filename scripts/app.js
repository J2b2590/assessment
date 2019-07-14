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
