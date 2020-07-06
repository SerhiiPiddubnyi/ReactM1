import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profile-reducer";

const state = {
    posts: [
        {id: 1, message: 'Hi! how are you', likesCount: 4,},
        {id: 2, message: 'It\'s my first post.', likesCount: 18,}
    ],
}

it ('new post should be added', () => {
    let actionAdd = addPostActionCreator('This is text for test')

    let newState = profileReducer(state, actionAdd)

    expect(newState.posts.length).toBe(3)
})

it ('new post should be added', () => {
    let actionAdd = addPostActionCreator('This is text for test')

    let newState = profileReducer(state, actionAdd)

    expect(newState.posts[2].message).toBe('This is text for test')
})

it ('after deleted posts length should be decremented', () => {
    let actionDel = deletePostActionCreator(1)

    let newState = profileReducer(state, actionDel)

    expect(newState.posts.length).toBe(1)
})

it ('after deleted posts length should not be decremented if id is incorrect', () => {
    let actionDel = deletePostActionCreator(1000)

    let newState = profileReducer(state, actionDel)

    expect(newState.posts.length).toBe(2)
})
