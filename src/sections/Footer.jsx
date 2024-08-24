
const Footer = () => {
  return (
    <div>Footer</div>
  )
}

export default Footer

// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import Button from '../../../../components/ui/Button';
// import Input from '../../../../components/ui/Input';
// import BaseDirectories from '../../../../base directories/BaseDirectories';
// import Skeleton from 'react-loading-skeleton';
// import { v4 as uuidv4 } from 'uuid';
// import { mdiDeleteEmpty, mdiPencilOutline } from '@mdi/js';
// import Icon from '@mdi/react';

// interface ListItem {
//   id: string;
//   description: string;
//   quantity: number;
//   price: number;
//   amount: number;
// }
// const InvoiceFormOne = () => {
//   const navigate = useNavigate();
//   const { template } = useParams(); // Extract route parameter
//   const [showInvoice, setShowInvoice] = useState(false);
//   // const [invoiceDetails, setInvoiceDetails] = useState({
//   //   title: '',
//   //   date: '',
//   //   amount: '',
//   //   description: '',
//   // });

//   // Details
//   const [companyName, setCompanyName] = useState('');
//   const [subject, setSubject] = useState('');
//   const [companyAddress, setCompanyAddress] = useState('');
//   const [companyEmail, setCompanyEmail] = useState('');
//   const [companyPhone, setCompanyPhone] = useState('');
//   const [taxNumber, setTaxNumber] = useState('');
//   const [customerPhone, setCustomerPhone] = useState('');
//   const [customerAddress, setCustomerAddress] = useState('');
//   const [companyWebsite, setCompanyWebsite] = useState('');
//   const [companyCity, setCompanyCity] = useState('');
//   const [companyState, setCompanyState] = useState('');
//   const [customerCity, setCustomerCity] = useState('');
//   const [customerState, setCustomerState] = useState('');
//   const [customerName, setCustomerName] = useState('');
//   const [invoiceNumber, setInvoiceNumber] = useState('');
//   const [invoiceDate, setInvoiceDate] = useState('');
//   const [notes, setNotes] = useState('');
//   const [companyLogo, setCompanyLogo] = useState('');
//   const [paymentDue, setPaymentDue] = useState('');
//   const [description, setDescription] = useState('');
//   const [quantity, setQuantity] = useState<number>(0);
//   const [price, setPrice] = useState<number>(0);
//   const [amount, setAmount] = useState<number>(0);
//   const [list, setList] = useState<ListItem[]>([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [subTotal, setSubTotal] = useState(0);
//   const [taxCalc, seTaxCalc] = useState(0);
//   const [total, setTotal] = useState(0);

//   // useEffect(() => {
//   //   // Fetch existing invoice details if editing
//   //   if (template) {
//   //     // Fetch details from an API or local state
//   //     setInvoiceDetails({
//   //       title: `Invoice ${template}`,
//   //       date: '',
//   //       amount: '',
//   //       description: '',
//   //     });
//   //   }
//   // }, [template]);

//   // const handleChange = (e) => {
//   //   setInvoiceDetails({
//   //     ...invoiceDetails,
//   //     [e.target.name]: e.target.value,
//   //   });
//   // };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!description.trim()) {
//       alert('Description is required.');
//       return;
//     }
//     if (!quantity || quantity <= 0) {
//       alert('Quantity must be a positive number.');
//       return;
//     }
//     if (!price || price <= 0) {
//       alert('Price must be a positive number.');
//       return;
//     }
//     const newItems = {
//       id: uuidv4(),
//       description,
//       quantity,
//       price,
//       amount,
//     };
//     setDescription('');
//     setQuantity(0);
//     setPrice(0);
//     setAmount(0);
//     setList((prevList) => [...prevList, newItems]);
//     console.debug(list);
//   };

//   const handleClose = () => {
//     navigate('/dashboard/invoices/create_invoice');
//   };

//   // Calculate Amount
//   useEffect(() => {
//     setAmount(quantity * price);
//   }, [quantity, price]);

//   //Calculate subtotal amount
//   useEffect(() => {
//     // Calculate the total amount whenever the items change
//     const newTotal = list.reduce((sum, item) => {
//       return sum + item.quantity * item.price;
//     }, 0);
//     setSubTotal(newTotal);
//     //Calculate Tax
//     const calculatedTax = newTotal * 0.1;
//     seTaxCalc(calculatedTax);
//     //Total
//     const allTotal = newTotal + calculatedTax;
//     setTotal(allTotal);
//   }, [list]);

//   // Delete
//   const handleDeleteItem = (id: string) => {
//     setList(list.filter((row) => row.id !== id));
//   };

//   // Handles Edit
//   const editRow = (id: string) => {
//     const editingRow = list.find((row) => row.id === id);
//     if (editingRow) {
//       setList(list.filter((row) => row.id !== id));
//       setIsEditing(true);
//       setDescription(editingRow.description);
//       setQuantity(editingRow.quantity);
//       setPrice(editingRow.price);
//     } else {
//       console.debug(`Item with id ${id} not found.`);
//     }
//   };
//   return (
//     <>
//       <main>
//         <h4 className="section-head">Create Invoice</h4>
//         <div>
//           {showInvoice ? (
//             <>
//               <div className="guarantor-list col-10 mx-auto">
//                 <header>
//                   <div className="d-flex justify-content-between p-5">
//                     <div className="d-flex gap-2">
//                       <div>
//                         <img
//                           // src={companyLogo}
//                           src={`${BaseDirectories.LOGOS_DIR}/Logo2.png`}
//                           alt=""
//                           style={{
//                             width: '60px',
//                           }}
//                         />
//                       </div>
//                       <div className="text-start">
//                         <h3>{companyName}</h3>
//                         <p className="mb-0">{companyEmail}</p>
//                         <span>
//                           <a
//                             href={companyWebsite}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                           >
//                             {companyWebsite}
//                           </a>
//                         </span>
//                         <p>{companyPhone}</p>
//                       </div>
//                     </div>
//                     <div className="text-end">
//                       <p className="mb-0">{companyAddress}</p>
//                       <p className="mb-0">
//                         {companyCity}, {companyState}
//                       </p>
//                       <p className="mb-0">{taxNumber}</p>
//                     </div>
//                   </div>
//                 </header>
//                 <section className="bg-white border border-2 m-4 p-5 rounded-2 col-10 mx-auto">
//                   <div className="invoice-form-details d-flex ">
//                     <div className="col-md-4 text-start">
//                       <div>
//                         <p className="m-0">Billed to: </p>
//                         <span>{customerName}</span>
//                         <br />
//                         <span>{customerAddress}</span>
//                         <br />
//                         <span>
//                           {customerCity}
//                           {', '}
//                           {customerState}
//                         </span>
//                       </div>
//                       <div className="mt-5">
//                         <p className="m-0">Subject: </p>
//                         <span>{subject}</span>
//                       </div>
//                     </div>
//                     <div className="col-md-3 text-start">
//                       <div className="">
//                         <p className="m-0">Invoice Number </p>
//                         <h6 className="m-0">{invoiceNumber}</h6>
//                       </div>
//                       {/* <div className="">
//                         <p className="m-0">Reference </p>
//                         <h6 className="m-0">INV-057</h6>
//                       </div> */}
//                       <div className="">
//                         <p className="m-0">Invoice Date: </p>
//                         <h6 className="m-0">{invoiceDate}</h6>
//                       </div>
//                     </div>
//                     <div className="col-md-4 text-end">
//                       <div className="">
//                         <p className="m-0">Invoice Amount:</p>
//                         <h5 className="m-0">₦{total.toLocaleString()}</h5>
//                       </div>
//                       <div className="mt-5">
//                         <p className="m-0">Due Date: </p>
//                         <h6 className="m-0">{paymentDue}</h6>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="bg-white table-responsive">
//                     <table className="table responsive-table mb-0 col-md-12">
//                       <thead>
//                         <tr>
//                           <td className="fw-bold">ITEM DETAILS</td>
//                           <td className="fw-bold">QTY</td>
//                           <td className="fw-bold">RATE</td>
//                           <td className="fw-bold">AMOUNT</td>
//                         </tr>
//                       </thead>
//                       {list.map(
//                         ({ id, description, quantity, price, amount }) => (
//                           <tbody key={id}>
//                             <tr>
//                               <td>{description}</td>
//                               <td>{quantity}</td>
//                               <td>{price}</td>
//                               <td>₦{amount.toFixed(2)}</td>
//                             </tr>
//                           </tbody>
//                         ),
//                       )}
//                     </table>
//                     <hr />
//                     <div className="text-end mt-4">
//                       <p>Subtotal: ₦{subTotal.toLocaleString()}</p>
//                       <p>Tax(10%): ₦{taxCalc.toLocaleString()}</p>
//                       <h5>Total: ₦{total.toLocaleString()}</h5>
//                     </div>
//                     <hr />
//                   </div>
//                   <div className="mt-5 text-start fw-bold">
//                     <p>Thanks for Business</p>
//                   </div>
//                 </section>
//                 <footer className="text-start p-5">
//                   <p className="fw-bold">Terms & Conditions:</p>
//                   <p className="col-4 text-start">{notes}</p>
//                 </footer>
//               </div>
//               <section className="buttons">
//                 <div className="d-flex justify-content-end gap-2 mt-2">
//                   <Button
//                     classes="primary-btn"
//                     content="Edit"
//                     onClick={() => setShowInvoice(false)}
//                   />
//                   <Button classes="primary-btn" content="Share" />
//                   <Button classes="primary-btn" content="View" />
//                   <Button classes="primary-btn" content="Download" />
//                 </div>
//               </section>
//             </>
//           ) : (
//             <>
//               <div style={{ position: 'relative' }}>
//                 <button
//                   onClick={handleClose}
//                   style={{
//                     position: 'absolute',
//                     top: '10px',
//                     right: '10px',
//                     background: 'transparent',
//                     border: 'none',
//                     fontSize: '24px',
//                     cursor: 'pointer',
//                   }}
//                 >
//                   &times;
//                 </button>
//               </div>

//               <div className="guarantor-list bg-white">
//                 {/* <div className="bg-white"> */}
//                 <h3 className="mb-4" style={{ color: '#054b99' }}>
//                   Edit Invoice Details
//                 </h3>
//                 <div className="account-settings-form">
//                   <div className="row px-md-5 px-4 justify-content-between text-start">
//                     <div className="col-12 col-md-4 left-side pe-md-3">
//                       <div className="col-md-12 input-box">
//                         {/* <h4>Brand</h4> */}
//                         <label htmlFor="avatar" className="mb-1 mt-3">
//                           Logo
//                         </label>
//                         <input
//                           className="form-control"
//                           type="file"
//                           id="avatar"
//                           name="avatar"
//                           onChange={(e) => setCompanyLogo(e.target.value)}
//                           value={companyLogo}
//                           accept="image/png, image/jpeg"
//                         />
//                       </div>
//                       <div className="d-flex col-md-12 gap-4">
//                         <div className="col-md-5 input-box">
//                           <label className="mb-1 mt-3" htmlFor="name">
//                             City
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             id="city"
//                             name="city"
//                             value={companyCity}
//                             onChange={(e) => setCompanyCity(e.target.value)}
//                             required
//                           />
//                         </div>
//                         <div className="col-md-5 input-box">
//                           <label className="mb-1 mt-3" htmlFor="name">
//                             State
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             id="state"
//                             name="state"
//                             value={companyState}
//                             onChange={(e) => setCompanyState(e.target.value)}
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <h6 className="mt-4">Bill to:</h6>
//                         <label className="mb-1 mt-3" htmlFor="name">
//                           Customer
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={customerName}
//                           onChange={(e) => setCustomerName(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="address">
//                           Address
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           id="address"
//                           name="address"
//                           value={customerAddress}
//                           onChange={(e) => setCustomerAddress(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="d-flex col-md-12 gap-4">
//                         <div className="col-md-5 input-box">
//                           <label className="mb-1 mt-3" htmlFor="state">
//                             State
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             id="customer_state"
//                             name="customer_state"
//                             value={customerState}
//                             onChange={(e) => setCustomerState(e.target.value)}
//                             required
//                           />
//                         </div>
//                         <div className="col-md-5 input-box">
//                           <label className="mb-1 mt-3" htmlFor="city">
//                             City
//                           </label>
//                           <input
//                             className="form-control"
//                             type="text"
//                             id="customer_city"
//                             name="customer_city"
//                             value={customerCity}
//                             onChange={(e) => setCustomerCity(e.target.value)}
//                             required
//                           />
//                         </div>
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="phone">
//                           Phone number
//                         </label>
//                         <input
//                           className="form-control"
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                           value={customerPhone}
//                           onChange={(e) => setCustomerPhone(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="phone">
//                           Subject
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           id="subject"
//                           value={subject}
//                           onChange={(e) => setSubject(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="tax_number">
//                           Tax Number
//                         </label>
//                         <input
//                           className="form-control"
//                           type="number"
//                           id="tax_number"
//                           name="tax_number"
//                           value={taxNumber}
//                           onChange={(e) => setTaxNumber(e.target.value)}
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div className="col-12 col-md-4 middle-side px-md-3">
//                       {/* <h4>Invoice Information</h4> */}
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="number">
//                           Invoice number:
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           id="invoice_number"
//                           name="invoice_number"
//                           value={invoiceNumber}
//                           onChange={(e) => setInvoiceNumber(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="date">
//                           Invoice date
//                         </label>
//                         <input
//                           className="form-control"
//                           type="date"
//                           id="invoice_date"
//                           name="invoice_date"
//                           value={invoiceDate}
//                           onChange={(e) => setInvoiceDate(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="date">
//                           Amount
//                         </label>
//                         {/* <input
//                           className="form-control"
//                           type="number"
//                           id="amount"
//                           name="amount"
//                           value={amount}
//                           onChange={(e) => setAmount(e.target.value)}
//                           required
//                         /> */}
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="date">
//                           Payment due
//                         </label>
//                         <input
//                           className="form-control"
//                           type="date"
//                           id="payment_date"
//                           name="payment_date"
//                           value={paymentDue}
//                           onChange={(e) => setPaymentDue(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="name">
//                           Name/Company
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={companyName}
//                           onChange={(e) => setCompanyName(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="address">
//                           Address
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           id="company_address"
//                           name="company_address"
//                           value={companyAddress}
//                           onChange={(e) => setCompanyAddress(e.target.value)}
//                           required
//                         />
//                       </div>
//                     </div>
//                     <div className="col-12 col-md-4 right-side ps-md-3">
//                       {/* <h4>Company Information</h4> */}
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="url">
//                           Website
//                         </label>
//                         <input
//                           className="form-control"
//                           type="url"
//                           name="url"
//                           id="url"
//                           placeholder="https://example.com"
//                           pattern="https://.*"
//                           value={companyWebsite}
//                           onChange={(e) => setCompanyWebsite(e.target.value)}
//                           // size="30"
//                           required
//                         />
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="email">
//                           Email
//                         </label>
//                         <input
//                           className="form-control"
//                           type="email"
//                           id="company_email"
//                           name="company_email"
//                           value={companyEmail}
//                           onChange={(e) => setCompanyEmail(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="phone">
//                           Phone number
//                         </label>
//                         <input
//                           className="form-control"
//                           type="tel"
//                           id="company_phone"
//                           name="company_phone"
//                           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                           value={companyPhone}
//                           onChange={(e) => setCompanyPhone(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="description">
//                           Item Description
//                         </label>
//                         <input
//                           className="form-control"
//                           type="text"
//                           id="description"
//                           name="description"
//                           value={description}
//                           onChange={(e) => setDescription(e.target.value)}
//                           required
//                         />
//                       </div>
//                       <form onSubmit={handleSubmit}>
//                         <div className="col-md-12 d-flex gap-3">
//                           <div className="col-md-3 input-box">
//                             <label className="mb-1 mt-3" htmlFor="quantity">
//                               Quantity
//                             </label>
//                             <input
//                               className="form-control"
//                               type="text"
//                               id="quantity"
//                               name="quantity"
//                               value={quantity}
//                               onChange={(e) =>
//                                 setQuantity(Number(e.target.value))
//                               }
//                               required
//                             />
//                           </div>
//                           <div className="col-md-4 input-box">
//                             <label className="mb-1 mt-3" htmlFor="price">
//                               Price
//                             </label>
//                             <input
//                               className="form-control"
//                               type="text"
//                               id="price"
//                               name="price"
//                               value={price}
//                               onChange={(e) => setPrice(Number(e.target.value))}
//                               required
//                             />
//                           </div>
//                           <div className="col-md-3 input-box">
//                             <label className="mb-1 mt-3" htmlFor="amount">
//                               Amount
//                             </label>
//                             <p>{amount}</p>
//                           </div>
//                         </div>
//                         <button type="submit" className="primary-btn p-1 mt-1">
//                           Add Item
//                         </button>
//                       </form>
//                       <div className="col-md-12 input-box">
//                         <label className="mb-1 mt-3" htmlFor="notes">
//                           Terms & Conditions
//                         </label>
//                         <textarea
//                           className="form-control"
//                           id="notes"
//                           name="notes"
//                           placeholder="e.g Please Pay within 15days of receiving this invoice"
//                           value={notes}
//                           onChange={(e) => setNotes(e.target.value)}
//                           cols={35}
//                           rows={3}
//                           required
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row px-md-5 px-4 justify-content-end">
//                     <div className="col-9">
//                       <table className="table responsive-table mb-0 col-md-12">
//                         <thead>
//                           <tr>
//                             <td className="fw-bold">ITEM</td>
//                             <td className="fw-bold">QTY</td>
//                             <td className="fw-bold">RATE</td>
//                             <td className="fw-bold">AMOUNT</td>
//                           </tr>
//                         </thead>
//                         {list.map(
//                           ({ id, description, quantity, price, amount }) => (
//                             <tbody key={id}>
//                               <tr>
//                                 <td>{description}</td>
//                                 <td>{quantity}</td>
//                                 <td>{price}</td>
//                                 <td>₦{amount.toFixed(2)}</td>
//                                 <td>
//                                   <button
//                                     onClick={() => handleDeleteItem(id)}
//                                     className="bg-transparent"
//                                   >
//                                     <Icon
//                                       path={mdiDeleteEmpty}
//                                       size={1}
//                                       className=""
//                                       style={{
//                                         color: '#e75858',
//                                       }}
//                                     />
//                                   </button>
//                                 </td>
//                                 <td>
//                                   <button
//                                     onClick={() => editRow(id)}
//                                     className="bg-transparent"
//                                   >
//                                     <Icon
//                                       path={mdiPencilOutline}
//                                       size={1}
//                                       className=""
//                                       style={{
//                                         color: '#06A77D',
//                                       }}
//                                     />
//                                   </button>
//                                 </td>
//                               </tr>
//                             </tbody>
//                           ),
//                         )}
//                       </table>
//                     </div>
//                   </div>
//                   <Button
//                     classes="primary-btn"
//                     content="Save and Preview"
//                     type="submit"
//                     onClick={() => {
//                       setShowInvoice(true);
//                     }}
//                   />
//                 </div>
//               </div>
//             </>
//           )}
//         </div>
//       </main>
//     </>
//   );
// };

// export default InvoiceFormOne;
