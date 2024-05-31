import { Profiler, useEffect,useState } from "react";
import FormattedDate from './FormattedDate.astro';
import "../styles/blog.css";
import { data } from "../api.anime";


export default function BlogMainPage(props){
	let {posts} = props;
    const [compactView,setCompactView] = useState(false);
	const [progress,setProgress] = useState(0);
	function blogClick(event){
		updateProgressBar();
		const [dataIndex,title] = [event.target.getAttribute("dataIndex"),event.target.innerHTML];
		if (!Object.keys(localStorage).includes(dataIndex)) localStorage[dataIndex] = dataIndex;
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
    <div className="compact-view">
				<a href="/rss.xml"><span>Subscribe<img className="rss" src="/rss-feed.png"/></span></a>
				<span onClick={(event) => compactButton(event)} className="compact-view-text">{compactView ? "General View" : "Compact View"}</span>
				<span>Progress({progress} / {posts.length})</span>
				<progress max={100} value={progress*100/posts.length}></progress>
			</div>
			<p style={{border:"solid 1px oklch(66.59% .3018840772950374 4.255646284110876/ 1)"}}></p>
			<section>
				<ul>
						{
						posts.map((post,index) => !compactView ? (
                            
							<li key={index} >
								<a href={`/blog/${post.slug}/`} dataIndex={index} onClick={(event) => blogClick(event)}>
									<div className="seperator">
									<h4 className="title" dataIndex={index}>{post.data.title}</h4>
									<p className="date">
                                    {
                                    post.data.pubDate.toLocaleDateString('en-us', {year: 'numeric',month: 'short',day: 'numeric'})
                                    }
									</p>
									</div>
									<img width={720} height={360} src={post.data.heroImage} alt="" />
								</a>
							</li>
						) : 
                    (<li key={index} >
                        <a href={`/blog/${post.slug}/`} dataIndex={index} onClick={(event) => blogClick(event)}>
									<div className="seperator" style={{fontFamily:"Berkeley",fontSize:"large"}}>
									<h4 className="title" dataIndex={index}>{post.data.title}</h4>
									<p className="date">
                                    {
                                    post.data.pubDate.toLocaleDateString('en-us', {year: 'numeric',month: 'short',day: 'numeric'})
                                    }
									</p>
									</div>
									
								</a>
                    </li>)
                    )
					}
				</ul>
			</section>
    </>
}