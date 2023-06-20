import { useRef, useEffect } from "react";

export function handleEnter(refToElement) {
		if (refToElement.current !== null) {
			refToElement.current.addEventListener("keypress", function (event) {
				if (event.key === "Enter") {
                refToElement.current.value="";           					
				}
			});
		}
	}

function MidSection() {
	const input = useRef(null);

	useEffect(()=>{handleEnter(input);}, []);

	return (
		<section className="flex flex-col items-center justify-center w-full bg-[#dadbf1] h-[351px] sm:h-[460px] md:h-[397px]">
			<div className="w-full flex flex-col items-center pb-10">
				<h1 className="font-medium text-center text-[38px] tracking-[-0.2rem] mb-9 md:mb-10 sm:text-[74px] sm:leading-[4rem] md:text-[80px]">
					How can we help?
				</h1>
				<div className="md:w-[calc(100%-130px)] md:max-w-[720px] w-[calc(100%-40px)] flex relative items-center justify-center">
					<input
						type="search"
						ref={input}
						className="block border-[#000] peer text-xl border-2 rounded border-solid pl-3 round h-[66px] hover:border-[#4C5FD5] placeholder:text-black placeholder:text-xl focus:outline-none w-full focus:border-[#4C5FD5] shadow-[0_4px_8px_0_rgba(0,0,0,0.2),0_6px_20px_0_rgba(0,0,0,0.19)]"
						placeholder="Search"
					/>
					<i  className="fa fa-arrow-right absolute peer-hover:text-[#4C5FD5] peer-focus:text-[#4C5FD5] text-xl font-light right-[25px] bottom-[21px]"
						aria-hidden="true"
					></i>
				</div>
			</div>
		</section>
	);
}

export default MidSection;
