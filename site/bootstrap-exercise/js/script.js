// $(function () { 
//   $("#mynavbar").blur(function (event) {
//       $("#navbarSupportedContent").removeClass("show");
//   });
  // $("#navbar-button").click(function (event) {
  //   $("#mynavbar").focus();
  // });
// });

// $(document).on('click','body:not(.navbar)',function(){
// 	$("#navbarSupportedContent").removeClass("show");
// 	return;
// })


$(function () {
  $("body:not(header)").click(function (event) {
    $("#navbarSupportedContent").removeClass("show");
  });
});