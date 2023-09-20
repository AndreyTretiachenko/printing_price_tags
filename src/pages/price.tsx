import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import TagPrice from "../components/TagPrice";
import Tags from "../components/Tags";
import { TagSettings } from "../components/TagSettings/Tagsettings";
import { setStatus } from "../features/print/printSlice";
import { setCategoryList } from "../features/products/productSlice";
import { addProfile } from "../features/profile/profileTagSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { Watch } from "react-loader-spinner";

export default function Price() {
  const dispatch = useAppDispatch();
  const { selectTag } = useAppSelector((state) => state);
  const [tagType, setTagType] = useState("");
  const { profileList } = useAppSelector((state) => state.profile);
  const [spinVisible, setSpinVisible] = useState(false);

  const handleClickPrint = () => {
    dispatch(setStatus(true));
    setTimeout(() => {
      dispatch(setStatus(false));
    }, 500);
  };

  const getCategoryFetch = async () => {
    setSpinVisible((prev) => !prev);
    await fetch("http://service.dvinahome.ru/getCategory", {
      method: "POST",
      headers: { Authorization: "basic dXNlcjpwYXNz" },
    })
      .then(async (res) => {
        return await res.json();
      })
      .then(async (result) => {
        dispatch(setCategoryList(result["data"]));
        await JSON.parse(localStorage.getItem("save_profile") || "[]").map((item: any) => {
          dispatch(addProfile(item));
        });
      })
      .finally(async () => {
        setSpinVisible((prev) => !prev);
      });
  };

  useEffect(() => {
    getCategoryFetch();
  }, []);

  return (
    <>
      {spinVisible ? (
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 999,
            backgroundColor: "rgb(0,0,0,0.4)",
          }}>
          <div style={{ position: "fixed", top: "calc(50% - (50px / 2))", right: "calc(50% - (50px / 2))" }}>
            <Watch color="white" height={50} width={50} ariaLabel="three-dots-loading" />
            <h6
              style={{
                color: "white",
                position: "fixed",
                top: "calc(50% + (100px / 2))",
                right: "calc(50% - (200px / 2))",
              }}>
              идет загрузка, подождите
            </h6>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="container">
        <div className="row">
          <div className="col-12 my-3" style={{ padding: "0 0" }}>
            <Products />
          </div>
        </div>
        <div className="row">
          <div className="col" style={{ padding: "0 0px", border: "0.5px solid black", borderRadius: 10 }}>
            <div style={{ marginBottom: 5, borderBottom: "0.5px solid black", textAlign: "center" }}>
              Очередь на печать
            </div>
            <Tags />
          </div>
          <div
            className="col-8"
            style={{
              padding: "0 0px",
              borderRadius: 10,
              borderRight: "0.5px solid black",
              borderTop: "0.5px solid black",
              borderBottom: "0.5px solid black",
            }}>
            <div style={{ marginBottom: 5, borderBottom: "0.5px solid black", textAlign: "center" }}>
              Настройки ценника для печати
            </div>
            <TagSettings item={selectTag} key={selectTag.id} />
          </div>
        </div>
        <div className="row" style={{ marginBottom: "10px", marginTop: 10 }}>
          <div className="col-4 d-flex">
            <label htmlFor="TagType">Формат ценника:&nbsp;</label>
            <select
              name={"TagType"}
              style={{ width: 220, borderBottom: "0.5px solid black", borderRadius: 5 }}
              onChange={(e) => setTagType(e.currentTarget.value)}>
              <option value={"noset"}>не выбран</option>
              <option value={"a4h"}>a4 гориpзонтальный</option>
              <option value={"a4v"}>a4 вертикальный</option>
              <option value={"podves"}>подвесной</option>
              <option value={"podvesOT"}>подвесной ОТ</option>
            </select>
          </div>
          <div className="col">
            <button className="btn btn-sm btn-success" onClick={handleClickPrint}>
              Печать
            </button>
          </div>
        </div>
        <div className="row" style={{ display: "block", marginBottom: "30px", border: "0.5px solid black" }}>
          <div
            className="col-12"
            style={{
              padding: "0 0",
              fontFamily:
                'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans","Liberation Sans",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
            }}>
            <TagPrice tagType={tagType} />
          </div>
        </div>
      </div>
    </>
  );
}
