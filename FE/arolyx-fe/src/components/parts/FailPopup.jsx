import { usePopup } from "../../context/popupContext";

export default function FailPopup() {
  const { popup, setPopup } = usePopup();

  const handleClose = () => {
    setPopup({ ...popup, text: '', messege: '' }); // Optionally clear the popup state
  };
  
  const formatMessage = (message) => {
    return message.split('-').join(' ');
  };
  return (
    <>
      <div className="relative w-96 h-10 z-40 m-auto rounded-sm bg-red-300 bg-opacity-100 text-center flex items-center justify-center  p-4 ">
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
          <h1 className=" text-base text-gray-800 font-semibold capitalize">{formatMessage(popup.text)}</h1>
        </div>
      </div>
    </>
  );
}
