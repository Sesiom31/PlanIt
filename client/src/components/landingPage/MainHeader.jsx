import { useNavigate } from "react-router-dom";

const MainHeader = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-center bg-blue-50 py-12 px-4 rounded-lg shadow-lg">
      <h1 className=" text-4xl tracking-tight font-extrabold text-gray-900">
        <span className="block">Planifica tu día con</span>
        <span className="block text-blue-600">PlanIt</span>
      </h1>
      <p className=" mt-3 max-w-md mx-auto text-base text-gray-500">
        Optimiza tu productividad diaria con PlanIt. Gestiona tus tareas,
        consulta el clima y organiza tu agenda en una sola aplicación intuitiva.
      </p>
      <div className=" mt-5 max-w-md mx-auto">
        <button
          type="button"
          className=" bg-gray-900 text-white py-2 px-3 rounded-md"
          onClick={() => navigate("/register")}
        >
          Comenzar aquí
        </button>
      </div>
    </div>
  );
};

export default MainHeader;
