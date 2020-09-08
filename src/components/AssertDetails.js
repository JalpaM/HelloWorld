import DataTable from 'react-data-table-component';
import React,{ Component } from "react";
import { rxSubjects } from "../reducers/reducers";

const customStyles = {
    title:{
        style: {
            minHeight: '72px', // override the row height
        }
    },
    rows: {
        style: {
            minHeight: '72px', // override the row height
        }
    },
    headCells: {
        style: {
            paddingLeft: '2%', // override the cell padding for head cells
            paddingRight: '10%',
        },
    },
    cells: {
        style: {
            paddingLeft: '2%', // override the cell padding for data cells
            paddingRight: '10%',
        },
    },
};

const columns = [
    {
        name: 'Asset Name',
        selector: 'assetName',
        sortable: true,
    },
    {
        name: 'Price',
        selector: 'price',
        sortable: true,
        right: true,
    },
    {
        name: 'Last Updated',
        selector: 'Last Updated',
        sortable: true,
        right: true,
    },
    {
        name: 'Currency',
        selector: 'Stock',
        sortable: true,
        right: true,
    }
];

export class AssertDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            "asset_id": 2,
            "assets" : []
        }
        this.connectToSubscriptions();
    }


    connectToSubscriptions() {
      rxSubjects.assetSubject.subscribe(data => {
            if (data.length) {
                this.setState({assets: data});
            }
        });
    }

    componentDidMount() {
        this.props.getAssetInfo();
    }

    render() {
        return (
            <DataTable
                title="Asset Details"
                columns={columns}
                data={this.state.assets}
                fixedHeader={true}
                defaultPageSize={15}
                pagination={true}
                paginationRowsPerPageOptions={[ 15, 50, 100, 200]}
                customStyles={customStyles}
            />
        )
    }

};


