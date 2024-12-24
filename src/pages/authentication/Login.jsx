
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useNavigate } from "react-router"
import axiosInstance from "../../lib/axios/config"
import "./Login.css"

export default function Login() {
  const [isExist, setIsExist] = useState(null)
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isValidIdentity, setIsValidIdentity] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^(\+88)?01[3-9]\d{8}$/;
    if (emailRegex.test(email) || phoneRegex.test(email)) {
      setIsValidIdentity(true)
    } else {
      setIsValidIdentity(false)
    }
  }, [email])

  // toggle password visibility
  const handleShowPassword = () => setIsShowPassword(!isShowPassword)

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email is required!");
      return;
    }

    // if (!password) {
    //   toast.error("Password is required!");
    //   return;
    // }

    if (password && !confirmPassword) {
      await handleLogin();
      return;
    }

    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }
      await handleRegister();
      return;
    }

    // If only email is provided, validate identity
    await checkIdentity();
  };

  const checkIdentity = async () => {
    try {
      const response = await axiosInstance.get(`/auth/check/${email}`);
      if (response.status === 200) {
        setIsExist(response.data?.userExists || false);
      } else {
        toast.error(response.data?.message || "Something went wrong!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Error validating identity!");
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.post("/auth/login", { identifier: email, password });
      if (response.status === 200) {
        toast.success("Logged in successfully!");
        localStorage.setItem("token", response.data?.token);
        navigate("/");
      } else {
        toast.error(response.data?.message || "Login failed!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login error!");
    }
  };

  const handleRegister = async () => {
    try {
      const response = await axiosInstance.post("/auth/register", {
        identifier: email,
        password,
      });
      console.log(response)
      if (response.status === 201) {
        toast.success("Registered successfully!");
        localStorage.setItem("token", response.data?.token);
        navigate("/");
      } else {
        toast.error(response.data?.message || "Registration failed!");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Registration error!");
    }
  };


  return (
    <div className="container mx-auto min-h-[800px] grid grid-cols-1  md:grid-cols-2">
      <div className="md:pt-[200px] pt-[100px] flex items-center flex-col w-full ">
        <p className="mb-4 w-full max-w-[372px] text-lg font-semibold md:mb-5 md:text-[21px]">মোবাইল নাম্বার/ ইমেইল দিয়ে এগিয়ে যান</p>
        <div className="max-w-[372px]  w-full">
          <div className="p-0">
            <div className="flex flex-col items-center w-full ">
              <h2 className="mb-4 w-full  text-lg font-semibold md:mb-5 md:text-[21px]"></h2>
              {isExist === null && <div className="relative mb-6 w-full">
                <input
                  type="text"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                  মোবাইল নাম্বার / ইমেইল
                </label>
              </div>}

              {isExist !== null && <div className="relative w-full">
                <div className="relative mb-6 w-full">
                  <input
                    type={isShowPassword ? "text" : "password"}
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    placeholder=""
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                    পাসওয়ার্ড লিখুন
                  </label>
                </div>
                <div className="absolute top-3 right-2" onClick={handleShowPassword}>
                  {
                    isShowPassword ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.4697 13.4697C10.7626 13.1768 11.2374 13.1768 11.5303 13.4697C11.6928 13.6322 11.8857 13.7611 12.0981 13.849C12.3104 13.937 12.5379 13.9823 12.7678 13.9823C12.9976 13.9823 13.2251 13.937 13.4375 13.8491C13.6498 13.7611 13.8427 13.6322 14.0052 13.4697C14.1677 13.3072 14.2966 13.1143 14.3846 12.902C14.4725 12.6897 14.5178 12.4621 14.5178 12.2323C14.5178 12.0025 14.4725 11.7749 14.3846 11.5626C14.2967 11.3503 14.1678 11.1574 14.0053 10.9949C13.7124 10.702 13.7124 10.2271 14.0053 9.9342C14.2982 9.64131 14.773 9.64132 15.0659 9.93422C15.3677 10.236 15.6071 10.5943 15.7704 10.9886C15.9337 11.3829 16.0178 11.8055 16.0178 12.2323C16.0178 12.6591 15.9337 13.0817 15.7704 13.4761C15.607 13.8704 15.3676 14.2286 15.0658 14.5304C14.764 14.8322 14.4058 15.0716 14.0115 15.2349C13.6171 15.3982 13.1945 15.4823 12.7677 15.4823C12.3409 15.4823 11.9183 15.3982 11.524 15.2349C11.1297 15.0715 10.7714 14.8321 10.4697 14.5303C10.1768 14.2374 10.1768 13.7625 10.4697 13.4697Z" fill="#4B5563"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.9999 6.7C8.34657 6.7 5.49677 8.78685 3.01887 11.8386C2.94223 11.933 2.94228 12.067 3.01882 12.1613C3.71214 13.0152 4.43693 13.796 5.20206 14.4771C5.49083 14.7342 5.51653 15.1767 5.25948 15.4654C5.00243 15.7542 4.55996 15.7799 4.2712 15.5229C3.43823 14.7814 2.66197 13.9429 1.93196 13.0438C1.43779 12.4352 1.43795 11.5646 1.93202 10.9561C4.52542 7.76213 7.73339 5.3 11.9999 5.3C12.3865 5.3 12.6999 5.6134 12.6999 6C12.6999 6.3866 12.3865 6.7 11.9999 6.7ZM16.0849 6.85956C16.2665 6.51828 16.6904 6.38888 17.0317 6.57052C18.9583 7.59591 20.6085 9.1588 22.0679 10.9562C22.562 11.5648 22.562 12.4353 22.0679 13.0439C19.4745 16.2379 16.2665 18.7 11.9999 18.7C10.3356 18.7 8.82243 18.3238 7.44001 17.6671C7.09081 17.5012 6.94221 17.0836 7.10809 16.7344C7.27398 16.3852 7.69154 16.2366 8.04074 16.4025C9.2464 16.9752 10.5552 17.3 11.9999 17.3C15.6533 17.3 18.5031 15.2131 20.981 12.1614C21.0576 12.067 21.0576 11.933 20.981 11.8386C19.5896 10.1249 18.0773 8.71295 16.3739 7.80637C16.0327 7.62473 15.9033 7.20083 16.0849 6.85956Z" fill="#4B5563"></path></svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.4697 13.4697C10.7626 13.1768 11.2374 13.1768 11.5303 13.4697C11.6928 13.6322 11.8857 13.7611 12.0981 13.849C12.3104 13.937 12.5379 13.9823 12.7678 13.9823C12.9976 13.9823 13.2251 13.937 13.4375 13.8491C13.6498 13.7611 13.8427 13.6322 14.0052 13.4697C14.1677 13.3072 14.2966 13.1143 14.3846 12.902C14.4725 12.6897 14.5178 12.4621 14.5178 12.2323C14.5178 12.0025 14.4725 11.7749 14.3846 11.5626C14.2967 11.3503 14.1678 11.1574 14.0053 10.9949C13.7124 10.702 13.7124 10.2271 14.0053 9.9342C14.2982 9.64131 14.773 9.64132 15.0659 9.93422C15.3677 10.236 15.6071 10.5943 15.7704 10.9886C15.9337 11.3829 16.0178 11.8055 16.0178 12.2323C16.0178 12.6591 15.9337 13.0817 15.7704 13.4761C15.607 13.8704 15.3676 14.2286 15.0658 14.5304C14.764 14.8322 14.4058 15.0716 14.0115 15.2349C13.6171 15.3982 13.1945 15.4823 12.7677 15.4823C12.3409 15.4823 11.9183 15.3982 11.524 15.2349C11.1297 15.0715 10.7714 14.8321 10.4697 14.5303C10.1768 14.2374 10.1768 13.7625 10.4697 13.4697Z" fill="#4B5563"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.9999 6.7C8.34657 6.7 5.49677 8.78685 3.01887 11.8386C2.94223 11.933 2.94228 12.067 3.01882 12.1613C3.71214 13.0152 4.43693 13.796 5.20206 14.4771C5.49083 14.7342 5.51653 15.1767 5.25948 15.4654C5.00243 15.7542 4.55996 15.7799 4.2712 15.5229C3.43823 14.7814 2.66197 13.9429 1.93196 13.0438C1.43779 12.4352 1.43795 11.5646 1.93202 10.9561C4.52542 7.76213 7.73339 5.3 11.9999 5.3C12.3865 5.3 12.6999 5.6134 12.6999 6C12.6999 6.3866 12.3865 6.7 11.9999 6.7ZM16.0849 6.85956C16.2665 6.51828 16.6904 6.38888 17.0317 6.57052C18.9583 7.59591 20.6085 9.1588 22.0679 10.9562C22.562 11.5648 22.562 12.4353 22.0679 13.0439C19.4745 16.2379 16.2665 18.7 11.9999 18.7C10.3356 18.7 8.82243 18.3238 7.44001 17.6671C7.09081 17.5012 6.94221 17.0836 7.10809 16.7344C7.27398 16.3852 7.69154 16.2366 8.04074 16.4025C9.2464 16.9752 10.5552 17.3 11.9999 17.3C15.6533 17.3 18.5031 15.2131 20.981 12.1614C21.0576 12.067 21.0576 11.933 20.981 11.8386C19.5896 10.1249 18.0773 8.71295 16.3739 7.80637C16.0327 7.62473 15.9033 7.20083 16.0849 6.85956Z" fill="#4B5563"></path><path fillRule="evenodd" clipRule="evenodd" d="M20.6405 2.57373C20.9397 2.86017 20.95 3.33493 20.6636 3.63413L3.54169 21.5182C3.25524 21.8174 2.78048 21.8278 2.48128 21.5413C2.18208 21.2549 2.17175 20.7801 2.45819 20.4809L19.5801 2.59681C19.8665 2.29761 20.3413 2.28728 20.6405 2.57373Z" fill="#4B5563"></path></svg>
                  }

                </div>
              </div>}

              {/* confirm password */}
              {
                isExist === false && <div className="relative w-full">
                  <div className="relative mb-6 w-full">
                    <input
                      type={isShowPassword ? "text" : "password"}
                      className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                      placeholder=""
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                    />
                    <label htmlFor="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      পাসওয়ার্ড কনফার্ম করুন
                    </label>
                  </div>
                  <div className="absolute top-3 right-2" onClick={handleShowPassword}>
                    {
                      isShowPassword ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.4697 13.4697C10.7626 13.1768 11.2374 13.1768 11.5303 13.4697C11.6928 13.6322 11.8857 13.7611 12.0981 13.849C12.3104 13.937 12.5379 13.9823 12.7678 13.9823C12.9976 13.9823 13.2251 13.937 13.4375 13.8491C13.6498 13.7611 13.8427 13.6322 14.0052 13.4697C14.1677 13.3072 14.2966 13.1143 14.3846 12.902C14.4725 12.6897 14.5178 12.4621 14.5178 12.2323C14.5178 12.0025 14.4725 11.7749 14.3846 11.5626C14.2967 11.3503 14.1678 11.1574 14.0053 10.9949C13.7124 10.702 13.7124 10.2271 14.0053 9.9342C14.2982 9.64131 14.773 9.64132 15.0659 9.93422C15.3677 10.236 15.6071 10.5943 15.7704 10.9886C15.9337 11.3829 16.0178 11.8055 16.0178 12.2323C16.0178 12.6591 15.9337 13.0817 15.7704 13.4761C15.607 13.8704 15.3676 14.2286 15.0658 14.5304C14.764 14.8322 14.4058 15.0716 14.0115 15.2349C13.6171 15.3982 13.1945 15.4823 12.7677 15.4823C12.3409 15.4823 11.9183 15.3982 11.524 15.2349C11.1297 15.0715 10.7714 14.8321 10.4697 14.5303C10.1768 14.2374 10.1768 13.7625 10.4697 13.4697Z" fill="#4B5563"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.9999 6.7C8.34657 6.7 5.49677 8.78685 3.01887 11.8386C2.94223 11.933 2.94228 12.067 3.01882 12.1613C3.71214 13.0152 4.43693 13.796 5.20206 14.4771C5.49083 14.7342 5.51653 15.1767 5.25948 15.4654C5.00243 15.7542 4.55996 15.7799 4.2712 15.5229C3.43823 14.7814 2.66197 13.9429 1.93196 13.0438C1.43779 12.4352 1.43795 11.5646 1.93202 10.9561C4.52542 7.76213 7.73339 5.3 11.9999 5.3C12.3865 5.3 12.6999 5.6134 12.6999 6C12.6999 6.3866 12.3865 6.7 11.9999 6.7ZM16.0849 6.85956C16.2665 6.51828 16.6904 6.38888 17.0317 6.57052C18.9583 7.59591 20.6085 9.1588 22.0679 10.9562C22.562 11.5648 22.562 12.4353 22.0679 13.0439C19.4745 16.2379 16.2665 18.7 11.9999 18.7C10.3356 18.7 8.82243 18.3238 7.44001 17.6671C7.09081 17.5012 6.94221 17.0836 7.10809 16.7344C7.27398 16.3852 7.69154 16.2366 8.04074 16.4025C9.2464 16.9752 10.5552 17.3 11.9999 17.3C15.6533 17.3 18.5031 15.2131 20.981 12.1614C21.0576 12.067 21.0576 11.933 20.981 11.8386C19.5896 10.1249 18.0773 8.71295 16.3739 7.80637C16.0327 7.62473 15.9033 7.20083 16.0849 6.85956Z" fill="#4B5563"></path></svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.4697 13.4697C10.7626 13.1768 11.2374 13.1768 11.5303 13.4697C11.6928 13.6322 11.8857 13.7611 12.0981 13.849C12.3104 13.937 12.5379 13.9823 12.7678 13.9823C12.9976 13.9823 13.2251 13.937 13.4375 13.8491C13.6498 13.7611 13.8427 13.6322 14.0052 13.4697C14.1677 13.3072 14.2966 13.1143 14.3846 12.902C14.4725 12.6897 14.5178 12.4621 14.5178 12.2323C14.5178 12.0025 14.4725 11.7749 14.3846 11.5626C14.2967 11.3503 14.1678 11.1574 14.0053 10.9949C13.7124 10.702 13.7124 10.2271 14.0053 9.9342C14.2982 9.64131 14.773 9.64132 15.0659 9.93422C15.3677 10.236 15.6071 10.5943 15.7704 10.9886C15.9337 11.3829 16.0178 11.8055 16.0178 12.2323C16.0178 12.6591 15.9337 13.0817 15.7704 13.4761C15.607 13.8704 15.3676 14.2286 15.0658 14.5304C14.764 14.8322 14.4058 15.0716 14.0115 15.2349C13.6171 15.3982 13.1945 15.4823 12.7677 15.4823C12.3409 15.4823 11.9183 15.3982 11.524 15.2349C11.1297 15.0715 10.7714 14.8321 10.4697 14.5303C10.1768 14.2374 10.1768 13.7625 10.4697 13.4697Z" fill="#4B5563"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.9999 6.7C8.34657 6.7 5.49677 8.78685 3.01887 11.8386C2.94223 11.933 2.94228 12.067 3.01882 12.1613C3.71214 13.0152 4.43693 13.796 5.20206 14.4771C5.49083 14.7342 5.51653 15.1767 5.25948 15.4654C5.00243 15.7542 4.55996 15.7799 4.2712 15.5229C3.43823 14.7814 2.66197 13.9429 1.93196 13.0438C1.43779 12.4352 1.43795 11.5646 1.93202 10.9561C4.52542 7.76213 7.73339 5.3 11.9999 5.3C12.3865 5.3 12.6999 5.6134 12.6999 6C12.6999 6.3866 12.3865 6.7 11.9999 6.7ZM16.0849 6.85956C16.2665 6.51828 16.6904 6.38888 17.0317 6.57052C18.9583 7.59591 20.6085 9.1588 22.0679 10.9562C22.562 11.5648 22.562 12.4353 22.0679 13.0439C19.4745 16.2379 16.2665 18.7 11.9999 18.7C10.3356 18.7 8.82243 18.3238 7.44001 17.6671C7.09081 17.5012 6.94221 17.0836 7.10809 16.7344C7.27398 16.3852 7.69154 16.2366 8.04074 16.4025C9.2464 16.9752 10.5552 17.3 11.9999 17.3C15.6533 17.3 18.5031 15.2131 20.981 12.1614C21.0576 12.067 21.0576 11.933 20.981 11.8386C19.5896 10.1249 18.0773 8.71295 16.3739 7.80637C16.0327 7.62473 15.9033 7.20083 16.0849 6.85956Z" fill="#4B5563"></path><path fillRule="evenodd" clipRule="evenodd" d="M20.6405 2.57373C20.9397 2.86017 20.95 3.33493 20.6636 3.63413L3.54169 21.5182C3.25524 21.8174 2.78048 21.8278 2.48128 21.5413C2.18208 21.2549 2.17175 20.7801 2.45819 20.4809L19.5801 2.59681C19.8665 2.29761 20.3413 2.28728 20.6405 2.57373Z" fill="#4B5563"></path></svg>
                    }

                  </div>
                </div>
              }
              <button onClick={handleSubmit} disabled={!isValidIdentity} className={`${isValidIdentity ? "cursor-pointer bg-green-500" : "cursor-not-allowed bg-[#4B5563]"}  h-12 w-full  rounded font-medium text-white hover:opacity-80`} name="submitBtn">সাবমিট করুন</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden pt-[200px] md:block">
        <div>
          <p className="text-xl font-bold text-center"> দৈনিক লাইভ ক্লাসে অংশ নিয়ে বজায় রাখুন রুটিনমাফিক পড়াশোনা</p>
          <div className="flex flex-col items-center justify-center mt-12">
            <img src="https://cdn.10minuteschool.com/images/routine1_1722246290896.svg" alt="slider" />
            <div><span className="w-2 inline-block h-2 rounded-full bg-gray-300 mx-1 cursor-pointer "></span><span className="w-2 inline-block h-2 rounded-full bg-gray-300 mx-1 cursor-pointer bg-green w-4"></span><span className="w-2 inline-block h-2 rounded-full bg-gray-300 mx-1 cursor-pointer "></span><span className="w-2 inline-block h-2 rounded-full bg-gray-300 mx-1 cursor-pointer "></span></div>
          </div>
        </div>
      </div>
    </div>
  )
}