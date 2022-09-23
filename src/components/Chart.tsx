import React, { useState } from "react";
import { ResponsivePie } from "@nivo/pie";
import { useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import { watchAnyObject } from "@site/utils/watchObject";

interface Props {
  data: any;
  sessionStorageKey: string;
}

function Chart(props: Props) {
  const { data, sessionStorageKey } = props;
  const { colorMode } = useColorMode();
  const [genres, setGenres] = useState([]);
  const [activeItem, setActiveItem] = useState({});
  const [fillItems, setFillItems] = useState([]);

  useEffect(() => {
    const allGenres = new Map();
    data.forEach(({ genres }) => {
      genres.forEach((genre) => {
        if (allGenres.has(genre)) {
          allGenres.set(genre, allGenres.get(genre) + 1);
        } else {
          allGenres.set(genre, 1);
        }
      });
    });

    const genresData = Array.from(allGenres.keys()).map((genre, index) => ({
      id: genre,
      label: genre,
      value: allGenres.get(genre),
    }));

    setGenres(genresData);

    if (activeItem && (activeItem as any)?.id) {
      localStorage.setItem(sessionStorageKey, (activeItem as any)?.id);
      watchAnyObject(
        window.localStorage,
        ["setItem", "getItem", "removeItem"],
        // @ts-ignore
        (method, key, ...args) => ({ [key]: args })
      );

      setFillItems(
        genresData.map((genre) => ({
          match: { id: genre.id },
          id: genre.id === (activeItem as any)?.id ? "lines" : "opacity",
        }))
      );
    } else {
      localStorage.removeItem(sessionStorageKey);
      setFillItems([]);
    }
  }, [activeItem]);

  return (
    <ResponsivePie
      data={genres}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      enableArcLabels={true}
      activeOuterRadiusOffset={15}
      borderWidth={1}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={colorMode === "dark" ? "#FFF" : "#333333"}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: "color" }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      onClick={(item) => {
        console.log({ item });
        if ((activeItem as any)?.id === item.id) {
          setActiveItem(null);
        } else {
          setActiveItem(item);
        }
      }}
      defs={[
        {
          id: "opacity",
          type: "patternLines",
          background: "#a1a1a1",
          color: "rgba(255, 255, 255, 0.3)",
          size: 3,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "rgba(255, 255, 255, 0.3)",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={fillItems}
    />
  );
}

export default Chart;
