"use client";

import { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";
import AddNewComment from "../common/AddNewComment";

export default function Comments() {

    const [comments, setComments] = useState([])

    useEffect(() => {

        const getComments = async () => {

            try {

                const res = await axios.get("https://menora-backend-r61y.onrender.com/comments");

                setComments(res.data)


            } catch (error) {

                console.log("comments faild: ", error)

            }

        }

        getComments()

    }, [])

    console.log(comments)

    const [showAll, setShowAll] = useState(false);

    const displayedComments = showAll ? comments : comments.slice(0, 4);

    return (
        <section className="w-full py-12 sm:py-16 md:py-20">

            <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 md:px-12 lg:px-8">

                {/* header */}
                <div className="mb-6 sm:mb-8 md:mb-10 text-center sm:text-right">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                        نظر مشتریان
                    </h2>

                    <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-500">
                        تجربه مشتریان از منورا
                    </p>
                </div>


                {/* comments */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6">
                    {displayedComments?.map((item) => (
                        <Comment key={item?._id} comment={item} />

                    ))}

                    {/* add new comments */}
                   <AddNewComment key={comments.length + 1} />

                </div>

                {/* show more */}
                {!showAll && comments.length > 3 && (
                    <div className="mt-8 sm:mt-10 flex justify-center">
                        <button
                            onClick={() => setShowAll(true)}
                            className="group w-full h-14 lg:h-16 lg:w-4/5 flex items-center justify-center gap-2 rounded-2xl  border border-primary/20 bg-white px-3 text-sm font-bold text-primary shadow-sm transition-all duration-300  hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-white hover:shadow-md"
                        >
                            <span>مشاهده بیشتر</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25 12 15.75 4.5 8.25"
                                />
                            </svg>
                        </button>
                    </div>
                )}

            </div>

        </section>
    );
}