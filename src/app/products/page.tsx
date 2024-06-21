/*
    Nested Routes di Next.js memang akan berguna jika Leaf Segments yang dibuat hanya 2 atau 3 Segments saja,
    namun jika ada puluhan atau ratusan lebih Leaf Segments, Nested Routes akan sangat tidak efisien.
    Contohnya pada halaman Products, kita mempunyai Product List dengan jumlah product yang sangat banyak,
    dan setiap product di dalam Product List memiliki parameter ID. Kita ingin mendapatkan detail dari product 
    tersebut berdasarkan ID dari productnya. Oleh karena itu kita perlu menggunakan konsep Dynamic Routes.

    Untuk mendapatkan halaman Leaf Segment product dari Product List dengan parameter ID, kita buat subfolder
    di dalam folder products yang pemberian namanya harus dengan tanda kurung siku dengan parameter / [parameter]
    sebagai Dynamic Segment. Contohnya [productId], lalu buat page.tsx di dalam subfolder tersebut.
*/ 

export default function ProductList() {
    return (
        <>
            <h1>Product List</h1>
            <h2>Product 1</h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
        </>
    )
}