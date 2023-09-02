import React, { useState } from 'react';
import Header from '../Header';
import {FcSearch} from 'react-icons/fc'
import './index.css';


const TaxInvoiceTable = () => {
    return (
     <div className='outer-container-for-taxInvoiceTable'>  
        
            <div className='table-container-for-taxInvoiceTable'>

                <div className='taxInvoiceTable-buttons-container'>                    
                    <button className='taxInvoice-signButton'>Sign</button>
                    <select className='filter-select-to-updateTaxInvoice'>
                                    <option value="" >Tax Invoice</option>
                                    <option value="unpaidInvoice">Unpaid Invoice</option>
                                    <option value="paidInvoice">Paid Invoice</option>
                    </select>
                    <select className='filter-select-to-updateTaxInvoice'>
                                    <option value="" >Days</option>
                                    <option value="below30">Below 30 days</option>
                                    <option value="above60">Above 60 days</option>
                                    <option value="above90">Above 90 days</option>
                    </select>
                </div>

                <div className='taxInvoice-amount-container'>                    
                    <p className='taxInvoice-amount-para'>Total Amount Paid : <span className='taxInvoice-paid-amount'>534242</span> Rs</p>
                    <p className='taxInvoice-amount-para'>Balance Amount to be Paid : <span className='taxInvoice-ToBepaid-amount'>5342442</span> Rs</p>
                </div>

                <table className="taxInvoice-table">
                        <thead className='table-head-taxInvoice'>
                        <tr>
                            <th >Order Id</th>
                            <th >Project Name</th>
                            <th >Customer Name</th>
                            <th >Tax Invoice Number</th>
                            <th>Date</th>
                            <th>Amount Status</th>
                            <th>Amount Paid</th>
                            <th>Balance Amount</th>
                            <th>Update Tax</th>
                        </tr>
                        </thead>
                        <tbody className='table-body-taxInvoice'>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td >07/2023/10237-1</td>
                            <td >Four Laning of left-over works</td>
                            <td >T.T.K. CONSTRUCTIONS</td>
                            <td >PI/2023/0512</td>
                            <td>19/7/2023</td>
                            <td>
                                <button className='tax-button-for-taxInvoice'>Add</button>
                            </td>
                            <td>0 rs</td>
                            <td>972002 rs</td>
                            <td>
                                <select className='filter-select-to-updateTaxInvoice-UserInfo'>
                                    <option value="" >Action</option>
                                    <option value="updateInvoice">Update Invoice</option>
                                    <option value="updateUserInfo">Update User Info</option>
                                </select>
                            </td>
                        </tr>
    
                        </tbody>
                    </table>

            </div>

    </div>     
    );
  };


const TaxInvoice = () => {
    const [selectedFilter, setSelectedFilter] = useState('');
  
    const handleFilterChange = (e) => {
      setSelectedFilter(e.target.value);
      // Perform filter logic here based on the selected filter
      // You can use the selectedFilter value to filter your data
    };
  
    return (
 
        <>
        <Header/>


        <div className='outer-title-and-search-container-for-taxInvoice'>
        
                      <div className='title-and-search-container-for-taxInvoice'>

           
                  
                        <div className='heading-container-for-taxInvoice'>
                            <h1 className='taxInvoice-title'><span className='first-letters'>T</span>ax <span className='first-letters'>I</span>nvoice</h1>
                        </div>
                        
                        <div className='final-search-container-for-taxInvoice'>

                            <div className="search-container-taxInvoice">

                                    <div className='search-icon-container-taxInvoice'>
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                // Add your search logic here
                                                className="search-input-taxInvoice"
                                            />

                                            <div className='search-logo-container-taxInvoice'>
                                                <FcSearch className='search-icon-taxInvoice' />
                                            </div>

                                        </div>

                                        <select
                                            className="filter-select-taxInvoice"
                                            value={selectedFilter}
                                            onChange={handleFilterChange}
                                        >
                                            <option value="">Category</option>                                           
                                            <option value="projectName">Project Name</option>
                                            <option value="customerName">Customer Name</option>
                                            <option value="customerNum">Customer No</option>
                                            <option value="jobId">Customer Mail</option>
                                        </select>
                                    </div>

                       </div>     

                       </div>     
         </div>

        <div className='hr-container'>
            <hr className="hr-for-taxInvoice" />
        </div>    

            <TaxInvoiceTable />

            

                
        </>

      
    );
  };
  
  export default TaxInvoice;
