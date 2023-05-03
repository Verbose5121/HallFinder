import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { communityData } from '../../../backend/commData';

function createData(website, phone, address, email, fax) {
  return { website, phone, address, email, fax };
}

// function createProgramData()

//Todo: create function to find array index e.g. [5] below from name 
const communityWebsite = communityData[5].communityAssociationInformation.communityAssociationWebsite;
const communityPhone = communityData[5].communityAssociationInformation.facilityPhoneNumber;
const communityAddress = communityData[5].communityAssociationInformation.facilityLocatedat;
const communityEmail = communityData[5].communityAssociationInformation.facilityEmail;
const communityFax = communityData[5].communityAssociationInformation.facilityFaxNumber;

const programsArt = communityData[5].programs.artClasses;
const programsBingo = communityData[5].programs.bingo;
const programsChildCare = communityData[5].programs.childCare;
const programsDance = communityData[5].programs.dance;
const programsFitness = communityData[5].programs.fitness;
const programsSeniorsProgram = communityData[5].programs.seniorsProgram;
const programsSports = communityData[5].programs.sports;
const programsYouthJustice = communityData[5].programs.youthJustice;

// const facilitiesArray = [
//   communityData[5].
//  ] 

const rows = [
  createData(communityWebsite, communityPhone, communityAddress, communityEmail, communityFax),

];

const programRows = [
  createData(programsArt),
  createData(programsBingo),
  createData(programsChildCare),
  createData(programsDance),
  createData(programsFitness),
  createData(programsSeniorsProgram),
  createData(programsSports),
  createData(programsYouthJustice),
];

export default function HallTables() {
  return (
    // Contact Details Table
    <TableContainer sx={{ minWidth: 250, top:150 }} component={Paper}>
      <Table sx={{ minWidth: 250}} aria-label="Hall Details">
        <TableHead>
          <TableRow> 
            <TableCell>Hall Details</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Website</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Fax</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.website}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.website}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.fax}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Programs Table */}
      <Table sx={{ maxWidth: 0.5}} aria-label="Programs">
        <TableHead>
          <TableRow> 
            <TableCell>Programs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Program Type</TableCell>
            <TableCell align="right">Available:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((programRows) => ( */}
            <TableRow
              key={programRows.artClasses}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Art Classes:
              </TableCell>
              <TableCell align="right">{programsArt}</TableCell>
            </TableRow>

            <TableRow
            key={programRows.bingo}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Bingo:
            </TableCell>
            <TableCell align="right">{programsBingo}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.childCare}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Childcare:
            </TableCell>
            <TableCell align="right">{programsChildCare}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.dance}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Dance:
            </TableCell>
            <TableCell align="right">{programsDance}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.fitness}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Fitness:
            </TableCell>
            <TableCell align="right">{programsFitness}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.seniorsProgram}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Seniors Program:
            </TableCell>
            <TableCell align="right">{programsSeniorsProgram}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.sports}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Sports:
            </TableCell>
            <TableCell align="right">{programsSports}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.youthJustice}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Youth Justice:
            </TableCell>
            <TableCell align="right">{programsYouthJustice}</TableCell>
          </TableRow>
          
        </TableBody>
      </Table>

      {/* Recreation Amenities Table */}
      <Table sx={{ maxWidth: 0.5}} aria-label="Recreation Amenities">
        <TableHead>
          <TableRow> 
            <TableCell>Programs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Program Type</TableCell>
            <TableCell align="right">Available:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map((programRows) => ( */}
            <TableRow
              key={programRows.artClasses}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Art Classes:
              </TableCell>
              <TableCell align="right">{programsArt}</TableCell>
            </TableRow>

            <TableRow
            key={programRows.bingo}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Bingo:
            </TableCell>
            <TableCell align="right">{programsBingo}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.childCare}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Childcare:
            </TableCell>
            <TableCell align="right">{programsChildCare}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.dance}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Dance:
            </TableCell>
            <TableCell align="right">{programsDance}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.fitness}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Fitness:
            </TableCell>
            <TableCell align="right">{programsFitness}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.seniorsProgram}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Seniors Program:
            </TableCell>
            <TableCell align="right">{programsSeniorsProgram}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.sports}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Sports:
            </TableCell>
            <TableCell align="right">{programsSports}</TableCell>
          </TableRow>

          <TableRow
            key={programRows.youthJustice}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Youth Justice:
            </TableCell>
            <TableCell align="right">{programsYouthJustice}</TableCell>
          </TableRow>
          
        </TableBody>

      <Table sx={{ maxWidth: 0.5}} aria-label="Programs"></Table>
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          <TableRow>
            <TableCell> </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* Community Facilities Table */}
      <Table sx={{ maxWidth: 0.5}} aria-label="Community Facilities">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          <TableRow>
            <TableCell> </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      {/* <Table sx={{ maxWidth: 0.5}} aria-label=""></Table>
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          <TableRow>
            <TableCell> </TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
            

    </TableContainer>
    )}
