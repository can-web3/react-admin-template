import { useFormik } from "formik";
import SectionHeader from "../../../components/SectionHeader";
import DataTable from "react-data-table-component";
import Datatable from "../../../components/Datatable";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import GlobalContext from "../../../contexts/GlobalContext";

export default function Products() {
  const { openDeleteModal } = useContext(GlobalContext)

  const { values, handleSubmit, handleChange, isSubmitting } = useFormik({
    initialValues: {
      name
    },
    onSubmit: async values => {

    }
  })

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
      sortable: true
    },
    {
      name: 'Year',
      selector: row => row.year,
    },
    {
      name: 'İşlemler',
      cell: row => (
        <div className="flex gap-2">
          <Link
            to={`/admin/kategoriler/${row.id}/duzenle`}
            className="px-2 py-1 bg-blue-500 text-white rounded text-sm"
          >
            Düzenle
          </Link>
          <button
            onClick={() => openDeleteModal(row.title)}
            className="cursor-pointer px-2 py-1 bg-red-500 text-white rounded text-sm"
          >
            Kaldır
          </button>
        </div>
      ),
      width: '150px',
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const data = [
      {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]

  return (
    <>
      <SectionHeader 
        title='Ürünler'
        btnPath='/admin/urunler/ekle'
      />

      <div className="bg-white p-4 rounded-lg">
        <Datatable 
          columns={columns}
          data={data}
        />
      </div>
    </>
  )
}
