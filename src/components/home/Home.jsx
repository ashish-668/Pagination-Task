import { useSearchParams } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiReactrouter, SiVercel,  SiGithub, SiHtml5,} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";


const Home = () => {
  const MAP_DATA = [

    {
      heading: "React",
      img: <FaReact className="text-5xl text-[#00BCEB]" />,
      description:
        "React is a free, open-source JavaScript library used to build interactive and dynamic user interfaces (UIs), especially for web applications.",
    },

    {
      heading: "JavaScript",
      img:  <SiJavascript className="text-5xl text-[#F7DF1E]" />,
      description:
        "JavaScript is a high-level programming language used to make websites interactive and dynamic. It can also be used for backend development, mobile apps, and other applications.",
    },

    {
      heading: "Tailwind",
      img:   <SiTailwindcss className="text-5xl text-[#06B6D4]" />,
      description:
        "Tailwind CSS is a utility-first CSS framework used to style websites by applying predefined utility classes directly in HTML or JSX, without writing custom CSS for every element.",
    },

    {
      heading: "ReactRouter",
      img:   <SiReactrouter className="text-5xl text-[#F44250]" />,
      description:
        "React Router is a library used in React applications to handle navigation between different pages or views without reloading the entire webpage.",
    },

    {
      heading: "BootStrap",
      img: <BsBootstrap className="text-5xl text-purple-600" />,
      description:
        "Bootstrap is a free, open-source frontend CSS framework used to build responsive and mobile-friendly websites quickly using predefined CSS classes, components, and JavaScript plugins.",
    },

    {
      heading: "Vercel",
      img:  <SiVercel className="text-5xl text-black" />,
      description:
        "Vercel is a cloud platform used to deploy, host, and manage websites and frontend applications. It is especially popular for React and Next.js projects.",
    },

    {
      heading: "GitHub",
      img: <SiGithub className="text-5xl text-black" />,
      description:
        "GitHub is a cloud-based platform used to store, manage, share, and collaborate on code. It uses Git, a version control system, to track changes in files and projects.",
    },

    {
      heading: "HTML",
      img: <SiHtml5 className="text-5xl text-orange-600" />,
      description:
        "HTML is the standard markup language used to structure content on web pages, such as headings, paragraphs, images, and links.",
    },

    {
      heading: "Css",
      img: <SiHtml5 className="text-5xl text-orange-600" />,
      description:
        "CSS is a stylesheet language used to control the appearance of web pages, including colors, fonts, spacing, layouts, and responsive designs.",
    },

  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;

  const ShowItems = 3;

  const start = (page - 1) * ShowItems;
  const end = start + ShowItems;

  const CURRENT_DATA = MAP_DATA.slice(start, end);

  function handleClick(newPage) {
    setSearchParams({ page: String(newPage) });
  }

  return (
    <>
      <section className=" w-full flex items-center justify-center min-h-screen bg-linear-to-br from-slate-50 via-white to-indigo-50 px-6 py-16">
        <div className="mx-auto px-5 max-w-330 w-full">
          <div className="flex flex-col items-center justify-center gap-7">
            <div className="flex items-center justify-center gap-5">
              {CURRENT_DATA.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-sky-100 bg-sky-50 p-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(15,23,42,0.10)] max-w-100 w-full min-h-70"
                >
                  <div className="flex flex-col gap-5">
                    <div>{item.img}</div>
                    <div className="flex flex-col gap-3">
                        <h1 className="text-dark-blue">{item.heading}</h1>
                        <p className="text-dark-gray">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between w-full gap-5 max-w-150 ">
              <button
                onClick={() => handleClick(page - 1)}
                disabled={page === 1}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95"
              >
                Prev
              </button>

              <button
                onClick={() => handleClick(page + 1)}
                disabled={page === 3}
                className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95"
              >
                Next
              </button>
            </div>
          </div>
        </div>

       
       
        
      </section>
    </>
  );
};

export default Home;
