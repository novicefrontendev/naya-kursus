MINGGU 3 ( DAY - 3 )

Operator : Untuk memanipulasi data

Jenis-jenis Operator :
- Aritmatika : +, -, *, /, ** (pangkat), %(modulo) -> sisa bagi (1%2 = 1)
- Assignment : =, +=, -=, *=, /=, **=, %= 
    Untuk mengubah jika sudah punya nilai atau mengisi nilai. 
    <!-- Jika belum punya, hasilnya perubahan nilai. -->
    Contoh assignment :
        - let a = 1
        - a = a + 10 -> a += 10

    let a = 1
    a += 1 -> a ++;
- Perbandingan : ==, !=, >, <, >=, <= -> Hasilnya tipe data boolean
    2 >= 2 -> true

    let x = 2;
    let y = '2';
    console.log(x == y); -> true
    console.log(x === y); -> false (ngecek tipe datanya)
    console.log(x != y); false
    console.log(x !== y); -> true
- Logika : &&, ||, !; menghasilkan boolean dan membutuhkan data boolean
    console.log(true && true) -> true
    console.log(true || false) -> true
    console.log(!true) -> false
    console.log( x == y) || x != y) -> true