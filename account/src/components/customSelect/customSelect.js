import React from 'react';
import Select from 'react-select';
import './customSelect.css';

const options = [
    { value: '1', label: 'BTC' },
    { value: '2', label: 'ETH' },
    { value: '3', label: 'XRP' },
    { value: '4', label: 'BCH' },
    { value: '5', label: 'LTC' },
    { value: '6', label: 'EOS' },
    { value: '7', label: 'XLM' },
    { value: '8', label: 'XMR' },
    { value: '9', label: 'BNB' },
    { value: '10', label: 'BSV' },
  ];

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px solid #111622;',
      color: state.isSelected ? '#788096' : '#788096',
      backgroundColor: state.isSelected ? '#0B0F18' : '#0B0F18',
      lineHeight:"25px",
    }),
    control: (provided) => ({
      ...provided,
      height:"20px",
      minHeight:"auto",
      background:"#111622",
      border:"1px solid #1F2535",
    }),
    indicatorSeparator:(provided) =>({
        ...provided,
        display:"none"
    }),
    menu:(provided)=>({
        ...provided,
        background:"#0B0F18"
    }),
    placeholder:(provided)=>({
        ...provided,
        height: "20px",
        color: "#788096"
    }),
    singleValue:(provided)=>({
        ...provided,
        height: "25px",
        color: "#788096",
        top: "60%"
    }),
    dropdownIndicator:(provided)=>({
        ...provided,
        padding:"0px"
    }),
    indicatorsContainer:(provided)=>({
        ...provided,
        height:"17px"
    }),
    input:(provided)=>({
        ...provided,
        margin:"0px",
        color: "#788096",
        paddingTop:"0px",
    })

};

export default function CustomSelect(){
    return(
        <>
            <div className='custom_select__container'>
                <Select  styles ={customStyles} options={options}/>
            </div>
        </>
    );
}