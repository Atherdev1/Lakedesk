import React from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FiMenu } from "react-icons/fi";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { landingMenuOPtions } from "../../Constants";
import { IoClose } from "react-icons/io5";
import brand from "../../../../../Assets/Landing/logo.png";
import { useNavigate } from "react-router-dom";

const DrawerMenu = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} role="button">
        <FiMenu />
      </div>

      <Offcanvas show={show} onHide={handleClose} style={{ width: "290px" }}>
        <Offcanvas.Header className="d-flex justify-content-between align-items-start ">
          <Offcanvas.Title className="d-flex align-items-center ">
            <Image src={brand} fluid width={80} />
            <h4>Lakedesk</h4>
          </Offcanvas.Title>
          <IoClose role="button" onClick={handleClose} />
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <ListGroup variant="flush" className="mt-3">
            {landingMenuOPtions?.map((menu) => {
              return (
                <ListGroup.Item
                  style={{ fontSize: "14px", fontWeight: "500" }}
                  action
                  onClick={() => navigate(menu.navigateTo)}
                >
                  <span>{menu.label}</span>
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default DrawerMenu;
