"use client";

import * as React from "react";

import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { paths } from "@/routes/paths";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  mode: "login" | "signup";
}

export function UserAuthForm({ mode, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
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
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-left">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="shindiri@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                {mode === "login" && (
                  <span className="ml-auto inline-block text-sm underline">
                    Forgot your password?
                  </span>
                )}
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
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
        </CardContent>
      </Card>
    </div>
  );
}
