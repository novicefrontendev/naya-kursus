Array 
- Merupakan struktur data(kumpulan data), selain array ada object.
- Bersifat deret
- Cara menulisnya ; console.log([10, 30, 50]), kalau [10, 30, 50] + 10 -> String Concatenation
- Untuk mengenali elemen array diperlukan indeks (indexing), scores[-1] -> undefined, scores.at[-1] -> data terakhir
- Indeks array bisa diubah walau diinisialisasi sebagai variabel const. artinya, const hanya berurusan dengan datanya, bukan indeks pada array. Berbeda kasus kalau arraynya diiubah panjangnya.
- Array digunakan untuk menyimpan data yang memiliki konteks sama.

Cara mengubah element array -> scores[1] = 25, pada indeks satu akan diubah 25 datanya

Array gak dicopy tapi direferensikan, tapi menggunakan spread operator(bersifat unary).
    const scores = [1, 5, 7,]; 
    const values = scores;
    values[1] = 8;

    console.log(scores, values);

Array bisa di copy dengan menggunakan spread operator, array yang ada di dalam values akan dikeluarkan dan disebarkan menjadi copy.
    const scores = [1, 5, 7,]; 
    const values = [...scores];


Menghapus array bisa menggunakan namaArray.pop() dan namaArray.shift(). namaArray.pop() jika menghapus dari belakang & namaArray.shift menghapus dari depan.

Sedangkan menambah bisa menggunakan namaArray.push() dan namaArray.unshift(). namaArray.push() jika menambah dari belakang & namaArray.unshift menambah dari depan.

Jika ingin menambah atau menghapus pada indeks tertentu menggunakan namaArray.splice(x, y, z). Parameter x menunjukkan indeks, y menunjukkan berapa data yang dihapus (jika tak ada 0), dan z adalah data yang baru.

forEach tidak mereturn apapun hanya melooping array, fungsi forEach untuk menampilkan array. 

map() mereturn array baru yang penjangnya seperti array lama, isi seperti function. Bisa melakukan callback & bersifat immutable. 

<!-- Variable, data dulu baru disimpan di variable -->

reduce() mereturn 1 nilai dari array, parameter yang dikirim ada 4,
- accumulator : nilai terakhir dari semua proses dan merupakan parameter kedua dari reduce, berupa 0 biasanya dan bisa bertambah seiring nilai yang dikembalikan dengan return.
- element array
- indeks
- array asli (keseluruhan)