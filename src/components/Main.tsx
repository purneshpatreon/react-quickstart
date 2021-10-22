/* eslint-disable */ 
import * as React from "react";
import { hot } from "react-hot-loader";
import "../App.css";
import { ColumnDirective, ColumnsDirective, ExcelExport, Filter, GridComponent, Group, GroupSettingsModel, PdfExport } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Sort, SortSettingsModel, FilterSettingsModel, Toolbar } from '@syncfusion/ej2-react-grids';
import { DataManager } from "@syncfusion/ej2-data";
import { DialogComponent } from '@syncfusion/ej2-react-popups';

export default class Main extends React.Component<Record<string, unknown>, undefined> {
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

  public data2 = new DataManager({
    url: "https://js.syncfusion.com/demos/ejServices/Wcf/Northwind.svc/Orders/",
  });

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

  public render() {
    return (
      <div>
        <div className="control-panel">
        <div className="control-section">
        <GridComponent dataSource={this.data2} height= {400} gridLines="Both" 
          ref={grid => this.gridInstance = grid} 
          allowExcelExport={true} allowPdfExport={true} selectionSettings= {this.selectionsettings}

          toolbar={this.toolbarOptions} toolbarClick={this.clickHandler.bind(this)}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
          </ColumnsDirective>
          <Inject services={[Page, Sort, Filter, Group, Toolbar,ExcelExport, PdfExport,]} />
        </GridComponent>
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
