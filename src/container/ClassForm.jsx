import React, { useState } from 'react';
import { InputField } from '../components';

export default function ClassForm() {
  const [formData, setFormData] = useState({
    nomClasse: '',
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
    const { nomClasse } = formData;

    if (!nomClasse) newErrors.nomClasse = 'Nom de la classe est requis';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log('Classe enregistrée avec succès:', formData);
      setFormData({ nomClasse: '' });
      setErrors({});
    }
  };

  return (
    <div>
     
      <form className="m-4 mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full group">
          <label>Nom de la Classe</label>
          <InputField
            type="text"
            name="nomClasse"
            placeholder="Nom de la classe"
            value={formData.nomClasse}
            onChange={handleChange}
            required
          />
          {errors.nomClasse && <p className="text-red-500">{errors.nomClasse}</p>}
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enregistrer
        </button>
      </form>
    </div>
  );
}