import Field from "./Field";
import { registerSchema } from "../../schemas/registerSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const inputs = [
  {
    label: "Username",
    name: "username",
    type: "text",
    placeholder: "Tu username",
  },
  { label: "Email", name: "email", type: "email", placeholder: "tu@email.com" },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "••••••••",
  },
  {
    label: "Confirmar password",
    name: "confirmPassword",
    type: "password",
    placeholder: "••••••••",
  },
];
const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const content = inputs.map((input) => (
    <Field
      key={input.name}
      label={input.label}
      type={input.type}
      name={input.name}
      placeholder={input.placeholder}
      register={register}
      errors={errors}
    />
  ));
  console.log("UserForm");

  const onSubmit = (data) => {
    console.log("hola");
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-12 ">
      <div className="space-y-4 w-full flex flex-col gap-1">{content}</div>
      <button
        type="submit"
        className=" w-full bg-gray-900 text-white py-3 px-3 rounded-md "
      >
        Crear cuenta
      </button>
    </form>
  );
};

export default UserForm;
