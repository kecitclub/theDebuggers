import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { register } from "@/lib/auth";
export default function useRegister() {
  const router = useRouter();

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "",
  });

  const { name, email, password, password_confirmation, role } = formData;

  function isValidPassword(password: any) {
    if (password.length < 8) {
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/[a-z]/.test(password)) {
      return false;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return false;
    }
    if (!/[0-9]/.test(password)) {
      return false;
    }
    return true;
  }
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setformData({ ...formData, [name]: value });
  };
  const handlechange = (e: string) => {
    setformData({ ...formData, role: e });
  };

  const onSumit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    if (password != password_confirmation) {
      toast.error("Password and re_Password does not match");
    } else if (!isValidPassword(password)) {
      toast.error(
        "Password must contain Uppercase, lowercase,number and special character"
      );
    } else {
      try {
        console.log(formData);
        const data = await register({
          name,
          email,
          password,
          role,
          password_confirmation,
        });
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);
        toast.success("Login successful");
        router.replace(`/dashboard/${data.role}/`);
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "An error occurred");
      }
    }
  };
  return {
    name,
    email,
    password,
    password_confirmation,
    onSumit,
    onChange,
    role,
    handlechange,
    // isLoading,
    // lodingstate,
  };
}
