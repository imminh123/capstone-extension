var getStudentId = "";
var getFolderByURL = "";
var getCourseByURL = "";
var getCourseNameByURL = "";
var getTeacherByURL;
var getFolderByStudentId;
var rangeScanned = null;
var nodeScanned = null;
var isStudying = false;
$(document).ready(function () {
    var info = `<div class="noteitContainer" id="noteitContainer">
    <div class="noteitWrapper">
        <div class="arrow">
        </div>
    <div class="hightLight">
        <div class="selection">
                <div id="yellow" name="#FFF83E" class="color"></div>
                <div id="green" name="#91EFA4" class="color"></div>
                <div id="blue" name="#48C6FF" class="color"></div>
                <div id="red" name="#FF7DB9" class="color"></div>
                <div id="orange" name="#FFC143" class="color"></div>
        </div>
        

        <div class="folders">
                <p class="folders_title">Save to "Others"</p>
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="306px" height="306px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve">
                <g>
                    <g id="keyboard-arrow-up">
                        <polygon points="35.7,247.35 153,130.05 270.3,247.35 306,211.65 153,58.65 0,211.65 		"/>
                    </g>
                </g>
                </svg>
        </div>

       <div class="folderOption" id="folderOption">
           <div class="topPart">
               <span>Where to save your highlight?</span>
                <input class="searchInput" type="text" placeholder="Search or add new folder" />
           </div>
           <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
           <ul class="searchInputList">

            </ul>

            <div id="createFolderBtn">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                        <g>
                            <g id="add">
                                <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z"/>
                            </g>
                        </g>
                    </svg>
                    <span class="createBtnTitle">Create folder "bleh"</span>
                </div>
        </div>
    </div>
    <input type="text" id="hiddenText" hidden>
    <div class="note addToNotes section" >
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357"
            style="enable-background:new 0 0 357 357;" xml:space="preserve">
            <g>
                <g id="add">
                    <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />
                </g>
        </svg>
        <span>Add to notes</span>
    </div>
    <div class="ask section" id="ask_section">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px" y="0px" width="535.5px" height="535.5px" viewBox="0 0 535.5 535.5"
            style="enable-background:new 0 0 535.5 535.5;" xml:space="preserve">
            <g>
                <g id="live-help">
                    <path
                        d="M446.25,0h-357c-28.05,0-51,22.95-51,51v357c0,28.05,22.95,51,51,51h102l76.5,76.5l76.5-76.5h102c28.05,0,51-22.95,51-51
                    V51C497.25,22.95,474.3,0,446.25,0z M293.25,408h-51v-51h51V408z M346.8,211.65l-22.95,22.95c-20.399,17.85-30.6,33.15-30.6,71.4
                    h-51v-12.75c0-28.05,10.2-53.55,30.6-71.4l30.601-33.15c10.2-7.65,15.3-20.4,15.3-35.7c0-28.05-22.95-51-51-51s-51,22.95-51,51
                    h-51c0-56.1,45.9-102,102-102c56.1,0,102,45.9,102,102C369.75,175.95,359.55,196.35,346.8,211.65z" />
                </g>
            </g>
        </svg>
        <span class="askYourTutor">Ask your tutor</span>
    </div>
    <div class="noteDetail" id="noteDetail">
            <p class="firstTitle" id="firstTitle"></p>
            <p class="messageTitle" id="messageTitle"></p>
            <div class="dropdown">
                <input class="chosen-value" type="text" value="" placeholder="Type to filter">
                <ul class="value-list" id="selectFolder">
                    <li>Alabama</li>
                    <li>Alaska</li>
                </ul>
                <div id="createFolderBtnInNote">
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="357px" height="357px" viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                        <g>
                            <g id="add">
                                <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z"/>
                            </g>
                        </g>
                    </svg>
                    <span class="createBtnTitleInNote">Create folder "bleh"</span>
                </div>
            </div>
            <p class="secondTitle" id="secondTitle"></p>
            <textarea id="descNotes"></textarea>
            <div class="addBtn" id="addBtn">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="357px" height="357px"
                    viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                    <g>
                        <g id="add">
                            <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />
                        </g>
                </svg>
                <span>Add to notes</span>
            </div>
            <div class="addAskBtn" id="addAskBtn">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="357px" height="357px"
                    viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve">
                    <g>
                        <g id="add">
                            <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />
                        </g>
                </svg>
                <span>Add to ask</span>
            </div>
            </div>
        </div>
</div>`;

    var notify_dom = `
    <div id="noteit_notification"> 
        <svg id="Capa_1" enable-background="new 0 0 515.556 515.556" height="512" viewBox="0 0 515.556 515.556" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"/></svg>
        <span id="text_content">Save sucessfully</span> 
    </div>
    `

    $('body').append(info);
    $('body').append(notify_dom);
    var info = "";
    var notification = $('#noteit_notification');
    notification.hide();

    $(document.body).on("mouseup", function (e) {
        if(!window.location.href.startsWith("https://noteitfu.herokuapp.com") && !window.location.href.startsWith("http://noteitfu.herokuapp.com")){
            myFunction(e);
        }
    });

    //get DOM element
    var folderOption = $('#folderOption');
    var folderHighlightSection = $('.folders');
    var noteDetailSection = $('#noteDetail');
    var dropdownSection = $('.dropdown');

    //set event to DOM
    folderHighlightSection.on("click", (e) => {
        noteDetailSection.hide();
        folderOption.show();
    })
    //close all popup
    function closeAllPopup() {
        noteDetailSection.hide();   
        folderOption.hide();
    }

    // GET LOCAL STORAGE
    if (window.location.href.startsWith("https://noteitfu.herokuapp.com/")) {
        if (window.location.href.startsWith("https://noteitfu.herokuapp.com/?token=")) {
            var getToken = window.location.href.substring(37);
            getStudent = parseJwt(getToken);
            chrome.storage.sync.set({ key: getStudent }, function () {
            });
        } else {
            var getToken = window.localStorage.getItem('token');
            if (getToken !== null) {
                getStudent = parseJwt(getToken);
                chrome.storage.sync.set({ key: getStudent }, function () {
                });
            } else {
                var emptyStudent = null;
                chrome.storage.sync.set({ key: emptyStudent }, function () {
                });
                getStudent = null;
            }
        }
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
                },
                error: function (data) {
                }
            }); //problem
            $.ajax({
                type: "GET",
                url: "https://capstonebackendapi.herokuapp.com/getFolderByStudentID/" + studentId,
                success: function (data) {
                    getFolderByStudentId = data;
                },
                error: function (data) {
                }
            });

            //problem
            //GET FOLDER BY URL
            $.ajax({
                type: "GET",
                url: "https://capstonebackendapi.herokuapp.com/getUrlInformation/" + studentId + "/" + encodeURIComponent(window.location.href),
                success: function (data) {
                    //GET FOLDER
                    // var getFolder = data.folder;
                    // if (typeof getFolder !== "undefined") {
                    //     getFolderByURL = data.folder._id;
                    //     $('#newFolder').hide();
                    //     $('#addNewFolder').hide();
                    //     $('#selectHighlightFolder').hide();
                    // } else {
                    //     $('#newFolder').show();
                    //     $('#addNewFolder').show();
                    //     $('#selectHighlightFolder').show();
                    // }
                    //GET COURSE
                    var getCourse = data._id;
                    if (typeof getCourse !== "undefined") {
                        getFolderByURL = "";
                        getCourseByURL = data._id;
                        isStudying = data.isStudying;
                        //searchInputList
                        getCourseNameByURL = data.courseCode;
                        //GET TEACHERS
                        getTeacherByURL = data.teachers;
                        $('.folders').hide();
                        $('#newFolder').hide();
                        $('#addNewFolder').hide();
                        $('#selectHighlightFolder').hide();
                    } else {
                        setDataToSelectBox('#selectHighlightFolder');
                        setDataToSelectBox('#selectFolder');
                        setDataToSelectBox('.searchInputList');
                        $('#folders').show();
                        $('#newFolder').show();
                        $('#addNewFolder').show();
                        $('#selectHighlightFolder').show();
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
                        var treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
                            acceptNode: function (node) {
                                var result = NodeFilter.FILTER_SKIP;
                                if (node.nodeValue.includes(stringFind)) result = NodeFilter.FILTER_ACCEPT;
                                return result;
                            }
                        }, false);
                        var nodeList = [];
                        while(treeWalker.nextNode()) {
                            nodeList.push(treeWalker.currentNode);
                        }
                        // highlight all filtered textnode
                        nodeList.forEach(function (n) {
                            var startingIndex = n.textContent.indexOf(stringFind, 0);
                            var newRange = document.createRange();
                            newRange.setStart(n, startingIndex);
                            newRange.setEnd(n, startingIndex + stringFind.length);
                            var newNode = document.createElement("span");
                            newNode.setAttribute("style", "background-color: " + color + ";");
                            newNode.appendChild(newRange.extractContents());
                            newRange.insertNode(newNode);
                        });
                    });
                },
                error: function (data) {
                    showNotification('Load highlights failed',false);
                }
            });
        }
        else {
        }
    });

    //CHOOSE FOLDER AND CREATE FOLDER POPUP
    function initiateFolderOption() {
        let searchInput = $('.searchInput');
        let searchInputList = $('.searchInputList');
        let searchItem = $('.value-list-item');
        let createFolderBtn = $('#createFolderBtn');
        let createBtnTitle = $('.createBtnTitle');
        let selectedFolderTitle = $('.folders_title');
    
        //hide create folder button at initial
        createFolderBtn.hide();
        //each item onclick
        searchItem.each( function(index, value) {
            let itemDom = $(value);
            let text = itemDom.text();
            let id = itemDom.data("value");
    
            itemDom.on("click", function() {
                //get current selected item
                let selectedItem = $(".selected");
                //remove selected class from selected item
                selectedItem.removeClass("selected");
                //add selected class to click item
                itemDom.addClass("selected");
                //set selected item text to input
                searchInput.val(text);
                selectedFolderTitle.text(`Saved to ${text}`)
                searchInput.data("id", id);
            })
        })
    
        //search event
        searchInput.on("keyup", function() {
            let searchString = searchInput.val();
            let searchStringLowerCase = searchString.toLowerCase();
            let matchItemArr = [];
    
            searchItem.each( function(index, value) {
                let itemDom = $(value);
                let text = itemDom.text().toLowerCase();
                
                if(text.includes(searchStringLowerCase)) {
                    itemDom.show();
                    matchItemArr.push(itemDom);
                }else {
                    itemDom.hide();
                }
            })
    
            if(matchItemArr.length == 0) {
                createFolderBtn.show();
                //set new folder name to create button title
                createBtnTitle.text(`Create folder "${searchString}"`);
            }else {
                createFolderBtn.hide();
            }

            
    
        })
    
        //create folder button event
        //unbind to remove all other event
        createFolderBtn.unbind().on("click", function() {
            let folderName =  searchInput.val();
            var newFolder = {
                "studentID": getStudentId,
                "courseCode": "Other",
                "courseName": folderName
            };
            $.ajax({
                type: "POST",
                url: "https://capstonebackendapi.herokuapp.com/createFolder",
                dataType: "json",
                data: newFolder,
                success: function (data) {
                    if(data.error) {
                        showNotification(data.error, false);
                    }else {
                        showNotification(`Folder ${data.folder.courseName} is created`, true);
                    }
                    var selection = '';
                    // $.each(getFolderByStudentId, function (key, value) {
                    //     if (value.courseCode === "Other") {
                    //         selection += '<option value="' + value._id + '">' + value.courseName + '</option> <br>';
                    //     }
                    // });
                    if (data.folder._id !== "" && data.folder.courseName !== "") {
                        selection += `<li class="value-list-item" data-value="${data.folder._id}">${data.folder.courseName}</li>`;
                    }
                
                    getFolderByStudentId.push(data.folder);
                    $('#selectFolder').html(selection);
                    $('#selectFolder').show();
                },
                error: function (data) {
                    showNotification("Folder create failed", true);
                }
            });
    
        })
    }


    // highlight
    $(document.body).on("click", ".color", function () {
        var startGetOffSet = rangeScanned.startOffset;
        var endGetOffSet = rangeScanned.endOffset;
        var string = $("#hiddenText").val();
        var newNode = document.createElement("span");
        newNode.setAttribute("style", "background-color: "+ $(this).attr('name') + ";");
        newNode.appendChild(rangeScanned.extractContents());
        rangeScanned.insertNode(newNode);
        // GET INDEX OF STRING
        var domContent1 = document.body.innerHTML;
        var indices = getIndicesOf(string, domContent1);
        var indexOfString = 0;
        for (i = 0; i < indices.length; i++) {
            var charBefore = domContent1.charAt(indices[i] - 1);
            var charAfter = domContent1.charAt(indices[i] + string.length);
            if (charBefore == ">" && charAfter == "<") {
                indexOfString = i;
            }
        }
        var folderId = "";
        if (getCourseByURL !== "") {
            //if in course
            folderId = getFolderByURL;
        }
        else {
            //if out course
            folderId = $('.searchInput').data("id");
        }
        
        // SEND DATA TO API 
        var dataPost = {
            "studentID": getStudentId,
            "folderID": folderId == undefined ? "" : folderId,
            "scannedContent": string,
            "index": indexOfString,
            "color": $(this).attr('id'),
            "url": window.location.href,
            "startOffSet":startGetOffSet,
            "endOffSet":endGetOffSet,
            "courseID": getCourseByURL
        };
        $.ajax({
            type: "POST",
            url: "https://capstonebackendapi.herokuapp.com/createhighlight",
            dataType: "json",
            data: dataPost,
            success: function (data) { //problem
                if(data.error) {
                    showNotification(data.error,false);
                }else {
                    showNotification("Highlight saved",true);
                }
                $('#noteitContainer').hide();
            },
            error: function (data) {
                showNotification("Highlight saved failed",false);
            }
        });

    });

    // CLICK ON "SAVED TO "
    $(document.body).on("click", ".folders", function () {
        $(document).ajaxStart(function(){
            $('.searchInputList').hide();
            $('.lds-roller').show();
        });
        
        $.ajax({
            type: "GET",
            url: "https://capstonebackendapi.herokuapp.com/getFolderByStudentID/" + getStudentId,
            success: function (data) {
                getFolderByStudentId = data;
            },
            error: function (data) {
            }
        });
        $(document).ajaxComplete(function(){
            $('.searchInputList').show();
            $('.lds-roller').hide();
        });
        setDataToSelectBox('#selectFolder');
        setDataToSelectBox('.searchInputList');
    });


    // CLICK ON ADD NOTES ON MENU
    $(document.body).on("click", ".addToNotes", function () {
        if (getCourseByURL !== "") {
            $('#dropdown-btn').hide();
            dropdownSection.hide();
        } else {
            dropdownSection.show();
            $('#dropdown-btn').show();
        }
        folderOption.hide();
        $('#noteDetail').show();
        $('#addAskBtn').hide();
        $('#addBtn').show();
        $('.firstTitle').empty();
        $('.secondTitle').empty();
        document.getElementsByClassName('firstTitle')[0].append('Course: ' + getCourseNameByURL);
        document.getElementsByClassName('secondTitle')[0].append('Note:');
    });

    // CLICK ON ASK YOUR TUTOR ON MENU
    $(document.body).on("click", "#ask_section", function () {
        if (getCourseByURL !== "") {
            if(isStudying){
                $('#noteDetail').show();
                $('#addBtn').hide();
                $('#addAskBtn').show();
                var selection = '';
                $('.firstTitle').empty();
                $('.secondTitle').empty();
                document.getElementsByClassName('firstTitle')[0].append('Choose Teacher:');
                document.getElementsByClassName('secondTitle')[0].append('Question:');
                setTeacherDataToSelectBox('#selectFolder');
            } else{
                showNotification("You need to enroll this course first", true);
            }
            
        }else {
            showNotification("This site is not belong to any course", false);
        }
    });

    //CLICK ON ADD NOTE BUTTON
    $(document.body).on("click", "#addBtn", function () {
        var string = "<p>" + $("#hiddenText").val() + "</p>";
        var folderId = "";
        if (getCourseByURL !== "") {
            // in course
            folderId = getFolderByURL;
        }
        else {
            // out course
            folderId = $('.chosen-value')[0].getAttribute('data-id');
        }
        var description = $('#descNotes').val();
        var insertNotes = {
            "studentID": getStudentId,
            "folderID": folderId,
            "scannedContent": string,
            "description": description,
            "url": window.location.href,
            "courseID": getCourseByURL
        };
<<<<<<< HEAD
    
=======
>>>>>>> e7ab8c07fa90ca0575a5859d3ec59a80c540c3ad
        //INSERT INTO DB
        $.ajax({
            type: "POST",
            url: "https://capstonebackendapi.herokuapp.com/createnote",
            dataType: "json",
            data: insertNotes,
            success: function (data) {
                if(data.error) {
                    showNotification(data.error, false);
                }else {
                    showNotification('Note saved',true);
                }
                $('#noteitContainer').hide();
                $('#descNotes').val("");
            },
            error: function (data) {
                showNotification('Note saved failed', false);
            }
        });
    });

    //CLICK ON ADD ASK BUTTON
    $(document.body).on("click", "#addAskBtn", function () {
        var string = $("#hiddenText").val();
        var teacherId = $('.chosen-value')[0].getAttribute('data-id');
        var askContent = $('#descNotes').val();
        var insertAsk = {
            "scannedContent": string,
            "askContent": askContent,
            "student": getStudentId,
            "teacher": teacherId,
            "courseID": getCourseByURL,
            "url": window.location.href
        }
        // INSERT INTO DB
        $.ajax({
            type: "POST",
            url: "https://capstonebackendapi.herokuapp.com/createask",
            dataType: "json",
            data: insertAsk,
            success: function (data) {
                if(data.error) {
                    showNotification('Question sent failed',false);
                }else {
                    showNotification('Question sent',true);
                }
                $('#noteitContainer').hide();
                $('#descNotes').val("");
            },
            error: function (data) {
                showNotification('Question sent failed',false);
            }
        });
    });

    // FILL FOLDER TO SELECT BOX
    function setDataToSelectBox(folderName){
        var selection = '';
        $.each(getFolderByStudentId, function (key, value) {
            if (value.courseCode === "Other") {
                // selection += '<option value="' + value._id + '">' + value.courseName + '</option> <br>';
                selection += `<li class="value-list-item" data-value="${value._id}">${value.courseName}</li>`;
            } 
        });

        $(folderName).empty();
        $(folderName).html(selection);
        initiateFolderOption($(folderName));
        initiateDropdown();
    };

    const showNotification = (message, status) => {
        let text_content = notification.find("#text_content");
        if(!status) {
            notification.addClass("danger_notification_noteit");
        }else {
            notification.removeClass("danger_notification_noteit");
        }
        text_content.text(message);
        notification.show(0).delay(3000).hide(0);
    }

    
    //SHOW EXTENSION
    function myFunction(e) {
        let currentNode = $(e.target);
        let itemOfNoteit = false;

        //check if item with mouse up event is in noteit
        currentNode.parents().each(function(index, value) {
            let itemId = $(value).attr('id');
            if(itemId == 'noteitContainer') {
                itemOfNoteit = true;
            }            
        });

        //if item not in noteit, close all popup of noteit
        if(!itemOfNoteit) {
            closeAllPopup();
        }

        var x = window.getSelection().toString();
        
        let seleciton = window.getSelection().anchorNode;
        if (x.trim() !== "" && !$('#noteitContainer').is(e.target) && $('#noteitContainer').has(e.target).length === 0) {
            var selection = window.getSelection();
            rangeScanned = selection.getRangeAt(0);
            nodeScanned = selection.anchorNode;
        }
        if(window.getSelection().anchorNode !== null && window.getSelection().extentNode !== null){
            if(window.getSelection().anchorNode.nodeValue == window.getSelection().extentNode.nodeValue) {
                if(window.getSelection().baseNode.lastChild !== null || window.getSelection().baseNode.firstChild !== null){
                    if(!window.getSelection().baseNode.lastChild.toString() == "[object HTMLTextAreaElement]" || !window.getSelection().baseNode.firstChild.toString() == "[object HTMLInputElement]"){
                        if (x !== "" && getStudentId !== "" && $('#noteitContainer').has(e.target).length === 0) {
                            $("#hiddenText").val(x);
                            $('#noteitContainer').hide();
                
                            $('#noteitContainer').css({ 'top': e.pageY + 50, 'left': e.pageX, 'position': 'absolute', 'padding': '5px' });
                            $('#noteitContainer').show();
                            $('#noteDetail').hide();
                
                        } else {
                            if (!$('#noteitContainer').is(e.target) && $('#noteitContainer').has(e.target).length === 0) {
                                $('#noteitContainer').hide();
                            }
                        }
                    }
                } else{
                    if (x !== "" && getStudentId !== "" && $('#noteitContainer').has(e.target).length === 0) {
                        $("#hiddenText").val(x);
                        $('#noteitContainer').hide();
            
                        $('#noteitContainer').css({ 'top': e.pageY + 50, 'left': e.pageX, 'position': 'absolute', 'padding': '5px' });
                        $('#noteitContainer').show();
                        $('#noteDetail').hide();
            
                    } else {
                        if (!$('#noteitContainer').is(e.target) && $('#noteitContainer').has(e.target).length === 0) {
                            $('#noteitContainer').hide();
                        }
                    }
                }
                
            }
        }
    };

    //Initiate dropdown
function initiateDropdown() {
    //set data to dropdown
    const inputField = document.querySelector('.chosen-value');
    const dropdown = document.querySelector('.value-list');
    const dropdownArray = [... document.querySelectorAll('.value-list-item')];
    let createFolderBtnInNote = $('#createFolderBtnInNote');

    //hide create folder button at initial
    createFolderBtnInNote.hide();

    dropdown.classList.add('open');
    let valueArray = [];
    dropdownArray.forEach(item => {
        valueArray.push(item.textContent);
    });

    const closeDropdown = () => {
    dropdown.classList.remove('open');
    }

    inputField.addEventListener('input', () => {
        dropdown.classList.add('open');
        
        let inputValue = inputField.value.toLowerCase();
        let inputValueOrigin = inputField.value;
        let valueSubstring;
        let matchItem = [];
        if (inputValue.length > 0) {
            for (let j = 0; j < valueArray.length; j++) {
            if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                dropdownArray[j].classList.add('closed');
            } else {
                dropdownArray[j].classList.remove('closed');

                //if match
                matchItem.push(dropdownArray[j]);
            }
            }
        } else {
            for (let i = 0; i < dropdownArray.length; i++) {
            dropdownArray[i].classList.remove('closed');
            }
        }
        
        if(matchItem.length == 0) {
            $('.createBtnTitleInNote').text(`Create folder ${inputValueOrigin}`);
            createFolderBtnInNote.show();
        }else {
            createFolderBtnInNote.hide();
        }
    });

    //add event to add folder button
    //unbind to remove all other event
    createFolderBtnInNote.unbind().on("click", function() {
        console.log('In event create')
        let folderName =  inputField.value;
        var newFolder = {
            "studentID": getStudentId,
            "courseCode": "Other",
            "courseName": folderName
        };
        $.ajax({
            type: "POST",
            url: "https://capstonebackendapi.herokuapp.com/createFolder",
            dataType: "json",
            data: newFolder,
            success: function (data) {
                if(data.error) {
                    showNotification(data.error, false);
                }else {
                    showNotification(`Folder ${data.folder.courseName} is created`, true);
                }
                var selection = '';
                //push created folder to folder list
                getFolderByStudentId.push(data.folder);
                setDataToSelectBox('#selectFolder');
            },
            error: function (data) {
                showNotification("Folder created failed", true);
            }
        });

    })

    dropdownArray.forEach(item => {
    item.addEventListener('click', (evt) => {
        inputField.value = item.textContent;
        inputField.setAttribute('data-id', item.dataset.value);
        dropdownArray.forEach(dropdown => {
        dropdown.classList.add('closed');
        });
    });
    })

    inputField.addEventListener('focus', () => {
    inputField.placeholder = 'Search';
    dropdown.classList.add('open');
    dropdownArray.forEach(dropdown => {
        dropdown.classList.remove('closed');
    });
    });

    inputField.addEventListener('blur', () => {
    inputField.placeholder = 'Choose folder';
    dropdown.classList.remove('open');
    });

    document.addEventListener('click', (evt) => {
    const isDropdown = dropdown.contains(evt.target);
    const isInput = inputField.contains(evt.target);
    if (!isDropdown && !isInput) {
        dropdown.classList.remove('open');
    }
    });
}



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

function setTeacherDataToSelectBox(folderName) {
    var dropdownSection = $('.dropdown');
    var selection = '';
    if (typeof getTeacherByURL !== "undefined") {
        $.each(getTeacherByURL, function (key, value) {
            // selection += '<option value="' + value._id + '">' + value.name + '</option> <br>';
            selection += `<li class="value-list-item" data-value="${value._id}">${value.name}</li>`;
        });
    }
    if(selection !== ''){
        dropdownSection.show();
        $('.messageTitle').hide();
        $(folderName).show();
        $(folderName).empty();
        $(folderName).html(selection);
        $('#firstTitle').text('Choose teacher:');
        initiateDropdown();
    } else {
        dropdownSection.hide();
        $('#firstTitle').text('This course currently has no teacher assigned');
        // $('.messageTitle').show();
        // $('.messageTitle').empty();
        // document.getElementsByClassName('messageTitle')[0].append('This course currently has no teacher assigned');
    }
    
};

    }) //problem




