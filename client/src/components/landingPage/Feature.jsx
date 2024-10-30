import PropTypes from "prop-types";

const Feature = ({ icon: Icon, feature, description }) => {
  return (
    <div className=" flex flex-col items-center gap-1 ">
      <div>
        <Icon className="text-blue-600 w-12 h-12 font-black" />
      </div>
      <h3 className="mt-2 text-xl font-semibold text-gray-900">{feature}</h3>
      <p className=" mt-2 text-gray-500 text-center">{description}</p>
    </div>
  );
};

Feature.propTypes = {
  icon: PropTypes.elementType.isRequired,
  feature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Feature;
