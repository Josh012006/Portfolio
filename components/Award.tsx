import { ReactNode } from "react";


function Award({title, imgs, children} : {title: string; imgs?: string[]; children: ReactNode}) {

    return (
        <li>
            <h4 className="font-bold">{title}</h4>
            <div className="my-2 py-2 text-justify">{ children }</div>
            {imgs && <div className="grid grid-cols-3 lg:grid-cols-5">
                {imgs.map((src, index) => {
                    return <img className="col-span-1 w-60 m-2 justify-items-center" key={`img-${index}`} src={`/awards/${src}`} alt="showcasing" />
                })}
            </div>}
            <br />
        </li>
    )
}


export default Award;