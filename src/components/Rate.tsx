import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface Props {
  rate: number;
}

export const Rate = (props: Props) => {
  const { rate } = props;

  const renderStars = () => {
    const fullStars = Array.from({ length: Math.floor(rate / 2) }, (_, i) => (
      <BsStarFill color="#ffad30" />
    ));
    const halfStar = rate % 2 === 1 ? <BsStarHalf color="#ffad30" /> : null;
    const emptyStars = Array.from(
      { length: 5 - (fullStars.length + (halfStar ? 1 : 0)) },
      (_, i) => <BsStar color="#ffad30" />
    );

    return <>{[...fullStars, halfStar, ...emptyStars]}</>;
  };

  return renderStars();
};
