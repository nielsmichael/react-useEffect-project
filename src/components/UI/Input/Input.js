import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();
  const activate = () => {
    // calls input ref; focus() method available on input DOM object
    inputRef.current.focus();
  };

  // careful kids, don't try this at home
  // this approach is not really recommended most of the time (or so i am told)
  useImperativeHandle(ref, () => {
    // useImperativeHandle second arg returns object
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={
          // connects ref to input
          inputRef
        }
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.handleChange}
        onBlur={props.handleBlur}
      />
    </div>
  );
});

export default Input;
