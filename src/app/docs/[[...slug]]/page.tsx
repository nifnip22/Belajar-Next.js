/*
    Sebelumnya kita mempelajari bagaimana cara membuat Nested Dynamic Routes dengan Next.js.
    Namun ada alternatif lain dari Next.js yang digunakan untuk membuat Dynamic Segment menjadi
    lebih efisien dan cepat. Next.js mempunyai fitur yang dinamakan Catch All Segments. 
    
    Contoh kasus kita mempunyai sebuah halaman docs sebagai Main Segment yang di dalam halaman docs 
    ada banyak halaman feature sebagai Leaf Segments dari halaman docs. Lalu di halaman feature kita
    mempunyai banyak halaman concept sebagai Leaf Segments dari halaman feature. Dan bisa jadi di
    halaman feature ada halaman Leaf Segments lainnya. Jika kita menggunakan Nested Dynamic Routes,
    tentu kita akan membuat subfolder yang sangat banyak sehingga akan memakan waktu.

    Bagaimana cara menggunakan fitur Catch All Segments di Next.js sesuai dengan kasus tersebut?
    Pertama-tama kita akan buat subfolder docs di root folder app. Lalu di dalam folder docs, kita
    membuat satu subfolder yang kita beri penamaan yang special seperti Dynamic Routes yaitu tanda
    kurung siku [], lalu di dalam kurung siku kita bisa ketikan '...slug' yang hasilnya akan seperti
    ini: [...slug] atau jika folder docs ingin ditampilkan di web page dengan URL tanpa slug bisa 
    diberi nama [[...slug]]. Di dalam folder [[...slug]] kita bisa berikan page.tsx. 
*/

export default function Docs({ params }: { params: { slug: string[] } }) {
	// Jika parameter slug ada 2 (feature dan concept)
	if (params.slug?.length === 2) {
		return (
			<h1>
				Viewing Docs for Feature {params.slug[0]} and Concept {params.slug[1]}
			</h1>
		);
	} else if (params.slug?.length === 1) {
		return <h1>Viewing Docs for Feature {params.slug[0]}</h1>;
	}

	return <h1>Docs Home Page</h1>;
}

// Masukkan '/docs' di URL localhost:3000 untuk melihat halaman docs
// Masukkan '/docs/(nama feature)' di URL localhost:3000 untuk melihat halaman feature
// Masukkan '/docs/(nama feature)/(nama concept)' di URL localhost:3000 untuk melihat halaman feature dan concept
