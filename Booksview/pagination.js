var NoOfPages=0;

//var TotalBooks= document.getElementById("Book").rows.length;
var ViewSize=0;
function Paginate(x)
{   ViewSize=x;
    NoOfPages= Math.ceil(TotalBooks/ViewSize);
  
var i;
var code=" ";
for(i=1;i<=NoOfPages;i++)
{  
    //pagecode+="<button href='#' onclick=GenerateTable(document.getElementsByName(this.name).innerText)>" + (i+1) + "</button>";
    code+='<button id='+i+' onclick="GenerateTable(this.id)">'+i+'</button>';
     
}
document.getElementById("Pages").innerHTML=code;
}
function GenerateTable(PageNo)
{//document.getElementById("demo1").innerHTML=PageNo;
var i, startno, endno;
endno=PageNo*ViewSize;
startno= (endno-ViewSize)+1;

//document.getElementById("Book").style.visibility = "hidden";

for(i=startno;i<=endno;i++)
{  
    PaginationRecords(ExistingBookRecord[i]);  
}

}

function PageinationRecords(BookRecord)
{   //document.getElementById("BookPagination").style.visibility = "visible";
alert("Hi");    
var Table= document.getElementById("BookPagination").getElementsByTagName('tbody')[0];
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
}

