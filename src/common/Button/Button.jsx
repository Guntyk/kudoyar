import "./Button.css";

export default function Button({
  className,
  buttonText,
  type,
  articleBtn,
  ...props
}) {
  const buttonClass = "button " + className || "";
  return (
    <button className={buttonClass} type={type || "button"} {...props}>
      {articleBtn ? (
        <>
          <span>Читати</span>
          <Arrow />
        </>
      ) : (
        buttonText
      )}
    </button>
  );
}

function Arrow() {
  return (
    <svg
      width="20"
      height="17"
      viewBox="0 0 20 17"
      fill="none"
      className="btn-arrow"
    >
      <line
        x1="18.0779"
        y1="4.37114e-08"
        x2="18.0779"
        y2="14"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="3.07788"
        y1="1"
        x2="17.0779"
        y2="1"
        stroke="white"
        strokeWidth="2"
      />
      <line
        x1="1.33087"
        y1="16.1709"
        x2="17.8003"
        y2="1.3418"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
}
