/*
    Kita bisa melakukan Nested Layout, yaitu dimana layout.tsx di Root Segment atau folder app ditimpa
    layout.tsx yang dibuat di subfolder app atau Leaf Segment. Contohnya kita melakukan kustomisasi layout
    di route productId.
*/ 

export default function ProductDetailsLayout({ children }: { children: React.ReactNode }) {
	return (
        <>
            {children}
            <h2>Features Products</h2>
            {/* Carousel */}
        </>
    );
}
