import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
export const Sheet = Dialog.Root;
export const SheetTrigger = Dialog.Trigger;
export const SheetClose = Dialog.Close;
export function SheetContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Dialog.Content>) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-50 bg-dark/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out" />
      <Dialog.Content
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-[88%] max-w-sm border-l border-line bg-background p-6 shadow-2xl data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right",
          className,
        )}
        {...props}
      >
        {children}
        <Dialog.Close
          aria-label="Fechar menu"
          className="absolute right-5 top-5 rounded-full p-2 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <X size={22} />
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
