/* eslint-disable */ 
import * as React from "react";
import { hot } from "react-hot-loader";
import "../App.css";
import { ColumnDirective, ColumnsDirective, ExcelExport, Filter, GridComponent, Group, GroupSettingsModel, PdfExport } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Sort, SortSettingsModel, FilterSettingsModel, Toolbar } from '@syncfusion/ej2-react-grids';
import { DataManager } from "@syncfusion/ej2-data";
import { DialogComponent } from '@syncfusion/ej2-react-popups';

export default class PO_Entry extends React.Component<Record<string, unknown>, undefined> {
  
    handleInputChange () {

    }
    onSubmit (){

    }

    public render() {
    return (
        <div> <h1>PO Entry</h1>
        <div className='card'>
        <form className='form' onSubmit={this.onSubmit}> <div> 
            <label className="label" htmlFor='poid'>PO ID</label> 
            <input className="input" type='text' name='poid' value={''} onChange={this.handleInputChange} /> 
            </div> <div> <label className="label" htmlFor='poNumber'>PO Number</label> 
            <input className="input" type='text' name='poNumber' value={''} onChange={this.handleInputChange} /> 
            </div>
            <div>
            <label className="label" htmlFor='receivingDate'>Receving Date</label> 
            <input className="input" type='date' name='receivingDate' value={''} onChange={this.handleInputChange} /> 
            </div> <div> <label className="label" htmlFor='program'>Program</label>
            <input className="input" type='text' name='program' value={""} onChange={this.handleInputChange} /> </div> <div> 
                <label className="label" htmlFor='vendor'>Vendor</label> <input className="input"type='text' name='vendor' value={""} onChange={this.handleInputChange} /> </div> 
                <button className="btn btn-primary">Create PO</button> 
        </form> 
        </div> 
        <div>
            <label className="label" htmlFor='search'>Search the input</label> 
            <input className="input pull-center" type='text' name='search' value={""} onChange={this.handleInputChange} />
        </div>
        </div>
    );
  }
}
