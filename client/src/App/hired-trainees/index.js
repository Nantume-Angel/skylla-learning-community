import React from 'react';
import MaterialTable from 'material-table';

const HiredTrainees = () => {
        const { useState } = React;
      
        const [columns, setColumns] = useState([
          { title: 'Fullname', field: 'fullname' },
          { title: 'ID Number', field: 'idnumber', initialEditValue: 'initial edit value' },
          { title: 'Gender', field: 'gender', type: 'text' },
          {
            title: 'Phone Contact',
            field: 'number',
            type:'number'
          },
          {
            title: 'Email',
            field: 'email',
            type:'email'
          },
          {
            title: 'Place of Residence',
            field: 'POR',
            type:'text'
          },
          {
            title: 'Date of birth',
            field: 'birthdate',
            type:'text'
          },
          {
            title: 'Date of Appointment',
            field: 'dop',
            type:'text'
          },
        ]);
      
        const [data, setData] = useState([
          { fullname: 'Wandera Rogers', idnumber: 20, gender: 'male', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
          { fullname: 'Nantume Angel', idnumber: 22, gender: 'female', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
          { fullname: 'Bukenya Ronnie', idnumber: 23, gender: 'male', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
          { fullname: 'Jude Mark', idnumber: 40, gender: 'male', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
          { fullname: 'Nsubuga Henry', idnumber: 70, gender: 'male', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
          { fullname: 'Namwanza Ronnie', idnumber: 80, gender: 'male', number: 63 , email:'rogerrisha@gmail.com' ,POR :'Ndejje' , birthdate:'20/30/2000' ,dop :'10/10/2000' },
        ]);
      
        return (
          <MaterialTable
            title="Editable Preview"
            columns={columns}
            data={data}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    setData([...data, newData]);
                    
                    resolve();
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataUpdate = [...data];
                    const index = oldData.tableData.id;
                    dataUpdate[index] = newData;
                    setData([...dataUpdate]);
      
                    resolve();
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    const dataDelete = [...data];
                    const index = oldData.tableData.id;
                    dataDelete.splice(index, 1);
                    setData([...dataDelete]);
                    
                    resolve()
                  }, 1000)
                }),
            }}
          />
        )
      }
export default HiredTrainees
  

// HIRED TRAINEES
// Full Name,
// ID Number,
// Gender,
// Phone Contact,
// Email,
// Place of Residence,
// DOB
// Date of Appointment 