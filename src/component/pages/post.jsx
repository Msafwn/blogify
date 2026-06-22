import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../../Appwrite/config";
import { Button, Container } from "../index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const [imageError, setImageError] = useState(false);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deletefile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className='py-12'>
            <Container childern={
                <div className='max-w-4xl mx-auto'>
                    <div className='w-full flex justify-center mb-8 relative'>
                        <div className='relative w-full'>
                            {imageError || !post.featuredImage ? (
                                <div className='w-full h-96 bg-slate-700 rounded-xl flex items-center justify-center text-slate-400 shadow-2xl'>
                                    <span>Image not available</span>
                                </div>
                            ) : (
                                <img
                                    src={service.getFileDownload(post.featuredImage)}
                                    alt={post.title}
                                    className='rounded-xl w-full h-96 object-cover shadow-2xl shadow-blue-500/20'
                                    onError={() => setImageError(true)}
                                />
                            )}
                            {isAuthor && (
                                <div className='absolute right-6 top-6 flex gap-3'>
                                    <Link to={`/edit-post/${post.$id}`}>
                                        <Button variant='secondary' className='px-6' childern='Edit' />
                                    </Link>
                                    <Button variant='danger' onClick={deletePost} childern='Delete' />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='mb-8'>
                        <h1 className='text-4xl font-bold text-slate-100 mb-4'>{post.title}</h1>
                        <p className='text-slate-400 text-sm'>
                            Published on {new Date(post.$createdAt).toLocaleDateString()}
                        </p>
                    </div>
                    <div className='browser-css text-slate-200 leading-relaxed prose prose-invert max-w-none'>
                        {parse(post.content)}
                    </div>
                </div>
            }>
            </Container>
        </div>
    ) : null;
}