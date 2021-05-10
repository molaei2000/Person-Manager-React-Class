import React,{useContext} from "react";
import { Button } from "react-bootstrap";

import simpleContext from "./../../simpleContext";

const NewPerson = () => {

  const context = useContext(simpleContext)

    return (
        // <simpleContext.Consumer>
        //     {context => (
                <div className="m-2 p-2">
                    <form
                        className="form-inline justify-content-center"
                        onSubmit={event => event.preventDefault()}
                    >
                        <div className="input-group w-25">
                            <input
                                type="text"
                                placeholder="اسم بهم بده"
                                className="form-control"
                                onChange={context.setPerson}
                                value={context.state.person}
                            />
                            <div className="input-group-prepend">
                                <Button
                                    type="submit"
                                    variant="success"
                                    size="sm"
                                    className="fa fa-plus-square"
                                    onClick={context.handleNewPerson}
                                />
                            </div>
                        </div>
                    </form>
                </div>
        //    )}
        //</simpleContext.Consumer>
    );
};

export default NewPerson;
