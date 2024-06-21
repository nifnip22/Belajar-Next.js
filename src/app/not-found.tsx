/*
    Melakukan kustomisasi halaman 404. Nama file 'not-found.tsx' adalah nama default yang harus di pakai jika
    ingin melakukan kustomisasi halaman 404 di Next.js.
*/ 

export default function NotFound() {
    return (
        <>
            <div className="">
                <h2>Page Not Found</h2>
                <p>Could Not Find Requested Resource</p>
            </div>
        </>
    )
}