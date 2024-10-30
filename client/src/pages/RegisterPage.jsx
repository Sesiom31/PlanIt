import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import UserForm from "../components/resgisterPage/UserForm";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <section className=" bg-gradient-to-b from-blue-100 to-green-100 w-full min-h-screen ">
      <div className=" h-full w-full flex flex-col px-4 py-8 mr-2 ">
        <div>
          <button
            type="button"
            className="mb-8 flex gap-2 justify-start items-center"
            onClick={() => navigate("/")}
          >
            <ArrowLeftIcon className=" w-5 h-5 text-gray-900" />{" "}
            <span>Volver</span>
          </button>
        </div>

        <div className="w-full h-full max-w-md  flex flex-grow flex-col justify-center mx-auto">
          <div className=" text-center mb-6">
            <h1 className=" font-bold text-2xl text-gray-900">
              Crear cuenta en PlanIt
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              ¿Ya tienes una cuenta?{" "}
              <span className=" text-blue-600 hover:underline">
                Iniciar sesión
              </span>
            </p>
          </div>
          <UserForm />
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
