
function Prepopulate()
{ 
    BookRecord = [
{   BookName:"Harry Potter and The Sorcerer's Stone", Author:"J. K. Rowling", Genre:"Fiction",Rating:4.95, Price:85},
{	BookName: "The Great Alone", Author: "Kristin Hannah", Genre:"Fiction", Rating:4.33, Price:34},
{	BookName: "Circe", Author: "Madeline Miller", Genre:"Fantasy", Rating:	4.34, Price:40},
{	BookName: "	The Cruel Prince	", Author: "	Holly Black	", Genre:"	Fantasy	", Rating:	4.18	, Price:	52	},
{	BookName: "	The Woman in the Window	", Author: "	A.J. Finn	", Genre:"	Mystery	", Rating:	3.97	, Price:	66	},
{	BookName: "	Educated	", Author: "	Tara Westover	", Genre:"	Nonfiction	", Rating:	4.47	, Price:	64	},
{	BookName: "	Children of Blood and Bone	", Author: "	Tomi Adeyemi	", Genre:"	Fantasy	", Rating:	4.25	, Price:	27	},
{	BookName: "	An American Marriage	", Author: "	Tayari Jones	", Genre:"	Fiction	", Rating:	4.01	, Price:	52	},
{	BookName: "	I'll Be Gone in the Dark: One Woman's Obsessive Search for the Golden State Killer	", Author: "	Michelle McNamara|Gillian Flynn|Patton Oswalt	", Genre:"	Nonfiction	", Rating:	4.22	, Price:	75	},
{	BookName: "	The Wife Between Us	", Author: "	Greer Hendricks|Sarah Pekkanen	", Genre:"	Thriller	", Rating:	3.85	, Price:	34	},
{	BookName: "	Thunderhead	", Author: "	Neal Shusterman	", Genre:"	Young Adult	", Rating:	4.53	, Price:	51	},
{	BookName: "	A Court of Frost and Starlight	", Author: "	Sarah J. Maas	", Genre:"	Fantasy	", Rating:	3.92	, Price:	90	},
{	BookName: "	The Immortalists	", Author: "	Chloe  Benjamin	", Genre:"	Fiction	", Rating:	3.73	, Price:	26	},
{	BookName: "	The Outsider	", Author: "	Stephen King	", Genre:"	Horror	", Rating:	4.07	, Price:	52	},
{	BookName: "	Sherlock Holmes	", Author: "	Sir Arthur Conan Doyle	", Genre:"	Crime	", Rating:	5	, Price:	95	},
{	BookName: "	Where the Crawdads Sing	", Author: "	Delia Owens	", Genre:"	Fiction	", Rating:	4.52	, Price:	29	},
{	BookName: "	Slaughter	", Author: "	Shantel Tessier	", Genre:"	Dark	", Rating:	4.25	, Price:	28	},
{	BookName: "	Sky in the Deep	", Author: "	Adrienne Young	", Genre:"	Fantasy	", Rating:	4.05	, Price:	23	},
{	BookName: "	The Death of Mrs. Westaway	", Author: "	Ruth Ware	", Genre:"	Mystery	", Rating:	3.84	, Price:	32	},
{	BookName: "	Spinning Silver	", Author: "	Naomi Novik	", Genre:"	Fantasy	", Rating:	4.31	, Price:	54	},
{	BookName: "	Obsidio	", Author: "	Amie Kaufman|Jay Kristoff	", Genre:"	Science Fiction	", Rating:	4.58	, Price:	62	},
{	BookName: "	I Dare You	", Author: "	Shantel Tessier	", Genre:"	Dark	", Rating:	4.25	, Price:	82	},
{	BookName: "	The Broken Girls	", Author: "	Simone St. James	", Genre:"	Mystery	", Rating:	4.08	, Price:	82	},
{	BookName: "	Still Me	", Author: "	Jojo Moyes	", Genre:"	Fiction	", Rating:	4.19	, Price:	54	},
{	BookName: "	Murder on the Orient Express	", Author: "	Agatha Cristie	", Genre:"	Mystery	", Rating:	4.25	, Price:	74	},
{	BookName: "	The Tattooist of Auschwitz	", Author: "	Heather   Morris	", Genre:"	Historical	", Rating:	4.33	, Price:	69	},
{	BookName: "	Iron Gold	", Author: "	Pierce Brown	", Genre:"	Science Fiction	", Rating:	4.25	, Price:	31	},
{	BookName: "	Leah on the Offbeat	", Author: "	Becky Albertalli	", Genre:"	Young Adult	", Rating:	4.01	, Price:	50	},
{	BookName: "	A Reaper at the Gates	", Author: "	Sabaa Tahir	", Genre:"	Fantasy	", Rating:	4.27	, Price:	97	},
{	BookName: "	The Hazel Wood	", Author: "	Melissa Albert	", Genre:"	Fantasy	", Rating:	3.61	, Price:	92	}
];

    for(i=0;i<3;i++)
      {
          InsertIntoTable(BookRecord[i]);
          }

  
}

