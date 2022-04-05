import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesStatus } from '../../redux/categories/categories';

const Categories = () => {
  const Categories = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();
  const handleAction = () => (
    dispatch(categoriesStatus())
  );

  return (
    <>
      <button type="button" onClick={handleAction}>Check Status</button>
      <br />
      <br />
      <br />
      {Categories}
    </>
  );
};

export default Categories;
