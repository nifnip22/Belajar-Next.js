/*
    Di Next.js ada fitur Private Folders. Private Folders adalah folder route yang tidak bisa di akses oleh
    Routing System dari Next.js. File dan subfolder di dalam Private Folder akan menjadi pengecualian oleh routing.
    Cara membuat Private Folder adalah dengan membuat folder yang dimana nama dari folder diawali dengan prefix
    underscore _
*/ 

export default function PrivateRoute() {
    return <h1>You Cannot View this in the Browser</h1>
}

// Masukkan '/_lib' di URL localhost:3000 untuk mencoba apakah halaman ini bisa di akses