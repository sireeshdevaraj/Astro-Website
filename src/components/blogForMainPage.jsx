export default function BlogForMainPage(props) {
    let {posts} = props
    return (
      <div className="tw-bg-white tw-py-8 mobile:tw-py-8 tw-mt-3">
        <div className="tw-mx-auto tw-max-w-7xl">
          <div className="tw-mx-auto tw-max-w-2xl desktop:tw-mx-0">
            <h2 className="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-gray-900 mobile:tw-text-4xl">From the blog</h2>
            <p className="tw-mt-2 tw-text-lg tw-leading-8 tw-text-gray-600">
            Check out my latest blogs! For the full scoop, head over to the Blogs section and dive into all the madness (if you can find any, haha).
            </p>
          </div>
          <div className="tw-mt-3 tw-grid tw-max-w-2xl tw-grid-cols-1 tw-gap-x-8 tw-gap-y-4 tw-border-t tw-border-gray-200 tw-pt-10 mobile:tw-mt-3 mobile:tw-pt-4 desktop:tw-mx-0 desktop:tw-max-w-none desktop:tw-grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="tw-flex tw-max-w-xl tw-flex-col tw-items-start">
                <div className="tw-flex tw-items-center tw-gap-x-4 tw-text-xs">
                  <time dateTime={post.data.pubDate.toLocaleDateString('en-us', {year: 'numeric',month: 'short',day: 'numeric'})} className="text-gray-500">
                    {post.data.pubDate.toLocaleDateString('en-us', {year: 'numeric',month: 'short',day: 'numeric'})}
                  </time>
                  <a
                    // href={post.data?.category || "random"}
                    className="tw-cursor-default tw-text-black tw-relative tw-rounded-full tw-bg-gray-50 tw-px-3 tw-py-1.5 tw-font-medium tw-text-gray-600 hover:tw-bg-gray-100"
                  >
                    {post.data.category || "rant" }
                  </a>
                </div>
                <div className="tw-group tw-relative">
                  <h3 className="tw-mt-3 tw-text-lg tw-font-semibold tw-leading-6 tw-text-gray-900 group-hover:tw-text-gray-600 tw-h-7">
                    <a href={`/blog/${post.slug}/`} className="tw-text-black tw-text-black hover:tw-text-gray-600 tw-no-underline">
                      <span className="tw-absolute tw-inset-0" />
                      {post.data.title}
                    </a>
                  </h3>
                  <p className="tw-mt-5 tw-line-clamp-3 tw-text-sm tw-leading-6 tw-text-gray-600">{post.data.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  