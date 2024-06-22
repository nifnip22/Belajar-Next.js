/*
    Pendefinisian props params digunakan sebagai parameter productId yang dimasukkan kedalam URL
    ataupun fetch product ID dari API jika nantinya menggunakan API.
*/

import { Metadata } from 'next';

// Cara membuat Dynamic Metadata untuk membuat title mengambil product ID
type Props = {
	params: {
		productId: string;
	};
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const title = await new Promise((resolve) => setTimeout(() => resolve(`iPhone ${params.productId}`), 100));
	return {
		title: `Product ${title}`,
	};
};

export default function ProductDetails({ params }: Props) {
	return <h1>Details About This Product {params.productId}</h1>;
}

// Masukkan '/products/id' (id: 1/2/3/...) di URL localhost:3000 untuk melihat halaman ini
