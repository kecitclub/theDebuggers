import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { login } from "@/lib/auth";
export default function useLogin() {
  const router = useRouter();

  const [formData, setformData] = useState({
    password: "",
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setformData({ ...formData, [name]: value });
  };
  const onSumit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    console.log(formData);
    try {
      const data = await login(formData);
      localStorage.setItem("token", data.access_token);
      localStorage.setItem("role", data.role);
      toast.success("Login successful");
      router.replace(`/dashboard/${data.role}/`);
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred");
    }
  };
  return {
    formData,
    onSumit,
    onChange,
    
    // isLoading,
    // lodingstate,
  };
}
