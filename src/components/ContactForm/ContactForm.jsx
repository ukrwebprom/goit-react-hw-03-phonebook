import { Button } from 'components/Common/Common.styled';
import { MdAddCircleOutline } from 'react-icons/md';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import styled from 'styled-components';
import PropTypes from "prop-types";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const Err = styled.div`
  color:red;
  font-size:14px;
  margin-top:10px;
`
const FormLayout = styled(Form)`
  padding: 10px;
  border: 1px solid #333;
  display: flex;
  align-items: flex-start;
  gap: 10px;
`
const Input = styled(Field)`
font-size: 18px;
padding:7px;
`

const validateSchema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.string().matches(phoneRegExp).required(),
})
const ContactForm = ({onSubmit}) => {

  const handleFormSubmit = (values, actions) => {
    onSubmit(values);
    actions.resetForm();
  }

    

    return (
      <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleFormSubmit}
      validationSchema={validateSchema}
      >
      <FormLayout >
      <div>
      <Input
            type="text"
            name="name"
            placeholder = "Name"
          />
          <ErrorMessage name="name"  render={msg => <Err>{msg}</Err>}/>
      </div>
      <div>
      <Input
            type="tel"
            name="number"
            placeholder = "Phone Number"
          />
          <ErrorMessage name="number" render={msg => <Err><HiOutlinePhoneMissedCall /> Wrong phone number</Err>} />
      </div>
      <Button type="submit"><MdAddCircleOutline />Add contact</Button>
      </FormLayout>
      </Formik>
    );

}

ContactForm.propTypes = {
  onSubmit:PropTypes.func.isRequired
}

export default ContactForm;
