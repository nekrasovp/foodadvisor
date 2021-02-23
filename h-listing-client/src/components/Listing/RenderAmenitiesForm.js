import React, { useState } from 'react';
import Radio from 'components/UI/Antd/Radio/Radio';

/*
 *
 *  Property Form Component
 *
 */

export const PorpertyType = ({ field, form, ...props }) => {
  const getPropertyType = {
    identifier: 'wifiAvailability',
    options: [
      { label: 'Free', value: 'free' },
      { label: 'Paid', value: 'paid' },
    ],
  };
  const [wifiAvailability, setWifiAvailability] = useState('');
  return (
    <Radio.Group
      options={getPropertyType.options}
      value={wifiAvailability}
      onChange={e => {
        setWifiAvailability(e.target.value);
        form.setFieldValue(field.name, e.target.value);
      }}
    />
  );
};

/*
 *
 *  Parking Form Component
 *
 */

export const Parking = ({ field, form, ...props }) => {
  const getParkingType = {
    identifier: 'parking',
    options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }],
  };
  const [parking, setParking] = useState('');

  return (
    <Radio.Group
      options={getParkingType.options}
      value={parking}
      onChange={e => {
        setParking(e.target.value);
        form.setFieldValue(field.name, e.target.value);
      }}
    />
  );
};

/*
 *
 *  Pool Form Component
 *
 */

export const Pool = ({ field, form, ...props }) => {
  const getPool = {
    identifier: 'pool',
    options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }],
  };
  const [pool, setPool] = useState('');
  return (
    <Radio.Group
      value={pool}
      options={getPool.options}
      onChange={e => {
        setPool(e.target.value);
        form.setFieldValue(field.name, e.target.value);
      }}
    />
  );
};

/*
 *
 *  AirCondition Form Component
 *
 */

export const AirCondition = ({ field, form, ...props }) => {
  const getAirCondition = {
    identifier: 'airCondition',
    options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }],
  };
  const [airCondition, setAirCondition] = useState('');
  return (
    <Radio.Group
      value={airCondition}
      options={getAirCondition.options}
      onChange={e => {
        setAirCondition(e.target.value);
        form.setFieldValue(field.name, e.target.value);
      }}
    />
  );
};

/*
 *
 *  Extra Bed Form Component
 *
 */

export const ExtraBed = ({ field, form, ...props }) => {
  const getExtraBed = {
    identifier: 'extraBed',
    options: [{ label: 'Yes', value: 'yes' }, { label: 'No', value: 'no' }],
  };
  const [extraBed, setExtraBed] = useState('');
  return (
    <Radio.Group
      value={extraBed}
      options={getExtraBed.options}
      onChange={e => {
        setExtraBed(e.target.value);
        form.setFieldValue(field.name, e.target.value);
      }}
    />
  );
};
