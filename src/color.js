import { useState } from "react";
import { ChromePicker } from "react-color";
import { useUpdateEffect } from "react-use";

const ColorPicker = () => {
  const [times, set_times] = useState(0);
  const [color, setColor] = useState();
  const onChange = (color, event) => {
    setColor(color.hex);
  };

  useUpdateEffect(() => {
    set_times((times) => times + 1);
    setTimeout(() => {
      set_times((times) => times - 1);
    }, 1000);
  }, [color]);

  useUpdateEffect(() => {
    if (times === 0) {
      window.less.modifyVars({
        "@primary-color": color,
      });
    }
  }, [times]);

  return <ChromePicker color={color} onChange={onChange} />;
};

export default ColorPicker;
