/*
    Route Group bisa digunakan oleh layout untuk menerapkan tata letak secara selektif pada segmen tertentu dan
    meninggalkan yang lainnya tidak berubah. Contohnya kita ingin membuat sebuah layout untuk halaman register dan
    login namun tidak pada halaman forgot password.
*/ 

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h2>Inner Layout</h2>
            {children}
        </>
    )
}
