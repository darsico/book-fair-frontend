
const FormField = ({ className = 'form-input', label, type, name, register, errors, rules, handleOnChange }) => {

 const additionalProps = {
  onChange: (e) => {
   if (handleOnChange) handleOnChange(e.target.value);
  }
 };

 return (
  <div className="form-field">
   <label className="form-label" htmlFor="confirmPassword">
    {label}
   </label>
   <input
    id={name}
    type={type}
    name={name}
    className={className}
    {...(register && register(name, rules))}
    {...additionalProps}
   />
   {errors && errors[name] && <p className="text-red-500">{errors[name].message}</p>}
  </div>

 );
};

export default FormField;
