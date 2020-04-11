// GET USER INFO
var title= ""; 
chrome.storage.sync.get("key", function (obj) {
  // if(obj !== null){
  //     $('#getStudentName').val(obj); 
  // }
  var objectKey = obj.key;
  var studentId = "";
  if (objectKey !== null) {
      $('.info').hide();
      $('.login').show();
      studentId = objectKey.user.profile;
      getStudentId = studentId;
      console.log(getStudentId);
      //GET STUDENT INFOMATION
      $.ajax({
          type: "GET",
          url: "https://capstonebackendapi.herokuapp.com/getstudentbyid/" + studentId,
          success: function (data) {
            debugger;
              $('#titlePopup').html(`Hi, how are you today?`);
              $('#userName').html(data.name);
              $('#userEmail').html(data.email);
              $('#p1').attr("src", data.avatar);
              $('.login').hide();
              $('.info').show();
          },
          error: function (data) {
            
          }
      });

      //GET FOLDER BY URL
      $.ajax({
          type: "GET",
          url: "https://capstonebackendapi.herokuapp.com/getFolderByUrl/" + getStudentId + "/" + encodeURIComponent(window.location.href),
          success: function (data) {
              getFolderByURL = data;
          },
          error: function (data) {
              //alert("failed");
          }
      });
  }
  else {
    $('#titlePopup').html("Sign in to noteit");
    $('#infoStudent').html("Connect to the most collaborative in-material note-taking and Q&A experience");
    $('#buttonLogin').show();
    $('#p1').hide();
  }
});