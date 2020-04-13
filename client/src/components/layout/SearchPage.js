// Helper styles for demo

import { DisplayFormikState } from "./helperFormik";

import React from "react";
import { render } from "react-dom";
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";
import BigCalendar from "./Calendar/BigCalendar";

const SearchPage = () => (
    <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h1>Blank Page</h1>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="breadcrumb-item active">
                                Blank Page
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            {/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
            {/* Default box */}
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Title</h3>
                    <div className="card-tools">
                        <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="collapse"
                            data-toggle="tooltip"
                            title="Collapse"
                        >
                            <i className="fas fa-minus" />
                        </button>
                        <button
                            type="button"
                            className="btn btn-tool"
                            data-card-widget="remove"
                            data-toggle="tooltip"
                            title="Remove"
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                <div className="card-body">

                    <div className="app">

                        <Formik
                            initialValues={{ email: "" }}
                            onSubmit={async values => {
                                await new Promise(resolve => setTimeout(resolve, 500));
                                alert(JSON.stringify(values, null, 2));
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email()
                                    .required("Required")
                            })}
                        >
                            {props => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    dirty,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    handleReset
                                } = props;
                                return (
                                    <form onSubmit={handleSubmit}>
                                        <label htmlFor="location">Where do you work?</label>
                                        <Field
                                            component="select"
                                            id="location"
                                            name="location"
                                            multiple={true}
                                        >
                                            <option value="NY">New York</option>
                                            <option value="SF">San Francisco</option>
                                            <option value="CH">Chicago</option>
                                            <option value="OTHER">Other</option>
                                        </Field>
                                        <div className="label">
                                            What best describes you? (check all that apply)
                                        </div>
                                        <label>
                                            <Field type="checkbox" name="jobType" value="designer" />
                                            Designer
                                        </label>
                                        <label>
                                            <Field type="checkbox" name="jobType" value="developer" />
                                            Developer
                                        </label>
                                        <label>
                                            <Field type="checkbox" name="jobType" value="product" />
                                            Product Manager
                                        </label>
                                        <label htmlFor="email" style={{ display: "block" }}>
                                            Email
                                        </label>
                                        <input
                                            id="email"
                                            placeholder="Enter your email"
                                            type="text"
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={
                                                errors.email && touched.email
                                                    ? "text-input error"
                                                    : "text-input"
                                            }
                                        />
                                        {errors.email && touched.email && (
                                            <div className="input-feedback">{errors.email}</div>
                                        )}

                                        <button
                                            type="button"
                                            className="outline"
                                            onClick={handleReset}
                                            disabled={!dirty || isSubmitting}
                                        >
                                            Reset
                                        </button>
                                        <button type="submit" disabled={isSubmitting}>
                                            Submit
                                        </button>

                                        <DisplayFormikState {...props} />
                                    </form>
                                );
                            }}
                        </Formik>


                    </div>
                </div>
                {/* /.card-body */}
                <div className="card-footer">Footer</div>
                {/* /.card-footer*/}
            </div>
            {/* /.card */}
        </section>
        {/* /.content */}
    </div>

);

export default SearchPage;
