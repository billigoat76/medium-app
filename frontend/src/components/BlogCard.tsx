import { Link } from "react-router-dom";

interface BlogCardProps {
   
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
   id : number;
}
const BlogCard = ({
    id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-200 pb-4 cursor-pointer ">
      <div className="flex gap-x-2">
          <Avatar name={authorName} size="small"/>
        <div className="font-thin flex justify-center flex-col">{authorName} </div>. 
        <div className="flex justify-center flex-col pl-2">
            <Circle/>   
        </div>
        <div className="pl-2 font-thin text-slate-500">
            {publishedDate}
        </div>
      </div>
      <div className="text-xl font-bold pt-2">{title}</div>
      <div className="text-md font-thin">{content.slice(0, 100) + "...."}</div>
      <div className="text-slate-400 text-sm font-thin pt-4">{`${Math.ceil(content.length) / 100} minutes`}</div>
      <div className="text-slate-400 bg-slate-200 h-1 w-full "></div>
    </div>
    </Link>
    
  );
};

function Circle(){
    return(
        <div className="h-1 w-1 rounded-full bg-slate-300">

        </div>
    )
}

export function Avatar({ name ,size}: { name: string , size : "small" | "big"}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${size==="small" ? "w-6 h-6" : "w-10 h-10 "} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
      <span className={`font-small text-gray-600 dark:text-gray-300 ${size==="small" ? "text-xs" : "text-md "}`}>
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;
