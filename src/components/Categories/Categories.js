import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesStatus } from '../../redux/categories/categories';
import Navbar from '../Navbar/Navbar';

const Categories = () => {
  const Categories = useSelector((state) => state.categoriesReducer);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleAction = () => (
    dispatch(categoriesStatus())
  );
  return (
    <>
      <Navbar logged />
      <button type="button" className="btn-category" onClick={handleAction}>Check Status</button>
      {Categories}
    </>
  );
};

export default Categories;
