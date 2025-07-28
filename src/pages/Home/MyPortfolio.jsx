import data from "../../data/index.json";

export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Recent Projects</p>
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github">
           <svg
  xmlns="http://www.w3.org/2000/svg"
  width="32"
  height="32"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="mr-2"
>
  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.85 10.94.57.1.77-.25.77-.56v-2.02c-3.19.69-3.86-1.54-3.86-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.74 2.68 1.23 3.33.94.1-.74.4-1.24.72-1.52-2.55-.29-5.24-1.27-5.24-5.63 0-1.24.44-2.26 1.17-3.06-.12-.28-.51-1.43.11-2.99 0 0 .96-.31 3.14 1.17a10.91 10.91 0 0 1 2.86-.38c.97.01 1.95.13 2.86.38 2.18-1.48 3.13-1.17 3.13-1.17.63 1.56.24 2.71.12 2.99.73.8 1.17 1.82 1.17 3.06 0 4.38-2.7 5.33-5.27 5.61.41.36.77 1.07.77 2.16v3.21c0 .31.2.66.78.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
</svg>

            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}