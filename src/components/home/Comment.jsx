export default function Comment({ comment }) {

    return (
        <article key={comment.phoneNumber} className="rounded-2xl border border-stone-200 bg-white p-5">
            <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold text-primary">{comment.username}</h3>

                <div className="flex items-center gap-1 text-sm">
                    <span className="text-yellow-500">★</span>
                    <span className="text-gray-500">{comment.rating}/5</span>
                </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-500">{comment.comment}</p>

            <span className="mt-4 block text-xs text-gray-400">{comment.date}</span>
        </article>
    )
}