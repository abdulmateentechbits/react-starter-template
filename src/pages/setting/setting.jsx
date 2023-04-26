import React from 'react';
import { Card, CardBody, CardTitle, Form, FormGroup, Label, Input } from 'reactstrap';

const Setting = () => {
    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Settings</CardTitle>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="Enter email" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Remember me
                            </Label>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Setting;
