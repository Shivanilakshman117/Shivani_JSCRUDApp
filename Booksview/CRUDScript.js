var SelectedRow=null;
function AddBooks()
{
  var BookRecord= ReadBook();
  if(SelectedRow==null)
    InsertIntoTable(BookRecord);
    else
    {  
         UpdateRecord(BookRecord);
    }
  ResetForm();

}

function ReadBook()
{
    var BookRecord = {};
    BookRecord["BookName"]= document.getElementById("BookName").value;
    BookRecord["Author"]= document.getElementById("Author").value;
    BookRecord["Genre"]= document.getElementById("Genre").value;
    BookRecord["Synopsis"]= document.getElementById("Synopsis").value;
    BookRecord["Price"]= document.getElementById("Price").value;
    return BookRecord;
}

function InsertIntoTable(BookRecord)
{
    var Table= document.getElementById("Book").getElementsByTagName('tbody')[0];
    var NewRow = Table.insertRow(Table.length)// Table length is 0 at first. As books get added, length increases by 1
    field1= NewRow.insertCell(0);// 0 is cell index
    field1.innerHTML=BookRecord.BookName;
    field2= NewRow.insertCell(1);
    field2.innerHTML=BookRecord.Author;
    field3= NewRow.insertCell(2);
    field3.innerHTML=BookRecord.Genre;
    field4= NewRow.insertCell(3);
    field4.innerHTML=BookRecord.Synopsis;
    field5= NewRow.insertCell(4);
    field5.innerHTML=BookRecord.Price;
    field6= NewRow.insertCell(5);
    field6.innerHTML=`<a onClick="Edit(this)">Edit</a>
                      <a onClick="Delete(this)">Delete</a>`;// this is a reference to the corresponding td cell
}

function ResetForm()
{
    document.getElementById("BookName").value=" ";
    document.getElementById("Author").value=" ";
    document.getElementById("Genre").value=" ";
    document.getElementById("Synopsis").value=" ";
    document.getElementById("Price").value=" ";
    SelectedRow=null;
}

function Edit(td)
{   var modal = document.querySelector(".modal");
    var closeButton = document.querySelector(".close-button");
    modal.classList.toggle("show-modal");
    SelectedRow= td.parentElement.parentElement;// td.parentElement returns data in that cell. another te returns tr
    document.getElementById("BookName").value=SelectedRow.cells[0].innerHTML;
    document.getElementById("Author").value=SelectedRow.cells[1].innerHTML;
    document.getElementById("Genre").value=SelectedRow.cells[2].innerHTML;
    document.getElementById("Synopsis").value=SelectedRow.cells[3].innerHTML;
    document.getElementById("Price").value=SelectedRow.cells[4].innerHTML;
   
}

function UpdateRecord(BookRecord)
{
    SelectedRow.cells[0].innerHTML= BookRecord.BookName;
    SelectedRow.cells[1].innerHTML= BookRecord.Author;
    SelectedRow.cells[2].innerHTML= BookRecord.Genre;
    SelectedRow.cells[3].innerHTML= BookRecord.Synopsis;
    SelectedRow.cells[4].innerHTML= BookRecord.Price;
}

function Delete(td)
{   row=td.parentElement.parentElement;
    document.getElementById("Book").deleteRow(row.rowIndex);
    ResetForm();
}
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

