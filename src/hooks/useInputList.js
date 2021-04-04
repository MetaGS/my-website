import { useState } from "react";

export default function useInputList(
  updateOutsideSource = () => {},
  { prefix = "", initialItems = [] } = {}
) {
  let [item, setItem] = useState("");
  let [items, setItems] = useState(initialItems);

  const onAdd = (value = item) => (e) => {
    if (value.trim() !== "") {
      const list = [...items, `${prefix}${value}`];
      setItems(list);
      setItem("");
      updateOutsideSource(list);
      return list;
    }
  };

  const onDeleteItem = (index) => {
    return (e) => {
      const newItems = items.slice();
      newItems.splice(index, 1);
      setItems(newItems);
    };
  };

  const clear = () => {
    setItem("");
    setItems(initialItems);
  };

  const backToItem = (index) => {
    return (e) => {
      setItem(items[index]);
      const list = items.slice(0, index);
      updateOutsideSource(list);
      setItems(list);
    };
  };

  const onItemChange = (e) => {
    setItem(e.target.value);
  };

  return [
    {
      value: item,
      onChange: onItemChange,
      onKeyPress: onEnterPress(onAdd()),
      //   onChoose: onAdd,
    },
    {
      onClick: onAdd(),
      backToItem,
      items,
      onDeleteItem,
      clear,
    },
  ];
}

export const onEnterPress = (clickFunc) => (e) => {
  if (e.key === "Enter") {
    clickFunc(e);
    console.log("enter pressed");
    e.preventDefault();
  }
};
