var SelectedRow=null;
function AddBooks()
{   var BookRecord= ReadBook();
    if(SelectedRow==null)
        InsertIntoTable(BookRecord);
    else
    {    alert("hi");
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
    BookRecord["Rating"]= document.getElementById("Rating").value;
    BookRecord["Price"]= document.getElementById("Price").value;
    return BookRecord;
   
}

function InsertIntoTable(BookRecord)
{   
    var Table= document.getElementById("Book").getElementsByTagName('tbody')[0];
    var NewRow = Table.insertRow(Table.length);// Table length is 0 at first. As books get added, length increases by 1
    field0= NewRow.insertCell(0);// 0 is cell index
    field0.innerHTML="#";
    field1= NewRow.insertCell(1);// 1 is cell index
    field1.innerHTML=BookRecord.BookName;
    field2= NewRow.insertCell(2);
    field2.innerHTML=BookRecord.Author;
    field3= NewRow.insertCell(3);
    field3.innerHTML=BookRecord.Genre;
    field4= NewRow.insertCell(4);
    field4.innerHTML=BookRecord.Rating;
    field5= NewRow.insertCell(5);
    field5.innerHTML=BookRecord.Price;
    field6= NewRow.insertCell(6);
    field6.innerHTML=`<a class= "EditButton" onClick="Edit(this)">Edit</a>
                      <a class= "DeleteButton" onClick="Delete(this)">Delete</a>
                      <a class= "MoreButton" onClick="Info(this)">Info</a>`;// this is a reference to the corresponding td cell

}

function ResetForm()
{
    document.getElementById("BookName").value=" ";
    document.getElementById("Author").value=" ";
    document.getElementById("Genre").value=" ";
    document.getElementById("Rating").value=" ";
    document.getElementById("Price").value=" ";
    SelectedRow=null;
}

function Edit(td)
{  
    var modal = document.querySelector(".modal");
    var closeButton = document.querySelector(".close-button");
    modal.classList.toggle("show-modal");
    SelectedRow= td.parentElement.parentElement;// td.parentElement returns data in that cell. another pe returns tr
    document.getElementById("BookName").value=SelectedRow.cells[1].innerHTML;
    document.getElementById("Author").value=SelectedRow.cells[2].innerHTML;
    document.getElementById("Genre").value=SelectedRow.cells[3].innerHTML;
    document.getElementById("Rating").value=SelectedRow.cells[4].innerHTML;
    document.getElementById("Price").value=SelectedRow.cells[5].innerHTML;
    alert(SelectedRow);
   
}

function UpdateRecord(BookRecord)
{  
    
    SelectedRow.cells[0].innerHTML= "@";
    SelectedRow.cells[1].innerHTML= BookRecord.BookName;
    SelectedRow.cells[2].innerHTML= BookRecord.Author;
    SelectedRow.cells[3].innerHTML= BookRecord.Genre;
    SelectedRow.cells[4].innerHTML= BookRecord.Rating;
    SelectedRow.cells[5].innerHTML= BookRecord.Price;
}

function Delete(td)
{
    row=td.parentElement.parentElement;
    document.getElementById("Book").deleteRow(row.rowIndex);
    ResetForm();
}

function Info(td)
{
    var infomodal = document.querySelector(".infomodal");
    var closeButton = document.querySelector(".close-button");
    infomodal.classList.toggle("show-infomodal");
    SelectedRow= td.parentElement.parentElement;// td.parentElement returns data in that cell. another te returns tr
    document.getElementById("BookName2").innerHTML=SelectedRow.cells[1].innerHTML;
    document.getElementById("Author2").innerHTML=SelectedRow.cells[2].innerHTML;
    document.getElementById("Genre2").innerHTML=SelectedRow.cells[3].innerHTML;
    document.getElementById("Rating2").innerHTML=SelectedRow.cells[4].innerHTML;
    document.getElementById("Price2").innerHTML=SelectedRow.cells[5].innerHTML;  
}
function DeleteMultiplefn() {
    
    /*var CheckedRows=document.getElementById("Book").getElementsByTagName('tbody')[0];
    //alert(CheckedRows);
    var i = CheckedRows.length; 
    alert(i);
    
    while(i--) { 
        var CheckBook=document.getElementById("CB");
        if(CheckBook.checked==true) {
            //alert("hi");
            //Delete(CheckedRows[i]);
            }
        }
        */
    }

function test()
{
    var Table= document.getElementById("Book").getElementsByTagName('tbody')[0];
    alert(Table.length);
}