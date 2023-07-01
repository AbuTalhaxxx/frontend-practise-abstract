import FooterItem from "./FooterItem";
import AbstractIcon from "./AbstractIcon";

function AbstractFooter() {
	const headings = [
		"Abstract",
		"Resources",
		"Community",
		"Company",
		"Contact Us",
	];
	const itemsArray = [
		["Start Trial", "Pricing", "Download"],
		["Blog", "Help Center", "Release Notes", "Status"],
		["Twitter", "LinkedIn", "Facebook", "Dribble", "Podcast"],
		["About Us", "Careers", "Legal"],
		["info@abstract.com"],
	];

	return (
		<footer className="w-full text-white bg-black h-[670px] sp:max-md:h-[540px] lg:h-[402px]">
		    <div className="sp:max-md:flex sp:max-md:flex-row sp:max-lg:h-full md:max-lg:flex md:max-lg:flex-col lg:h-full lg:flex lg:flex-row">
				<div className="sp:max-md:inline-flex sp:max-md:grow lg:inline-flex lg:grow lg:ml-14">
					<div className="grid grid-cols-2 gap-[10px] ml-3 py-7 sp:max-md:grow lg:flex lg:flex-row lg:justify-around lg:grow">
						<FooterItem
							heading={headings[0]}
							items={itemsArray[0]}
						/>
						<FooterItem
							heading={headings[1]}
							items={itemsArray[1]}
						/>
						<FooterItem
							heading={headings[2]}
							items={itemsArray[2]}
						/>
						<div>
							<FooterItem
								heading={headings[3]}
								items={itemsArray[3]}
							/>
							<ul className="my-4">
								<h3 className="text-2xl font-bold">
									Contact Us
								</h3>
								<li>
									<a href="#" className="hover:underline">
										{itemsArray[4][0]}
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="sp:max-md:inline-flex sp:max-md:flex-col sp:max-md:justify-end md:max-lg:flex md:max-lg:flex-row md:max-lg:justify-end md:max-lg:grow md:max-lg:items-end lg:inline-flex lg:items-end lg:ml-32">
					<div className="sp:max-md:mr-4 sp:max-md:mb-14 md:mr-10 md:mb-10 lg:mr-14 w-[265px] ">
						<AbstractIcon className="w-12 h-12 fill-white ml-3 pb-4" />
						<span className="block ml-3 text-xl">
							© Copyright 2023 <br />
							Abstract Studio Design, Inc. <br />
							All rights reserved
						</span>
					</div>
				</div>
			</div>	
		</footer>
	);
}

export default AbstractFooter;
