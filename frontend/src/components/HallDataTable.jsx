import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { communityData } from '../../../backend/commData';
import { Card } from '@mui/material';

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
  const useStyles = makeStyles({
    root: {
      color: "red"
    }
  });
  return (
    <>
    {/* Contact Details Table */}
    <TableContainer classname='table-container' 
      sx={{ 
        flexWrap: 'wrap', 
        tableLayout: "auto", 
        border: 0, 
        maxWidth: 1,
        top:150, 
        // justifyContent: 'space-around'
        }} 
        component={Paper}>
      
      <Table sx={{ minWidth: 250}} aria-label="Hall Details" size="small" >
        <TableHead>
          <TableRow 
          // style={{ width: 1 }}
          > 
            {/* <TableCell colSpan={5}>Hall Details</TableCell> */}
          </TableRow>
          <TableRow>
            <TableCell>Website</TableCell>
            <TableCell align="center">Phone</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Fax</TableCell>
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
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.fax}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>

      {/* Programs Table */}
      <TableContainer classname='table-container' 
      sx={{ 
        flexWrap: 'wrap', 


        maxWidth: 0.2,
        mt: 3,
        justifyContent: 'space-between'
        }} 
      >
      <Table sx={{ display: 'inline', maxWidth: 0.5,}} aria-label="Programs">
        <TableHead>
          <TableRow > 
            <TableCell colSpan={2} align="center">Programs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Program Type</TableCell>
            <TableCell align="center">Available:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
            >
              <TableCell center>
                Art Classes:
              </TableCell>
              <TableCell align="center">{programsArt}</TableCell>
            </TableRow>

            <TableRow
          >
            <TableCell center>
              Bingo:
            </TableCell>
            <TableCell align="center">{programsBingo}</TableCell>
          </TableRow>

          <TableRow
          >
            <TableCell center>
              Childcare:
            </TableCell>
            <TableCell align="center">{programsChildCare}</TableCell>
          </TableRow>

          <TableRow
          >
            <TableCell center>
              Dance:
            </TableCell>
            <TableCell align="center">{programsDance}</TableCell>
          </TableRow>

          <TableRow
          >
            <TableCell center>
              Fitness:
            </TableCell>
            <TableCell align="center">{programsFitness}</TableCell>
          </TableRow>

          <TableRow
          >
            <TableCell center>
              Seniors Program:
            </TableCell>
            <TableCell align="center">{programsSeniorsProgram}</TableCell>
          </TableRow>

          <TableRow
          >
            <TableCell>
              Sports:
            </TableCell>
            <TableCell align="center">{programsSports}</TableCell>
          </TableRow>

          <TableRow
          >
            <TableCell center>
              Youth Justice:
            </TableCell>
            <TableCell align="center">{programsYouthJustice}</TableCell>
          </TableRow> 
        </TableBody>
      </Table>
        </TableContainer>
  
      <TableContainer
            sx={{ 
              flexWrap: 'wrap', 
      
               
              maxWidth: 0.2,
              mt: 3,
              justifyContent: 'space-between'
              }} 
      >  
      {/* Recreation Amenities Table */}
      <Table sx={{ display: 'inline', maxWidth: 0.5}} aria-label="Recreation Amenities">
        <TableHead>
          <TableRow> 
            <TableCell colSpan={2} align="center">Recreation Amenities</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Amenity Type</TableCell>
            <TableCell align="center">Available:</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell center>
                Hockey Rink:
              </TableCell>
              <TableCell align="center">{amenities.hockeyRink}</TableCell>
            </TableRow>

            <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell center>
              Skating Rink:
            </TableCell>
            <TableCell align="center">{amenities.skatingRink}</TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell center>
              Sports Fields:
            </TableCell>
            <TableCell align="center">{amenities.sportsPlayfields}</TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell center>
              Swimming Pool:
            </TableCell>
            <TableCell align="center">{amenities.swimmingPool}</TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell center>
              Tennis Courts:
            </TableCell>
            <TableCell align="center">{amenities.tennisCourts}</TableCell>
          </TableRow>

          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell center>
              Other:
            </TableCell>
            <TableCell align="center">{amenities.other}</TableCell>
          </TableRow>          
        </TableBody>
      </Table>
      </TableContainer>  

      {/* Community Facilities Table */}
      <TableContainer
            sx={{ 
        flexWrap: 'wrap', 


         maxWidth: 0.2,
        mt: 3, 
        justifyContent: 'space-between'
        }} > 
      <Table sx={{ display: 'inline', maxWidth: 0.5}} aria-label="Community Facilities">
        <TableHead>
          <TableRow>
            <TableCell colSpan={2} align="center">Community Facilities</TableCell>
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
            <TableCell align="center">{facilities.gamesRoom}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              Gym:
            </TableCell>
            <TableCell align="center">{facilities.gym}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            Indoor Fireplace:
            </TableCell>
            <TableCell align="center">{facilities.indoorFireplace}
            </TableCell>
          </TableRow>            
          <TableRow>
            <TableCell>
              Kitchen:
            </TableCell>
            <TableCell align="center">{facilities.kitchen}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            Lounge:
            </TableCell>
            <TableCell align="center">{facilities.lounge}
            </TableCell>
          </TableRow>            
          <TableRow>
            <TableCell>
              Meeting Rooms:
            </TableCell>
            <TableCell align="center">{facilities.meetingRooms}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            Outdoor BBQ:
            </TableCell>
            <TableCell align="center">{facilities.outdoorBBQ}
            </TableCell>
          </TableRow>            
          <TableRow>
            <TableCell>
              Kitchen:
            </TableCell>
            <TableCell align="center">{facilities.soundSystem}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
            Stage:
            </TableCell>
            <TableCell align="center">{facilities.stage}
            </TableCell>
          </TableRow>            
          <TableRow>
            <TableCell>
              Wheelchair Access:
            </TableCell>
            <TableCell align="center">{facilities.wheelchairAccess}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </TableContainer>
      
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
            

    
    </>
    )}
