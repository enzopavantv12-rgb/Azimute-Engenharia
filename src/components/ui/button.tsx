import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-azimute-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-azimute-gold text-azimute-black hover:bg-azimute-gold-deep shadow-premium hover:shadow-none hover:-translate-y-0.5",
        destructive: "bg-red-500 text-white hover:bg-red-500/90",
        outline: "border border-azimute-black/20 text-azimute-black bg-transparent hover:bg-azimute-black hover:text-azimute-bg hover:border-azimute-black",
        secondary: "bg-azimute-blue-soft text-azimute-blue hover:bg-azimute-blue/20",
        ghost: "hover:bg-azimute-black/5 text-azimute-charcoal",
        link: "text-azimute-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4",
        lg: "h-14 px-8 text-[15px]",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
