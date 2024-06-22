/*
    Kita bisa menggunakan Nested Routes di Next.js. 
    page.tsx di folder blog akan digunakan sebagai Main Segment.
    Lalu di folder blog, kita bisa membuat beberapa folder sebagai Leaf Segments.
    Contohnya di dalam folder blog, kita buat folder first dan second dengan page.tsx didalamnya.
*/ 

import { Metadata } from 'next';

export const metadata: Metadata = {
    /*
        Properti absolute digunakan jika kita ingin membuat title yang menghiraukan apa yang diterapkan
        oleh properti template
    */ 
    title: {
        absolute: 'Blog'
    }
}

export default function Blog() {
    return (
        <h1>My Blogs</h1>
    )
}

/*
    Untuk menampilkan halaman Main Segment, ketikkan /blog di URL.
    dan Untuk menampilkan halaman Leaf Segment, ketikkan /blog/first atau second di URL.
*/