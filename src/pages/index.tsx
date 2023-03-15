import { EvenCard } from "@/components/eventCard";
import { Header } from "@/components/header";
import { OverViewCard } from "@/components/overviewCard";
import Head from "next/head";
import Image from "next/image";
import piechart from "../assets/images/Loader.svg";
import blueImg from "../assets/images/blue.svg";
import brownImg from "../assets/images/brown.svg";
import localFont from 'next/font/local'


const nfts = [
  {
    name: "NFT items",
    amount: "187",
  },
  {
    name: "Collection",
    amount: "5",
  },
  {
    name: "Minted",
    amount: "39",
  },
];
const searches = [
  {
    name: "Green apple",
    amount: "",
  },
  {
    name: "Christmas tree",
    amount: "",
  },
];
const activity = [
  {
    name: "Settings > Account",
    amount: "",
  },
  {
    name: "Sales Reports",
    amount: "",
  },
];

const events = [
  {
    airdropColor: "#3CAA2A",
    airdropIcon: piechart,
    chipText: "Harvest",
    date: "2022-09-13 08:57:15",
    title: "Manure",
    success: 44,
    processing: 8,
    failed: 2,
    showActions: true,
    progress: 40,
    image: brownImg,
   
  },
  {
    airdropColor: "#28458F",
    airdropIcon: piechart,
    chipText: "It’s Raining",
    date: "2022-09-13 08:57:15",
    title: "Water",
    success: 100,
    processing: 0,
    failed: 0,
    showActions: false,
    progress: 100,
    image: blueImg,
   
  },
];


const Satoshi = localFont({
  src: [
    {
      path: '../assets/fonts/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Satoshi-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    
    {
      path: '../assets/fonts/Satoshi-Medium.woff',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../assets/fonts/Satoshi-Light.woff',
      weight: '300',
      style: 'light',
    },
  ],
})


export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={Satoshi.className}>
        <div className="bg-light-bg min-h-[100vh] overflow-hidden ">
          <Header />

          <div className="grid grid-cols-12 gap-4  p-6">
            <div className="col-span-9">
              <div className="font-light text-grey-text mb-4">Event</div>
              {events.map((item, idx) => (
                <EvenCard
                  key={idx}
                  progress={item.progress}
                  airdropColor={item.airdropColor}
                  airdropIcon={item.airdropIcon}
                  chipText={item.chipText}
                  date={item.date}
                  title={item.title}
                  success={item.success}
                  processing={item.processing}
                  failed={0}
                  image={item.image}
                  showActions={item.showActions}
                />
              ))}
            </div>
            <div>
              <div className="font-light text-grey-text">0verview</div>
              <div className=" mt-4">
                <OverViewCard
                  items={[{ name: "Wallet Balance", amount: "0.489 ETH" }]}
                />
              </div>

              <OverViewCard title="NFTs" items={nfts} />
              <OverViewCard title="Saved Searches" items={searches} />
              <OverViewCard title="Recent Activity" items={activity} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
