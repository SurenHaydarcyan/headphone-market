import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch,  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function LoginPage() {
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [error] = useState("");
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    await dispatch(getAdmin()).then((res) => {
      if (
        res.payload[0].username === data.email &&
        res.payload[0].password === data.password
      ) {
        sessionStorage.setItem("isAuth", true);
        navigate("/admin/dashboard");
        window.location.reload();
      } else {
        toast.error("wrong password or username");
      }
    });
  };

  function goHome() {
    navigate("/");
  }
  return (
    <div className="h-[100vh] bg-gray-300 container flex justify-center items-center">
      <Form  {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 w-[500px] max-sm:w-[90%] flex flex-col justify-center p-10 rounded-2xl bg-gray-400 h-[70vh] "
        >
          <h2 className="text-[40px] font-bold">Login Admin</h2>
          {error && <div className="text-red-500">{error}</div>}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{ required: "Username is required" }}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            }}
          />
          <div className="flex w-full items-center justify-between">
            <Button className="cursor-pointer" type="submit">
              Login
            </Button>
            <Button className="cursor-pointer" onClick={() => goHome()}>
              Home Page
            </Button>
          </div>
        </form>
      </Form>
      <Toaster />
    </div>
  );
}
