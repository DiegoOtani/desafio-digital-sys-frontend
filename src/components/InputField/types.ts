import { IconProps } from "phosphor-react";

export type InputFieldProps = {
  placeholder?: string
  type: 'text' | 'date' | 'email'
  onChange: (value: string) => void
  before?: React.ComponentType<IconProps>
  after?: React.ComponentType<IconProps>
  value?:string
};