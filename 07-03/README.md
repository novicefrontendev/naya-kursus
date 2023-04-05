Event pada DOM
Pembahasan:

Jenis-jenis event
Menambah event handler pada elemen
Jenis
Event merupakan kejadian. Pada DOM ada beberap kejadian yang kemungkinan terjadi yang berasal dari perilaku user pada aplikasi kita. Contoh: seperti menekan tombol, menakan klik, melepas klik, dll. Semua ini bisa dikelola melalui event.

button memiliki property onclick
bisa menangani dengan addEventListener() ==> addEventListener adalah fungsi yang memiliki dua parameter wajib, parameter peretama kejadian yang dikenali dom misal 'click , yang kedua merupakan callback function.
Menambah Event Handler
.preventDefault ==> mencegah element melakukan hal defaultnya, contohnya tombol submit yang defaultnya