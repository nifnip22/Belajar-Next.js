/*
    Metadata yang ada pada layout.tsx di folder app merupakan metadata yang akan di terapkan di seluruh route, namun
    kita bisa membuat metadata sendiri untuk diterapkan pada route tertentu yang kita buat. 
*/ 

export const metadata = {
    title: 'About Next.js'
}

export default function About() {
    return (
        <h1>About Me</h1>
    )
}

// Masukkan '/about' di URL localhost:3000 untuk melihat halaman ini