import React, { useContext, useEffect } from "react";
import { useFontSizeModel } from "../hooks/useFontSizeModel";
import { useFontSizeType } from "../hooks/useFontSizeType";
import { Itag } from "./Tags";

interface IpropsTagPodves {
  tag: Itag;
}

export default function TagPodvesOT({ tag }: IpropsTagPodves) {
  const date = new Date();
  const fsizeModel = useFontSizeModel(tag);
  const fsizeType = useFontSizeType(tag);

  return (
    <>
      <div style={{ marginLeft: 20, marginTop: 5, display: "inline-flex" }}>
        <div style={{ width: 277, height: 385, border: "0.5px dashed black" }}>
          <div className="row">
            <div className="col">
              <div style={{ width: "100%", fontSize: fsizeType }}>{tag?.property?.type}</div>
              <div
                style={{
                  width: "100%",
                  fontSize: fsizeModel,
                  height: 37,
                  display: "flex",
                  alignItems: "center",
                }}>
                {tag?.property?.model}
              </div>
              <div style={{ width: "100%", fontSize: "11pt", display: "inline" }}>Размер {tag?.property?.size}</div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div style={{ width: 70, height: 265 }}>
                {tag?.property?.settings && (
                  <>
                    {tag?.property?.settings?.map((item) => {
                      if (item) {
                        return (
                          <div
                            style={{
                              fontSize: "6pt",
                              backgroundColor: "#f0f0f0",
                              marginBottom: 3,
                              textAlign: "center",
                            }}>
                            {item?.slice(0, 30)}
                          </div>
                        );
                      } else {
                        return "";
                      }
                    })}
                  </>
                )}
              </div>
              <div style={{ marginBottom: 15 }}>
                <img src="askona_2.png" width={70} height={16} />
              </div>
            </div>
            <div className="col" style={{ marginLeft: 0 }}>
              <div
                style={{
                  width: "100px",
                  backgroundColor: "rgb(239,66,111)",
                  color: "white",
                  fontSize: "33pt",
                  marginLeft: "auto",
                  marginRight: "0",
                  textAlign: "center",
                }}>
                {tag?.discount}%
              </div>
              <div
                style={{
                  width: "150px",
                  fontSize: "7pt",
                  textAlign: "end",
                  marginLeft: "auto",
                  marginRight: "0",
                }}>
                старая цена
              </div>
              <div
                style={{
                  width: "170px",
                  fontSize: "19pt",
                  textAlign: "end",
                  marginLeft: "auto",
                  marginRight: "0",
                  textDecoration: "line-through",
                }}>
                от
                {tag?.fixOldPrice?.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")} руб
              </div>
              <div
                style={{
                  width: "150px",
                  fontSize: "11pt",
                  textAlign: "end",
                  marginLeft: "auto",
                  marginRight: "0",
                }}>
                новая цена
              </div>
              <div
                style={{
                  width: "180px",
                  fontSize: "23pt",
                  fontWeight: 500,
                  textAlign: "end",
                  marginLeft: "auto",
                  marginRight: "0",
                }}>
                <span style={{ fontSize: "16pt" }}>от </span>
                {tag?.fixNewPrice?.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
                <span style={{ fontSize: "20px" }}>руб</span>
              </div>
              <div
                style={{
                  width: "150px",
                  fontSize: "7pt",
                  textAlign: "end",
                  marginLeft: "auto",
                  marginRight: "0",
                  paddingBottom: 0,
                  paddingTop: 5,
                }}>
                {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
              </div>
              <div
                style={{
                  width: "181px",
                  height: "70px",
                  fontSize: "12pt",
                  fontWeight: "500",
                  color: "white",
                  backgroundColor: "rgb(239,66,111)",
                  marginLeft: "auto",
                  marginRight: "0",
                  marginTop: "15px",
                }}>
                <div style={{ fontSize: "8pt", textAlign: "center" }}>РАССРОЧКА ПЛАТЕЖА</div>
                <div style={{ fontSize: "10pt", paddingTop: 5 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      width: "45px",
                      marginLeft: 15,
                    }}>
                    0-0-6
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      width: "40px",
                      marginLeft: 15,
                    }}>
                    0-0-9
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      width: "50px",
                      marginLeft: 15,
                    }}>
                    0-0-10
                  </div>
                </div>
                <div style={{ fontSize: "8pt", paddingTop: 5 }}>
                  <div
                    style={{
                      display: "inline-flex",
                      width: "60px",
                      marginLeft: 5,
                      textAlign: "center",
                    }}>
                    {Math.round(Number(tag?.fixNewPrice?.replaceAll(" ", "")) / 6)} руб
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      width: "55px",
                      marginLeft: 3,
                      textAlign: "center",
                    }}>
                    {Math.round(Number(tag?.fixNewPrice?.replaceAll(" ", "")) / 9)} руб
                  </div>
                  <div
                    style={{
                      display: "inline-flex",
                      width: "55px",
                      marginLeft: 3,
                      textAlign: "center",
                    }}>
                    {Math.round(Number(tag?.fixNewPrice?.replaceAll(" ", "")) / 10)} руб
                  </div>
                </div>
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
