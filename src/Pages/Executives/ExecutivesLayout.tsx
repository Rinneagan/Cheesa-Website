import { useState } from "react";
import { Outlet } from "react-router-dom";

function ExecutivesLayout() {
  const [year, setYear] = useState("Hello World");
  return (
    <>
      <div>
        <select name="executives">
          <option value="2021/2022">2021/2022</option>
          <option value="2022/2023">2022/2023</option>
        </select>
      </div>
      <Outlet context={year} />
    </>
  );
}

export default ExecutivesLayout;
