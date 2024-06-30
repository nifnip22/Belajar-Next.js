/*
    Route Group bisa digunakan oleh layout untuk menerapkan tata letak secara selektif pada segmen tertentu dan
    meninggalkan yang lainnya tidak berubah. Contohnya kita ingin membuat sebuah layout untuk halaman register dan
    login namun tidak pada halaman forgot password.
*/

// Active links example
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import '../../styles.css';
import { useState } from 'react';

const navLinks = [
	{ name: 'Register', href: '/register' },
	{ name: 'Login', href: '/login' },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	// Input templating
	const [input, setInput] = useState('');

	return (
		<>
			<div>
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				{/* Jika sudah mengisi input, coba redirect ke halaman login */}
			</div>
			{navLinks.map((link) => {
				const isActive = pathname.startsWith(link.href);

				return (
					<Link key={link.name} href={link.href} className={isActive ? 'font-bold mr-4' : 'text-blue-500 mr-4'}>
						{link.name}
					</Link>
				);
			})}
			{children}
		</>
	);
}
