/*
    Di Next.js, secara default App Router dibuat dan dijalankan dengan file page.tsx sebagai Root Segment di dalam folder src/app.
    Folder app juga bisa membuat folder lainnya yang isinya juga terdapat page.tsx sebagai Additional Routes.
    Pastikan pemberian nama folder menggunakan lowercase karena nama folder akan digunakan sebagai URL Segment.
*/

// UI Navigation
import Link from 'next/link';

export default function Home() {
	return (
		<>
			<h1>Home Page</h1>
			<Link href='/blog'>Blog</Link>
			<Link href='/products'>Products</Link>
		</>
	);
}
