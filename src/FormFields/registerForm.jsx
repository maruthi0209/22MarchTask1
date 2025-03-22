import { fields } from "./fields"

export const renderedpasswordfield = fields.registerForm.fieldProperties.map(function(value, index) {
    // console.log(value, index);
    return <div key={index} className={fields.registerForm.title+ "inner"}>
    <label htmlFor={value.id}>{fields.registerForm.labels[index] + ": "}</label>
    <input type={value.type} placeholder={value.placeholder} id={value.id} name={value.name} />
    </div>
  })
  // console.log(renderedfield)