
//actions are like event listeners 
//increment
export const incrementLikes = (index) => {
    return {
        type: 'INCREMENT_LIKES',
        index,
        fun: console.log('increment is fired!')
    }
}
//add comment
export const addComment = (postId, author, comment) => {
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

//remove comment
export const removeComment = (postId,i) => {
    return{
        type: 'REMOVE_COMMENT',
        postId,
        i
    }
}