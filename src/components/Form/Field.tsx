import { ComponentProps } from "react";
import { ErrorOption, FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";
import Error from "./Error";
import clsx from "clsx";

export default function Field({
    name,
    register,
    className,
    rules = {},
    error,
    ...props
}: {
    name: string,
    register: UseFormRegister<FieldValues>,
    className?: string,
    rules?: RegisterOptions,
    error?: ErrorOption,
} & ComponentProps<'input'>) {
    <div className={className}>
        <input className={clsx("block w-full py-2 px-2 rounded-md transition-all")} {...props} {...register(name, rules)} />
        {error && error.message && <Error message={error.message} />}
    </div>
}