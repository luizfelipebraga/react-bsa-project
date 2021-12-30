import { Input } from "./styles"
import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export default function InputComponent({ ...props }: InputProps) {
  return (
    <Input {...props} />
  )
}
