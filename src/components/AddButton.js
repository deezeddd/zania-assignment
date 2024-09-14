import React from "react";

const AddButton = () => {
  return (
    <>
      <form>
        <div>
          <h1>Name</h1>
          <input className="border-2 m-2" type="text" />
        </div>
        <div>
          <h1>Category</h1>

          <input className="border-2 m-2" type="text" />
        </div>
        <div>
          <h1>Description</h1>
          <input className="border-2 m-2" type="text" />
        </div>
        <button className="m-2 p-2 bg-green-200"  type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default AddButton;
