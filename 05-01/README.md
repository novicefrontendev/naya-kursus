Pemrograman Fungsional -. Paradigma pemrograman seperti OOP, kebalikan dari prosedural (tanpa fungsi) yang merupakan langkah mengelola kode. Sedangkan pemrograman fungsional adalah langkah mengelola fungsi.

Pemrograman Fungsional terdiri dari beberapa metode :
1. Anonymous Function : 
- Merupakan IIF (Immediately Invoked Functions) : Fungsi yang begitu dibuat langsung dipanggil
- Penulisannya -> function () {}
- Bisa dibuat lewat variable atau IIF

2. Arrow Function :
- Termasuk anonymous function, dengan penulisan yang lebih singkat -> () => {}

3. Closure :
- Fungsi yang direturn dari fungsi -> Mengubah nilai dari fungsi 
- Ex : useState pada React

<!-- x = x + 1 ; ditambah dulu baru direturn -->

4. Higher order Functions (Callback) 
- Fungsi yang dijadikan parameter, parameter adalah fungsi
- Variable cuma ada di dalam kurawal, begitu keluar hilang


Konsep Side Effect & Immutability
- console.log() adalah side effect, hal-hal di luar proses. Termasuk window.close, document.write() dan mengubah variable. Beresiko mengubah nilai di luarnya.
- Immutability, tidak mempengaruhi proses dan mempertahankan nilai, contoh adalah return

Contoh Kode (On Progress)