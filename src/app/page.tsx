/*
    Di Next.js, secara default App Router dibuat dan dijalankan dengan file page.tsx sebagai root segment di dalam folder src/app.
    Folder app juga bisa membuat folder lainnya yang isinya juga terdapat page.tsx sebagai Additional Routes.
    Pastikan pemberian nama folder menggunakan lowercase karena nama folder akan digunakan sebagai segment URL.
*/

export default function Home() {
    return (
        <h1>Home Page</h1>
    )
}