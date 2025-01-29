import "../styles/blog.css";
import "../styles/global.css";

export default function BlogMainPage(props){
	let {posts} = props;

    return <> 
	<div className="main-container">
		<div className="settings-container" style={{fontFamily:"Berkeley",fontSize:"large"}}>
		<a href="/rss.xml"><span className="subscribe-span dark:tw-text-darkPara2 dark:hover:tw-text-white">Subscribe<img className="rss" src="/rss-feed.png"/></span></a>
		</div>
			<div className="tw-overflow-visible">
			{
				posts.map((post,index) =>  (
					<div className="">
						<article key={post.id} className="tw-flex tw-max-w-xl tw-flex-col tw-items-start tw-p-4" id={index}>
						<div className="tw-flex tw-items-center tw-gap-x-4 tw-text-xs">
						<time dateTime={post.data.pubDate.toLocaleDateString('en-us', {year: 'numeric',month: 'short',day: 'numeric'})} className="text-gray-500 tw-text-sm dark:tw-text-darkPara2">
							{post.data.pubDate.toLocaleDateString('en-us', {year: 'numeric',month: 'short',day: 'numeric'})}
						</time>
						<a
						className="dark:tw-bg-gray-600 dark:tw-text-darkPara dark:hover:tw-bg-white dark:hover:tw-text-black tw-cursor-default tw-text-sm tw-text-black tw-relative tw-rounded-full tw-bg-gray-50 tw-px-3 tw-py-1.5 tw-font-medium tw-text-gray-600 hover:tw-bg-gray-100"
						>
						{post.data.category || "rant" }
						</a>
						</div>
						<div className="tw-group tw-relative">
						<h3 className="tw-mt-3 tw-text-lg tw-font-semibold tw-leading-6 tw-text-gray-900 group-hover:tw-text-gray-600 tw-h-7">
							<a href={`/blog/${post.slug}/`} className="tw-text-black tw-text-black tw-text-[1.5rem] hover:tw-text-gray-600 tw-no-underline dark:tw-text-darkHeading">
								<span className="tw-absolute tw-inset-0" />
								{post.data.title}
							</a>
						</h3>
						<p className="tw-mt-5 tw-line-clamp-3 tw-text-base tw-leading-6 tw-text-gray-600 dark:tw-text-darkPara">{post.data.description}</p>
						</div>
						
					</article>
					<hr className="dark:tw-border-gray-900"/>
				</div>
				) )}
		</div>
	</div>


	</>
}

