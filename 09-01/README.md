HTTP : HyperText Transfer Protocol

- Pengiriman file lewat HTTP akan dirender dan dicompress

- HTTP Server : Tempat penyimpanan File yang diakses oleh HTTP Client

- URL diperlukan untuk mengirim request dari client ke server :

Hasilnya response body

2 jenis koneksi yang tidak langsung diputus seperti Request & Response : 

- WebSocket -> Client connect ke server dan disangkutin oleh Server

- Server Side Effect -> Server mengirim data ke client

- HTTP Headers : Response & Request Headers

Request : URL, Method, Headers, Body -> Response : Header, Body, Status

Request Method : 

- GET : Mengambil 
- POST : Mengirim, butuh body (request body) 
- PUT : Create(Data Kosong) or Replace(Kalau Udah Ada Data); Recommended
- PATCH : Mengganti sebagian 
- DELETE : Menghapus
- OPTIONS : Pre-flight, kirim request options untuk ngecek apakah data sesuai setelah sesuai baru kirim request sesungguhnya (otomatis)
- HEAD : Request beneran tanpa kirim response body

POST -> Kalau ada body

- Multipart : satu-satunya cara ngirim file dari client ke server
- Request Body : Structured & Text yang bisa

AUTH -> Bagian Header
DOCS -> Deskripsi

RESPONSE : Status, Headers, Body

JSON Path
