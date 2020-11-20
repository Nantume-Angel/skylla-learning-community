
import React from 'react'
import MaterialTable from 'material-table'


const  Enrolled=()=> {
    const { useState } = React;
  
    const [columns, setColumns] = useState([
      { title: 'FullName', field: 'fullname' },
      { title: 'Gender', field: 'gender', initialEditValue: 'initial edit value' },
      { title: 'Phone Contact', field: 'contact', initialEditValue: 'initial edit value' },
      { title: 'Email', field: 'email', initialEditValue: 'initial edit value' },
      { title: 'Module Enrolled', field: 'module', initialEditValue: 'initial edit value' },
      { title: "Trainer's Name", field: 'trainer', initialEditValue: 'initial edit value' },
      { title: "trainer's ID", field: 'id', initialEditValue: 'initial edit value' },
    ]);
  
    const [data, setData] = useState([
      { fullname: 'Nantume', gender: 'female', contact: '10870879987', email: 'angelnantume01@gmail.com',module:'javascript',trainer:'Ron', id:'002' },
      { fullname: 'Namwanza', gender: 'male', contact: '10870879987', email: 'namwanza@gmail.com',module:'javascript',trainer:'Ron', id:'003' },
      { fullname: 'Bukenya', gender: 'male', contact: '10870879987', email: 'bukenya@gmail.com',module:'javascript',trainer:'Ron', id:'004' },
      { fullname: 'Wandera', gender: 'male', contact: '10870879987', email: 'wandera@gmail.com',module:'javascript',trainer:'Ron', id:'005' },
    ]);
  
    return (
      <MaterialTable
        title="Enrolled Trainees"
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
  export default Enrolled;