import Image from "next/image";
import logo from "../assets/images/logo.svg";
import { HeaderCard } from "./headerCard";
import nft from "../assets/images/group17.svg";
import holders from "../assets/images/group99.svg";
import airdrop from "../assets/images/group33.svg";
import trade from "../assets/images/group100.svg";
import sales from "../assets/images/polygon.svg";
import { IoIosSearch } from "react-icons/io";
import { HiBell } from "react-icons/hi";
import wallet from "../assets/images/wallet.svg";
import { HiUser } from "react-icons/hi";
import bell from "../assets/images/bell.svg";
import user from "../assets/images/user.svg";
const card = [
  {
    name: "NFT Management",
    color: "#C0EEC0",
    image: nft,
  },
  {
    name: "Find Holders",
    color: "#FDF7D5",
    image: holders,
  },
  {
    name: "Airdrop",
    color: "#D5F3F8",
    image: airdrop,
  },
  {
    name: "Trade-in",
    color: "#EDDBF5",
    image: trade,
  },
  {
    name: "Sales",
    color: "#FCDCEF",
    image: sales,
  },
];
export const Header = () => {
  return (
    <div className="bg-white shadow-sm p-6 py-6">
      <div className="flex gap-8 items-center  justify-between">
        <Image src={logo} alt="logo" />
        <div className="mt-2">
          <a
            href="#"
            className="font-bold items-center text-md flex justify-center flex-col"
          >
            Dashboard
            <div className="bg-red h-1 mt-1 w-1 inline-block rounded-full "></div>
          </a>
        </div>
        <a href="#" className="font-light text-md">
          Create
        </a>
        <div className="mt-[17px]">
          <a href="#" className="font-light text-md">
            Dashboard
          </a>

          <div className="font-light text-xs text-red">Coming soon</div>
        </div>
        <a href="#" className="font-light text-md">
          Learn
        </a>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <IoIosSearch />{" "}
          </div>
          <input
            type="text"
            placeholder="Find Holders"
            className="border border-dark-border pl-10 p-[4px]  pr-10 rounded-md w-[550px]"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <div className="rounded-sm h-6 w-6 font-light bg-grey flex justify-center">
              /
            </div>
          </div>
        </div>

        <div className="bg-lemon-blue flex justify-center gap-2 font-bold text-xs text-uppercase px-4 py-2 rounded-md text-green items-center">
          <div className="bg-green h-2 w-2 inline-block rounded-full "></div>{" "}
          STATUS
        </div>
        <Image src={bell} alt="icon" />
        <Image src={wallet} alt="icon" />
        <Image src={user} alt="icon" />
      </div>

      <div className="grid grid-cols-5 mt-10 gap-4">
        {card.map((item) => (
          <div
            key={item.name}
            className="flex justify-center items-center flex-col"
          >
            <HeaderCard image={item.image} color={item.color} />

            <h4 className="text-md font-semibold mt-1">{item.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};
