import React from "react"
import style from "./ProfileInfo.module.css";
import {createField, Element} from "../../common/formsControl/FormsControl";
import styleFormControl from "../../common/formsControl/FormsControl.module.css"
import {reduxForm} from "redux-form";

const ProfileInfoDataForm = ({ handleSubmit, userProfile, error}) => {
    const Input = Element("input");
    const Textarea = Element("textarea")
    return <form className={style.deckriptionBlock} onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={styleFormControl.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Name:</b>{createField("Your name", [],
            Input, "fullName",)}
        </div>
        <div>
            <b>Looking or a job:</b>{createField("", [],
            Input, "lookingForAJob", {}, "", "checkbox")}
        </div>
        <div>
            <b>Skills:</b> {createField("Your skills", [],
            Textarea, "lookingForAJobDescription",)}
        </div>
        <div>
            <b>About me:</b> {createField("Tell about you", [],
            Textarea, "aboutMe",)}
        </div>
        <div>
            <b>Contacts:</b> {Object.keys(userProfile.contacts).map(key => {
            return <div key={key}>
                <b>{key}</b> {createField(`Your ${key}:`,[],
                Input, `contacts.${key}`)}
            </div>
            })}
        </div>
    </form>
}

const ProfileInfoDataFormReduxForm = reduxForm({form: "profileInfo"})(ProfileInfoDataForm)

export default ProfileInfoDataFormReduxForm