import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, Table } from '../components';
import SchoolForm from './SchoolForm';

export default function SchoolContainer() {
  const [schools, setSchools] = useState(data.schools);
  const [showFilterDate, setShowFilterDate] = useState(false);
  const [formData, setFormData] = useState({ filterDateValue: '' });
  const [showModal,setShowModal] = useState(false)

  const handleDelete = (index) => {
    const newSchools = schools.filter((_, i) => i !== index);
    setSchools(newSchools);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="mt-20 pb-4 bg-white dark:bg-gray-900 p-6 grid grid-cols-1">
        {/* <button
          onClick={()=>setShowModal(true)}
          className="text-white flex items-center justify-center py-5 bg-yellow-700 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
        >
          New school <FontAwesomeIcon icon={faPlus} className='ms-2' />
        </button> */}

        <Button className=" flex items-center justify-center bg-blue-700 py-5" 
        onClick={()=>setShowModal(true)}> New school <FontAwesomeIcon icon={faPlus} className='ms-2' /></Button>
      </div>

      <div className='flex items-center space-x-4 pt-5'>
        <p className='text-lg font-bold border'>Filter</p>
        <div className='relative'>
          <button
            onClick={() => setShowFilterDate(!showFilterDate)}
            className="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            {formData.filterDateValue || 'Select Filter'}
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
            </svg>
          </button>

          {showFilterDate && (
            <div className="absolute z-50 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600">
              <ul className="bg-gray-100 p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-200">
                    <input
                      onChange={handleInputChange}
                      id="filter-asc"
                      name="filterDateValue"
                      type="radio"
                      value="First Modified"
                      className="input-form"
                    />
                    <label htmlFor="filter-asc" className="ms-2 text-sm text-gray-800">Ascending</label>
                  </div>
                </li>
                <li>
                  <div className="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-200">
                    <input
                      onChange={handleInputChange}
                      id="filter-desc"
                      name="filterDateValue"
                      type="radio"
                      value="Last Modified"
                      className="input-form"
                    />
                    <label htmlFor="filter-desc" className="ms-2 text-sm text-gray-800">Descending</label>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <Table datas={schools} route='school'></Table>
      <Modal showModal={showModal} setShowModal={setShowModal} title={"Enrigistrement d'une Ecole"}> 
        <SchoolForm/>
      </Modal>
    </>
  );
}