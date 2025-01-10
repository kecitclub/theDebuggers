import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useContactMutation } from "@/redux/feature/authApiSlice";
import { toast } from "react-toastify";
export default function useContact() {
  const [contact, { isLoading }] = useContactMutation();
  const router = useRouter();

  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    phone: "",
  });
  const lodingstate = () => {
    toast.error(!isLoading);
  };

  const { name, email, message, subject, phone } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target;
    setformData({ ...formData, [name]: value });
  };

  const onSumit = (event: FormEvent<HTMLFormElement | undefined>) => {
    event?.preventDefault();
    contact({
      name,
      email,
      message,
      subject,
      phone,
    })
      .unwrap()
      .then(() => {
        toast.success("Sumitted Successfully");
        router.push("/contact");
      })
      .catch((e) => {
        toast.error(
          e?.data?.email?.[0] ||
            e?.data?.password?.[0] ||
            e?.data?.non_field_errors?.[0] ||
            "An error occurred while submitting.Please try again."
        );
      });
  };
  return {
    name,
    email,
    message,
    subject,
    phone,
    onSumit,
    onChange,
    isLoading,
    lodingstate,
  };
}
