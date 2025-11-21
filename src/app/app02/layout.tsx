import Link from 'next/link';
export default function App02Layout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div className='flex h-full'>
            <aside className='w-60 bg-gray-200 p-5'>
                <h1 className="mb-5 text-2xl font-bold">맛집 카테고리</h1>
                <nav>
                    <ul className='flex'>
                        <li className="mb-2 mx-5">
                            <Link href="/app01/dongraegu" className='hover:text-blue-500'>동래구</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/app01/sasanggu" className='hover:text-blue-500'>사상구</Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/app01/junggu" className='hover:text-blue-500'>중구</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            {children}
        </div>
    );
}