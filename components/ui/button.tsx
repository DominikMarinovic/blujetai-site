"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-2xl transform transition-transform transition-colors duration-200 ease-out focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none hover:scale-[1.04]",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-foreground to-slate-900 text-white uppercase font-bold shadow-xs",
        secondary:
          "bg-gradient-to-b from-[#18535D] to-[#14afcc] rounded-full uppercase text-white text-sm sm:text-xl hover:bg-[#18535D] shadow shadow-[#00000]",
        ghost: "bg-[#EAF9FF] text-black hover:bg-[#EAF9FF]",
      },
      size: {
        sm: "h-9 px-3",
        md: "h-11 px-5",
        lg: "h-14 px-8",
        xl: "h-16 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "xl",
    },
  }
)
{
  /*  bg-stone-800 border rounded-lg border-[#D7F3FF] text-[#F9F9F9] sm:text-[24px] hover:bg-black shadow hover:text-white */
}
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
