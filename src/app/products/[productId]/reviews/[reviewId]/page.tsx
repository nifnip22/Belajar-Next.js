/*
    Di Next.js, kita bisa menggunakan Dynamic Routes dengan Konsep Nested Routes atau biasa disebut
    dengan Nested Dynamic Routes. Contoh kasus sebelumnya kita mempunyai product list yang di setiap
    product mempunyai ID yang digunakan untuk menampilkan detail dari product tersebut. Selanjutnya,
    kita ingin membuat dan menampilkan review dari product sesuai ID product dan review tersebut juga 
    memiliki ID karena review bisa dibuat sangat banyak, jadi kita bisa menampilkan review product
    dengan menggunakan ID review.
*/

// Import Not Found Function
import { notFound } from 'next/navigation';

export default function ReviewDetail({ params }: { params: { productId: number; reviewId: string } }) {
	// Skenario jika parameter reviewId melebihi 1000 atau tidak ditemukan
	if (parseInt(params.reviewId) > 1000) {
		notFound();
	}
	return (
		<h1>
			Review {params.reviewId} for Product {params.productId}
		</h1>
	);
}

// Masukkan '/products/id/reviews/id' (id: 1/2/3/...) di URL localhost:3000 untuk melihat halaman ini
