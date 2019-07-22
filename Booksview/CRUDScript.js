var SelectedRow=null;
var TotalBooks=0;
var modal = document.querySelector(".modal");
var closeButton = document.querySelector(".close-button");
closeButton.addEventListener("click", toggleModal);
var infomodal = document.querySelector(".infomodal");
var closeButton2 = document.querySelector(".close-button2");
closeButton2.addEventListener("click", toggleinfoModal);
window.addEventListener("click", windowOnClick);
function AddBooks()
{   
    var BookRecord;
    
    modal.classList.toggle("show-modal");
    document.getElementById("Sno").value=document.getElementById("Book").rows.length;
 }

function ReadBook()
{   modal.classList.toggle("show-modal");
    var BookRecord = {};
    BookRecord["Sno"]=document.getElementById("Sno").value;
    BookRecord["BookName"]= document.getElementById("BookName").value;
    BookRecord["Author"]= document.getElementById("Author").value;
    BookRecord["Genre"]= document.getElementById("Genre").value;
    BookRecord["Rating"]=document.getElementById("Rating").value;
    BookRecord["Price"]=document.getElementById("Price").value;
    if(SelectedRow==null)
    InsertIntoTable(BookRecord);
    else
    {  
        UpdateRecord(BookRecord);
        SelectedRow=null;
    }
    ResetForm();
   
}

function InsertIntoTable(BookRecord)
{   
    var Table= document.getElementById("Book").getElementsByTagName('tbody')[0];
    var NewRow = Table.insertRow(Table.length);// Table length is 0 at first. As books get added, length increases by 1
    field0= NewRow.insertCell(0);// 0 is cell index
    field0.innerHTML=BookRecord.Sno;
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
TotalBooks++;
}

function ResetForm()
{
    document.getElementById("BookName").value=" ";
    document.getElementById("Author").value=" ";
    document.getElementById("Genre").value=" ";
    document.getElementById("Rating").value=null;
    document.getElementById("Price").value=null;
    SelectedRow=null;
}

function Edit(td)
{  
    modal.classList.toggle("show-modal");
    SelectedRow= td.parentElement.parentElement;// td.parentElement returns data in that cell. another pe returns tr
    document.getElementById("Sno").value=SelectedRow.cells[0].innerHTML;
    document.getElementById("BookName").value=SelectedRow.cells[1].innerHTML;
    document.getElementById("Author").value=SelectedRow.cells[2].innerHTML;
    document.getElementById("Genre").value=SelectedRow.cells[3].innerHTML;
    document.getElementById("Rating").value=SelectedRow.cells[4].innerHTML;
    document.getElementById("Price").value=SelectedRow.cells[5].innerHTML;
  
}

function UpdateRecord(BookRecord)
{  
    
    SelectedRow.cells[0].innerHTML= BookRecord.Sno;
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
function Snohandler()
{
    //return 999;
alert("formloaded");
    //document.getElementById("Sno").value=999;
    //document.getElementById("Sno").value=document.getElementById("Book").rows.length-1;
}

function toggleModal() {
    modal.classList.toggle("show-modal");
    ResetForm();
}
function toggleinfoModal() {
   
    infomodal.classList.toggle("show-infomodal");
}

function windowOnClick(event) {
    if (event.target === modal) 
        {   
            toggleModal();
        }
        else if(event.target===infomodal)
        {
        toggleinfoModal();
        }
}

function Validate()
{   var flag=0;
    var r=document.getElementById("Rating").value;
    if(r<0 || r>5)
    { flag=1;
      document.getElementById("RatingError").innerHTML="Rating must be on scale of 1-5";
    }
    var p=document.getElementById("Price").value;
    if(p<10||p>100)
    { flag=1;
      document.getElementById("PriceError").innerHTML="Price must be between 1 and 100";
      }
     
    if(flag==0)
    { ReadBook();
    }
    else
    {     
    document.getElementById("Sno").innerHTML=document.getElementById("Sno").value;
    document.getElementById("BookName").innerHTML= document.getElementById("BookName").value;
    document.getElementById("Author").innerHTML= document.getElementById("Author").value;
    document.getElementById("Genre").innerHTML= document.getElementById("Genre").value;
    document.getElementById("Rating").innerHTML=document.getElementById("Rating").value;
    document.getElementById("Price").innerHTML=document.getElementById("Price").value;
    }
}