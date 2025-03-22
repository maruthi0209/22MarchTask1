import { fields } from "./fields"

export const renderedloginfield = fields.loginForm.fieldProperties.map(function(value, index) {
    // console.log(value, index);
    return <div key={index} className={fields.loginForm.title + "inner"}>
    <label htmlFor={value.id}>{fields.loginForm.labels[index]}</label>
    <input type={value.type} placeholder={value.placeholder} id={value.id} name={value.name} />
    </div>
  })