
// const data = [
//   {
//     leaveType: "casual leave",
//     totalLeaves: 5,
//     remainingLeaves: 5
//   },
//   {
//     leaveType: "work form home",
//     totalLeaves: 5,
//     remainingLeaves: 5
//   }
// ];

// //  component
// data.map((item, index) => (
//   <div className="col-md-12 ">
//     <div className="d-flex" style={{ gap: "12px" }}>
//       <div style={{ width: 40, height: 40 }}>
//         <CircularProgressbar
//           value={
//             item?.totalLeaves -
//               item?.remainingLeaves || 0
//           }
//           styles={{
//             path: { stroke: "#8584e8" },
//             text: {
//               fontSize: "34px",
//               transform: "translateY(4px)",
//             },
//           }}
//           text={`${
//             item?.totalLeaves -
//               item?.remainingLeaves || 0
//           }`}
//           maxValue={item?.totalLeaves}
//         />
//       </div>

//       <div>
//         <span className="" style={{ fontSize: "14px" }}>
//           {item?.leaveType}
//           <p className="text-secondary" style={{ fontSize: "12px" }}>
//             Available {item?.remainingLeaves || 0}{" "}
//             days
//           </p>
//         </span>
//       </div>
//     </div>
//   </div>
// ));


// rest data

{/* <div className='col-md-12 '>  
<div className='d-flex' style={{ gap: '12px' }}>
    <div style={{ width: 40, height: 40 }}>
        <CircularProgressbar
            value={availableLeaveData?.totalCasualLeaves - availableLeaveData?.remainingCasualLeaves || 0}
            styles={{
                path: { stroke: '#ff6e6e' },
                text: {
                    fontSize: '34px',
                    transform: 'translateY(4px)'
                }
            }}
            text={`${availableLeaveData?.totalCasualLeaves - availableLeaveData?.remainingCasualLeaves || 0}`}
            maxValue={availableLeaveData?.totalCasualLeaves}
        />
    </div>
    <div>
        <span className='' style={{ fontSize: '14px' }}>
            Casual Leave
            <p className=' text-secondary' style={{ fontSize: '12px' }}>
                Available {availableLeaveData?.remainingCasualLeaves || 0} days
            </p>
        </span>
    </div>
</div>
 </div>

<div className='col-md-12 '>
    <div className='d-flex' style={{ gap: '12px' }}>
        <div style={{ width: 40, height: 40 }}>
            <CircularProgressbar
                value={availableLeaveData?.totalLeaveWithoutPays - availableLeaveData?.remainingLeaveWithoutPays || 0}
                styles={{
                    path: { stroke: '#1FC3B7' },
                    text: {
                        fontSize: '34px',
                        transform: 'translateY(4px)'
                    }
                }}
                text={`${availableLeaveData?.totalLeaveWithoutPays - availableLeaveData?.remainingLeaveWithoutPays || 0}`}
                maxValue={availableLeaveData?.totalLeaveWithoutPays}
            />
        </div>
        <div>
            <span className='' style={{ fontSize: '14px' }}>
                Leave Without pay
                <p className=' text-secondary' style={{ fontSize: '12px' }}>
                    Available {availableLeaveData?.remainingLeaveWithoutPays || 0} days
                </p>
            </span>
        </div>
    </div>
</div>

<div className='col-md-12 '>
    <div className='d-flex' style={{ gap: '12px' }}>
        <div style={{ width: 40, height: 40 }}>
            <CircularProgressbar
                value={availableLeaveData?.totalRestrictedHolidays - availableLeaveData?.remainingRestrictedHolidays || 0}
                styles={{
                    path: { stroke: '#8584e8' },
                    text: {
                        fontSize: '34px',
                        transform: 'translateY(4px)'
                    }
                }}
                text={`${availableLeaveData?.totalRestrictedHolidays - availableLeaveData?.remainingRestrictedHolidays || 0}`}
                maxValue={availableLeaveData?.totalRestrictedHolidays}
            />
        </div>

        <div>
            <span className='' style={{ fontSize: '14px' }}>
                Restricted Holidays
                <p className='text-secondary' style={{ fontSize: '12px' }}>
                    Available {availableLeaveData?.remainingRestrictedHolidays || 0} days
                </p>
            </span>
        </div>
    </div>
</div>

<div className='col-md-12 '>
    <div className='d-flex' style={{ gap: '12px' }}>
        <div style={{ width: 40, height: 40 }}>
            <CircularProgressbar
                value={availableLeaveData?.totalWorkFromHomes - availableLeaveData?.remainingWorkFromHomes || 0}
                styles={{
                    path: { stroke: '#1FC3B7' },
                    text: {
                        fontSize: '34px',
                        transform: 'translateY(4px)'
                    }
                }}
                text={`${availableLeaveData?.totalWorkFromHomes - availableLeaveData?.remainingWorkFromHomes || 0}`}
                maxValue={availableLeaveData?.totalWorkFromHomes}
            />
        </div>
        <div>
            <span className='' style={{ fontSize: '14px' }}>
                workFromHome
                <p className=' text-secondary' style={{ fontSize: '12px' }}>
                    Available {availableLeaveData?.remainingWorkFromHomes || 0} days
                </p>
            </span>
        </div>
    </div>
</div> */}
