var pageflag = 0, startno, endno;
var b1 = 1;
var mytbl = document.getElementById("Book");

BookRecord = [
  { BookName: "Harry Potter and The Sorcerer's Stone", Author: "J. K. Rowling", Genre: "Fiction", Rating: 4.95, Price: 85 },
  { BookName: "The Great Alone", Author: "Kristin Hannah", Genre: "Fiction", Rating: 4.33, Price: 34 },
  { BookName: "Circe", Author: "Madeline Miller", Genre: "Fantasy", Rating: 4.34, Price: 40 },
  { BookName: "The Cruel Prince", Author: "Holly Black", Genre: "Fantasy", Rating: 4.18, Price: 52 },
  { BookName: "The Woman in the Window", Author: "A.J. Finn", Genre: "Mystery", Rating: 3.97, Price: 66 },
  { BookName: "Educated", Author: "Tara Westover", Genre: "Nonfiction", Rating: 4.47, Price: 64 },
  { BookName: "Children of Blood and Bone", Author: "Tomi Adeyemi", Genre: "Fantasy", Rating: 4.25, Price: 27 },
  { BookName: "An American Marriage", Author: "Tayari Jones", Genre: "Fiction", Rating: 4.01, Price: 52 },
  { BookName: "I'll Be Gone in the Dark: One Woman's Obsessive Search for the Golden State Killer", Author: "Michelle McNamara|Gillian Flynn|Patton Oswalt", Genre: "Nonfiction", Rating: 4.22, Price: 75 },
  { BookName: "The Wife Between Us	", Author: "Greer Hendricks|Sarah Pekkanen", Genre: "Thriller", Rating: 3.85, Price: 34 },
  { BookName: "Thunderhead", Author: "Neal Shusterman", Genre: "	Young Adult	", Rating: 4.53, Price: 51 },
  { BookName: "A Court of Frost and Starlight	", Author: "Sarah J. Maas", Genre: "Fantasy", Rating: 3.92, Price: 90 },
  { BookName: "The Immortalists", Author: "Chloe  Benjamin", Genre: "Fiction", Rating: 3.73, Price: 26 },
  { BookName: "The Outsider", Author: "Stephen King", Genre: "Horror", Rating: 4.07, Price: 52 },
  { BookName: "Sherlock Holmes", Author: "Sir Arthur Conan Doyle", Genre: "Crime", Rating: 5, Price: 95 },
  { BookName: "Where the Crawdads Sing", Author: "Delia Owens", Genre: "Fiction", Rating: 4.52, Price: 29 },
  { BookName: "Slaughter	", Author: "Shantel Tessier", Genre: "Dark", Rating: 4.25, Price: 28 },
  { BookName: "Sky in the Deep", Author: "Adrienne Young", Genre: "Fantasy", Rating: 4.05, Price: 23 },
  { BookName: "The Death of Mrs. Westaway	", Author: "Ruth Ware", Genre: "Mystery", Rating: 3.84, Price: 32 },
  { BookName: "Spinning Silver", Author: "Naomi Novik", Genre: "Fantasy", Rating: 4.31, Price: 54 },
  { BookName: "Obsidio", Author: "Amie Kaufman|Jay Kristoff", Genre: "Science Fiction", Rating: 4.58, Price: 62 },
  { BookName: "I Dare You", Author: "Shantel Tessier", Genre: "Dark", Rating: 4.25, Price: 82 },
  { BookName: "The Broken Girls	", Author: "Simone St. James", Genre: "Mystery", Rating: 4.08, Price: 82 },
  { BookName: "Still Me", Author: "Jojo Moyes", Genre: "Fiction", Rating: 4.19, Price: 54 },
  { BookName: "Murder on the Orient Express", Author: "Agatha Cristie", Genre: "Mystery", Rating: 4.25, Price: 74 },
  { BookName: "The Tattooist of Auschwitz", Author: "Heather Morris", Genre: "Historical", Rating: 4.33, Price: 69 },
  { BookName: "Iron Gold", Author: "Pierce Brown", Genre: "Science Fiction", Rating: 4.25, Price: 31 },
  { BookName: "Leah on the Offbeat", Author: "Becky Albertalli", Genre: "Young Adult", Rating: 4.01, Price: 50 },
  { BookName: "A Reaper at the Gates", Author: "Sabaa Tahir", Genre: "Fantasy", Rating: 4.27, Price: 97 },
  { BookName: "The Hazel Wood", Author: "Melissa Albert", Genre: "Fantasy", Rating: 3.61, Price: 92 }
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
  Prepopulate(1);
}

function Prepopulate(b1) {
  var i;
  endno = b1 * ViewSize;
  startno = (endno - ViewSize);
  if (endno > BookRecord.length)
    endno = BookRecord.length;
  for (i = startno; i < endno; i++) {
    InsertIntoTable(BookRecord[i]);
  }
}

function LeftNav(id) {
  b1 = parseInt(id);
  var b3=b1;
  document.getElementById("RightButton").disabled = false;

  if (b1 > 1) {
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;
    document.getElementById("Book").deleteTHead();
    document.getElementById("b1").innerHTML = b1 - 1;
    document.getElementById("b1").value = b1 - 1;
    Prepopulate(b1 - 1);
  }
  if ((b3-1)== 1) {
    document.getElementById("LeftButton").disabled = true;
  }
}


function RightNav(id) {
  b1 = parseInt(id);
  var b2=b1;
  document.getElementById("LeftButton").disabled = false;
  if (b1 < NoOfPages) {

    document.getElementById("b1").innerHTML = b1 + 1;
    document.getElementById("b1").value = b1 + 1;
    mytbl.getElementsByTagName("tbody")[0].innerHTML = mytbl.rows[0].innerHTML;
    document.getElementById("Book").deleteTHead();
    Prepopulate(b1 + 1);

  }
  if ((b2 + 1) == NoOfPages) {
    document.getElementById("RightButton").disabled = true;
  }

}


function Search() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("SearchInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("Book");
  tr = table.getElementsByTagName("tr");
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