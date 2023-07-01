
function FooterItem({heading, items}){
	
return (
<ul>
<h3 className="text-2xl font-bold my-4">{heading}</h3>
{items.map((item, index)=>{
	return (
        <li key={index}>
        	<a href="#" className="hover:underline">{item}</a>
        </li>
		);
})}
</ul>
);

}

export default FooterItem;