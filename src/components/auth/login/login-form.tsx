import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userAuthForm, userAuthSchema } from "@/schemas/user-auth-schema";
import { useState } from "react";
import { logInWithEmailAndPassword } from "@/services/firebase/auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../../ui/input";
import LoadingButton from "../../loading-button";
import { paths } from "@/routes/paths";
import ResponseMessage from "../../response-message";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<userAuthForm>({
    resolver: zodResolver(userAuthSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: userAuthForm) {
    setIsLoading(true);

    await logInWithEmailAndPassword({ ...values }).catch((err) => {
      setErrorMessage(err.message ?? "");
      setIsLoading(false);

      return;
    });

    setIsLoading(false);
  }
  return (
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
                    <Input placeholder="******" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <LoadingButton type="submit" className="w-full" isLoading={isLoading}>
            Log in
          </LoadingButton>
        </div>
        <div className="mt-4 text-center text-sm space-y-4">
          Don&apos;t have an account?{" "}
          <a href={paths.auth.signUp} className="underline">
            Sign up
          </a>
          {errorMessage && (
            <ResponseMessage mode="error" message={errorMessage} />
          )}
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
