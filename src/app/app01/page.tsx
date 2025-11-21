export default function App01Page() {
  return (
    <div className='w-full flex flex-col justify-start'>
      <h1 className='text-2xl font-bold p-5'>
        오늘의 맛집 추천
      </h1>
      <div className="flex w-2/5 flex-col border rounded-sm p-5 m-5
                     bg-gray-100 text-gray-900">
        <h2 className="text-xl font-bold">맛있는 파스타 집</h2>
        <p>방금 추천받은 따끈따끈한 맛집!</p>
      </div>
    </div>
  );
}
