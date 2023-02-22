import {ListItem} from './ListItem.stiled';
import { Button } from 'components/Common/Common.styled';
import { TiDeleteOutline } from 'react-icons/ti';
import PropTypes from "prop-types";

export const Contact = ({name, number, id, remove}) => {
    return (
        <ListItem>{name}: {number}
        <Button onClick={() => {remove(id)}}><TiDeleteOutline /> Delete</Button>
        </ListItem>
    )
}

Contact.propTypes = {
    id: PropTypes.string.isRequired, 
    name:PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    remove: PropTypes.func.isRequired
}