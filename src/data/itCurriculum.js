export const IT_CURRICULUM = {
  6: {
    title: "Grade 6: Foundations of Information Technology",
    description: "Master computer system components, IPO model, operating systems, word processing essentials, algorithmic thinking, Scratch visual coding, and netiquette.",
    badge: "Level 1: Fundamentals",
    color: "#3b82f6",
    modules: [
      {
        id: "g6-m1",
        title: "Module 1: Computer Systems & Hardware Architecture",
        icon: "Cpu",
        summary: "Understand the Input-Process-Output (IPO) cycle, functional units, hardware components, and digital memory units.",
        facts: [
          {
            term: "Input-Process-Output (IPO) Model",
            definition: "The fundamental operational cycle of a computer. Data is fed via Input devices, processed by the CPU, and sent to Output devices or stored in Secondary Memory."
          },
          {
            term: "Input Devices",
            definition: "Hardware used to enter data. Examples: Keyboard (QWERTY), Mouse (optical sensor), Barcode Reader (reads UPC bars), OMR (Optical Mark Recognition for exam sheets), OCR (Optical Character Recognition), MICR (Magnetic Ink Character Recognition for bank cheques), Graphics Tablet."
          },
          {
            term: "Central Processing Unit (CPU)",
            definition: "The brain of the computer comprising ALU (Arithmetic Logic Unit for math/comparison operations), CU (Control Unit for directing data flow and decoding instructions), and Registers (high-speed temporary memory)."
          },
          {
            term: "Output Devices",
            definition: "Hardware presenting processed results. Monitors (LCD, LED, OLED measured diagonally in inches), Printers (Impact: Dot Matrix; Non-Impact: Inkjet, Laser, 3D Printer), Plotters (vector graphics), Audio Speakers."
          },
          {
            term: "Primary Memory (Main Memory)",
            definition: "Volatile RAM (Random Access Memory - temporary storage for active data) vs Non-Volatile ROM (Read Only Memory - contains BIOS/UEFI boot routines: PROM, EPROM, EEPROM)."
          },
          {
            term: "Secondary Storage",
            definition: "Non-volatile permanent storage. Magnetic Hard Disk Drives (HDD), Solid State Drives (SSD - faster semiconductor flash memory), USB Flash Drives, Optical Disks (CD-ROM 700MB, DVD 4.7GB, Blu-ray 25GB+)."
          },
          {
            term: "Units of Computer Memory",
            definition: "1 Bit = 0 or 1; 1 Nibble = 4 Bits; 1 Byte = 8 Bits; 1 KB (Kilobyte) = 1,024 Bytes; 1 MB (Megabyte) = 1,024 KB; 1 GB (Gigabyte) = 1,024 MB; 1 TB (Terabyte) = 1,024 GB; 1 PB (Petabyte) = 1,024 TB."
          }
        ],
        comparisonTable: {
          title: "Primary Memory vs Secondary Memory",
          headers: ["Feature", "Primary Memory (RAM)", "Secondary Storage (SSD/HDD)"],
          rows: [
            ["Nature", "Volatile (loses data on power loss)", "Non-Volatile (retains data permanently)"],
            ["Speed", "Ultra Fast (direct CPU bus access)", "Slower compared to RAM"],
            ["Capacity", "Typically 8GB - 64GB", "Typically 256GB - 4TB+"],
            ["Cost per GB", "Higher", "Lower"]
          ]
        },
        flashcards: [
          { q: "What is the smallest unit of digital memory?", a: "A Bit (Binary Digit - 0 or 1)." },
          { q: "How many Bytes make 1 Kilobyte in binary standard?", a: "1,024 Bytes (2^10 Bytes)." },
          { q: "Which printer type uses laser beams and toner powder?", a: "Non-Impact Laser Printer." },
          { q: "What is the role of the Control Unit (CU) in the CPU?", a: "It directs and coordinates all operational activities, data flow, and instruction execution." }
        ],
        quiz: [
          {
            question: "Which of the following is a non-impact printer?",
            options: ["Dot Matrix Printer", "Daisy Wheel Printer", "Laser Printer", "Line Printer"],
            correct: 2,
            explanation: "Laser printers use non-impact electrostatic technology and toner powder to print high-speed text and graphics without physical striking."
          },
          {
            question: "How many bits are in a Nibble?",
            options: ["2 bits", "4 bits", "8 bits", "16 bits"],
            correct: 1,
            explanation: "A Nibble consists of exactly 4 binary bits (half of a Byte)."
          },
          {
            question: "Which type of memory holds the BIOS firmware used during system boot-up?",
            options: ["RAM", "ROM", "Cache", "HDD"],
            correct: 1,
            explanation: "ROM (Read Only Memory) contains non-volatile bootup programs such as BIOS/UEFI."
          }
        ]
      },
      {
        id: "g6-m2",
        title: "Module 2: Operating Systems & File Management",
        icon: "HardDrive",
        summary: "Explore OS tasks, GUI components, file structures, extensions, and file system management.",
        facts: [
          {
            term: "Operating System (OS)",
            definition: "System software acting as an interface between the computer hardware and the user. Controls memory allocation, process scheduling, device drivers, and file systems."
          },
          {
            term: "Key Functions of an OS",
            definition: "1. Processor Management (CPU Scheduling). 2. Memory Management (RAM allocation). 3. File System Management (directory trees). 4. Device Management (I/O drivers). 5. Security & Access Control."
          },
          {
            term: "GUI vs CLI",
            definition: "GUI (Graphical User Interface - icons, windows, pointer, menus like Windows 11/macOS) vs CLI (Command Line Interface - text commands like MS-DOS, Linux Bash)."
          },
          {
            term: "File Extensions",
            definition: "Suffixes indicating file type: .txt (Plain Text), .docx (Word Doc), .pdf (Portable Document Format), .xlsx (Excel Sheet), .jpg / .png (Images), .mp3 (Audio), .mp4 (Video), .py (Python Script), .html (Web Document)."
          },
          {
            term: "File Path (Absolute vs Relative)",
            definition: "Absolute Path gives full address from root drive (e.g. C:\\Users\\Student\\Documents\\notes.txt); Relative Path locates files relative to current working directory."
          }
        ],
        flashcards: [
          { q: "What does GUI stand for?", a: "Graphical User Interface." },
          { q: "Which file extension represents a PNG image?", a: ".png (Portable Network Graphics)." },
          { q: "Name two single-user operating systems and two multi-user operating systems.", a: "Single-user: MS-DOS, early Windows; Multi-user: Linux, UNIX, Windows Server." }
        ],
        quiz: [
          {
            question: "Which of the following is NOT an Operating System?",
            options: ["Linux", "Windows 11", "Google Chrome", "macOS Sequoia"],
            correct: 2,
            explanation: "Google Chrome is an Application Software (Web Browser), not an Operating System."
          },
          {
            question: "What does an absolute file path start from?",
            options: ["The current folder", "The root directory or drive letter", "The internet server", "The file extension"],
            correct: 1,
            explanation: "An absolute path specifies the complete location from the top-level root directory (e.g., C:\\ or /home/)."
          }
        ]
      },
      {
        id: "g6-m3",
        title: "Module 3: Word Processing Essentials",
        icon: "FileText",
        summary: "Master document creation, text formatting, line spacing, margins, header/footer, tables, and spell check.",
        facts: [
          {
            term: "Word Processor",
            definition: "An application software designed for formatting, editing, creating, and printing digital documents (e.g., Microsoft Word, Google Docs, LibreOffice Writer)."
          },
          {
            term: "Character & Paragraph Formatting",
            definition: "Font Family (e.g., Arial, Times New Roman), Font Size (points), Font Weight (Bold, Italic, Underline, Subscript H2O, Superscript E=mc2), Line Spacing (1.0, 1.5, 2.0), Paragraph Alignment (Left, Right, Center, Justified)."
          },
          {
            term: "Page Setup & Layout",
            definition: "Margins (Top, Bottom, Left, Right), Page Orientation (Portrait - vertical vs Landscape - horizontal), Paper Size (A4, Letter, Legal)."
          },
          {
            term: "Proofing & Editing Tools",
            definition: "Spell Check (Red squiggly underline), Grammar Check (Blue/Green squiggly underline), Thesaurus (synonyms finder), Find and Replace (Ctrl+F / Ctrl+H)."
          }
        ],
        flashcards: [
          { q: "What key combination opens the Find and Replace dialog in Microsoft Word?", a: "Ctrl + H (or Ctrl + F for Find)." },
          { q: "What is the difference between Portrait and Landscape page orientation?", a: "Portrait is taller than wide (vertical); Landscape is wider than tall (horizontal)." }
        ],
        quiz: [
          {
            question: "Which text alignment distributes text evenly between left and right margins?",
            options: ["Left Align", "Center Align", "Justify", "Right Align"],
            correct: 2,
            explanation: "Justify alignment adds extra spacing between words so text aligns flush along both left and right margins."
          }
        ]
      },
      {
        id: "g6-m4",
        title: "Module 4: Computational Thinking & Algorithmic Logic",
        icon: "GitFork",
        summary: "Learn logic formulation, step-by-step algorithms, flowchart symbols, and Scratch block coding.",
        facts: [
          {
            term: "Algorithm",
            definition: "A finite, unambiguous sequence of step-by-step instructions designed to solve a specific problem or perform a task."
          },
          {
            term: "Key Properties of an Algorithm",
            definition: "1. Input (0 or more defined inputs). 2. Output (at least 1 result). 3. Definiteness (clear steps). 4. Finiteness (terminates after finite steps). 5. Feasibility."
          },
          {
            term: "Flowchart Symbols",
            definition: "• Oval (Start / End / Terminator)\n• Rectangle (Process / Calculation)\n• Parallelogram (Input / Output)\n• Diamond (Decision / Condition check with Yes/No branches)\n• Arrows (Flow line direction)\n• Circle (Connector)."
          },
          {
            term: "Visual Block Programming (Scratch)",
            definition: "Scratch developed by MIT Media Lab. Uses drag-and-drop block scripts: Motion (move 10 steps), Looks (say Hello), Control (repeat 10 times, if-then), Sensing, Variables."
          }
        ],
        flashcards: [
          { q: "Which flowchart shape represents a decision or condition test?", a: "Diamond shape." },
          { q: "Which block in Scratch is used to repeat actions continuously?", a: "The 'forever' loop block in the Control palette." }
        ],
        quiz: [
          {
            question: "In a flowchart, which symbol is used to read input from a user?",
            options: ["Rectangle", "Parallelogram", "Diamond", "Oval"],
            correct: 1,
            explanation: "Parallelogram is used to represent Input and Output operations in standard flowcharts."
          }
        ]
      },
      {
        id: "g6-m5",
        title: "Module 5: Internet Fundamentals & Cyber Netiquette",
        icon: "Globe",
        summary: "Understand ARPANET, WWW, web servers, HTTP protocol, URLs, search engines, and online safety rules.",
        facts: [
          {
            term: "Internet vs World Wide Web (WWW)",
            definition: "The Internet is the global physical infrastructure of interconnected computer networks. The WWW is an information service operating ON TOP of the internet using HTTP to link web pages created by Sir Tim Berners-Lee in 1989."
          },
          {
            term: "Uniform Resource Locator (URL)",
            definition: "The unique address of a web page. Syntax: protocol://domain_name/path (e.g. https://www.wikipedia.org/wiki/Computer). Component: https (secure protocol), www.wikipedia.org (domain name)."
          },
          {
            term: "Web Browser vs Search Engine",
            definition: "Web Browser: Application used to view web pages (Chrome, Firefox, Safari, Edge). Search Engine: Web program that indexes internet content to find information (Google, Bing, DuckDuckGo)."
          },
          {
            term: "Netiquette Rules",
            definition: "1. Respect privacy. 2. Do not use ALL CAPS (equivalent to shouting). 3. Avoid spreading unverified rumors/fake news. 4. Never share passwords or personal identifiable information (PII) with strangers."
          }
        ],
        flashcards: [
          { q: "Who invented the World Wide Web and in what year?", a: "Sir Tim Berners-Lee in 1989." },
          { q: "What does the 's' stand for in 'https://'?", a: "Secure (HTTP Secure - uses SSL/TLS encryption)." }
        ],
        quiz: [
          {
            question: "What component of a URL identifies the specific web server or site host?",
            options: ["Protocol", "Domain Name", "File Extension", "IP Address"],
            correct: 1,
            explanation: "The Domain Name (e.g. google.com) identifies the web server hosting the website."
          }
        ]
      }
    ]
  },
  7: {
    title: "Grade 7: Intermediate IT & Programming Concepts",
    description: "Spreadsheet mathematical formulas, cyber security & malware defense, HTML5 markup, Python programming basics, and digital number systems.",
    badge: "Level 2: Intermediate",
    color: "#10b981",
    modules: [
      {
        id: "g7-m1",
        title: "Module 1: Advanced Spreadsheet Calculations (Excel/Sheets)",
        icon: "Table",
        summary: "Cell addresses, formulas, built-in functions, cell referencing (Relative, Absolute, Mixed), and sorting.",
        facts: [
          {
            term: "Spreadsheet Grid Anatomy",
            definition: "Columns (labeled A, B, C... up to XFD - 16,384 columns), Rows (numbered 1, 2, 3... up to 1,048,576 rows). Cell: Intersection of row and column (e.g., C4)."
          },
          {
            term: "Formulas vs Functions",
            definition: "Formulas begin with '=' and contain manual mathematical expressions (e.g. =A1+B1*0.1). Functions are built-in pre-written formulas (e.g. =SUM(A1:A10))."
          },
          {
            term: "Core Excel Functions",
            definition: "• =SUM(range): Adds all values in range.\n• =AVERAGE(range): Calculates arithmetic mean.\n• =MAX(range) & =MIN(range): Returns highest/lowest value.\n• =COUNT(range): Counts cells containing numbers.\n• =COUNTA(range): Counts non-empty cells."
          },
          {
            term: "Cell Referencing Types",
            definition: "• Relative Reference (A1): Changes automatically when formula is copied across cells.\n• Absolute Reference ($A$1): Remains fixed regardless of where formula is moved/copied.\n• Mixed Reference ($A1 or A$1): Locks only row or column."
          }
        ],
        interactiveType: "spreadsheetEvaluator",
        flashcards: [
          { q: "What symbol must every formula in Microsoft Excel or Google Sheets start with?", a: "The Equals sign (=)." },
          { q: "How do you make cell reference B5 absolute when copying a formula?", a: "Add dollar signs: $B$5." }
        ],
        quiz: [
          {
            question: "If cell A1 contains 10 and A2 contains 20, what will =AVERAGE(A1:A2) return?",
            options: ["30", "15", "200", "1020"],
            correct: 1,
            explanation: "(10 + 20) / 2 = 15."
          },
          {
            question: "Which cell reference locks row 5 but allows column A to adjust relatively?",
            options: ["$A$5", "A$5", "$A5", "A5"],
            correct: 1,
            explanation: "A$5 has a dollar sign preceding the row number (5), keeping the row absolute while column A remains relative."
          }
        ]
      },
      {
        id: "g7-m2",
        title: "Module 2: Computer Security, Viruses & Malware",
        icon: "ShieldAlert",
        summary: "Identify types of malicious software (Viruses, Worms, Trojans, Ransomware), phishing attacks, and protection tools.",
        facts: [
          {
            term: "Malware (Malicious Software)",
            definition: "Any software intentionally designed to cause damage, steal data, or compromise a computer system."
          },
          {
            term: "Types of Malware",
            definition: "• Virus: Malicious code attached to executable files; needs human action to run & infect.\n• Worm: Standalone self-replicating program that spreads across computer networks without host files.\n• Trojan Horse: Disguised as legitimate helpful software (e.g. game patch) but executes hidden payload.\n• Ransomware: Encrypts victim's files and demands ransom money for decryption key (e.g. WannaCry).\n• Spyware / Keylogger: Monitors user keystrokes to steal passwords and financial credit card data."
          },
          {
            term: "Phishing & Social Engineering",
            definition: "Fraudulent attempts to trick users into revealing sensitive credentials by impersonating trustworthy organizations via fake emails or websites."
          },
          {
            term: "Cyber Defense Mechanisms",
            definition: "1. Antivirus (signature scanning & heuristic analysis). 2. Firewall (monitors network traffic). 3. Strong Passwords & Two-Factor Authentication (2FA/MFA). 4. Software patching."
          }
        ],
        flashcards: [
          { q: "What is the primary difference between a Computer Virus and a Network Worm?", a: "A Virus requires a host file and user activation; a Worm is standalone and self-replicates across networks autonomously." },
          { q: "What is Ransomware?", a: "Malware that encrypts user data and demands financial payment to release the key." }
        ],
        quiz: [
          {
            question: "Which type of malware pretends to be a useful program while secretly executing harmful code?",
            options: ["Worm", "Trojan Horse", "Adware", "Rootkit"],
            correct: 1,
            explanation: "A Trojan Horse masks itself as legitimate software to deceive users into installing it."
          }
        ]
      },
      {
        id: "g7-m3",
        title: "Module 3: Web Development with HTML5",
        icon: "Code",
        summary: "Structure web pages with HTML tags, headings, paragraphs, lists, links, images, and semantic layout tags.",
        facts: [
          {
            term: "HTML Anatomy",
            definition: "HTML (HyperText Markup Language) uses tags inside angle brackets (<tag>). Standard document structure:\n<!DOCTYPE html>\n<html>\n<head><title>Page Title</title></head>\n<body>Content goes here</body>\n</html>"
          },
          {
            term: "Container vs Empty Tags",
            definition: "Container Tags have opening and closing tags (e.g. <h1>Title</h1>, <p>Paragraph</p>). Empty Tags have no closing tag (e.g. <br> line break, <hr> horizontal rule, <img src='pic.jpg'>)."
          },
          {
            term: "Formatting & Headings",
            definition: "Headings <h1> (largest) to <h6> (smallest). Text formatting: <b> or <strong> (bold), <i> or <em> (italic), <u> (underline), <mark> (highlighted)."
          },
          {
            term: "Hyperlinks & Images",
            definition: "Hyperlink: <a href='https://example.com'>Click Here</a>. Image: <img src='pic.jpg' alt='Description' width='300'>"
          },
          {
            term: "Lists",
            definition: "Unordered List (bulleted): <ul><li>Item</li></ul>. Ordered List (numbered): <ol type='1'><li>Item</li></ol>."
          }
        ],
        interactiveType: "htmlSandbox",
        flashcards: [
          { q: "Which tag is used to insert a line break without starting a new paragraph?", a: "The <br> tag." },
          { q: "What attribute specifies the URL of the image in an <img> tag?", a: "The src (source) attribute." }
        ],
        quiz: [
          {
            question: "Which tag creates an ordered (numbered) list in HTML?",
            options: ["<ul>", "<ol>", "<list>", "<dl>"],
            correct: 1,
            explanation: "<ol> stands for Ordered List."
          }
        ]
      },
      {
        id: "g7-m4",
        title: "Module 4: Introduction to Python Programming",
        icon: "Terminal",
        summary: "Learn Python syntax, variables, basic data types (int, float, str, bool), I/O operations, and arithmetic operators.",
        facts: [
          {
            term: "Python Overview",
            definition: "Created by Guido van Rossum in 1991. High-level, interpreted, dynamically typed language noted for readability and clean syntax."
          },
          {
            term: "Variables & Data Types",
            definition: "Variables store data. Primary data types:\n• int: Whole numbers (e.g. age = 14)\n• float: Decimal numbers (e.g. price = 99.50)\n• str: Text strings inside quotes (e.g. name = 'Alex')\n• bool: Truth values (True or False)."
          },
          {
            term: "Input and Output",
            definition: "Output: print('Hello World'). Input: user_name = input('Enter name: ') (Note: input() returns string data, requiring casting like int(input()) for numbers)."
          },
          {
            term: "Python Arithmetic Operators",
            definition: "• Addition +, Subtraction -, Multiplication *, Division / (returns float)\n• Floor Division // (truncates decimal)\n• Modulus % (returns remainder)\n• Exponentiation ** (power, e.g. 2**3 is 8)."
          }
        ],
        interactiveType: "pythonRunner",
        flashcards: [
          { q: "What data type does the Python input() function return by default?", a: "String (str)." },
          { q: "What is the output of 17 % 5 in Python?", a: "2 (since 17 divided by 5 is 3 with a remainder of 2)." }
        ],
        quiz: [
          {
            question: "What is the result of 10 // 3 in Python?",
            options: ["3.333", "3", "1", "3.0"],
            correct: 1,
            explanation: "// is floor division which discards fractional remainders and returns integer 3."
          }
        ]
      },
      {
        id: "g7-m5",
        title: "Module 5: Number Systems & Digital Representation",
        icon: "Hash",
        summary: "Master Binary (Base 2), Octal (Base 8), Decimal (Base 10), Hexadecimal (Base 16), and conversions.",
        facts: [
          {
            term: "Number System Bases",
            definition: "• Decimal (Base 10): Digits 0 to 9.\n• Binary (Base 2): Digits 0 and 1.\n• Octal (Base 8): Digits 0 to 7.\n• Hexadecimal (Base 16): Digits 0 to 9 and letters A (10) to F (15)."
          },
          {
            term: "Decimal to Binary Conversion",
            definition: "Divide decimal number repeatedly by 2 and record remainders from bottom to top (MSB to LSB). Example: 13₁₀ -> 13/2=6 rem 1, 6/2=3 rem 0, 3/2=1 rem 1, 1/2=0 rem 1 => 1101₂."
          },
          {
            term: "Binary to Decimal Conversion",
            definition: "Multiply each binary bit by powers of 2 (starting from 2⁰ at rightmost bit). Example: 1011₂ = (1×2³) + (0×2²) + (1×2¹) + (1×2⁰) = 8 + 0 + 2 + 1 = 11₁₀."
          },
          {
            term: "Character Encoding Standards",
            definition: "• ASCII (American Standard Code for Information Interchange): 7-bit (128 chars) or 8-bit (256 chars).\n• Unicode: Universal standard mapping over 140,000 characters across all human languages (UTF-8, UTF-16)."
          }
        ],
        interactiveType: "numberConverter",
        flashcards: [
          { q: "What is the decimal equivalent of binary number 1111?", a: "15 (8 + 4 + 2 + 1)." },
          { q: "In Hexadecimal, what decimal value does the letter 'E' represent?", a: "14 (A=10, B=11, C=12, D=13, E=14, F=15)." }
        ],
        quiz: [
          {
            question: "Convert decimal 25 into Binary.",
            options: ["11001", "10101", "11100", "10011"],
            correct: 0,
            explanation: "25 = 16 + 8 + 1 = 1x2^4 + 1x2^3 + 0x2^2 + 0x2^1 + 1x2^0 = 11001 in binary."
          }
        ]
      }
    ]
  },
  8: {
    title: "Grade 8: Database Systems, Networks & Advanced Web",
    description: "RDBMS fundamentals, advanced spreadsheet functions & charts, CSS web styling, computer networking topologies, and Python loops & lists.",
    badge: "Level 3: Application & Systems",
    color: "#f59e0b",
    modules: [
      {
        id: "g8-m1",
        title: "Module 1: Relational Database Systems (DBMS)",
        icon: "Database",
        summary: "Understand databases, tables, records, fields, Primary Keys, Foreign Keys, and RDBMS advantages.",
        facts: [
          {
            term: "Database Management System (DBMS)",
            definition: "Software that allows users to create, maintain, and query structured data efficiently (e.g. MySQL, PostgreSQL, MS Access, SQLite)."
          },
          {
            term: "RDBMS Terminology",
            definition: "• Table (Relation): Grid of rows and columns.\n• Row (Tuple / Record): Single complete entry of data.\n• Column (Attribute / Field): Named property representing data category.\n• Domain: Set of permissible values for an attribute."
          },
          {
            term: "Database Keys",
            definition: "• Primary Key: Attribute(s) that uniquely identify each record in a table. Cannot contain NULL values or duplicate values.\n• Candidate Key: All attribute sets capable of serving as a primary key.\n• Foreign Key: Attribute in a child table that references the Primary Key of a parent table, establishing relationships and referential integrity."
          },
          {
            term: "Advantages of DBMS over Flat Files",
            definition: "1. Eliminates data redundancy (duplication). 2. Enforces data integrity. 3. Enhances security. 4. Supports concurrent multi-user access."
          }
        ],
        flashcards: [
          { q: "What key constraint uniquely identifies every record in a relational database table?", a: "Primary Key." },
          { q: "What is a Foreign Key?", a: "A field in one table that links to the Primary Key of another table to establish relationships." }
        ],
        quiz: [
          {
            question: "Which DBMS property guarantees that Primary Key fields cannot contain missing values?",
            options: ["Foreign Key constraint", "Entity Integrity / NOT NULL constraint", "Redundancy rule", "Domain boundary"],
            correct: 1,
            explanation: "Primary keys enforce entity integrity requiring every record to have a unique non-null primary key value."
          }
        ]
      },
      {
        id: "g8-m2",
        title: "Module 2: Spreadsheet Data Analysis & Charting",
        icon: "BarChart3",
        summary: "Logical IF statements, COUNTIF/SUMIF, chart creation, and multi-level data sorting & filtering.",
        facts: [
          {
            term: "Logical & Conditional Functions",
            definition: "• =IF(test, value_if_true, value_if_false): Evaluates a condition. E.g. =IF(A1>=50, 'Pass', 'Fail').\n• =COUNTIF(range, criteria): Counts cells meeting criteria. E.g. =COUNTIF(B2:B20, '>100').\n• =SUMIF(range, criteria, [sum_range]): Sums cells meeting condition."
          },
          {
            term: "Chart Types & Applications",
            definition: "• Column / Bar Chart: Compares discrete categories.\n• Line Chart: Tracks continuous trends over time.\n• Pie Chart: Shows relative proportions of a whole (100%).\n• Scatter Plot (XY): Shows relationships/correlation between two numerical variables."
          },
          {
            term: "Chart Components",
            definition: "Chart Title, X-Axis (Category Axis), Y-Axis (Value Axis), Plot Area, Data Series, Legend (key explaining colors), Data Labels."
          }
        ],
        interactiveType: "spreadsheetEvaluator",
        flashcards: [
          { q: "Which Excel function counts cells only if they satisfy a specific condition?", a: "=COUNTIF()." },
          { q: "Which chart type is best suited for showing continuous trends over months?", a: "Line Chart." }
        ],
        quiz: [
          {
            question: "What will =IF(80 > 75, 'Distinction', 'Pass') evaluate to?",
            options: ["Distinction", "Pass", "TRUE", "Error"],
            correct: 0,
            explanation: "Since 80 is greater than 75, the true branch returns 'Distinction'."
          }
        ]
      },
      {
        id: "g8-m3",
        title: "Module 3: Styling Web Pages with CSS3",
        icon: "Palette",
        summary: "Apply CSS rules, selectors (element, class, ID), inline/internal/external CSS, colors, fonts, and the CSS Box Model.",
        facts: [
          {
            term: "CSS Syntax",
            definition: "CSS (Cascading Style Sheets) formats HTML markup. Structure: selector { property: value; }. Example: h1 { color: blue; font-size: 24px; }."
          },
          {
            term: "CSS Methods of Insertion",
            definition: "1. Inline CSS: <p style='color: red;'>\n2. Internal CSS: Inside <style> tags in HTML <head>.\n3. External CSS: Linked via <link rel='stylesheet' href='styles.css'> in <head>."
          },
          {
            term: "CSS Selectors",
            definition: "• Element Selector: p { ... } targets all <p> tags.\n• Class Selector: .btn { ... } targets elements with class='btn'.\n• ID Selector: #navbar { ... } targets single element with id='navbar'."
          },
          {
            term: "The CSS Box Model",
            definition: "Every HTML element is a box consisting of:\n1. Content (text/image)\n2. Padding (clears area around content, inside border)\n3. Border (surrounds padding & content)\n4. Margin (clears area outside border, separating from other elements)."
          }
        ],
        interactiveType: "htmlSandbox",
        flashcards: [
          { q: "What symbol precedes a CSS Class name in style rules?", a: "A dot (. e.g. .card)." },
          { q: "In the CSS Box Model, what space lies between the content and the border?", a: "Padding." }
        ],
        quiz: [
          {
            question: "Which CSS selector targets an HTML element with id='main-header'?",
            options: [".main-header", "#main-header", "*main-header", "header.main"],
            correct: 1,
            explanation: "The hash symbol # is used to target unique element IDs in CSS."
          }
        ]
      },
      {
        id: "g8-m4",
        title: "Module 4: Computer Networks & Communication",
        icon: "Network",
        summary: "Network scales (PAN, LAN, MAN, WAN), network topologies (Bus, Star, Ring, Mesh), and networking hardware.",
        facts: [
          {
            term: "Network Classifications by Scale",
            definition: "• PAN (Personal Area Network): Range ~10m (Bluetooth, Zigbee).\n• LAN (Local Area Network): Range within single building or office (Ethernet, Wi-Fi).\n• MAN (Metropolitan Area Network): Covers a city (Cable TV network).\n• WAN (Wide Area Network): Spans countries/globally (The Internet)."
          },
          {
            term: "Network Topologies",
            definition: "• Star Topology: All nodes connect to central Hub/Switch. Easy troubleshooting; single point of failure at hub.\n• Bus Topology: Nodes connected along single central backbone cable with terminators.\n• Ring Topology: Circular token-passing ring; failure of one node breaks ring.\n• Mesh Topology: Every node connected directly to every other node (High redundancy, fault tolerant, costly)."
          },
          {
            term: "Networking Hardware Devices",
            definition: "• NIC (Network Interface Card): Contains hardcoded 48-bit MAC address.\n• Switch: Intelligent device that forwards data packets only to intended target MAC address.\n• Hub: Legacy device broadcasting packets to all connected ports.\n• Router: Connects different networks together using IP addresses.\n• Modem: Converts analog signals to digital signals (Modulator-Demodulator)."
          }
        ],
        comparisonTable: {
          title: "Network Topologies Comparison",
          headers: ["Topology", "Central Device", "Fault Tolerance", "Cost"],
          rows: [
            ["Star", "Hub or Switch", "Moderate (Hub fails = network down)", "Moderate"],
            ["Bus", "None (Backbone cable)", "Low (Cable break breaks all)", "Low"],
            ["Ring", "None (Token ring)", "Low (One node failure breaks ring)", "Moderate"],
            ["Mesh", "None (Direct links)", "Very High (Multiple alternate paths)", "Very High"]
          ]
        },
        flashcards: [
          { q: "What is a MAC address?", a: "Media Access Control address - a unique 48-bit hardware address assigned to a NIC by the manufacturer." },
          { q: "What is the main advantage of a Mesh network topology?", a: "High fault tolerance and redundancy because every node is connected to all other nodes." }
        ],
        quiz: [
          {
            question: "Which device connects two entirely different networks (e.g. LAN to the Internet)?",
            options: ["Repeater", "Hub", "Router", "Bridge"],
            correct: 2,
            explanation: "A Router inspects destination IP addresses to route data packets between disparate networks."
          }
        ]
      },
      {
        id: "g8-m5",
        title: "Module 5: Python Loops & List Structures",
        icon: "Repeat",
        summary: "Master for loops with range(), while loops, break/continue, and Python List operations.",
        facts: [
          {
            term: "Iterative Loops in Python",
            definition: "• for loop: Iterates over sequences (lists, ranges, strings).\nSyntax: for i in range(start, stop, step): (Note: stop boundary is excluded!).\n• while loop: Continues execution as long as boolean condition evaluates to True."
          },
          {
            term: "Loop Control Statements",
            definition: "• break: Immediately exits loop.\n• continue: Skips remainder of current iteration and moves to next loop cycle.\n• pass: Null placeholder statement."
          },
          {
            term: "Python Lists",
            definition: "Ordered, mutable (changeable) sequences enclosed in square brackets []. Indexing starts at 0. Negative indexing starts at -1 (last item)."
          },
          {
            term: "List Methods",
            definition: "• fruits.append('apple'): Adds item to end.\n• fruits.insert(1, 'mango'): Inserts item at index.\n• fruits.pop(index): Removes & returns item.\n• fruits.sort(): Sorts list in-place."
          }
        ],
        interactiveType: "pythonRunner",
        flashcards: [
          { q: "What numbers will range(1, 5) generate in Python?", a: "1, 2, 3, 4 (stops before 5)." },
          { q: "How do you access the last element of a Python list nums?", a: "Using nums[-1]." }
        ],
        quiz: [
          {
            question: "What is the output of len([10, 20, 30, 40])?",
            options: ["3", "4", "5", "0"],
            correct: 1,
            explanation: "There are 4 elements in the list, so len() returns 4."
          }
        ]
      }
    ]
  },
  9: {
    title: "Grade 9: Advanced IT Applications, Systems & Python",
    description: "Computer architecture & Boolean logic, advanced digital documentation, subtotal spreadsheet analysis, cyber security laws, and Python functions & dictionaries.",
    badge: "Level 4: Advanced Principles",
    color: "#8b5cf6",
    modules: [
      {
        id: "g9-m1",
        title: "Module 1: Computer Architecture & Boolean Logic",
        icon: "Cpu",
        summary: "CPU Fetch-Decode-Execute cycle, system buses, register types, logic gates (AND, OR, NOT, NAND, NOR, XOR), and truth tables.",
        facts: [
          {
            term: "Fetch-Decode-Execute Cycle",
            definition: "1. Fetch: CPU fetches instruction from RAM into Instruction Register.\n2. Decode: Control Unit decodes instruction opcode.\n3. Execute: ALU carries out arithmetic/logical operation and writes back result."
          },
          {
            term: "CPU Registers & Cache",
            definition: "• Program Counter (PC): Holds address of next instruction.\n• Accumulator (ACC): Holds temporary results of ALU computations.\n• Memory Address Register (MAR) & Memory Data Register (MDR).\n• Cache Memory (L1, L2, L3): High-speed SRAM situated between CPU core and RAM."
          },
          {
            term: "System Buses",
            definition: "• Data Bus: Bidirectional bus carrying actual data.\n• Address Bus: Unidirectional bus carrying memory locations.\n• Control Bus: Carries command signals (read/write)."
          },
          {
            term: "Logic Gates & Truth Tables",
            definition: "• AND Gate: Output 1 only if ALL inputs are 1.\n• OR Gate: Output 1 if AT LEAST ONE input is 1.\n• NOT Gate: Inverts input.\n• NAND Gate: Inverted AND; NOR Gate: Inverted OR.\n• XOR Gate: Output 1 if inputs are DIFFERENT."
          }
        ],
        flashcards: [
          { q: "What does the Program Counter (PC) register store?", a: "The memory address of the NEXT instruction to be executed." },
          { q: "What is the output of an XOR gate when both inputs A and B are 1?", a: "0 (Exclusive OR outputs 1 only when inputs differ)." }
        ],
        quiz: [
          {
            question: "Which CPU bus is unidirectional?",
            options: ["Data Bus", "Address Bus", "Control Bus", "PCI Bus"],
            correct: 1,
            explanation: "Address bus is unidirectional as memory addresses flow only from CPU to RAM/Peripherals."
          }
        ]
      },
      {
        id: "g9-m2",
        title: "Module 2: Advanced Digital Documentation & Styles",
        icon: "FileCheck",
        summary: "Apply page styles, character styles, image anchoring, text wrapping, and automated Table of Contents and Mail Merge.",
        facts: [
          {
            term: "Styles & Formatting Templates",
            definition: "Reusable set of formatting specifications (font, size, margin, color):\n• Paragraph Style: Controls text alignment, tab stops, line spacing.\n• Character Style: Applies styling to selected words inside paragraph.\n• Page Style: Controls margins, headers, footers, page numbering."
          },
          {
            term: "Image Positioning & Anchoring",
            definition: "• Anchoring: Binds graphic to a reference point (To Page, To Paragraph, To Character, As Character).\n• Text Wrapping: Determines how body text flows around graphic (Page Wrap, Wrap Through, Optimal Wrap)."
          },
          {
            term: "Mail Merge",
            definition: "Process of combining a standard letter/document (Main Document) with a structured Data Source (Excel sheet/database of names/addresses) to generate personalized mass letters."
          }
        ],
        flashcards: [
          { q: "What two files are required to execute a Mail Merge operation?", a: "1. Main Document (template) and 2. Data Source (list of recipient records)." }
        ],
        quiz: [
          {
            question: "Which anchoring mode treats an inserted image as a single text character inside a sentence?",
            options: ["To Page", "To Paragraph", "As Character", "To Frame"],
            correct: 2,
            explanation: "'As Character' places the image directly into the text stream, behaving like a single letter."
          }
        ]
      },
      {
        id: "g9-m3",
        title: "Module 3: Advanced Data Consolidation & What-If Analysis",
        icon: "TrendingUp",
        summary: "Consolidate multi-sheet data, subtotal grouping, Goal Seek, Scenario Manager, and Solver.",
        facts: [
          {
            term: "Data Consolidation",
            definition: "Combines data from multiple source worksheets or cell ranges into a single master summary range using mathematical functions (SUM, AVERAGE)."
          },
          {
            term: "Subtotals & Grouping",
            definition: "Automatically calculates subtotal values and grand totals for grouped categorical data columns."
          },
          {
            term: "What-If Analysis Tools",
            definition: "• Goal Seek: Back-calculates an input value required to achieve a specific target output result. (E.g. What exam mark is needed to reach an 85% total?).\n• Scenario Manager: Creates and saves different sets of hypothetical input variables (Best case, Worst case, Expected case).\n• Solver: Advanced optimization tool that finds optimal input values subject to specified constraints."
          }
        ],
        flashcards: [
          { q: "Which tool determines the necessary input value to attain a specific target output value in Excel?", a: "Goal Seek." }
        ],
        quiz: [
          {
            question: "To evaluate Best Case, Worst Case, and Likely Case business projections, which feature should you use?",
            options: ["Goal Seek", "Scenario Manager", "Consolidate", "Pivot Table"],
            correct: 1,
            explanation: "Scenario Manager allows storing multiple named groups of input values to compare hypothetical scenarios."
          }
        ]
      },
      {
        id: "g9-m4",
        title: "Module 4: Cyber Safety, Intellectual Property & IT Laws",
        icon: "ShieldCheck",
        summary: "Digital footprints, cyber security laws (IT Act 2000), copyright, copyleft, software licensing, and plagiarism.",
        facts: [
          {
            term: "Digital Footprint",
            definition: "The electronic trail of data left behind by web activities:\n• Active Footprint: Intentionally shared data (social media posts, fill forms).\n• Passive Footprint: Unintentionally collected background data (IP address, browsing history, cookies, location logs)."
          },
          {
            term: "Intellectual Property Rights (IPR)",
            definition: "Legal rights protecting creations of the mind. Includes Copyrights (artistic/code works), Patents (inventions), Trademarks (brand logos), and Trade Secrets."
          },
          {
            term: "Software Licensing Models",
            definition: "• Proprietary / Closed Source: Source code hidden; licensed under strict terms (e.g. Windows, Photoshop).\n• Open Source (FOSS): Source code publicly accessible; can modify & redistribute (e.g. Linux, Python, Blender).\n• Freeware: Free to use but source code restricted.\n• Shareware: Trial period software."
          },
          {
            term: "IT Act 2000 (India)",
            definition: "Primary legislation governing cybercrime and electronic commerce. Key Sections: Sec 66 (Hacking), Sec 66B (Stolen computer property), Sec 66E (Privacy violation)."
          }
        ],
        flashcards: [
          { q: "What is the difference between active and passive digital footprints?", a: "Active footprint is data you deliberately submit; passive footprint is collected in the background without active submission." },
          { q: "What does FOSS stand for?", a: "Free and Open Source Software." }
        ],
        quiz: [
          {
            question: "Claiming someone else's written code or research as your own without citation is called:",
            options: ["Phishing", "Plagiarism", "Spoofing", "Encryption"],
            correct: 1,
            explanation: "Plagiarism is the unethical act of representing another creator's work or intellectual property as your own."
          }
        ]
      },
      {
        id: "g9-m5",
        title: "Module 5: Python Functions, Dictionaries & Strings",
        icon: "Code2",
        summary: "Define custom functions (def), parameter passing, string methods, tuple immutability, and dictionary key-value mapping.",
        facts: [
          {
            term: "User-Defined Functions",
            definition: "Blocks of reusable code defined using def keyword. Syntax:\ndef calculate_area(length, width=10):\n    return length * width\nSupports Positional arguments, Keyword arguments, and Default parameters."
          },
          {
            term: "String Immutability & Methods",
            definition: "Strings cannot be modified in-place. Essential methods:\n• .upper(), .lower(), .strip() (removes whitespace)\n• .replace(old, new)\n• .split(',') (converts string to list)\n• ' '.join(list) (joins list into string)."
          },
          {
            term: "Python Dictionaries",
            definition: "Unordered/ordered mutable key-value mapping enclosed in curly braces {}.\nExample: student = {'name': 'Sara', 'age': 15, 'grade': 'A'}.\nAccess: student['name'] or student.get('name')."
          },
          {
            term: "Tuples vs Lists",
            definition: "Lists [1, 2] are mutable. Tuples (1, 2) are IMMUTABLE sequences enclosed in parentheses ()."
          }
        ],
        interactiveType: "pythonRunner",
        flashcards: [
          { q: "Are Python Tuples mutable or immutable?", a: "Immutable (their elements cannot be modified after creation)." },
          { q: "How do you add a new key 'city' with value 'Tokyo' to dictionary user?", a: "user['city'] = 'Tokyo'." }
        ],
        quiz: [
          {
            question: "What is the output of 'Hello World'.split()?",
            options: ["['Hello World']", "['Hello', 'World']", "('Hello', 'World')", "'HelloWorld'"],
            correct: 1,
            explanation: ".split() without arguments splits a string by whitespace into a list of substring words."
          }
        ]
      }
    ]
  },
  10: {
    title: "Grade 10: RDBMS (SQL), Web Security, AI & Advanced Concepts",
    description: "SQL DDL/DML queries, RDBMS constraints, Web services & HTTPS security, Cloud computing, Artificial Intelligence domains, and OOP concepts.",
    badge: "Level 5: Board Exam Mastery (CBSE 402/165)",
    color: "#ec4899",
    modules: [
      {
        id: "g10-m1",
        title: "Module 1: Relational Database & SQL Commands (DDL / DML)",
        icon: "Database",
        summary: "Master SQL commands: CREATE, ALTER, DROP (DDL) and SELECT, INSERT, UPDATE, DELETE (DML), WHERE clauses, GROUP BY, and Aggregate functions.",
        facts: [
          {
            term: "SQL Command Categories",
            definition: "• DDL (Data Definition Language): Defines schema. Commands: CREATE TABLE, ALTER TABLE, DROP TABLE.\n• DML (Data Manipulation Language): Manages record data. Commands: SELECT, INSERT INTO, UPDATE, DELETE.\n• TCL (Transaction Control): COMMIT, ROLLBACK."
          },
          {
            term: "Table Creation & Constraints",
            definition: "CREATE TABLE Students (\n  roll_no INT PRIMARY KEY,\n  name VARCHAR(50) NOT NULL,\n  marks DECIMAL(5,2) DEFAULT 0.00,\n  dept_id INT FOREIGN KEY REFERENCES Dept(id)\n);"
          },
          {
            term: "SQL Query Syntax & Clauses",
            definition: "SELECT column1, COUNT(*)\nFROM table_name\nWHERE condition\nGROUP BY column1\nHAVING COUNT(*) > 2\nORDER BY column1 DESC;"
          },
          {
            term: "SQL Pattern Matching & Operators",
            definition: "• Wildcards: % (matches 0 or more chars), _ (matches exactly 1 char).\n• Example: WHERE name LIKE 'A%' (starts with A).\n• BETWEEN 50 AND 100 (inclusive range).\n• IN ('CS', 'IT') (matches set).\n• IS NULL / IS NOT NULL."
          },
          {
            term: "Aggregate Functions",
            definition: "SUM(), AVG(), COUNT(), MAX(), MIN(). Note: WHERE filters individual rows, HAVING filters aggregated groups!"
          }
        ],
        interactiveType: "sqlSandbox",
        flashcards: [
          { q: "Which SQL clause is used to filter aggregated groups after a GROUP BY operation?", a: "The HAVING clause." },
          { q: "Difference between CHAR(10) and VARCHAR(10) in SQL?", a: "CHAR is fixed-length (always allocates 10 bytes padding with spaces); VARCHAR is variable-length (allocates only actual characters used)." },
          { q: "Which DDL command deletes an entire table and its structure permanently?", a: "DROP TABLE table_name;" }
        ],
        quiz: [
          {
            question: "Which SQL statement updates the marks of student with roll_no 10 to 95?",
            options: [
              "UPDATE Students SET marks = 95 WHERE roll_no = 10;",
              "MODIFY Students SET marks = 95 WHERE roll_no = 10;",
              "CHANGE Students MARKS = 95 FOR roll_no = 10;",
              "UPDATE Students MARKS = 95 IF roll_no = 10;"
            ],
            correct: 0,
            explanation: "Standard DML syntax is UPDATE table_name SET col = val WHERE condition;"
          },
          {
            question: "Which SQL wildcard matches exactly one single character?",
            options: ["%", "*", "_", "?"],
            correct: 2,
            explanation: "The underscore _ wildcard matches exactly one single character in SQL LIKE queries."
          }
        ]
      },
      {
        id: "g10-m2",
        title: "Module 2: Web Applications, Cloud Computing & Cyber Security",
        icon: "ShieldCheck",
        summary: "Web Protocols (HTTP/S, FTP, SMTP, DNS), Cloud service models (IaaS, PaaS, SaaS), network security, firewalls, and Accessibility features.",
        facts: [
          {
            term: "Web Protocols & Port Numbers",
            definition: "• HTTP (HyperText Transfer Protocol - Port 80) vs HTTPS (Secure SSL/TLS - Port 443).\n• FTP (File Transfer Protocol - Port 21).\n• SMTP (Simple Mail Transfer Protocol - Port 25 for sending mail).\n• POP3 (Port 110) / IMAP (Port 143) for retrieving mail.\n• DNS (Domain Name System): Translates human domain names (google.com) to IP addresses (142.250.190.46)."
          },
          {
            term: "Cloud Computing Models",
            definition: "• Infrastructure as a Service (IaaS): Provides raw virtual servers & storage (e.g. AWS EC2, Google Compute Engine).\n• Platform as a Service (PaaS): Provides development environment & runtime (e.g. Heroku, Firebase, AWS Elastic Beanstalk).\n• Software as a Service (SaaS): Delivers ready-to-use software applications over web (e.g. Google Workspace, Microsoft 365)."
          },
          {
            term: "Network Security & Encryption",
            definition: "• Symmetric Encryption: Uses SAME secret key for encryption & decryption.\n• Asymmetric Encryption: Uses Public Key (to encrypt) and Private Key (to decrypt).\n• Firewall: Software/hardware packet filter that blocks unauthorized traffic based on security rules."
          },
          {
            term: "Computer Accessibility Options",
            definition: "Designed for users with disabilities:\n• Sticky Keys: Allows typing key combinations (Ctrl+Alt+Del) sequentially.\n• Filter Keys: Ignores brief or repeated keystrokes.\n• Toggle Keys: Emits audio cues when Caps Lock/Num Lock is pressed.\n• SoundSentry: Generates visual flashes when system alerts sound."
          }
        ],
        flashcards: [
          { q: "What service translates human-friendly web domain names into IP addresses?", a: "DNS (Domain Name System)." },
          { q: "What type of Cloud Service model is Google Docs or Microsoft 365?", a: "SaaS (Software as a Service)." }
        ],
        quiz: [
          {
            question: "Which Accessibility feature helps users who have difficulty holding down multiple keys simultaneously?",
            options: ["Filter Keys", "Sticky Keys", "Toggle Keys", "Mouse Keys"],
            correct: 1,
            explanation: "Sticky Keys enables users to press modifier keys (Shift, Ctrl, Alt) one at a time."
          }
        ]
      },
      {
        id: "g10-m3",
        title: "Module 3: Artificial Intelligence & Emerging Technologies",
        icon: "Bot",
        summary: "Explore AI domains (Data/Machine Learning, Computer Vision, NLP), AI project cycle steps, and AI ethics & bias.",
        facts: [
          {
            term: "Domains of Artificial Intelligence",
            definition: "1. Data / Machine Learning: Statistical analysis of structured numerical data (Supervised, Unsupervised, Reinforcement Learning).\n2. Computer Vision (CV): Processing visual inputs (Images/Videos) for object detection, facial recognition, autonomous driving.\n3. Natural Language Processing (NLP): Enables computers to understand human language (Chatbots, Sentiment analysis, Translation)."
          },
          {
            term: "The AI Project Cycle",
            definition: "1. Problem Scoping (Define goal & 4Ws: Who, What, Where, Why).\n2. Data Acquisition (Collect reliable datasets).\n3. Data Exploration (Visualize data trends & outliers).\n4. Modelling (Train algorithms - Rule-based vs Learning-based).\n5. Evaluation (Test accuracy & precision)."
          },
          {
            term: "NLP Pipeline Stages",
            definition: "Sentence Segmentation -> Tokenization (breaking text into individual words) -> Stop Words Removal (removing 'and', 'the') -> Stemming / Lemmatization (reducing words to root form e.g. 'running' -> 'run')."
          },
          {
            term: "AI Ethics & Algorithmic Bias",
            definition: "Concerns surrounding data privacy, surveillance, deepfakes, job displacement, and biased decision-making caused by skewed training datasets."
          }
        ],
        flashcards: [
          { q: "What process breaks down a body of text into individual units or words in NLP?", a: "Tokenization." },
          { q: "What are the 3 major domains of Artificial Intelligence?", a: "1. Data / Machine Learning, 2. Computer Vision (CV), 3. Natural Language Processing (NLP)." }
        ],
        quiz: [
          {
            question: "Facial recognition in smartphones and self-driving car obstacle detection belong to which AI domain?",
            options: ["Natural Language Processing", "Computer Vision", "Statistical Data Science", "Robotic Process Automation"],
            correct: 1,
            explanation: "Computer Vision processes visual inputs like images and camera streams."
          }
        ]
      },
      {
        id: "g10-m4",
        title: "Module 4: Web Development with HTML Forms & JavaScript",
        icon: "Code",
        summary: "HTML interactive forms, input types, radio buttons, dropdown select menus, CSS Flexbox layout, and basic JS form validation.",
        facts: [
          {
            term: "HTML Form Elements",
            definition: "<form action='submit.php' method='POST'>\n  <label>Username:</label>\n  <input type='text' name='user' required>\n  <input type='password' name='pass'>\n  <input type='radio' name='gender' value='M'> Male\n  <input type='checkbox' name='agree'> I Agree\n  <select name='city'><option value='NY'>NY</option></select>\n  <input type='submit' value='Register'>\n</form>"
          },
          {
            term: "GET vs POST Methods",
            definition: "• GET: Appends form data to URL parameters (visible in address bar; insecure; limited size).\n• POST: Sends form data securely in HTTP request body (hidden from URL; suitable for sensitive passwords & large payloads)."
          },
          {
            term: "CSS Flexbox Layout",
            definition: "1D layout model (display: flex;). Container properties:\n• flex-direction: row | column;\n• justify-content: flex-start | center | space-between; (main axis alignment)\n• align-items: center | stretch; (cross axis alignment)."
          },
          {
            term: "Client-Side JavaScript Validation",
            definition: "JS runs in browser before form submission, reducing server load. Example: document.getElementById('email').value validation."
          }
        ],
        interactiveType: "htmlSandbox",
        flashcards: [
          { q: "Which HTTP form submission method sends data appended directly to the URL address bar?", a: "The GET method." },
          { q: "What CSS Flexbox property controls alignment along the main axis?", a: "justify-content." }
        ],
        quiz: [
          {
            question: "Why should sensitive passwords be submitted using POST instead of GET?",
            options: [
              "POST is faster than GET",
              "GET visible displays parameter data in the URL query string and browser history",
              "GET cannot send string characters",
              "POST automatically encrypts the entire database"
            ],
            correct: 1,
            explanation: "GET exposes key-value data directly in the browser address bar and history logs."
          }
        ]
      },
      {
        id: "g10-m5",
        title: "Module 5: Object-Oriented Programming (OOP) & Algorithms",
        icon: "Binary",
        summary: "OOP principles (Classes, Objects, Encapsulation, Inheritance, Polymorphism, Abstraction), and Searching/Sorting algorithms (Linear vs Binary Search, Bubble Sort).",
        facts: [
          {
            term: "Object-Oriented Programming (OOP) Core Pillars",
            definition: "• Class: Blueprint or template defining attributes and methods.\n• Object: Instance of a class.\n• Encapsulation: Bundling data and methods into a single unit (class) while restricting direct access (private attributes).\n• Inheritance: Mechanism where a child class inherits properties from a parent class (class Student(Person):).\n• Polymorphism: Ability to take multiple forms (method overloading/overriding).\n• Abstraction: Hiding internal implementation details and exposing only essential interface."
          },
          {
            term: "Searching Algorithms",
            definition: "• Linear Search: Sequential search checking each item one by one. Time complexity O(n). Works on unsorted arrays.\n• Binary Search: Divide-and-conquer search on SORTED arrays. Compares target with middle element. Time complexity O(log n)."
          },
          {
            term: "Bubble Sort Algorithm",
            definition: "Repeatedly steps through list, compares adjacent elements, and swaps them if in wrong order. Larger elements 'bubble up' to the end. Time complexity O(n^2)."
          }
        ],
        comparisonTable: {
          title: "Linear Search vs Binary Search",
          headers: ["Feature", "Linear Search", "Binary Search"],
          rows: [
            ["Array Requirement", "Unsorted or Sorted", "MUST be Sorted"],
            ["Time Complexity", "O(n) - Linear", "O(log n) - Logarithmic"],
            ["Efficiency (1,000,000 items)", "Up to 1,000,000 checks", "Maximum ~20 checks"],
            ["Strategy", "Sequential check", "Divide and conquer"]
          ]
        },
        flashcards: [
          { q: "What is the maximum number of comparisons Binary Search requires for 1,024 sorted items?", a: "10 comparisons (since 2^10 = 1024)." },
          { q: "Define Encapsulation in OOP.", a: "Bundling data (variables) and methods (functions) inside a class while protecting data from unauthorized outside modification." }
        ],
        quiz: [
          {
            question: "Which OOP concept allows a child class to inherit attributes and functions from a parent class?",
            options: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
            correct: 1,
            explanation: "Inheritance enables code reuse by deriving new classes from existing parent classes."
          }
        ]
      }
    ]
  }
};
