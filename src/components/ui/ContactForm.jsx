import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ShimmerButton } from "../magicui/shimmer-button";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    // Kirim langsung ke formsubmit.co
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    await fetch("https://formsubmit.co/rizkiseptiardy@gmail.com", {
      method: "POST",
      body: formData,
    });

    reset();
    toast.success("Your Message sent Successfully!");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full md:max-w-full"
      >
        {/* disable captcha */}
        <input type="hidden" name="_captcha" value="false" />

        <div className="grid w-full max-w-sm mx-auto items-center gap-2 mt-5 text-[#191919]/85 dark:text-[#e4e4e4]/80">
          <Label htmlFor="name">Name</Label>
          <Input
            {...register("name", { required: "Name is Required" })}
            type="name"
            id="name"
            placeholder=""
          />
          {errors.name && (
            <span className="text-red-500 text-sm italic">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="grid w-full max-w-sm mx-auto items-center gap-2 text-[#191919]/85 dark:text-[#e4e4e4]/80">
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email", {
              required: "Email Address is Required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid Email Format",
              },
            })}
            type="email"
            id="email"
            placeholder=""
          />
          {errors.email && (
            <span className="text-red-500 text-sm italic">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="grid w-full max-w-sm mx-auto items-center gap-2 text-[#191919]/85 dark:text-[#e4e4e4]/80">
          <Label htmlFor="message">Your message</Label>
          <Textarea
            {...register("message", { required: "Message is Required" })}
            placeholder="Type your message here."
            id="message"
          />
          {errors.message && (
            <span className="text-red-500 text-sm italic">
              {errors.message.message}
            </span>
          )}
        </div>

        <ShimmerButton
          type="submit"
          disabled={isSubmitting}
          className="grid w-full max-w-sm mx-auto my-5 py-2 text-[#FFFFFF] dark:text-[#e4e4e4]/80 dark:bg-white "
        >
          {isSubmitting ? "Sending..." : "Send"}
        </ShimmerButton>
      </form>
    </div>
  );
}
