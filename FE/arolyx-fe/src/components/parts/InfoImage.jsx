
export default function InfoImage() {
    return (
        <>
            <div className='flex w-full items-start flex-row'>
                <div className='flex flex-col  items-center w-24 h-20 mx-1'>
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/clock--v1.png" alt="clock--v1" />                    
                    <p className='text-center text-xs font-semibold'>LONG LASTING</p>
                </div>
                <div className=' flex flex-col  items-center w-24 h-20 mx-1'>
                    <img width="40" height="40" src="https://img.icons8.com/ios/100/perfume--v1.png" alt="perfume--v1" />
                    <p className=' text-xs text-center font-semibold'>20% PERFUME OIL</p>
                </div>
                <div className='flex flex-col items-center w-24 h-20 mx-1 '>
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/around-the-globe.png" alt="around-the-globe" />
                    <p className=' text-xs text-center font-semibold'>TRAVEL FRIENDLY</p>
                </div>
            </div>
        </>
    )
}