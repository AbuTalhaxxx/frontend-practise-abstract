
function MidItem({imageLink, heading, cardText}){

   const linkColor = '#4C5FD5';
   
   return (
    <div className="flex">
    	<img src={imageLink} alt="Writing alt texts are boring ngl" loading="lazy" className="self-start inline-block sm:max-md:max-w-[76px] w-[16%] md:max-w-[85px] md:min-w-[69px] aspect-[1/1] mr-6"/>
    	<div className="inline-block w-[80%]">
    		<h4 className="font-bold text-2xl mb-2">{heading}</h4>
    		<p className="text-2xl font-thin mb-2">{cardText}</p>
    		<a href="#" title="learn more bro" className={`text-[#4c5fd5] text-xl hover:underline relative`}>Learn More&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-long-arrow-right inline-block absolute top-[.5px] right-[.2px] font-thin"></i></a>
    	</div>
    </div>);

}

export default MidItem;