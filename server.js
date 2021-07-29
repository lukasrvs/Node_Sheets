const x1 = require("excel4node");
const wb = new x1.Workbook();
const ws = wb.addWorksheet("Sheet");

const data = [
    {
        "name": "abc",
        "email": "abc@email.com",
        "phone": "123"
    },
    {
        "name": "def",
        "email": "def@email.com",
        "phone": "456"
    },
    {
        "name": "ghi",
        "email": "ghi@email.com",
        "phone": "789"
    }
];

const headColumnsTitles = [
    "Name",
    "E-mail",
    "Phone"
];

let headColumnsIndex=1;
headColumnsTitles.forEach(heading=>{
    ws.cell(1, headColumnsIndex++).string(heading);
});

let rowIndex=2;
data.forEach(record=>{
    let columnIndex=1;
    Object.keys(record).forEach(columnName=>{
        ws.cell(rowIndex,columnIndex++).string(record[columnName]);
    });
    rowIndex++;
});

wb.write("sheet.xlxs");