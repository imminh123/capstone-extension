$(document).ready(function () {
   var info = '<div class="container" id="container"\
style="display: none;background-color:white; width: 400px;border-radius: 10px;border: 1px solid #999;font-family: Arial, Helvetica, sans-serif;">\
<ul class="tabs" style="margin: 0px;padding: 0px;list-style: none;">\
   <li class="tab-link current" data-tab="tab-1"\
      style="background: none rgb(255, 244, 149); color: rgb(34, 34, 34); display: inline-block; padding: 10px 15px; cursor: pointer; border-radius: 10px;">\
      Highlight</li>\
   <li class="tab-link" data-tab="tab-2"\
      style="background: none;color: #222;display: inline-block;padding: 10px 15px;cursor: pointer;">Ask</li>\
   <li class="tab-link" data-tab="tab-3"\
      style="background: none;color: #222;display: inline-block;padding: 10px 15px;cursor: pointer;">Note</li>\
   <li class="tab-link" data-tab="tab-4"\
      style="background: none;color: #222;display: inline-block;padding: 10px 15px;cursor: pointer;">Translate\
   </li>\
</ul>\
<div id="tab-1" class="tab-content current"\
   style="display: inherit; background-color: rgb(255, 244, 149); border-radius: 10px; padding: 15px;">\
   <small>Write down your note here</small>\
   <input id="blackText" type="text" style="display: block;width: 100%;height: 100px;margin-top: 15px;">\
</div>\
<div id="tab-2" class="tab-content"\
   style="background-color: #FFF495;border-radius: 10px;display: none;padding: 15px;">\
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est\
   laborum.\
</div>\
<div id="tab-3" class="tab-content"\
   style="background-color: #FFF495;border-radius: 10px;display: none;padding: 15px;">\
   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
   Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\
</div>\
<div id="tab-4" class="tab-content"\
   style="background-color: #FFF495;border-radius: 10px;display: none;padding: 15px;">\
   Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\
   exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\
</div>\
</div>';
   $('body').append(info);
   var info = "";
   $('ul.tabs li').click(function () {
      var tab_id = $(this).attr('data-tab');

      $('ul.tabs li').css({ "background": "none", "color": " #222", "display": "inline-block", "padding": "10px 15px", "cursor": "pointer" });
      $('ul.tabs li').removeClass('current');
      $('.tab-content').css({ "background-color": "#FFF495", "border-radius": "10px", "display": "none", "padding": "15px" });
      $('.tab-content').removeClass('current');
      $(this).css({ "background-color": "#FFF495", "border-radius": "10px", "color": "#222" });
      $(this).addClass('current');
      $("#" + tab_id).css({ "display": "inherit" });
      $("#" + tab_id).addClass('current');
   });
   document.body.addEventListener("click", myFunction);
   function myFunction(e) {
      var x = window.getSelection().toString();
      if (x != "") {
         $("#blackText").val(x);
         $('#container').hide();
         $('#container').css({ 'top': e.pageY + 50, 'left': e.pageX, 'position': 'absolute', 'border': '1px solid black', 'padding': '5px' });
         $('#container').show();
      } else {
         if (!$('#container').is(e.target) && $('#container').has(e.target).length === 0) {
            $('#container').hide();
         }
      }
   }
})
