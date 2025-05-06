import Tabs from "./tabs";
import "./tabs.css";

function RandomComponent() {
  return <h1>Some Random Content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: "This is content 1",
    },
    {
      label: "Tab 2",
      content: "This is content 2",
    },
    {
      label: "Tab 3",
      content: "This is content 3",
    },
    {
      label: "Tab 4",
      content: "This is content 4",
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return (
    <div>
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
}
