import React from "react";
import useFitText from "use-fit-text";
import { Itag } from "./Tags";

interface ItagA4v {
  tag: Itag;
}

export const TagA4v = ({ tag }: ItagA4v) => {
  const dateTag = new Date();
  const { fontSize, ref } = useFitText({
    logLevel: "debug",
    minFontSize: 10,
    maxFontSize: 100,
  });

  return (
    <div
      className="container"
      style={{
        width: "777px",
        height: "1073px",
        paddingTop: 35,
        paddingLeft: 35,
        paddingRight: 70,
      }}
    >
      <div>
        <div style={{ fontWeight: "500", fontSize: "40pt", padding: "0 0px" }}>
          {tag.property?.type}
        </div>
      </div>
      <div>
        <div
          style={{
            fontWeight: "500",
            height: "112px",
            fontSize: "40pt",
            padding: "0 0px",
          }}
        >
          {tag.property?.model}
        </div>
      </div>
      <div style={{ display: "inline-flex", marginBottom: 37 }}>
        <div
          style={{
            display: "inline-flex",
            fontSize: "15pt",
            fontWeight: "500",
            padding: "0 0px",
          }}
        >
          <div>{tag?.property?.settings?.[0]}</div>
        </div>
        <div
          style={{ display: "inline-flex", fontSize: "40pt", padding: "0 0px" }}
        >
          <div
            style={{
              width: 270,
              color: "white",
              textAlign: "center",
              fontSize: "90pt",
              fontWeight: "400",
              backgroundColor: "rgb(239,66,111)",
              marginLeft: "auto",
              marginRight: 0,
            }}
          >
            {tag?.discount}%
          </div>
        </div>
      </div>
      <div style={{ fontSize: "12pt", fontWeight: 500 }}>
        <div style={{ width: 672, display: "inline-flex", marginBottom: 10 }}>
          <div
            style={{
              display: "inline-flex",
              height: 70,
              width: 159,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: tag?.property?.settings?.[1]
                ? "#f0f0f0"
                : "white",
            }}
          >
            {tag?.property?.settings?.[1]?.slice(0, 30)}
          </div>
          <div
            style={{
              marginLeft: 10,
              display: "inline-flex",
              height: 70,
              width: 159,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: tag?.property?.settings?.[2]
                ? "#f0f0f0"
                : "white",
            }}
          >
            {tag?.property?.settings?.[2]?.slice(0, 30)}
          </div>
          <div
            style={{
              marginLeft: 10,
              display: "inline-flex",
              height: 70,
              width: 159,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: tag?.property?.settings?.[3]
                ? "#f0f0f0"
                : "white",
            }}
          >
            {tag?.property?.settings?.[3]?.slice(0, 30)}
          </div>
          <div
            style={{
              marginLeft: 10,
              display: "inline-flex",
              height: 70,
              width: 159,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: tag?.property?.settings?.[4]
                ? "#f0f0f0"
                : "white",
            }}
          >
            {tag?.property?.settings?.[4]?.slice(0, 30)}
          </div>
        </div>
        <div style={{ width: 672, display: "inline-flex" }}>
          <div
            style={{
              marginLeft: 0,
              display: "inline-flex",
              height: 70,
              width: 159,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: tag?.property?.settings?.[5]
                ? "#f0f0f0"
                : "white",
            }}
          >
            {tag?.property?.settings?.[5]?.slice(0, 30)}
          </div>
          <div
            style={{
              marginLeft: 10,
              display: "inline-flex",
              height: 70,
              width: 159,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: tag?.property?.settings?.[6]
                ? "#f0f0f0"
                : "white",
            }}
          >
            {tag?.property?.settings?.[6]?.slice(0, 30)}
          </div>
          <div
            style={{
              marginLeft: 10,
              display: "inline-flex",
              height: 70,
              width: 159,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: tag?.property?.settings?.[7]
                ? "#f0f0f0"
                : "white",
            }}
          >
            {tag?.property?.settings?.[7]?.slice(0, 30)}
          </div>
          <div
            style={{
              marginLeft: 10,
              display: "inline-flex",
              height: 70,
              width: 159,
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: tag?.property?.settings?.[8]
                ? "#f0f0f0"
                : "white",
            }}
          >
            {tag?.property?.settings?.[8]?.slice(0, 30)}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <table className="w-100" style={{ textAlign: "center" }}>
          <thead style={{ fontSize: "24pt" }}>
            <tr>
              <th style={{ fontSize: "22pt", fontWeight: "500" }}>РАЗМЕР</th>
              <th style={{ fontSize: "19pt", fontWeight: "500" }}>
                СТАРАЯ ЦЕНА
              </th>
              <th style={{ fontSize: "20pt", fontWeight: "500" }}>
                НОВАЯ ЦЕНА
              </th>
            </tr>
          </thead>
          <tbody style={{ fontWeight: "500" }}>
            {tag.data?.map((item: any) => (
              <tr>
                <td style={{ fontSize: "18pt" }}>{item.name}</td>
                <td
                  style={{ fontSize: "20pt", textDecoration: "line-through" }}
                >
                  {item.valueOld.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
                  руб
                </td>
                <td style={{ fontSize: "24pt" }}>
                  {item.valueNew.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")}{" "}
                  руб
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        дата:&nbsp;{dateTag.getDate()}-{dateTag.getMonth() + 1}-
        {dateTag.getFullYear()}
      </div>
      <div>
        <div
          style={{
            width: "30%",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              display: "inline",
              marginRight: 20,
              fontSize: "1px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src="askona_2.png"
              width={181}
              height={55}
              style={{ paddingTop: 15 }}
            />
          </div>
        </div>
        <div
          style={{
            width: "70%",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              backgroundColor: "rgb(239,66,111)",
              color: "white",
            }}
          >
            <div
              className="d-flex align-items-center"
              style={{
                display: "inline-flex",
                fontSize: "18pt",
                margin: "0 0 0 0",
                width: 170,
                height: 70,
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              РАССРОЧКА ПЛАТЕЖА
            </div>
            <div
              style={{
                display: "block",
                height: 70,
                width: 100,
                fontSize: "12pt",
                textAlign: "center",
              }}
            >
              <div style={{ marginTop: "10px", fontWeight: "500" }}>0-0-10</div>
              <div
                style={{ margin: "1px", display: "block", fontWeight: "500" }}
              >
                от{" "}
                {Math.round(
                  Number(tag?.data?.[0].valueNew.replaceAll(" ", "")) / 10
                )}{" "}
                руб
              </div>
            </div>
            <div
              style={{
                display: "block",
                height: 70,
                width: 100,
                fontSize: "12pt",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              <div
                style={{
                  marginTop: "10px",
                  display: "block",
                  fontWeight: "500",
                }}
              >
                0-0-9
              </div>
              <div style={{ margin: "1px" }}>
                от{" "}
                {Math.round(
                  Number(tag?.data?.[0].valueNew.replaceAll(" ", "")) / 9
                )}{" "}
                руб
              </div>
            </div>
            <div
              style={{
                display: "block",
                height: 70,
                width: 100,
                fontSize: "12pt",
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              <div style={{ marginTop: "10px", fontWeight: "500" }}>0-0-6</div>
              <div style={{ margin: "1px" }}>
                от{" "}
                {Math.round(
                  Number(tag?.data?.[0].valueNew.replaceAll(" ", "")) / 6
                )}{" "}
                руб
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
