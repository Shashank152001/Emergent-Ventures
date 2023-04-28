import React, { useState, useEffect } from "react";
import Tab from './Tab';
import { ReportingGetdata } from '../../Service/WfhrequestService';
import { useParams } from 'react-router-dom';
import { EditUpdate } from "../../Service/GetrequestService";


function EditRequest() {
    //get data
    const [ReportingGetData, SetReportingGetData] = useState([]);
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        ReportingGetdata()
            .then((ReportingRequestdata) => {


                SetReportingGetData(ReportingRequestdata.data[id]);
                // console.log(ReportingRequestdata.data)
            })
            .catch((e) => {
                console.log(e.message);
            });
    }, []);

    //put method
    const [formData, setFormData] = useState({
        userId: ReportingGetData.userId,
        requestId:ReportingGetData.id,
        Status: ''
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await EditUpdate(formData);
            console.log(response);
            // add code to show success message or redirect to another page
        } catch (error) {
            console.error(error);
            // add code to show error message to the user
        }
    };

    return (
        <>
            <div className="container">
                <span>Request Form</span>
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={handleSubmit} className="mt-4">

                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">UserId</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"

                                        value={ReportingGetData.userId}
                                        onChange={(event) =>
                                            setFormData({ ...formData, userId: event.target.value })
                                        } />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">HrmId</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"

                                        value={ReportingGetData.hrmid} />
                                </div>
                            </div><div className="form-group row">
                                <label className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        placeholder="Name"
                                        value={ReportingGetData.name} />
                                </div>
                            </div><div className="form-group row">
                                <label className="col-sm-2 col-form-label">Email</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        placeholder="Email"
                                        value={ReportingGetData.email} />
                                </div>
                            </div><div className="form-group row">
                                <label className="col-sm-2 col-form-label">Role</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        placeholder="Role"
                                        value={ReportingGetData.role} />
                                </div>
                            </div><div className="form-group row">
                                <label className="col-sm-2 col-form-label">RequestType</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        placeholder="RequestType"
                                        value={ReportingGetData.request} />
                                </div>
                            </div><div className="form-group row">
                                <label className="col-sm-2 col-form-label">Leave</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        placeholder="Leave"
                                        value={ReportingGetData.leave} />
                                </div>
                            </div><div className="form-group row">
                                <label className="col-sm-2 col-form-label">startDate</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        placeholder="startDate"
                                        value={ReportingGetData.startDate} />
                                </div>
                            </div><div className="form-group row">
                                <label className="col-sm-2 col-form-label">EndDate</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        placeholder="EndDate"
                                        value={ReportingGetData.endDate} />
                                </div>
                            </div><div className="form-group row">
                                <label className="col-sm-2 col-form-label">Reason</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control"
                                        placeholder="Reason"
                                        value={ReportingGetData.reason} />
                                </div>
                            </div>
                          
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">Status</label>
                                <div className="col-sm-10">
                                    <select className="form-select reportrequest"
                                        name="Status"
                                        value={formData.Status}
                                        onChange={(event) =>
                                            setFormData({ ...formData, Status: event.target.value })
                                        }
                                    >

                                        <option value="Approve" >Approve</option>
                                        <option value="Reject" >Reject</option>
                                    </select>
                                </div>

                            </div>
                            <div className="form-group row">
                                <button type="submit" className="btn btn-success mt-5">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EditRequest;