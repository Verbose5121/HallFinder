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

let amenities = communityData[5].recreationAmenities;

const facilities = communityData[5].communityAssociationFacilities;

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
    <TableContainer sx={{ display: 'inline-block', minWidth: 1000, top:150 }} component={Paper}>
      <Table sx={{ display: 'inline', minWidth: 250}} aria-label="Hall Details">
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
      <Table sx={{ display: 'inline', maxWidth: 0.5}} aria-label="Programs">
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
            <TableCell>Recreation Amenities</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Amenity Type</TableCell>
            <TableCell align="right">Available:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Hockey Rink:
              </TableCell>
              <TableCell align="right">{amenities.hockeyRink}</TableCell>
            </TableRow>

            <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Skating Rink:
            </TableCell>
            <TableCell align="right">{amenities.skatingRink}</TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Sports Fields:
            </TableCell>
            <TableCell align="right">{amenities.sportsPlayfields}</TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Swimming Pool:
            </TableCell>
            <TableCell align="right">{amenities.swimmingPool}</TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Tennis Courts:
            </TableCell>
            <TableCell align="right">{amenities.tennisCourts}</TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Other:
            </TableCell>
            <TableCell align="right">{amenities.other}</TableCell>
          </TableRow>          
        </TableBody>
      </Table>


      {/* Community Facilities Table */}
      <Table sx={{ maxWidth: 0.5}} aria-label="Community Facilities">
        <TableHead>
          <TableRow>
            <TableCell>Community Facilities</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Facility Type:</TableCell>
            <TableCell>Available:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody> 
          <TableRow>
            <TableCell>
              Games Room:
            </TableCell>
            <TableCell align="right">{facilities.gamesRoom}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Gym:
            </TableCell>
            <TableCell align="right">{facilities.gym}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            Indoor Fireplace:
            </TableCell>
            <TableCell align="right">{facilities.indoorFireplace}
            </TableCell>
          </TableRow>            
          <TableRow>
            <TableCell>
              Kitchen:
            </TableCell>
            <TableCell align="right">{facilities.kitchen}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            Lounge:
            </TableCell>
            <TableCell align="right">{facilities.lounge}
            </TableCell>
          </TableRow>            
          <TableRow>
            <TableCell>
              Meeting Rooms:
            </TableCell>
            <TableCell align="right">{facilities.meetingRooms}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            Outdoor BBQ:
            </TableCell>
            <TableCell align="right">{facilities.outdoorBBQ}
            </TableCell>
          </TableRow>            
          <TableRow>
            <TableCell>
              Kitchen:
            </TableCell>
            <TableCell align="right">{facilities.soundSystem}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            Stage:
            </TableCell>
            <TableCell align="right">{facilities.stage}
            </TableCell>
          </TableRow>            
          <TableRow>
            <TableCell>
              Wheelchair Access:
            </TableCell>
            <TableCell align="right">{facilities.wheelchairAccess}</TableCell>
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
