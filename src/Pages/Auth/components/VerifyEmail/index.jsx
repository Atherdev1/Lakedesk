import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../../../../Axios";
import { Spinner } from "react-bootstrap";
import { CgDanger } from "react-icons/cg";

const VerifyEmail = () => {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useParams();

  const verifyEmail = async () => {
    setLoading(true);
    try {
      const response = await Axios.get(`/api/signup/verify/${token}`);
      setLoading(false);
      setVerified(true);
      navigate(`/auth/set-password/${response.data}`);
    } catch (error) {
      setLoading(false);
      setVerified(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    verifyEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className=" w-100 vh-100 d-flex flex-column justify-content-center align-items-center">
        {loading && (
          <>
            <Spinner animation="grow" variant="warning" />
            <h4 className="mt-4">Verifying Email</h4>
          </>
        )}
        {!loading && !verified && (
          <>
            <CgDanger color="red" size={70} />
            <h4>Email Verification Failed..!</h4>
          </>
        )}
      </div>
    </>
  );
};

export default VerifyEmail;
