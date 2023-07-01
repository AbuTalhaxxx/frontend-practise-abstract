
function AbstractIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="abstract-logo-footer"
      preserveAspectRatio="xMinYMid slice"
      viewBox="0 0 200 51"
      className={props.className}
    >
      <g fill="#fff" className="abstract-logo-mark-footer">
        <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1131 29.58a9.75 9.75 0 01-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z"></path>
        <circle cx="21.24" cy="29.58" r="4.96"></circle>
      </g>
    </svg>
  );
}

export default AbstractIcon;
