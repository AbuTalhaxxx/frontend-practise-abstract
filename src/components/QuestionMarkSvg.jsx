

function QuestionMarkSvg(props){
	
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      x="0"
      y="0"
      ariaHidden="true"
      viewBox="0 0 20 20"
      className={props.className}
    >
      <path d="M11 12.3v.7H9v-.6c0-.6.1-1.4.8-2.1.7-.7 1.6-1.2 1.6-2.1 0-.9-.7-1.4-1.4-1.4-1.3 0-1.4 1.4-1.5 1.7H6.6C6.6 7.1 7.2 5 10 5c2.4 0 3.4 1.6 3.4 3 0 2.4-2.4 2.8-2.4 4.3z"></path>
      <circle cx="10" cy="15" r="1"></circle>
      <path d="M10 2c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8m0-2C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0z"></path>
    </svg>
  );

}

export default QuestionMarkSvg;