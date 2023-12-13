"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { FC } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [nik, setnik] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  // const handleLogin = async () => {
  //   setIsLoading(true);

  //   const response = await signIn("credentials", {
  //     nik,
  //     password,
  //     redirect: false,
  //   });

  //   if (response?.error) {
  //     toast({
  //       title: "Login Failed",
  //       description: "You have entered the wrong nik or password",
  //     });
  //   } else {
  //     toast({
  //       title: "Login Success",
  //       description: "You have successfully logged in",
  //     });
  //   }

  //   setIsLoading(false);
  // };

  return (
    <div
      className={cn("flex flex-col gap-2 justify-center", className)}
      {...props}
    >
      <div className="flex flex-col gap-2">
        <div>
          <label
            htmlFor="NIK-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            NIK
          </label>
          <input
            type="text"
            id="NIK-input"
            value={nik}
            onChange={(e) => setnik(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <Button
          isLoading={isLoading}
          type="button"
          size="sm"
          className="w-full"
          onClick={() => signIn("credentials", { nik, password })}
          disabled={isLoading}
        >
          {isLoading ? null : "Login"}
        </Button>
      </div>
    </div>
  );
};

export default UserAuthForm;
