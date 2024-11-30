import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { data } from '../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal, Table } from '../components';
import SchoolForm from './SchoolForm';

export default function Dashboard() {
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
      
    </>
  );
}