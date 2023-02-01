/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { addProfile, updateProfile } from "../features/profile/profileTagSlice";
import { refillTags } from "../features/tags/tagsSlice";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";

interface profileProps {
  store: string;
}

export default function TagProfile({ store }: profileProps) {
  const [nameProfile, setNameProfile] = useState("");
  const { tagList } = useAppSelector((state) => state.tags);
  const { profileList } = useAppSelector((state) => state.profile);
  const dispatch = useAppDispatch();

  const handlerSaveProfileTags = (nameProfile: string) => {
    if (nameProfile === "") return alert("Вы не ввели название профиля");
    if (tagList.length === 0)
      return alert("Список товаров пуст, нельзя сохранить пустой список");
    const storage: [{}] = JSON.parse(store);
    storage.push({ name: nameProfile, items: tagList });
    localStorage.setItem("save_profile", JSON.stringify(storage));
    dispatch(addProfile({ name: nameProfile, items: tagList }));
  };

  const handleSelectProfileTag = () => {
    const listTag = new Array();
    profileList.map((item: any) => {
      if (item.name === nameProfile) return listTag.push(item);
    });
    dispatch(refillTags(listTag[0].items));
  };

  const handleSaveProfileTag = () => {
    if (tagList.length === 0)
      return alert("Список товаров пуст, нельзя сохранить пустой список");

    if (confirm(`Вы хотите сохранить изменения в  списке "${nameProfile}"`)) {
      const updateList = profileList.map((item: any) => {
        if (item.name === nameProfile)
          return {
            ...item,
            items: tagList,
          };
        return item;
      });
      try {
        dispatch(updateProfile(updateList));
        localStorage.setItem("save_profile", JSON.stringify(updateList));
        alert(`Вы сохранили изменения в профиле: ${nameProfile}`);
      } catch (err) {
        alert(`Ошибка: ${err}`);
      }
    }
  };

  return (
    <>
      <div>
        <span>cписки товаров:</span>
      </div>
      <div
        style={{
          display: "inline-flex",
          marginRight: 10,
          padding: "5px 0px 5px",
        }}>
        <button
          data-toggle="modal"
          data-target="#exampleModal"
          className="btn btn-primary btn-sm">
          создать
        </button>
      </div>
      <div style={{ display: "inline-flex", marginRight: 10 }}>
        <button
          onClick={handleSelectProfileTag}
          className="btn btn-primary btn-sm">
          загрузить
        </button>
      </div>
      <div style={{ display: "inline-flex" }}>
        <button
          onClick={handleSaveProfileTag}
          className="btn btn-success btn-sm">
          сохранить изменения
        </button>
      </div>
      <div>
        <select
          style={{
            width: 325,
            marginTop: 5,
            marginBottom: 5,
            borderRadius: 5,
            border: "0.5px solid black",
          }}
          onChange={(e) => setNameProfile(e.currentTarget.value)}>
          <option value={"не выбран"}>не выбран</option>
          {profileList.map((item: any) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Название профиля
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                required
                type={"text"}
                style={{ width: 400 }}
                value={nameProfile}
                onChange={(e) => setNameProfile(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal">
                Закрыть
              </button>
              <button
                onClick={() => handlerSaveProfileTags(nameProfile)}
                type="button"
                className="btn btn-primary"
                data-dismiss="modal">
                Создать профиль
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
