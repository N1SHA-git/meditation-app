import clsx from "clsx";

export function UiButton({children, className}) {
  return (
    <button className={clsx({className}, "w-80")}>{children}</button>
  )
}