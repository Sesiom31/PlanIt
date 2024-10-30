import FeatureList from "./FeatureList";

const MainBody = () => {
  return (
    <>
      <FeatureList />
      <div className=" mt-20">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Acerca de PlanIt
        </h2>
        <p className="mt-4 text-gray-500 text-center  max-w-2xl mx-auto">
          PlanIt es tu compañero diario para la planificación y organización.
          Combinamos la funcionalidad de una lista de tareas con información
          meteorológica en tiempo real y otras herramientas útiles para ayudarte
          a planificar tu día de manera más efectiva.
        </p>
      </div>
    </>
  );
};

export default MainBody;
