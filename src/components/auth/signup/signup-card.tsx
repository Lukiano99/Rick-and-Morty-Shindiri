import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import SignupForm from "./signup-form";

export function SignupCard() {
  return (
    <div className="flex w-full h-[85dvh]  items-center justify-center px-4">
      <Card className="mx-auto min-w-[380px]">
        <CardHeader>
          <CardTitle className="text-2xl text-left">Sign up</CardTitle>
          <CardDescription className="text-left">
            Enter your email below to sign up for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </div>
  );
}
