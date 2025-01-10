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
    role: "user",
    province_id: "",
    district_id: "",
    municipality_id: "",
    address: "",
    chairman: "",
    pan_card: "",
    stamp:"",
    established_date: ""
  });

  const {  password, password_confirmation } = formData;

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
  const handlechange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value }); // Dynamically set key-value pairs
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
      console.log(formData);
      try {
        const data = await register(formData);
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("role", data.role);
        toast.success("Login successful");
        router.replace(`/dashboard/${data.role}/`);
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "An error occurred");
      }
    }
  };
  return {
    formData,
    onSumit,
    onChange,
    handlechange,
    // isLoading,
    // lodingstate,
  };
}
