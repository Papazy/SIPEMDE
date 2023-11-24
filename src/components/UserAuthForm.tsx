"use client";

import { cn } from "@/lib/utils";
import * as React from "react";
import { FC } from "react";
import { Button } from "@/components/ui/Button";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "next-auth/react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [username, setUsername] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      await signIn("Credentials", {
        username,
        password,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            type="text"
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
          onClick={handleLogin}
          disabled={isLoading}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default UserAuthForm;
