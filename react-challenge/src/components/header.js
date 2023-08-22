import { useDispatch, useSelector } from "react-redux";
import { clearFilters, removeFilter } from "../store/features/filtersSlice";

const Header = () => {
    const filters = useSelector(state=>state.filters.value)
    const dispatch = useDispatch()
    const handleDeleteFilter = (filter)=>{
        dispatch(removeFilter(filter))
    }
    const handleClearFilter = ()=>{
        dispatch(clearFilters())
    }
    return ( 
        <div className="relative">
            <header className="h-32 w-full header"></header> 
            {filters.length>0&&<div className="px-2 md:px-32 absolute w-full -bottom-6">
                <div className="md:mt-12 -bottom-6 md:h-14 bg-white w-full rounded flex justify-between items-center">
                    <div className="flex flex-wrap">
                            {filters.map((filter)=>{
                            return (<div className="m-1 md:m-3 text-cyan-600 rounded overflow-hidden w-max bg-slate-200" key={filter}>
                                <p className="inline w-max p-1">{filter}</p>
                                <button className="bg-cyan-600 text-white inline ml-2 h-full hover:bg-very-dark-cyan" onClick={(e)=>{handleDeleteFilter(filter)}}><pre className="inline"> X </pre></button>
                            </div>)
                        })}
                    </div>
                    <p onClick={(e)=>handleClearFilter()} className="text-cyan-600 mr-1 md:mr-3 hover:underline">Clear</p>
                    
                </div>
            
            </div>}

        </div>);
}
 
export default Header;