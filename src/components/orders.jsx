import React, { Fragment } from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./title";

// Generate Order Data
function createData(id, date, name, type, drugLibraries, filter, status) {
  return { id, date, name, type, drugLibraries, filter, status };
}

const rows = [
  createData(
    0,
    "09 Feb, 2023",
    "DGD201",
    "DTI-Protein",
    "cmap_drugs.csv",
    "None"
  ),
  createData(
    1,
    "02 Feb, 2023",
    "DGD201",
    "DTI-Protein",
    "zinc15_chemspace_instock_chemdiv_instock_211021.csv",
    "None"
  ),
  createData(
    2,
    "14 Jan, 2023",
    "DGD201",
    "DTI-Protein",
    "drugbank_FDA_approved_20221007.csv",
    "None",
    "Done"
  ),
  createData(
    3,
    "21 Dec, 2022",
    "DGD201",
    "DTI-Pair",
    "zinc15_chemspace_instock_chemdiv_instock_211021.csv, drugbank_FDA_approved_20221007.csv",
    "None"
  ),
  createData(
    4,
    "14 Nov, 2022",
    "DGD201",
    "DTI-Protein",
    "zinc15_chemspace_instock_chemdiv_instock_211021.csv",
    "None",
    "Done"
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <Fragment>
      {/* <Title>Recent Jobs</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Drug Libraries</TableCell>
            <TableCell>DTI Filter</TableCell>
            <TableCell>Status</TableCell>
            {/* <TableCell>Payment Method</TableCell> */}
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.drugLibraries}</TableCell>
              <TableCell>{row.filter}</TableCell>
              <TableCell>{row.status}</TableCell>
              {/* <TableCell>{row.paymentMethod}</TableCell> */}
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more jobs
      </Link> */}
    </Fragment>
  );
}
