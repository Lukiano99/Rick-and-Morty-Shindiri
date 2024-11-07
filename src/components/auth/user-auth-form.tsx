import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { paths } from "@/routes/paths";
import { userAuthForm, userAuthSchema } from "@/schemas/user-auth-schema";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import LoadingButton from "../loading-button";
import {
  logInWithEmailAndPassword,
  signUpWithEmailAndPassword,
} from "@/services/firebase/auth";
import ResponseMessage from "../response-message";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  mode: "login" | "signup";
}

export function UserAuthForm({ mode }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const form = useForm<userAuthForm>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: userAuthForm) {
    console.log({ values });
    setIsLoading(true);

    if (mode === "login") {
      await logInWithEmailAndPassword({ ...values }).catch((err) => {
        setErrorMessage(err.message ?? "");
        setIsLoading(false);

        return;
      });
      setErrorMessage("");
    }
    if (mode === "signup") {
      await signUpWithEmailAndPassword({ ...values }).catch((err) => {
        setErrorMessage(err.message ?? "");
        setIsLoading(false);

        return;
      });
      setErrorMessage("");
    }

    setIsLoading(false);
  }

  return (
    <div className="flex w-full  items-center justify-center px-4">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl text-left">
            {mode === "login" && "Login"}
            {mode === "signup" && "Sign up"}
          </CardTitle>
          <CardDescription className="text-left">
            {mode === "login" &&
              "Enter your email below to login to your account"}
            {mode === "signup" &&
              "Enter your email below to sign up for your account"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="items-start justify-start flex flex-col">
                      <FormLabel className="mr-auto">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="shindiri@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className="items-start justify-start flex flex-col">
                        <FormLabel className="mr-auto">Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="******"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <LoadingButton
                  type="submit"
                  className="w-full"
                  isLoading={isLoading}
                >
                  {mode === "login" && "Log in"}
                  {mode === "signup" && "Sign up"}
                </LoadingButton>
              </div>
              {mode === "login" && (
                <div className="mt-4 text-center text-sm">
                  Don&apos;t have an account?{" "}
                  <a href={paths.auth.signUp} className="underline">
                    Sign up
                  </a>
                </div>
              )}
              {mode === "signup" && (
                <div className="mt-4 text-center text-sm">
                  Already have an account?{" "}
                  <a href={paths.auth.login} className="underline">
                    Log in
                  </a>
                </div>
              )}
            </form>
          </Form>
        </CardContent>
        {errorMessage && (
          <CardFooter>
            <CardDescription>
              <ResponseMessage mode="error" message={errorMessage} />
            </CardDescription>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
