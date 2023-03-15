import { BsChevronRight } from "react-icons/bs";

interface CardProp {
  name: string;
  amount: string;
}
interface CardItemProps {
  items: CardProp[];
  title?: string;
}
export const OverViewCard = ({ items, title }: CardItemProps) => {
  return (
    <div className="bg-white rounded-lg p-4 w-[340px] rounded-lg shadow-sm border border-grey mb-6 ">
      {title && <h3 className="my-2 font-medium">{title}</h3>}
      {items.map((item, idx) => (
        <div className="flex justify-between flex-grow items-center w-full my-2">
          <h4 className="font-light" key={idx}>
            {item.name}
          </h4>
          <div className="flex items-center gap-4">
            <h4 className="text-light">{item.amount}</h4>
            <BsChevronRight />
          </div>
        </div>
      ))}
    </div>
  );
};
