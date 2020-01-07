var titles = ["AboutUsTitle","AboutUsSubTitle","FAQLable","Question1","Answser1P1","Answser1List1","Answser1List2","Answser1List3","Answser1List4","Answser1P2","Answser1P3","Question2","Answser2P1","Answser2P2","Question3","Answser3P1","Question4","Answser4P1","Question5","Answser5P1","Answser5P2","Answser5P3","Question6","Answser6P1","Question7","Answser7P1"];


var contents = ["About Bing Creations","Bing Creations is a place to learn and explore. From advice to insights, you’ll find original stories from knowledgeable creators on important topics just for you.","FAQ","What is Bing Creations and why is it different?","Bing Creations is a Microsoft-powered publishing platform that helps digital creators achieve more by:","Connecting creators and their work with the right audience by leveraging the power of Microsoft search and artificial intelligence. ","Optimizing content experiences across multiple formats, platforms and devices.","Simplifying the entire content publishing process, allowing creators to focus on what they do best: create.","Compensating creators for producing high-quality content.","Bing Creations offers information-seekers trustworthy content from knowledgeable creators.","Bing Creations holds its content creators to the same standards as top publishers (as outlined on pubhub.bing.com).","Who can view Bing Creations content?","Stories published through Bing Creations are available to users in the United States. The Bing Creations homepage contains the latest and most popular Bing Creations stories, and features content from top creators.","Are you a creator interested in contributing to Bing Creations? Apply at bing.com/creations/apply","Does this content get special treatment in Bing search results?","No. While content produced for Bing Creations does appear in Bing, it does not get priority placement within search results. Users may see Bing Creations stories promoted on other Bing and Microsoft products and services.","Will this content appear in Microsoft News?","Bing Creations content is not accessible in Microsoft News.","Does Bing Creations reflect the views of Bing or Microsoft?","Microsoft does not influence tone, reporting or opinions expressed on Bing Creations.","Bing Creations exercises strict guidelines to ensure content is accurate and audience appropriate. A team of trained journalists edit posts for length and quality.","Bing Creations contributors do not represent the thoughts or views of Bing or Microsoft.","Who creates Bing Creations content?","We’re recruiting creators with a wide range of professional experience and specialties, evaluating their credentials and existing work. This process will expand as the platform grows.","Does Bing Creations have an editorial team moderating content?","Yes. A team of trained journalists edits posts for length and quality. "];



var cmments = ["This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page.","This string is used in Bing Creations About us page."];



console.log(titles.length);
console.log(contents.length);
console.log(cmments.length);

var fullStr = '<data name="' + titles[0] + '" xml:space="preserve">' + '\n    <value>' + contents[0] + '</value>\n    <comment>' 
+  cmments[0] + '</comment>\n</data>';


for(var i = 0 ; i< 26; i++)
{
	var fullStr = '<data name="' + titles[i] + '" xml:space="preserve">' + '\n    <value>' + contents[i] + '</value>\n    <comment>' 
			+  cmments[i] + '</comment>\n</data>';
	console.log(fullStr);
}
