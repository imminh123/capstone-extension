$(document).ready(function() {
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
        console.log(folderName);
    })
})