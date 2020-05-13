import React from "react";
import {Field, reduxForm} from "redux-form";

const PostsForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Your post"} component={'textarea'} name = {"text"}/>
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