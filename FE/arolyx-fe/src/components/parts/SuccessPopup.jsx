import { usePopup } from "../../context/popupContext";

export default function SuccessPopup() {
  const { popup, setPopup } = usePopup();

  const handleClose = () => {
    setPopup({ ...popup, text: '', messege: '' }); // Optionally clear the popup state
  };

  return (
    <>
      <div className="relative w-96 h-10 z-40 m-auto rounded-sm bg-green-300 bg-opacity-100 text-center flex items-center shadow-md justify-center  p-4 ">
        <div className="absolute  end-3 hover:bg-green-400 hover:rounded-full p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6   cursor-pointer hover:scale-110 "
            onClick={handleClose}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div className="flex">
          <svg className="size-6 stroke-green-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h1 className="ml-2 text-base text-green-950 font-semibold">{popup.text}</h1>
        </div>
      </div>
    </>
  );
}
