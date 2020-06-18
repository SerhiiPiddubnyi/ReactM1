import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utils/validators/Validators";
import {Element} from "../../common/formsControl/FormsControl";

const maxLength10 = maxLengthCreator(10)
const  Textarea = Element("textarea")

const PostsForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Your post"}
                           component={Textarea}
                           name = {"text"}
                           validate={[requiredField, maxLength10]}/>
                </div>
                <div>
                    <button >Add post</button>
                </div>
            </form>
    );
}

const NewReduxPostsForm = reduxForm({
    form: "post",
})(PostsForm)

const NewPostForm = (props) => {
    const onSubmit = (post) => {
        props.addPost(post.text);
    }

    return <div>
        <NewReduxPostsForm onSubmit = {onSubmit}/>
    </div>
}

export default NewPostForm;