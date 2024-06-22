/*
    Pada suatu kasus, kita membuat sebuah route untuk autentifikasi seperti register, login, dan forgot password.
    Di Next.js jika kita ingin membuat sebuah route, kita perlu membuat subfolder di dalam folder app. Kita tidak
    mau jika 3 autentifikasi route berada di 3 folder yang terpisah, oleh karena itu kita buat subfolder auth di
    folder app lalu gabungkan 3 subfolder autentifikasi yaitu register, login, dan forgot password ke dalam folder 
    'auth'.

    Namun jika kita jalankan di URL maka URL nya akan menjadi seperti ini: 'localhost:3000/auth/register'. Dalam
    beberapa momen, ada kalanya kita tidak perlu memanggil Segment /auth. Cara menghilangkannya adalah dengan
    menggunakan fitur Route Groups dari Next.js. Kita hanya perlu melakukan rename folder 'auth' menjadi '(auth)'.
    Tanda kurung dalam penamaan subfolder app di Next.js akan mengindikasikan jika folder route tersebut adalah
    sebuah folder Route Group. Jadi di URL kita bisa mengetikkan 'localhost:3000/register'.
*/ 

export default function Register() {
    return <h1>Register</h1>
}