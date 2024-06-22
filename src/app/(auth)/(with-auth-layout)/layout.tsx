/*
    Route Group bisa digunakan oleh layout untuk menerapkan tata letak secara selektif pada segmen tertentu dan
    meninggalkan yang lainnya tidak berubah. Contohnya kita ingin membuat sebuah layout untuk halaman register dan
    login namun tidak pada halaman forgot password.
*/

// Active links example
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import "../../styles.css"

const navLinks = [
	{ name: 'Register', href: '/register' },
	{ name: 'Login', href: '/login' },
];

export default function AuthLayout({ children }: { children: React.ReactNode }) {

	const pathname = usePathname();

	return (
		<>
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
