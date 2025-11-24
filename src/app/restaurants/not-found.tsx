import Link from 'next/link'

export default function NotFound() {
  return (
    <div>
      <h2>식당 에러</h2>
      <p>해당 식당을 찾을 수 없습니다.</p>
      <Link href="/restaurants"
            className='mt-4 px-4 py-2
            bg-blue-500 text-white rounded hover:bg-blue-600'>
        부산 맛집 목록으로 돌아가기
      </Link>
    </div>
  )
}
