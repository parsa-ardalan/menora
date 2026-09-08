"use client";

import { useState } from "react";
import comments from "@/data/comments.json";
import Comment from "./Comment";

export default function Comments() {
    const [showAll, setShowAll] = useState(false);

    const displayedComments = showAll ? comments : comments.slice(0, 3);

    return (
        <section className="py-10">
            <div className="mx-auto max-w-6xl">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-primary">نظر مشتریان</h2>
                    <p className="mt-2 text-sm text-gray-500">تجربه مشتریان از منورا</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {displayedComments.map((item) => (
                        <Comment key={item.phoneNumber} comment={item} />
                    ))}
                </div>

                {!showAll && comments.length > 3 && (
                        <div className="mt-6 flex justify-center">
                            <button
                                onClick={() => setShowAll(true)}
                                className="rounded-xl border border-stone-200 px-6 py-3 text-sm font-medium text-primary transition hover:bg-stone-50"
                            >
                                مشاهده بیشتر
                            </button>
                        </div>
                )}
            </div>
        </section>
    );
}