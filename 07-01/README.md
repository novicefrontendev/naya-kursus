Dasar-Dasar DOM

Pembahasan:

Konsep Document Object Model (DOM)
Hubungan DOM dengan HTML
Mengakses elemen pada document menggunakan:
getElementByID
getElementsByTagName
getElementsByClassName
querySelector
querySelectorAll
Konsep Document Object Model (DOM)
Simpelnya, DOM adalah HTML dari sudut pandang JS. Bagaimana JS memandang HTML, dia memandangnya sebagai document, kemudian dikelola dengan teknik yang namanya DOM.

Hubungan DOM dengan HTML
HTML yang dibaca web browser, DOM HTML yang dibaca oleh JS dan dioperasikan oleh JS.

Mengakses elemen pada document menggunakan:
Sebenarnya, ketika kita console, this, atau document itu merupakan global variabel yang sudah diinclude oleh JS dan otomatis akan menampilkan di web browser.

getElementById()
sebuah fungsi untuk mengambil element yang memiliki Id tertentu. fungsi ini aka menambil id tertentu dari element HTML, apabila terdapat dua atau lebih id yang sama, yang diambil hanya satu yang tercepat.

getElementsByTagName()
Sebuah fungsi untuk mengambil banyak element dengan tag HTML tertentu.

getElementsByClassName()
Sebuah fungsi untuk mengambil banyak element dengan class tertentu.

querySelector() dan querySelectorAll()
Dia tidak peduli yang dimasukan tag, id, atau tag, dia hanya peduli akan mengambil satu atau banyak. quearySlector hanya mengambil tag yang diselect pertama kali. penggunaan argument pada quaerSelector sama sepereti memanggil class dan id di css.QUerySelectorAll akan menagambi semua argument yang diberikan, termasuk apabila yang jadi argumenet adalah id.