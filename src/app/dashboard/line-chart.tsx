/*
    Di Next.js, setiap folder yang dibuat dalam folder app adalah sebuah Route dan untuk mengakses Route tersebut,
    kita perlu menambahkan page.tsx di dalam setiap folder Route. Tanpa page.tsx, ketika kita memanggil Route di 
    URL akan terjadi Not Found Response. Oleh karena itu jika di dalam folder route tersebut terdapat file lain 
    seperti komponen selain page.tsx, maka yang tetap dipanggil dan di akses adalah page.tsx.
*/ 

export default function LineChart() {
    return <h1>Line Chart</h1>
}