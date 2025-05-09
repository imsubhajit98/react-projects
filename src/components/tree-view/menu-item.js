import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggleChildren(getCurrentLabel) {
    console.log(displayCurrentChildren);
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li >
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {" "}
            {displayCurrentChildren[item.label] ? (
              <FaMinus style={{ fontSize: "14", color: "#fff" }} />
            ) : (
              <FaPlus style={{ fontSize: "14", color: "#fff" }} />
            )}{" "}
          </span>
        ) : null}
      </div>
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
