import { Profiler, useEffect,useState } from "react";
import FormattedDate from './FormattedDate.astro';
import "../styles/blog.css";
import "../styles/global.css";
import { data } from "../api.anime";


export default function BlogMainPage(props){
	let {posts} = props;
    const [compactView,setCompactView] = useState(true);
	const [progress,setProgress] = useState(0);

	function blogClick(event){
		updateProgressBar();
		const [dataindex,title] = [event.target.getAttribute("dataindex"),event.target.innerHTML];
		if (!Object.keys(localStorage).includes(dataindex)) localStorage[dataindex] = dataindex;
		updateProgressBar();
	}
    function compactButton(){
        setCompactView(!compactView)
    }
	function updateProgressBar(){
		if (parseInt(localStorage.total) == posts.length) setProgress(posts.length)
		else{
			const ls = localStorage;
			let total = posts.reduce((result,post,index) => {
				if (Object.keys(ls).includes(index.toString())){
					result+=1
				}
				return result
			}, 0)
			setProgress(total)
			localStorage.total = total
		}
	}

    useEffect(() => {
		
		updateProgressBar();

	},[compactView])
    return <> 
	<div className="main-container">
		<div className="settings-container" style={{fontFamily:"Berkeley",fontSize:"large"}}>
		<a href="/rss.xml"><span className="subscribe-span">Subscribe<img className="rss" src="/rss-feed.png"/></span></a>
				<span onClick={(event) => compactButton(event)} className="compact-view-text">{compactView ? "General View" : "Compact View"}</span>
				<span className="progress-text">Progress({progress} / {posts.length})</span>
				<progress className="progress-bar" max={100} value={progress*100/posts.length}></progress>
		</div>
			<div className="blog-posts tw-mt-3">
		{
						posts.map((post,index) =>  (
							<div className="post-item">
								<a href={`/blog/${post.slug}/`} dataindex={index}  onClick={(event) => blogClick(event)}>
									<div className="seperator tw-p-3">
									<h4 className="tw-font-san tw-text-black" dataindex={index}>{post.data.title}</h4>
									<p className="tw-font-san tw-text-gray-600">{post.data.description}</p>
									<p className="date">
                                    {
                                    post.data.pubDate.toLocaleDateString('en-us', {year: 'numeric',month: 'short',day: 'numeric'})
                                    }
									</p>
									</div>
								</a>
								{ !compactView ?<img src={post.data.heroImage} alt="" className="post-image"/> : null}
							</div>
						) 
                    )
					}
		</div>
	</div>


	</>
}

