import React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import ChallengeCard from "../../components/Cards/ChallengeCard";
import { Col, Row, Container } from "react-bootstrap";

const Wrapper = styled(Container)`
  padding: 1rem;
`;

const ChallengeWrapper = styled(Card)`
  position: relative;
  background-color: #f9fdff;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`;

const useStyles = makeStyles((theme) => ({
  button: {
    color: "black",
    width: 70,
  },
  icon: {
    fontSize: 40,
  },
}));

const Teams = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Row>
        <Col xs={8}>
          <ChallengeWrapper>
            <h3>Recent Challenge</h3>
            {[1, 2, 3, 4].map((x) => (
              <ChallengeCard />
            ))}
          </ChallengeWrapper>
        </Col>
        <Col>
          <Row>
            <ChallengeWrapper>
              <Row>
                <Col xs={3}>
                  <IconButton className={classes.button}>
                    <Avatar fontSize="large" className={classes.icon} />
                  </IconButton>
                </Col>
                <Col>
                  <h5>User Name</h5>
                  <h6>Description of the user itself</h6>
                </Col>
              </Row>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                nisi magni, eius impedit quidem sed id architecto modi dolorum,
                soluta ullam hic eligendi ipsa quam, quia quos accusantium.
                Officia, velit.
              </p>
            </ChallengeWrapper>
          </Row>
          <div style={{ height: "2rem" }} />
          <Row>
            <ChallengeWrapper>
                {
                    [1,2,3].map(x=>(
                        <Card>
                            <Row>
                                <Col xs={3}>
                                <IconButton className={classes.button}>
                                    <Avatar fontSize="large" className={classes.icon} />
                                </IconButton>
                                </Col>
                                <Col>
                                    <h6 style={{padding:"1.25rem 0"}}>Title of the team</h6>
                                </Col>
                            </Row>
                        </Card>
                    ))
                }
           </ChallengeWrapper>
          </Row>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Teams;

