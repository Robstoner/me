import { ComponentProps } from "react";

function Form({
  children,
  className,
  ...props
}: { children: any; className?: string } & ComponentProps<"form">) {
    return (
        <form className={className} {...props}>
            {children}
        </form>
    )
}

export default Object.assign(Form, {
    
})
