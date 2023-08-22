// import img from '/images/account.svg'

import { useDispatch } from "react-redux";
import { addFilter } from "../store/features/filtersSlice";

const SingleJob = ({job}) => {
    const dispatch = useDispatch()
    const handleAddFilter = (filter)=>{
        dispatch(addFilter(filter))
    }


    return ( <div className="rounded m-3 shadow-md bg-white">
        <div className={"p-4 mt-14 md:mt-2 flex flex-col md:flex-row md:h-max md:justify-between "+(job.featured?"border-cyan-700 border-l-4":"ml-3")}>
            <div className="md:flex items-center">
                <div className=" rounded-full h-5 md:h-max relative mr-3">
                    <img src={job.logo} alt="logo" className="absolute bottom-2 md:relative w-14 md:w-20"/>
                </div>
                <div>
                    <div className="flex items-end">
                        <h2 className="text-cyan-600 font-bold mr-10">{job.company}</h2>
                        {job.new && (<div className="rounded-full bg-cyan-600 w-12 flex justify-center text-white h-max mr-3">
                            <p className="text-xs font-bold ">NEW!</p>
                        </div>)}
                        {job.featured && (<div className="rounded-full bg-very-dark-cyan w-20 flex justify-center text-white h-max">
                            <p className="text-xs font-bold ">FEATURED</p>
                        </div>)}

                    </div>
                    <p className="font-bold hover:text-cyan-600 my-2">{job.position}</p>
                    <div className="flex text-dark-cyan my-2">
                        <p>{job.postedAt}</p>
                        <p className="mx-2">.</p>
                        <p>{job.contract}</p>
                        <p className="mx-2">.</p>
                        <p>{job.location}</p>
                    </div>

                </div>
            </div>
            <hr className="block md:hidden"/>
            <div className="flex flex-wrap my-3 h-max">
                <p className="text-cyan-600 bg-gray-cyan rounded p-1 mr-2 my-2 hover:bg-cyan-600 hover:text-white" onClick={(e)=>{handleAddFilter(job.role)}}>{job.role}</p>
                <p className="text-cyan-600 bg-gray-cyan rounded p-1 mr-2 my-2 hover:bg-cyan-600 hover:text-white" onClick={(e)=>{handleAddFilter(job.level)}}>{job.level}</p>
                {job.languages.map((lang)=>{
                    return (<p className="text-cyan-600 bg-gray-cyan rounded p-1 mr-2 my-2 hover:bg-cyan-600 hover:text-white" key={lang}  onClick={(e)=>{handleAddFilter(lang)}}>{lang}</p>)
                })}
                {job.tools.map((tool)=>{
                    return (<p className="text-cyan-600 bg-gray-cyan rounded p-1 mr-2 my-2 hover:bg-cyan-600 hover:text-white" key={tool}  onClick={(e)=>{handleAddFilter(tool)}}>{tool}</p>)
                })}
            </div>
        </div>
    </div>
    );
}
 
export default SingleJob;