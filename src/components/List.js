import React, { useState } from "react";
import Card from "./Card";

const List = ({ data, onDelete, onStatusDone }) => {
  return (
    <div>
      {data.map((d) => (
        <Card
          key={d.id}
          val={d}
          onDelete={onDelete}
          onStatusDone={onStatusDone}
        />
      ))}
    </div>
  );
};

export default List;
