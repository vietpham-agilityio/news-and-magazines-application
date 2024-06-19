const SERVER_BASE_URL = process.env.SERVER_BASE_URL;

const END_POINT = {
    POSTS: 'posts',
    POST: 'post',
    CATEGORIES: 'categories',
    AUTHORS: 'authors',
    POST_CATEGORIES: 'post-categories',
    COMMENTS: 'comments',
}

const ATTRIBUTE_TYPE = {
    POST_ID: 'postId',
    CATEGORY_ID: 'categoryId',
    TAG_ID: 'tagId',
    AUTHOR_ID: 'authorId',
    COMMENT_ID: 'commentId',
}

export { SERVER_BASE_URL, END_POINT, ATTRIBUTE_TYPE };
