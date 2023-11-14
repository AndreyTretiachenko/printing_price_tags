import React, { useContext, useEffect } from "react";
import { useFontSizeModel } from "../hooks/useFontSizeModel";
import { useFontSizeType } from "../hooks/useFontSizeType";
import { Itag } from "./Tags";

interface IpropsTagPodves {
  tag: Itag;
}

export default function TagSticker({ tag }: IpropsTagPodves) {
  const date = new Date();
  const fsizeModel = useFontSizeModel(tag);
  const fsizeType = useFontSizeType(tag);

  return (
    <>
      <div style={{ marginLeft: 10, marginTop: 1, display: "inline-flex" }}>
        <div style={{ width: 324, height: 224, paddingLeft: 10 }}>
          <div className="row">
            <div className="col">
              <div style={{ width: "100%", fontSize: "14pt" }}>{tag?.property?.type}</div>
              <div
                style={{
                  width: "100%",
                  fontSize: "20pt",
                  display: "flex",
                  alignItems: "center",
                }}>
                {tag?.property?.model}
              </div>
              <div style={{ padding: 0, width: "100%", fontSize: "8pt", display: "inline" }}>
                Размер {tag?.property?.size}
              </div>
              <div
                style={{
                  width: "100%",
                  fontSize: "6pt",
                  display: "inline",
                  paddingLeft: 3,
                }}>
                {tag?.property?.catigoryCloth?.toString() === "0" ? "" : tag?.property?.catigoryCloth}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col" style={{ maxWidth: 150, paddingRight: "5px" }}>
              <div
                style={{
                  width: 130,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "24pt",
                  fontWeight: 700,
                  padding: "0px 8px 2px 8px",
                  textAlign: "center",
                }}>
                {tag?.discount}%
              </div>
            </div>
            <div className="col" style={{ padding: "0px 0px 0px 0px" }}>
              <div
                style={{
                  width: "90px",
                  fontSize: "5pt",
                  fontWeight: 500,
                  textAlign: "start",
                  marginLeft: "0",
                  marginRight: "0",
                  textTransform: "uppercase",
                }}>
                старая цена
              </div>
              <div
                style={{
                  width: "90px",
                  fontSize: "15pt",
                  textAlign: "start",
                  fontWeight: 700,
                  marginLeft: "0",
                  marginRight: "0",
                  textDecoration: "line-through",
                }}>
                {tag?.fixOldPrice?.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}
              </div>
              <div
                style={{
                  width: "90px",
                  fontSize: "8pt",
                  fontWeight: 500,
                  textAlign: "start",
                  marginLeft: "0",
                  marginRight: "0",
                  textTransform: "uppercase",
                }}>
                новая цена
              </div>
              <div
                style={{
                  fontSize: "22pt",
                  fontWeight: 700,
                  textAlign: "start",
                  marginLeft: "0",
                  marginRight: "0",
                }}>
                {tag?.fixNewPrice?.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
                <span style={{ fontSize: "22pt" }}>руб</span>
              </div>
              <div
                style={{
                  fontSize: "9pt",
                  textAlign: "end",
                  marginLeft: "0",
                  marginRight: "0",
                  paddingRight: 20,
                  paddingTop: 5,
                  paddingBottom: 0,
                }}>
                {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function useFontSizeTag(tag: Itag) {
  throw new Error("Function not implemented.");
}
