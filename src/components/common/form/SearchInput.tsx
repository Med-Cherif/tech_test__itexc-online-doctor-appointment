import React, { InputHTMLAttributes, forwardRef } from "react";
import { CiSearch } from "react-icons/ci";
import Input from "./Input";

const SearchInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <div className="search-input">
      <CiSearch className="search-input-icon" />
      <Input ref={ref} placeholder="Search For Something" {...props} />
    </div>
  );
});

export default SearchInput;
