import Image from "next/image";
import { AiFillClockCircle } from "react-icons/ai";
import { BsCalendar } from "react-icons/bs";
import { ProgressBar } from "./progressbar";

interface EventProp {
  airdropColor: string;
  airdropIcon: string;
  chipText: string;
  date: string;
  title: string;
  success: number;
  processing: number;
  progress: number;
  failed: number;
  image: string;
  showActions: Boolean;
}

export const EvenCard = ({
  airdropColor,
  airdropIcon,
  chipText,
  date,
  title,
  success,
  processing,
  failed,
  showActions,
  progress,
  image,
}: EventProp) => {
  let p = "";
  return (
    <div
      className={
        showActions
          ? "bg-brown-img bg-white bg-no-repeat mb-5 bg-center bg-contain  border border-grey shadow-sm rounded-lg w-full"
          : "bg-blue-img bg-white/30 bg-no-repeat mb-5 bg-center bg-contain  border border-grey shadow-sm rounded-lg w-full"
      }
    >
      <div className="backdrop-blur-lg rounded-lg ">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="flex items-center gap-4 py-4">
              <div
                className="py-1 pl-6 pr-1 flex rounded-r-lg text-sm text-white items-center gap-2 "
                style={{ backgroundColor: airdropColor }}
              >
                <Image src={airdropIcon} alt="icon" />
                Airdrop
              </div>
              <div className="bg-light-grey px-2 py-1  text-sm flex rounded-lg items-center gap-2">
                <BsCalendar />
                {chipText}
              </div>

              <div className="flex items-center gap-2 ">
                <AiFillClockCircle className="text-dark-grey" />
                <div className="text-dark-grey font-bold">Started</div>
                <div className="font-light">{date}</div>
              </div>
            </div>
            <div className="p-4">
              <h4>🍎🍌🍍The Fruit Salad Game🍆🥦🥕</h4>
              <div className="flex items-center gap-2 my-2">
                <h1 className="font-bold text-2xl">{title}</h1>
                <h6 className="font-light text-sm mt-2">x100</h6>
              </div>
              <div className="flex items-center gap-4">
                <div>Wallet Transactions:</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{success}</span>Success
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{processing}</span>Processing
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold">{failed}</span>Failed
                </div>
              </div>
              <div className="my-4">
                <ProgressBar bgcolor={"#FF4800"} completed={progress} />
              </div>

              <div className="flex items-center gap-4">
                <button className="bg-black text-white px-4 py-2 rounded-md">
                  More Details
                </button>
                {showActions && (
                  <div className="flex items-center gap-4">
                    <button className="border px-4 py-2 rounded-md">
                      Cancel
                    </button>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="s"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                      />
                      <h4>Receive report on email</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-4 relative">
            <div className="flex justify-center">
              <Image src={image} alt="image" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
