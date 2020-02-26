var index = 0;
$(document).ready(function () {
    
   var info = '<div class="container" id="container">\
   <div class="arrow">\
   </div>\
   <div class="hightLight">\
       <div id="yellow" name="#FFF83E" class="color"></div>\
       <div id="green" name="#91EFA4" class="color"></div>\
       <div id="blue" name="#48C6FF" class="color"></div>\
       <div id="red" name="#FF7DB9" class="color"></div>\
       <div id="orange" name="#FFC143" class="color"></div>\
   </div>\
   <input type="text" id="hiddenText" hidden>\
   <div class="note section">\
       <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\
           x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357"\
           style="enable-background:new 0 0 357 357;" xml:space="preserve">\
           <g>\
               <g id="add">\
                   <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />\
               </g>\
       </svg>\
       <span>Add to notes</span>\
   </div>\
   <div class="ask section">\
       <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\
           x="0px" y="0px" width="535.5px" height="535.5px" viewBox="0 0 535.5 535.5"\
           style="enable-background:new 0 0 535.5 535.5;" xml:space="preserve">\
           <g>\
               <g id="live-help">\
                   <path\
                       d="M446.25,0h-357c-28.05,0-51,22.95-51,51v357c0,28.05,22.95,51,51,51h102l76.5,76.5l76.5-76.5h102c28.05,0,51-22.95,51-51\
                   V51C497.25,22.95,474.3,0,446.25,0z M293.25,408h-51v-51h51V408z M346.8,211.65l-22.95,22.95c-20.399,17.85-30.6,33.15-30.6,71.4\
                   h-51v-12.75c0-28.05,10.2-53.55,30.6-71.4l30.601-33.15c10.2-7.65,15.3-20.4,15.3-35.7c0-28.05-22.95-51-51-51s-51,22.95-51,51\
                   h-51c0-56.1,45.9-102,102-102c56.1,0,102,45.9,102,102C369.75,175.95,359.55,196.35,346.8,211.65z" />\
               </g>\
           </g>\
       </svg>\
       <span>Ask your tutor</span>\
   </div>\
   <div class="translate section">\
       <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\
           x="0px" y="0px" viewBox="0 0 469.333 469.333" style="enable-background:new 0 0 469.333 469.333;"\
           xml:space="preserve">\
           <g>\
               <g>\
                   <g>\
                       <path\
                           d="M253.227,300.267L253.227,300.267L199.04,246.72l0.64-0.64c37.12-41.387,63.573-88.96,79.147-139.307h62.507V64H192\
                       V21.333h-42.667V64H0v42.453h238.293c-14.4,41.173-36.907,80.213-67.627,114.347c-19.84-22.08-36.267-46.08-49.28-71.467H78.72\
                       c15.573,34.773,36.907,67.627,63.573,97.28l-108.48,107.2L64,384l106.667-106.667l66.347,66.347L253.227,300.267z" />\
                       <path d="M373.333,192h-42.667l-96,256h42.667l24-64h101.333l24,64h42.667L373.333,192z M317.333,341.333L352,248.853\
                       l34.667,92.48H317.333z" />\
                   </g>\
               </g>\
           </g>\
       </svg>\
       <span>Translate</span>\
   </div>\
';
   $('body').append(info);
   var info = "";
   document.body.addEventListener("click", myFunction);
    
   // CLICK ON HIGHLIGHT
   $(".color").click(function(){
        var string = $("#hiddenText").val();

        document.getElementById("cuong" + (index-1).toString()).style = "background-color: " +$(this).attr('name') + ";";

        var data = {
            "studentID":"1",
             "text":string, 
             "index":"1", 
             "color":$(this).attr('name'), 
             "url": window.location.href
        };
        var xhr = new XMLHttpRequest();
        var url = "capstonebackendapi.herokuapp.com/createhighlight";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                console.log(json.email + ", " + json.password);
            }
        };
        xhr.send(data);
        // console.log(data);
        // $.ajax({
        //     type:"POST",
        //     url:"capstonebackendapi.herokuapp.com/createhighlight",
        //     dataType:"json",
        //     data:data,
        //     success:function(data){
        //         alert('Success');
        //     },
        //     error:function(){
        //         alert('Error');
        //     }
        // });

   });

})

//SHOW EXTENSION
function myFunction(e) {
    var x = window.getSelection().toString();
    if(x != "" || x != " "){
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        var newNode = document.createElement("span");
        //newNode.setAttribute("style", "background-color: pink;");
        newNode.setAttribute("id", "cuong" + index);
        range.surroundContents(newNode);
        index += 1;
    }
    if (x != "") {
        $("#hiddenText").val(x);
        $('#container').hide();
        $('#container').css({ 'top': e.pageY + 50, 'left': e.pageX, 'position': 'absolute', 'border': '1px solid black', 'padding': '5px' });
        $('#container').show();
    } else {
        if (!$('#container').is(e.target) && $('#container').has(e.target).length === 0) {
        $('#container').hide();
        }
    }
}
