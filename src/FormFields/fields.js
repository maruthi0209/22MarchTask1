export const fields = {
    loginForm : {
        title : "loginForm",
        labels : ["email", "password"],
        fieldProperties : [
            {id: 1, type:"email", placeholder : "Enter your email", id : "email", name : "email"},
            {id: 2, type:"password", placeholder : "Enter your password", id : "password", name : "password"}
        ]
    } 
}

fields.registerForm = {
    title : "registerForm",
    labels : ["username", ...fields.loginForm.labels], //https://stackoverflow.com/questions/5286705/how-to-access-an-outer-member-from-a-nested-object-literal
    fieldProperties : [{id: 0, type:"text", placeholder: "Enter your username", id: "username", name: "username"}, 
        ...fields.loginForm.fieldProperties]
}