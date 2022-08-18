import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { categoriesStatus } from '../../redux/categories/categories';

const Categories = () => {
  const Categories = useSelector((state) => state.categoriesReducer);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleAction = () => (
    dispatch(categoriesStatus())
  );
  console.log(user);
  return (
    <>
      <button type="button" className="btn-category" onClick={handleAction}>Check Status</button>
      {Categories}
    </>
  );
};

export default Categories;
