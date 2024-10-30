const Header = () => {
  return (
    <header className=" bg-white w-full h-16 shadow-sm">
      <nav className="w-full h-full max-w-7xl px-4">
        <div className=" flex justify-between items-center h-full w-full">
          <div className=" flex items-center">
            <h2 className=" text-gray-900 font-bold text-2xl">PlanIt</h2>
          </div>

          <div className=" flex items-center">
            <button
              type="button"
              className=" bg-gray-900 text-white text-xs py-1 px-2 rounded-md"
            >
              Iniciar sesión
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
