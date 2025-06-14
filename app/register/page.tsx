"use client";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useCreateUserMutation } from "../api/authApi";
import { IUser } from "../interface/types";
import { toast } from "react-toastify";

const Registration = () => {
  const [userData, setUserData] = useState<IUser>({
    email: "",
    password: "",
  });
  const [createUser] = useCreateUserMutation();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await createUser(userData).unwrap();
    if (res?.success === true) {
      toast.success(res?.message);
    } else {
      toast.error(res?.message);
    }
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
            <a
              href="#"
              className="border-b-gray-700 border-b-4 pb-2 text-2xl font-bold text-gray-900"
            ></a>
          </div>
          <div className="lg:w-[28rem] mx-auto my-auto flex flex-col justify-center pt-8 md:justify-start md:px-6 md:pt-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col pt-3 md:pt-8"
            >
              <div className="flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                    value={userData.email}
                    type="email"
                    id="login-email"
                    className="w-full flex-1 appearance-none bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="mb-12 flex flex-col pt-4">
                <div className="focus-within:border-b-gray-500 relative flex overflow-hidden border-b-2 transition">
                  <input
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                    type="password"
                    id="login-password"
                    className="w-full flex-1 appearance-none bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-gray-900 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2"
              >
                Register
              </button>
            </form>
            <div className="py-12 text-center">
              <p className="whitespace-nowrap text-gray-600">
                Dont have an account? &nbsp;
                <a
                  href="#"
                  className="underline-offset-4 font-semibold text-gray-900 underline"
                >
                  Sign up for free.
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="pointer-events-none relative hidden h-screen select-none bg-gray-900 md:block md:w-1/2">
          <div className="absolute bottom-0 z-10 px-8 text-white opacity-100">
            <p className="mb-8 text-3xl font-semibold leading-10"></p>
            <p className="mb-4 text-3xl font-semibold">Wazed Biplob</p>

            <p className="mb-7 text-sm opacity-70"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
