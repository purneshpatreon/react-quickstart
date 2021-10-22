import * as React from "react";
import "../App.css";
import { data } from "./datasource";
import {
  ColumnDirective,
  ColumnsDirective,
  Filter,
  GridComponent,
  Group,
  GroupSettingsModel,
} from "@syncfusion/ej2-react-grids";
import {
  Inject,
  Page,
  PageSettingsModel,
  Sort,
  SortSettingsModel,
  FilterSettingsModel,
  Toolbar,
  ExcelExport,
  PdfExport,
} from "@syncfusion/ej2-react-grids";
import "./../assets/scss/App.scss";
import { DialogComponent } from "@syncfusion/ej2-react-popups";

/* eslint-disable */
export default class Main1 extends React.Component<Record<string, unknown>, undefined> {
  public groupSettings: GroupSettingsModel = { columns: ['EmployeeID'] };
  public pageSettings: PageSettingsModel = { pageSize: 16 }
  public sortSettings: SortSettingsModel = { columns: [
    {field: 'EmployeeID', direction: 'Ascending' }
  ] };
  public filterSettings: FilterSettingsModel = { columns: [
    {field: 'EmployeeID', operator: 'greaterthan', value: 2 }
  ] };

  private gridInstance: GridComponent;
  private alertDialogInstance: DialogComponent;
  public toolbarOptions: any = ['ExcelExport', 'PdfExport', 'CsvExport'];
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
  clickHandler(args: any) {
    switch (args.item.text) {
      case 'PDF Export':
        this.gridInstance.pdfExport();
        break;
      case 'Excel Export':
        this.gridInstance.excelExport();
        break;
      case 'CVS Export':
        this.gridInstance.csvExport();
        break;
    }
  }

  public render() {
    return (
      <div>
        <h2>Grid - from Local Data</h2>
        <GridComponent dataSource={data} allowPaging={true} pageSettings={ this.pageSettings }
          ref={ grid => this.gridInstance = grid} 
          allowExcelExport = {true} allowPdfExport={true}
          toolbar={this.toolbarOptions} toolbarClick={this.clickHandler.bind(this)}
          allowGrouping={true} groupSettings={ this.groupSettings }
          filterSettings = {this.filterSettings} gridLines='Both'
          allowSorting={true} sortSettings={ this.sortSettings } allowFiltering={true}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' width='100'/>
            <ColumnDirective field='EmployeeID' width='100' textAlign="Right"/>
            <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"/>
            <ColumnDirective field='ShipCountry' width='100'/>
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group, Toolbar,ExcelExport, PdfExport,]} />
        </GridComponent>       
      </div>     
    );
  }
}
