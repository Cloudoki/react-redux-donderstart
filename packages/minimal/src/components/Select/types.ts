export type SelectProps = {
  options: Option[],
  label: string,
  onChange: (value: string) => void,
}

type Option = {
  label: string,
  value: string,
}