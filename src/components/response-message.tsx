import { cn } from "@/lib/utils";

interface ResponseMessageProps {
  mode: "success" | "error";
  message: string;
}
const ResponseMessage = ({ mode, message }: ResponseMessageProps) => {
  return (
    <div
      className={cn(
        "w-full flex items-center justify-center p-4 rounded-md py-2",
        mode === "success" && "bg-green-200 text-emerald-600",
        mode === "error" && "bg-red-200 text-red-500"
      )}
    >
      {message}
    </div>
  );
};

export default ResponseMessage;
