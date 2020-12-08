// import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
// const API = "http://localhost:3000/dashboard";

// // get data from local storate
// var localstoragedata = JSON.parse(localStorage.getItem("localstoragedata"));
// console.log(localstoragedata);
// var token = localstoragedata.token;
// console.log(token);

// class Addstream extends Component {
//   constructor() {
//     super();

//     this.state = {
//       // email: '',
//       password: "",
//       name: "",
//       hasAgreed: false,
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(e) {
//     let target = e.target;
//     let value = target.type === "checkbox" ? target.checked : target.value;
//     let name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     let name = this.state.name;
//     let descripton = this.state.password;

//     let data = { name: name, description: descripton };

//     fetch(API, {
//       method: "POST",
//       // body: JSON.stringify(data),
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer " + token,
//       },
//     }).then(function (response) {
//       if (response.ok) {
//         alert(" Bingo !!! ");
//       } else {
//         var error = new Error(response);
//         error.response = response;
//         throw error;
//       }
//     });
//   }

//   render() {
//     return (
//       <div className='FormCenter'>
//         <form onSubmit={this.handleSubmit} className='FormFields'>
//           <div className='FormField'>
//             <label className='FormField__Label' htmlFor='name'>
//               Full Name
//             </label>
//             <input
//               type='text'
//               id='name'
//               className='FormField__Input'
//               placeholder='Enter your full name'
//               name='name'
//               value={this.state.name}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className='FormField'>
//             <label className='FormField__Label' htmlFor='password'>
//               Password
//             </label>
//             <input
//               type='password'
//               id='password'
//               className='FormField__Input'
//               placeholder='Enter your password'
//               name='password'
//               value={this.state.password}
//               onChange={this.handleChange}
//             />
//           </div>

//           <div className='FormField'>
//             <label className='FormField__CheckboxLabel'>
//               <input
//                 className='FormField__Checkbox'
//                 type='checkbox'
//                 name='hasAgreed'
//                 value={this.state.hasAgreed}
//                 onChange={this.handleChange}
//               />{" "}
//               I agree all statements in{" "}
//               <a href='' className='FormField__TermsLink'>
//                 terms of service
//               </a>
//             </label>
//           </div>

//           <div className='FormField'>
//             <button className='FormField__Button mr-20'>Sign Up</button>{" "}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default Addstream;
