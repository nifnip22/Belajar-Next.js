/*
    Pendefinisian props params digunakan sebagai parameter productId yang dimasukkan kedalam URL
    ataupun fetch product ID dari API jika nantinya menggunakan API.
*/

export default function ProductDetails({ params }: { params: { productId: number } }) {
	return <h1>Details About This Product {params.productId}</h1>;
}

// Masukkan '/products/id' (id: 1/2/3/...) di URL localhost:3000 untuk melihat halaman ini
