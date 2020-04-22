var indexDivCLass = 0;
var getStudentId = "";
var getFolderByURL = "";
var getCourseByURL = "";
var getCourseNameByURL = "";
var getTeacherByURL;
var getFolderByStudentId;
$(document).ready(function () {
    var info = `<div class="noteitContainer" id="noteitContainer">
    <input type="text" id ="newFolder" class="newFolder" />
    <input type="submit" id ="addNewFolder" class="addNewFolder" value="Add folder"/>
    <select id="selectHighlightFolder">
    <option value="">Others</option> <br>
        </select>
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
       

       <div class="folders" id="folders">
            <p>Saved to "Others"</p>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="306px" height="306px" viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve">
            <g>
                <g id="keyboard-arrow-up">
                    <polygon points="35.7,247.35 153,130.05 270.3,247.35 306,211.65 153,58.65 0,211.65 		"/>
                </g>
            </g>
            </svg>
       </div>

       <div class="folderOption">
           <div class="topPart">
               <span>Where to save your highlight?</span>
                <input type="text" placeholder="Search or add new folder" />
           </div>
           
           <ul>
               <li>Final test</li>
               <li>Salva Espresso</li>
               <li>Raquel Silvia</li>
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
                Create folder "bleh"
            </div>
       </div>
   </div>
   <input type="text" id="hiddenText" hidden>
   <div class="note section" >
       <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           x="0px" y="0px" width="357px" height="357px" viewBox="0 0 357 357"
           style="enable-background:new 0 0 357 357;" xml:space="preserve">
           <g>
               <g id="add">
                   <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />
               </g>
       </svg>
       <span class="addToNotes">Add to notes</span>
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
        <div class="dropdown">
            <select class="selectFolder" id="selectFolder2">
                <option value="AL">Alabama</option>
            </select>
            <input class="chosen-value" type="text" value="" placeholder="Type to filter">
            <ul class="value-list" id="selectFolder">
                <li>Alabama</li>
                <li>Alaska</li>
            </ul>
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
</div>`;

    $('body').append(info);
    var info = "";

    $(document.body).on("mouseup", function (e) {
        if(!window.location.href.startsWith("http://noteitfu.herokuapp.com/")){
            myFunction(e);
        }
    });



    //get DOM element
    var folderOption = $('.folderOption');
    var folderHighlightSection = $('.folders');
    var noteDetailSection = $('#noteDetail');
    var dropdownSection = $('.dropdown');
    
    //set event to DOM
    folderHighlightSection.on("click", (e) => {
        console.log(folderOption);
        folderOption.show();
    })

    //close all popup
    closeAllPopup = function() {
        noteDetailSection.hide();   
        folderOption.hide();
    }

    
    // WHEN LOGIN
    if (window.location.href.startsWith("http://noteitfu.herokuapp.com/?token=") || window.location.href.startsWith("http://localhost:3002/?token=")) {
        var getToken = window.location.href.substring(37);
        getStudent = parseJwt(getToken);
        chrome.storage.sync.set({ key: getStudent }, function () {
            console.log(getStudent);
        });
    }
    // WHEN LOGOUT
    else if (window.location.href === "http://noteitfu.herokuapp.com/" || window.location.href === "http://locahost:3002/") {
        var emptyStudent = null;
        chrome.storage.sync.set({ key: emptyStudent }, function () {
        });
        getStudent = null;
    }
    else if (window.location.href === "http://noteitfu.herokuapp.com/student" || window.location.href === "http://localhost:3002/student") {
        var getToken = window.localStorage.getItem('token');
        getStudent = parseJwt(getToken);
        chrome.storage.sync.set({ key: getStudent }, function () {
            console.log(getStudent);
        });
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
            });
            $.ajax({
                type: "GET",
                url: "https://capstonebackendapi.herokuapp.com/getFolderByStudentID/" + studentId,
                success: function (data) {
                    getFolderByStudentId = data;
                    setDataToSelectBox('#selectHighlightFolder');
                    setDataToSelectBox('#selectFolder');
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
                        $('#ask_section').show();
                        $('#folders').hide();
                    } else {
                        setDataToSelectBox('#selectHighlightFolder');
                        setDataToSelectBox('#selectFolder');
                        $('#ask_section').hide();
                        $('#folders').show();
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
                        document.body.innerHTML = document.body.innerHTML.substring(0, indices[indexOfString]) + "<span style='background-color:" + color + ";'>" + stringFind + "</span>" + document.body.innerHTML.substring(indices[[indexOfString]] + stringFind.length)
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

    //CHOOSE FOLDER AND CREATE FOLDER POPUP
    var folderOption = $('folderOption');
    var searchInput = $('.searchInput');
    var searchInputList = $('.searchInputList');
    var searchItem = $('.searchItem');
    var createFolderBtn = $('#createFolderBtn');

    //hide create folder button at initial
    createFolderBtn.hide();

    //each item onclick
    searchItem.each( function(index, value) {
        let itemDom = $(value);
        let text = itemDom.text();
        let id = itemDom.data("id");

        itemDom.on("click", function() {
            //get current selected item
            let selectedItem = $(".selected");
            //remove selected class from selected item
            selectedItem.removeClass("selected");
            //add selected class to click item
            itemDom.addClass("selected");
            //set selected item text to input
            searchInput.val(text);
            searchInput.data("id", id);
        })
    })

    //search event
    searchInput.on("keyup", function() {
        let searchString = searchInput.val().toLowerCase();
        let matchItemArr = [];

        searchItem.each( function(index, value) {
            let itemDom = $(value);
            let text = itemDom.text().toLowerCase();
            
            if(text.includes(searchString)) {
                itemDom.show();
                matchItemArr.push(itemDom);
            }else {
                itemDom.hide();
            }
        })

        if(matchItemArr.length == 0) {
            createFolderBtn.show();
        }else {
            createFolderBtn.hide();
        }

    })

    //create folder button event
    createFolderBtn.on("click", function() {
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
                alert("Add new folder success");
                var selection = '';
                $.each(getFolderByStudentId, function (key, value) {
                    if (value.courseCode === "Other") {
                        selection += '<option value="' + value._id + '">' + value.courseName + '</option> <br>';
                    }
                    console.log(getFolderByStudentId);
                });
                if (data.folder._id !== "" && data.folder.courseName !== "") {
                    selection += '<option value="' + data.folder._id + '">' + data.folder.courseName + '</option> <br>';
                }
                
                $('#selectHighlightFolder').hide();
                $('#selectHighlightFolder').empty();
                $('#selectHighlightFolder').html(selection);
                $('#selectHighlightFolder').show();
                $('#selectFolder').hide();
                $('#selectFolder').empty();
                $('#selectFolder').html(selection);
                $('#selectFolder').show();
            },
            error: function (data) {
            }
        });

    })

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
        $.ajax({
            type: "POST",
            url: "https://capstonebackendapi.herokuapp.com/createhighlight",
            dataType: "json",
            data: dataPost,
            success: function (data) {
                alert("create highlight success");
                $('#noteitContainer').hide();
            },
            error: function (data) {
            }
        });

    });


    // CLICK ON ADD NOTES ON MENU
    $(document.body).on("click", ".addToNotes", function () {
        if (getFolderByURL !== "") {
            $('#dropdown-btn').hide();
            dropdownSection.hide();
        } else {
            dropdownSection.show();
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
            setTeacherDataToSelectBox('#selectFolder');
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
            folderId = $('.chosen-value')[0].getAttribute('data-id');
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
                $('#noteitContainer').hide();
            },
            error: function (data) {
                alert("failed");
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
        console.log(insertAsk);
        // INSERT INTO DB
        $.ajax({
            type: "POST",
            url: "https://capstonebackendapi.herokuapp.com/createask",
            dataType: "json",
            data: insertAsk,
            success: function (data) {
                alert("success");
                $('#noteitContainer').hide();
            },
            error: function (data) {
                alert("failed");
            }
        });
    });

    //Vanilla JS for search box dropdown
    }) //problem

//SHOW EXTENSION
function myFunction(e) {
    // closeAllPopup();
    var x = window.getSelection().toString();
    if (x.trim() !== "" && !$('#noteitContainer').is(e.target) && $('#noteitContainer').has(e.target).length === 0) {
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

//Initiate dropdown
function initiateDropdown() {
        //set data to dropdown
        const inputField = document.querySelector('.chosen-value');
        const dropdown = document.querySelector('.value-list');
        const dropdownArray = [... document.querySelectorAll('.value-list-item')];
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
        let valueSubstring;
        if (inputValue.length > 0) {
            for (let j = 0; j < valueArray.length; j++) {
            if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
                dropdownArray[j].classList.add('closed');
            } else {
                dropdownArray[j].classList.remove('closed');
            }
            }
        } else {
            for (let i = 0; i < dropdownArray.length; i++) {
            dropdownArray[i].classList.remove('closed');
            }
        }
        });
    
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

// FILL DATA TO SELECT BOX
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
    initiateDropdown();
};

function setTeacherDataToSelectBox(folderName){
    var dropdownSection = $('.dropdown');
    var selection = '';
    if (typeof getTeacherByURL !== "undefined") {
        $.each(getTeacherByURL, function (key, value) {
            // selection += '<option value="' + value._id + '">' + value.name + '</option> <br>';
            selection += `<li class="value-list-item" data-value="${value._id}">${value.name}</li>`;
        });
    }
    dropdownSection.show();
    $(folderName).show();
    $(folderName).empty();
    $(folderName).html(selection);
    initiateDropdown();
};




