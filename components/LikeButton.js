import React from "react";

const LikeButton = () => {
  // Hard-coded values
  const likeCount = {
    total: 123, // Example total like count
    like: 45, // Example like count
    unicorn: 12, // Example unicorn count
    fire: 78, // Example fire count
  };

  const reactions = {
    like: false, // Example reaction state
    unicorn: false, // Example reaction state
    fire: false, // Example reaction state
  };

  const creatingLike = false; // Example state for creating like

  return (
    <div className="flex flex-col gap-2 mt-4">
      <div className="rounded-full h-fit w-fit p-2.5 flex flex-col gap-2 bg-gray-100/90">
        <div
          className={`${
            likeCount.total > 0 ? "h-6 my-2" : "opacity-0 h-0"
          } text-gray-600 tracking-tight font-semibold text-center transition transition-all duration-400 cursor-default`}
        >
          <span className="mr-[2px]">❤️</span> {likeCount.total}
        </div>
        <button
          disabled={creatingLike}
          className={`${
            reactions.like ? "shadow-lg bg-white" : "bg-white/40"
          } group rounded-full p-1 h-12 w-14 flex flex-col justify-center`}
        >
          <div
            className={`${
              reactions.like
                ? "opacity-100 text-[26px] drop-shadow-lg"
                : "text-[22px] opacity-80 group-hover:opacity-100"
            } transition transition-all duration-400 mx-auto flex gap-2`}
          >
            😍{" "}
            {likeCount.like > 0 ? (
              <div
                className={`${
                  reactions.like ? "text-gray-700" : "text-gray-500"
                } text-sm my-auto`}
              >
                {likeCount.like}
              </div>
            ) : null}
          </div>
        </button>
        <button
          disabled={creatingLike}
          className={`${
            reactions.unicorn ? "shadow-lg bg-white" : "bg-white/40"
          } group rounded-full p-1 h-12 w-14 flex flex-col justify-center`}
        >
          <div
            className={`${
              reactions.unicorn
                ? "opacity-100 text-[26px] drop-shadow-lg"
                : "text-[22px] opacity-80 group-hover:opacity-100"
            } transition transition-all duration-400 mx-auto flex gap-2`}
          >
            🦄{" "}
            {likeCount.unicorn > 0 ? (
              <div
                className={`${
                  reactions.unicorn ? "text-gray-700" : "text-gray-500"
                } text-sm my-auto`}
              >
                {likeCount.unicorn}
              </div>
            ) : null}
          </div>
        </button>
        <button
          disabled={creatingLike}
          className={`${
            reactions.fire ? "shadow-lg bg-white" : "bg-white/40"
          } group rounded-full p-1 h-12 w-14 flex flex-col justify-center`}
        >
          <div
            className={`${
              reactions.fire
                ? "opacity-100 text-[26px] drop-shadow-lg"
                : "text-[22px] opacity-80 group-hover:opacity-100"
            } transition transition-all duration-400 mx-auto flex gap-2`}
          >
            🔥{" "}
            {likeCount.fire > 0 ? (
              <div
                className={`${
                  reactions.fire ? "text-gray-700" : "text-gray-500"
                } text-sm my-auto`}
              >
                {likeCount.fire}
              </div>
            ) : null}
          </div>
        </button>
      </div>
    </div>
  );
};

export default LikeButton;
