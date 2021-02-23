import React from 'react';
import DragAndDropUploader from 'components/UI/ImageUploader/DragAndDropUploader';

export const PhotoUploadComponent = ({
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc,
  ...props
}) => {
  const onChange = value => {
    form.setFieldValue(field.name, value);
  };
  return (
    <DragAndDropUploader
      name={field ? field.name : 'hotelPhotos'}
      value={field ? field.value : []}
      onUploadChange={onChange}
    />
  );
};
