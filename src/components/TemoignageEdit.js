import React, { useState } from "react";
import "./TemoignageEdit.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateTemoignage } from "../redux/temoignagesSlice";
import { useNavigate } from "react-router-dom";

function TemoignageEdit() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let temoignage = useSelector((state) => state.temoignages.temoignages);

  temoignage = temoignage.find((temoignage) => temoignage.id == id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTemoignage({
        id: id,
        name: name ? name : temoignage.name,
        text: text ? text : temoignage.text,
      })
    );
    navigate("/temoignage");
  };

  return (
    <div className="temoignageEditPage">
      <div className="temoignageEditCont">
        <h1>edit {temoignage.name}</h1>
        <form className="temoignageEditForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={temoignage.name}
            className="temoignageEditInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder={temoignage.text}
            className="temoignageEditInput"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="temoignageEditButton">edit</button>
        </form>
      </div>
    </div>
  );
}

export default TemoignageEdit;
