import Image from "next/image";

interface CardProp {
  color: string;
  image: string;
}

export const HeaderCard = ({ color, image }: CardProp) => {
  return (
    <div
      className={` h-[150px] w-full rounded-lg  flex justify-center items-center`}
      style={{ backgroundColor: color }}
    >
      <Image src={image} alt="image" />
    </div>
  );
};
