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
      <div className="absolute  end-3 border border-red-950 rounded-full p-0.5">
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
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" stroke-red-950 size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
          <h1 className=" ml-2 text-base text-gray-950 font-semibold">{formatMessage(popup.text)}</h1>
        </div>
      </div>
    </>
  );
}
