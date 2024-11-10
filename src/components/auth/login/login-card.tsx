import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import LoginForm from "./login-form";

export function LoginCard() {
  return (
    <div className="flex w-full h-[85dvh]  items-center justify-center px-4">
      <Card className="mx-auto min-w-[380px]">
        <CardHeader>
          <CardTitle className="text-2xl text-left">Login</CardTitle>
          <CardDescription className="text-left">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}
