import React from "react";
import { Rate } from "@site/src/components/Rate";
import { watchAnyObject } from "@site/utils/watchObject";

interface Props {
  sessionStorageKey: string;
  data: any[];
  headers: string[];
}

function Table(props: Props) {
  const { sessionStorageKey, data, headers } = props;
  const [filterGenre, setFilterGenre] = React.useState("");

  watchAnyObject(
    window && window.localStorage,
    ["setItem", "getItem", "removeItem"],
    (...args: any) => {
      if (args[1] === sessionStorageKey) {
        setFilterGenre(args[2]);
      }
    }
  );

  return (
    <table>
      <thead>
        <tr>
          {headers?.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[
          ...(filterGenre
            ? data.filter((movie) => movie.genres.includes(filterGenre))
            : data),
        ].map((movie) => (
          <tr>
            <td>
              <a href={movie.url}>{movie.title}</a>
            </td>
            <td title={`Rate is: ${movie.rate}/10`}>
              <Rate rate={Number(movie.rate)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
