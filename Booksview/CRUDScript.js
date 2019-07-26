var SelectedRow = null;
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");
var DeleteModal1 = document.querySelector(".DeleteModal1");
closeButton.addEventListener("click", toggleModal);
var infomodal = document.querySelector(".infomodal");
var closeButton2 = document.querySelector(".close-button2");
closeButton2.addEventListener("click", toggleinfoModal);

window.addEventListener("click", windowOnClick);
var UndoObj = {};
var RowIndex;
var row = {};


function AddBooks() {
   
   
    var BookRecord;
    modal.classList.toggle("show-modal");

}

function ReadBook() {
    modal.classList.toggle("show-modal");
    var UserBook = {};

    UserBook["BookName"] = document.getElementById("BookName").value;
    UserBook["Author"] = document.getElementById("Author").value;
    UserBook["Genre"] = document.getElementById("Genre").value;
    UserBook["Rating"] = document.getElementById("Rating").value;
    UserBook["Price"] = document.getElementById("Price").value;

    if (SelectedRow == null) {
        BookRecord.push(UserBook);
        if (Math.ceil(BookRecord.length / ViewSize) > NoOfPages) {
            NoOfPages = Math.ceil(BookRecord.length / ViewSize);
            document.getElementById("RightButton").disabled = false;
        }
    }
    else {
        UpdateRecord(UserBook);
        SelectedRow = null;
    }
    ResetForm();
    

}

function InsertIntoTable(UserBook) {
    var Table = document.getElementById("Book").getElementsByTagName('tbody')[0];
    var NewRow = Table.insertRow(Table.length);// Table length is 0 at first. As books get added, length increases by 1

    field0 = NewRow.insertCell(0);// 0 is cell index
    field0.innerHTML = "<input type='checkbox' id='CB'>";
    field1 = NewRow.insertCell(1);// 1 is cell index
    field1.innerHTML = UserBook.BookName;
    field2 = NewRow.insertCell(2);
    field2.innerHTML = UserBook.Author;
    field3 = NewRow.insertCell(3);
    field3.innerHTML = UserBook.Genre;
    field4 = NewRow.insertCell(4);
    field4.innerHTML = UserBook.Rating;
    field5 = NewRow.insertCell(5);
    field5.innerHTML = UserBook.Price;
    field6 = NewRow.insertCell(6);
    field6.innerHTML = `<a class= "EditButton" onClick="Edit(this)">Edit</a>
                      <a class= "DeleteButton" onClick="Delete(this)">Delete</a>
                      <a class= "MoreButton" onClick="Info(this)">Info</a>`;// this is a reference to the corresponding td cell

}

function ResetForm() {
    document.getElementById("BookName").value = " ";
    document.getElementById("Author").value = " ";
    document.getElementById("Genre").value = " ";
    document.getElementById("Rating").value = 0;
    document.getElementById("Price").value = 0;
    document.getElementsByClassName("errormsg").innerHTML = " ";
    SelectedRow = null;
}

function Edit(td) {
    modal.classList.toggle("show-modal");
    SelectedRow = td.parentElement.parentElement;// td.parentElement returns data in that cell. another pe returns tr
    //document.getElementById("Sno").value=SelectedRow.cells[0].innerHTML;
    document.getElementById("BookName").value = SelectedRow.cells[1].innerHTML;
    document.getElementById("Author").value = SelectedRow.cells[2].innerHTML;
    document.getElementById("Genre").value = SelectedRow.cells[3].innerHTML;
    document.getElementById("Rating").value = SelectedRow.cells[4].innerHTML;
    document.getElementById("Price").value = SelectedRow.cells[5].innerHTML;

}

function UpdateRecord(BookRecord) {

    //SelectedRow.cells[0].innerHTML= BookRecord.Sno;
    SelectedRow.cells[1].innerHTML = BookRecord.BookName;
    SelectedRow.cells[2].innerHTML = BookRecord.Author;
    SelectedRow.cells[3].innerHTML = BookRecord.Genre;
    SelectedRow.cells[4].innerHTML = BookRecord.Rating;
    SelectedRow.cells[5].innerHTML = BookRecord.Price;
}

function Delete(td) {
    //alert(DeleteModal1);
    DeleteModal1.classList.toggle("show-DeleteModal1");
    row = td.parentElement.parentElement;


}
function DeleteBook() {

    document.getElementById("Book").deleteRow(row.rowIndex);
    BookRecord.splice(row, 1);
    UndoObj = row;
    RowIndex = row.rowIndex;
    document.getElementById("UndoButton").disabled = false;
    ResetForm();
    DeleteModal1.classList.toggle("show-DeleteModal1");
}

function Info(td) {

    infomodal.classList.toggle("show-infomodal");
    SelectedRow = td.parentElement.parentElement;// td.parentElement returns data in that cell. another te returns tr
    document.getElementById("BookName2").innerHTML = SelectedRow.cells[1].innerHTML;
    document.getElementById("Author2").innerHTML = SelectedRow.cells[2].innerHTML;
    document.getElementById("Genre2").innerHTML = SelectedRow.cells[3].innerHTML;
    document.getElementById("Rating2").innerHTML = SelectedRow.cells[4].innerHTML;
    document.getElementById("Price2").innerHTML = SelectedRow.cells[5].innerHTML;
}
function DeleteCheckedBooks() {
    alert("Do you want to delete all checked books?");
    var table = document.getElementById("Book");
    var chkbox;
    var rowCount = table.rows.length;
    document.getElementById("UndoButton").disabled = false;
    for (i = 1; i <= rowCount; i++) /* i is 1 because i=0 points to the thead*/ {
        var row = table.rows[i];
        chkbox = row.cells[0].childNodes[0];
        if (chkbox != null && chkbox.checked == true) {
            table.deleteRow(i);
            rowCount--;
            i--;

        }
    }


}


function Validate() {
    var flag = 0;
    var r = parseInt(document.getElementById("Rating").value);
    var p = parseInt(document.getElementById("Price").value);
    var b = document.getElementById("BookName").value;
    var a = document.getElementById("Author").value;
    document.getElementsByClassName("errormsg").innerHTML = " ";
    if (r < 0 || r > 5) {
        flag = 1;
        document.getElementById("RatingError").innerHTML = "Rating must be on scale of 1-5";
    }
    
    if (p < 10 || p > 100) {
        flag = 1;
        document.getElementById("PriceError").innerHTML = "*Price must be between 10 and 100";
    }
    if (a==" ") {
        flag = 1;
        document.getElementById("AuthorError").innerHTML = "*Required Field";
    }
    if (b==" ") {
        flag = 1;
        document.getElementById("NameError").innerHTML = "*Required Field";
    }

    if (flag == 0) {   
        document.getElementsByClassName("errormsg").innerHTML = " ";
        ReadBook();
    }
    else {
        document.getElementById("BookName").innerHTML = document.getElementById("BookName").value;
        document.getElementById("Author").innerHTML = document.getElementById("Author").value;
        document.getElementById("Genre").innerHTML = document.getElementById("Genre").value;
        document.getElementById("Rating").innerHTML = document.getElementById("Rating").value;
        document.getElementById("Price").innerHTML = document.getElementById("Price").value;
    }
  }

function UndoDelete() {
    BookRecord.splice(RowIndex, 0, UndoObj);
    location.reload();

}

function toggleModal() {
    document.getElementsByClassName("errormsg").innerHTML = " ";
    modal.classList.toggle("show-modal");
    document.getElementsByClassName("errormsg").innerHTML = " ";
    ResetForm();
    
}
function toggleinfoModal() {

    infomodal.classList.toggle("show-infomodal");
}
function toggleDeleteModal1() {

    DeleteModal1.classList.toggle("show-DeleteModal1");
}
function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
    else if (event.target === infomodal) {
        toggleinfoModal();
    }
    else if (event.target === DeleteModal1) {
        toggleDeleteModal1();
    }
}
