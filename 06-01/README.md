Object Oriented Programming
- Merupakan sudut pandang objek(bukan struktur data)
- Siapa yang melakukan eksekusi
- Fungsinya untuk mengelompokkan function agar memberi konteks ke fungsinya.

Class -> mendeskripsikan object seperti apa (asumsi)
Object -> bentuk nyatanya (realita)

1 class bisa untuk banyak object

Property -> semua elemen yang ingin dilibatkan 

Pemrograman Berorientasi Object

Pembahasan:

Konsep OOP
Hubungan class dengan object
Property
Method
Constructor
Keyword this
Konsep
OOP adalah Objejct orieeantet programming. OOP yang paling dalem di dalam ada dalam bahasa Java. JIka sebelumnya kodingan nyampur jadi satu dan disimpan di fungsi, kemudian fungsi-fungsi tersebut dikelompokan lagi dalam object tertentu.

Hubungan Claas dan Object
Dalam OOP ada juga class. CLass ini untuk mendeskripsikan gunanya object untuk apa. Satu claas bisa untuk banyak object.

sintaks pembuatan

            // Sintaks Pembuatan class
            class Kendaraan {
                // Property
                roda;
                spion;
                cc;
                // Method : Fungsi yang dimasukkan dalam class.
                // KEyword function bisa dihilangkan
                nyala(){
                    console.log('nyala')
                }
            }
            // Memanggil Class Object
            console.log(new Kendaraan())

            // Bisa juga memakai ini.
            const motor = new Kendaraan();
            // Memanipulasi Property dalam class
            motor.roda = 2;
            motor.cc = 150;
            motor.spion = 2;

            console.log(motor)
Setter
Menerima parameter kemudian parameter ditaruh dalam property

Getter
untuk mereturn property

Constructor
method biasa yang namanya harus constructor. method ini jalan ketika object dibuat.

Inheritence
Pewarisan. Apabila kita membuat class baru dan diekstend maka akan mewarisi isi dari kelas yang diatasnya/ parentnya.

This keyword
Menunjukan...

Tambahan
Dalam JS, Object ada dua macam, object dalam struktur data dan OBject dalam OOP.
Property dalam OOP = Variabel yang dimasukkan dalam class/apa yang dimiliki class.
Ketika new keyword dibuat untuk object, maka sebenarnya ada dua aksi yang dijalankan JS, yaitu menjalankan COnstruktor dan membuat object.