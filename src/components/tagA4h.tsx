import React from "react";
import useFitText from "use-fit-text";
import { Itag } from "./Tags";

interface ItagA4h {
  tag: Itag;
}

export const TagA4h = ({ tag }: ItagA4h) => {
  const dateTag = new Date();
  const { fontSize, ref } = useFitText({
    logLevel: "debug",
    minFontSize: 10,
    maxFontSize: 100,
  });

  return (
    <div>
      <div className="container" style={{ paddingBottom: 5 }}>
        <div className="row">
          <div className="col">
            <div className="parent">
              <div
                className="div1"
                style={{
                  fontSize: "10pt",
                  display: "flex",
                  flexDirection: "column",
                  margin: "0.8rem",
                  fontWeight: "500",
                }}>
                {tag?.property?.settings?.[1] ? (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      marginBottom: "10px",
                      height: "10%",
                      textAlign: "center",
                      backgroundColor: "#f0f0f0",
                    }}>
                    {tag?.property?.settings?.[2]}
                  </div>
                ) : (
                  ""
                )}
                {tag?.property?.settings?.[3] ? (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      marginBottom: "10px",
                      height: "10%",
                      textAlign: "center",
                      backgroundColor: "#f0f0f0",
                    }}>
                    {tag?.property?.settings?.[3]}
                  </div>
                ) : (
                  ""
                )}
                {tag?.property?.settings?.[4] ? (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      marginBottom: "10px",
                      height: "10%",
                      textAlign: "center",
                      backgroundColor: "#f0f0f0",
                    }}>
                    {tag?.property?.settings?.[4]}
                  </div>
                ) : (
                  ""
                )}
                {tag?.property?.settings?.[5] ? (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      marginBottom: "10px",
                      height: "10%",
                      textAlign: "center",
                      backgroundColor: "#f0f0f0",
                    }}>
                    {tag?.property?.settings?.[5]}
                  </div>
                ) : (
                  ""
                )}
                {tag?.property?.settings?.[6] ? (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      marginBottom: "10px",
                      height: "10%",
                      textAlign: "center",
                      backgroundColor: "#f0f0f0",
                    }}>
                    {tag?.property?.settings?.[6]}
                  </div>
                ) : (
                  ""
                )}
                {tag?.property?.settings?.[7] ? (
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      marginBottom: "50px",
                      height: "10%",
                      textAlign: "center",
                      backgroundColor: "#f0f0f0",
                    }}>
                    {tag?.property?.settings?.[7]}
                  </div>
                ) : (
                  ""
                )}
                <div
                  className="d-flex justify-content-center align-items-center mt-auto"
                  style={{
                    marginBottom: "5px",
                    height: "5%",
                    textAlign: "center",
                  }}>
                  дата:&nbsp;{dateTag.getDate()}-{dateTag.getMonth() + 1}-{dateTag.getFullYear()}
                </div>
              </div>
              <div className="div2" style={{ fontSize: "29pt", fontWeight: "550" }}>
                <div style={{ fontSize: "29pt" }}>
                  <span>{tag?.property?.type}</span>
                </div>
                <div
                  style={{
                    fontSize,
                    height: 70,
                    width: 520,
                    fontWeight: "1px",
                  }}>
                  <div style={{ whiteSpace: "nowrap" }}>{tag?.property?.model}</div>
                </div>
                <div style={{ fontSize: "11pt", fontWeight: "400" }}>
                  {tag?.property?.settings?.[0] ? (
                    <span>{tag?.property?.settings?.[0]?.substring(0, 200)}</span>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="div3" style={{ display: "inline-flex", alignItems: "flex-start" }}>
                <div
                  style={{
                    display: "inline-flex",
                    marginTop: 10,
                    marginRight: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                  <img src="askona_2.png" width={270} height={60} />
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    backgroundColor: "rgb(239,66,111)",
                    width: "100%",
                    color: "white",
                  }}>
                  <div
                    className="d-flex align-items-center"
                    style={{
                      display: "inline-flex",
                      fontSize: "18pt",
                      margin: "5px",
                      width: "25%",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}>
                    РАССРОЧКА ПЛАТЕЖА
                  </div>
                  <div
                    style={{
                      display: "block",
                      width: "25%",
                      fontSize: "18pt",
                      textAlign: "center",
                    }}>
                    <div style={{ margin: "5px", fontWeight: "bold" }}>0-0-10</div>
                    <div
                      style={{
                        margin: "5px",
                        display: "block",
                        fontWeight: "bold",
                      }}>
                      от {Math.round(Number(tag?.data?.[0].valueNew.replaceAll(" ", "")) / 10)} руб
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      width: "25%",
                      fontSize: "18pt",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}>
                    <div
                      style={{
                        margin: "5px",
                        display: "block",
                        fontWeight: "bold",
                      }}>
                      0-0-9
                    </div>
                    <div style={{ margin: "5px" }}>
                      от {Math.round(Number(tag?.data?.[0].valueNew.replaceAll(" ", "")) / 9)} руб
                    </div>
                  </div>
                  <div
                    style={{
                      display: "block",
                      width: "25%",
                      fontSize: "18pt",
                      textAlign: "center",
                      fontWeight: "bold",
                    }}>
                    <div style={{ margin: "5px", fontWeight: "bold" }}>0-0-6</div>
                    <div style={{ margin: "5px" }}>
                      от {Math.round(Number(tag?.data?.[0].valueNew.replaceAll(" ", "")) / 6)} руб
                    </div>
                  </div>
                </div>
              </div>
              <div className="div4 d-flex justify-content-center align-items-center" style={{ padding: 20 }}>
                {tag?.discount}%
              </div>
              <div className="div5 d-flex" style={{ height: "350px" }}>
                <div className="w-100">
                  <table className="w-100" style={{ textAlign: "center" }}>
                    <thead style={{ fontSize: "24pt" }}>
                      <tr>
                        <th style={{ fontWeight: "500" }}>РАЗМЕР</th>
                        <th style={{ fontWeight: "500" }}>СТАРАЯ ЦЕНА</th>
                        <th style={{ fontWeight: "500" }}>НОВАЯ ЦЕНА</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontWeight: "500", fontSize: "24pt" }}>
                      {tag.data?.map((item: any) => (
                        <tr>
                          <td>{item.name}</td>
                          <td style={{ textDecoration: "line-through" }}>
                            {item.valueOld.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")} руб
                          </td>
                          <td>{item.valueNew.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")} руб</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
