export default function DetailsItems ({detailsArray, handleRemoveElement}){
   return(
    <div className="m-auto flex flex-col items-end p-2">
    {detailsArray?.map((item) =>
      <><div className='w-72 border flex m-0.5 justify-between h-8 bg-gray-100'>
        <p className='text-xs pl-4 pt-0.5'>{item}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" onClick={()=> handleRemoveElement(item)} className="size-6 pr-2 hover:scale-110 hover:cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
      </>)}
   </div>
   )
}