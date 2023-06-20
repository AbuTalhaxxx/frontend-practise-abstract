import MidItem from "./MidItem";

function ListSection() {
	const imageLinks = [
		"https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png",
		"https://theme.zdassets.com/theme_assets/2197739/91588b3d042df901d9b941ccbb57af4f151401c7.png",
		"https://theme.zdassets.com/theme_assets/2197739/50d0db451c0e1e66e1caddd142986fcf6792ca05.png",
		"https://theme.zdassets.com/theme_assets/2197739/3e82d0126e97d7b7c60a611d4e11b3c278d33743.png",
		"https://theme.zdassets.com/theme_assets/2197739/7712592465ef5c7bf18f1c7cb16e19ab44eb81e3.png",
		"https://theme.zdassets.com/theme_assets/2197739/dcc25d18e224d12621d74e545cc8bdd1b5685ca8.png",
	];

	const headings = [
		"Using Abstract",
		"Manage your account",
		"Manage organizations, teams, and projects",
		"Manage billing",
		"Authenticate to Abstract",
		"Abstract support",
	];

	const cardTexts = [
		"Abstract lets you manage, version, and document your designs in one place.",
		"Configure your account settings, such as your email, profile details, and password.",
		"Use Abstract organizations, teams, and projects to organize your people and your work.",
		"Change subscriptions and payment details.",
		"Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
		"Get in touch with a human.",
	];

    

	return (
		<section className="w-full">
		<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:mx-[130px] sm:mx-4 w-full">
	    {
	    	imageLinks.map((item, index)=>{
	    		return (
                    <MidItem imageLink={item} key={index} heading={headings[index]} cardText={cardTexts[index]} />
	    			);
	    	})
	    }	
	    </div>	
		</section>
	);
}

export default ListSection;
