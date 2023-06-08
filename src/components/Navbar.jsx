import AbstractLogo from "./AbstractLogo";
import {useState} from "react";

function Navbar() {
    
    const [barClicked, setBarClicked] = useState(false);
    const textSize = "text-2xl";
    const buttonPaddingX = "px-6";
    const buttonPaddingY = "py-2";
    const border = "rounded-lg border-solid border";

    function handleClick(){
    	setBarClicked(!barClicked);
    }

	return (
		<header>
			<nav className={`h-[88px] ${barClicked ? "bg-[#191a1b]":"bg-black"} flex items-center justify-evenly`}>
					<div className="flex items-center xl:pr-40">
						<AbstractLogo className="h-10 inline-block pr-2 transition-[padding-right] duration-200 sm:pr-4 py-1 hover:opacity-70" />
						<a className={`${textSize} border-l-2 text-white pl-2 transition-[padding-left] duration-200 sm:pl-4 pt-1 inline-block hover:underline`} href="#" title="Link to help center page">Help Center</a>
					</div>
					<div className="inline-flex items-center xl:hidden ml-5 md:ml-[21%]">
					<div className="inline-block">
							<i className="fa fa-search hover:cursor-pointer text-[22px] transition-transform duration-150 hover:scale-[1.5] text-white" aria-hidden="true"></i>
						</div>
						<div className="inline-flex flex-col items-center justify-around group ml-4 h-[22px] w-[22px] hover:cursor-pointer" onClick={handleClick}>
							<span className={`bg-white w-4 h-[1px] inline-block transition-transform duration-150 ${barClicked ? "rotate-[45deg] scale-x-[1.3]": ""} origin-top-left`}></span>
							<span className={`w-4 h-[1px] inline-block  transition-colors duration-150 ${barClicked ? "bg-[#191a1b]":"bg-white"}`}></span>
							<span className={`bg-white w-4 h-[1px] inline-block transition-transform duration-150 ${barClicked ? "rotate-[-45deg] scale-x-[1.3]": ""} origin-top-left`}></span>
						</div>
                    </div>
					<div className="hidden xl:inline-block xl:pl-40">
						<div className={`${border} border-[#fff] bg-[#191a1b] inline-block`}>
							<a href="#" title="Link to submit a request page" className={`${textSize} text-white no-underline ${buttonPaddingX} ${buttonPaddingY} inline-block`}>Submit a request</a>
						</div>
						<div className={`${border} inline-block border-[#4C5FD5] text-white transition-colors duration-150 hover:bg-white hover:text-black bg-[#4C5FD5] ml-6 hover:border-[#fff]`}>
							<a href="#" title="Link to open the sign in dialog" className={`${textSize} transition-colors duration-150 text-inherit no-underline px-8 ${buttonPaddingY} inline-block ${border} border-[#4C5FD5] hover:border-[#fff]`}>Sign in</a>	
						</div>
					</div>
			</nav>
			{barClicked ?
			(<div className="absolute top-[88px] w-full flex flex-col items-center justify-center h-[210px] border-t-[1px] border-[#fff] bg-[#191a1b] xl:hidden z-10">
				<a href="#" className={`no-underline text-white transition-colors duration-150 hover:opacity-70 border-b-[.5px] border-[#fff] ${textSize} px-5 py-5 md:px-[8%]`}>Submit a request</a>
			    <a href="#" className={`no-underline text-white transition-colors duration-150 hover:opacity-70 ${textSize} px-5 py-5 md:px-[8%]`}>Sign in</a>
			</div>) :(<></>)
		}
		</header>
	);
}

export default Navbar;
