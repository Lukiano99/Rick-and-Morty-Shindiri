import { cn } from "@/lib/utils";

interface PageContainerProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}
const PageContainer = ({ children, fullWidth }: PageContainerProps) => {
  return (
    <div className={cn("flex flex-col gap-20 ", fullWidth && "w-full")}>
      {children}
    </div>
  );
};

export default PageContainer;
