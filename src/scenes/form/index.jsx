import { Box, Button, TextField, useTheme } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'
import { tokens } from '../../theme'

const Form = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const isNotMobile = useMediaQuery("(min-width:600px)")
    const phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: "",
    }
    const userSchema = yup.object().shape({
        firstName: yup.string().required("Required"),
        lastName: yup.string().required("Required"),
        email: yup.string().email("Email is not valid").required("Required"),
        contact: yup.string().matches(phoneRegEx, "Phone Number is not valid").required("Required"),
        address1: yup.string().required("Required"),
        address2: yup.string().required("Required"),
    })

    const handleFormSubmit = (values) => {
        console.log(values);
    }

    return (
        <>
            <Header title="CREATE USER" subtitle="Create a New User Profile" />
            <Box mx="12%">
                <Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={userSchema}>
                    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{
                                    "& > div": { gridColumn: isNotMobile ? undefined : "span 4" }
                                }}>
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="First Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.firstName}
                                        name="firstName"
                                        error={!!touched.firstName && !!errors.firstName}
                                        helperText={touched.firstName && errors.firstName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Last Name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.lastName}
                                        name="lastName"
                                        error={!!touched.lastName && !!errors.lastName}
                                        helperText={touched.lastName && errors.lastName}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                        name="email"
                                        error={!!touched.email && !!errors.email}
                                        helperText={touched.email && errors.email}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Contact Number"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.contact}
                                        name="contact"
                                        error={!!touched.contact && !!errors.contact}
                                        helperText={touched.contact && errors.contact}
                                        sx={{ gridColumn: "span 2" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Address 1"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address1}
                                        name="address1"
                                        error={!!touched.address1 && !!errors.address1}
                                        helperText={touched.address1 && errors.address1}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                    <TextField
                                        fullWidth
                                        variant="filled"
                                        type="text"
                                        label="Address 2"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.address2}
                                        name="address2"
                                        error={!!touched.address2 && !!errors.address2}
                                        helperText={touched.address2 && errors.address2}
                                        sx={{ gridColumn: "span 4" }}
                                    />
                                    <Button variant="contained" fullWidth type="submit" sx={{ backgroundColor: `${colors.greenAccent[500]} !important`, color: "#0C314C", fontWeight: "bold", gridColumn: "span 4", margin: "auto" }}>
                                        Submit
                                    </Button>
                                </Box>
                            </form>
                        )
                    }}
                </Formik>
            </Box>
        </>
    )
}

export default Form
