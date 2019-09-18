var pageflag = 0, startno, endno;
var b1 = 1;
var mytbl = document.getElementById("Book");
var flag = 0;


BookRecord = [
  { BookName: "Harry Potter and The Sorcerer's Stone", Author: "J. K. Rowling", Genre: "Fiction", Rating: 4.95, Price: 85, DelFlag : 0 },
  { BookName: "The Great Alone", Author: "Kristin Hannah", Genre: "Fiction", Rating: 4.33, Price: 34, DelFlag : 0 },
  { BookName: "Circe", Author: "Madeline Miller", Genre: "Fantasy", Rating: 4.34, Price: 40, DelFlag : 0 },
  { BookName: "The Cruel Prince", Author: "Holly Black", Genre: "Fantasy", Rating: 4.18, Price: 52, DelFlag : 0 },
  { BookName: "The Woman in the Window", Author: "A.J. Finn", Genre: "Mystery", Rating: 3.97, Price: 66, DelFlag : 0 },
  { BookName: "Educated", Author: "Tara Westover", Genre: "Nonfiction", Rating: 4.47, Price: 64, DelFlag : 0 },
  { BookName: "Children of Blood and Bone", Author: "Tomi Adeyemi", Genre: "Fantasy", Rating: 4.25, Price: 27, DelFlag : 0 },
  { BookName: "An American Marriage", Author: "Tayari Jones", Genre: "Fiction", Rating: 4.01, Price: 52, DelFlag : 0 },
  { BookName: "I'll Be Gone in the Dark: One Woman's Obsessive Search for the Golden State Killer", Author: "Michelle McNamara|Gillian Flynn|Patton Oswalt", Genre: "Nonfiction", Rating: 4.22, Price: 75, DelFlag : 0 },
  { BookName: "The Wife Between Us	", Author: "Greer Hendricks|Sarah Pekkanen", Genre: "Thriller", Rating: 3.85, Price: 34, DelFlag : 0 },
  { BookName: "Thunderhead", Author: "Neal Shusterman", Genre: "	Young Adult	", Rating: 4.53, Price: 51, DelFlag : 0 },
  { BookName: "A Court of Frost and Starlight	", Author: "Sarah J. Maas", Genre: "Fantasy", Rating: 3.92, Price: 90, DelFlag : 0 },
  { BookName: "The Immortalists", Author: "Chloe  Benjamin", Genre: "Fiction", Rating: 3.73, Price: 26, DelFlag : 0 },
  { BookName: "The Outsider", Author: "Stephen King", Genre: "Horror", Rating: 4.07, Price: 52, DelFlag : 0 },
  { BookName: "Sherlock Holmes", Author: "Sir Arthur Conan Doyle", Genre: "Crime", Rating: 5, Price: 95, DelFlag : 0 },
  { BookName: "Where the Crawdads Sing", Author: "Delia Owens", Genre: "Fiction", Rating: 4.52, Price: 29, DelFlag : 0 },
  { BookName: "Slaughter	", Author: "Shantel Tessier", Genre: "Dark", Rating: 4.25, Price: 28, DelFlag : 0 },
  { BookName: "Sky in the Deep", Author: "Adrienne Young", Genre: "Fantasy", Rating: 4.05, Price: 23, DelFlag : 0 },
  { BookName: "The Death of Mrs. Westaway	", Author: "Ruth Ware", Genre: "Mystery", Rating: 3.84, Price: 32, DelFlag : 0 },
  { BookName: "Spinning Silver", Author: "Naomi Novik", Genre: "Fantasy", Rating: 4.31, Price: 54, DelFlag : 0 },
  { BookName: "Obsidio", Author: "Amie Kaufman|Jay Kristoff", Genre: "Science Fiction", Rating: 4.58, Price: 62, DelFlag : 0 },
  { BookName: "I Dare You", Author: "Shantel Tessier", Genre: "Dark", Rating: 4.25, Price: 82, DelFlag : 0 },
  { BookName: "The Broken Girls	", Author: "Simone St. James", Genre: "Mystery", Rating: 4.08, Price: 82, DelFlag : 0 },
  { BookName: "Still Me", Author: "Jojo Moyes", Genre: "Fiction", Rating: 4.19, Price: 54, DelFlag : 0 },
  { BookName: "Murder on the Orient Express", Author: "Agatha Cristie", Genre: "Mystery", Rating: 4.25, Price: 74, DelFlag : 0 },
  { BookName: "The Tattooist of Auschwitz", Author: "Heather Morris", Genre: "Historical", Rating: 4.33, Price: 69, DelFlag : 0 },
  { BookName: "Iron Gold", Author: "Pierce Brown", Genre: "Science Fiction", Rating: 4.25, Price: 31, DelFlag : 0 },
  { BookName: "Leah on the Offbeat", Author: "Becky Albertalli", Genre: "Young Adult", Rating: 4.01, Price: 50, DelFlag : 0 },
  { BookName: "A Reaper at the Gates", Author: "Sabaa Tahir", Genre: "Fantasy", Rating: 4.27, Price: 97, DelFlag : 0 },
  { BookName: "The Hazel Wood", Author: "Melissa Albert", Genre: "Fantasy", Rating: 3.61, Price: 92, DelFlag : 0}
];

var NoOfPages = Math.ceil(BookRecord.length / ViewSize);
var TotalBooks = BookRecord.length;
var ViewSize = 0;

function Paginate(x) {
  var i;
  
  document.getElementById("b1").innerHTML = 1;
  document.getElementById("b1").value = 1
  ViewSize = parseInt(x);
  NoOfPages = Math.ceil(BookRecord.length / ViewSize);
  var mytbl = document.getElementById("Book");
  mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML
  var button=document.getElementById("b1").innerHTML;
  Prepopulate(button);
}

function Prepopulate(b1) {
  var i;
 
  endno = b1 * ViewSize;
  startno = (endno - ViewSize);
  if (endno > BookRecord.length)
    endno = BookRecord.length;
  if (flag == 0) {
    for (i = startno; i < endno; i++) {
      InsertIntoTable(BookRecord[i]);
      flag = 1;
    }
  }
  else if(flag==1){
    
    for (i = startno; i < endno; i++) {
      
      if(BookRecord[i].DelFlag!=1)
      InsertIntoTable(BookRecord[i]);
    }
  }
}

function LeftNav(id) {
  b1 = parseInt(id);
  var b3 = document.getElementById("b1").innerHTML;
  document.getElementById("RightButton").disabled = false;

  if (b1 > 1) {
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;
    //document.getElementById("Book").deleteTHead();
    document.getElementById("b1").innerHTML = b1 - 1;
    document.getElementById("b1").value = b1 - 1;
    Prepopulate(b1 - 1);
  }
  if ((b3 - 1) == 1) {
    document.getElementById("LeftButton").disabled = true;
  }
}


function RightNav(id) {
  b1 = parseInt(id);
  var b2 = document.getElementById("b1").innerHTML;
  document.getElementById("LeftButton").disabled = false;
  if (b1 < NoOfPages) {

    document.getElementById("b1").innerHTML = b1 + 1;
    document.getElementById("b1").value = b1 + 1;
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;
    //document.getElementById("Book").deleteTHead();
    Prepopulate(b1 + 1);

  }
  if ((b2 + 1) == NoOfPages) {
    document.getElementById("RightButton").disabled = true;
  }

}

function Search() {

  Paginate(BookRecord.length);
  var input, filter, table, tr, td, i, txtValue, searchoption;
  input = document.getElementById("SearchInput");
  searchoption = document.getElementById("SearchOptions").value;
  //alert(searchoption);
  filter = input.value.toUpperCase();
  table = document.getElementById("Book");
  tr = table.getElementsByTagName("tr");
  if (searchoption == "BookName") {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  else if (searchoption == "Author") {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  else if (searchoption == "Genre") {
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];

      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}


function GotoPage(key) {
  var P = parseInt(document.getElementById("GotoInput").value);
  if (P > NoOfPages || P < 1)
    alert("Page does not exist");
  else {
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;
    document.getElementById("Book").deleteTHead();
    Prepopulate(P);
    document.getElementById("b1").innerHTML = P;
    document.getElementById("b1").value = P;
  }
}