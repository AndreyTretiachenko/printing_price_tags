import React, { useContext, useEffect, useRef, useState } from "react";
import {
  setSelectTag,
  updateDataSelectTag,
} from "../../features/selectTag/selectTagSlice";
import { updateDataValue } from "../../features/tags/tagsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Itag } from "../Tags";

interface inputProps {
  name: string;
  id: string;
  defvalue: { name: string; valueNew: string; valueOld: string };
}

export const InputOldPrice = ({ name, defvalue }: inputProps) => {
  const [valueNew, setValueNew] = useState<string>();
  const [valueOld, setValueOld] = useState<string>();
  const { data, id, checked, discount } = useAppSelector(
    (state) => state.selectTag
  );
  const { tagList } = useAppSelector((state) => state.tags);
  const dispatch = useAppDispatch();

  const handleSetNew = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueNew(e.target.value);
    dispatch(
      updateDataSelectTag(
        [...data].map((item: any, index) => {
          if (
            "NewInput" + `${index}` + item?.name ===
            e.target.name + item?.name
          ) {
            return { ...item, valueNew: e.target.value };
          } else {
            return item;
          }
        })
      )
    );
  };

  const handleSetOld = (y: React.ChangeEvent<HTMLInputElement>) => {
    setValueOld(y.target.value);

    dispatch(
      updateDataSelectTag(
        [...data].map((item: any, index) => {
          if (
            "OldInput" + `${index}` + item?.name ===
            y.target.name + item?.name
          ) {
            return { ...item, valueOld: y.target.value };
          } else {
            return item;
          }
        })
      )
    );
  };

  useEffect(() => {
    dispatch(
      updateDataValue(
        [...tagList].map((item: any) => {
          if (id === item.id)
            return {
              ...item,
              data: data,
              checked: checked,
              discount: discount,
            };
          return item;
        })
      )
    );
  }, [data, checked, discount]);

  return (
    <>
      <div style={{ display: "inline", paddingRight: 50, paddingLeft: 60 }}>
        <input
          style={{borderRadius:5, border: '0.5px solid black'}}
          className="mb-1"
          onChange={(y) => {
            handleSetOld(y);
          }}
          type={"number"}
          value={valueOld}
          name={`Old${name}`}
          defaultValue={defvalue?.valueOld}
        />
      </div>
      <div style={{ display: "inline", paddingLeft: 18 }}>
        <input
          style={{borderRadius:5, border: '0.5px solid black'}}
          type={"number"}
          defaultValue={defvalue?.valueNew}
          className="mb-1"
          onChange={(e) => {
            handleSetNew(e);
          }}
          value={valueNew}
          name={`New${name}`}
        />
      </div>
    </>
  );
};
