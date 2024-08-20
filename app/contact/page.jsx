"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9354738597",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "saivaibhavks2022@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Delhi",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast({
      title: "Message Sent Successfully ✉️",
      description: "Thank you for reaching out! I’ll get back to you shortly.",
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto pb-4">
        <Toaster />
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4 p-6 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-xl text-accent">Let's work together🚀</h3>
              <p className="text-white/60 text-sm">
                Feel free to get in touch with any questions or inquiries.
              </p>
              <div className="grid grid-cols-1 gap-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="text-sm"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}

                <Input
                  type="email"
                  placeholder="Email address"
                  className="text-sm"
                  {...register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}

                <Input
                  type="tel"
                  placeholder="Phone number"
                  className="text-sm"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>

              <Textarea
                className="h-[80px] text-sm"
                placeholder="Type your message here."
              />
              <Button
                type="submit"
                size="md"
                className="max-w-[150px] mt-4 p-2"
              >
                Send message
              </Button>
            </form>
          </div>

          <div className="md:w-1/2 flex items-start">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-[40px] h-[40px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[20px]">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-sm">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
