import { IconProps } from "phosphor-react";

export type InputFieldProps = {
  placeholder: string
  onChange: (value: string) => void
  before?: React.ComponentType<IconProps>
  after?: React.ComponentType<IconProps>
};