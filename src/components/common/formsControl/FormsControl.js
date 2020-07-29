import React from "react";
import  style from "./FormsControl.module.css"
import {Field} from "redux-form";

export const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return(
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                <Element {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const createField = (placeholder, validators, element, name, props ={}, text, type="") => {
    return <div>
        <Field
               placeholder={placeholder}
               validate={validators}
               component = {element}
               name = {name}
               type={type}
               {...props}
        /> {text}
    </div>
}