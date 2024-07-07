import { usePopup } from "../../context/popupContext";

export default function SuccessPopup() {
  const { popup, setPopup } = usePopup();

  const handleClose = () => {
    setPopup({ ...popup, text: '', messege: '' }); // Optionally clear the popup state
  };

  return (
    <>
      <div className="relative w-96 h-10 z-40 m-auto rounded-sm bg-green-300 bg-opacity-30 text-center flex items-center justify-center  p-4 ">
        <div className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={handleClose}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <div>
          <h1 className=" text-base text-gray-800 font-semibold">{popup.text}</h1>
        </div>
      </div>
    </>
  );
}