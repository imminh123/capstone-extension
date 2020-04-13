var indexDivCLass = 0;
var getStudentId = "";
var getFolderByURL = "";
var getCourseByURL = "";
var getCourseNameByURL = "";
var getTeacherByURL;
var getFolderByStudentId;

$(document).ready(function () {
    var info = '<div class="container" id="container">\
    <input type="text" id ="newFolder" class="newFolder" />\
    <input type="submit" id ="addNewFolder" class="addNewFolder" value="Add folder"/>\
    <select id="selectHighlightFolder">\
    <option value="">Others</option> <br>\
        </select>\
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
   <div class="note section" >\
       <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"\
           x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357"\
           style="enable-background:new 0 0 357 357;" xml:space="preserve">\
           <g>\
               <g id="add">\
                   <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />\
               </g>\
       </svg>\
       <span class="addToNotes">Add to notes</span>\
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
       <span class="askYourTutor">Ask your tutor</span>\
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
   <div class="noteDetail" id="noteDetail">\
<p class="firstTitle" id="firstTitle"></p>\
<div class="dropdown">\
    <div class="dropdown-btn" id="dropdown-btn">\
        <span>Choose folder</span>\
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"\
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 491.996 491.996"\
            style="enable-background:new 0 0 491.996 491.996;" xml:space="preserve">\
            <g>\
                <g>\
                    <path d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848\
                    L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128\
                    c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084\
                    c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224\
                    C491.996,136.902,489.204,130.046,484.132,124.986z" />\
                </g>\
            </g>\
        </svg>\
        <select id="selectFolder">\
        </select>\
    </div>\
</div>\
<p class="secondTitle" id="secondTitle"></p>\
<textarea id="descNotes"></textarea>\
<div class="addBtn" id="addBtn">\
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"\
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="357px" height="357px"\
        viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">\
        <g>\
            <g id="add">\
                <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />\
            </g>\
    </svg>\
    <span>Add to notes</span>\
</div>\
<div class="addAskBtn" id="addAskBtn">\
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"\
        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="357px" height="357px"\
        viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">\
        <g>\
            <g id="add">\
                <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />\
            </g>\
    </svg>\
    <span>Add to ask</span>\
</div>\
</div>\
';



    $('body').append(info);
    var info = "";
    $(document.body).on("mouseup", function (e) {
        myFunction(e);
    });
    // WHEN LOGIN
    if (window.location.href.startsWith("http://noteitfu.herokuapp.com/?token=")) {
        var getToken = window.location.href.substring(37);
        getStudent = parseJwt(getToken);
        chrome.storage.sync.set({ key: getStudent }, function () {
            console.log(getStudent);
        });
    }
    // WHEN LOGOUT
    else if (window.location.href === "http://noteitfu.herokuapp.com/") {
        var emptyStudent = null;
        chrome.storage.sync.set({ key: emptyStudent }, function () {
        });
        getStudent = null;
    }
    // GET USER INFO
    chrome.storage.sync.get("key", function (obj) {
        // if(obj !== null){
        //     $('#getStudentName').val(obj); 
        // }
        var objectKey = obj.key;
        var studentId = "";
        if (objectKey) {
            studentId = objectKey.user.profile;
            getStudentId = studentId;

            //GET STUDENT INFOMATION
            $.ajax({
                type: "GET",
                url: "https://capstonebackendapi.herokuapp.com/getstudentbyid/" + studentId,
                success: function (data) {
                    console.log(data.name);
                },
                error: function (data) {
                }
            });
            $.ajax({
                type: "GET",
                url: "https://capstonebackendapi.herokuapp.com/getFolderByStudentID/" + studentId,
                success: function (data) {
                    console.log(data.name);
                    getFolderByStudentId = data;
                },
                error: function (data) {
                }
            });

            //GET FOLDER BY URL
            $.ajax({
                type: "GET",
                url: "https://capstonebackendapi.herokuapp.com/getUrlInformation/" + studentId + "/" + encodeURIComponent(window.location.href),
                success: function (data) {
                    //GET FOLDER
                    var getFolder = data.folder;
                    if (typeof getFolder !== "undefined") {
                        getFolderByURL = data.folder._id;
                        $('#newFolder').hide();
                        $('#addNewFolder').hide();
                        $('#selectHighlightFolder').hide();
                    } else {
                        $('#newFolder').show();
                        $('#addNewFolder').show();
                        $('#selectHighlightFolder').show();
                    }
                    //GET COURSE
                    var getCourse = data.courseOfURL;
                    if (typeof getCourse !== "undefined") {
                        getCourseByURL = getCourse._id;
                        getCourseNameByURL = getCourse.courseCode;
                        //GET TEACHERS
                        getTeacherByURL = getCourse.teachers;
                    } else {
                        var selection = '';
                        $.each(getFolderByStudentId, function (key, value) {
                            if (value.courseCode === "Other") {
                                selection += '<option value="' + value._id + '">' + value.courseName + '</option> <br>';
                            }
                        });
                        $('#selectHighlightFolder').html(selection);
                        $('#selectFolder').html(selection);
                    }
                },
                error: function (data) {
                }
            });

            //RELOAD HIGHLIGHT
            $.ajax({
                type: "GET",
                url: "https://capstonebackendapi.herokuapp.com/getHighlightByUrl/" + studentId + "/" + encodeURIComponent(window.location.href),
                success: function (data) {
                    $.each(data, function (key, value) {
                        //alert(value.index + value.color + value.scannedContent);
                        var stringFind = value.scannedContent;
                        var color = value.color;
                        if (color === "yellow") {
                            color = "#FFF83E"
                        } else if (color === "green") {
                            color = "#91EFA4"
                        } else if (color === "blue") {
                            color = "#48C6FF"
                        } else if (color === "red") {
                            color = "#FF7DB9"
                        } else if (color === "orange") {
                            color = "#FFC143"
                        }
                        var indexOfString = value.index;
                        var domContent1 = document.body.innerHTML;
                        var indices = getIndicesOf(stringFind, domContent1);
                        //document.body.innerHTML = document.body.innerHTML.substring(0, indices[indexOfString]) + "<span style='background-color:" + color + ";'>" + stringFind + "</span>" + document.body.innerHTML.substring(indices[[indexOfString]] + stringFind.length)
                    });
                },
                error: function (data) {
                    alert(data);
                }
            });
        }
        else {
        }
    });



    //CREATE FOLDER 
    $(document.body).on("click", ".addNewFolder", function () {
        var newFolder = {
            "studentID": getStudentId,
            "courseCode": "Other",
            "courseName": $('#newFolder').val()
        };
        $.ajax({
            type: "POST",
            url: "https://capstonebackendapi.herokuapp.com/createFolder",
            dataType: "json",
            data: newFolder,
            success: function (data) {
                alert("add new folder success");
                var selection = '';
                $.each(getFolderByStudentId, function (key, value) {
                    if (value.courseCode === "Other") {
                        selection += '<option value="' + value._id + '">' + value.courseName + '</option> <br>';
                    }
                });
                if (data.folder._id !== "" && data.folder.courseName !== "") {
                    selection += '<option value="' + data.folder._id + '">' + data.folder.courseName + '</option> <br>';
                }
                $('#selectHighlightFolder').hide();
                $('#selectHighlightFolder').empty();
                $('#selectHighlightFolder').html(selection);
                $('#selectHighlightFolder').show();
            },
            error: function (data) {
            }
        });


    });

    // create highlight
    $(document.body).on("click", ".color", function () {
        var string = $("#hiddenText").val();

        document.getElementById("cuong" + (indexDivCLass - 1).toString()).style = "background-color: " + $(this).attr('name') + ";";
        //GET INDEX OF STRING
        var domContent1 = document.body.innerHTML;
        var indices = getIndicesOf(string, domContent1);
        var indexOfString = 0;
        for (i = 0; i < indices.length; i++) {
            var charBefore = domContent1.charAt(indices[i] - 1);
            if (charBefore == ">") {
                indexOfString = i;
            }
        }
        var folderId = "";
        if (getFolderByURL !== "") {
            folderId = getFolderByURL;
        }
        else {
            folderId = $('#selectHighlightFolder').val();
        }

        // SEND DATA TO API 
        var dataPost = {
            "studentID": getStudentId,
            "folderID": folderId,
            "scannedContent": string,
            "index": indexOfString,
            "color": $(this).attr('id'),
            "url": window.location.href
        };
        console.log(dataPost);
        // $.ajax({
        //     type: "POST",
        //     url: "https://capstonebackendapi.herokuapp.com/createhighlight",
        //     dataType: "json",
        //     data: dataPost,
        //     success: function (data) {
        //         alert("create highlight success");
        //         $('#container').hide();
        //     },
        //     error: function (data) {
        //     }
        // });

    });

    // CLICK ON ADD NOTES ON MENU
    $(document.body).on("click", ".addToNotes", function () {
        if (getFolderByURL !== "") {
            $('#dropdown-btn').hide();
        } else {
            $('#selectFolder').show();
            var selection = '';
            $.each(getFolderByStudentId, function (key, value) {
                if (value.courseCode === "Other") {
                    selection += '<option value="' + value._id + '">' + value.courseName + '</option> <br>';
                }
            });
            $('#selectFolder').hide();
            $('#dropdown-btn').hide();
            $('#selectFolder').empty();
            $('#selectFolder').html(selection);
            $('#selectFolder').show();
            $('#dropdown-btn').show();
        }
        $('#noteDetail').show();
        $('#addAskBtn').hide();
        $('#addBtn').show();
        $('.firstTitle').empty();
        $('.secondTitle').empty();
        document.getElementsByClassName('firstTitle')[0].append('Course: ' + getCourseNameByURL);
        document.getElementsByClassName('secondTitle')[0].append('Note:');
        //$('.dropdown').append(dropdown);
    });

    // CLICK ON ASK YOUR TUTOR ON MENU
    $(document.body).on("click", ".askYourTutor", function () {
        if (getCourseByURL !== "") {
            $('#noteDetail').show();
            $('#addBtn').hide();
            $('#addAskBtn').show();
            var selection = '';
            $('.firstTitle').empty();
            $('.secondTitle').empty();
            document.getElementsByClassName('firstTitle')[0].append('Choose Teacher:');
            document.getElementsByClassName('secondTitle')[0].append('Question:');
            if (typeof getTeacherByURL !== "undefined") {
                $.each(getTeacherByURL, function (key, value) {
                    selection += '<option value="' + value._id + '">' + value.name + '</option> <br>';
                });
            }
            $('#selectFolder').show();
            $('#dropdown-btn').show();
            $('#selectFolder').empty();
            $('#selectFolder').html(selection);
        }
        //$('.dropdown').append(dropdown);
    });

    //CLICK ON ADD NOTE BUTTON
    $(document.body).on("click", "#addBtn", function () {
        var string = "<p>" + $("#hiddenText").val() + "</p>";
        var folderId = "";
        if (getFolderByURL !== "") {
            folderId = getFolderByURL;
        }
        else {
            folderId = $('#selectFolder').val();
        }
        var description = $('#descNotes').val();
        var insertNotes = {
            "studentID": getStudentId,
            "folderID": folderId,
            "scannedContent": string,
            "description": description,
            "url": window.location.href
        };
        console.log(insertNotes);

        //INSERT INTO DB
        $.ajax({
            type: "POST",
            url: "https://capstonebackendapi.herokuapp.com/createnote",
            dataType: "json",
            data: insertNotes,
            success: function (data) {
                alert("success");
                $('#container').hide();
            },
            error: function (data) {
                alert("failed");
            }
        });
    });

    //CLICK ON ADD ASK BUTTON
    $(document.body).on("click", "#addAskBtn", function () {
        var string = $("#hiddenText").val();
        var teacherId = $('#selectFolder').val();
        var askContent = $('#descNotes').val();
        var insertAsk = {
            "scannedContent": string,
            "askContent": askContent,
            "student": getStudentId,
            "teacher": teacherId,
            "courseID": getCourseByURL,
            "url": window.location.href
        }
        console.log(insertAsk);
        // INSERT INTO DB
        $.ajax({
            type: "POST",
            url: "https://capstonebackendapi.herokuapp.com/createask",
            dataType: "json",
            data: insertAsk,
            success: function (data) {
                alert("success");
                $('#container').hide();
            },
            error: function (data) {
                alert("failed");
            }
        });
    });

})

//SHOW EXTENSION
function myFunction(e) {
    var x = window.getSelection().toString();
    if (x.trim() !== "" && !$('#container').is(e.target) && $('#container').has(e.target).length === 0) {
        debugger;
        var selection = window.getSelection();
        var range = selection.getRangeAt(0);
        var newNode = document.createElement("span");
        //newNode.setAttribute("style", "background-color: pink;");
        newNode.setAttribute("id", "cuong" + indexDivCLass);
        newNode.appendChild(range.extractContents());
        range.insertNode(newNode);
        //range.surroundContents(newNode);
        indexDivCLass += 1;
    }
    if (x !== "" && getStudentId !== "" && $('#container').has(e.target).length === 0) {
        $("#hiddenText").val(x);
        $('#container').hide();

        $('#container').css({ 'top': e.pageY + 50, 'left': e.pageX, 'position': 'absolute', 'border': '1px solid black', 'padding': '5px' });
        $('#container').show();
        $('#noteDetail').hide();

    } else {
        if (!$('#container').is(e.target) && $('#container').has(e.target).length === 0) {
            $('#container').hide();
        }
    }
};


//GET INDEX OF ALL SCAN STRING
function getIndicesOf(searchStr, str, caseSensitive) {
    var searchStrLen = searchStr.length;
    if (searchStrLen == 0) {
        return [];
    }
    var startIndex = 0, index, indices = [];
    if (!caseSensitive) {
        str = str.toLowerCase();
        searchStr = searchStr.toLowerCase();
    }
    while ((index = str.indexOf(searchStr, startIndex)) > -1) {
        indices.push(index);
        startIndex = index + searchStrLen;
    }
    return indices;
};

//DECODE JWT
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};




