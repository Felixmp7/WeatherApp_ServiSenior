import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import './Customer.css';

const useStyles = makeStyles((theme) => ({
  clientName: {
    fontSize: "large",
    fontWeight: "100",
    fontStyle: "italic",
    textTransform: "none",
  },
  editButton: {
    fontSize: 12,
    color: '#444',
    "&:hover": {
      color: "#3f51b5",
    },
  },
  deleteButton: {
    fontSize: 12,
    color: '#444',
    "&:hover": {
      color: "#b5312f",
    },
  },
}));


const Client = ({dni, urlPath, clientName, editAction, delAction}) => {

  const classes = useStyles();

  return (
    <div className="Client-Card">
      <Button className={classes.clientName}>{clientName}</Button>
      <div className="Client-Interactions">
        <Link className="DefaultLinkStyles" to={`${urlPath}/:${dni}/edit`}>
          <Button className={classes.editButton}>Edit</Button>
        </Link>
        <Link className="DefaultLinkStyles" to={urlPath}>
          <Button className={classes.deleteButton}>Delete</Button>
        </Link>
      </div>
    </div>
  );
}

Client.propTypes = {
  dni: PropTypes.string,
  urlPath: PropTypes.string,
  clientName: PropTypes.string,
  // editAction: PropTypes.string,
  // delAction: PropTypes.string,
};

export default Client;
