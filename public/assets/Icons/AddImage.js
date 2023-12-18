import React from "react";

function AddImage({fill,h,w}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="svg-AddImage"
      style={{ width: `${w}px`, height: `${h}px` }}
      fill={fill}
      overflow="hidden"
      viewBox="0 0 1024 1024"
    >
      <path d="M682.667 955.733h-512c-66.031 0-102.4-36.369-102.4-102.4v-512c0-66.03 36.369-102.4 102.4-102.4h512c66.03 0 102.4 36.37 102.4 102.4v512c0 66.031-36.37 102.4-102.4 102.4zm-580.113-95.488c2.013 42.36 23.279 61.355 68.113 61.355h512c47.223 0 68.266-21.043 68.266-68.267v-163.6l-153.6-153.6L450.8 682.666l74.12 74.12a17.05 17.05 0 11-24.132 24.132L341.333 621.466l-238.78 238.78zm68.113-587.178c-47.224 0-68.267 21.043-68.267 68.266v470.801l226.867-226.867a17.05 17.05 0 0124.132 0l73.268 73.267 158.6-158.6a17.05 17.05 0 0124.132 0l141.534 141.534V341.333c0-47.223-21.043-68.266-68.266-68.266h-512zm170.666 256c-27.904 0-52.343-10.292-72.652-30.6-19.747-19.73-29.748-43.88-29.748-71.8 0-27.802 9.95-52.173 29.543-72.448 20.685-20.002 45.056-29.952 72.857-29.952 27.904 0 52.07 10 71.8 29.747 20.31 20.31 30.6 44.749 30.6 72.653 0 28.023-10.36 52.24-30.805 72.004-19.354 20.036-43.571 30.396-71.595 30.396zm0-170.667c-18.892 0-34.85 6.52-48.708 19.95-13.039 13.467-19.558 29.424-19.558 48.317 0 18.79 6.45 34.389 19.746 47.65 13.875 13.875 29.73 20.616 48.52 20.616 18.671 0 34.185-6.673 47.463-20.394 14.13-13.688 20.804-29.201 20.804-47.872 0-18.79-6.741-34.646-20.6-48.52-13.277-13.296-28.876-19.747-47.667-19.747zm512-85.333A17.067 17.067 0 01836.267 256v-68.267H768a17.067 17.067 0 110-34.133h68.267V85.333a17.067 17.067 0 1134.133 0V153.6h68.267a17.067 17.067 0 110 34.133H870.4V256a17.067 17.067 0 01-17.067 17.067z"></path>
    </svg>
  );
}

export default AddImage;
