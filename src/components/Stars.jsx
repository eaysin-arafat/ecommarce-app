/* eslint-disable react/prop-types */
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

export const Stars = ({ stars, reviews }) => {
  const tempStarts = Array.from({ length: 5 }, (_, index) => {
    const haldNumber = index + 0.5;

    return (
      <span key={index} className="text-[#ffb900] text-[.25rem] mr-1">
        {stars >= index + 1 ? (
          <BsStarFill size="14px" />
        ) : stars >= haldNumber ? (
          <BsStarHalf size="14px" />
        ) : (
          <BsStar size="14px" />
        )}
      </span>
    );
  });

  return (
    <div className="flex items-center mb-2">
      <div className="stars flex items-center">{tempStarts}</div>
      <p className="reviews ml-2 mb-0">({reviews}) customer reviews</p>
    </div>
  );
};
