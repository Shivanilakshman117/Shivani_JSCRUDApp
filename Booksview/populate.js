var pageflag=0,startno,endno;


BookRecord = [
    {   Sno:1, BookName:"Harry Potter and The Sorcerer's Stone", Author:"J. K. Rowling", Genre:"Fiction",Rating:4.95, Price:85},
    {	Sno:2,BookName: "The Great Alone", Author: "Kristin Hannah", Genre:"Fiction", Rating:4.33, Price:34},
    {	Sno:3,BookName: "Circe", Author: "Madeline Miller", Genre:"Fantasy", Rating:4.34, Price:40},
    {	Sno:4,BookName: "The Cruel Prince", Author: "Holly Black", Genre:"Fantasy", Rating:	4.18, Price:52},
    {	Sno:5,BookName: "The Woman in the Window", Author: "A.J. Finn", Genre:"Mystery", Rating:3.97, Price:66},
    {	Sno:6,BookName: "Educated", Author: "Tara Westover", Genre:"Nonfiction", Rating:4.47, Price:64},
    {	Sno:7,BookName: "Children of Blood and Bone", Author: "Tomi Adeyemi", Genre:"Fantasy", Rating:4.25, Price:27},
    {	Sno:8,BookName: "An American Marriage", Author: "Tayari Jones", Genre:"Fiction", Rating:4.01, Price:52},
    {	Sno:9,BookName: "I'll Be Gone in the Dark: One Woman's Obsessive Search for the Golden State Killer", Author: "Michelle McNamara|Gillian Flynn|Patton Oswalt", Genre:"Nonfiction", Rating:4.22, Price:75},
    {	Sno:10,BookName: "The Wife Between Us	", Author: "Greer Hendricks|Sarah Pekkanen", Genre:"Thriller", Rating:3.85, Price:34},
    {	Sno:11,BookName: "Thunderhead", Author: "Neal Shusterman", Genre:"	Young Adult	", Rating:	4.53, Price:51},
    {	Sno:12,BookName: "A Court of Frost and Starlight	", Author: "Sarah J. Maas", Genre:"Fantasy", Rating:3.92, Price:90},
    {	Sno:13,BookName: "The Immortalists", Author: "Chloe  Benjamin", Genre:"Fiction", Rating:3.73, Price:26},
    {	Sno:14,BookName: "The Outsider", Author: "Stephen King", Genre:"Horror", Rating:4.07, Price:52	},
    {	Sno:15,BookName: "Sherlock Holmes", Author: "Sir Arthur Conan Doyle", Genre:"Crime", Rating:5, Price:95},
    {	Sno:16,BookName: "Where the Crawdads Sing", Author: "Delia Owens", Genre:"Fiction", Rating:4.52, Price:	29},
    {	Sno:17,BookName: "Slaughter	", Author: "Shantel Tessier", Genre:"Dark", Rating:4.25, Price:	28},
    {	Sno:18,BookName: "Sky in the Deep", Author: "Adrienne Young", Genre:"Fantasy", Rating:4.05, Price:23},
    {	Sno:19,BookName: "The Death of Mrs. Westaway	", Author: "Ruth Ware", Genre:"Mystery", Rating:3.84, Price:32},
    {	Sno:20,BookName: "Spinning Silver", Author: "Naomi Novik", Genre:"Fantasy", Rating:	4.31, Price:54},
    {	Sno:21,BookName: "Obsidio", Author: "Amie Kaufman|Jay Kristoff", Genre:"Science Fiction", Rating:4.58, Price:62},
    {	Sno:22,BookName: "I Dare You", Author: "Shantel Tessier", Genre:"Dark", Rating:	4.25, Price:82},
    {	Sno:23,BookName: "The Broken Girls	", Author: "Simone St. James", Genre:"Mystery", Rating:4.08, Price:82},
    {	Sno:24,BookName: "Still Me", Author: "Jojo Moyes", Genre:"Fiction", Rating:	4.19, Price:54},
    {	Sno:25,BookName: "Murder on the Orient Express", Author: "Agatha Cristie", Genre:"Mystery",Rating:4.25, Price:74},
    {	Sno:26,BookName: "The Tattooist of Auschwitz", Author: "Heather Morris", Genre:"Historical", Rating:4.33, Price:69},
    {	Sno:27,BookName: "Iron Gold", Author: "Pierce Brown", Genre:"Science Fiction", Rating:4.25, Price:31},
    {	Sno:28,BookName: "Leah on the Offbeat", Author: "Becky Albertalli", Genre:"Young Adult", Rating:4.01, Price:50},
    {	Sno:29,BookName: "A Reaper at the Gates", Author: "Sabaa Tahir", Genre:"Fantasy", Rating:4.27, Price:97},
    {	Sno:30,BookName: "The Hazel Wood", Author: "Melissa Albert", Genre:"Fantasy", Rating:3.61, Price:92}
    ];

var NoOfPages=0;
var TotalBooks=BookRecord.length;
var ViewSize=0;
function Paginate(x)
{   var i;

    //var code="<div class='Pagebutton' id='dynamicbutton'>";
    ViewSize=x;
    NoOfPages= Math.ceil(TotalBooks/ViewSize);
    var mytbl = document.getElementById("Book");
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML
//document.getElementById("Pages").innerHTML=code;
Prepopulate(1);
}

function Prepopulate(PageNo)
{   var i;
    endno=PageNo*ViewSize;
    startno= (endno-ViewSize);
  
//alert("Popfn");
    for(i=startno;i<endno;i++)
    { 
        InsertIntoTable(BookRecord[i]);
    }

}

function DeleteExistingRows(ButtonId)
{   
    var d;
    var mytbl = document.getElementById("Book");
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;
    mytbl.getElementsByTagName("thead")[0].innerHTML= " ";
   // var PageNo= ButtonId.value;
   var PageNo= document.getElementById(ButtonId).value;
    //alert(PageNo);
    Prepopulate(PageNo);
    
}
 function LeftNav()
 { var b1=document.getElementById("b1").value;
   var b2=document.getElementById("b2").value;
   var b3=document.getElementById("b3").value;
   //alert(b1);alert(b2);alert(b3);
     if(b1>1)
 {document.getElementById("b1").innerHTML=b1-1;
 document.getElementById("b1").value=b1-1;
 document.getElementById("b2").innerHTML=b2-1;
 document.getElementById("b2").value=b2-1;
 document.getElementById("b3").innerHTML=b3-1;
 document.getElementById("b3").value=b3-1;
 }
 }
 function RightNav()
 {  var b1=document.getElementById("b1").value;
    var b2=document.getElementById("b2").value;
    var b3=document.getElementById("b3").value;
    
     if(b1<NoOfPages-2)
 {document.getElementById("b1").innerHTML=b1+1;
 document.getElementById("b1").value=b1+1;
 document.getElementById("b2").innerHTML=b2+1;
 document.getElementById("b2").value=b2+1;
 document.getElementById("b3").innerHTML=b3+1;
 document.getElementById("b3").value=b3+1;
 }
 }