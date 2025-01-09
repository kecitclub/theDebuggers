import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
export default function useRegister() {
  const router = useRouter();

  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation:'',
    role:''
  });
  

  const {
    name,
    email,
    password,
    password_confirmation,
    role
  } = formData;
 
  function isValidPassword(password:any) {
    if (password.length < 8) {
      return false;
    }if (!/[A-Z]/.test(password)) {
      return false;
    }    if (!/[a-z]/.test(password)) {
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

  const onSumit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    // console.log(formData);
    if (password != password_confirmation) {
      toast.error("Password and re_Password does not match");
    } else if (!isValidPassword(password)) {
      toast.error("Password must contain Uppercase, lowercase,number and special character")
    }
    else {
      // register({
      //   first_name,
      //   last_name,
      //   address,
      //   username,
      //   country_code,
      //   established,
      //   country,
      //   email,
      //   business_type,
      //   number,
      //   business_name,
      //   password,
      //   re_password
      // })
      //   .unwrap()
      //   .then(() => {
      //     toast.success("Plz check email to verify");
      //     router.push("/auth/login");
      //   })
      //   .catch((e) => {
      //     toast.error(
      //       e?.data?.email?.[0] ||
      //         e?.data?.password?.[0] ||
      //         e?.data?.non_field_errors?.[0] ||
      //         "An error occurred. Please try again."
      //     );
      //   });
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
    // isLoading,
    // lodingstate,
  };
}
