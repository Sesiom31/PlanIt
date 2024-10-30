import {
  CalendarIcon,
  CloudIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";

import Feature from "./Feature";

const data = [
  {
    icon: ListBulletIcon,
    feature: "Lista de tareas",
    description: "Organiza tus tareas diarias de manera eficiente.",
  },
  {
    icon: CloudIcon,
    feature: "Pronóstico del tiempo",
    description: "Planifica tus actividades según el clima.",
  },
  {
    icon: CalendarIcon,
    feature: "Calendario integrado",
    description: "Visualiza tus tareas en un calendario interactivo.",
  },
];

const FeatureList = () => {
  const features = data.map((f) => (
    <Feature
      key={f.feature}
      icon={f.icon}
      feature={f.feature}
      description={f.description}
    />
  ));
  return (
    <>
      <div className="mt-10">
        <h2 className=" text-2xl font-semibold text-gray-900 text-center">
          Características principales
        </h2>
        <div className=" mt-10 flex flex-col gap-12">{features}</div>
      </div>
    </>
  );
};

export default FeatureList;
