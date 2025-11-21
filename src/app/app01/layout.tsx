
export default function App01Layout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className='flex h-full'>
            <aside className='w-60 bg-gray-200 p-5'>
                <h1 className="mb-5 text-2xl font-bold">맛집 카테고리</h1>
                <nav>
                    <ul>
                        <li className="mb-2">동래구</li>
                        <li className="mb-2">사상구</li>
                        <li className="mb-2">중구</li>
                    </ul>
                </nav>
            </aside>
            {children}
        </div>
    );
}