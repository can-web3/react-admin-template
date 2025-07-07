import DataTable from 'react-data-table-component'

export default function Datatable({
    columns,
    data
}) {
  return (
    <DataTable
        columns={columns}
        data={data}
        pagination
        noDataComponent="Gösterilecek veri yok"
        paginationComponentOptions={{
        rowsPerPageText: 'Sayfa başına satır:',
        rangeSeparatorText: ' / ',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Tümü',
        }}
    />
  )
}
