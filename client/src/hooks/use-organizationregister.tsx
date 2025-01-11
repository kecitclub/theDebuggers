import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { register } from "@/lib/auth";
export default function useOrgRegister() {
  const router = useRouter();

  const [stamp, setstamp] = useState();
  const [pancard, setpancard] = useState();
  const [loading, setloading] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "organization",
    province_id: "",
    district_id: "",
    municipality_id: "",
    address: "",
    chairman: "",

    established_date: "",
  });

  const { password, password_confirmation } = formData;

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

  const handleStampFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setstamp(e.target.files[0]);
    } else {
      alert("Please select a file");
    }
  };
  const handlePanFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setpancard(e.target.files[0]);
    } else {
      alert("Please select a file");
    }
  };

  const onSumit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setloading(true);
    if (password != password_confirmation) {
      toast.error("Password and re_Password does not match");
    } else if (!isValidPassword(password)) {
      toast.error(
        "Password must contain Uppercase, lowercase,number and special character"
      );
    } else {
      try {
        const updatedData = new FormData();
        updatedData.append("name", formData.name);
        updatedData.append("email", formData.email);
        updatedData.append("password", formData.password);
        updatedData.append(
          "password_confirmation",
          formData.password_confirmation
        );
        updatedData.append("role", formData.role);
        updatedData.append("province_id", formData.province_id);
        updatedData.append("district_id", formData.district_id);
        updatedData.append("municipality_id", formData.municipality_id);
        updatedData.append("address", formData.address);
        updatedData.append("chairman", formData.chairman);
        updatedData.append("established_date", formData.established_date);
        updatedData.append("stamp", stamp);
        updatedData.append("pan_card", pancard);

        // const updatedData = { ...formData, stamp, pan_card: pancard};
        console.log(updatedData);
        const data = await register(updatedData);
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("role", data.role);
        toast.success("Login successful");
        router.replace(`/dashboard/${data.role?data.role:'user'}`);
        setloading(false);
      } catch (error: any) {
        toast.error(error?.response?.data?.message || "An error occurred");
        setloading(false);
      }
    }
  };
  return {
    formData,
    onSumit,
    onChange,
    handlechange,
    handlePanFileChange,
    handleStampFileChange,
    stamp,
    pancard,
    loading,
    // isLoading,
    // lodingstate,
  };
}
