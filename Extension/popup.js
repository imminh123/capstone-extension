// GET USER INFO
var title= ""; 
chrome.storage.sync.get("key", function (obj) {
  // if(obj !== null){
  //     $('#getStudentName').val(obj); 
  // }
  var objectKey = obj.key;
   if (objectKey) {
    $('.login').hide();
    $('.info').show();
    $('#userName').html(objectKey.user.name);
    $('#userEmail').html(objectKey.user.email);
    $('#p1').attr("src", objectKey.user.avatar);
  }
  else {
    $('.info').hide();
    $('.login').show();
  }
});
$("#buttonLogin").click(function() {
  window.localStorage.removeItem("token");
  window.localStorage.removeItem("user");
});