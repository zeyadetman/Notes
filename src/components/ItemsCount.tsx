import React from "react";
import { watchAnyObject } from "@site/utils/watchObject";
import useIsBrowser from "@docusaurus/useIsBrowser";

interface Props {
  sessionStorageKey: string;
  data: any[];
}

function ItemsNumber(props: Props) {
  const isBrowser = useIsBrowser();
  const { sessionStorageKey, data } = props;
  const [filterGenre, setFilterGenre] = React.useState("");

  if (isBrowser) {
    watchAnyObject(
      window.localStorage,
      ["setItem", "getItem", "removeItem"],
      (...args: any) => {
        if (args[1] === sessionStorageKey) {
          setFilterGenre(args[2]);
        }
      }
    );
  }

  return (
    <>
      {
        [
          ...(filterGenre
            ? data.filter((movie) => movie.genres.includes(filterGenre))
            : data),
        ].length
      }
    </>
  );
}

export default ItemsNumber;