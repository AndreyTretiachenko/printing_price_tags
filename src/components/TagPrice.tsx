import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import { useReactToPrint } from "react-to-print";
import { useAppSelector } from "../hooks/hooks";
import { TagA4h } from "./tagA4h";
import { TagA4v } from "./tagA4v";
import TagPodves from "./tagPodves";
import TagPodvesOT from "./tagPodvesOT";
import { Itag } from "./Tags";

interface ItagPriceProps {
  tagType?: string;
}
const TagPrice = (props: ItagPriceProps) => {
  const { tagType } = props;
  const componentRef = useRef<HTMLDivElement>(null);
  const { tagList } = useAppSelector((state) => state.tags);
  const { printStatus } = useAppSelector((state) => state.print);
  const selectTag = useAppSelector((state) => state.selectTag);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    if (printStatus) handlePrint();
  }, [printStatus]);

  return (
    <div ref={componentRef}>
      {tagType === "a4h" &&
        tagList.map((item: Itag) => {
          if (item.checked) {
            if (item.copies > 1) {
              let row = [];
              for (let i = 1; i <= item.copies; i++) {
                row.push(<TagA4h tag={item} />);
              }
              return row;
            }
            return <TagA4h tag={item} />;
          }
        })}
      {tagType === "a4v" &&
        tagList.map((item: Itag) => {
          if (item.checked) {
            if (item.copies > 1) {
              let row = [];
              for (let i = 1; i <= item.copies; i++) {
                row.push(<TagA4v tag={item} />);
              }
              return row;
            }
            return <TagA4v tag={item} />;
          }
        })}
      {tagType === "podves" &&
        tagList.map((item: Itag) => {
          if (item.checked) {
            if (item.copies > 1) {
              let row = [];
              for (let i = 1; i <= item.copies; i++) {
                row.push(<TagPodves tag={item} />);
              }
              return row;
            }
            return <TagPodves tag={item} />;
          }
        })}
      {tagType === "podvesOT" &&
        tagList.map((item: Itag) => {
          if (item.checked) {
            if (item.copies > 1) {
              let row = [];
              for (let i = 1; i <= item.copies; i++) {
                row.push(<TagPodvesOT tag={item} />);
              }
              return row;
            }
            return <TagPodvesOT tag={item} />;
          }
        })}
      {tagType === "noset" && <div> необходимо выбрать формат ценника </div>}
    </div>
  );
};

export default TagPrice;
