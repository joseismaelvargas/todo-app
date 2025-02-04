export const TODO_FILTERS={
    ALL:'all',
    ACTIVE:'active',
    COMPLETED:'completed'

}as const
export const FILTER_BOTOM={
    [TODO_FILTERS.ALL]:{
        literal:'Todos',
        href:`/filters=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE]:{
        literal:'Activos',
        href:`/filters=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.COMPLETED]:{
        literal:'Completados',
        href:`/filters=${TODO_FILTERS.ALL}`
    },
}