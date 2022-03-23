import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {Outlet} from "react-router-dom";
import Post from "../../components/post/Post";

const PostsPage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll.then(value => setPosts([...value]))
    }, [])

    return (
        <div>
            {posts && posts.map(value => <Post key={value.id} post={value}/>)}
            <Outlet/>
        </div>
    );
};

export default PostsPage;