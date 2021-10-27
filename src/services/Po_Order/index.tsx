const axios = require('axios');

export const generate_po_from_table = table_data => () => {
    debugger;
    const url = jsonApiUrl(`/generate/po_order/`)

    axios.post(url, table_data)
        .then(response =>
            alert("Created the PO Order")    
        )
        .catch(error =>
            dispatch({
                type: GENERATE_PO_FAILED,
                payload: { error },
            }),
        )
}



export default fetch_generate_po_table_data = () => {
    axios.get('http:localhost://get_table_Details').then(resp => {
        console.log(resp.data);
    });
}