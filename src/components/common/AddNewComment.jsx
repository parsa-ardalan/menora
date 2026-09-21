export default function AddNewComment() {
    return (
        <div className="rounded-2xl border border-stone-200 bg-white p-5">

            <h3 className="mb-2 font-semibold text-primary">
                تو هم نظر خودتو بگو!
            </h3>

            <p className="text-sm text-gray-500 mb-7 line-clamp-2">
                بازخورد شما به بهبود خدمات ما کمک خواهد کرد. مشتاقانه منتظر نظرات سودمند شما هستیم
            </p>

            <div className="relative">
                <input
                    type="text"
                    placeholder="نظر شما..."
                    className="w-full rounded-full border border-stone-200 bg-stone-50 py-3 pl-5 pr-14 text-sm outline-none transition focus:border-primary"
                />

                <button
                    type="button"
                    className="absolute right-1 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white transition hover:opacity-90 active:scale-95"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                        />
                    </svg>
                </button>
            </div>

        </div>
    );
}