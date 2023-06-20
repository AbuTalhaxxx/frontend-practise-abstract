import AbstractLogo from "./AbstractLogo";
import {useState, useRef, useEffect} from "react";
import {handleEnter} from "./MidSection";

function Navbar() {
    
    const [barClicked, setBarClicked] = useState(false);
    const [searchActive, setSearchActive] = useState(false);
    const inputNav = useRef(null);
    const textSize = "text-2xl";
    const buttonPaddingX = "px-6";
    const buttonPaddingY = "py-2";
    const border = "rounded-lg border-solid border";

    function handleClick(){
    	setBarClicked(!barClicked);
    }

    function handleActivity(){
        setSearchActive(!searchActive);
    }

    useEffect(()=>{handleEnter(inputNav);},[]);

	return (
		<header>
		    <div className={`h-[88px] w-full bg-white ${searchActive ? "block" : "hidden"}`}>
		    	<input ref={inputNav} type="search" className="focus:outline-none md:ml-[7%] w-[80%] md:w-[83%] my-4 ml-5 h-[58px] border-[#000] peer text-xl border-[.5px] rounded border-solid pl-3 round placeholder:text-black placeholder:text-xl inline-block" placeholder="Search"/>
	   	    	<i className="fa fa-close ml-4 transition-transform hover:scale-[1.05] duration-500 cursor-pointer inline-block text-black h-[50px] w-[50px] text-base" onClick={handleActivity}></i>
		    </div>
			<nav className={`h-[88px] ${barClicked ? "bg-[#191a1b]":"bg-black"} ${searchActive ? "hidden": "block"} flex items-center justify-between`}>
					<div className="flex items-center pl-5 md:pl-20">
						<AbstractLogo className="h-10 inline-block pr-2 transition-[padding-right] duration-150 sm:pr-4 py-1 hover:opacity-70" />
						<a className={`${textSize} border-l-2 text-white pl-2 transition-[padding-left] duration-150 sm:pl-4 pt-1 inline-block hover:underline`} href="#" title="Link to help center page">Help Center</a>
					</div>
					<div className="inline-flex items-center pr-5 md:pr-20 xl:hidden ml-5">
					<div className="inline-block active:border-dotted active:rounded-[6px_6px_6px_6px] active:border-2 active:border-[#fff]">
							<i className="fa fa-search hover:cursor-pointer text-[22px] transition-transform duration-150 hover:scale-[1.5] text-white py-3" aria-hidden="true" onClick={handleActivity}></i>
						</div>
						<div className="inline-flex flex-col items-center justify-around group ml-4 h-[22px] w-[22px] hover:cursor-pointer" onClick={handleClick}>
							<span className={`bg-white w-4 h-[2px] inline-block transition-[transform,height] duration-150 ${barClicked ? "rotate-[-45deg] scale-[1.27] h-[.5px]": ""} origin-bottom-right`}></span>
							<span className={`w-4 h-[2px] inline-block  transition-colors duration-150 ${barClicked ? "bg-[#191a1b]":"bg-white"}`}></span>
							<span className={`bg-white w-4 h-[2px] inline-block transition-[transform,height] duration-150 ${barClicked ? "rotate-[45deg] scale-[1.27] h-[.5px]": ""} origin-top-right`}></span>
						</div>
                    </div>
					<div className="hidden xl:inline-block xl:pr-20 ">
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
