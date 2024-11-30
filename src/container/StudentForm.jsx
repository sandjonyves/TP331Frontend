import React, { useState } from 'react';
import { InputField } from '../components';

export default function StudentForm() {
  const [formData, setFormData] = useState({
    matricule: '',
    nom: '',
    prenom: '',
    dateNaissance: '',
    nomPere: '',
    nomMere: '',
    telPere: '',
    telMere: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const { matricule, nom, prenom, dateNaissance, nomPere, nomMere, telPere, telMere } = formData;

    if (!matricule) newErrors.matricule = 'Matricule is required';
    if (!nom) newErrors.nom = 'Nom is required';
    if (!prenom) newErrors.prenom = 'Prénom is required';

    if (!dateNaissance) newErrors.dateNaissance = 'Date de naissance is required';
    else if (new Date(dateNaissance) >= new Date()) 
      newErrors.dateNaissance = 'Date de naissance must be in the past';

    if (!nomPere) newErrors.nomPere = 'Nom du père is required';
    if (!nomMere) newErrors.nomMere = 'Nom de la mère is required';

    if (!telPere) newErrors.telPere = 'Numéro de téléphone du père is required';
    else if (!/^\d{10}$/.test(telPere)) 
      newErrors.telPere = 'Numéro de téléphone du père must be a 10-digit number';

    if (!telMere) newErrors.telMere = 'Numéro de téléphone de la mère is required';
    else if (!/^\d{10}$/.test(telMere)) 
      newErrors.telMere = 'Numéro de téléphone de la mère must be a 10-digit number';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Form submitted successfully:', formData);
      setFormData({
        matricule: '',
        nom: '',
        prenom: '',
        dateNaissance: '',
        nomPere: '',
        nomMere: '',
        telPere: '',
        telMere: '',
      });
      setErrors({});
    }
  };

  return (
    <div>
      <form className="m-4 mx-auto" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full group">
            <label>Matricule</label>
            <InputField
              type="text"
              name="matricule"
              placeholder="Matricule"
              value={formData.matricule}
              onChange={handleChange}
              required
            />
            {errors.matricule && <p className="text-red-500">{errors.matricule}</p>}
          </div>
          <div className="relative z-0 w-full group">
            <label>Nom</label>
            <InputField
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
              required
            />
            {errors.nom && <p className="text-red-500">{errors.nom}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full group">
            <label>Prénom</label>
            <InputField
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
              required
            />
            {errors.prenom && <p className="text-red-500">{errors.prenom}</p>}
          </div>
          <div className="relative z-0 w-full group">
            <label>Date de Naissance</label>
            <InputField
              type="date"
              name="dateNaissance"
              value={formData.dateNaissance}
              onChange={handleChange}
              required
            />
            {errors.dateNaissance && <p className="text-red-500">{errors.dateNaissance}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full group">
            <label>Nom du Père</label>
            <InputField
              type="text"
              name="nomPere"
              placeholder="Nom du Père"
              value={formData.nomPere}
              onChange={handleChange}
              required
            />
            {errors.nomPere && <p className="text-red-500">{errors.nomPere}</p>}
          </div>
          <div className="relative z-0 w-full group">
            <label>Nom de la Mère</label>
            <InputField
              type="text"
              name="nomMere"
              placeholder="Nom de la Mère"
              value={formData.nomMere}
              onChange={handleChange}
              required
            />
            {errors.nomMere && <p className="text-red-500">{errors.nomMere}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full group">
            <label>Numéro de Téléphone du Père</label>
            <InputField
              type="tel"
              name="telPere"
              placeholder="Numéro de Téléphone du Père"
              value={formData.telPere}
              onChange={handleChange}
              required
            />
            {errors.telPere && <p className="text-red-500">{errors.telPere}</p>}
          </div>
          <div className="relative z-0 w-full group">
            <label>Numéro de Téléphone de la Mère</label>
            <InputField
              type="tel"
              name="telMere"
              placeholder="Numéro de Téléphone de la Mère"
              value={formData.telMere}
              onChange={handleChange}
              required
            />
            {errors.telMere && <p className="text-red-500">{errors.telMere}</p>}
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
        
      </form>
    </div>
  );
}