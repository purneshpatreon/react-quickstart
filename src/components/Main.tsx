/* eslint-disable */ 
import * as React from "react";
import { hot } from "react-hot-loader";
import "../App.css";
import { ColumnDirective, ColumnsDirective, ExcelExport, Filter, GridComponent, Group, GroupSettingsModel, PdfExport } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Sort, SortSettingsModel, FilterSettingsModel, Toolbar } from '@syncfusion/ej2-react-grids';
import { DataManager } from "@syncfusion/ej2-data";
import { DialogComponent } from '@syncfusion/ej2-react-popups';

export default class Main extends React.Component<Record<string, unknown>, undefined> {
  constructor(props){
    super(props);
    const data2 = new DataManager({
      url: "https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/",
    })
    if (data2){
      this.state = {table_data: [{
        "PO_ID": 123456,
        "PO_Number": 19292,
        "Created_date": "2021-10-11",
        "Vendor": "ABCD",
        "program": "H4"
      },
      {
        "PO_ID": 123456,
        "PO_Number": 19292,
        "Created_date": "2021-10-11",
        "Vendor": "ABCD",
        "program": "H4"
      },{
        "PO_ID": 123456,
        "PO_Number": 19292,
        "Created_date": "2021-10-11",
        "Vendor": "ABCD",
        "program": "H4"
      }]}
    }
    this.generatePOForm = this.generatePOForm.bind(this);
  }
  private gridInstance: GridComponent;
  private alertDialogInstance: DialogComponent;
  public toolbarOptions: any = [{ text: 'Copy', tooltipText: 'Copy', prefixIcon: 'e-copy', id: 'copy' }, 
        { text: 'Copy With Header', tooltipText: 'Copy With Header', prefixIcon: 'e-copy', id: 'copyHeader' }, 'ExcelExport', 'PdfExport', 'CsvExport'];
  private visible = false;
  private animationSettings: any = { effect: 'None', duration: 400, delay:0 };
  public selectionsettings: Object = { type: 'Multiple' };
  private alertButtons = [{
    // Click the footer buttons to hide the Dialog
    click: () => {
        this.alertDialogInstance.hide();
    },
    buttonModel: { content: 'OK', isPrimary: true }
  }];

  ComponentWillMount(){
    // Do the GET request for table data
    // Add the table data as props
    // Fetch the table data
  }

  clickHandler(args: any) {

    switch (args.item.text) {
      case 'PDF Export':
        this.gridInstance.pdfExport();
        break;
      case 'Excel Export':
        this.gridInstance.excelExport();
        break;
      case 'CSV Export':
        this.gridInstance.csvExport();
        break;
      default:
        if(this.gridInstance.getSelectedRecords().length>0) {
          let withHeader: boolean = false;
          if (args.item.id === 'copyHeader') {
              withHeader = true;
          }
          this.gridInstance.copy(withHeader);
        } else {
          this.alertDialogInstance.show();
        }
        break;
    }

  }
  generatePOForm(event){
    event.preventDefault()
    // get the table data from state
    // and send to the service POST request
    debugger;
    let table_data = this.state.table_data;
    request_data = {
      "PO_ID": 123456,
      "PO_Number": 1233455,
      "date": "2021-10-11",
      "Vendor": "H4",
      "items": [{
          "item_no": 1,
          "ndc": "URYRHE",
          "item_desc": "Description",
          "uom": "dkkdd",
          "quantity": 10,
          "unit_price": 1,
          "quantity_ordered": 1,
          "manufacturer": "JP Morgan"        
        }]
    }
    generate_po_from_table(request_data);
  }

  public render() {
    return (
      <div>
        <div className="control-panel">
        <div className="control-section">
        <form className='form' onSubmit={this.generatePOForm}>
          <GridComponent dataSource={this.state.table_data} height= {400} gridLines="Both" 
            ref={grid => this.gridInstance = grid} 
            allowExcelExport={true} allowPdfExport={true} selectionSettings= {this.selectionsettings}

            toolbar={this.toolbarOptions} toolbarClick={this.clickHandler.bind(this)}>
            <ColumnsDirective>
              <ColumnDirective field='PO_ID' headerText='PO ID' width='120' textAlign="Right" />
              <ColumnDirective field='PO_Number' headerText='PO Number' width='150' />
              <ColumnDirective field='Created_date' headerText='Created Date' width='150' />
              <ColumnDirective field='Vendor' headerText='Vendor' width='150' />
            </ColumnsDirective>
            <Inject services={[Page, Sort, Filter, Group, Toolbar,ExcelExport, PdfExport,]} />
          </GridComponent>
            <button className="btn btn-primary pull-right">Generate PO</button>
          </form>
          </div>
          <DialogComponent id="alertDialog" header='Copy with Header' visible={this.visible} 
          animationSettings={this.animationSettings} width='300px' 
          content='Atleast one row should be selected to copy with header' 
          ref={alertdialog => this.alertDialogInstance = alertdialog}
              target='.control-section' buttons={this.alertButtons} ></DialogComponent>
        </div>
      </div>
    );
  }
}
