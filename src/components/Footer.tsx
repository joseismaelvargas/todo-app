import { FilterValue } from "./type-d"

import { Filters } from "./Filters"

interface Props{
    activeCount:number,
    completedCount:number,
    filterSelected:FilterValue,

    onclearCompleted:()=>void,
    handlefilterChange:(filter:FilterValue)=>void
}

export const Footer:React.FC<Props>=({activeCount=0,
completedCount=0,
filterSelected,
handlefilterChange,
    onclearCompleted})=>{
    return(
        <footer className="footer">
       <span className="todo-count">

        <strong>{activeCount}</strong>
       </span>
       <Filters filterSelected={filterSelected}
       onfilterChange={handlefilterChange}></Filters>
       {
        completedCount >0&&(
            <button className="clear-completed"
            onClick={onclearCompleted}>
                Borrar Completados
            </button>
        )
       }
        </footer>
    )
}