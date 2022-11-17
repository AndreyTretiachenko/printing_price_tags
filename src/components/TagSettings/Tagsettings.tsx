import React, { useEffect, useState } from "react";
import {
  setCheckedSelectTag,
  setDiscountSelectTag,
  setFixNewPriceSelectTag,
  setFixOldPriceSelectTag,
} from "../../features/selectTag/selectTagSlice";
import { updateDataValue } from "../../features/tags/tagsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { InputOldPrice } from "../InputPrice/inputOldPrice";
import { Itag } from "../Tags";

interface SettingProps {
  item: Itag;
}

export const TagSettings = (props: SettingProps) => {
  const { item } = props;
  const [variant, setVariant] = useState("size");
  const { fixNewPrice, fixOldPrice, discount, checked} = useAppSelector(
    (state) => state.selectTag
  );
  const { tagList } = useAppSelector((state) => state.tags);

  const dispatch = useAppDispatch();

  const handleChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCheckedSelectTag(e.target.checked));
  };

  const handleChangeDiscount = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDiscountSelectTag(e.target.value));
  };

  useEffect(() => {
    dispatch(
      updateDataValue(
        [...tagList].map((i: any) => {
          if (item.id === i.id)
            return {
              ...i,
              fixNewPrice: fixNewPrice,
              fixOldPrice: fixOldPrice,
              discount: discount,
              checked: checked,
            };
          return i;
        })
      )
    );
  }, [fixNewPrice, fixOldPrice, discount, checked]);

  return (
    <>
      <div className="container mb-2 pt-2">
        <div className="row">
          <div className="col-12">
          <label htmlFor="productName" style={{marginBottom:5}}>Наименование товара:</label>  
          <div 
            id = 'productName'
            style={{marginBottom: 10 }}>{item?.productName ?<span className="text-primary">{item?.productName}</span>:<span>не выбран товар</span>}</div>
          <div
            style={{marginBottom: 5 }}
            defaultChecked={false}
          >
            <input
              defaultChecked={item?.checked}
              name="multiTag"
              type={"checkbox"}
              onChange={handleChangeChecked}
            />
            <label htmlFor="multiTag" style={{ paddingLeft: 5 }}>
              {" "}
              добавить на лист
            </label>
          </div>
          <hr />
          </div>
          
          <div>
          <label htmlFor="discountInput" style={{marginRight:5}}>Введите размер скидки:</label>
            <input
              name="discountInput"
              type={"number"}
              placeholder={"укажите скидку в %"}
              value={item?.discount ? item?.discount : ""}
              onChange={handleChangeDiscount}
            ></input>
            </div>
        </div>
        <hr />
        <div className="row" style={{ marginBottom: 10 }}>
          <div className="col">
            <div style={{ display: "inline"}}>
              <div style={{ display: "inherit", paddingRight: 30 }}>
                <input
                  defaultChecked
                  type={"radio"}
                  value="size"
                  name="variant"
                  id="sizeRadio"
                  onChange={() => setVariant("size")}
                />
                <label htmlFor="sizeRadio" style={{ paddingLeft: 5 }}>
                  по размерам
                </label>
              </div>
              <div style={{ display: "inherit", paddingRight: 30 }}>
                <input
                  type="radio"
                  value="fix"
                  name="variant"
                  id="fixRadio"
                  onChange={() => setVariant("fix")}
                />
                <label htmlFor="fixRadio" style={{ paddingLeft: 5 }}>
                  цена выставочного образца/цена ОТ
                </label>
              </div>
            </div>
          </div>
        </div>
        {variant === "size" && (
          <div
            className="row"
            style={{
              marginTop: 5,
              marginBottom: 5,
              paddingTop: 5,
              paddingBottom: 5,
              margin:'0 0px',
              border: "0.5px solid black",
            }}
          >
            <div className="col">
              <div className="row " style={{ padding: 5, fontWeight: "500" }}>
                <div className="col-3" style={{ textAlign: "center" }}>
                  Размер
                </div>
                <div className="col-4" style={{ textAlign: "center", marginLeft:50 }}>
                  Старая цена
                </div>
                <div className="col-4" style={{ textAlign: "center", marginLeft:0 }}>
                  Новая цена
                </div>
              </div>
              {item?.property?.allSize?.at(0) != null ?
              item?.property?.allSize?.map((size, index) => {
                return (
                  <>
                    <div className="row" key={size}>
                      <div className="col-3">
                        <div style={{ textAlign: "center" }}>{size}</div>
                      </div>
                      <div className="col-9">
                        <div style={{ display: "inline-flex" }}>
                          <InputOldPrice
                            defvalue={
                              item.data != undefined
                                ? item?.data[index]
                                : { name: "", valueNew: "", valueOld: "" }
                            }
                            key={`Old${size}`}
                            id={index.toString()}
                            name={`Input${index}`}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })
              :
              <div style={{textAlign:'center'}}>нет рамеров для заполения</div>
              }
            </div>
          </div>
        )}
        {variant === "fix" && (
          <div
            className="row"
            style={{
              marginTop: 5,
              marginBottom: 5,
              paddingTop: 5,
              paddingBottom: 5,
              margin:'0 0px',
              border: "0.5px solid black",
            }}
          >
            <div className="col">
              <label
                htmlFor="oldFixPrice"
                style={{ fontWeight: 500, marginTop:5, marginRight:5}}
              >
                старая цена
              </label>
              <input style={{marginTop:5, marginBottom:5}}
                type={'number'}
                name={"oldFixPrice"}
                defaultValue={item.fixOldPrice}
                onChange={(e) =>
                  dispatch(setFixOldPriceSelectTag(e.target.value))
                }
              />
            </div>
            <div className="col">
              <label
                htmlFor="NewFixPrice"
                style={{ fontWeight:500, marginTop:5 , marginRight:5}}
              >
                новая цена
              </label>
              <input style={{marginTop:5, marginBottom:5 }}
                type={'number'}
                name={"NewFixPrice"}
                defaultValue={item.fixNewPrice}
                onChange={(e) =>
                  dispatch(setFixNewPriceSelectTag(e.target.value))
                }
              />
            </div>
          </div>
        )}
        {variant === "at" && (
          <div className="row" style={{ paddingTop: 10 }}>
            <div className="col">
              <label htmlFor="oldAtPrice">старая цена ОТ</label>
              <input name={"oldAtPrice"} />
            </div>
            <div className="col">
              <label htmlFor="NewAtPrice">новая цена ОТ</label>
              <input name={"NewAtPrice"} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
