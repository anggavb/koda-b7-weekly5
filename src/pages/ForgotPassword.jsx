import { AuthLayout } from "@components/templates";
import { AuthHeader } from "@components/organisms";
import { InputField } from "@components/molecules";
import { Button } from "@components/atoms";
import { MailIcon } from "@components/atoms/icons";
import { usePageTitle } from "@hooks";

const ForgotPassword = () => {
  usePageTitle("Forgot Password");
  return (
    <AuthLayout
      imageSrc="/3d-hand-making-cashless-payment-from-smartphone 1 copy.png"
      imageAlt="3D Hand holding a wallet"
    >
      <AuthHeader
        title="Fill Out Form Correctly 👋"
        subtitle="We will send new password to your email."
      />

      <form action="#" method="POST" className="flex flex-col gap-4 mt-2">
        <InputField
          id="email"
          type="email"
          label="Email"
          placeholder="Enter Your Email"
          iconLeft={<MailIcon />}
          required
        />

        <Button type="submit">Submit</Button>
      </form>

      <nav className="mt-2 text-[0.95rem] text-center text-gray-500 sm:mt-4">
        <p>
          Already remember?{" "}
          <a
            href="/login"
            className="font-semibold transition-colors text-blue-700 hover:underline"
          >
            Login
          </a>
        </p>
      </nav>
    </AuthLayout>
  );
};

export default ForgotPassword;
