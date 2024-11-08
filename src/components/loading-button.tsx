import { Button, ButtonProps } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";
import React from "react";

interface LoadingButtonProps extends ButtonProps {
  isLoading?: boolean;
  children: React.ReactNode;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({
  isLoading,
  children,
  ...props
}) => {
  return (
    <Button {...props} disabled={isLoading || props.disabled}>
      {isLoading ? <Loader2Icon className="animate-spin" /> : null}
      {!isLoading && children}
    </Button>
  );
};

export default LoadingButton;
