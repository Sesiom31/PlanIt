import PropTypes from "prop-types";

const Field = ({ label, name, type, placeholder, register, errors }) => {
  return (
    <div className=" space-y-1 w-full flex flex-col text-gray-900 ">
      <label htmlFor={name} className=" ml-1 text-[0.9rem]">
        {label}
      </label>
      <input
        type={type}
        id={name}
        className=" py-2 px-2 outline-none border-none rounded-md ring-1 text-sm ring-gray-300 focus:ring-sky-600 invalid:ring-red-600 placeholder:text-gray-500 placeholder:font-light placeholder:text-sm "
        placeholder={placeholder}
        autoComplete="off"
        {...register(name)}
      />
      <span className="block text-red-600 text-xs pl-2">
        {errors[name]?.message}
      </span>
    </div>
  );
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default Field;
