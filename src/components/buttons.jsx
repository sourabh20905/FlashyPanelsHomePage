import {TiTickOutline} from "react-icons/ti"
export const buttons = () => {
    return (
        <div>
        <div className='flex flex-row m-10 '>
        <button className="flex flex-row justify-between items-center  shadow-lg bg-transparent border-indigo-500 hover:bg-indigo-600 font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded-2xl">
        <div className='m-2'>
            <TiTickOutline/>
        </div>
        <div className='m-2'>
            User
        </div>
        </button>
        </div>
        </div>
    );
}