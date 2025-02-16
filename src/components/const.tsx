export const TODO_FILTERS={
ALL:'all',
ACTIVE:'active',
COMPLETED:'completed',
PARTIAL:'parcial'
}as const

export const FILTERS_BUTTON={
 [TODO_FILTERS.ALL]:{
    literal:'todos',
    href:`#/filter=${TODO_FILTERS.ALL}`
 },
 [TODO_FILTERS.ACTIVE]:{
    literal:'Activos',
    href:`#/filter=${TODO_FILTERS.ACTIVE}`
 },
 [TODO_FILTERS.COMPLETED]:{
    literal:'Completados',
    href:`#/filter=${TODO_FILTERS.COMPLETED}`
 },
}as const